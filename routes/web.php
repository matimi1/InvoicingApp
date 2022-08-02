<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactAppController;

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

//Route::get('/', [HomeController::class, 'home']);

Route::get('/development-test', [App\Http\Controllers\TestController::class, 'index']);
Route::get('/development-test/receive', [App\Http\Controllers\TestController::class, 'showInput']);
Route::get('/invoice', [App\Http\Controllers\TestController::class, 'showInvoice']);

Route::get('/{path?}', [ReactAppController::class, 'renderApp'])->where('path', '.*');
