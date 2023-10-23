<?php

namespace App\Http\Controllers;

use App\Exports\UserReport;
use App\Http\Resources\RespondentResource;
use App\Http\Resources\UserResource;
use App\Models\Respondent;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class AccountController extends Controller
{
    public $role;
    public function __construct()
    {
        $this->role = Role::get();
    }

    public function index()
    {
        $user = Auth::user();

        return Inertia::render('Account/Overview', [
            'role' => $this->role,
            'user' => new UserResource($user),
        ]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        if ($user->id != 1) {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string',
                'last_name' => 'required|string',
                'gender' => 'required',
                'date_of_birth' => 'required',
            ]);
            if ($validator->fails()) {
                return redirect()->back()->withErrors(['message' => $validator->errors()->first()]);
            }
            if (!Hash::check($request->password, auth()->user()->password)) {
                return back()->withErrors(["message" => "Password Doesn't match!"]);
            }
            if ($user->id) {

                User::where('id', $user->id)->update([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'date_of_birth' => $request->date_of_birth,
                    'gender' => $request->gender,
                    'password' => ($request->password ?  Hash::make($request->password) : auth()->user()->password),
                    'status' => $request->status,
                ]);
                return redirect('/account')->with('flash', ['message' => updateMessage('User')]);
            }
            return redirect('/account')->with('error', ['message' => errorMessage()]);
        }
        return redirect('users')->with('error', "Your can't be edit super admin.");
    }
    public function projects(Request $request)
    {
        $user = Auth::user();
        $surveys = Respondent::where('user_id', $user->id)->orderBy('created_at', 'desc');
        if ($request->q) {
            $surveys = $surveys->whereHas('project', function ($query) use ($request) {
                $query->where('project_name', 'like', "%$request->q%");
            });
        }
        if ($request->status) {
            if ($request->status != 'all') {
                $surveys = $surveys->where('status', $request->status);
            }
        }
        return Inertia::render('Account/Project', [
            'surveys' => RespondentResource::collection($surveys->paginate(100)->appends(request()->query())),
            'user' => new UserResource($user),
        ]);
    }
    public function exportReport(Request $request)
    {
        return Excel::download(new UserReport($request), "exportReport.xlsx");
    }
}
