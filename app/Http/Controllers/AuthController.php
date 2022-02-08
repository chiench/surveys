<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register( Request $request )
    {

        $data = $request->validate(
            [
                'name' =>'required|unique:user,name',
                'email' =>'email|required',
                'password'=>'required|min:6',
            ]
            );

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make( $request->password);
        $user->save();

    }
}
