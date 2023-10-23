<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'name' => $this->name,
            'display_name' => $this->display_name,
            'account_email' => $this->account_email,
            'email_address' => $this->email_address,
            'contact_number' => $this->contact_number,
            'status' => $this->status,
            'id' => $this->id,
            'description' => $this->description,
            'tax_number' => $this->tax_number,
            'label'=>$this->name." (".$this->display_name.")",
            'created_at' => date('d M,Y', strtotime($this->created_at)),
            'reports'=>[
                'total_projects'=>count($this->projects),
                'live_projects'=>count($this->projects->where('status','live')),
                'hold_projects'=>count($this->projects->where('status','hold')),
                'close_projects'=>count($this->projects->where('status','close')),
            ]
        ];
    }
}
