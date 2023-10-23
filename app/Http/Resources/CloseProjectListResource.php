<?php

namespace App\Http\Resources;

use App\Models\CloseProject;
use Illuminate\Http\Resources\Json\JsonResource;

class CloseProjectListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $collection = collect(CloseProject::where('project_id', $this->project?->id)->get());
        $terminate = $collection->where('status', 'terminate');
        $complete = $collection->where('status', 'complete');
        $security_terminate = $collection->where('status', 'security-terminate');
        $incomplete = $collection->where('status', NULL);
        $quotafull = $collection->where('status', 'quotafull');
        return [
            'id' => $this->project?->id,
            'project_id' => $this->project?->project_id,
            'user' => $this->project?->user?->first_name . ' ' . $this->project?->user?->last_name,
            'project_name' => $this->project?->project_name,
            'project_type' => ucfirst($this->project?->project_type),
            'sample_size' => $this->project?->project_link,
            'client' => $this->project?->client,
            'reports' => [
                'total_clicks' => count($collection),
                'completes' => count($complete),
                'terminates' => count($terminate),
                'quotafull' => count($quotafull),
                'incompletes' => count($incomplete),
                'security_terminates' => count($security_terminate),
                'total_ir' => (count($complete) > 0) ? intval((count($complete) / (count($complete) + count($terminate))) * 100) . '%' : '0%'
            ],
            'created_at' => date("d/M/Y h:i:s a", strtotime($this->created_at)),
            'status' => $this->project?->status,
        ];
    }
}
