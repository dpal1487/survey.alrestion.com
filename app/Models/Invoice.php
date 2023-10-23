<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Invoice extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $fillable = ['client_id','invoice_number',
        'issue_date', 'due_date', 'from_address', 'to_address', 'currency_id', 'type', 'tax_rate','client','conversion_rate','notes','status','total_amount'
    ];
    protected static function boot()
    {
        parent::boot();
        static::creating(function (Model $model) {
            $model->setAttribute($model->getKeyName(), Uuid::uuid4());
        });
    }
    public function client()
    {
        return $this->hasOne(Client::class, 'id', 'client_id');
    }
    public function currency()
    {
        return $this->hasOne(Currency::class, 'id', 'currency_id');
    }
    public function items()
    {
        return $this->hasMany(InvoiceItem::class, 'invoice_id', 'id');
    }

    public function getRouteKeyName()
    {
        return 'id';
    }
}
