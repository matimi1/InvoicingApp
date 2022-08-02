<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    public function addresses()
    {
        return $this->hasOne(Address::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
    public function bankAccounts()
    {
        return $this->hasMany(BankAccount::class);
    }

    public function suppliers()
    {
        return $this->belongsToMany(Supplier::class);
    }
}
