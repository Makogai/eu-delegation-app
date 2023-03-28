<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProgrammeRequest;
use App\Http\Requests\UpdateProgrammeRequest;
use App\Http\Resources\Admin\ProgrammeResource;
use App\Models\Programme;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProgrammeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('programme_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProgrammeResource(Programme::advancedFilter());
    }

    public function store(StoreProgrammeRequest $request)
    {
        $programme = Programme::create($request->validated());

        return (new ProgrammeResource($programme))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('programme_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Programme $programme)
    {
        abort_if(Gate::denies('programme_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProgrammeResource($programme);
    }

    public function update(UpdateProgrammeRequest $request, Programme $programme)
    {
        $programme->update($request->validated());

        return (new ProgrammeResource($programme))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Programme $programme)
    {
        abort_if(Gate::denies('programme_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ProgrammeResource($programme),
            'meta' => [],
        ]);
    }

    public function destroy(Programme $programme)
    {
        abort_if(Gate::denies('programme_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $programme->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
