<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Pagination from "../../Jetstream/Pagination.vue";
import Multiselect from "@vueform/multiselect";
import { Inertia } from "@inertiajs/inertia";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import ProjectList from "./Components/ProjectList.vue";
export default defineComponent({
    props: ["projects", "status", "clients"],
    data() {
        return {
            form: {},
            action: "project.page",
            isLoading: false,
            fullPage: true,
            title: "Projects",
            selectOrderBy: null,
            order_by: [
                { label: 'Project Id ASC', value: 'project_id_asc', },
                { label: 'Project Id DESC', value: 'project_id_desc', },
                { label: 'Project Name ASC', value: 'project_name_asc', },
                { label: 'Project Name DESC', value: 'project_name_desc', },
                // { label: 'Client Name ASC', value: 'client_name_asc', },
                // { label: 'Client Name DESC', value: 'client_name_desc', }
            ],
        };
    },
    components: {
        AppLayout,
        Link,
        Head,
        Pagination,
        Multiselect,
        Loading,
        ProjectList,
    },
    methods: {
        search() {
            this.isLoading = true;
            Inertia.get("/projects", this.form, {
                onFinish(response) {
                    this.isLoading = false;
                },
            });
        },
        orderBy() {
            this.isLoading = true;
            console.log("Order By", this.selectOrderBy)
            Inertia.get(route('projects', { order_by: this.selectOrderBy }),
                {
                    onFinish(response) {
                        this.isLoading = false;
                    }
                });
        },
    },
});
</script>
<template>
    <Head :title="title" />
    <app-layout :title="title">
        <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" />
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">Projects</li>
        </template>
        <template #toolbar v-if="$page.props.user.role.role.slug != 'user'">
            <div class="d-flex align-items-center gap-2 gap-lg-3">
                <Link href="/project/create" class="btn btn-sm fw-bold btn-primary">
                <i class="bi bi-plus-circle"></i>Add New Project</Link>
            </div>
        </template>
        <div class="card">
            <div class="mx-1 p-4 d-flex flex-wrap gap-5 align-items-center justify-content-between">
                <form @submit.prevent="search" class="d-flex flex-wrap flex-grow-1 gap-5 gap-md-5 justify-content-start">
                    <div class="d-flex align-items-center position-relative">
                        <span class="svg-icon svg-icon-1 position-absolute ms-4"><svg width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                    transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                <path
                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        <input type="text" v-model="form.q" class="form-control form-control-solid w-250px ps-14"
                            placeholder="Search Project" />
                    </div>
                    <div class="w-100 mw-200px  ">
                        <Multiselect :can-clear="false" :options="status.data" label="label" valueProp="value"
                            class="btn btn-sm btn-light py-2 px-0" placeholder="Select Status" v-model="form.status" />
                    </div>
                    <div class="w-100 mw-200px">
                        <Multiselect :can-clear="false" :options="clients.data" label="display_name" valueProp="id"
                            class="btn btn-sm btn-light py-2" placeholder="Select Client" v-model="form.client" />
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
                <div class="w-100 mw-200px mx-5 justify-content-end">
                    <Multiselect :can-clear="false" :options="order_by" label="label" valueProp="value" @select="orderBy()"
                        class="btn btn-sm btn-light py-2 px-0" placeholder="Order By" v-model="selectOrderBy" />
                </div>
            </div>
        </div>
        <project-list :projects="projects.data" :status="status.data" :action="action" />
        <div class="row" v-if="projects.meta">
            <div class="col-sm-12 d-flex align-items-center justify-content-between">
                <span class="fw-bold text-gray-700">
                    Showing {{ projects.meta.from }} to
                    {{ projects.meta.to }} of {{ projects.meta.total }} entries
                </span>
                <Pagination :links="projects.meta.links" />
            </div>
        </div>
    </app-layout>
</template>
