<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BankAccount;
// Check Model name and method name in seeder!!!

class BankAccountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $accounts = [
            [
                'supplier_id' => 9999,
                'bank_name' => 'Air Bank a.s.',
                'bank_account_prefix' => 000,
                'bank_account_number' => 271880010, //account number
                'bank_account_code' => 3030, // bank code
                'swift' => 'AIRACZPP',
                'iban' => 'CZ0330300000002271880010'
            ]
        ];
        foreach ($accounts as $account) {
            BankAccount::create($account);
        }
    }
}
