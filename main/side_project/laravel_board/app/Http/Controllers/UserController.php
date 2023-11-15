<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class UserController extends Controller
{
    public function loginget(){
        if(Auth::check()){
            return redirect()->route('board.index');
        }
        return view('login');
    }
    public function loginpost(Request $request){

        $validator = Validator::make(
            $request->only('email','password')
            ,[
                'email'     => 'required|email|max:50'
                ,'password' => 'required'
            ]
        );

        if($validator->fails()){
            return view('login')->withErrors($validator->errors());
        }

        $result = User::where('email',$request->email)->first();
        if(!$result || !(Hash::check($request->password,$result->password))) {
            $errorMsg = '아이디와 비밀번호를 다시 확인해주세요';
            return redirect()->route('user.login.get')->withErrors($errorMsg);
        }

        Auth::login($result);
        if(Auth::check()){
            session($result->only('id'));
        } else {
            $errorMsg = "인증 에러가 발생했습니다.";
            return view('login')->withErrors($errorMsg);
        }

        return redirect()->route('board.index');
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