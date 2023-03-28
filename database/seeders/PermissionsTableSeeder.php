<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'country_show',
            ],
            [
                'id'    => 18,
                'title' => 'country_access',
            ],
            [
                'id'    => 19,
                'title' => 'city_create',
            ],
            [
                'id'    => 20,
                'title' => 'city_edit',
            ],
            [
                'id'    => 21,
                'title' => 'city_show',
            ],
            [
                'id'    => 22,
                'title' => 'city_delete',
            ],
            [
                'id'    => 23,
                'title' => 'city_access',
            ],
            [
                'id'    => 24,
                'title' => 'programme_create',
            ],
            [
                'id'    => 25,
                'title' => 'programme_edit',
            ],
            [
                'id'    => 26,
                'title' => 'programme_show',
            ],
            [
                'id'    => 27,
                'title' => 'programme_delete',
            ],
            [
                'id'    => 28,
                'title' => 'programme_access',
            ],
            [
                'id'    => 29,
                'title' => 'financial_perspective_create',
            ],
            [
                'id'    => 30,
                'title' => 'financial_perspective_edit',
            ],
            [
                'id'    => 31,
                'title' => 'financial_perspective_show',
            ],
            [
                'id'    => 32,
                'title' => 'financial_perspective_delete',
            ],
            [
                'id'    => 33,
                'title' => 'financial_perspective_access',
            ],
            [
                'id'    => 34,
                'title' => 'sector_create',
            ],
            [
                'id'    => 35,
                'title' => 'sector_edit',
            ],
            [
                'id'    => 36,
                'title' => 'sector_show',
            ],
            [
                'id'    => 37,
                'title' => 'sector_delete',
            ],
            [
                'id'    => 38,
                'title' => 'sector_access',
            ],
            [
                'id'    => 39,
                'title' => 'funding_create',
            ],
            [
                'id'    => 40,
                'title' => 'funding_edit',
            ],
            [
                'id'    => 41,
                'title' => 'funding_show',
            ],
            [
                'id'    => 42,
                'title' => 'funding_delete',
            ],
            [
                'id'    => 43,
                'title' => 'funding_access',
            ],
            [
                'id'    => 44,
                'title' => 'funding_type_create',
            ],
            [
                'id'    => 45,
                'title' => 'funding_type_edit',
            ],
            [
                'id'    => 46,
                'title' => 'funding_type_show',
            ],
            [
                'id'    => 47,
                'title' => 'funding_type_delete',
            ],
            [
                'id'    => 48,
                'title' => 'funding_type_access',
            ],
            [
                'id'    => 49,
                'title' => 'project_create',
            ],
            [
                'id'    => 50,
                'title' => 'project_edit',
            ],
            [
                'id'    => 51,
                'title' => 'project_show',
            ],
            [
                'id'    => 52,
                'title' => 'project_delete',
            ],
            [
                'id'    => 53,
                'title' => 'project_access',
            ],
            [
                'id'    => 54,
                'title' => 'project_dropdown_access',
            ],
        ];

        Permission::insert($permissions);
    }
}
