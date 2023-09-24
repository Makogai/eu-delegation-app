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
use Illuminate\Support\Facades\Cache;

class ProjectApiController extends Controller
{

    public function allCities()
    {
        $cities = Cache::remember('cities', now()->addDays(2), function () {
            return City::all();
        });

        return response()->json($cities);
    }

    public function allSectors()
    {
        $sectors = Cache::remember('sectors', now()->addDays(2), function () {
            return Sector::all();
        });

        return response()->json($sectors);
    }

    public function allProgrammes()
    {
        $programmes = Cache::remember('programmes', now()->addDays(2), function () {
            return Programme::all();
        });

        return response()->json($programmes);
    }

    public function allCtypes()
    {
        $fundingTypes = Cache::remember('fundingTypes', now()->addDays(2), function () {
            return FundingType::all();
        });

        return response()->json($fundingTypes);
    }

    public function index(Request $request)
    {
        // Start the query
        $projectsQuery = Project::query();

        abort_if(Gate::denies('project_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $projects = $projectsQuery->with(['programme', 'sector', 'contractType', 'municipality', 'financialPerspective'])
            ->projectFilters($request);

        $totalEuroValue = $projects->sum('total_euro_value');
        $totalEUValue = $projects->sum('contracted_eu_contribution');

        $endYears = Cache::remember('end_years', now()->addDays(7), function () {
            return Project::all()
                ->pluck('end_year')
                ->filter()
                ->sortDesc()
                ->unique()
                ->values();
        });

        $commitment_years = Cache::remember('commitment_years', now()->addDays(7), function () {
            return Project::all()
                ->pluck('commitment_year')
                ->filter()
                ->sortDesc()
                ->unique()
                ->values();
        });

        $projects = $projects
            ->paginate($request->limit, ['*'], 'page', $request->page);

        return (new ProjectResource($projects))->additional([
            'total_euro_value' => $this->formatMoney($totalEuroValue). ' €',
            'total_eu_value' => $this->formatMoney($totalEUValue) . ' €',
            'end_years' => $endYears,
            'commitment_years' => $commitment_years,
        ]);
    }



    //Format money (1000 to 1,000 etc)
    public function formatMoney($number)
    {
        // Convert string to number
        $number = intval($number);
        return number_format($number, 0, '.', ',');
    }


    public function indexClient(Request $request)
    {
        $cacheKey = 'projects_' . $request->getQueryString();
        $years = Cache::remember('years', now()->addDays(7), function () {
            return Project::all()
                ->pluck('year')
                ->filter()
                ->sortDesc()
                ->unique()
                ->values();
        });

        $endYears = Cache::remember('end_years', now()->addDays(7), function () {
            return Project::all()
                ->pluck('end_year')
                ->filter()
                ->sortDesc()
                ->unique()
                ->values();
        });

        $commitment_years = Cache::remember('commitment_years', now()->addDays(7), function () {
            return Project::all()
                ->pluck('commitment_year')
                ->filter()
                ->sortDesc()
                ->unique()
                ->values();
        });

        $data = Cache::remember($cacheKey, now()->addDays(1), function () use ($commitment_years, $endYears, $request, $years) {
            // Start the query
            $projectsQuery = Project::query();
            $projectsQuery->with(['programme', 'sector', 'contractType', 'municipality']);

            if ($request->has('municipality') && $request->municipality) {
                $projectsQuery->whereHas('municipality', function ($query) use ($request) {
                    $query->whereIn('id', $request->municipality);
                });
            }

            if ($request->has('keywords') && $request->keywords) {
                $keywords = $request->keywords;
                $projectsQuery->where(function($query) use ($keywords) {
                    $query->where('contract_title', 'like', '%' . $keywords . '%')
                        ->orWhere('keywords', 'like', '%' . $keywords . '%')
                        ->orWhere('short_description', 'like', '%' . $keywords . '%');
                });
            }

            if ($request->has('programme') && $request->programme) {
                $projectsQuery->whereHas('programme', function ($query) use ($request) {
                    $query->whereIn('id', $request->programme);
                });
            }

            if ($request->has('sector') && $request->sector) {
                $projectsQuery->whereHas('sector', function($query) use ($request){
                    $query->whereIn('id', $request->sector);
                });
            }

            if ($request->has('startYear') && $request->startYear) {
                $projectsQuery->whereYear('start_date', $request->startYear);
            }

            if ($request->has('endYear') && $request->endYear) {
                $projectsQuery->whereYear('end_date', $request->endYear);
            }

            if ($request->has('commitmentYear') && $request->commitmentYear) {
                $projectsQuery->where('commitment_year', $request->commitmentYear);
            }

            $projects = $projectsQuery->get();

            $sectors = [];
            foreach ($projects as $project) {
                foreach ($project->sector as $sector) {
                    if (!array_key_exists($sector->id, $sectors)) {
                        $sectors[$sector->id] = ['sector' => $sector, 'count' => 1];
                    } else {
                        $sectors[$sector->id]['count']++;
                    }
                }
            }

            return [
                'projects' => ProjectResource::collection($projects),
                'sectors' => $sectors,
                'total' => $projects->count(),
                'years' => $years,
                'endYears' => $endYears,
                'commitment_years' => $commitment_years,
                'totalSectors' => count($sectors),
                'totalProjectsValue' => $this->format_number($projects->sum('total_euro_value'))['value'],
                'totalProjectsWord' => $this->format_number($projects->sum('total_euro_value'))['word'],
            ];
        });

        return response()->json($data);
    }



    function format_number($number) {
        if ($number >= 1000000000) {
            return array(
                'value' => number_format($number / 1000000000, 1) . 'B',
                'word' => 'MILIJARDI'
            );
        }
        else if ($number >= 1000000) {
            return array(
                'value' => number_format($number / 1000000, 1) . 'M',
                'word' => 'MILIONA'
            );
        }
        else if ($number >= 1000) {
            return array(
                'value' => number_format($number / 1000, 1) . 'K',
                'word' => 'HILJADA'
            );
        }
        return array(
            'value' => $number,
            'word' => ''
        );
    }



    public function store(StoreProjectRequest $request)
    {
        $project = Project::create($request->validated());
        $project->sector()->sync($request->input('sector.*.id', []));
        $project->municipality()->sync($request->input('municipality.*.id', []));
        $project->contractType()->sync($request->input('contract_type.*.id', []));

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
    public function showClient(Project $project)
    {
//        abort_if(Gate::denies('project_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ProjectResource($project->load(['programme', 'sector', 'contractType', 'municipality', 'financialPerspective']));
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->validated());
        $project->sector()->sync($request->input('sector.*.id', []));
        $project->municipality()->sync($request->input('municipality.*.id', []));
        $project->contractType()->sync($request->input('contract_type.*.id', []));


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
