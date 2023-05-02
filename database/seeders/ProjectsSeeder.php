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
     * @return \Maatwebsite\Excel\Excel
     */
    public function run()
    {

        $import = new ProjectImport();
//        $import->onlySheets('CBC SER-MNE');

        Excel::import($import, dirname(__FILE__) . '/baza.xlsx');


    }
}
