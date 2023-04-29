<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToProjectsTable extends Migration
{
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->unsignedBigInteger('financial_perspective_id')->nullable();
            $table->foreign('financial_perspective_id', 'financial_perspective_fk_8252913')->references('id')->on('financial_perspectives');
            $table->unsignedBigInteger('programme_id')->nullable();
            $table->foreign('programme_id', 'programme_fk_8177996')->references('id')->on('programmes');
        });
    }
}
