<script>
import { defineComponent } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Header from "./Components//Header.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Pagination from "../../Jetstream/Pagination.vue";
import ProjectList from "../Project/Components/ProjectList.vue";
import { Inertia } from "@inertiajs/inertia";
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';

export default defineComponent({
    props: ["projects", "client", "status", "addresses"],
    data() {
        return {
            title: "Client Projects",
            form: {},
            isLoading: false,
            fullPage: true,
        };
    },
    components: {
        Link,
        Head,
        Header,
        AppLayout,
        Pagination,
        ProjectList,
        Loading
    },
    methods: {
        search() {
            this.isLoading = true;
            Inertia.get(
                `/client/${this.client.data.id}/projects`,
                this.form,
                {
                    onFinish(response) {
                        this.isLoading = false;
                    },
                })
        },

    },
    created() {
    },
});
</script>
<template>
    <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" />

    <Head :title="title" />
    <app-layout :title="title">
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item">
                <Link href="/clients" class="text-muted text-hover-primary">Clients</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ client.data.name }}
            </li>
        </template>
        <!--begin::Navbar-->
        <Header :client="client?.data" :address="addresses.data" />
        <div class="card">
            <div class="card-header align-items-center">
                <div class="card-title">
                    <h2>Projects</h2>
                </div>
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <form class="card-toolbar flex-row-fluid justify-content-end gap-3" @submit.prevent="search()">
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
                            <input type="text" v-model="form.q" class="form-control form-control-solid w-200px ps-14"
                                placeholder="Search" />
                        </div>

                        <button type="submit" class="btn btn-primary">
                            Search
                        </button>

                        <a target="_blank" :href="route('client.project.report', {id:client?.data?.id})"
                            class="btn btn-primary m-1"><i class="bi bi-graph-down-arrow"></i>Export
                            Report</a>
                    </form>
                </div>
            </div>
        </div>
        <ProjectList :projects="projects.data" :status="status.data" action="client.project" />
        <div class="row mt-5" v-if="projects.meta">
            <div class=" col-sm-12 d-flex align-items-center justify-content-between">
                <span class="fw-bold text-gray-700">
                    Showing {{ projects.meta.from }} to {{ projects.meta.to }}
                    of {{ projects.meta.total }} entries
                </span>
                <Pagination :links="projects.meta.links" />
            </div>
        </div>
    </app-layout>
</template>
