<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\CountryResource;
use App\Models\Country;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CountryApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('country_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new CountryResource(Country::advancedFilter());
    }

    public function show(Country $country)
    {
        abort_if(Gate::denies('country_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new CountryResource($country);
    }
}
