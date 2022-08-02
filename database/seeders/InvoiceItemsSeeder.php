<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\InvoiceItem;
// Check Model name and method name in seeder!!!

class InvoiceItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $invoice_items = [
            [
                'invoice_id' => 1,
                'invoice_description' => 'Cleaning servises',
                'unit_cost' => 10500,
                'unit_quantity' => 1
            ],
            [
                'invoice_id' => 2,
                'invoice_description' => 'Security servises',
                'unit_cost' => 10500,
                'unit_quantity' => 1
            ],
            [
                'invoice_id' => 2,
                'invoice_description' => 'Cleaning servises',
                'unit_cost' => 11000,
                'unit_quantity' => 1
            ],
            [
                'invoice_id' => 3,
                'invoice_description' => 'IT servises',
                'unit_cost' => 10000,
                'unit_quantity' => 3
            ],
            [
                'invoice_id' => 3,
                'invoice_description' => 'Some other servises',
                'unit_cost' => 1500,
                'unit_quantity' => 1
            ],
            [
                'invoice_id' => 4,
                'invoice_description' => 'Very important servises',
                'unit_cost' => 200,
                'unit_quantity' => 100
            ],
            [
                'invoice_id' => 4,
                'invoice_description' => 'Less important servises',
                'unit_cost' => 1500,
                'unit_quantity' => 10
            ],
            [
                'invoice_id' => 4,
                'invoice_description' => 'Small other servises',
                'unit_cost' => 500,
                'unit_quantity' => 1
            ],
            [
                'invoice_id' => 5,
                'invoice_description' => 'Five big services',
                'unit_cost' => 5000,
                'unit_quantity' => 10
            ],
        ];
        foreach ($invoice_items as $invoice_item) {
            InvoiceItem::create($invoice_item);
        }
    }
}
