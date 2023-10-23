<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\ProjectIdExport;
use App\Exports\ProjectLinkIdExport;
use App\Exports\RespondentReport;
use App\Models\Project;
use App\Models\ProjectLink;
use Maatwebsite\Excel\Facades\Excel;

class ExportExcelController extends Controller
{

    public function exportRespondent(Request $request)
    {
        return Excel::download(new RespondentReport($request), "respondent.xlsx");
    }

    public function exportId($id)
    {
        $project = Project::find($id);
        if ($project) {
            return Excel::download(new ProjectIdExport($project->id), $project->project_id . '.xlsx');
        }
    }

    public function exportSupplier($id)
    {
        $project_link = ProjectLink::where('project_id', $id)->first();
        if ($project_link) {
            return Excel::download(new ProjectLinkIdExport($project_link->id), $project_link->project_name . '.xlsx');
        }
    }
}
