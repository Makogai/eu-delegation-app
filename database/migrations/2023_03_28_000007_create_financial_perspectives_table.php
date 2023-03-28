<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFinancialPerspectivesTable extends Migration
{
    public function up()
    {
        Schema::create('financial_perspectives', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('perspective');
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
