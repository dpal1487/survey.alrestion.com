<script>
import { defineComponent, ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import Pagination from "../../Jetstream/Pagination.vue";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
import { Inertia } from "@inertiajs/inertia";
export default defineComponent({
    props: ["users"],
    data() {
        return {
            form: {},
            user: '',
            title: "Users",
            tbody: [
                "FULL NAME",
                "EMAIL ADDRESS",
                "ROLE",
                "STATUS",
                "ACTION",
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
        async confirmDelete(index) {
            const loading = Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dc3545",
                cancelButtonColor: "#6c757d",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    // delete action
                    const loading = Swal.fire({
                        title: "Deleting...",
                        allowOutsideClick: false,
                        didOpen: async () => {
                            // Perform a long-running
                            axios
                                .delete(
                                    `/user/${this.users.data[index].id}`
                                )
                                .then((response) => {
                                    if (response.data.success) {
                                        toast.success(response.data.message)
                                        this.users.data.splice(index, 1);
                                    }
                                    else {
                                        toast.error(response.data.message)
                                    }
                                })
                                .finally(() => loading.close());
                        },
                    });

                    Swal.showLoading();
                }
            });
        },
        search() {
            Inertia.get(
                "/users", this.form,
            );
        },

    },

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
                <span class="text-muted text-hover-primary">{{ title }}</span>
            </li>
        </template>
        <template #toolbar>
            <div class="d-flex align-items-center gap-2 gap-lg-3">
                <!--begin::Primary button-->
                <Link href="/user/create" class="btn btn-sm fw-bold btn-primary">
                <i class="bi bi-plus-circle"></i>Add New User</Link>
                <!--end::Primary button-->
            </div>
        </template>
        <div class="card card-flush">
            <form @submit.prevent="search" class="card-header justify-content-start py-5 gap-2 gap-md-5">
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
                        placeholder="Search User" />
                </div>

                <button type="submit" class="btn btn-primary">
                    Search
                </button>
                <!--end::Search-->
            </form>

            <div class="card-body pt-0">
                <!--begin::Table-->
                <div class="table-responsive">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 text-center">
                        <thead class="bg-light">
                            <tr class="text-gray-400 fw-bold fs-7 w-100 text-uppercase">
                                <th class="min-w-120px" v-for="(th, index) in tbody" :key="index">
                                    {{ th }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="fw-semibold text-gray-600">
                            <tr v-for="(user, index) in users.data" :key="index">
                                <td><Link class="text-black" :href="`user/${user.id}`">{{ user.first_name + " " + user.last_name }}</Link></td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.role?.name }}</td>
                                <td> <span :class="`badge bg-${user.status == 1
                                    ? 'success'
                                    : 'danger'
                                    }`">{{ user.status ? 'Active' : 'Inactive' }}</span></td>
                                <td>
                                    <a href="#" class="btn btn-sm btn-light menu-dropdown" :id="`dropdown-${user.id}`"
                                        data-bs-toggle="dropdown">Actions
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                                        <span class="svg-icon svg-icon-5 m-0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </a>
                                    <div class="text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                        :aria-labelled:by="`dropdown-${user.id}`">
                                        <div class="menu-item px-3">
                                            <Link :href="`/user/${user.id}/edit`" class="menu-link"><i
                                                class="bi bi-pencil me-2"></i>Edit
                                            </Link>
                                        </div>
                                        <div class="menu-item px-3">
                                            <Link :href="`/user/${user.id}`" class="menu-link"><i
                                                class="bi bi-view-list me-2"></i>View
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
                        <!--end::Table body-->
                    </table>

                </div>
                <div class="d-flex align-items-center justify-content-center justify-content-md-end mb-10" v-if="users.meta">
                    <Pagination :links="users.meta.links" />
                </div>
            </div>
        </div>
    </app-layout>
</template>
