<?php

namespace App\Http\Controllers;

use App\Exports\IdExport;
use App\Imports\IdImport;
use App\Models\FinalId;
use App\Models\Project;
use App\Models\SupplierSurvey;
use App\Models\Survey;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class FinalIdController extends Controller
{
    public function import(Request $request)
    {
        if ($request->hasFile('file')) {
            if (Excel::import(new IdImport($request->id), $request->file('file'))) {
                return response()->json(['success' => true, 'message' => 'Import file successfully']);
            }
            return response()->json(['success' => true, 'message' => 'Opps! something went wrong.']);
        }
    }
    public function export($id)
    {
        $project = Project::find($id);
        if (FinalId::where('project_id', $id)->first() && Survey::where('project_id', $id)->first()) {
            return Excel::download(new IdExport($id), $project->project_id . '.xlsx');
        }
        return redirect('/project');
    }
}
