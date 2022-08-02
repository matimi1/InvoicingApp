<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $fillable = ['user_id', 'name', 'email'];

    use HasFactory;
    public function address()
    {
        return $this->hasOne(Address::class);
    }
    public function bankAccount()
    {
        return $this->hasOne(BankAccount::class);
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }
    public function clients()
    {
        return $this->belongsToMany(Client::class);
    }
    public function user()
    {
        return $this->hasOne(User::class);
    }
}
