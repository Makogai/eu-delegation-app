<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFundingRequest;
use App\Http\Requests\UpdateFundingRequest;
use App\Http\Resources\Admin\FundingResource;
use App\Models\Funding;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FundingApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('funding_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FundingResource(Funding::advancedFilter());
    }

    public function store(StoreFundingRequest $request)
    {
        $funding = Funding::create($request->validated());

        return (new FundingResource($funding))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('funding_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Funding $funding)
    {
        abort_if(Gate::denies('funding_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FundingResource($funding);
    }

    public function update(UpdateFundingRequest $request, Funding $funding)
    {
        $funding->update($request->validated());

        return (new FundingResource($funding))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Funding $funding)
    {
        abort_if(Gate::denies('funding_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new FundingResource($funding),
            'meta' => [],
        ]);
    }

    public function destroy(Funding $funding)
    {
        abort_if(Gate::denies('funding_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $funding->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
