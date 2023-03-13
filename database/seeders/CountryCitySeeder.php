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
        ]);


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
            ]
        ];

        foreach ($cities as $city) {
            $country->cities()->create($city);
        }
    }
}
