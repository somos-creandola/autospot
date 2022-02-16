<?php

namespace App\Helpers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Pusher\Pusher;
use Mail;
use App\Instalacion;

class Notifications{

    public static function slack($msg): string
    {
        try {
            $response = Http::post('https://hooks.slack.com/services/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', [
                'text' => $msg,
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }

        return 1;
    }


    public static function sendEmails($destinatario, $copia, $plantilla, $data, $asunto): array
    {
        try {
            Mail::send($plantilla, $data, function($msj) use($destinatario, $copia, $asunto){
                $msj->from("presidencia@orgmeteoro.com","Meteoro");
                $msj->subject($asunto);
                $msj->to($destinatario)
                ->bcc($copia);
            });
            return [
                "status" => 1,
                "message" => "Email enviado exitosamente",
                "plantilla" => $plantilla,
                "destinatario" => $destinatario
            ];

        } catch (\Throwable $th) {
            return [
                "status" => 0,
                "error" => $th,
                "message" => "Fallo el envío del mensaje",
                "plantilla" => $plantilla,
                "destinatario" => $destinatario
            ];
        }
    }

    public static function slug(string $str): string
    {
        $str = self::stripVnUnicode($str);
        $str = preg_replace('/[^A-Za-z0-9-]/', ' ', $str);
        $str = preg_replace('/ +/', ' ', $str);
        $str = trim($str);
        $str = str_replace(' ', '-', $str);
        $str = preg_replace('/-+/', '-', $str);
        $str=  preg_replace("/-$/", '', $str);
        return strtolower($str);
    }

    public static function stripVnUnicode(string $str): string
    {
        if (!$str) {
            return false;
        }
        $str = strip_tags($str);
        $unicode = [
            'a' => 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',
            'd' => 'đ',
            'e' => 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
            'i' => 'í|ì|ỉ|ĩ|ị',
            'o' => 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
            'u' => 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
            'y' => 'ý|ỳ|ỷ|ỹ|ỵ',
            'A' => 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
            'D' => 'Đ',
            'E' => 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
            'I' => 'Í|Ì|Ỉ|Ĩ|Ị',
            'O' => 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
            'U' => 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
            'Y' => 'Ý|Ỳ|Ỷ|Ỹ|Ỵ',
        ];
        foreach($unicode as $key  => $value) {
            $str = preg_replace("/($value)/i", $key, $str);
        }
        return $str;
    }

}
