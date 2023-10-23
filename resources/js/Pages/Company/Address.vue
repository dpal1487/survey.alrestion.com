<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Header from "./Components/Header.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import JetInput from "@/Jetstream/Input.vue";
import JetLabel from "@/Jetstream/Label.vue";
import InputError from "@/jetstream/InputError.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";

export default defineComponent({
    setup() {
        return { v$: useVuelidate() };
    },
    props: ['company', 'address', 'countries'],
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
                address_line_1: {
                    required,
                },
                address_line_2: {
                    required,
                },
                city: {
                    required,
                },
                state: {
                    required,
                },
                pincode: {
                    required,
                },
                country: {
                    required,
                },
            },
        };
    },
    data() {
        return {
            processing: false,
            form: this.$inertia.form({
                id: this.address?.data?.id || '',
                company_id: this.company?.data?.id || '',
                address_line_1: this.address?.data?.address_line_1 || '',
                address_line_2: this.address?.data?.address_line_2 || '',
                city: this.address?.data?.city || '',
                state: this.address?.data?.state || '',
                pincode: this.address?.data?.pincode || '',
                country: this.address?.data?.country?.id || '',
            }),
            isEdit: false,
            title: "Company Address",
        };
    },
    methods: {
        submit() {
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.form.transform((data) => ({
                    ...data,
                }))
                    .post(this.route("company.address"),
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
                <Link href="/company" class="text-muted text-hover-primary">Compant</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ company.data.company_name }}
            </li>
        </template>
        <!--begin::Navbar-->
        <Header :company="company?.data" :address="address?.data" />
        <!--begin::details View-->
        <div class="card mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div class="card-header cursor-pointer">
                <!--begin::Card title-->
                <div class="card-title m-0">
                    <h3 class="fw-bold m-0">Company Address </h3>
                </div>
                <!--end::Card title-->
                <button class="btn btn-primary align-self-center btn-sm"
                    @click="this.isEdit = this.isEdit ? false : true"><i class="bi bi-pencil me-2"></i>Edit Address
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
                                <label for="address-line-1" class="col-lg-4 col-form-label required fw-bold fs-6">Address
                                    Line 1
                                </label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <!--begin::Row-->
                                    <jet-input id="address-line-1" type="text" v-model="v$.form.address_line_1.$model"
                                        :class="v$.form.address_line_1.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " placeholder="Address Line 1" />
                                    <div v-for="(error, index) of v$.form.address_line_1.$errors" :key="index">
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
                                <label class="col-lg-4 col-form-label required fw-bold fs-6" for="address_line_2">Address
                                    Line 2</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <!--begin::Row-->
                                    <jet-input id="address_line_2" type="text" v-model="v$.form.address_line_2.$model"
                                        :class="v$.form.address_line_2.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " placeholder="Address Line 2" />
                                    <div v-for="(error, index) of v$.form.address_line_2.$errors" :key="index">
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
                                <label class="col-lg-4 col-form-label required fw-bold fs-6">City</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <jet-input id="city" type="text" v-model="v$.form.city.$model" :class="v$.form.city.$errors.length > 0
                                        ? 'is-invalid'
                                        : ''
                                        " placeholder="City" />
                                    <div v-for="(error, index) of v$.form.city.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                </div>

                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-lg-4 col-form-label fw-bold fs-6">State</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <jet-input id="state" type="text" v-model="v$.form.state.$model" :class="v$.form.state.$errors.length > 0
                                        ? 'is-invalid'
                                        : ''
                                        " placeholder="State" />
                                    <div v-for="(error, index) of v$.form.state.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-lg-4 col-form-label fw-bold fs-6">
                                    <span class="required">Country</span>
                                </label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8 fv-row">
                                    <Multiselect :options="countries.data" label="label" valueProp="id"
                                        class="form-control form-control-lg form-control-solid" placeholder="Select One"
                                        v-model="v$.form.country.$model" track-by="label" :searchable="true" :class="v$.form.country.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " />
                                    <div v-for="(error, index) of v$.form.country.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-lg-4 col-form-label fw-bold fs-6">Pincode</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <jet-input id="pincode" type="text" v-model="v$.form.pincode.$model" :class="v$.form.pincode.$errors.length > 0
                                        ? 'is-invalid'
                                        : ''
                                        " placeholder="Pincode" />
                                    <div v-for="(error, index) of v$.form.pincode.$errors" :key="index">
                                        <input-error :message="error.$message" />
                                    </div>
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <div class="d-flex justify-content-end mt-4">
                                <!--begin::Button-->
                                <button type="button" class="btn btn-outline-secondary me-5"
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
                <!--begin::Row-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Address Line 1</label>
                    <!--end::Label-->
                    <!-- {{ company?.data?.user }} -->
                    <!--begin::Col-->
                    <div class="col-lg-6">
                        <span class="fw-bold fs-6 text-gray-700"> {{ address?.data?.address_line_1 }}</span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Row-->
                <!--begin::Row-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Address Line 2</label>
                    <!--end::Label-->
                    <!--begin::Col-->
                    <div class="col-lg-6">
                        <span class="fw-bold fs-6 text-gray-700"> {{ address?.data?.address_line_2 }}</span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Row-->
                <!--begin::Input group-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">City</label>
                    <!--end::Label-->
                    <!--begin::Col-->
                    <div class="col-lg-6 fv-row">
                        <span class="fw-bold text-gray-700 fs-6">{{ address?.data?.city }}
                        </span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">State</label>
                    <!--end::Label-->
                    <!--begin::Col-->
                    <div class="col-lg-6 d-flex align-items-center">
                        <span class="fw-bold fs-6 text-gray-700 me-2">{{ address?.data?.state }}
                        </span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Pincode</label>
                    <!--end::Label-->
                    <!--begin::Col-->
                    <div class="col-lg-6 d-flex align-items-center">
                        <span class="fw-bold fs-6 text-gray-700">{{ address?.data?.pincode }}
                        </span>
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-6 fw-bold fs-5 text-gray-800">Country</label>
                    <!--begin::Label-->
                    <!--begin::Label-->
                    <div class="col-lg-6">
                        <span class="fw-bold fs-6 text-gray-700">{{ address?.data?.country?.name }}</span>
                    </div>
                    <!--begin::Label-->
                </div>
                <!--end::Input group-->
            </div>
        </div>
        <!--end::Card body-->
    </app-layout>
</template>
