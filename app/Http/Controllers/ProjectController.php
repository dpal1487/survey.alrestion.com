<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use App\Models\Country;
use App\Models\Project;
use App\Models\Supplier;
use App\Imports\IdImport;
use App\Models\Respondent;
use App\Models\ProjectLink;
use App\Models\CloseProject;
use Illuminate\Http\Request;
use App\Models\ProjectStatus;
use App\Exports\ProjectReport;
use App\Exports\ExportIdExport;
use App\Models\CloseRespondent;
use App\Models\SupplierProject;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Resources\CountryResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\ClientListResource;
use App\Http\Resources\ProjectLinkResource;
use App\Http\Resources\ProjectListResource;
use App\Http\Resources\SupplierListResource;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use App\Http\Resources\ProjectStatusResource;
use App\Http\Resources\SupplierProjectResource;

class ProjectController extends Controller
{
    public $clients, $countries, $suppliers, $status, $company, $user;

    public function __construct()
    {
        $this->clients = ClientListResource::collection(Client::where(['status' => 1])->get());
        $this->countries = CountryResource::collection(Country::orderBy('name', 'asc')->get());
        $this->suppliers = SupplierListResource::collection(Supplier::orderBy('supplier_name', 'asc')->get());
        $this->status = ProjectStatus::orderBy('id', 'asc')->get();
    }

    public function index(Request $request)
    {
        $projects = Project::orderBy('updated_at', 'desc')->where('status', '!=', 'close');
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

        return Inertia::render('Project/Index', [
            'projects' => ProjectListResource::collection($projects),
            'status' => ProjectStatusResource::collection($this->status),
            'clients' => $this->clients,
        ]);
    }
    public function create()
    {
        $this->clients = ClientListResource::collection(Client::where(['status' => 1])->get());
        $this->status = ProjectStatus::orderBy('id', 'asc')->get();
        $this->countries = CountryResource::collection(Country::orderBy('name', 'asc')->get());
        return Inertia::render('Project/Create', [
            'clients' => ClientListResource::collection($this->clients),
            'countries' => CountryResource::collection($this->countries),
            'status' => ProjectStatusResource::collection($this->status)
        ]);
        return redirect('/');
    }
    public function store(Request $request)
    {
        $id = IdGenerator::generate(['table' => 'projects', 'field' => 'project_id', 'length' => 10, 'prefix' => 'ARS' . date('ym')]);
        $request->validate([
            'project_name' => 'required|unique:projects,project_name',
            'client' => 'required',
            'project_cpi' => 'required',
            'project_length' => 'required|numeric',
            'project_ir' => 'required|numeric',
            'start_date' => 'required',
            'end_date' => 'required',
            'project_status' => 'required',
            'project_link' => 'required|url',
            'project_country' => 'required',
            'device_type' => 'required',
            'project_type' => 'required',
            'sample_size' => 'required',
        ]);
        if (!Client::where(['id' => $request->client])->get() && !Country::find($request->project_country)) {
            return redirect()->back()->withErrors(errorMessage());
        }
        if ($project = Project::create([
            'project_id' => $id,
            'project_name' => $request->project_name . " Clone",
            'client_id' => $request->client,
            'user_id' => Auth::user()->id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'device_type' => json_encode($request->device_type),
            'project_type' => $request->project_type,
            'target' => $request->target,
            'status' => $request->project_status,
        ])) {
            if (ProjectLink::create([
                'project_id' => $project->id,
                'user_id' => Auth::user()->id,
                'cpi' => $request->project_cpi,
                'project_name' => $request->project_name,
                'loi' => $request->project_length,
                'ir' => $request->project_ir,
                'project_link' => $request->project_link,
                'sample_size' => $request->sample_size,
                'notes' => $request->notes,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'country_id' => $request->project_country,
                'status' => $request->project_status,
            ])) {
                if (!empty($request->add_more)) {
                    return redirect("/project/create")->with('flash', createMessage('Project'));
                }
                return redirect("/project/$project->id")->with('flash', createMessage('Project'));
            }
            return redirect()->back()->withErrors(errorMessage());
        }
    }

    public function projectClone(Request $request)
    {
        $autoNumber =  time();
        $number = $autoNumber % 10;
        function extractBaseAndNumber($inputString)
        {

            $autoNumber =  time();
            $number = $autoNumber % 10;
            $pattern = '/^(.+) clone-(\d+)$/';
            if (preg_match($pattern, $inputString, $matches)) {
                return [
                    "base" => $matches[1],
                    "number" => $number
                ];
            } else {
                return [
                    "base" => $inputString,
                    "number" => 1
                ];
            }
        }

        $project = Project::where('id', $request->id)->first();

        $projectLinks = ProjectLink::where('project_id', $project->id)->get();
        $id = IdGenerator::generate(['table' => 'projects', 'field' => 'project_id', 'length' => 10, 'prefix' => 'ARS' . date('ym')]);
        $autoNumber =  time();
        $clone = $autoNumber % 10;
        if ($project) {
            if ($project = Project::create([
                'project_id' => $id,
                // 'project_name' => $project->project_name . ' Clone -' . $clone,
                'project_name' => extractBaseAndNumber($project->project_name)["base"] . " clone-" . (extractBaseAndNumber($project->project_name)["number"] + $number),

                'client_id' => $project->client_id,
                'user_id' => Auth::user()->id,
                'start_date' => $project->start_date,
                'end_date' => $project->end_date,
                'device_type' => $project->device_type,
                'project_type' => $project->project_type,
                'target' => $project->target,
                'status' => $project->status,
            ])) {
                foreach ($projectLinks as $projectlink) {
                    ProjectLink::create([
                        'project_id' => $project->id,
                        'user_id' => Auth::user()->id,
                        'cpi' => $projectlink->cpi,
                        'project_name' => $projectlink->project_name,
                        'loi' => $projectlink->loi,
                        'ir' => $projectlink->ir,
                        'project_link' => $projectlink->project_link,
                        'sample_size' => $projectlink->sample_size,
                        'notes' => $projectlink->notes,
                        'start_date' => $projectlink->start_date,
                        'end_date' => $projectlink->end_date,
                        'country_id' => $projectlink->country_id,
                        'status' => $projectlink->status,
                    ]);
                }
            }
            return response()->json(createMessage('Project Clone'));
        }
        return redirect()->back()->withErrors(errorMessage());
    }
    public function show(Request $request, $id)
    {
        $project = Project::find($id);
        $links = ProjectLink::where('project_id', $id);
        if (!empty($request->q)) {
            $links = $links->where('project_name', 'like', "%{$request->q}%");
        }
        if (!empty($request->status)) {
            $links = $links->where('status', $request->status);
        }
        if (!empty($project)) {
            return Inertia::render('Project/Show', [
                'project' => new ProjectResource($project),
                'project_links' => ProjectLinkResource::collection($links->get()),
                'clients' => $this->clients,
                'status' => $this->status,
                'countries' => $this->countries
            ]);
        }
        return redirect(route('projects'));
    }
    public function edit($id)
    {
        $project = Project::find($id);

        return Inertia::render('Project/Edit', [
            'project' => new ProjectResource($project),
            'clients' => $this->clients,
            'countries' => CountryResource::collection($this->countries),
            'status' => ProjectStatusResource::collection($this->status)
        ]);
    }
    public function update(Request $request, $id)
    {
        // return $request;
        $request->validate([
            'project_name' => 'required',
            'client' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'project_status' => 'required',
            'device_type' => 'required',
            'project_type' => 'required',
        ]);
        if (Project::where('id', $id)->update([
            'project_name' => $request->project_name,
            'client_id' => $request->client,
            'target' => $request->target,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'device_type' => json_encode($request->device_type),
            'project_type' => $request->project_type,
            'target' => $request->target,
            'status' => $request->project_status,
        ])) {
            return redirect('projects')->with('flash', updateMessage('Project'));
        }
        return redirect()->back()->withErrors(errorMessage());
    }
    public function destroy($id)
    {
        if (Project::where('id', $id)->delete()) {
            ProjectLink::where('project_id', $id)->delete();
            return response()->json(deleteMessage('Project'));
        }
        return response()->json(errorMessage());
    }

    public function status(Request $request)
    {
        if ($request->status == 'close') {
            $respondents = Respondent::where('project_id', '=', $request->id)->get();
            if (count($respondents) > 0) {
                foreach ($respondents as $respondent) {
                    $create =  CloseRespondent::create([
                        'client_browser' => $respondent->client_browser,
                        'device' => $respondent->device,
                        'end_ip' => $respondent->end_ip,
                        'id' => $respondent->id,
                        'project_id' => $respondent->project_id,
                        'project_link_id' => $respondent->project_link_id,
                        'starting_ip' => $respondent->starting_ip,
                        'status' => $respondent->status,
                        'supplier_id' => $respondent->supplier_id,
                        'supplier_project_id' => $respondent->supplier_project_id,
                        'user_id' => $respondent->user_id,
                    ]);
                }
                $respondents = Respondent::where('project_id', '=', $request->id)->delete();
            }
            if (Project::where(['id' => $request->id])->update(['status' => $request->status])) {
                return response()->json(updateMessage('Project status'));
            }
        } else {
            if (Project::where(['id' => $request->id])->update(['status' => $request->status])) {
                return response()->json(updateMessage('Project status'));
            }
            return response()->json(errorMessage());
        }
    }
    public function suppliers(Request $request, $id)
    {
        $project = Project::find($id);
        $projects = SupplierProject::where('project_id', $id);

        // return $projects->get();
        if (!empty($request->supplier)) {
            $projects = $projects->where('supplier_id', 'like', "%{$request->supplier}%");
        }
        if (!empty($request->status)) {
            $projects = $projects->where('status', $request->status);
        }
        if ($project) {
            return Inertia::render('Project/Supplier', [
                'project' => new ProjectResource($project),
                'supplier_projects' => SupplierProjectResource::collection($projects->get()),
                'clients' => $this->clients,
                'status' => $this->status,
                'suppliers' => $this->suppliers
            ]);
        }
        return redirect()->back();
    }

    public function importId(Request $request)
    {
        if ($request->hasFile('file')) {
            if (Excel::import(new IdImport($request->id), $request->file('file')->store('files'))) {
                return response()->json(['success' => true, 'message' => 'Import file successfully']);
            }
            return response()->json(errorMessage());
        }
    }
    public function exportId($id)
    {
        $project = Project::find($id);
        if ($project) {
            return Excel::download(new ExportIdExport($project->id), $project->project_id . '.xlsx');
        }
    }
    public function report($id)
    {
        $project = Project::find($id);
        if ($project) {
            return Excel::download(new ProjectReport($id), $project->project_name . '.xlsx');
        }
    }
}
