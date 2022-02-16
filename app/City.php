<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'city';
    protected $fillable = [
        'display_name', "state_id", 
    ];
    public $timestamps = false;
}
