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
    props: ['company', 'address', 'account'],
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
                bank_name: {
                    required,
                },
                bank_address: {
                    required,
                },
                beneficiary_name: {
                    required,
                },
                account_number: {
                    required,
                },
                routing_number: {
                    required,
                },
                swift_code: {
                    required,
                },
                ifsc_code: {
                    required,
                },
                sort_code: {
                    required,
                },
            },
        };
    },
    data() {
        return {
            form: this.$inertia.form({
                id: this.account?.data.id || '',
                company_id: this.company?.data.id || '',
                bank_name: this.account?.data?.bank_name || '',
                bank_address: this.account?.data?.bank_address || '',
                beneficiary_name: this.account?.data?.beneficiary_name || '',
                account_number: this.account?.data?.account_number || '',
                routing_number: this.account?.data?.routing_number || '',
                swift_code: this.account?.data?.swift_code || '',
                ifsc_code: this.account?.data?.ifsc_code || '',
                sort_code: this.account?.data?.sort_code || '',
            }),
            isEdit: false,
            title: "Company Account",
        };
    },
    methods: {
        submit() {
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.form.transform((data) => ({
                    ...data,
                }))
                    .post(this.route("company.account"),
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
                <Link href="/company" class="text-muted text-hover-primary">Company</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ company.data.company_name }}
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
                    <h3 class="fw-bold m-0">Company Bank Details </h3>
                </div>
                <!--end::Card title-->
                <button class="btn btn-primary align-self-center btn-sm"
                    @click="this.isEdit = this.isEdit ? false : true"><i class="bi bi-pencil me-2"></i>Edit Account
                </button>
            </div>
            <!--begin::Card body-->
            <div class="card-body p-4">
                <div class="row" v-if="isEdit">
                    <div class="col-12">
                        <JetValidationErrors />

                        <form @submit.prevent="submit">
                            <div class="card-body border-top p-9">
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label for="bank-name" class="col-lg-4 col-form-label required fw-bold fs-6">Bank
                                        Name</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <!--begin::Row-->
                                        <jet-input id="bank-name" type="text" v-model="v$.form.bank_name.$model" :class="v$.form.bank_name.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " placeholder="Bank Name" />
                                        <div v-for="(error, index) of v$.form.bank_name.$errors" :key="index">
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
                                    <label class="col-lg-4 col-form-label required fw-bold fs-6">Bank Address</label>
                                    <!--end::Label-->
                                    <div class="col-lg-8">
                                        <!--begin::Row-->
                                        <jet-input id="bank_address" type="text" v-model="v$.form.bank_address.$model"
                                            :class="v$.form.bank_address.$errors.length > 0
                                                ? 'is-invalid'
                                                : ''
                                                " placeholder="Bank Address" />
                                        <div v-for="(error, index) of v$.form.bank_address.$errors" :key="index">
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
                                    <label class="col-lg-4 col-form-label required fw-bold fs-6">Beneficiary Name</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <jet-input id="beneficiary_name" type="text"
                                            v-model="v$.form.beneficiary_name.$model" :class="v$.form.beneficiary_name.$errors.length > 0
                                                ? 'is-invalid'
                                                : ''
                                                " placeholder="Beneficiary Name" />
                                        <div v-for="(error, index) of v$.form.beneficiary_name.$errors" :key="index">
                                            <input-error :message="error.$message" />
                                        </div>
                                    </div>

                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->


                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">Account Number</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <jet-input id="account_number" type="text" v-model="v$.form.account_number.$model"
                                            :class="v$.form.account_number.$errors.length > 0
                                                ? 'is-invalid'
                                                : ''
                                                " placeholder="Account Number" />
                                        <div v-for="(error, index) of v$.form.account_number.$errors" :key="index">
                                            <input-error :message="error.$message" />
                                        </div>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">Routing Number</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <jet-input id="routing_number" type="text" v-model="v$.form.routing_number.$model"
                                            :class="v$.form.routing_number.$errors.length > 0
                                                ? 'is-invalid'
                                                : ''
                                                " placeholder="Routing Number" />
                                        <div v-for="(error, index) of v$.form.routing_number.$errors" :key="index">
                                            <input-error :message="error.$message" />
                                        </div>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">Swift Code</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <jet-input id="swift_code" type="text" v-model="v$.form.swift_code.$model" :class="v$.form.swift_code.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " placeholder="Swift Code" />
                                        <div v-for="(error, index) of v$.form.swift_code.$errors" :key="index">
                                            <input-error :message="error.$message" />
                                        </div>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">IFSC Code</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <jet-input id="ifsc_code" type="text" v-model="v$.form.ifsc_code.$model" :class="v$.form.ifsc_code.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " placeholder="IFSC Code" />
                                        <div v-for="(error, index) of v$.form.ifsc_code.$errors" :key="index">
                                            <input-error :message="error.$message" />
                                        </div>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">Sort Code</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <jet-input id="sort_code" type="text" v-model="v$.form.sort_code.$model" :class="v$.form.sort_code.$errors.length > 0
                                            ? 'is-invalid'
                                            : ''
                                            " placeholder="Sort Code" />
                                        <div v-for="(error, index) of v$.form.sort_code.$errors" :key="index">
                                            <input-error :message="error.$message" />
                                        </div>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                            </div>
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
                <div v-else>
                    <!--begin::Input group-->
                    <div class="card-body p-9">
                        <!--begin::Row-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Bank Name</label>
                            <!--end::Label-->
                            <!-- {{ company?.data?.user }} -->
                            <!--begin::Col-->
                            <div class="col-lg-6">
                                <span class="fw-bold fs-6 text-gray-700"> {{ account?.data?.bank_name }}</span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                        <!--begin::Row-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Bank Account</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6">
                                <span class="fw-bold fs-6 text-gray-700"> {{ account?.data?.bank_address }}</span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Beneficiary Name</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 fv-row">
                                <span class="fw-bold text-gray-700 fs-6">{{ account?.data?.beneficiary_name }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Account Number</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 d-flex align-items-center">
                                <span class="fw-bold fs-6 text-gray-700 me-2">{{ account?.data?.account_number
                                }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Routing Number</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 d-flex align-items-center">
                                <span class="fw-bold fs-6 text-gray-700">{{ account?.data?.routing_number
                                }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Swift Code</label>
                            <!--begin::Label-->
                            <!--begin::Label-->
                            <div class="col-lg-6">
                                <span class="fw-bold fs-6 text-gray-700">{{ account?.data?.swift_code }}</span>
                            </div>
                            <!--begin::Label-->
                        </div>
                        <!--end::Input group-->

                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">IFSC Code</label>
                            <!--begin::Label-->
                            <!--begin::Label-->
                            <div class="col-lg-6">
                                <span class="fw-bold fs-6 text-gray-700">{{ account?.data?.ifsc_code }}</span>
                            </div>
                            <!--begin::Label-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Sort Code</label>
                            <!--begin::Label-->
                            <!--begin::Label-->
                            <div class="col-lg-6">
                                <span class="fw-bold fs-6 text-gray-700">{{ account?.data?.sort_code
                                }}</span>
                            </div>
                            <!--begin::Label-->
                        </div>
                        <!--end::Input group-->
                    </div>
                </div>
            </div>
            <!--end::Card body-->
        </div>
    </app-layout>
</template>
