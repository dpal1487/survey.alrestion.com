<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientListResource;
use App\Http\Resources\CloseProjectListResource;
use App\Http\Resources\ProjectStatusResource;
use App\Models\Client;
use App\Models\CloseProject;
use App\Models\ProjectStatus;
use App\Models\Respondent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CloseProjectController extends Controller
{
    public $clients, $countries, $suppliers, $status, $company, $user;

    public function __construct()
    {
        $this->clients = ClientListResource::collection(Client::where(['status' => 1])->get());
        $this->status = ProjectStatus::orderBy('id', 'asc')->get();
    }

    public function index(Request $request)
    {
        $projects = CloseProject::orderBy('updated_at', 'desc')->groupBy('project_id');
        if (Auth::user()->role->role->slug == 'user') {
            $projects = $projects->where(['status' => 'live']);
        }
        if (!empty($request->q)) {
            $projects = $projects->where('project_name', 'like', "%{$request->q}%")->orWhere('project_id', 'like', "%{$request->q}%");
        }
        if (!empty($request->status)) {
            $projects = $projects->where('status', $request->status);
        }
        if (!empty($request->client)) {
            $projects = $projects->where('client_id', $request->client);
        }
        $projects = $projects->paginate(20)->appends(request()->query());

        return Inertia::render('CloseProject/Index', [
            'projects' => CloseProjectListResource::collection($projects),
            'status' => ProjectStatusResource::collection($this->status),
            'clients' => $this->clients,
        ]);
    }
    public function restore(Request $request)
    {

        $projects = CloseProject::where('project_id', '=', $request->id)->get();

        foreach ($projects as $project) {
            $closeProject = Respondent::create([
                'client_browser' => $project->client_browser,
                'device' => $project->device,
                'end_ip' => $project->end_ip,
                'id' => $project->id,
                'project_id' => $project->project_id,
                'project_link_id' => $project->project_link_id,
                'starting_ip' => $project->starting_ip,
                'status' => $project->status,
                'supplier_id' => $project->supplier_id,
                'supplier_project_id' => $project->supplier_project_id,
                'user_id' => $project->user_id,
            ]);
        }

        $project->delete();
        return Inertia::render('CloseProject/Index', [
            'projects' => CloseProjectListResource::collection($projects),
            'status' => ProjectStatusResource::collection($this->status),
            'clients' => $this->clients,
        ]);
    }
}
