<?php

namespace App\Http\Controllers;

use App\Suscription;
use Illuminate\Http\Request;
use App\Helpers\Notifications;

class SuscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $status = false;
        $message = "Suscripción creada correctamente.";
        $data = $request->all();
        $data["slug"] = Notifications::slug($request->suscription);
        //handle error in database process
        try {
            $brand = Suscription::create($data);
            $status = true;
        } catch (\Exception $e) {
            $message =  $e->getMessage();
            Notifications::slack("Hay un error en el guardado de las suscripciones");
        }
        //response in json for frontend
        return response()->json([
            "status" => $status,
            "request" => $request->all(),
            "message" => $message
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function show(Suscription $suscription)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function edit(Suscription $suscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Suscription $suscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Suscription  $suscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Suscription $suscription)
    {
        //
    }
}
