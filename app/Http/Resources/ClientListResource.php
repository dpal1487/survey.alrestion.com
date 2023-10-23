<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientListResource extends JsonResource
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
            'display_name' => $this->display_name,
            'status' => $this->status,
            'name' => $this->name,
            'label'=>"$this->name ($this->display_name)",
            'id' => $this->id,
            'description'=>$this->description,
            'country'=>new CountryResource($this->country),
            'created_at'=>date('d M,Y',strtotime($this->created_at)),
        ];
    }
}
