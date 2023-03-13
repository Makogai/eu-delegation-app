<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCityProjectPivotTable extends Migration
{
    public function up()
    {
        Schema::create('city_project', function (Blueprint $table) {
            $table->unsignedBigInteger('project_id');
            $table->foreign('project_id', 'project_id_fk_8178010')->references('id')->on('projects')->onDelete('cascade');
            $table->unsignedBigInteger('city_id');
            $table->foreign('city_id', 'city_id_fk_8178010')->references('id')->on('cities')->onDelete('cascade');
        });
    }
}
