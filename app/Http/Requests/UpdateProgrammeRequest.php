<?php

namespace App\Http\Requests;

use App\Models\Programme;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateProgrammeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('programme_edit');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'min:1',
                'max:90',
                'required',
            ],
            'description' => [
                'string',
                'nullable',
            ],
        ];
    }
}
