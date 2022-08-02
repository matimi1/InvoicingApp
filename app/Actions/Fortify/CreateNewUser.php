<?php

namespace App\Actions\Fortify;

use App\Models\Address;
use App\Models\BankAccount;
use App\Models\Supplier;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $user =  User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        $supplier = Supplier::create([
            'user_id' => $user->id,
            'name' => $user->name,
            'email' => $user->email
        ]);

        Address::create([
            'supplier_id' => $supplier->id
        ]);

        BankAccount::create([
            'supplier_id' => $supplier->id
        ]);


        return $user;
    }
}
