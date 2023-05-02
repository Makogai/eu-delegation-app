<?php

return [
    'userManagement' => [
        'title'          => 'User management',
        'title_singular' => 'User management',
    ],
    'permission' => [
        'title'          => 'Permissions',
        'title_singular' => 'Permission',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'title'             => 'Title',
            'title_helper'      => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'role' => [
        'title'          => 'Roles',
        'title_singular' => 'Role',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'title'              => 'Title',
            'title_helper'       => ' ',
            'permissions'        => 'Permissions',
            'permissions_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'user' => [
        'title'          => 'Users',
        'title_singular' => 'User',
        'fields'         => [
            'id'                       => 'ID',
            'id_helper'                => ' ',
            'name'                     => 'Name',
            'name_helper'              => ' ',
            'email'                    => 'Email',
            'email_helper'             => ' ',
            'email_verified_at'        => 'Email verified at',
            'email_verified_at_helper' => ' ',
            'password'                 => 'Password',
            'password_helper'          => ' ',
            'roles'                    => 'Roles',
            'roles_helper'             => ' ',
            'remember_token'           => 'Remember Token',
            'remember_token_helper'    => ' ',
            'created_at'               => 'Created at',
            'created_at_helper'        => ' ',
            'updated_at'               => 'Updated at',
            'updated_at_helper'        => ' ',
            'deleted_at'               => 'Deleted at',
            'deleted_at_helper'        => ' ',
        ],
    ],
    'country' => [
        'title'          => 'Country',
        'title_singular' => 'Country',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'city' => [
        'title'          => 'City',
        'title_singular' => 'City',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => 'Name of the city',
            'country'           => 'Country',
            'country_helper'    => 'Country',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
            'region'            => 'Region',
            'region_helper'     => ' ',
        ],
    ],
    'programme' => [
        'title'          => 'Programme',
        'title_singular' => 'Programme',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'name'               => 'Name',
            'name_helper'        => 'Name of the project',
            'description'        => 'Description',
            'description_helper' => 'Short description',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'financialPerspective' => [
        'title'          => 'Financial Perspective',
        'title_singular' => 'Financial Perspective',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'perspective'        => 'Perspective',
            'perspective_helper' => 'range of perspective (2021-2027)',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'sector' => [
        'title'          => 'Sector',
        'title_singular' => 'Sector',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'name'               => 'Name',
            'name_helper'        => ' ',
            'description'        => 'Description',
            'description_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'funding' => [
        'title'          => 'Funding',
        'title_singular' => 'Funding',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => 'Name of the funding',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'fundingType' => [
        'title'          => 'Funding Type',
        'title_singular' => 'Funding Type',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'project' => [
        'title'          => 'Project',
        'title_singular' => 'Project',
        'fields'         => [
            'loan' => 'Loan',
            'loan_helper' => ' ',
            'co_funding' => 'Co Funding',
            'co_funding_helper' => ' ',
            'id'                                => 'ID',
            'id_helper'                         => ' ',
            'assistance_framework'              => 'Assistance Framework',
            'assistance_framework_helper'       => ' ',
            'programme'                         => 'Programme',
            'programme_helper'                  => ' ',
            'sector'                            => 'Sector',
            'sector_helper'                     => ' ',
            'contract_title'                    => 'Contract Title',
            'contract_title_helper'             => ' ',
            'contract_type'                     => 'Contract Type',
            'contract_type_helper'              => ' ',
            'commitment_year'                   => 'Commitment Year',
            'commitment_year_helper'            => ' ',
            'contract_year'                     => 'Contract Year',
            'contract_year_helper'              => ' ',
            'start_date'                        => 'Start Date',
            'start_date_helper'                 => ' ',
            'end_date'                          => 'End Date',
            'end_date_helper'                   => 'End date in formatDD-MM-YYYY or a string',
            'contract_number'                   => 'Contract Number',
            'contract_number_helper'            => ' ',
            'contracting_party'                 => 'Contracting Party',
            'contracting_party_helper'          => ' ',
            'contracted_eu_contribution'        => 'Contracted Eu Contribution',
            'contracted_eu_contribution_helper' => ' ',
            'co_funding_or_loan'                => 'Co-funding or loan',
            'co_funding_or_loan_helper'         => ' ',
            'total_euro_value'                  => 'Total Euro Value',
            'total_euro_value_helper'           => ' ',
            'co_funding_party'                  => 'Co Funding Party',
            'co_funding_party_helper'           => ' ',
            'municipality'                      => 'Municipality',
            'municipality_helper'               => ' ',
            'short_description'                 => 'Short Description',
            'short_description_helper'          => ' ',
            'end_beneficiary'                   => 'End Beneficiary',
            'end_beneficiary_helper'            => ' ',
            'keywords'                          => 'Keywords',
            'keywords_helper'                   => ' ',
            'links_to_project_page'             => 'Links To Project Page',
            'links_to_project_page_helper'      => ' ',
            'created_at'                        => 'Created at',
            'created_at_helper'                 => ' ',
            'updated_at'                        => 'Updated at',
            'updated_at_helper'                 => ' ',
            'deleted_at'                        => 'Deleted at',
            'deleted_at_helper'                 => ' ',
            'show'                              => 'Show',
            'show_helper'                       => 'show this project on client side?',
            'financial_perspective'             => 'Financial Perspective',
            'financial_perspective_helper'      => ' ',
        ],
    ],
    'projectDropdown' => [
        'title'          => 'Project Dropdown',
        'title_singular' => 'Project Dropdown',
    ],

];
