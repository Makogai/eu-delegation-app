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
Route::get('all-cities', [\App\Http\Controllers\Api\V1\Admin\ProjectApiController::class, 'allCities'])->name('all-cities');
Route::get('all-sectors', [\App\Http\Controllers\Api\V1\Admin\ProjectApiController::class, 'allSectors'])->name('all-sectors');
Route::get('all-programmes', [\App\Http\Controllers\Api\V1\Admin\ProjectApiController::class, 'allProgrammes'])->name('all-programmes');
Route::get('all-ctypes', [\App\Http\Controllers\Api\V1\Admin\ProjectApiController::class, 'allCtypes'])->name('all-ctypes');
Route::get('v1/projects-client', [\App\Http\Controllers\Api\V1\Admin\ProjectApiController::class, 'indexClient'])->name('projects-client');
Route::get('v1/projects-client/{project}', [\App\Http\Controllers\Api\V1\Admin\ProjectApiController::class, 'showClient'])->name('projects-client-single');
// Is logged in route for vue
Route::get('v1/is-logged-in', function () {
    // return 200 if user is logged in and 401 if not
    return auth()->user() ? response()->json([], 200) : response()->json([], 401);
});
