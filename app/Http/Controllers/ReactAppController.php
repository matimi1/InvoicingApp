<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactAppController extends Controller
{
    public function renderApp()
    {
        return view('Home/home');
    }
}
