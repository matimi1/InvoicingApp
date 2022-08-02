<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;
// Check Model name and method name in seeder!!!

class ClientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clients = [
            [
                'name' => 'Asseco Central Europe, a.s.',
                'reg_number' => 27074358,
                'reg_number_eu' => 'CZ27074358',
                'reg_type_court' => 'Městský soud v Praze',
                'reg_type_file' => 'C 358938',
                'address_id' => 2,
                'email' => 'asseco@mail.cz',
                'phone' => '608123456'
            ],
            [
                'name' => 'Prosecco Italy, sro',
                'reg_number' => 35827072,
                'reg_number_eu' => 'IT27074358',
                'reg_type_court' => 'Městský soud v Rime',
                'reg_type_file' => 'B 345938',
                'address_id' => 3,
                'email' => 'prosecco@mail.it',
                'phone' => '345098675'
            ],
            [
                'name' => 'Wine France, LTD',
                'reg_number' => 07227072,
                'reg_number_eu' => 'FR27074358',
                'reg_type_court' => 'Městský soud v Parizi',
                'reg_type_file' => 'C 345938',
                'address_id' => 4,
                'email' => 'wine@mail.fr',
                'phone' => '675098675'
            ],
            [
                'name' => 'Tequila Mexico',
                'reg_number' => 89256674,
                'reg_number_eu' => 'MX27074358',
                'reg_type_court' => 'Městský soud v Mexiko',
                'reg_type_file' => 'D 456938',
                'address_id' => 5,
                'email' => 'tequilla@mail.mx',
                'phone' => '23456781'
            ],
            [
                'name' => 'Whiskey, ltd',
                'reg_number' => 57633456,
                'reg_number_eu' => 'SC27074358',
                'reg_type_court' => 'Městský soud v Edinburghu',
                'reg_type_file' => 'E 345654',
                'address_id' => 6,
                'email' => 'whiskey@mail.scot',
                'phone' => '23450988766'
            ]
        ];

        foreach ($clients as $client) {
            Client::create($client);
        }
    }
}
