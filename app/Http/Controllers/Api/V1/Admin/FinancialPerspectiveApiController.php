<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFinancialPerspectiveRequest;
use App\Http\Requests\UpdateFinancialPerspectiveRequest;
use App\Http\Resources\Admin\FinancialPerspectiveResource;
use App\Models\FinancialPerspective;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FinancialPerspectiveApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('financial_perspective_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FinancialPerspectiveResource(FinancialPerspective::advancedFilter());
    }

    public function store(StoreFinancialPerspectiveRequest $request)
    {
        $financialPerspective = FinancialPerspective::create($request->validated());

        return (new FinancialPerspectiveResource($financialPerspective))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('financial_perspective_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(FinancialPerspective $financialPerspective)
    {
        abort_if(Gate::denies('financial_perspective_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new FinancialPerspectiveResource($financialPerspective);
    }

    public function update(UpdateFinancialPerspectiveRequest $request, FinancialPerspective $financialPerspective)
    {
        $financialPerspective->update($request->validated());

        return (new FinancialPerspectiveResource($financialPerspective))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(FinancialPerspective $financialPerspective)
    {
        abort_if(Gate::denies('financial_perspective_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new FinancialPerspectiveResource($financialPerspective),
            'meta' => [],
        ]);
    }

    public function destroy(FinancialPerspective $financialPerspective)
    {
        abort_if(Gate::denies('financial_perspective_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $financialPerspective->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
