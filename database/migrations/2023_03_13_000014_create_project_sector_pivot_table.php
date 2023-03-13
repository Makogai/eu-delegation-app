<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectSectorPivotTable extends Migration
{
    public function up()
    {
        Schema::create('project_sector', function (Blueprint $table) {
            $table->unsignedBigInteger('project_id');
            $table->foreign('project_id', 'project_id_fk_8177997')->references('id')->on('projects')->onDelete('cascade');
            $table->unsignedBigInteger('sector_id');
            $table->foreign('sector_id', 'sector_id_fk_8177997')->references('id')->on('sectors')->onDelete('cascade');
        });
    }
}
