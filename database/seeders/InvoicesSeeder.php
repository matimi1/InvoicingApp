<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Invoice;
// Check Model name here and in foreach  method before run seeders!!!

class InvoicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $invoices = [
            [
                'supplier_id' => 1,
                'client_id' => 1,
                'number' => 1,
                'additional_notes' => '',
                'status' => 'new',
                'total_amount' => 10500,
                'currency' => 'CZK',
                'form_of_payment' => 'cash',
                'issued_on' => '2022-06-22 17:25:58',
                'due_date' => '2022-06-30 00:00:00'

            ],
            [
                'supplier_id' => 1,
                'client_id' => 2,
                'number' => 2,
                'additional_notes' => 'This is extra notes',
                'status' => 'new',
                'total_amount' => 21500,
                'currency' => 'CZK',
                'form_of_payment' => 'wire transfer',
                'issued_on' => '2022-07-21 17:25:58',
                'due_date' => '2022-07-30 00:00:00'

            ],
            [
                'supplier_id' => 1,
                'client_id' => 3,
                'number' => 3,
                'additional_notes' => 'Some small comment',
                'status' => 'paid',
                'total_amount' => 31500,
                'currency' => 'CZK',
                'form_of_payment' => 'cash',
                'issued_on' => '2022-05-21 17:25:58',
                'due_date' => '2022-05-30 00:00:00'

            ],
            [
                'supplier_id' => 1,
                'client_id' => 4,
                'number' => 4,
                'additional_notes' => '',
                'status' => 'new',
                'total_amount' => 45500,
                'currency' => 'CZK',
                'form_of_payment' => 'wire transfer',
                'issued_on' => '2022-05-30 17:25:58',
                'due_date' => '2022-06-15 00:00:00'

            ],
            [
                'supplier_id' => 1,
                'client_id' => 5,
                'number' => 5,
                'additional_notes' => 'Just 5th invoice',
                'status' => 'new',
                'total_amount' => 50000,
                'currency' => 'CZK',
                'form_of_payment' => 'wire transfer',
                'issued_on' => '2022-07-30 17:25:58',
                'due_date' => '2022-08-15 00:00:00'

            ]
        ];
        foreach ($invoices as $invoice) {
            Invoice::create($invoice);
        }
    }
}
