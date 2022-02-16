<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'post';
    protected $fillable = [
        'title', 'description', 'is_featured', 'price', 'currency', 'status', 'contact_cel', 'vehicle_id', 'seller_id', 'city_id', 
    ];
    public $timestamps = false;
}
