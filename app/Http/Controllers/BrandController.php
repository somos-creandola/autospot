<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Brand;
use App\Helpers\Notifications;

class BrandController extends Controller
{
    public function store(Request $request){
        $status = false;
        $message = "Marca creada correctamente.";
        $data = $request->all();
        $data["slug"] = Notifications::slug($request->display_name);
        //handle error in database process
        try {
            $brand = Brand::create($data);
            $status = true;
        } catch (\Exception $e) {
            $message =  $e->getMessage();
            Notifications::slack("Hay un error en el guardado de las marcas");
        }
        //response in json for frontend
        return response()->json([
            "status" => $status,
            "request" => $request->all(),
            "message" => $message
        ], 200);
    }
}
