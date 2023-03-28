<?php

namespace Database\Seeders;

use App\Imports\ProjectImport;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Excel::import(new ProjectImport, 'cpc.xlsx');

    }
}
