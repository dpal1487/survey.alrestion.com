<?php

namespace App\Http\Controllers;

use App\Exports\RespondentReport;
use App\Exports\SupplierReport;
use Illuminate\Http\Request;
use App\Models\ProjectLink;
use App\Models\Project;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{

    public function supplier(Request $request)
    {
        $project = Project::with('project')->where('id', $request->pid)->first();
        return Excel::download(new SupplierReport($request->pid), "$project->project_id.xlsx");
    }

    public function respondent(Request $request)
    {
        $project = Project::with('project')->where('id', $request->pid)->first();
        return Excel::download(new RespondentReport($request->pid), "$project->project_id.xlsx");
    }

    public function ownLink($id)
    {
        $project = ProjectLink::with('project')->where('id', $id)->first();
        return Excel::download(new RespondentReport($project->project_id), "Own_$project->project_name.xlsx");
    }

    public function supplierLink($id)
    {
        $project = ProjectLink::with('project')->where('id', $id)->first();
        return Excel::download(new SupplierReport($project->project_id), "Supplier_$project->project_name.xlsx");
    }
}
