<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\user;

class UserController extends Controller
{
    public function loginget(){
        return view('login');
    }
    public function loginpost(){
        return '로그인 포스트';
    }
    public function registrationget(){
        return view('registration');
    }
    public function registrationpost(Request $request){

        $validator = Validator::make(
            $request->only('name','email','password','passwordchk')
            ,[
                'email'     => 'required|email|max:50'
                ,'name'     => 'required|regex:/^[a-zA-Z가-힣]+$/|min:2|max:50'
                ,'password' => 'required|same:passwordchk'
            ]
        );
        if($validator->fails()){
            return view('registration')->withErrors($validator->errors());
        }

        $data = $request->only('name','email','password');

        $data['password'] = Hash::make($data['password']);

        $result = User::create($data);

        return redirect()->route('user.login.get');
    }
}