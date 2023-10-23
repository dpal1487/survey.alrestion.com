<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Company;
use App\Models\Country;
use App\Models\CompanySize;
use Illuminate\Http\Request;
use App\Models\CompanyAccount;
use App\Models\CompanyAddress;
use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use App\Http\Resources\AddressResource;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\CountryResource;
use App\Models\Account;
use App\Models\Address;
use App\Models\CorporationType;


class CompanyController extends Controller
{
    public $countries, $status, $address, $company;
    public function __construct()
    {
        $this->countries = CountryResource::collection(Country::orderBy('name', 'asc')->get());
        $this->address = new AddressResource(CompanyAddress::first());
        $this->company = new CompanyResource(Company::first());
    }

    public function show()
    {
        $address = CompanyAddress::first();
        return Inertia::render('Company/Overview', [
            'company' => $this->company,
            'address' => new AddressResource($address),
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'company_name' => 'required',
            'tax_number' => 'required',
            'description' => 'required',
        ]);
        $company = Company::where('id', 1)->update([
            'company_name' => $request->company_name,
            'tax_number' => $request->tax_number,
            'description' => $request->description,
        ]);
        if ($company) {
            return redirect("/company")->with('flash', ['message' => 'Company successfully updated.']);
        }
        return redirect()->back()->withErrors(['Opps something went wrong!']);
    }
    public function address()
    {
        $address = CompanyAddress::first();
        if ($address) {
            return Inertia::render('Company/Address', [
                'address' => new AddressResource($address),
                'company' => $this->company,
                'countries' => $this->countries
            ]);
        } else {
            return Inertia::render('Company/Address', [
                'company' => $this->company,

                'countries' => $this->countries
            ]);
        }
    }

    public function updateAddress(Request $request)
    {
        $request->validate([
            'address_line_1' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',
            'pincode' => 'required',
        ]);
        if (Company::where(['id' => $request->company_id])->first()) {
            if ($address = CompanyAddress::where(['company_id' => $request->company_id])->first()) {
                $address = Address::where(['id' => $request->id])->update([
                    'address_line_1' => $request->address_line_1,
                    'address_line_2' => $request->address_line_2,
                    'city' => $request->city,
                    'state' => $request->state,
                    'country_id' => $request->country,
                    'pincode' => $request->pincode,
                ]);
                return redirect("/company/address")->with('flash', ['message' => 'Address successfully updated.']);
            } else {
                $address = Address::create([
                    'address_line_1' => $request->address_line_1,
                    'address_line_2' => $request->address_line_2,
                    'city' => $request->city,
                    'state' => $request->state,
                    'country_id' => $request->country,
                    'pincode' => $request->pincode,
                ]);
                if ($address) {
                    $address = CompanyAddress::create([
                        'address_id' => $address->id,
                        'company_id' => $request->company_id,
                    ]);
                }
                return redirect("/company/address")->with('flash', ['message' => 'Address successfully created.']);
            }
            return redirect()->back()->withErrors(['Opps something went wrong!']);
        }
        return redirect()->back();
    }

    public function account()
    {
        $account = Account::first();
        if ($account) {
            return Inertia::render('Company/Account', [
                'account' => new AccountResource($account),
                'company' => $this->company,
                'address' => $this->address,
            ]);
        } else {
            return Inertia::render('Company/Account', [
                'company' => $this->company,
                'address' => $this->address,
            ]);
        }
    }

    public function updateAccount(Request $request)
    {
        $request->validate([
            'bank_name' => 'required',
            'bank_address' => 'required',
            'beneficiary_name' => 'required',
            'account_number' => 'required',
            'routing_number' => 'required',
            'swift_code' => 'required',
            'ifsc_code' => 'required',
            'sort_code' => 'required',
        ]);
        $account = Account::where(['id' => 1])->update([
            'bank_name' => $request->bank_name,
            'bank_address' => $request->bank_address,
            'beneficiary_name' => $request->beneficiary_name,
            'account_number' => $request->account_number,
            'routing_number' => $request->routing_number,
            'swift_code' => $request->swift_code,
            'ifsc_code' => $request->ifsc_code,
            'sort_code' => $request->sort_code,
        ]);
        if ($account) {

            return redirect("/company/account")->with('flash', ['message' => 'Account successfully updated.']);
        }
        return redirect()->back()->withErrors(['Opps something went wrong!']);
    }
}
