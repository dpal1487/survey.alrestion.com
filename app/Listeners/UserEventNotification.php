<?php

namespace App\Listeners;

use App\Events\UserEvent;
use App\Notifications\UserNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UserEventNotification implements ShouldQueue
{
    
    public $user;
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\UserEvent  $event
     * @return void
     */
    public function handle(UserEvent $event)
    {
        try {
            $event->user->notify(new UserNotification());

            //more codes for other things
        } catch (\Exception $e) {
            //
        }
    }
}
