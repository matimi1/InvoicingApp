<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        $address = 'easyinvoice00@gmail.com';
        $subject = 'New message from contact form';
        $name = 'Easy Invoice Team';

        return $this->view('emails.test')
            ->from($address, $name)
            ->cc($address, $name)
            ->bcc($address, $name)
            ->replyTo($address, $name)
            ->subject($subject)
            ->with(
                [
                    'fullname' => $this->data['fullname'],
                    'email' => $this->data['email'],
                    'phone' => $this->data['phone'],
                    'organisation' => $this->data['organisation'],
                    'text' => $this->data['text'],
                ]
            );
    }
}
