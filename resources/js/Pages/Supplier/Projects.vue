<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Header from "./Components/Header.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import SupplierList from "../Sampling/Components/SupplierList.vue";
import Multiselect from "@vueform/multiselect";
import { Inertia } from "@inertiajs/inertia";
import Pagination from "../../Jetstream/Pagination.vue";

export default defineComponent({
    props: ['supplier', 'countries', 'suppliers'],
    data() {
        return {
            form: {},
            th: [
                'Project Name',
                'Country',
                'CPI',
                'Sample Size',
                'Project Link',
                'TClick',
                'Complete',
                'Terminate',
                'S Terminate',
                'Quotafull',
                'Incomplete',
                'IR',
                'STATUS',
                'Action'
            ],
            title: "Projects"
        };
    },
    components: {
        AppLayout,
        Header,
        Link,
        Head,
        SupplierList,
        Multiselect,
        Pagination
    },
    methods: {
        search() {
            Inertia.get(
                "/supplier/" + this.supplier.data.id + "/projects",
                this.form,
            );
        }
    },
    created() {

    }
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
        <!--begin::details View-->
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
                        <input type="text" v-model="form.q" class="form-control form-control-solid w-200px ps-14"
                            placeholder="Search " />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Search
                    </button>
                </div>
            </form>
        </div>
        <SupplierList :projects="suppliers.data" action="supplier.project" />
        <div class="row mt-5" v-if="suppliers.meta">
            <div class="col-sm-12 d-flex align-items-center justify-content-between">
                <span class="fw-bold text-gray-700">
                    Showing {{ suppliers.meta.from }} to {{ suppliers.meta.to }}
                    of {{ suppliers.meta.total }} entries
                </span>
                <Pagination :links="suppliers.meta.links" />
            </div>
        </div>
    </AppLayout>
</template>
