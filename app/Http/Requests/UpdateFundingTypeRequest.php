<?php

namespace App\Http\Requests;

use App\Models\FundingType;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateFundingTypeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('funding_type_edit');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
        ];
    }
}
