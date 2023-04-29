<?php

namespace App\Http\Requests;

use App\Models\Project;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateProjectRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('project_edit');
    }

    public function rules()
    {
        return [
            'financial_perspective_id' => [
                'integer',
                'exists:financial_perspectives,id',
                'nullable',
            ],
            'programme_id' => [
                'integer',
                'exists:programmes,id',
                'required',
            ],
            'sector' => [
                'required',
                'array',
            ],
            'sector.*.id' => [
                'integer',
                'exists:sectors,id',
            ],
            'contract_title' => [
                'string',
                'required',
            ],
            'commitment_year' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'contract_year' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'nullable',
            ],
            'start_date' => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'end_date' => [
                'string',
                'nullable',
            ],
            'contract_number' => [
                'string',
                'nullable',
            ],
            'contracting_party' => [
                'string',
                'nullable',
            ],
            'contract_type' => [
                'array',
            ],
            'contract_type.*.id' => [
                'integer',
                'exists:funding_types,id',
            ],
            'end_beneficiary' => [
                'string',
                'nullable',
            ],
            'contracted_eu_contribution' => [
                'numeric',
                'nullable',
            ],
            'co_funding' => [
                'numeric',
                'nullable',
            ],
            'loan' => [
                'numeric',
                'nullable',
            ],
            'total_euro_value' => [
                'numeric',
                'nullable',
            ],
            'municipality' => [
                'required',
                'array',
            ],
            'municipality.*.id' => [
                'integer',
                'exists:cities,id',
            ],
            'short_description' => [
                'string',
                'required',
            ],
            'keywords' => [
                'string',
                'nullable',
            ],
            'links_to_project_page' => [
                'string',
                'nullable',
            ],
            'show' => [
                'boolean',
            ],
        ];
    }
}
