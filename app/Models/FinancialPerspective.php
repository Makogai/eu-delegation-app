<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FinancialPerspective extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'financial_perspectives';

    protected $orderable = [
        'id',
        'perspective',
    ];

    protected $filterable = [
        'id',
        'perspective',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'perspective',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
