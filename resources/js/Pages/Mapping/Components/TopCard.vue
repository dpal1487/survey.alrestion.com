<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import InputError from "@/jetstream/InputError.vue";
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetLabel from "@/Jetstream/Label.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import MappingForm from "./MappingForm.vue";
import { toast } from "vue3-toastify";

export default defineComponent({
    props: ["countries", "project"],
    components: {
        Link,
        Multiselect,
        JetInput,
        JetLabel,
        JetValidationErrors,
        InputError,
        Loading,
        MappingForm,
    },
    validations() {
        return {};
    },
    data() {
        return {
            isLoading: false,
            isEdit: false,
            form: {}
        };
    },
    methods: {
        submit(form) {
            this.form = form;
            this.form
                .transform((data) => ({
                    ...data,
                }))
                .post(this.route("mapping.update", this.project.id), {
                    onSuccess: (data) => {
                        toast.success(this.$page.props.jetstream.flash.message);
                        this.isEdit = false;
                    },
                    onError: (data) => { },
                });
        },
    },
    created() { },
});
</script>
<template>
    <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" />
    <div class="mb-5">
        <div class="card">
            <div class="card-header align-items-center my-5">
                <div class="card-title">
                    <h2>#{{ project.project_uid }} ({{ project.project_name }})</h2>
                </div>
                <div class="flex-shrink-0">
                    <button v-if="!isEdit" @click="isEdit = true" class="btn btn-sm btn-primary me-2">
                        <i class="bi bi-pencil me-2"></i>Edit
                    </button>
                    <Link :href="`/sampling/${project.id}/create`" class="btn btn-sm btn-primary"><i
                        class="bi bi-plus-circle me-2"></i>Add Supplier
                    </Link>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="row p-5" v-if="isEdit">
                    <mapping-form @submitted="submit" :project="project" :countries="countries">
                        <template #action>
                            <div class="d-flex align-items-center justify-content-end">
                                <button @click="isEdit = false" type="button" class="btn btn-secondary me-5">
                                    Discard
                                </button>
                                <button type="submit" class="btn btn-primary" :class="{
                                    'text-white-50':
                                        form.processing,
                                }">
                                    <div v-show="form.processing" class="spinner-border spinner-border-sm">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    Save Change
                                </button>
                            </div>
                        </template>
                    </mapping-form>
                </div>
                <div class="row" v-else>
                    <div class="col-md-8">
                        <table class="table table-bordered text-start align-middle mx-5 ">
                            <tbody>
                                <tr>
                                    <th>
                                        Project ID
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.project_uid }}
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Project Name
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.project_name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Project Link
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.project_link }}
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Client Name
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        <Link :href="`/client/${project.client.id}`">{{ project.client.name }}</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Project Country
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.country.display_name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Sample Size
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.sample_size }}N
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Project CPI
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        ${{ project.cpi }}
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Project LOI
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.loi }} Min
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Incidence Ratio
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.ir }}%
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                                min-width: 150px;
                                            ">
                                        Project Status
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        <span class="badge badge-success" v-if="project.status">Active</span>
                                        <span class="badge badge-danger" v-else>Inactive</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th style="
                                                white-space: nowrap;
                                            ">
                                        Target
                                    </th>
                                    <td class="fs-6 fw-bold text-gray-800">
                                        {{ project.target }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-4">
                        <div class="h-100 d-flex justify-content-center align-items-center bg-gray-100">
                            <div class="text-center">
                                <div class="badge badge-success" v-if="project.status">
                                    Active
                                </div>
                                <div class="badge badge-danger" v-else>
                                    Inactive
                                </div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <h1>
                                        {{ project.reports.complete }}&nbsp;
                                    </h1>
                                    <span>Out Of</span>
                                    <h1>&nbsp;{{ project.sample_size }}</h1>
                                </div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <span>Actula IR&nbsp;</span>
                                    <h1>{{ project.reports.total_ir }}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold px-5">
                    <li class="nav-item">
                        <Link class="nav-link text-active-primary ms-0 me-10 py-5" :href="`/mapping/${project.id}`" :class="route().current() == `mapping.show`
                            ? 'active'
                            : ''
                            ">
                        Link Overview
                        </Link>
                        <Link class="nav-link text-active-primary ms-0 me-10 py-5"
                            :href="`/mapping/${project.id}/suppliers`" :class="route().current() == `mapping.suppliers`
                                ? 'active'
                                : ''
                                ">
                        Suppliers ({{ project.supplier_count }})
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
