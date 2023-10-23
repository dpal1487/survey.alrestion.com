<script>
import { defineComponent, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import Pagination from "../../Jetstream/Pagination.vue";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
import Loading from "vue-loading-overlay";
import axios from "axios";
export default defineComponent({
    props: ["invoices", "clients", 'status', 'reports'],
    data() {
        return {
            form: {},
            title: "Invoices",
            tbody: [
                "Invoice No",
                "Client",
                "Amount",
                "Type",
                "GTS Amount",
                "Conversion Rate",
                "Date Issued",
                "Due Date",
                "Invoice Status",
                "Action",
            ],
            isLoading: false,
        }
    },
    components: {
        AppLayout,
        Link,
        Head,
        Pagination,
        Multiselect,
        Loading,
    },
    methods: {
        search() {
            Inertia.get(
                "/invoices",
                this.form,
            );
        },
    },
    created() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.form.client = urlParams.get('client')
        this.form.status = urlParams.get('status')
        this.form.q = urlParams.get('q')
    }

});
</script>
<template>
    <app-layout :title="title">
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item">
                <span class="text-muted text-hover-primary">{{ title }}</span>
            </li>
        </template>
        <template #toolbar>
            <div class="d-flex align-items-center gap-2 gap-lg-3">
                <Link href="/invoice/create" class="btn btn-sm fw-bold btn-primary">
                <i class="bi bi-plus-circle"></i>Add New Invoice</Link>
            </div>
        </template>

        <Head :title="title" />
        <div class="row mb-3">
            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Invoices Sent
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    $<span class="counter-value">{{ reports.sent_invoices.total_amount }}</span>
                                </h4>
                                <span class="badge bg-primary me-1">{{ reports.sent_invoices.count }}</span>
                                <span class="text-muted">Invoices sent</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-light rounded fs-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-file-text text-primary">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Paid Invoices
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    $<span class="counter-value">{{ reports.paid_invoices.total_amount }}</span>
                                </h4>
                                <span class="badge bg-success me-1">{{ reports.paid_invoices.count }}</span>
                                <span class="text-muted">Paid by Invoices</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-light rounded fs-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-check-square text-success">
                                        <polyline points="9 11 12 14 22 4"></polyline>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Unpaid Invoices
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    $<span class="counter-value">{{ reports.unpaid_invoices.total_amount }}</span>
                                </h4>
                                <span class="badge bg-warning me-1">{{ reports.unpaid_invoices.count }}</span>
                                <span class="text-muted">Unpaid by Invoices</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-light rounded fs-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-clock text-warning">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Cancelled Invoices
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    $<span class="counter-value"
                                        data-target="0">{{ reports.cancel_invoices.total_amount }}</span>
                                </h4>
                                <span class="badge bg-danger me-1">{{ reports.cancel_invoices.count }}</span>
                                <span class="text-muted">Cancelled by Invoices</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-light rounded fs-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-x-octagon text-danger">
                                        <polygon
                                            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2">
                                        </polygon>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div>
        <div class="card">
            <form @submit.prevent="search" class="card-header justify-content-start py-4 px-4 gap-2 gap-md-5">
                <div class="d-flex align-items-center position-relative">
                    <span class="svg-icon svg-icon-1 position-absolute ms-4"><svg width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                            <path
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                    <input type="text" v-model="form.q" class="form-control form-control-solid w-250px ps-14"
                        placeholder="Search " />
                </div>
                <div class="w-100 mw-200px">
                    <Multiselect :can-clear="false" :options="status" label="label" valueProp="id"
                        class="btn btn-sm btn-light py-2" placeholder="Select Status" v-model="form.status" />
                </div>
                <div class="w-100 mw-200px">
                    <Multiselect :can-clear="false" :options="clients.data" label="display_name" valueProp="id"
                        class="btn btn-sm btn-light py-2" placeholder="Select Client" v-model="form.client" />
                </div>
                <button type="submit" class="btn btn-primary">
                    Search
                </button>
            </form>
            <div class="card-body p-3">
                <div class="table-responsive">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 text-center">
                        <thead>
                            <tr class="text-gray-400 fw-bold fs-7 text-uppercase">
                                <th v-for="(th, index) in tbody" :key="index">
                                    {{ th }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="fw-semibold text-gray-600">
                            <tr v-for="(invoice, index) in invoices.data" :key="index">
                                <td>
                                    <Link class="text-gray-800 text-hover-primary fs-6 fw-bold"
                                        :href="`/invoice/${invoice.id}`">{{ invoice?.invoice_number }}</Link>
                                </td>
                                <td>{{ invoice?.client?.name }}</td>
                                <td>{{ invoice.currency.symbol }}{{ invoice?.total_amount }}</td>
                                <td><span class="badge badge-primary">{{ invoice.type }}</span></td>
                                <td>INR {{ parseFloat(invoice.total_amount / 118 * invoice.tax_rate).toFixed(2) }}</td>
                                <td>INR {{ invoice?.conversion_rate }}</td>
                                <td>{{ invoice?.issue_date }}</td>
                                <td>{{ invoice?.due_date }}</td>
                                <td>
                                    <span class="badge badge-success" v-if="(invoice?.status == 1)">Paid</span>
                                    <span class="badge badge-warning" v-if="(invoice?.status == 2)">Unpaid</span>
                                    <span class="badge badge-danger" v-if="(invoice?.status == 3)">Cancelled</span>
                                </td>
                                <td>
                                    <a href="#" class="btn btn-sm btn-light menu-dropdown" :id="`dropdown-${invoice.id}`"
                                        data-bs-toggle="dropdown">Actions
                                        <span class="svg-icon svg-icon-5 m-0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                        :aria-labelled:by="`dropdown-${invoice.id}`">
                                        <div class="menu-item px-3">
                                            <Link :href="`/invoice/${invoice.id}/edit`" class="menu-link"><i
                                                class="bi bi-pencil me-2"></i>Edit
                                            </Link>
                                        </div>
                                        <div class="menu-item px-3">
                                            <span @click="confirmDelete(index)" class="menu-link"><i
                                                    class="bi bi-trash3 me-2"></i>Delete</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="d-flex align-items-center justify-content-center justify-content-md-end" v-if="invoices.meta">
                    <Pagination :links="invoices.meta.links" />
                </div>
            </div>
        </div>
    </app-layout>
</template>
