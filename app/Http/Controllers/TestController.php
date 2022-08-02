<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        return view('development-test.index');

        $invoice = \App\Models\Invoice::with('invoiceItems')->find(2);
        return $invoice;
    }

    public function showInput(Request $request)
    {

        // return ($request->all());
        dd($request->all());
    }

    public function showInvoice(Request $request)
    {

        // dd($request->all());
        return view('invoice');
    }
}
