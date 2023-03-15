<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Dashboard
    Route::get('dashboard', 'DashboardApiController@index')->name('dashboard');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Country
    Route::resource('countries', 'CountryApiController', ['except' => ['create', 'store', 'edit', 'update', 'destroy']]);

    // City
    Route::resource('cities', 'CityApiController');

    // Programme
    Route::resource('programmes', 'ProgrammeApiController');

    // Financial Perspective
    Route::resource('financial-perspectives', 'FinancialPerspectiveApiController');

    // Sector
    Route::resource('sectors', 'SectorApiController');

    // Funding
    Route::resource('fundings', 'FundingApiController');

    // Funding Type
    Route::resource('funding-types', 'FundingTypeApiController');

    // Project
    Route::resource('projects', 'ProjectApiController');
});
