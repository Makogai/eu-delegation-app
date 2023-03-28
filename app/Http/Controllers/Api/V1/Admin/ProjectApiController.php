<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\Admin\ProjectResource;
use App\Models\City;
use App\Models\FundingType;
use App\Models\Programme;
use App\Models\Project;
use App\Models\FinancialPerspective;
use App\Models\Sector;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProjectApiController extends Controller
{

    public function allCities()
    {
        return \response()->json(City::all());
    }
    public function allSectors()
    {
        return \response()->json(Sector::all());
    }
    public function allProgrammes()
    {
        return \response()->json(Programme::all());
    }
    public function allCtypes()
    {
        return \response()->json(FundingType::all());
    }
    public function index(Request $request)
    {
        abort_if(Gate::denies('project_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        // if request has isClient
        if ($request->isClient) {
            $projects = Project::with(['programme', 'sector', 'contractType', 'municipality'])->whereHas('municipality', function ($query) {
                // If theres no municipality id in the query string, return all projects
                if (!request('municipality')) {
                    return $query;
                }
                $query->where('id', request('municipality'));
            })->get();
        }

        else
            $projects = Project::with(['programme', 'sector', 'contractType', 'municipality', 'financialPerspective'])->projectFilters($request)->paginate($request->limit, ['*'], 'page', $request->page);
        // Where municipality is a many-to-many relationship, is id from query string
        // the id of the pivot table or the id of the municipality table?



        return new ProjectResource($projects);
    }

    public function store(StoreProjectRequest $request)
    {
        $project = Project::create($request->validated());
        $project->sector()->sync($request->input('sector.*.id', []));
        $project->municipality()->sync($request->input('municipality.*.id', []));

        return (new ProjectResource($project))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('project_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'programme'     => Programme::get(['id', 'name']),
                'sector'        => Sector::get(['id', 'name']),
                'contract_type' => FundingType::get(['id', 'name']),
                'municipality'  => City::get(['id', 'name']),
                'financial_perspective' => FinancialPerspective::get(['id', 'perspective']),
            ],
        ]);
    }

    public function show(Project $project)
    {
        abort_if(Gate::denies('project_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProjectResource($project->load(['programme', 'sector', 'contractType', 'municipality', 'financialPerspective']));
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->validated());
        $project->sector()->sync($request->input('sector.*.id', []));
        $project->municipality()->sync($request->input('municipality.*.id', []));

        return (new ProjectResource($project))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Project $project)
    {
        abort_if(Gate::denies('project_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ProjectResource($project->load(['programme', 'sector', 'contractType', 'municipality', 'financialPerspective'])),
            'meta' => [
                'programme'     => Programme::get(['id', 'name']),
                'sector'        => Sector::get(['id', 'name']),
                'contract_type' => FundingType::get(['id', 'name']),
                'municipality'  => City::get(['id', 'name']),
                'financial_perspective' => FinancialPerspective::get(['id', 'perspective']),
            ],
        ]);
    }

    public function destroy(Project $project)
    {
        abort_if(Gate::denies('project_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $project->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
