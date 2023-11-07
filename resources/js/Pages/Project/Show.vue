<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import ProjectLinkList from "../Mapping/Components/ProjectLinkList.vue";
import TopCard from "./Components/TopCard.vue";
import Pagination from "../../Jetstream/Pagination.vue";
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';
import { Inertia } from "@inertiajs/inertia";

export default defineComponent({
    props: ["project", "project_links", "clients", "status", 'suppliers'],
    data() {
        return {
            title: "Project Overview",
            isLoading: false,
            isFullPage: true,

            form: {}
        };
    },
    components: {
        AppLayout,
        Link,
        Head,
        ProjectLinkList,
        TopCard,
        Pagination,
        Loading
    },
    methods: {
        search() {
            this.isLoading = true;
            Inertia.get(
                `/project/${this.project.data.id}`,
                this.form,
                {
                    onFinish(response) {
                        this.isLoading = false;
                    },
                })
        }
    },
    created() {
        var url = new URL(window.location.href);
        this.form.q = url.searchParams.get("q");
        this.form.status = url.searchParams.get("status");
    },
});
</script>
<template>
    <Head :title="title" />
    <app-layout :title="title">
        <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="isFullPage" />
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                <Link class="text-muted text-hover-primary" href="/projects">Projects</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">{{ title }}</li>
        </template>
        <template #toolbar v-if="$page.props.user.role.role.slug != 'user'">
            <div class="d-flex align-items-center gap-2 gap-lg-3">
                <Link href="/project/create" class="btn btn-sm fw-bold btn-primary">
                <i class="bi bi-plus-circle"></i>Add New Project</Link>
            </div>
        </template>
        <TopCard :project="project.data" :clients="clients.data" :status="status" />
        <div class="card card-flush mb-5">
            <div class="card-header align-items-center px-5">
                <form @submit.prevent="search" class="card-title">
                    <input v-model="form.q" class="form-control form-control-sm form-control-solid" type="text"
                        placeholder="Search here..." />
                    <select v-model="form.status" class="form-control form-control-sm form-control-solid ms-3">
                        <option value="">Select status</option>
                        <option value="1">Active</option>
                        <option value="0">Inctive</option>
                    </select>
                    <button class="btn btn-primary btn-sm ms-3"><i class="bi bi-search"></i></button>
                </form>
                <Link v-if="$page.props.user.role.role.slug != 'user'" :href="`/mapping/${project.data.id}/create`"
                    class="btn btn-primary btn-sm"><i class="bi bi-plus-circle"></i>Add New Link</Link>
            </div>
        </div>
        <ProjectLinkList :links="project_links.data" />
    </app-layout>
</template>
