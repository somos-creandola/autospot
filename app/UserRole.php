<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $table = 'user_role';
    protected $fillable = [
        'role_type', 'can_create',
    ];
    public $timestamps = false;
}
