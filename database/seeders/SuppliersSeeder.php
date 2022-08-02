<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Supplier;
// Check Model name and method name in seeder!!!

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suppliers = [
            [
                'name' => 'User1 name',
                'user_id' => 9999,
                'reg_number' => 12345678,
                'reg_type_court' => 'Městský soud v Plzni',
                'reg_type_file' => 'A 358938',
                'address_id' => 9999,
                'email' => 'user@mail.cz',
                'phone' => '608123456'
            ]

        ];

        foreach ($suppliers as $supplier) {
            Supplier::create($supplier);
        }
    }
}
