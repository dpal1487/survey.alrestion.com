<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

use function PHPSTORM_META\map;

class Project extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $fillable = [
        'project_id',
        'project_name',
        'client_id',
        'device_type',
        'project_type',
        'sample_size',
        'status',
        'target',
        'user_id',
        'start_date',
        'end_date',
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
    public function project()
    {
        return $this->hasOne(ProjectLink::class, 'project_id', 'id');
    }
    public function projects()
    {
        return $this->hasMany(ProjectLink::class, 'project_id', 'id');
    }
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function country()
    {
        return $this->hasOne(Country::class, 'id', 'country_id');
    }
    public function total()
    {
        return $this->hasMany(Respondent::class, 'project_id', 'id');
    }
    public function terminate()
    {
        return $this->hasMany(Respondent::class, 'project_id', 'id')->where('status', 'terminate');
    }

    public function complete()
    {
        return $this->hasMany(Respondent::class, 'project_id', 'id')->where('status', 'complete');
    }

    public function quotafull()
    {
        return $this->hasMany(Respondent::class, 'project_id', 'id')->where('status', 'quotafull');
    }

    public function incomplete()
    {
        return $this->hasMany(Respondent::class, 'project_id', 'id')->where('status', NULL);
    }
    public function security_terminate()
    {
        return $this->hasMany(Respondent::class, 'project_id', 'id')->where('status', 'security-terminate');
    }
    public function getRouteKeyName()
    {
        return 'id';
    }
}
