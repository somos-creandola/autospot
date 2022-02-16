<?php

namespace App\Helpers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Pusher\Pusher;
use Mail;
use App\Instalacion;
use Image;

class ImagesProccess{

    public static function saveImage($path): array
    {
        try {
            $image_name = time().$path->getClientOriginalName();
            $path = Image::make($path)
            ->resize(1000, 800, function ($constraint) { $constraint->aspectRatio(); } )
            ->encode('jpg',75);
            $store = Storage::disk('digitalocean')->put($image_name, ($path));
            return [
                'status' => true,
                'path' => "https://somoscreandola.nyc3.digitaloceanspaces.com/fundeso/".$image_name,
                'store' => $store,
                'message' => 'Imagen Cargada correctamente',
            ];
        } catch (\Exception $e) {
            return [
                "status" => false,
                "error" => $e->getMessage(),
                "path" => null,
                "store" => false,
                'message' => 'Hay un error de guardado de las imagenes, por favor consulte con la mesa d eayuda',
            ];
        }

        return 1;
    }

    public static function saveImages($paths): array
    {
        $status = false;
        $message = "No se encontraron imagenes";
        $data;
        foreach($paths as $file){
            $image_name = time().$file->getClientOriginalName();
            $pathfield = Image::make($file)
            ->resize(1000, 800, function ($constraint) { $constraint->aspectRatio(); } )
            ->encode('jpg',75);
            try {
                Storage::disk('digitalocean')->put($image_name, ($pathfield));
                $data[] = "https://somoscreandola.nyc3.digitaloceanspaces.com/fundeso/".$image_name; 
                $status = true; 
                $message = 'Imagen Cargada correctamente';
            } catch (\Exception $e) {
                return [
                    "status" => false,
                    "error" => $e->getMessage(),
                    "path" => null,
                    "store" => false,
                    'message' => 'Hay un error de guardado de las imagenes, por favor consulte con la mesa d eayuda',
                ];
            }
        }

        return [
            'status' => $status,
            'path' => $data,
            'message' => $message,
        ];
    }

}