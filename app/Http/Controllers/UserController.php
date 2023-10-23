<?php

namespace App\Http\Controllers;

use App\Exports\UserProjectReports;
use App\Http\Resources\RespondentResource;
use App\Http\Resources\UserResource;
use App\Models\Respondent;
use App\Models\Role;
use App\Models\Survey;
use App\Models\User;
use App\Models\UsersRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public $role;
    public function __construct()
    {
        $this->role['roles'] = Role::get();
    }
    public function index(Request $request)
    {
        $users = User::orderBy('first_name', 'asc');
        if ($request->q) {
            $users = $users->where('first_name', 'like', "%{$request->q}%");
        }
        $users = $users->paginate(20)->appends(request()->query());
        return Inertia::render('User/Index', [
            'users' => UserResource::collection($users),
        ]);
    }
    public function transfer()
    {
        $surveys = Survey::get();
        // return $surveys;
        foreach ($surveys as $survey) {
            Respondent::where(['id' => $survey->respondent_id])->update(['user_id' => $survey->user_id, 'project_id' => $survey->project_id, 'project_link_id' => $survey->project_link_id, 'starting_ip' => $survey->starting_ip, 'end_ip' => $survey->end_ip, 'client_browser' => $survey->client_browser, 'device' => $survey->device, 'status' => $survey->status]);
        }
    }
    public function create()
    {
        return Inertia::render('User/Form', [
            'role' => $this->role,
        ]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|unique:users,email',
            'status' => 'required',
            'role' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors(['message' => $validator->errors()->first()]);
        }
        if ($id = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'status' => $request->status,
            'password' => Hash::make($request->password)
        ])) {
            UsersRole::create(['role_id' => $request->role, 'user_id' => $id->id]);
            return redirect('/users')->with('flash', ['message' => 'User added successfully.']);
        }
        return redirect('/users')->with('flash', ['message' => 'Opps! something went wrong.']);
    }

    public function edit($id)
    {
        $user = User::find($id);
        return Inertia::render('User/Form', [
            'user' => new UserResource($user),
            'role' => $this->role,
        ]);
    }
    public function show($id)
    {
        $user = User::find($id);
        return Inertia::render('User/Overview', [
            'user' => new UserResource($user),
            'role' => $this->role,
        ]);
    }
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required',
            'status' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors(['message' => $validator->errors()->first()]);
        }
        // if (!Hash::check($request->password, auth()->user()->password)) {
        //     return back()->withErrors(["message" => "Password Doesn't match!"]);
        // }
        if ($id != 1) {
            if (User::where('id', $id)->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'status' => $request->status,
            ])) {
                UsersRole::where('user_id', $id)->update(['role_id' => $request->role]);
                if ($request->action == "user.overview") {
                    return redirect('/user/' . $id)->with('flash', ['message' => 'User updated successfully.']);
                } else {
                    return redirect('/users')->with('flash', ['message' => 'User updated successfully.']);
                }
            }
            return redirect('/users')->with('flash', ['message' => 'Opps! something went wrong.']);
        }
        return redirect('users')->with('error', "Your can't be edit super admin.");
    }
    public function destroy($id)
    {
        if (User::find($id) && Auth::user()->role->role->slug == 'admin') {
            if (User::where('id', $id)->delete()) {
                return response()->json(['message' => 'Project link deleted successfully.', 'success' => true]);
            }
        }
        return response()->json(['message' => 'Opps! something went wrong.', 'success' => false], 400);
    }

    public function projects(Request $request, $id)
    {

        $surveys = Respondent::where('user_id', $id)->orderBy('created_at', 'desc');
        $user = User::find($id);
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
        return Inertia::render('User/Project', [
            'surveys' => RespondentResource::collection($surveys->paginate(20)->appends(request()->query())),
            'user' => new UserResource($user),
            'role' => $this->role,
        ]);
    }

    public function exportProjectIds(Request $request)
    {
        return Excel::download(new UserProjectReports($request), "UserProjectReport.xlsx");
    }
}
