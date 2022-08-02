<?php

use App\Http\Controllers\Api\FakeAresController;
use App\Http\Controllers\Api\AresController;
use App\Http\Controllers\Api\ClientsController;
use App\Http\Controllers\Api\InvoicesController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Api\SuppliersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Mail 

Route::post('/sendbasicemail', [MailController::class, 'basic_email']);

Route::post('/sendtestemail', [MailController::class, 'test_email']);
//Route::get('/sendhtmlemail', [MailController::class, 'html_email']);
//Route::get('/sendattachmentemail', [MailController::class, 'attachment_email']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// /api/fakeares:  returns json format of real ARES response structure from https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=27074358
Route::get('/fakeares', [FakeAresController::class, 'fakeAres']);

//API for Ares-get info by ICO
Route::get('/ares/{ico}', [AresController::class, 'getAres']);



// APIs for our DB

//All CLIENTS in our DB for current SUPPLIER
Route::get('/clients', [ClientsController::class, 'index']);
Route::get('/clients/search/{query}', [ClientsController::class, 'searchByIco']);
//CLIENT by ICO
Route::get('/clients/{ico}', [ClientsController::class, 'getClientByIco']);
Route::get('/clients/{ico}/invoices', [ClientsController::class, 'getClientInvoicesByIco']);
Route::post('/clients/{ico}', [ClientsController::class, 'store']);


//ALL SUPPLIERS
Route::get('/suppliers', [SuppliersController::class, 'index']);
// SUPPLIER by ICO
Route::get('/suppliers/current', [SuppliersController::class, 'currentSupplier']);
// SUPPLIER by ICO
Route::get('/suppliers/{ico}', [SuppliersController::class, 'indexIco']);
//Edit supplier
Route::post('/suppliers/current', [SuppliersController::class, 'updateCurrent']);
// should we add {ico} ?

//update of invoice status from dashboard dropdown menu
Route::put('/invoices/updatestatus/{invoice_id}', [InvoicesController::class, 'updateStatus']);
//All invoices issued for current user
Route::get('/invoices/suppliers/allinvoices/', [InvoicesController::class, 'currentSupplierInvoices']);
//ALL invoices
Route::get('/invoices', [InvoicesController::class, 'index']);
// this month invoices for current user. 
Route::get('/invoices/thismonth', [InvoicesController::class, 'thisMonthInvoices']);
//INVOICES by SUPPLIER-ICO
Route::get('/invoices/suppliers/{ico}', [InvoicesController::class, 'supplierIco']);
//INVOICES by CLIENT-ICO
Route::get('/invoices/clients/{ico}', [InvoicesController::class, 'clientIco']);
//All paid invoices for current user
Route::get('/invoices/paid', [InvoicesController::class, 'currentSupplierPaidInvoices']);
//All issued invoices for current user
Route::get('/invoices/issued', [InvoicesController::class, 'currentSupplierIssuedInvoices']);
//Create new invoice
Route::post('/create-invoice', [InvoicesController::class, 'create']);
//Update existing invoice
// Route::put('/invoices/{invoice_number}', [InvoicesController::class, 'update']);
//Get current particular invoice by invoice number
Route::get('/invoices/{invoice_id}', [InvoicesController::class, 'currentInvoice']);
//delete specific invoice via it's ID
Route::delete('/invoices/delete/{invoice_id}', [InvoicesController::class, 'deleteInvoice']);
