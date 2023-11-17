<?php

namespace App\Listeners;

use App\Events\SendMessage;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Http;

class SendMessageListener implements ShouldQueue
{
    use InteractsWithQueue;

    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\SendMessage  $event
     * @return void
     */
    public function handle(SendMessage $event)
    {
        $sendMessageData = $event->data;


        return $sendMessageData;

        // Emit the event to Socket.io server
        Http::post("http://127.0.0.1:8000/send-message", [
            'SendMessage' => $sendMessageData,
        ]);
    }
}
