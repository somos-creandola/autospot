<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Notifications;
use App\Attribute;

class AttributeController extends Controller
{
    public function store(Request $request){
        $status = false;
        $message = "Atributo creado correctamente.";
        $data = $request->all();
        $data["field_key"] = Notifications::slug($request->display_name);
        //handle error in database process
        try {
            $attribute = Attribute::create($data);
            $status = true;
        } catch (\Exception $e) {
            $message =  $e->getMessage();
            Notifications::slack("Hay un error en el guardado de los atributos");
        }
        //response in json for frontend
        return response()->json([
            "status" => $status,
            "request" => $request->all(),
            "message" => $message
        ], 200);
    }
}
