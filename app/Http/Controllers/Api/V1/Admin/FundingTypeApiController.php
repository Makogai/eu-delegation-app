<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFundingTypeRequest;
use App\Http\Requests\UpdateFundingTypeRequest;
use App\Http\Resources\Admin\FundingTypeResource;
use App\Models\FundingType;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FundingTypeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('funding_type_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FundingTypeResource(FundingType::advancedFilter());
    }

    public function store(StoreFundingTypeRequest $request)
    {
        $fundingType = FundingType::create($request->validated());

        return (new FundingTypeResource($fundingType))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('funding_type_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(FundingType $fundingType)
    {
        abort_if(Gate::denies('funding_type_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FundingTypeResource($fundingType);
    }

    public function update(UpdateFundingTypeRequest $request, FundingType $fundingType)
    {
        $fundingType->update($request->validated());

        return (new FundingTypeResource($fundingType))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(FundingType $fundingType)
    {
        abort_if(Gate::denies('funding_type_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new FundingTypeResource($fundingType),
            'meta' => [],
        ]);
    }

    public function destroy(FundingType $fundingType)
    {
        abort_if(Gate::denies('funding_type_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $fundingType->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
