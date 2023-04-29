<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFundingTypeProjectPivotTable extends Migration
{
    public function up()
    {
        Schema::create('funding_type_project', function (Blueprint $table) {
            $table->unsignedBigInteger('project_id');
            $table->foreign('project_id', 'project_id_fk_8405806')->references('id')->on('projects')->onDelete('cascade');
            $table->unsignedBigInteger('funding_type_id');
            $table->foreign('funding_type_id', 'funding_type_id_fk_8405806')->references('id')->on('funding_types')->onDelete('cascade');
        });
    }
}
