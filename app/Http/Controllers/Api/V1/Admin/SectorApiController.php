<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSectorRequest;
use App\Http\Requests\UpdateSectorRequest;
use App\Http\Resources\Admin\SectorResource;
use App\Models\Sector;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SectorApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('sector_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SectorResource(Sector::advancedFilter());
    }

    public function store(StoreSectorRequest $request)
    {
        $sector = Sector::create($request->validated());

        return (new SectorResource($sector))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('sector_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Sector $sector)
    {
        abort_if(Gate::denies('sector_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SectorResource($sector);
    }

    public function update(UpdateSectorRequest $request, Sector $sector)
    {
        $sector->update($request->validated());

        return (new SectorResource($sector))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Sector $sector)
    {
        abort_if(Gate::denies('sector_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new SectorResource($sector),
            'meta' => [],
        ]);
    }

    public function destroy(Sector $sector)
    {
        abort_if(Gate::denies('sector_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $sector->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
