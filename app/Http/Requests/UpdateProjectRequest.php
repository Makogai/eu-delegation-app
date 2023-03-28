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
            'assistance_framework' => [
                'string',
                'min:1',
                'max:40',
                'required',
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
            'contract_type_id' => [
                'integer',
                'exists:funding_types,id',
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
                'required',
            ],
            'contracting_party' => [
                'string',
                'nullable',
            ],
            'contracted_eu_contribution' => [
                'numeric',
                'nullable',
            ],
            'co_funding_or_loan' => [
                'numeric',
                'nullable',
            ],
            'total_euro_value' => [
                'numeric',
                'nullable',
            ],
            'co_funding_party' => [
                'string',
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
            'end_beneficiary' => [
                'string',
                'nullable',
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
            'financial_perspective_id' => [
                'integer',
                'exists:financial_perspectives,id',
                'nullable',
            ],
        ];
    }
}
