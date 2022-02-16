<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BrandModel extends Model
{
    protected $table = 'brand_model';
    protected $fillable = [
        'display_name', 'slug',
    ];
    public $timestamps = false;
}
