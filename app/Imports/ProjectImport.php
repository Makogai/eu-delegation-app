<?php

namespace App\Imports;

use App\Models\City;
use App\Models\FinancialPerspective;
use App\Models\FundingType;
use App\Models\Programme;
use App\Models\Project;
use App\Models\Sector;
use DateTime;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ProjectImport implements ToModel, WithHeadingRow, WithMultipleSheets
{

    public $programme;

    public function __construct($programme = 'IPA')
    {
        $this->programme = $programme;
    }

//    use WithConditionalSheets;

    public function sheets(): array
    {
        return [
            'CBC SER-MNE' => new ProjectImport('CBC SER-MNE'),
            ' IPA II' => new ProjectImport('IPA'),
            'IPA I' => new ProjectImport('IPA'),
            'Erasmus+ new' => new ProjectImport('Erasumus+'),
            'WBIF new' => new ProjectImport('WBIF'),
        ];
    }
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        if(!array_filter($row)) {
            return null;
        }
        $project = Project::create([
//            'assistance_framework' => $row['assistance_framework'] ?? "null",
            'programme_id' => $this->getProgrammeId($this->programme),
            'contract_title' => $row['contract_title'] ?? "null",
            'commitment_year' => $row['commitment_year'] ?? null,
            'contract_year' => $this->get4NumberFromString($row['contract_year']),
            'start_date' => $this->parseDateString($row['start_date'] ?? null),
            'end_date' => $row['end_date'] ?? null,
            'contract_number' => $row['contract_number'] ?? "null",
            'contracting_party' => $row['contracting_party'] ?? null,
            'contracted_eu_contribution' => $this->getNumberFromString($row['contracted_eu_contribution'] ?? null),

            'co_funding' => $row['co_funding_or_loan'] ?? null,
            'loan' => $row['co_funding_or_loan'] ?? null,
            'total_euro_value' => $this->getNumberFromString($row['total_euro_value'] ?? null),
            'short_description' => $row['short_description'] ?? "null",
            'end_beneficiary' => $row['partners'] ?? null,
            'keywords' => $row['keywords'] ?? null,
            'links_to_project_page' => $row['links_to_project_page'] ?? null,
        ]);

        // Check if there is 'Sector 1' column in the excel file and if it is not empty then set the sector_id to the sector_id by the sector name
        if (array_key_exists('sector_1', $row) && $row['sector_1'] != null) {
            // Sector is hasMany relationship with Project model, so attach the sector to the project
            $project->sector()->attach($this->getSectorId($row['sector_1']));
        }
        if (array_key_exists('sector_2', $row) && $row['sector_2'] != null) {
            $project->sector()->attach($this->getSectorId($row['sector_2']));
        }
        if (array_key_exists('sector_3', $row) && $row['sector_3'] != null) {
            $project->sector()->attach($this->getSectorId($row['sector_3']));
        }

        $municipalities = preg_split('/, | and |, /', $row['municipality']);


        foreach ($municipalities as $municipality) {
            $municipalityModel = City::where('name', $municipality)->first();
            if (!$municipalityModel) {
                $municipalityModel = City::where('name', 'Podgorica')->first();
            }
            $project->municipality()->syncWithoutDetaching($municipalityModel->id);
        }

        $contractTypes = preg_split('/, | and |, /', $row['contract_type']);


        foreach ($contractTypes as $contractType) {
            $contractTypeModel = FundingType::where('name', $contractType)->first();
            if (!$contractTypeModel) {
                $contractTypeModel = FundingType::first();
            }
            $project->contractType()->syncWithoutDetaching($contractTypeModel->id);
        }

        return $project;
    }

    // get only 4 digit number from string
    public function get4NumberFromString($string)
    {
        $matches = [];
        preg_match('/\d{4}/', $string, $matches);
        if(isset($matches[0])) {
            return $matches[0];
        } else {
            return null;
        }
    }
    // Get number from string
    public function getNumberFromString($string)
    {
        preg_match('/\d+/', $string, $matches);
        if(isset($matches[0])) {
            return $matches[0];
        } else {
            return null;
        }
    }
    // get date from date string which is not in consistent format, if the date is not in the correct format, return current date
    function parseDateString($dateString)
    {
        $dateFormats = ['d-M-Y', 'j-M-Y', 'd/m/Y', 'd.m.Y'];
        $date = false;

        foreach ($dateFormats as $format) {
            $date = DateTime::createFromFormat($format, $dateString);
            if ($date !== false) {
                break;
            }
        }

        return $date ? $date->format('Y-m-d') : null;
    }

    // get sector_id from sector name
    public function getSectorId($sectorName)
    {
        $sector = Sector::whereRaw('lower(name) = ?', strtolower($sectorName))->first();
        if (!$sector) {
            return null;
        }
        return $sector->id;
    }

    // Get financial perspective
    public function getFinancialPerspective($perspective)
    {
        preg_match('/\d{4}-\d{4}/', $perspective, $matches); // extract the year range using regex
        $yearRange = $matches[0];
        $financialPerspective = FinancialPerspective::where('year_range', $yearRange)->first();

        // If the financial perspective does not exist, return null
        if (!$financialPerspective) {
            return null;
        }
        return $financialPerspective->id;

    }

    // Get programme_id from programme name, if name contains 'IPA' then programme_id = 1, if name contains 'UNION' then programme_id = 2, else programme_id = 3
    public function getProgrammeId($programmeName)
    {
        $programme = Programme::query()->where('name', $programmeName)->first();
        if (!$programme) {
            return null;
        }
        return $programme->id;
////        dd($programmeName);
//        if (str_contains($programmeName, 'IPA-CBC SER-MNE')) {
////            dd($programmeName);
//            return 7;
//        } elseif (str_contains($programmeName, 'UNION')) {
//            return 2;
//        } else {
//            return 30;
//        }
    }

    // Get contract type id from contract type name from the contract_types table
    public function getContractTypeId($contractTypeName)
    {
        $contractType = FundingType::where('name', $contractTypeName)->first();
        if (!$contractType) {
            return null;
        }
        return $contractType->id;
    }

    // Get municipality id from municipality name from the municipalities table
    public function getMunicipalityId($municipalityName)
    {
        $municipality = City::where('name', $municipalityName)->first();
        if (!$municipality) {
            return null;
        }
        return $municipality->id;
    }
}
