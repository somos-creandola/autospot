<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Notifications;
use App\Helpers\Images;
use App\Attribute;
use App\Brand;
use App\BrandModel;
use App\Suscription;
use App\User;
use App\UserRole;
use App\State;
use App\City;
use App\Post;

class ModelBussineController extends Controller
{
    public function query(){
        $brands = Brand::all();
        $brand_models = BrandModel::all();
        $attributes = Attribute::all();
        $suscriptions = Suscription::all();
        $states = State::all();
        $cities = City::all();
        $posts = Post::all();

        return response()->json([
            "status" => 1,
            "data" => [
                "posts" => $posts,
                "brands" => $brands,
                "brand_models" => $brand_models,
                "attributes" => $attributes,
                "suscriptions" => $suscriptions,
                "states" => $states,
                "cities" => $cities,
            ],
            "message" => "Create model bussine data",
        ], 200);
    }
}
