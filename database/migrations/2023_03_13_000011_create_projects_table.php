<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('assistance_framework');
            $table->string('contract_title');
            $table->integer('commitment_year')->nullable();
            $table->integer('contract_year')->nullable();
            $table->date('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->string('contract_number');
            $table->string('contracting_party')->nullable();
            $table->decimal('contracted_eu_contribution', 15, 2)->nullable();
            $table->decimal('co_funding_or_loan', 15, 2)->nullable();
            $table->decimal('total_euro_value', 15, 2)->nullable();
            $table->string('co_funding_party')->nullable();
            $table->longText('short_description');
            $table->string('end_beneficiary')->nullable();
            $table->string('keywords')->nullable();
            $table->string('links_to_project_page')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
