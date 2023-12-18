<?php

namespace App\Imports;

use App\Models\City;
use App\Models\Country;
use App\Models\FinancialPerspective;
use App\Models\FundingType;
use App\Models\Programme;
use App\Models\Project;
use App\Models\Sector;
use DateTime;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class ProjectImport implements ToModel, WithHeadingRow, WithMultipleSheets, WithChunkReading
{

    public $programme;
    public $financialPerspective;

    public function __construct($programme = 'IPA', $financialPerspective = null)
    {
        $this->programme = $programme;
        $this->financialPerspective = $financialPerspective;
    }

    public function chunkSize(): int
    {
        return 1000; // Number of rows to read at a time
    }

//    use WithConditionalSheets;

    public function sheets(): array
    {
        return [
            // 'TAIEX' => new ProjectImport('TAIEX', '2007-2013'),
            // 'Horizon 2020' => new ProjectImport('Horizon 2020'),
            // 'Creative Europe new' => new ProjectImport('Creative Europe', '2014-2020'),
            // 'COSME' => new ProjectImport('COSME', '2014-2020'),
            // 'Erasmus+ new' => new ProjectImport('Erasumus+'),
            // 'WBIF new' => new ProjectImport('WBIF'),
            // 'CBC SER-MNE' => new ProjectImport('CBC SER-MNE'),
            // 'CBC MNE-ALB' => new ProjectImport('CBC MNE-ALB'),
            // 'CBC MNE-KOS ' => new ProjectImport('CBC MNE-KOS'),
            // 'CBC CRO-MNE' => new ProjectImport('CBC CRO-MNE'),
            // 'CBC BIH-MNE ' => new ProjectImport('CBC BIH-MNE'),
            // 'Interreg Adrion' => new ProjectImport('Interreg Adrion'),
            // 'Interreg Mediterranean' => new ProjectImport('Interreg Mediterranean', '2014-2020'),
            // 'Interreg CBC CRO-BIH-MNE new' => new ProjectImport('Interreg CBC CRO-BIH-MNE'),
            // 'Interreg IPA ITA-ALB-MNE' => new ProjectImport('Interreg IPA ITA-ALB-MNE'),
            // 'IPA III' => new ProjectImport('IPA', '2021-2027'),
            // ' IPA II' => new ProjectImport('IPA', '2014-2020'),
            'IPA I' => new ProjectImport('IPA', '2007-2013'),
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
            'commitment_year' => $this->getYearFromDate($row['commitment_year'] ?? null),
            'contract_year' => array_key_exists('contract_year', $row) ? $this->get4NumberFromString($row['contract_year']) : null,
            'start_date' => $this->parseDateString($row['start_date'] ?? null),
            'end_date' => $this->parseDateString($row['start_date'] ?? null),
            'contract_number' => $row['contract_number'] ?? "null",
            'contracting_party' => $row['contracting_party'] ?? null,
            'contracted_eu_contribution' => $this->getNumberFromString($row['contracted_eu_contribution'] ?? null),

            'co_funding' => $row['co_funding_or_loan'] ?? null,
            'loan' => $row['co_funding_or_loan'] ?? null,
            'total_euro_value' => $this->getNumberFromString($row['total_euro_value'] ?? null),
            'short_description' => $row['short_description'] ?? "null",
            'end_beneficiary' => $row['partners'] ?? null,
            'keywords' => $row['keywords'] ?? null,
            'links_to_project_page' => $this->formatLinks($row['links_to_project_page'] ?? null),
            'show' => true
        ]);

        // If row with name budget exists then add it as total_euro_value
        if (array_key_exists('budget', $row) && $row['budget'] != null) {
            $project->total_euro_value = $this->getNumberFromString($row['budget']);
        }

        // Check if there is 'Sector 1' column in the excel file and if it is not empty then set the sector_id to the sector_id by the sector name
        if (array_key_exists('sector_1', $row) && $row['sector_1'] != null) {
            // Sector is hasMany relationship with Project model, so attach the sector to the project
            $project->sector()->attach($this->getSectorId($row['sector_1']));
        }
        if (array_key_exists('sector', $row) && $row['sector'] != null) {
            // Sector is hasMany relationship with Project model, so attach the sector to the project
            $project->sector()->attach($this->getSectorId($row['sector']));
        }
        if (array_key_exists('sector_2', $row) && $row['sector_2'] != null) {
            $project->sector()->attach($this->getSectorId($row['sector_2']));
        }
        if (array_key_exists('sector_3', $row) && $row['sector_3'] != null) {
            $project->sector()->attach($this->getSectorId($row['sector_3']));
        }

        if ( array_key_exists('municipality', $row) ){

        $municipalities = preg_split('/, | and |, /', $row['municipality']);


        foreach ($municipalities as $municipality) {
            $municipalityModel = City::where('name', $municipality)->first();
            if (!$municipalityModel) {
                // Mock model with id 32
                // Ensure this aligns with the structure of your City model
                // $municipalityModel = new City(['id' => 32]); // Replace 'City' with your actual model class
                $municipalityModel = City::where('name', 'Podgorica')->first();
            }
            
            $project->municipality()->syncWithoutDetaching($municipalityModel->id);
        }
        }


        if ( array_key_exists('contract_type', $row) ) {

            $contractTypes = preg_split('/, | and |, /', $row['contract_type']);


            foreach ($contractTypes as $contractType) {
                $contractTypeModel = FundingType::where('name', $contractType)->first();
                if (!$contractTypeModel) {
                    $contractTypeModel = FundingType::first();
                }
                $project->contractType()->syncWithoutDetaching($contractTypeModel->id);
            }

        }

        if (array_key_exists('participating_countries', $row)) {

            // Regex for splitting by comma, semicolon, 'and', and spaces
            $participatingCountriesCodes = preg_split('/,\s*|;\s*|\s+and\s+/', $row['participating_countries']);

            foreach ($participatingCountriesCodes as $country) {
                $country = trim($country);  // Trim any extra spaces
                $countryModel = Country::where('code', strtoupper($country))->first();

                if (!$countryModel) {
                    // Handle case when the country is not found
                    continue;  // Skip this loop iteration
                }

                // Attach the country to the project without detaching any existing countries.
                $project->country()->syncWithoutDetaching([$countryModel->id]);
            }
        }




        if ( $this->financialPerspective){
            $fp = FinancialPerspective::where('perspective', $this->financialPerspective)->first();
            $project->financial_perspective_id = $fp->id;
        }

        return $project;
    }


    public function getYearFromDate($date)
    {
        if (!$date) {
            return null;
        }
//        echo($date . "\n");
        return substr($date, -4);
    }

    public function formatLinks($cellValue)
    {
        // Initialize an empty array to hold the URLs
        $urls = [];

//        dd($cellValue);

        // Check if the cell value contains new line characters or commas
        $delimiters = [',', '\n', ' '];
        $possibleLinks = preg_split('/('.implode('|', array_map('preg_quote', $delimiters)).')/', $cellValue);
        // Split possiblLinks by \n
       $possibleLinks = preg_split('/\n/', $possibleLinks[0]);

        foreach ($possibleLinks as $possibleLink) {
            $possibleLink = trim($possibleLink);

            // If the string already starts with 'http', assume it's a full URL
            if (strpos($possibleLink, 'http') === 0) {
                $urls[] = $possibleLink;
            } else {
                // Otherwise, try to extract URLs via regex
                preg_match_all('/https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/', $possibleLink, $matches);
                $urls = array_merge($urls, $matches[0]);
            }
        }

        // Convert URLs to HTML <a> tags
        $htmlLinks = array_map(function($url) {
            return "<a href=\"{$url}\" target=\"_blank\">{$url}</a>";
        }, $urls);

        return implode(', ', $htmlLinks);
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
        // Check if dateString is an integer
        if (is_numeric($dateString)) {
            // It's an Excel date, calculate real date
            // Carbon's createFromFormat function allows us to create a date from 'Y-d-m'
            return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($dateString))->format('Y-m-d');
        } else {
            // Original parsing code
            $dateFormats = ['d-M-Y', 'j-M-Y', 'd/m/Y', 'd.m.Y', 'm/d/Y', 'm.d.Y', 'Y-m-d', 'Y/m/d', 'Y.m.d', 'Y-d-m', 'Y/d/m', 'Y.d.m'];

            $date = false;

            foreach ($dateFormats as $format) {
                $date = DateTime::createFromFormat($format, $dateString);
                if ($date !== false) {
                    break;
                }
            }

            return $date ? $date->format('Y-m-d') : null;
        }
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
