<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Country;
use App\Models\Supplier;
use App\Models\Respondent;
use Illuminate\Http\Request;
use App\Models\SupplierProject;
use App\Models\SupplierRedirect;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Resources\CountryResource;
use App\Http\Resources\RedirectResource;
use App\Http\Resources\SupplierResource;
use App\Http\Resources\SupplierProjectResource;
use App\Exports\ExportSupplierRespondentReports;
use App\Http\Resources\SuppliersResponedentResource;

class SupplierController extends Controller
{
    public $countries;
    public function __construct($data = array())
    {
        $this->countries = CountryResource::collection(Country::orderBy('name', 'asc')->get());
    }

    public function getSupplier($id)
    {

        $supplier = Supplier::where(['id' => $id])->first();

        return new SupplierResource($supplier);
    }
    public function index(Request $request)
    {

        $suppliers = Supplier::latest();
        if (!empty($request->q)) {
            $suppliers = $suppliers
                ->where('supplier_name', 'like', "%$request->q%")
                ->orWhere('display_name', 'like', "%$request->q%");
        }
        if (!empty($request->s)) {
            $suppliers = $suppliers->where('status', $request->s);
        }
        return Inertia::render('Supplier/Index', [
            'suppliers' => SupplierResource::collection($suppliers->paginate(10)->appends($request->all())),
        ]);
    }


    public function create()
    {
        return Inertia::render('Supplier/Create', [
            'countries' => $this->countries

        ]);
    }
    public function store(Request $request)
    {

        $request->validate([
            'supplier_name' => 'required',
            'display_name' => 'required',
            'email_address' => 'required',
            'website' => 'required',
            'skype_profile' => 'required',
            'linkedin_profile' => 'required',
            'description' => 'required',
            'status' => 'required',
            'complete_url' => 'required',
            'terminate_url' => 'required',
            'quotafull_url' => 'required',
            'security_terminate_url' => 'required',
        ]);
        $supplier = Supplier::create([
            'country_id' => $request->country,
            'supplier_name' => $request->supplier_name,
            'display_name' => $request->display_name,
            'email_address' => $request->email_address,
            'website' => $request->website,
            'skype_profile' => $request->skype_profile,
            'linkedin_profile' => $request->linkedin_profile,
            'description' => $request->description,
            'status' => $request->status,
        ]);
        if ($supplier) { {
                $supplierRedirect = SupplierRedirect::create([
                    'supplier_id' => $supplier->id,
                    'complete_url' => $request->complete_url,
                    'terminate_url' => $request->terminate_url,
                    'quotafull_url' => $request->quotafull_url,
                    'security_terminate_url' => $request->security_terminate_url,
                ]);
                if ($supplierRedirect) {

                    return redirect("/suppliers")->with('flash', ['message' => 'Supplier successfully added.']);
                }
            }
            return redirect()->back()->withErrors(['Opps something went wrong!']);
        }
    }
    public function show($id)
    {
        if ($this->getSupplier($id)) {
            return Inertia::render('Supplier/Overview', [
                'supplier' => $this->getSupplier($id),
                'countries' => $this->countries
            ]);
        }
    }

    public function edit($id)
    {
        return Inertia::render('Supplier/Form', [
            'supplier' => $this->getSupplier($id),
            'countries' => $this->countries
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'supplier_name' => 'required',
            'display_name' => 'required',
            'email_address' => 'required',
            'website' => 'required',
            'skype_profile' => 'required',
            'linkedin_profile' => 'required',
            'description' => 'required',
            'status' => 'required',
        ]);

        $supplier = Supplier::where(['id' => $request->id])->update([
            'country_id' => $request->id,
            'supplier_name' => $request->supplier_name,
            'display_name' => $request->display_name,
            'email_address' => $request->email_address,
            'website' => $request->website,
            'country_id' => $request->country,
            'skype_profile' => $request->skype_profile,
            'linkedin_profile' => $request->linkedin_profile,
            'description' => $request->description,
            'status' => $request->status,
        ]);

        if ($supplier) {
            return redirect("/supplier/$request->id")->with('flash', ['message' => 'Supplier successfully added.']);
        }
        return redirect()->back()->withErrors(['Opps something went wrong!']);
    }

    public function destroy($id)
    {
        $supplier = Supplier::where('id', $id)->first();
        if ($supplier->delete()) {
            SupplierRedirect::where('supplier_id', $supplier->id)->delete();
            return response()->json([
                'success' => true,
                'message' => 'Supplier Deleted Successfully'
            ]);
        }
        return response()->json([
            'success' => false,
            'message' => 'Something Went Wrong '
        ]);
    }

    public function changeStatus(Request $request)
    {

        if (Supplier::where(['id' => $request->id])->update(['status' => $request->status ? 1 : 0])) {
            $status = $request->status == 0  ? "Inactivate" : "Activate";
            return response()->json(['message' => "Your supplier has been " . $status, 'success' => true]);
        }
        return response()->json(['message' => 'Opps! something went wrong.', 'success' => false]);
    }

    public function redirect(Request $request, $id)
    {

        if ($this->getSupplier($id)) {
            $redirect = SupplierRedirect::where('supplier_id', $id)->first();
            return Inertia::render('Supplier/Redirect', [
                'redirect' => !empty($redirect) ? new RedirectResource($redirect) : [],
                'supplier' => $this->getSupplier($id),
            ]);
        }
    }

    public function updateRedirect(Request $request)
    {
        $redirect = [];
        $request->validate([
            'complete_url' => 'required',
            'terminate_url' => 'required',
            'quotafull_url' => 'required',
        ]);
        if (Supplier::where(['id' => $request->supplier_id])->first()) {
            if (SupplierRedirect::where(['supplier_id' => $request->supplier_id])->first()) {
                $redirect = SupplierRedirect::where(['supplier_id' => $request->supplier_id])->update([
                    'complete_url' => $request->complete_url,
                    'terminate_url' => $request->terminate_url,
                    'quotafull_url' => $request->quotafull_url,
                    'security_terminate_url' => $request->security_terminate_url,
                ]);
            } else {
                $redirect = SupplierRedirect::create([
                    'supplier_id' => $request->supplier_id,
                    'complete_url' => $request->complete_url,
                    'terminate_url' => $request->terminate_url,
                    'quotafull_url' => $request->quotafull_url,
                    'security_terminate_url' => $request->security_terminate_url,
                ]);
            }
            if ($redirect) {
                return redirect("/supplier/$request->supplier_id/redirect")->with('flash', ['message' => 'Redirect successfully updated.']);
            }
            return redirect()->back()->withErrors(['Opps something went wrong!']);
        }
        return redirect()->back();
    }


    public function projects(Request $request, $id)
    {
        if ($this->getSupplier($id)) {
            $projects = SupplierProject::where('supplier_id', $id);
            if (!empty($request->q)) {

                $projects = $projects->whereHas('project_link', function ($query) use ($request) {
                    $query->where('project_name', 'like', "%$request->q%");
                });
            }
            // if (!empty($request->s) && $request->s != null) {

            //     $projects = $projects->whereHas('supplier', function ($q) use ($request) {
            //         $q->where('status', $request->s);
            //     });
            // }
            return Inertia::render('Supplier/Projects', [
                'supplier' => $this->getSupplier($id),
                'suppliers' => SupplierProjectResource::collection($projects->paginate(10)->appends(request()->query())),
            ]);
        }
    }

    public function respondents(Request $request, $id)
    {

        $respondents = Respondent::where('supplier_id', $id);

        if (!empty($request->q)) {
            $respondents = $respondents->whereHas('project', function ($query) use ($request) {
                $query->where('project_name', 'like', '%' . $request->q . '%');
            });
        }
        if ($request->status && $request->status != 'all') {
            $respondents = $respondents->where('status', $request->status);
        }
        return Inertia::render('Supplier/Respondents', [
            'respondents' => SuppliersResponedentResource::collection($respondents->paginate(10)->appends(request()->query())),
            'supplier' => $this->getSupplier($id),
        ]);
    }

    public function supplierExports(Request $request, $id)
    {
        return Excel::download(new ExportSupplierRespondentReports($request, $id), "SupplierRespondentReport.xlsx");
    }
}
