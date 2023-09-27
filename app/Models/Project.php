<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use DateTime;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\SoftDeletingScope;

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
        'contract_value_montenegro',
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
        'contract_value_montenegro',
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
        'financial_perspective_id',
        'programme_id',
        'contract_title',
        'commitment_year',
        'contract_year',
        'start_date',
        'end_date',
        'contract_number',
        'contracting_party',
        'end_beneficiary',
        'contracted_eu_contribution',
        'contract_value_montenegro',
        'co_funding',
        'loan',
        'total_euro_value',
        'short_description',
        'keywords',
        'links_to_project_page',
        'show',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $appends =[ 'duration', 'year', 'end_year'];


//    public static function bootSoftDeletes()
//    {
//        static::addGlobalScope(new SoftDeletingScope());
//
//        // When a Project model is being deleted...
//        static::deleting(function($project) {
//            // ...also delete (or soft delete) all related models
//            $project->programme()->delete();
//            $project->sector()->delete();
//            $project->contractType()->delete();
//            $project->municipality()->delete();
//            $project->financialPerspective()->delete();
//        });
//
//        // When a Project model is being restored...
//        static::restoring(function($project) {
//            // ...also restore all related models
//            $project->programme()->restore();
//            $project->sector()->restore();
//            $project->contractType()->restore();
//            $project->municipality()->restore();
//            $project->financialPerspective()->restore();
//        });
//    }

    // Make the duration attribute format: start_date - end_date
    public function getDurationAttribute()
    {
        $startDate = $this->start_date ? $this->start_date : 'N/A';

//        $startDate = "N/A";
        // If end_date is not null and is a valid date, format it. Otherwise, set it to 'N/A'

        $endDate = $this->end_date;

        return $startDate . ' - ' . $endDate;
    }


    public function getLinksToProjectsAttribute($value) {
        if (str_contains($value, '<a ')) {
            return $value;
        }else {
            // Initialize an empty array to hold the URLs
            $urls = [];

//        dd($cellValue);

            // Check if the cell value contains new line characters or commas
            $delimiters = [',', '\n', ' '];
            $possibleLinks = preg_split('/('.implode('|', array_map('preg_quote', $delimiters)).')/', $value);
            // Split possiblLinks by \n
            $possibleLinks = preg_split('/\n/', $possibleLinks[0]);

            foreach ($possibleLinks as $possibleLink) {
                $possibleLink = trim($possibleLink);

                // If the string already starts with 'http', assume it's a full URL
                if (strpos($possibleLink, 'http') === 0) {
                    $urls[] = $possibleLink;
                } else {
                    // Otherwise, try to extract URLs via regex
                    preg_match_all('/https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/', $possibleLink, $matches);
                    $urls = array_merge($urls, $matches[0]);
                }
            }

            // Convert URLs to HTML <a> tags
            $htmlLinks = array_map(function($url) {
                return "<a href=\"{$url}\" target=\"_blank\">{$url}</a>";
            }, $urls);

            return implode(', ', $htmlLinks);
        }
    }


    // Scope projectFilters - Filter by municipality, sector, or programme
    public function scopeProjectFilters($query, $request)
    {
        // Filtering by municipality, sector, or programme
        if ($request->has('municipality')) {
            $query->whereHas('municipality', function ($query) use ($request) {
                $query->whereIn('id', $request->municipality);
            });
        }

        if ($request->has('country')) {
            $query->whereHas('country', function ($query) use ($request) {
                $query->whereIn('id', $request->country);
            });
        }

        if ($request->has('sector')) {
            $query->whereHas('sector', function ($query) use ($request) {
                $query->whereIn('id', $request->sector);
            });
        }

        if ($request->has('programme')) {
            $query->whereHas('programme', function ($query) use ($request) {
                $query->whereIn('id', $request->programme);
            });
//            dd($request->programme);
        }


        if ($request->has('startDate') && $request->startDate) {
            $query->whereDate('start_date', $request->startDate);
        }

        if ($request->has('endDate') && $request->endDate) {
            $query->where('end_date', $request->endDate);
        }

        if ($request->has('commitmentYear') && $request->commitmentYear) {
            $query->where('commitment_year', $request->commitmentYear);
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

    public function getYearAttribute()
    {
        // Return year from start_date
        return $this->start_date ? Carbon::parse($this->start_date)->format('Y') : null;
    }

    public function getEndYearAttribute()
    {
        // Return year from start_date
        return $this->end_date ? Carbon::parse($this->end_date)->format('Y') : null;
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
        return $this->belongsToMany(FundingType::class);
    }

    public function getStartDateAttribute($value)
    {
        return $value ? Carbon::parse($value)->format(config('project.date_format')) : null;
    }


    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }


    public function municipality()
    {
        return $this->belongsToMany(City::class);
    }

    public function country()
    {
        return $this->belongsToMany(Country::class);
    }

    public function financialPerspective()
    {
        return $this->belongsTo(FinancialPerspective::class);
    }
}
