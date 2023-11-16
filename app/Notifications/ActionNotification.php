<?php

namespace App\Notifications;

use App\Models\Project;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ActionNotification extends Notification
{
    use Queueable;

    public $user;
    public $project;

    public function __construct(Project $project, User $user)
    {
        $this->user = $user;
        $this->project = $project;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }


    public function toArray($notifiable)
    {
        return [
            'user_name' => $this->user->first_name . ' ' . $this->user->last_name,
            'id' => $this->project->id,
            'project_id' => $this->project->project_id,
            'project_name' => $this->project->project_name,
        ];
    }
}
