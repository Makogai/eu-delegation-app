<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CountryCitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Add Montenegro and its cities
        $country = \App\Models\Country::create([
            'name' => 'Montenegro',
            'code' => 'ME'
        ]);

        $europeanCountries = [
            ['name' => 'Albania', 'code' => 'AL'],
            ['name' => 'Andorra', 'code' => 'AD'],
            ['name' => 'Armenia', 'code' => 'AM'],
            ['name' => 'Austria', 'code' => 'AT'],
            ['name' => 'Azerbaijan', 'code' => 'AZ'],
            ['name' => 'Belarus', 'code' => 'BY'],
            ['name' => 'Belgium', 'code' => 'BE'],
            ['name' => 'Bosnia and Herzegovina', 'code' => 'BiH'],
            ['name' => 'Bulgaria', 'code' => 'BG'],
            ['name' => 'Croatia', 'code' => 'HR'],
            ['name' => 'Cyprus', 'code' => 'CY'],
            ['name' => 'Czech Republic', 'code' => 'CZ'],
            ['name' => 'Denmark', 'code' => 'DK'],
            ['name' => 'Estonia', 'code' => 'EE'],
            ['name' => 'Finland', 'code' => 'FI'],
            ['name' => 'France', 'code' => 'FR'],
            ['name' => 'Georgia', 'code' => 'GE'],
            ['name' => 'Germany', 'code' => 'DE'],
            ['name' => 'Greece', 'code' => 'GR'],
            ['name' => 'Hungary', 'code' => 'HU'],
            ['name' => 'Iceland', 'code' => 'IS'],
            ['name' => 'Ireland', 'code' => 'IE'],
            ['name' => 'Italy', 'code' => 'IT'],
            ['name' => 'Kazakhstan', 'code' => 'KZ'],
            ['name' => 'Latvia', 'code' => 'LV'],
            ['name' => 'Liechtenstein', 'code' => 'LI'],
            ['name' => 'Lithuania', 'code' => 'LT'],
            ['name' => 'Luxembourg', 'code' => 'LU'],
            ['name' => 'Malta', 'code' => 'MT'],
            ['name' => 'Moldova', 'code' => 'MD'],
            ['name' => 'Monaco', 'code' => 'MC'],
            ['name' => 'Netherlands', 'code' => 'NL'],
            ['name' => 'North Macedonia', 'code' => 'MK'],
            ['name' => 'Norway', 'code' => 'NO'],
            ['name' => 'Poland', 'code' => 'PL'],
            ['name' => 'Portugal', 'code' => 'PT'],
            ['name' => 'Romania', 'code' => 'RO'],
            ['name' => 'Russia', 'code' => 'RU'],
            ['name' => 'San Marino', 'code' => 'SM'],
            ['name' => 'Serbia', 'code' => 'RS'],
            ['name' => 'Slovakia', 'code' => 'SK'],
            ['name' => 'Slovenia', 'code' => 'SI'],
            ['name' => 'Spain', 'code' => 'ES'],
            ['name' => 'Sweden', 'code' => 'SE'],
            ['name' => 'Switzerland', 'code' => 'CH'],
            ['name' => 'Turkey', 'code' => 'TR'],
            ['name' => 'Ukraine', 'code' => 'UA'],
            ['name' => 'United Kingdom', 'code' => 'GB'],
            ['name' => 'Vatican City', 'code' => 'VA']
        ];

        foreach ($europeanCountries as $countryData) {
            \App\Models\Country::create($countryData);
        }


        $cities = [
            [
                "name" => "Andrijevica",
                "region" => "north"
            ],
            [
                "name" => "Bar",
                "region" => "south"
            ],
            [
                "name" => "Berane",
                "region" => "north"
            ],
            [
                "name" => "Bijelo Polje",
                "region" => "north"
            ],
            [
                "name" => "Budva",
                "region" => "south"
            ],
            [
                "name" => "Cetinje",
                "region" => "north"
            ],
            [
                "name" => "Danilovgrad",
                "region" => "central"
            ],
            [
                "name" => "Gusinje",
                "region" => "north"
            ],
            [
                "name" => "Herceg Novi",
                "region" => "south"
            ],
            [
                "name" => "Kolašin",
                "region" => "north"
            ],
            [
                "name" => "Kotor",
                "region" => "south"
            ],
            [
                "name" => "Mojkovac",
                "region" => "north"
            ],
            [
                "name" => "Nikšić",
                "region" => "central"
            ],
            [
                "name" => "Petnjica",
                "region" => "north"
            ],
            [
                "name" => "Plav",
                "region" => "north"
            ],
            [
                "name" => "Pljevlja",
                "region" => "north"
            ],
            [
                "name" => "Plužine",
                "region" => "north"
            ],
            [
                "name" => "Podgorica",
                "region" => "central"
            ],
            [
                "name" => "Rožaje",
                "region" => "north"
            ],
            [
                "name" => "Šavnik",
                "region" => "north"
            ],
            [
                "name" => "Tivat",
                "region" => "south"
            ],
            [
                "name" => "Tuzi",
                "region" => "central"
            ],
            [
                "name" => "Ulcinj",
                "region" => "south"
            ],
            [
                "name" => "Žabljak",
                "region" => "north"
            ],
            [
                "name" => "National park Skadar Lake",
                "region" => "south"
            ],
            [
                "name" => "National park Lovćen",
                "region" => "central"
            ],
            [
                "name" => "National park Durmitor",
                "region" => "north"
            ],
            [
                "name" => "National park Biogradska Gora",
                "region" => "north"
            ],
            [
                "name" => "National park Prokletije",
                "region" => "north"
            ],
            [
                "name" => "Northern region",
                "region" => "north"
            ],
            [
                "name" => "Coastal region",
                "region" => "south"
            ],
            [
                "name" => "Montenegro",
                "region" => "north"
            ],
        ];

        foreach ($cities as $city) {
            $country->cities()->create($city);
        }
    }
}
