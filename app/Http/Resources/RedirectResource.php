<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RedirectResource extends JsonResource
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
            'supplier_id' => $this->supplier_id,
            'complete_url' => $this->complete_url,
            'terminate_url' => $this->terminate_url,
            'quotafull_url' => $this->quotafull_url,
            'security_terminate_url' => $this->security_terminate_url,
        ];
    }
}
