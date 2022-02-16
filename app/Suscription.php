<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suscription extends Model
{
    protected $table = 'suscriptions';
    protected $fillable = [
        'suscription', 'slug', 'price', 'description',
    ];
    public $timestamps = false;
}
