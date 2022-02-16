<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//user routes
Route::post('/user/search', 'UserController@search');
Route::post('/store/vehicle', 'UserController@test');

//brands
Route::post('/store/brands', "BrandController@store");
//attributes
Route::post('/store/attributes', "AttributeController@store");
//suscriptions
Route::post('/store/suscriptions', "SuscriptionController@store");
//model bussines
Route::get('/model/bussines', "ModelBussineController@query");
