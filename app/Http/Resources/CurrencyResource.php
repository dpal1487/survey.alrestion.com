<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CurrencyResource extends JsonResource
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
            'label'=>"$this->name ($this->code,$this->symbol)",
            'id'=>$this->id,
            'code'=>$this->code,
            'symbol'=>$this->symbol,
        ];
    }
}
