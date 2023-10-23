<script>
import { defineComponent, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import Pagination from "../../Jetstream/Pagination.vue";
import { Inertia } from "@inertiajs/inertia";
export default defineComponent({
    props: ["surveys", "users"],
    data() {
        return {
            title: "Surveys",
            first_name: '',
            label: '',
            form: {},
            tbody: [
                "S.No",
                "RESPONDENT ID",
                "PID",
                "USERNAME",
                "STARTING IP",
                "END IP",
                "DURATION",
                "DATE/TIME",
                "BROWSER",
                "STATUS",
            ],
            checkbox: [],
            status: [
                { value: "complete", label: "Completed" },
                { value: "terminate", label: "Terminated" },
                { value: "quotafull", label: "Quotafull" },
            ],
        };
    },
    components: {
        AppLayout,
        Link,
        Head,
        Pagination,
        Multiselect,
    },
    methods: {
        search() {
            Inertia.get(
                "/master", this.form,
            );
        },
        $queryParams(...args) {
            let queryString = this.$page.url;
            if (queryString.indexOf("?") === -1) {
                return {};
            }
            queryString = queryString.substring(queryString.indexOf("?") + 1);
            return Object.assign(Object.fromEntries(new URLSearchParams(queryString)), ...args);
        },

    },
    created() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.form.status = urlParams.get('status')
        this.form.q = urlParams.get('q')
    }

});
</script>
<template>
    <Head :title="title" />
    <app-layout :title="title">
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item">
                <span class="text-muted text-hover-primary">Surveys </span>
            </li>

        </template>
        <div class="card">
            <form class="card-header align-items-center gap-3 p-3" @submit.prevent="search()">
                <!--begin::Card title-->
                <!--begin::Search-->
                <div class="d-flex align-items-center position-relative">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                    <span class="svg-icon svg-icon-1 position-absolute ms-4"><svg width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                            <path
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <input type="text" v-model="form.q" class="form-control form-control-solid w-250px ps-14"
                        placeholder="Search " />
                </div>
                <div class="w-100 mw-150px">
                    <!--begin::Select2-->
                    <Multiselect :options="users.data" :can-clear="false" label="full_name" valueProp="id"
                        :searchable="true" track-by="full_name" class="btn btn-sm btn-light py-2 px-0"
                        placeholder="Select User" v-model="form.user" />
                    <!--end::Select2-->
                </div>
                <div class="w-100 mw-150px">
                    <Multiselect :options="status" label="label" :can-clear="false" valueProp="value" :searchable="true"
                        :track-by="label" class="btn btn-sm btn-light py-2 px-0" placeholder="Select "
                        v-model="form.status" />
                </div>
                <div class="w-100 mw-150px">
                    <!--begin::Select2-->
                    <input type="date" class="form-control form-control-solid" id="date" placeholder="Select Date"
                        v-model="form.from_date" />
                    <!--end::Select2-->
                </div>
                <div class="w-100 mw-150px">
                    <!--begin::Select2-->
                    <input type="date" class="form-control form-control-solid" placeholder="Select Date"
                        v-model="form.to_date" />
                    <!--end::Select2-->
                </div>
                <button type="submit" class="btn btn-primary">
                    Search
                </button>
                <!--end::Search-->
                <a target="_blank" :href="route('master.report', { ...$queryParams() })" class="btn btn-primary m-1"><i
                        class="bi bi-graph-down-arrow"></i>Export
                    Report</a>
                <!--begin::Card toolbar-->
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <!--begin::Add industries-->
                </div>
                <!--end::Card toolbar-->
            </form>
            <div class="card-body pt-0">
                <!--begin::Table-->
                <div class="table-responsive">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 text-center">
                        <!--begin::Table head-->
                        <thead>
                            <!--begin::Table row-->
                            <tr class="text-gray-400 fw-bold fs-7 w-100 text-uppercase">

                                <th class="min-w-120px" v-for="(th, index) in tbody" :key="index">
                                    {{ th }}
                                </th>
                            </tr>
                            <!--end::Table row-->
                        </thead>
                        <!--end::Table head-->
                        <!--begin::Table body-->
                        <tbody class="fw-semibold text-gray-600">
                            <tr v-for="(survey, index) in surveys.data" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ survey.id }} </td>
                                <td>{{ survey.project_id }}</td>
                                <td>{{ survey.user }}</td>
                                <td>{{ survey.starting_ip }}</td>
                                <td>{{ survey.end_ip }}</td>
                                <td>{{ survey.duration }}</td>
                                <td>{{ survey.created_at }}</td>
                                <td>{{ survey.client_browser }}</td>
                                <td>
                                    <div v-if="(survey.status == 'terminate')" class="badge badge-danger">Terminate</div>
                                    <div v-else-if="(survey.status == 'complete')" class="badge badge-success">Complete
                                    </div>
                                    <div v-else-if="(survey.status == 'quotafull')" class="badge badge-info">Quotafull</div>
                                    <div v-else-if="(survey.status == 'security-terminate')" class="badge badge-danger">
                                        Security Terminate</div>
                                    <div v-else class="badge badge-light">Incomplete</div>
                                </td>
                            </tr>
                        </tbody>
                        <!--end::Table body-->
                    </table>

                </div>

                <div class="row" v-if="surveys.meta">
                    <div class="col-sm-12 d-flex align-items-center justify-content-between">
                        <span class="fw-bold text-gray-700">
                            Showing {{ surveys.meta.from }} to {{ surveys.meta.to }}
                            of {{ surveys.meta.total }} entries
                        </span>
                        <Pagination :links="surveys.meta.links" />
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
