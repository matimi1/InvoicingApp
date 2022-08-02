<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Models\Address;
use App\Models\BankAccount;
use Auth;

class SuppliersController extends Controller
{
    public function index()
    {

        $response = [];
        $suppliers = Supplier::with('bankAccount', 'address')
            ->orderBy('id')
            ->get();
        foreach ($suppliers as $supplier) {
            $response[] = [
                'name' => $supplier->name,
                'reg_number' =>  $supplier->reg_number,
                'reg_number_EU' =>  $supplier->reg_number_EU,
                'reg_type' =>  $supplier->reg_type_court . ', složka ' . $supplier->reg_type_file,
                'address_id' => $supplier->address_id,
                'bank_name' => $supplier->bankAccount->bank_name,
                'address' => $supplier->address,
                'email' =>  $supplier->email,
                'phone' => $supplier->phone,
                'alias' => $supplier->alias
            ];
        }
        return $response;
    }

    public function currentSupplier()
    {
        $user_id = Auth::id();
        $currentSupplier = Supplier::with('bankAccount', 'address')->where('user_id', $user_id)->first();

        return $currentSupplier;
    }

    public function indexIco($ico)
    {

        $response = [];
        $supplier = Supplier::with('bankAccount', 'address')
            ->orderBy('id')
            ->where('reg_number', $ico)
            ->first();
        // foreach ($suppliers as $supplier) {
        $response[] = [
            'name' => $supplier->name,
            'reg_number' =>  $supplier->reg_number,
            'reg_number_EU' =>  $supplier->reg_number_EU,
            'reg_type_court' =>  $supplier->reg_type_court,
            'reg_type_file' => $supplier->reg_type_file,
            'address_id' => $supplier->address_id,
            'bank_name' => $supplier->bankAccount->bank_name,
            'bank_account_prefix' => $supplier->bankAccount->bank_account_prefix,
            'bank_account_number' => $supplier->bankAccount->bank_account_number,
            'bank_account_code' => $supplier->bankAccount->bank_account_code,
            'swift' => $supplier->bankAccount->swift,
            'iban' => $supplier->bankAccount->iban,
            'address' => $supplier->address,
            'email' =>  $supplier->email,
            'phone' => $supplier->phone,
            'alias' => $supplier->alias
        ];
        // }
        return $response;
    }

    public function updateCurrent(Request $request)
    {
        $userId = Auth::id();

        $updateResponse = $this->update($request, $userId);

        return $updateResponse;
    }

    public function update(Request $request, $id)
    {
        $supplier = Supplier::with('bankAccount', 'address')->where('user_id', $id)->first();

        if ($request->input('data_batch') == "company-details") {
            $supplier->name = $request->input('name');
            $supplier->reg_number = $request->input('reg_number');
            $supplier->reg_number_EU = $request->input('reg_number_EU');
            $supplier->reg_type_court = $request->input('reg_type_court');
            $supplier->reg_type_file = $request->input('reg_type_file');

            $supplier->email = $request->input('email');
            $supplier->phone = $request->input('phone');
            $supplier->alias = $request->input('alias');

            $supplier->save();
        }


        // return Auth::id();

        $bankAccount = $supplier->bankAccount;

        // $bankAccount = BankAccount::where('supplier_id', $supplier->id)->first();

        if ($request->input('data_batch') == "payment-details") {

            
            if (!$bankAccount) {
                $bankAccount = new BankAccount;
            }

            $bankAccount->iban = $request->input('iban');
            $bankAccount->bank_account_prefix = $request->input('bank_account_prefix');
            $bankAccount->bank_account_number = $request->input('bank_account_number');
            $bankAccount->bank_account_code = $request->input('bank_account_code');
            $bankAccount->swift = $request->input('swift');
            $bankAccount->bank_name = $request->input('bank_name');
            $bankAccount->supplier_id = $supplier->id;

            $bankAccount->save();
        }
        // $supplier->bank_account_id = $supplier->id;

        // $supplier->save();


        

        if ($request->input('data_batch') == "company-details") {

            $address = Address::where('id', $supplier->address_id)->first();

            if (!$address) {

                $address = new Address;
                
            }

            $address->street_name = $request->input('street_name');
            $address->house_number = $request->input('house_number');
            $address->house_orient = $request->input('house_orient');
            $address->city = $request->input('city');
            $address->postal_code = $request->input('postal_code');
            $address->supplier_id = $supplier->id;

            $address->save();


            $supplier->address_id = $address->id;

            $supplier->save();
        }

        $res = Supplier::with('bankAccount', 'address')->where('user_id', $id)->first();

        // session()->flash('success_message', 'Supplier updated!');
        return $res;
    }
}
