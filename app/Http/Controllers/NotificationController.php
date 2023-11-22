<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;
use App\Http\Resources\NotificationsResource;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        if ($request->limit == 10)
        {
            $notifications = Notification::orderBy('created_at', 'desc')
                ->take(10)
                ->get();

            return response()->json(['success' => true, 'data' => NotificationsResource::collection($notifications)]);
        }
        else{
            $notifications = Notification::orderBy('created_at', 'desc')->get();
            return Inertia::render('Notification', [
                'notifications' =>NotificationsResource::collection( $notifications)
            ]);
            // return Inertia::render('Notification', [
            //     'notification' =>NotificationsResource::collection( $notifications),
            // ]);


        }
    }
}

