<?php

namespace App\Http\Controllers;

use App\Http\Resources\CountryResource;
use App\Http\Resources\ProjectLinkResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\RespondentResource;
use App\Http\Resources\SupplierProjectResource;
use App\Models\Country;
use App\Models\Project;
use App\Models\ProjectLink;
use App\Models\Respondent;
use App\Models\SupplierProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MappingController extends Controller
{

    public $clients, $countries, $suppliers, $status;
    public function __construct()
    {
        $this->countries = CountryResource::collection(Country::orderBy('name', 'asc')->get());
    }
    public function create(Request $request, $id)
    {
        $project = ProjectLink::where('project_id', $id)->first();
        if ($project) {
            $links = ProjectLink::where('project_id', $id)->get();
            return Inertia::render('Mapping/Create', [
                'project' => [
                    'project_name' => $project->project_name,
                    'id' => $project->project_id,
                    'cpi' => $project->cpi,
                    'ir' => $project->ir,
                    'loi' => $project->loi,
                    'sample_size' => $project->sample_size,
                    'target' => $project->target,
                ],
                'links' => ProjectLinkResource::collection($links),
                'countries' => $this->countries,
            ]);
        }
        return redirect('/');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $request->validate([
            'project_name' => 'required',
            'project_cpi' => 'required',
            'project_length' => 'required|numeric',
            'project_ir' => 'required|numeric',
            'project_link' => 'required|url',
            'project_country' => 'required',
            'sample_size' => 'required|numeric',
        ]);
        if (ProjectLink::create([
            'project_id' => $id,
            'user_id' => Auth::user()->id,
            'cpi' => $request->project_cpi,
            'project_name' => $request->project_name,
            'loi' => $request->project_length,
            'ir' => $request->project_ir,
            'project_link' => $request->project_link,
            'sample_size' => $request->sample_size,
            'target' => $request->target,
            'country_id' => $request->project_country,
            'status' => $request->status,
        ])) {
            if ($request->add_more) {
                return redirect()->back()->with('flash', createMessage('Project Link'));
            }
            return redirect("/project/" . $id)->with('flash', createMessage('Project Link'));
        }
        return redirect()->back()->withErrors(errorMessage());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $surveys = Respondent::orderBy('created_at', 'desc')->where('project_link_id', $id)->paginate(1000);
        $project = ProjectLink::find($id);
        if ($project) {
            return Inertia::render('Mapping/Show', [
                'project' => new ProjectLinkResource($project),
                'respondents' => RespondentResource::collection($surveys),
                'countries' => $this->countries
            ]);
        }
        return redirect()->back();
    }


    public function edit($id)
    {
        $project = ProjectLink::find($id);
        if ($project) {
            return Inertia::render('Mapping/Edit', [
                'project' => new ProjectLinkResource($project),
                'countries' => $this->countries,
            ]);
        }
        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'project_name' => 'required',
            'project_cpi' => 'required',
            'project_length' => 'required|numeric',
            'project_ir' => 'required|numeric',
            'project_link' => 'required',
            'project_country' => 'required',
            'sample_size' => 'required',
            'status' => 'required',
        ]);
        if ($project = ProjectLink::find($id)) {
            ProjectLink::where('id', $id)->update([
                // 'user_id' => Auth::user()->id,
                'cpi' => $request->project_cpi,
                'project_name' => $request->project_name,
                'loi' => $request->project_length,
                'ir' => $request->project_ir,
                'project_link' => $request->project_link,
                'sample_size' => $request->sample_size,
                'target' => $request->target,
                'country_id' => $request->project_country,
                'status' => $request->status,
            ]);
            return redirect("/project/{$project->project_id}")->with('flash', updateMessage('Project Link'));
        }
        return redirect()->back()->withErrors(errorMessage());
    }
    public function projectLinkSuppliers($id)
    {
        $project = ProjectLink::find($id);
        if ($project) {
            return response()->json([
                'project' => new ProjectLinkResource($project),
                'suppliers' => SupplierProjectResource::collection(SupplierProject::where('project_link_id', $id)->get()),
                'countries' => $this->countries,
            ]);
        }
        return redirect()->back();
    }

    public function suppliers($id)
    {
        $project = ProjectLink::find($id);
        if ($project) {
            return Inertia::render('Mapping/Supplier', [
                'project' => new ProjectLinkResource($project),
                'suppliers' => SupplierProjectResource::collection(SupplierProject::where('project_link_id', $id)->get()),
                'countries' => $this->countries,
            ]);
        }
        return redirect()->back();
    }
    public function destroy($id)
    {
        if (ProjectLink::where('id', $id)->delete()) {
            return response()->json(deleteMessage('Project Link'));
        }
        return response()->json(errorMessage());
    }

    public function status(Request $request)
    {
        if (ProjectLink::where(['id' => $request->id])->update(['status' => $request->status ? 1 : 0])) {
            $status = $request->status  ? "activate" : "inactivate";
            return response()->json(statusMessage('Project Link'));
        }
        return response()->json(errorMessage());
    }

    public function sampleSize(Request $request)
    {
        if (ProjectLink::where(['id' => $request->id])->update(['sample_size' => $request->sample_size])) {
            return response()->json(updateMessage('Sample size'));
            // return redirect("/project/{$request->project_id}")->with('flash', updateMessage('Project Link'));
        }
        return response()->json(errorMessage());
    }
}
