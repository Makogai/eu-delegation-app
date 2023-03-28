<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'cities';

    protected $appends = [
        'region_label',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'name',
        'country.name',
        'region',
    ];

    protected $filterable = [
        'id',
        'name',
        'country.name',
        'region',
    ];

    protected $fillable = [
        'name',
        'country_id',
        'region',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public const REGION_SELECT = [
        [
            'label' => 'Central',
            'value' => 'central',
        ],
        [
            'label' => 'South',
            'value' => 'south',
        ],
        [
            'label' => 'north',
            'value' => 'north',
        ],
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function getRegionLabelAttribute()
    {
        return collect(static::REGION_SELECT)->firstWhere('value', $this->region)['label'] ?? '';
    }
}
