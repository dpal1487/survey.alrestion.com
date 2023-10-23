<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{

    protected $rootView = 'app';
    protected $user = [];
    protected $company = [];
    protected $email = [];
    protected $role = [];
    protected $address = [];
    protected $status = [
        [
            'name' => 'All',
            'value' => '',
        ],
        [
            'name' => 'Active',
            'value' => '1',
        ],
        [
            'name' => 'Inactive',
            'value' => '0',
        ],
    ];


    public function version(Request $request)
    {
        return parent::version($request);
    }


    public function share(Request $request)
    {
        $this->user = $request->user();
        $this->role = $request->user() ? $request->user()->role->role->pluck('slug') : [];
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy())->toArray(), [
                    'user' => $this->user,
                    'status' => $this->status,
                    'role' => $this->role,
                    'flash' => [
                        'message' => fn () => $request->session()->get('message'),
                    ],
                ]);
            },
        ]);
    }
}
