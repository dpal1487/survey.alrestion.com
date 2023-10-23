<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends UID
{
    use HasFactory;
    protected $fillable = ['id', 'user_id', 'company_name', 'company_type', 'subdomain', 'company_size', 'corporation_type_id', 'contact_email', 'tax_number', 'company_name', 'description', 'website', 'contact_number', 'account_plan'];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function size()
    {
        return $this->hasOne(CompanySize::class, 'id', 'company_size_id');
    }
    public function corporationtype()
    {
        return $this->hasOne(CorporationType::class, 'id', 'corporation_type_id');
    }
    public function address()
    {
        return $this->hasOne(CompanyAddress::class, 'company_id', 'id');
    }
    public function addresses()
    {
        return $this->hasMany(CompanyAddress::class, 'company_id', 'id');
    }
    public function account()
    {
        return $this->hasOne(CompanyAccount::class, 'company_id', 'id');
    }
    public function accounts()
    {
        return $this->hasMany(CompanyAccount::class, 'company_id', 'id');
    }
    public function email()
    {
        return $this->hasOne(CompanyEmail::class, 'company_id', 'id');
    }
    public function emails()
    {
        return $this->hasMany(CompanyEmail::class, 'company_id', 'id');
    }
}
