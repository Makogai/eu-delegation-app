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

    protected $casts = [
        'show' => 'boolean',
    ];

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
        'show',
        'financial_perspective.perspective',
    ];

    protected $filterable = [
        'id',
        'assistance_framework',
        'programme.name',
        'sector.name',
        'contract_title',
        'contractType.name',
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
        'financial_perspective.perspective',
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
        'show',
        'created_at',
        'updated_at',
        'deleted_at',
        'financial_perspective_id',
    ];

    // Scope projectFilters - Filter by municipality, sector, or programme
    public function scopeProjectFilters($query, $request)
    {
        // Filtering by municipality, sector, or programme
        if ($request->has('municipality')) {
            $query->whereHas('municipality', function ($query) use ($request) {
                $query->whereIn('id', $request->municipality);
            });
        }

        if ($request->has('sector')) {
            $query->whereHas('sector', function ($query) use ($request) {
                $query->whereIn('id', $request->sector);
            });
        }

        if ($request->has('programme')) {
            $query->whereHas('programme', function ($query) use ($request) {
                $query->where('id', $request->programme);
            });
        }

        // Search using the 's' parameter
        if ($request->has('s') && !empty($request->s)) {
            $searchTerm = $request->s;
            $query->where(function ($query) use ($searchTerm) {
                foreach ($this->filterable as $filterableField) {
                    // Split the field into parts to identify relationships
                    $fieldParts = explode('.', $filterableField);

                    // If there's a relationship
                    if (count($fieldParts) > 1) {
                        $relation = $fieldParts[0];
                        $relatedField = $fieldParts[1];

                        $query->orWhereHas($relation, function ($query) use ($relatedField, $searchTerm) {
                            $query->where($relatedField, 'LIKE', '%' . $searchTerm . '%');
                        });
                    } else {
                        $query->orWhere($filterableField, 'LIKE', '%' . $searchTerm . '%');
                    }
                }
            });
        }


        // Sorting using the 'sort' and 'order' parameters
        if ($request->has('sort') && in_array($request->sort, $this->orderable)) {
            $order = $request->has('order') ? $request->order : 'asc';
            $query->orderBy($request->sort, $order);
        }

        // Pagination using the 'limit', 'offset', and 'page' parameters
        if ($request->has('limit') && $request->has('offset')) {
            $limit = $request->limit;
            $offset = $request->offset;
            $query->limit($limit)->offset($offset);
        } elseif ($request->has('limit') && $request->has('page')) {
            $limit = $request->limit;
            $page = $request->page;
            $query->paginate($limit, ['*'], 'page', $page);
        }

        return $query;
    }

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

    public function financialPerspective()
    {
        return $this->belongsTo(FinancialPerspective::class);
    }
}
