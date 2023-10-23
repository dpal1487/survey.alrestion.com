<?php

namespace App\Http\Controllers;

use App\Exports\RespondentReport;
use App\Http\Resources\MasterResource;
use App\Http\Resources\UserResource;
use App\Models\Respondent;
use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class MasterController extends Controller
{
    public function index(Request $request)
    {
        $surveys = Respondent::orderBy('created_at', 'desc')->where('supplier_id', "=", Null);
        $users = User::where('status', 1)->orderBy('first_name', 'asc')->get();
        if (!empty($request->q)) {
            $projects = Project::where('project_name', 'like', '%' . $request->q . '%')->get()->pluck('id');
            $surveys = $surveys->whereIn('project_id', $projects);
        }
        if (!empty($request->user)) {
            $surveys = $surveys->where('user_id', $request->user);
        }
        if (!empty($request->status)) {
            $surveys = $surveys->where('status', $request->status);
        }
        if (!empty($request->from_date)) {
            $surveys = $surveys->whereDate('created_at', '>=', $request->from_date)
                ->whereDate('created_at', '<=', $request->to_date);
        }
        $surveys = $surveys->paginate(200)->appends(request()->query());
        return Inertia::render('Master/Index', [
            'surveys' => MasterResource::collection($surveys),
            'users' => UserResource::collection($users)
        ]);
    }
    public function exportReport(Request $request)
    {
        return Excel::download(new RespondentReport($request), "RespondentReport.xlsx");
    }
}
