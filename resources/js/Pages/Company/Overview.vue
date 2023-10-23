<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Header from "./Components/Header.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import JetInput from "@/Jetstream/Input.vue";
import JetLabel from "@/Jetstream/Label.vue";
import InputError from "@/jetstream/InputError.vue";
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";

export default defineComponent({
    setup() {
        return { v$: useVuelidate() };
    },
    props: ['company', 'address', 'corporationtypes'],
    components: {
        AppLayout,
        Header,
        Link,
        Head,
        JetInput,
        JetLabel,
        InputError,
        Multiselect,
        JetValidationErrors
    },
    validations() {
        return {
            form: {
                company_name: {
                    required,
                },
                tax_number: {
                    required,
                },
                description: {
                    required,
                },
            },
        };
    },
    data() {
        return {
            processing: false,
            form: this.$inertia.form({
                company_name: this.company?.data?.company_name || '',
                tax_number: this.company?.data?.tax_number || '',
                description: this.company?.data?.description || '',
            }),
            isEdit: false,
            title: "Company Overview",
        };
    },
    methods: {
        submit() {
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.form.transform((data) => ({
                    ...data,
                }))
                    .post(this.route("company.update"),
                        {
                            onSuccess: (data) => {
                                toast.success(this.$page.props.jetstream.flash.message);
                                this.isEdit = false;
                            },
                            onError: (data) => {
                                console.log(data);
                            },
                        });
            }
        },
        changeStatus() {

        }
    },
    created() {
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
                <Link href="/company" class="text-muted text-hover-primary">Company</Link>
            </li>
        </template>
        <!--begin::Navbar-->
        <Header :company="company.data" :address="address.data" />
        <!--begin::details View-->
        <div class="card mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div class="card-header cursor-pointer">
                <!--begin::Card title-->
                <div class="card-title m-0">
                    <h3 class="fw-bold m-0">Company Details </h3>
                </div>
                <!--end::Card title-->
                <button class="btn btn-primary align-self-center btn-sm"
                    @click="this.isEdit = this.isEdit ? false : true"><i class="bi bi-pencil me-2"></i>Edit
                </button>
            </div>
            <!--begin::Card body-->
            <div class="card-body" v-if="isEdit">
                <div class="row">
                    <div class="col-12">
                        <JetValidationErrors />
                        <form @submit.prevent="submit">
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label for="company-name" class="col-lg-4 col-form-label required fw-bold fs-6">Company
                                    Name</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <!--begin::Row-->
                                    <jet-input id="company-name" type="text" v-model="v$.form.company_name.$model" :class="v$.form.company_name.$errors.length > 0
                                        ? 'is-invalid'
                                        : ''
                                        " placeholder="Company Type" />
                                    <div v-for="(error, index) of v$.form.company_name.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-lg-4 col-form-label fw-bold fs-6">Tax Number</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <jet-input id="tax_number" type="text" v-model="v$.form.tax_number.$model" :class="v$.form.tax_number.$errors.length > 0
                                        ? 'is-invalid'
                                        : ''
                                        " placeholder="Tax Number" />
                                    <div v-for="(error, index) of v$.form.tax_number.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                </div>
                                <!--end::Col-->
                            </div>
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-lg-4 col-form-label fw-bold fs-6">Description</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <jet-input id="description" type="text" v-model="v$.form.description.$model" :class="v$.form.description.$errors.length > 0
                                        ? 'is-invalid'
                                        : ''
                                        " placeholder="Description" />
                                    <div v-for="(error, index) of v$.form.description.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                </div>
                                <!--end::Col-->
                            </div>
                            <div class="d-flex justify-content-end mt-4">
                                <!--begin::Button-->
                                <button type="button" class="btn btn-secondary me-5"
                                    @click="this.isEdit = false">Discard</button>
                                <!--begin::Button-->
                                <button type="submit" class="btn btn-primary" :class="{ 'text-white-50': form.processing }">
                                    <div v-show="form.processing" class="spinner-border spinner-border-sm">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="card-body" v-else>
                <!--begin::Input group-->
                <!--begin::Row-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Company Name</label>
                    <!--end::Label-->
                    <!-- {{ company?.data?.user }} -->
                    <!--begin::Col-->
                    <div class="col-lg-6">
                        <span class="fw-bold fs-6 text-gray-700"> {{ company?.data?.company_name }}</span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Row-->

                <!--begin::Input group-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Tax Number</label>
                    <!--end::Label-->
                    <!--begin::Col-->
                    <div class="col-lg-6 d-flex align-items-center">
                        <span class="fw-bold fs-6 text-gray-700">{{ this.company?.data?.tax_number
                        }}
                        </span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Description</label>
                    <!--begin::Label-->
                    <!--begin::Label-->
                    <div class="col-lg-6">
                        <span class="fw-bold fs-6 text-gray-700">{{ this.company?.data?.description }}</span>
                    </div>
                    <!--begin::Label-->
                </div>
                <!--end::Input group-->
            </div>
            <!--end::Card body-->
        </div>
    </app-layout>
</template>
