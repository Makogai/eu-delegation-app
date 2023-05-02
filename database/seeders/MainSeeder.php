<?php

namespace Database\Seeders;

use App\Models\FinancialPerspective;
use App\Models\FundingType;
use App\Models\Programme;
use App\Models\Sector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //########################### FUNDING TYPES ###########################

        $fundingTypes = [
            'Service',
            'Grant',
            'Works',
            'Framework contract'
        ];

        foreach ($fundingTypes as $fundingType) {
            FundingType::create([
                'name' => $fundingType,
            ]);
        }


        //########################### SECTORS ###########################

        $sectors = [
            'AGRICULTURE AND RURAL DEVELOPMENT (IPARD), FOOD SAFETY AND VETERINARY',
            'BUSINESS, ECONOMY AND INNOVATION',
            'CIVIL SOCIETY',
            'CONNECTIVITY AND TRANSPORT',
            'COVID-19 SUPPORT',
            'CROSS-BORDER AND REGIONAL COOPERATION',
            'CUSTOMS AND TAXATION',
            'EDUCATION, EMPLOYMENT, AND SOCIAL POLICY',
            'ENVIRONMENT AND CLIMATE CHANGE',
            'HEALTH',
            'HUMAN RIGHTS, SUPPORT TO REFUGEES AND IDPS',
            'MEDIA AND CULTURE',
            'RULE OF LAW',
            'PUBLIC ADMINISTRATION REFORM',
            'DEMOCRACY AND GOVERNANCE'
        ];

        foreach ($sectors as $sector) {
            Sector::create([
                'name' => $sector,
            ]);
        }


        //########################### FINANCIAL PERSPECTIVE ###########################

        $financialPerspectives = [
            '2007-2013',
            '2014-2020',
            '2021-2027',
        ];

        foreach ($financialPerspectives as $financialPerspective) {
            FinancialPerspective::create([
                'perspective' => $financialPerspective,
            ]);
        }


        //########################### PROGRAMMES ###########################

        $programmes = [
            'Interreg Adrion',
            'Interreg Mediterranean',
            'Interreg CBC CRO-BIH-MNE',
            'Interreg IPA ITA-ALB-MNE',
            'Interreg IPA SOUTH ADRIATIC',
            'CBC MNE-ALB',
            'CBC SER-MNE',
            'CBC MNE-KOS',
            'CBC CRO-MNE',
            'CBC BIH-MNE',
            'Erasumus+',
            'Horizon 2020',
            'Horizon Europe',
            'COSME',
            'Creative Europe',
            'Europe for Citizens',
            'WBIF',
            'ISA',
            'EaSI',
            'Fiscalis',
            'Customs',
            'Digital Europe',
            'EU For health',
            'CERV',
            'Single market',
            'TAIEX',
            'RCC',
            'RESPA',
            'Twinning',
            'IPA'
        ];

        foreach ($programmes as $programme) {
            Programme::create([
                'name' => $programme,
            ]);
        }
    }
}
