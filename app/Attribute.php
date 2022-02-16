<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    protected $table = 'vehicle_field';
    protected $fillable = [
        'field_key', 'display_name',
    ];
    public $timestamps = false;
}
