<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Services\ChartsService;

class DashboardApiController extends Controller
{
    public function index()
    {
        $latest0 = new ChartsService([
            'title'            => 'Latest Projects (Last 30 days)',
            'chart_type'       => 'latest',
            'model'            => 'App\Models\Project',
            'column_class'     => 'col-md-12',
            'fields'           => ['assistance_framework', 'contract_title', 'start_date', 'contracting_party', 'short_description'],
            'limit'            => 5,
            'filter_by_field'  => 'created_at',
            'filter_by_period' => 'month',
        ]);

        $stats1 = new ChartsService([
            'title'              => 'Total number of projects',
            'chart_type'         => 'stats',
            'model'              => 'App\Models\Project',
            'column_class'       => 'col-md-12',
            'footer_icon'        => 'date_range',
            'aggregate_function' => 'count',
            'aggregate_field'    => '',
            'footer_text'        => 'Lifetime total',
        ]);

        $stats2 = new ChartsService([
            'title'              => 'Total value of all projects',
            'chart_type'         => 'stats',
            'model'              => 'App\Models\Project',
            'column_class'       => 'col-md-12',
            'footer_icon'        => 'date_range',
            'aggregate_function' => 'sum',
            'aggregate_field'    => 'total_euro_value',
            'footer_text'        => 'Lifetime total',
        ]);

        return response()->json(compact('latest0', 'stats1', 'stats2'));
    }
}
