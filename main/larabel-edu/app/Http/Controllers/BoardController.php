<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BoardController extends Controller
{
   public function index() {

    $result = DB::select('select * from boards limit 10');

    return var_dump($result);
   }
}
