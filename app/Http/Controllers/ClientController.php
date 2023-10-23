<?php

namespace App\Http\Controllers;

use App\Exports\ClientProjectReports;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CountryResource;
use App\Models\Address;
use App\Models\Client;
use App\Models\ClientAddress;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\AddressResource;
use App\Http\Resources\ProjectListResource;
use App\Http\Resources\ProjectStatusResource;
use App\Models\Project;
use App\Models\ProjectStatus;
use Maatwebsite\Excel\Facades\Excel;

class ClientController extends Controller
{
    public $countries, $status;
    public function __construct()
    {
        $this->countries = CountryResource::collection(Country::orderBy('name', 'asc')->get());
        $this->status = ProjectStatus::orderBy('id', 'asc')->get();
    }
    public function index(Request $request)
    {
        $clients = Client::latest();
        if (!empty($request->q)) {
            $clients = $clients->where('name', 'like', "%{$request->q}%")->orWhere('display_name', 'like', "%{$request->q}%");
        }
        if (!empty($request->status)) {
            $clients = $clients->where('status', $request->status);
        }
        $clients = $clients->paginate(10)->appends(request()->query());
        return Inertia::render('Client/Index', [
            'clients' => ClientResource::collection($clients),
        ]);
    }
    public function create()
    {
        $clients = new Client();
        $clients = $clients->paginate(20)->appends(request()->query());
        return Inertia::render('Client/Create', [
            'countries' => $this->countries,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'client_name' => 'required',
            'display_name' => 'required',
            'email_address' => 'required|email',
            'account_email' => 'required|email',
            'mobile' => 'required|numeric|min:10',
            'tax_number' => 'required',
            'description' => 'required',
        ]);
        $client = Client::create(
            [
                'name' => $request->client_name,
                'display_name' => $request->display_name,
                'email_address' => $request->email_address,
                'account_email' => $request->account_email,
                'contact_number' => $request->mobile,
                'tax_number' => $request->tax_number,
                'description' => $request->description,
                'status' => 1
            ]
        );
        if ($client) {
            return redirect("/clients")->with('flash', createMessage('Client'));
        }
        return redirect()->back()->withErrors(errorMessage());
    }
    public function getClient($id)
    {
        return Client::find($id);
    }
    public function show($id)
    {
        $address = ClientAddress::where(['client_id' => $id])->get()->sortByDesc('address.is_primary');
        return Inertia::render('Client/Overview', [
            'client' => new ClientResource($this->getClient($id)),
            'addresses' => count($address) > 0 ? AddressResource::collection($address) : ['data' => []],
            'countries' => CountryResource::collection($this->countries)
        ]);
    }
    public function edit($id)
    {
        return Inertia::render('Client/Create', [
            'client' => new ClientResource($this->getClient($id)),
        ]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'client_name' => 'required',
            'display_name' => 'required',
            'email_address' => 'required|email',
            'account_email' => 'required|email',
            'mobile' => 'required|numeric|min:10',
            'tax_number' => 'required',
            'description' => 'required',
        ]);
        $client = Client::where(['id' => $request->id])->update(
            [
                'name' => $request->client_name,
                'display_name' => $request->display_name,
                'email_address' => $request->email_address,
                'account_email' => $request->account_email,
                'contact_number' => $request->mobile,
                'tax_number' => $request->tax_number,
                'description' => $request->description,
            ]
        );
        if ($client) {
            if ($request->action == 'overview') {
                return redirect("/client/$request->id")->with('flash', updateMessage('Client'));
            }
            return redirect("/clients")->with('flash', updateMessage('Client'));
        }
        return redirect()->back()->withErrors(errorMessage());
    }
    public function destroy($id)
    {
        $client = Client::where('id', $id)->delete();
        if ($client) {
            if (Project::where('client_id', $id)->get()) {
                Project::where('client_id', $id)->delete();
            }
            if (ClientAddress::where('client_id', $id)->get()) {
                ClientAddress::where('client_id', $id)->delete();
            }
            return response()->json(deleteMessage('Client'));
        }
    }
    public function projects(Request $request, $id)
    {
        $projects = Project::where(['client_id' => $id])->latest();
        if (!empty($request->q)) {
            $projects = $projects->where('project_name', 'like', "%$request->q%")
                ->orWhere('project_id', 'like', "%$request->q%");
        }
        $address = ClientAddress::where(['client_id' => $id])->get()->sortByDesc('address.is_primary');
        return Inertia::render('Client/Projects', [
            'client' => new ClientResource($this->getClient($id)),
            'addresses' => count($address) > 0 ? AddressResource::collection($address) : ['data' => []],
            'projects' => ProjectListResource::collection($projects->paginate(20)->appends(request()->query())),
            'status' => ProjectStatusResource::collection($this->status),
        ]);
    }

    public function address($id)
    {
        $address = ClientAddress::where(['client_id' => $id])->first();
        if ($address) {
            return response()->json(['success' => true, 'data' => new AddressResource($address)]);
        }
        return response()->json(['success' => false, 'message' => 'Address Not Found.']);
    }
    public function addresses($id)
    {
        $address = ClientAddress::where(['client_id' => $id])->get()->sortByDesc('address.is_primary');
        return Inertia::render('Client/Address', [
            'addresses' => count($address) > 0 ? AddressResource::collection($address) : ['data' => []],
            'client' => new ClientResource($this->getClient($id)),
            'countries' => $this->countries
        ]);
    }
    public function updateAddress(Request $request, $id)
    {
        $address = [];
        $request->validate([
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',
            'pincode' => 'required',
        ]);
        if (Client::where(['id' => $id])->first()) {
            if ($addresses = ClientAddress::where(['client_id' => $id])->get()) {
                if ($request->is_primary) {
                    foreach ($addresses as $address) {
                        $address = Address::where(['id' => $address->address_id])->update(['is_primary' => 0]);
                    }
                }
                $address = Address::where(['id' => $request->id])->update([
                    'address' => $request->address,
                    'city' => $request->city,
                    'state' => $request->state,
                    'country_id' => $request->country,
                    'pincode' => $request->pincode,
                    'is_primary' => $request->is_primary ? 1 : 0,
                ]);
            }
            if ($address) {
                return redirect()->back()->with('flash', updateMessage('Address'));

            }
            return redirect()->back()->withErrors(errorMessage());
        }
        return redirect()->back();
    }
    public function addAddress(Request $request, $id)
    {
        $address = [];
        $request->validate([
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',
            'pincode' => 'required',
        ]);
        if (Client::where(['id' => $id])->first()) {
            $addresses = ClientAddress::where(['client_id' => $id])->get();
            if ($request->is_primary) {
                foreach ($addresses as $address) {
                    $address = Address::where(['id' => $address->address_id])->update(['is_primary' => 0]);
                }
            }
            $address = Address::create([
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'country_id' => $request->country,
                'pincode' => $request->pincode,
                'is_primary' => $request->is_primary ? 1 : 0,
            ]);

            $address = ClientAddress::create(['client_id' => $id, 'address_id' => $address->id]);

            if ($address) {
                return redirect()->back()->with('flash', createMessage('Address'));
            }
            return redirect()->back()->withErrors(errorMessage());
        }
        return redirect()->back();
    }
    public function delAddress($id)
    {
        $client = ClientAddress::where('address_id', $id)->first();

        if (ClientAddress::where(['address_id' => $id])->delete()) {
            if (Address::where(['id' => $id])->delete()) {

                return response()->json(deleteMessage('Address'));
            }
        }
        return response()->json(errorMessage());
    }
    public function changeStatus(Request $request)
    {
        if (Client::where(['id' => $request->id])->update(['status' => $request->status ? 1 : 0])) {
            $status = $request->status == 0  ? "Inactivate" : "Activate";
            return response()->json(statusMessage('Client'));
        }
        return response()->json(errorMessage());
    }

    public function exportProjectIds(Request $request)
    {
        $client = Client::where('id', $request->id)->first();
        
        return Excel::download(new ClientProjectReports($request), $client->display_name."ProjectReport.xlsx");
    }
}
