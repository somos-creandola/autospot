<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Image;
use App\User;
use App\UserRole;
use App\Helpers\ImagesProccess;
use App\Helpers\Notifications;

class UserController extends Controller
{
    public function search(Request $request){
        $user = User::select("user.id","user.display_name","user.display_name","user.photo_url", "user.contact_cel", "user.uuid", "user_role.role_type as role_id")
                    ->where("email", $request->email)
                    ->where('uuid', $request->uid)
                    ->join('user_role', 'user.role_id', '=', 'user_role.id')
                    ->first();
                    
        $status = true;
        $message = "Usuario encontrado exitosamente";

        if(!$user){
            $user = $this->createUser($request);
            if (!is_array($user)) {
                $message = "Usuario creado exitosamente";
            }else{
                $message = $user["error"];
                $status = $user["status"];
            }
        }else{
            Notifications::slack("El usuario ".$user->display_name." acaba de iniciar sección");
        }
        
        return response()->json([
            'status' => $status,
            'message' => $message,
            'response' => $user,
            'request' => $request->all(),
        ], 200);
    }

    public function createUser($request){
        $apiKey = $request->apiKey;
        $displayName = $request->displayName;
        $email = $request->email;
        $emailVerified = $request->emailVerified;
        $lastLoginAt = $request->lastLoginAt;
        $photoURL = $request->photoURL;
        $uid = $request->uid;
        $user = null;

        $role = new UserRole();
        try {
            $role->save();
        } catch (\Throwable $th) {
            return [
                'status' => false,
                'error' => $th,
            ];
        }

        try {
            $user = new User();
            $user->uuid = $uid; 
            $user->email = $email; 
            $user->display_name = $displayName; 
            $user->contact_cel = "NO_CEL"; 
            $user->role_id = $role->id; 
            $user->photo_url = $photoURL;
            $user->save();
        } catch (\Throwable $th) {
            return[
                'status' => false,
                'error' => $th,
            ];
        }

        $resp = User::select("user.id","user.display_name","user.display_name","user.photo_url", "user.contact_cel", "user.uuid", "user_role.role_type as role_id")
                    ->where("user.id", $user->id)
                    ->join('user_role', 'user.role_id', '=', 'user_role.id')
                    ->first();
        Notifications::slack("Se acaba de registrar el usuario: ".$resp->display_name);
        return $resp;
    }

    public function test(Request $request){
        $path = $request->file('imagen');
        $paths = $request->file('all_images');
        //variables for save the route of images
        $rutaImagenInDigitalOcean = null;
        $rutaPackImagesInDigitalOcean = null;

        //save all images
        if ($request->hasFile("all_images")) {
            $rutaPackImagesInDigitalOcean = ImagesProccess::saveImages($request->file('all_images'));
        }

        if ($request->hasFile('imagen')) {
            $rutaImagenInDigitalOcean = ImagesProccess::saveImage($request->file('imagen'));
        }
        return response()->json([
            "status" => true,
            "rutaImagenInDigitalOcean" => $rutaImagenInDigitalOcean,
            "rutaPackImagesInDigitalOcean" => $rutaPackImagesInDigitalOcean,
            "request" => $request->all(),
        ], 200);
    }
}
