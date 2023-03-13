<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'projects';

    protected $dates = [
        'start_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'assistance_framework',
        'programme.name',
        'contract_title',
        'contract_type.name',
        'commitment_year',
        'contract_year',
        'start_date',
        'end_date',
        'contract_number',
        'contracting_party',
        'contracted_eu_contribution',
        'co_funding_or_loan',
        'total_euro_value',
        'co_funding_party',
        'short_description',
        'end_beneficiary',
        'keywords',
        'links_to_project_page',
    ];

    protected $fillable = [
        'assistance_framework',
        'programme_id',
        'contract_title',
        'contract_type_id',
        'commitment_year',
        'contract_year',
        'start_date',
        'end_date',
        'contract_number',
        'contracting_party',
        'contracted_eu_contribution',
        'co_funding_or_loan',
        'total_euro_value',
        'co_funding_party',
        'short_description',
        'end_beneficiary',
        'keywords',
        'links_to_project_page',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'assistance_framework',
        'programme.name',
        'sector.name',
        'contract_title',
        'contract_type.name',
        'commitment_year',
        'contract_year',
        'start_date',
        'end_date',
        'contract_number',
        'contracting_party',
        'contracted_eu_contribution',
        'co_funding_or_loan',
        'total_euro_value',
        'co_funding_party',
        'municipality.name',
        'short_description',
        'end_beneficiary',
        'keywords',
        'links_to_project_page',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function programme()
    {
        return $this->belongsTo(Programme::class);
    }

    public function sector()
    {
        return $this->belongsToMany(Sector::class);
    }

    public function contractType()
    {
        return $this->belongsTo(FundingType::class);
    }

    public function getStartDateAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function municipality()
    {
        return $this->belongsToMany(City::class);
    }
}
