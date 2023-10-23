<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'full_name' => $this->first_name.' '.$this->last_name,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'date_of_birth' => $this->date_of_birth,
            'gender' =>ucfirst( $this->gender),
            'status' => $this->status,
            'role' => $this->role?->role,
            'header' =>[
                'total_project' => count($this->projects),
                'complete' => count($this->projects->where('status','complete')),
                'terminate' => count($this->projects->where('status', 'terminate')),
                'quotafull' => count($this->projects->where('status', 'quotafull'))
            ]
        ];
    }
}
