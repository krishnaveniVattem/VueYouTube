<?php

use Illuminate\Http\Request;

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
Route::post('LikesController/create','LikesController@create');

Route::get('LikesController/index','LikesController@index');

Route::get('LikesController/show/{id}','LikesController@show');

Route::get('CommentsController/index','CommentsController@index');

Route::get('CommentsController/show/{id}','CommentsController@show');

Route::post('CommentsController/create','CommentsController@create');