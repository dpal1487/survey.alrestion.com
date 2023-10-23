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
import Datepicker from "vue3-datepicker";
import useVuelidate from "@vuelidate/core";
import Multiselect from "@vueform/multiselect";
import ImageInput from "@/components/ImageInput.vue";
import { required } from "@vuelidate/validators";

export default defineComponent({
    props: ["role", "user", "reports"],
    setup() {
        return { v$: useVuelidate() };
    },

    components: {
        AppLayout,
        Header,
        Link,
        Head,
        JetInput,
        JetLabel,
        JetValidationErrors,
        InputError,
        Multiselect,
        ImageInput,
        Datepicker,
    },
    validations() {
        return {
            form: {
                first_name: {
                    required,
                },
                last_name: {
                    required,
                },
                email: {
                },
                password: {
                    required,
                },
                role: {},
                status: {},
                date_of_birth: {
                    required,
                },
                gender: {
                    required,
                },
            },
        };
    },
    data() {
        return {
            isEdit: false,
            form: this.$inertia.form({
                id: this.user?.data?.id || "",
                image: this.user?.data?.full_path || "",
                image_id: "",
                first_name: this.user?.data?.first_name || "",
                last_name: this.user?.data?.last_name || "",
                password: this.user?.data?.password || "",
                role: this.user?.data?.role?.id || "",
                status: this.user?.data?.status || "",
                date_of_birth: new Date(this.user?.data?.date_of_birth) || "",
                gender: this.user?.data?.gender || "",
            }),
            title: "Account Overview",
        };
    },
    methods: {
        submit() {
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.form.transform((data) => ({
                    ...data,
                }))
                    .post(this.route("account.update"), {
                      
                        onSuccess: (data) => {
                            console.log(this.$page.props.ziggy.flash)
                            toast.success(this.$page.props.jetstream.flash.message);
                            this.isEdit = false;
                        },
                        onError: (data) => {
                            console.log(data);
                            // toast.error(data.message);
                        },
                    });
            }
        },
    },
});
</script>
<template>
    <Head :title="title" />
    <AppLayout :title="title">
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ title }}
            </li>
        </template>

        <!--begin::Navbar-->
        <Header :user="user?.data" />
        <!--begin::details View-->
        <div class="card">
            <!--begin::Card header-->
            <div class="card-header cursor-pointer">
                <!--begin::Card title-->
                <div class="card-title m-0">
                    <h3 class="fw-bold m-0">User Overview</h3>
                </div>
                <!--end::Card title-->
                <button class="btn btn-primary btn-sm align-self-center" @click="this.isEdit = this.isEdit ? false : true">
                    <i class="bi bi-pencil me-2"></i>Edit
                </button>
                <!-- <Link class="btn btn-primary align-self-center" href="/account/overview/edit">Edit
                        Account
                        </Link> -->
                <!-- <a href="settings.html" class="btn btn-primary align-self-center">Edit Profile</a> -->
            </div>
            <!--begin::Card header-->
            <div class="card-body p-0">
                <div class="row" v-if="isEdit">
                    <div class="col-12">
                        <JetValidationErrors />
                        <form @submit.prevent="submit()" class="form fv-plugins-bootstrap5 fv-plugins-framework"
                            novalidate="novalidate">
                            <!--begin::Card body-->
                            <div class="card-body border-top p-9">
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Full Name</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-6">
                                        <!--begin::Row-->
                                        <div class="row g-3">
                                            <!--begin::Col-->
                                            <div class="col-lg-6 fv-plugins-icon-container">
                                                <jet-input id="first_name" type="text" v-model="v$.form.first_name
                                                        .$model
                                                    " :class="v$.form.first_name
            .$errors.length > 0
            ? 'is-invalid'
            : ''
        " placeholder="First name" />
                                                <div v-for="(error, index) of v$
                                                    .form.first_name
                                                    .$errors" :key="index">
                                                    <input-error :message="error.$message
                                                        " />
                                                </div>
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-lg-6 fv-plugins-icon-container">
                                                <jet-input id="last_name" type="text" v-model="v$.form.last_name.$model
                                                    " :class="v$.form.last_name
            .$errors.length > 0
            ? 'is-invalid'
            : ''
        " placeholder="Last name" />
                                                <div v-for="(error, index) of v$
                                                    .form.last_name.$errors" :key="index">
                                                    <input-error :message="error.$message
                                                        " />
                                                </div>
                                            </div>
                                            <!--end::Col-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Date Of Birth</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-6">
                                        <!--begin::Row-->
                                        <!--begin::Col-->
                                        <div class="fv-plugins-icon-container">
                                            <Datepicker v-model="v$.form.date_of_birth.$model
                                                " id="project-start" type="text"
                                                class="form-control form-control-lg form-control-solid"
                                                placeholder="Enter date of Birth" :class="v$.form.date_of_birth
                                                    .$errors.length > 0
                                                    ? 'is-invalid'
                                                    : ''
                                                    " />
                                            <div v-for="(error, index) of v$.form
                                                .date_of_birth.$errors" :key="index">
                                                <input-error :message="error.$message" />
                                            </div>
                                        </div>
                                        <!--end::Col-->
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Password</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-6">
                                        <!--begin::Row-->
                                        <!--begin::Col-->
                                        <div class="fv-plugins-icon-container">
                                            <jet-input id="password" type="password" v-model="v$.form.password.$model
                                                " :class="v$.form.password.$errors
            .length > 0
            ? 'is-invalid'
            : ''
        " placeholder="*******" />
                                            <div v-for="(error, index) of v$.form
                                                .password.$errors" :key="index">
                                                <input-error :message="error.$message" />
                                            </div>
                                        </div>
                                        <!--end::Col-->
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label required fw-semibold fs-6">Gender</label>
                                    <!--end::Label-->

                                    <!--begin::Col-->
                                    <div class="col-lg-8 fv-row fv-plugins-icon-container">
                                        <!--begin::Options-->
                                        <div class="d-flex align-items-center mt-3">
                                            <!--begin::Option-->
                                            <label
                                                class="form-check form-check-custom form-check-inline form-check-solid me-5">
                                                <input class="form-check-input" type="radio" v-model="v$.form.gender.$model
                                                    " :class="v$.form.gender.$errors
            .length > 0
            ? 'is-invalid'
            : ''
        " value="male" />
                                                <span class="fw-semibold ps-2 fs-6">
                                                    Male
                                                </span>
                                            </label>
                                            <!--end::Option-->

                                            <!--begin::Option-->
                                            <label class="form-check form-check-custom form-check-inline form-check-solid">
                                                <input class="form-check-input" name="gender" type="radio" v-model="v$.form.gender.$model
                                                    " :class="v$.form.gender.$errors
            .length > 0
            ? 'is-invalid'
            : ''
        " value="female" />
                                                <span class="fw-semibold ps-2 fs-6">
                                                    Female
                                                </span>
                                            </label>
                                            <!--end::Option-->
                                        </div>
                                        <!--end::Options-->
                                        <div class="fv-plugins-message-container invalid-feedback"></div>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->

                            </div>
                            <!--end::Card body-->
                            <!--begin::Actions-->

                            <div class="card-footer d-flex justify-content-end py-6 px-9">
                                <div class="col-12">
                                    <div class="d-flex justify-content-end mt-4">
                                        <!--begin::Button-->
                                        <button type="button" class="btn btn-secondary me-5" @click="this.isEdit = false">
                                            Discard
                                        </button>
                                        <!--begin::Button-->
                                        <button type="submit" class="btn btn-primary" :class="{
                                            'text-white-50':
                                                form.processing,
                                        }">
                                            <div v-show="form.processing" class="spinner-border spinner-border-sm">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!--end::Actions-->
                        </form>
                    </div>
                </div>
                <div v-else>
                    <!--begin::Input group-->
                    <div class="card-body p-9">
                        <!-- {{ user }} -->
                        <!--begin::Row-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Full Name</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6">
                                <span class="fw-semibold fs-6 text-gray-800">{{ user?.data?.first_name }}
                                    {{ user?.data?.last_name }}</span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Email</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 fv-row">
                                <span class="fw-semibold text-gray-800 fs-6">{{ user?.data?.email }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">DOB</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 fv-row">
                                <span class="fw-semibold text-gray-800 fs-6">
                                    {{ user?.data?.date_of_birth }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Gender</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 fv-row">
                                <span class="fw-semibold text-gray-800 fs-6">{{ user?.data?.gender }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Role</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 fv-row">
                                <span class="fw-semibold text-gray-800 fs-6">{{ user?.data?.role?.name }}
                                </span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-7">
                            <!--begin::Label-->
                            <label class="col-6 fw-bold fs-5 text-gray-800">Status</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-6 fv-row">
                                <span :class="`badge bg-${user?.data?.status == 1
                                        ? 'success'
                                        : 'danger'
                                    }`">{{
        user?.data?.status
        ? "Active"
        : "Inactive"
    }}</span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                    </div>
                </div>
            </div>
            <!--end::Card body-->
        </div>
    </AppLayout>
</template>
