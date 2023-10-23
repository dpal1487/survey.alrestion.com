<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Ramsey\Uuid\Uuid;

class Client extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $fillable = ['name', 'display_name', 'contact_number', 'status', 'email_address', 'account_email', 'description', 'tax_number'];
    protected static function boot()
    {
        parent::boot();
        static::creating(function (Model $model) {
            $model->setAttribute($model->getKeyName(), Uuid::uuid4());
        });

        static::deleting(function ($client) {
            // before delete() method call this
            $client->address()->delete();
            // do the rest of the cleanup...
        });
    }
    public function country()
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }
    public function address()
    {
        return $this->hasOne(ClientAddress::class, 'client_id', 'id');
    }

    public function addresses()
    {
        return $this->hasMany(ClientAddress::class, 'client_id', 'id');
    }
    public function projects()
    {
        return $this->hasMany(Project::class, 'client_id', 'id');
    }
    public function getRouteKeyName()
    {
        return 'id';
    }
}
