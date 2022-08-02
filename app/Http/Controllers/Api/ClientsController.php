<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Supplier;
use Auth;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Support\Facades\DB;

class ClientsController extends Controller
{
    public function index()
    {
        $response = [];
        $user_id = Auth::id();
        $supplier = Supplier::where('user_id', $user_id)->first();
        $clients = $supplier->clients;
        //dd($clients);
        $invoices = $supplier->invoices;
        //dd($invoices);
        $invoicesByClient = array();
        foreach ($invoices as $invoice) {
            $invoicesByClient[$invoice['client_id']][] = $invoice;
        }
        //dd($invoicesByClient);
        foreach ($clients as $client) {
            $client_invoices = $invoicesByClient[$client->id] ?? [];
            $total_amount = 0;
            foreach ($client_invoices as $client_invoice) {
                $total_amount += $client_invoice->total_amount;
            }
            $response[] = [
                'name' => $client->name,
                'reg_number' => $client->reg_number,
                'reg_type_court' => $client->reg_type_court,
                'reg_type_file' => $client->reg_type_file,
                'address' => $client->addresses,
                'email' => $client->email,
                'phone' => $client->phone,
                'invoices_count' => count($client_invoices),
                'total_sum' => $total_amount,
            ];
        }

        return $response;
    }

    public function searchByIco($query)
    {

        $response = [];
        $user_id = Auth::id();
        $clients = Client::with('suppliers')
            ->where(DB::raw("CONVERT(reg_number, CHAR)"), 'like', '%' . strval($query) . '%')
            ->whereHas('suppliers', function (Builder $query) use ($user_id) {
                $query->where('user_id', $user_id);
            })->get();


        foreach ($clients as $client) {
            $client_invoices = $client->invoices;
            $total_amount = 0;
            foreach ($client_invoices as $client_invoice) {
                $total_amount += $client_invoice->total_amount;
            }
            $response[] = [
                'name' => $client->name,
                'reg_number' => $client->reg_number,
                'reg_type_court' => $client->reg_type_court,
                'reg_type_file' => $client->reg_type_file,
                'address' => $client->addresses,
                'email' => $client->email,
                'phone' => $client->phone,
                'invoices_count' => count($client_invoices),
                'total_sum' => $total_amount,
            ];
        }

        return $response;
    }

    public function getClientByIco($ico)
    {
        $response = [];
        $user_id = Auth::id();

        $client = Client::with('addresses', 'suppliers')
            ->where('reg_number', $ico)->whereHas('suppliers', function (Builder $query) use ($user_id) {
                $query->where('user_id', $user_id);
            })
            ->orderBy('id')
            ->first();



        $response[] = [
            'id' => $client->id,
            'name' => $client->name,
            'reg_number' => $client->reg_number,
            'reg_number_EU' => $client->reg_number_EU,
            'reg_type_court' => $client->reg_type_court,
            'reg_type_file' => $client->reg_type_file,
            'address' => $client->addresses,
            'email' => $client->email,
            'phone' => $client->phone
        ];

        return $response;
    }

    public function getClientInvoicesByIco($ico)
    {
        $response = [];
        $user_id = Auth::id();

        $client = Client::with('addresses', 'suppliers')->where('reg_number', $ico)->whereHas('suppliers', function (Builder $query) use ($user_id) {
            $query->where('user_id', $user_id);
        })
            ->orderBy('id')
            ->first();

        // dd($client);


        //$client_invoices = $client->invoices;
        $total_amount = 0;
        foreach ($client->invoices as $client_invoice) {

            $response[] = [
                'id' => $client_invoice->id,
                'number' => $client_invoice->number,
                'additional_notes' => $client_invoice->additional_notes,
                'status' => $client_invoice->status,
                'total_amount' => $client_invoice->total_amount,
                'currency' => $client_invoice->currency,
                'issued_on' => $client_invoice->issued_on,
                'due_date' => $client_invoice->due_date,
            ];
        }

        return $response;
    }



    // public function store(Request $request, $reg_number)
    // {

    //     //$user_id = Auth::id();

    //     $client = Client::where('reg_number', $reg_number)->first();
    //     $address = Address::where('client_id', $client->id)->first();


    //     $client->name = $request->input('name');
    //     $client->reg_number_EU = $request->input('reg_number_EU');
    //     $client->email = $request->input('email');
    //     $client->phone = $request->input('phone');

    //     $address->city = $request->input('address_city');
    //     $address->street_name = $request->input('address_street_name');
    //     $address->house_number = $request->input('address_house_number');
    //     $address->house_orient = $request->input('address_house_orient');
    //     $address->postal_code = $request->input('address_postal_code');


    //     $client->save();
    //     $address->save();

    //     return ['status' => 'success'];
    // }

    public function store(Request $request, $reg_number)
    {
        $user_id = Auth::id();
        $supplier = Supplier::where('user_id', $user_id)->first();
        $client = Client::where('reg_number', $reg_number)->first();

        $createNew = false;

        if (is_null($client)) {
            $client = new Client();
            $client->reg_number = $reg_number;

            $address = new Address();

            $createNew = true;
        } else
            $address = Address::where('client_id', $client->id)->first();

        //dd($client);
        //dd($address);

        $client->name = $request->input('name');
        $client->reg_number_EU = $request->input('reg_number_EU');
        $client->email = $request->input('email');
        $client->phone = $request->input('phone');
        $client->reg_type_court = $request->input('reg_type_court') ?? "";
        $client->reg_type_file = $request->input('reg_type_file') ?? "";

        //dd($address);

        $address->city = $request->input('address_city');
        $address->street_name = $request->input('address_street_name');
        $address->house_number = $request->input('address_house_number');
        $address->house_orient = $request->input('address_house_orient');
        $address->postal_code = $request->input('address_postal_code');

        //dd($address);

        $client->save();
        if ($createNew) {
            // connect supplier to a client
            $supplier->clients()->save($client);
            $client->addresses()->save($address);
        } else
            $address->save();

        return ['status' => 'success'];
    }
}
