<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BoardController;

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

Route::get('/', function () {
    return view('login');
});

Route::get('/user/login',[UserController::class,'loginget'])->name('user.login.get');
Route::post('/user/login',[UserController::class,'loginpost'])->name('user.login.post');
Route::get('/user/registration',[UserController::class,'registrationget'])->name('user.registration.get');
Route::post('/user/registration',[UserController::class,'registrationpost'])->name('user.registration.post');
// GET|HEAD        user/login ....................user.login.get › UserController@loginget  
// POST            user/login ....................user.login.post › UserController@loginpost  
// GET|HEAD        user/registration .............user.registration.get › UserController@registrationget  
// POST            user/registration .............user.registration.post › UserController@registrationpost 


Route::resource('/board',BoardController::class);
// GET|HEAD        board ............... board.index › BoardController@index  
// POST            board ............... board.store › BoardController@store  
// GET|HEAD        board/create .........board.create › BoardController@create  
// GET|HEAD        board/{board} ........board.show › BoardController@show  
// PUT|PATCH       board/{board} ........board.update › BoardController@update  
// DELETE          board/{board} ........board.destroy › BoardController@destroy  
// GET|HEAD        board/{board}/edit ...board.edit › BoardController@edit  

 
