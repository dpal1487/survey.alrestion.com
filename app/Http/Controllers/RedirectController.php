<?php

namespace App\Http\Controllers;

use App\Models\Respondent;
use App\Models\SupplierProject;
use App\Models\SupplierSurvey;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RedirectController extends Controller
{
    public $status, $respondent, $project, $data, $url;
    public function __construct()
    {
        $this->status = ['complete', 'terminate', 'quotafull', 'security-terminate'];
    }
    public function surveyEnd(Request $request)
    {
        if (in_array($request->segment(2), $this->status)) {
            if ($this->respondent = Respondent::where(['id' => $request->uid])->first()) {
                if (Respondent::where(['id' => $request->uid, 'status' => null])->first()) {
                    Respondent::where(['id' => $request->uid])->update(['status' => $request->segment(2),'end_ip'=>$request->ip()]);
                }
                if ($this->project = SupplierProject::where(['id' => $this->respondent->supplier_project_id])->first()) {
                    if ($request->segment(2) == 'complete') {
                        $this->data = array(
                            'headTitle' => 'Completed',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Completed'),
                            'message' => "Congratulations! You have successfully completed the survey.",
                            'redirect' => $this->project
                        );
                        $this->url = str_replace('ProjectID', $this->project->project_link->project->project_id, $this->project->complete_url);
                        $this->url = str_replace('RespondentID', $this->respondent->user_id, $this->url);
                    }
                    if ($request->segment(2) == 'terminate') {
                        $this->data = array(
                            'headTitle' => 'Terminated',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Terminated'),
                            'message' => "Thank you very much for your participation. Unfortunately, at the moment we are looking for a diffrent profile to match survey's conditions.",
                        );
                        $this->url = str_replace('ProjectID', $this->project->project_link->project->project_id, $this->project->terminate_url);
                        $this->url = str_replace('RespondentID', $this->respondent->user_id, $this->url);
                    }
                    if ($request->segment(2) == 'quotafull') {
                        $this->data = array(
                            'headTitle' => 'Quotafull',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Quotafull'),
                            'message' => "Thank you very much for your participation. Unfortunately, the quota was reached for your demographic group.",
                        );
                        $this->url = str_replace('ProjectID', $this->project->project_link->project->project_id, $this->project->quotafull_url);
                        $this->url = str_replace('RespondentID', $this->respondent->user_id, $this->url);
                    }
                    if ($request->segment(2) == 'security-terminate') {
                        $this->data = array(
                            'headTitle' => 'Security Terminated',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Terminated'),
                            'message' => "Thank you very much for your participation. Unfortunately, at the moment we are looking for a diffrent profile to match survey's conditions.",
                        );
                        $this->url = str_replace('ProjectID', $this->project->project_link->project->project_id, $this->project->security_terminate_url);
                        $this->url = str_replace('RespondentID', $this->respondent->user_id, $this->url);
                    }
                } else {
                    if ($request->segment(2) == 'complete') {
                        $this->data = array(
                            'headTitle' => 'Completed',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Completed'),
                            'message' => "Congratulations! You have successfully completed the survey.",
                            'redirect' => $this->project
                        );
                    }
                    if ($request->segment(2) == 'terminate') {
                        $this->data = array(
                            'headTitle' => 'Terminated',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Terminated'),
                            'message' => "Thank you very much for your participation. Unfortunately, at the moment we are looking for a diffrent profile to match survey's conditions.",
                        );
                    }
                    if ($request->segment(2) == 'quotafull') {
                        $this->data = array(
                            'headTitle' => 'Quotafull',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Quotafull'),
                            'message' => "Thank you very much for your participation. Unfortunately, the quota was reached for your demographic group.",
                        );
                    }
                    if ($request->segment(2) == 'security-terminate') {
                        $this->data = array(
                            'headTitle' => 'Security Terminated',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Terminated'),
                            'message' => "Thank you very much for your participation. Unfortunately, at the moment we are looking for a diffrent profile to match survey's conditions.",
                        );
                    }
                }
            } else {

                if (!Respondent::where(['user_id' => $request->uid, 'status' => $request->segment(2), 'project_id' => $request->pid])->first()) {
                    Respondent::create(['user_id' => $request->uid, 'status' => $request->segment(2), 'project_id' => $request->pid,'end_ip'=>$request->ip()]);
                    if ($request->segment(2) == 'complete') {
                        $this->data = array(
                            'headTitle' => 'Completed',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Completed'),
                            'message' => "Congratulations! You have successfully completed the survey.",
                            'redirect' => $this->project
                        );
                    }
                    if ($request->segment(2) == 'terminate') {
                        $this->data = array(
                            'headTitle' => 'Terminated',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Terminated'),
                            'message' => "Thank you very much for your participation. Unfortunately, at the moment we are looking for a diffrent profile to match survey's conditions.",
                        );
                    }
                    if ($request->segment(2) == 'quotafull') {
                        $this->data = array(
                            'headTitle' => 'Quotafull',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Quotafull'),
                            'message' => "Thank you very much for your participation. Unfortunately, the quota was reached for your demographic group.",
                        );
                    }
                    if ($request->segment(2) == 'security-terminate') {
                        $this->data = array(
                            'headTitle' => 'Security Terminated',
                            'success' => true,
                            'title' => strtoupper('Your survey has been Terminated'),
                            'message' => "Thank you very much for your participation. Unfortunately, at the moment we are looking for a diffrent profile to match survey's conditions.",
                        );
                    }
                } else {
                    $this->data = array(
                        'headTitle' => 'Already Completed',
                        'success' => true,
                        'title' => strtoupper('You have already completed the survey.'),
                        'message' => "Thank you very much for your participation. you have already completed the survey..",
                    );
                }
            }
            return Inertia::render('Survey/Redirect', [
                'data' => $this->data,
                'redirect' => $this->url
            ]);
        }
        return Redirect::to(env('APP_URL'));
    }
}
