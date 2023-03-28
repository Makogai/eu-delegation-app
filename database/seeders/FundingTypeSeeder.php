<?php

namespace Database\Seeders;

use App\Models\FundingType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FundingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fundingTypes = [
            'Grant',
            'Loan',
            'Equity',
        ];

        foreach ($fundingTypes as $fundingType) {
            FundingType::create([
                'name' => $fundingType,
            ]);
        }
    }
}
