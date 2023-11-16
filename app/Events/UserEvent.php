<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function broadcastWith()
    {
        return ['name' => $this->user->first_name];
    }
    public function broadcastOn()
    {
        return new PrivateChannel('get-user' . $this->user->first_name);
    }
}
