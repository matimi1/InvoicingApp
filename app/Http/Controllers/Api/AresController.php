<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AresController extends Controller
{
    public function getAres($ico)
    {
        $url = 'https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=';
        $response = Http::get($url . $ico);
        $ares_response = $response->body();
        return $ares_response;
    }
}
