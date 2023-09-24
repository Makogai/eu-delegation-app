<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Country extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'countries';

    protected $orderable = [
        'id',
        'name',
        'code'
    ];

    protected $filterable = [
        'id',
        'name',
        'code'
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'created_at',
        'updated_at',
        'deleted_at',
        'code'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function cities()
    {
        return $this->hasMany(City::class, 'country_id', 'id');
    }
}
