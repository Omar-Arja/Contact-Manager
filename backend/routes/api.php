<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class,'register']);
});

Route::prefix('/contacts')->group(function () {
    Route::get('/', [ContactController::class, 'getContacts']);
    Route::post('/', [ContactController::class, 'addContact']);
    Route::delete('/{id}', [ContactController::class, 'deleteContact']);
    Route::delete('/', [ContactController::class, 'deleteAllContacts']);
});