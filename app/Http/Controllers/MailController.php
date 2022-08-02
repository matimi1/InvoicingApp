<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\TestEmail;

use App\Http\Requests;
use App\Http\Controllers\Controller;


class MailController extends Controller
{
    public function basic_email(Request $request)
    {
        $data = array(
            'fullname' => $request->input('fullname'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'organisation' => $request->input('organisation'),
            'text' => $request->input('text'),
        );

        Mail::send('mail.message', $data, function ($message) {
            $message->to('easyinvoice00@gmail.com', 'Easy Invoice Team')->subject('Laravel Basic Testing Mail');
            $message->from('easyinvoice00@gmail.com', 'Easy Invoice Team');
            // $message->text('<h1>123</h1>');
        });
        return "A message has been sent";
    }

    public function test_email(Request $request)
    {


        $data = [
            'fullname' => $request->input('fullname'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'organisation' => $request->input('organisation'),
            'text' => $request->input('text'),
        ];

        //dd($data);

        Mail::to('easyinvoice00@gmail.com')->send(new TestEmail($data));

        return "A message has been sent";
    }

    // public function html_email()
    // {
    //     $data = array('name' => "Virat Gandhi");
    //     Mail::send('mail', $data, function ($message) {
    //         $message->to('abc@gmail.com', 'Tutorials Point')->subject('Laravel HTML Testing Mail');
    //         $message->from('xyz@gmail.com', 'Virat Gandhi');
    //     });
    //     echo "HTML Email Sent. Check your inbox.";
    // }
    // public function attachment_email()
    // {
    //     $data = array('name' => "Virat Gandhi");
    //     Mail::send('mail', $data, function ($message) {
    //         $message->to('abc@gmail.com', 'Tutorials Point')->subject('Laravel Testing Mail with Attachment');
    //         $message->attach('C:\laravel-master\laravel\public\uploads\image.png');
    //         $message->attach('C:\laravel-master\laravel\public\uploads\test.txt');
    //         $message->from('xyz@gmail.com', 'Virat Gandhi');
    //     });
    //     echo "Email Sent with attachment. Check your inbox.";
    // }
}
