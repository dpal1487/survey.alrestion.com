
<style scoped>
/* Multiselect ke dropdown ka size customize kare */
.multiselect__content {
    max-height: 200px !important;
    /* Height ko customize kare */
}
</style>
<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Header from "./Components/Header.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import Pagination from "../../Jetstream/Pagination.vue";

import { Inertia } from "@inertiajs/inertia";


export default defineComponent({
    props: ['supplier', 'respondents'],

    data() {
        return {
            form: {},
            title: "Supplier Respondents",
            tbody: [
                "Project Name",
                "RESPONDENT ID",
                "USERNAME",
                "STARTING IP",
                "END IP",
                "DURATION",
                "DATE/TIME",
                "BROWSER",
                "Device",
                "STATUS",
            ],
            status: [
                { value: "complete", label: "Completed" },
                { value: "terminate", label: "Terminated" },
                { value: "quotafull", label: "Quotafull" },
            ],
        };
    },
    components: {
        AppLayout,
        Header,
        Link,
        Head,
        Multiselect,
        Pagination
    },
    methods: {
        search() {
            Inertia.get(
                `/supplier/${this.supplier?.data?.id}/respondents`, this.form,
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
});
</script>
<template>
    <Head :title="title" />
    <AppLayout :title="title">
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item">
                <Link href="/suppliers" class="text-muted text-hover-primary">Suppliers</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ title }}
            </li>
        </template>
        <Header :supplier="supplier?.data" />
        <div class="card">
            <form class="card-header align-items-center" @submit.prevent="search()">
                <div class="card-title">
                    <h2>{{ title }}</h2>
                </div>
                <!--end::Search-->
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <div class="d-flex align-items-center position-relative">
                        <span class="svg-icon svg-icon-1 position-absolute ms-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                    transform="rotate(45 17.0365 15.1223)" fill="currentColor">
                                </rect>
                                <path
                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <input type="text" v-model="form.q" class="form-control form-control-sm w-200px ps-14"
                            placeholder="Search " />
                    </div>
                    <div class="w-200px">
                        <select v-model="form.status" class="form-control form-control-sm form-control-solid">
                            <option :value="status.value" v-for="(status) in status">{{ status.label }}</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sm">
                        Search
                    </button>
                    <a target="_blank" :href="route('supplier.export', supplier?.data?.id, { ...$queryParams() })"
                        class="btn btn-primary btn-sm"><i class="bi bi-graph-down-arrow"></i>Export
                    </a>
                </div>
            </form>
        </div>
      
        <div class="card">
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
                            <tr v-for="(respondent, index) in respondents.data" :key="index">
                                <td>{{ respondent?.project_name }} </td>
                                <td>{{ respondent.id }}</td>
                                <td>{{ respondent.user }}</td>
                                <td>{{ respondent.starting_ip }}</td>
                                <td>{{ respondent.end_ip }}</td>
                                <td>{{ respondent.duration }}</td>
                                <td>{{ respondent.created_at }}</td>
                                <td>{{ respondent.client_browser }}</td>
                                <td>{{ respondent?.device }}</td>
                                <td>
                                    <div v-if="(respondent.status == 'terminate')" class="badge badge-danger">Terminate
                                    </div>
                                    <div v-else-if="(respondent.status == 'complete')" class="badge badge-success">Complete
                                    </div>
                                    <div v-else-if="(respondent.status == 'quotafull')" class="badge badge-info">Quotafull
                                    </div>
                                    <div v-else-if="(respondent.status == 'security-terminate')" class="badge badge-danger">
                                        Security Terminate</div>
                                    <div v-else class="badge badge-light">Incomplete</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row mx-5 mb-5" v-if="respondents.meta">
                    <div class="col-sm-12 d-flex align-items-center justify-content-between mb-5">
                        <span class="fw-bold text-gray-700">
                            Showing {{ respondents.meta.from }} to {{ respondents.meta.to }}
                            of {{ respondents.meta.total }} entries
                        </span>
                        <Pagination :links="respondents.meta.links" />
                    </div>
                </div>
            </div>
        </div>

    </AppLayout>
</template>
