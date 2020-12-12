<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/page', function () {
    return view('page');
});

Route::get('/wizard', function () {
    return view('wizard');
});

Route::get('/home2', function () {
    return view('home2');
})->middleware(['verified']);

Route::get('/home3', function () {
    return view('home3');
})->middleware(['verified']);

