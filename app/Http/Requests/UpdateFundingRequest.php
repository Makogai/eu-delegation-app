<?php

namespace App\Http\Requests;

use App\Models\Funding;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateFundingRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('funding_edit');
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
