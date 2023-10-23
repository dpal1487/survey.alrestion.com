<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientAddress extends Model
{
    use HasFactory;

    protected $fillable = ['client_id', 'address_id'];
    public $timestamps=false;
    public function address()
    {
        return $this->hasOne(Address::class, 'id', 'address_id');
    }


    public static function boot()
    {
        parent::boot();

        static::deleting(function ($address) {
            // before delete() method call this
            $address->address()->delete();
            // do the rest of the cleanup...
        });
    }
}
