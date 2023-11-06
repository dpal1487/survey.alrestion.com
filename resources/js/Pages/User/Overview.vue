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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import ImageInput from '@/components/ImageInput.vue';

export default defineComponent({
    setup() {
        return { v$: useVuelidate() };
    },
    props: ['user', 'role'],

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
        VueDatePicker

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
                    required,
                },
                role: {
                    required
                },
                status: {
                    required,
                },
                password: {

                }
            },
        };
    },
    data() {
        return {
            isEdit: false,
            isUploading: false,
            processing: false,
            url: null,
            id: route().params.id,
            form: this.$inertia.form({
                id: this.user?.data?.id || '',
                image: this.user?.data?.full_path || '',
                image_id: '',
                first_name: this.user?.data?.first_name || '',
                last_name: this.user?.data?.last_name || '',
                email: this.user?.data?.email || '',
                role: this.user?.data?.role?.id || '',
                status: this.user?.data?.status || '',
                action: "user.overview",
                password: '',
            }),
            status: [
                { name: 'Active', id: '1' },
                { name: 'Inactive', id: '0' },
            ],

            title: "User Overview",
        };
    },
    methods: {
        submit() {
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.form.transform((data) => ({
                    ...data,
                }))
                    .post(this.route("user.update", this.form.id), {
                        onSuccess: (data) => {
                            toast.success(this.$page.props.jetstream.flash.message);
                            this.isEdit = false;
                        },
                        onError: (data) => {
                            console.log(data);
                            // toast.error(data.message)
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
            <li class="breadcrumb-item">
                <Link href="/users" class="text-muted text-hover-primary">Users</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ title }}
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item text-muted">
                {{ user?.data?.first_name }}
            </li>
        </template>
        <Header :user="user.data" />
        <div class="card mb-5">
            <div class="card-header cursor-pointer">
                <div class="card-title m-0">
                    <h3 class="fw-bold m-0"> User Overview</h3>
                </div>
                <button class="btn btn-primary btn-sm align-self-center"
                    @click="this.isEdit = this.isEdit ? false : true"><i class="bi bi-pencil me-2"></i>Edit
                </button>
            </div>
            <div class="card-body p-0 mb-5">
                <div class="row" v-if="isEdit">
                    <div class="col-12">
                        <JetValidationErrors />
                        <form @submit.prevent="submit()" class="form fv-plugins-bootstrap5 fv-plugins-framework"
                            novalidate="novalidate">
                            <div class="card-body border-top p-9">
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Full Name</label>
                                    <div class="col-lg-6">
                                        <div class="row g-3">
                                            <div class="col-lg-6  fv-plugins-icon-container">
                                                <jet-input id="first_name" type="text" v-model="v$.form.first_name.$model"
                                                    :class="v$.form.first_name.$errors.length > 0
                                                        ? 'is-invalid'
                                                        : ''
                                                        " placeholder="First name" />
                                                <div v-for="(error, index) of v$.form.first_name.$errors" :key="index">
                                                    <input-error :message="error.$message" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6  fv-plugins-icon-container">
                                                <jet-input id="last_name" type="text" v-model="v$.form.last_name.$model"
                                                    :class="v$.form.last_name.$errors.length > 0
                                                        ? 'is-invalid'
                                                        : ''
                                                        " placeholder="Last name" />
                                                <div v-for="(error, index) of v$.form.last_name.$errors" :key="index">
                                                    <input-error :message="error.$message" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Email</label>
                                    <div class="col-lg-6">
                                        <div class="fv-plugins-icon-container">
                                            <jet-input id="email" type="text" v-model="v$.form.email.$model" :class="v$.form.email.$errors.length > 0
                                                ? 'is-invalid'
                                                : ''
                                                " placeholder="Email" />
                                            <div v-for="(error, index) of v$.form.email.$errors" :key="index">
                                                <input-error :message="error.$message" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Role</label>
                                    <div class="col-lg-6">
                                        <div class="fv-plugins-icon-container">
                                            <Multiselect :options="role.roles" label="name" valueProp="id"
                                                :class="v$.form.role.$errors.length > 0 ? 'is-invalid form-control form-control-lg form-control-solid' : 'form-control form-control-lg form-control-solid'"
                                                placeholder="Select Role" v-model="form.role" track-by="name"
                                                :searchable="true" />
                                            <div v-for="(error, index) of v$.form.role.$errors" :key="index">
                                                <input-error :message="error.$message" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Status</label>
                                    <div class="col-lg-6">
                                        <div class="fv-plugins-icon-container">
                                            <Multiselect :options="status" label="name" valueProp="id"
                                                :class="v$.form.status.$errors.length > 0 ? 'is-invalid form-control form-control-lg form-control-solid' : 'form-control form-control-lg form-control-solid'"
                                                placeholder="Select status" v-model="form.status" track-by="name"
                                                :searchable="true" />
                                            <div v-for="(error, index) of v$.form.status.$errors" :key="index">
                                                <input-error :message="error.$message" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-6">
                                    <label class="col-lg-4 col-form-label fw-semibold fs-6">Password</label>
                                    <div class="col-lg-6">
                                        <div class="fv-plugins-icon-container">
                                            <jet-input id="password" type="text" v-model="v$.form.password.$model" :class="v$.form.password.$errors.length > 0
                                                ? 'is-invalid'
                                                : ''
                                                " placeholder="Enter password" />
                                            <div v-for="(error, index) of v$.form.password.$errors" :key="index">
                                                <input-error :message="error.$message" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-end py-6 px-9">
                                <div class="col-12">
                                    <div class="d-flex justify-content-end mt-4">
                                        <!--begin::Button-->
                                        <button type="button" class="btn btn-secondary me-5"
                                            @click="this.isEdit = false">Discard</button>
                                        <!--begin::Button-->
                                        <button type="submit" class="btn btn-primary"
                                            :class="{ 'text-white-50': form.processing }">
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
                                <span class="fw-semibold fs-6 text-gray-800 ">{{ this.user?.data?.first_name }} {{
                                    this.user?.data?.last_name }}</span>
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
                                <span class="fw-semibold text-gray-800 fs-6">{{ this.user?.data?.email }}
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
                                <span class="fw-semibold text-gray-800 fs-6">{{ this.user?.data?.role?.name }}
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
                                    }`">{{ user?.data?.status ? 'Active' : 'Inactive' }}</span>
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
