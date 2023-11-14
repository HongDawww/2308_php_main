<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BoardController extends Controller
{
   public function index() {

    $result = DB::select('select * from boards limit 10');

    $result = DB::select('select * from boards limit :no', ['no' => 1]);
    // $result = DB::select('select * from boards limit ?', [2]);
    $result = DB::select('select * from boards limit ? offset ?', [2, 10]);
    
    $arr = [4,7,8];
    $result = DB::select(
         'select count(id)
            from boards 
            where categories_no = ? 
            or categories_no = ? 
            or categories_no = ?'
        , $arr);

    $result = DB::select('select count(categories_no) as cnt from boards group by categories_no');
    
    $result = DB::select(
         'SELECT 
            ca.no
            ,ca.name
            ,COUNT(ca.no) AS cnt
        FROM boards bo
               JOIN  categories ca
                ON bo.categories_no = ca.no
        GROUP BY ca.no, ca.name'
        );
  
    $sql = 
            'insert into boards(title, content, created_at, updated_at, categories_no) values (?,?,?,?,?)';
    $arr = [
                '제목1'
                ,'내용1'
                ,now()
                ,now()
                ,'0'
    ];
    // DB::begintransaction();
    // DB::insert($sql, $arr);
    // DB::commit();
   
    $result = DB::select('select * from boards order by id desc limit 1');
    // DB::begintransaction();
    // DB::update('update boards set title = ?, content = ? where id = ?',['업데이트1','업데이트',$result[0]->id]);
    // DB::commit();

    // DB::beginTransaction();
    // DB::delete('delete from boards where id = ?' ,[$result[0]->id]);
    // DB::commit();


    return var_dump($result);
   }
}