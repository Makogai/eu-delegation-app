<?php

namespace App\Http\Requests;

use App\Models\FinancialPerspective;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreFinancialPerspectiveRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('financial_perspective_create');
    }

    public function rules()
    {
        return [
            'perspective' => [
                'string',
                'required',
            ],
        ];
    }
}
