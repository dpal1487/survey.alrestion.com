<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import { required, numeric, url } from "@vuelidate/validators";
import PrimaryButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetLabel from "@/Jetstream/Label.vue";
import InputError from "@/jetstream/InputError.vue";
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";

export default defineComponent({
    setup() {
        return { v$: useVuelidate() };
    },
    props: ["countries", "project"],
    emits: ["submitted"],
    components: {
        Link,
        Multiselect,
        JetInput,
        JetLabel,
        InputError,
        JetValidationErrors,
        PrimaryButton,
    },
    validations() {
        return {
            form: {
                project_name: {
                    required,
                },
                project_cpi: {
                    required,
                },
                project_length: {
                    required,
                    numeric,
                },
                project_ir: {
                    required,
                    numeric,
                },
                sample_size: {
                    required,
                    numeric,
                },
                project_link: {
                    required,
                    url,
                },
                project_country: {
                    required,
                    numeric,
                },
            },
        };
    },
    data() {
        return {
            form: this.$inertia.form({
                id: this.project?.id,
                project_id: this.project?.project_id,
                project_name: this.project?.project_name,
                project_cpi: this.project?.cpi,
                project_length: this.project?.loi,
                project_ir: this.project?.ir,
                sample_size: this.project?.sample_size,
                project_link: this.project?.project_link,
                project_country: this.project?.country?.id,
                target: this.project?.target,
                status: this.project?.status || 1,
                add_more: false
            }),
        };
    },
    methods: {
        submit(action) {
            this.form.action = action;
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.$emit("submitted", this.form);
            }
        },
    },
    created() { },
});
</script>
<template>
    <JetValidationErrors />
    <form @submit.prevent="submit" autocomplete="off">
        <div class="row g-5">
            <div class="fv-row col-md-6 col-sm-12">
                <jet-label for="project-name" value="Project Name" />
                <jet-input id="project-name" type="text" v-model="v$.form.project_name.$model" :class="v$.form.project_name.$errors.length > 0
                    ? 'is-invalid'
                    : ''
                    " placeholder="Enter project name" />
                <div v-for="(error, index) of v$.form.project_name.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <div class="fv-row col-md-6 col-sm-12">
                <jet-label for="project-name" value="Project Country" />
                <Multiselect :canClear="false" :options="countries" label="label" valueProp="id"
                    class="form-control form-control-solid" placeholder="Select country" :searchable="true"
                    v-model="form.project_country" :class="v$.form.project_country.$errors.length > 0
                        ? 'is-invalid'
                        : ''
                        " />
            </div>
            <div class="fv-row col-12">
                <jet-label for="project-link" value="Project Link" />
                <jet-input id="project-link" type="text" v-model="v$.form.project_link.$model" :class="v$.form.project_link.$errors.length > 0
                    ? 'is-invalid'
                    : ''
                    " placeholder="Enter project link" />
                <div v-for="(error, index) of v$.form.project_link.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>

                <div class="form-text">
                    Capture unique user id as a (<b>RespondentID</b>)
                </div>
            </div>
            <div class="fv-row col-md-6 col-sm-12">
                <jet-label for="project-link" value="Project CPC/CPI" />
                <div class="input-group has-validation">
                    <span class="input-group-text">$</span>
                    <input type="number" step="any" class="form-control form-control-solid" id="project-cpi"
                        placeholder="Enter project CPI/CPC" v-model="v$.form.project_cpi.$model" :class="v$.form.project_cpi.$errors.length > 0
                            ? 'is-invalid'
                            : ''
                            " />
                </div>
                <div v-for="(error, index) of v$.form.project_cpi.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <div class="fv-row col-md-6 col-sm-12">
                <jet-label for="project-loi" value="Project LOI" />
                <jet-input id="project-loi" type="number" v-model="v$.form.project_length.$model" :class="v$.form.project_length.$errors.length > 0
                    ? 'is-invalid'
                    : ''
                    " placeholder="Enter project LOI" />
                <div v-for="(error, index) of v$.form.project_length.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <div class="fv-row col-md-6 col-sm-12">
                <jet-label for="project-ir" value="Project Incidence Rate (IR)" />
                <jet-input id="project-ir" type="number" v-model="v$.form.project_ir.$model" :class="v$.form.project_ir.$errors.length > 0
                    ? 'is-invalid'
                    : ''
                    " placeholder="Enter incidence rate" />
                <div v-for="(error, index) of v$.form.project_ir.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <div class="fv-row col-md-6 col-sm-12">
                <jet-label for="sample-size" value="Sample Size" />
                <jet-input id="sample-size" type="number" placeholder="Enter sample size"
                    v-model="v$.form.sample_size.$model" :class="v$.form.sample_size.$errors.length > 0
                        ? 'is-invalid'
                        : ''
                        " />
                <div v-for="(error, index) of v$.form.sample_size.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <div class="fv-row col-12">
                <jet-label for="project-notes" value="Project Notes" />
                <textarea rows="5" class="form-control form-control-solid" v-model="form.target" id="project-notes"
                    placeholder="Type important message here..."></textarea>
            </div>
            <div class="fv-row col-12">
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <div class="form-check form-check-custom form-check-solid me-3">
                            <input class="form-check-input" type="radio" value="1" id="active" v-model="form.status" />
                            <label class="form-check-label" for="active">
                                Active
                            </label>
                        </div>
                        <div class="form-check form-check-custom form-check-solid">
                            <input class="form-check-input" type="radio" value="0" id="inactive" v-model="form.status" />
                            <label class="form-check-label" for="inactive">
                                Inactive
                            </label>
                        </div>
                    </div>
                    <div class="form-check" v-if="route().current()=='mapping.create'">
                        <input class="form-check-input" type="checkbox" id="new-link" v-model="form.add_more" />
                        <label class="form-check-label" for="new-link">
                            Add More Project Link
                        </label>
                    </div>
                </div>
            </div>
            <slot name="action"></slot>
        </div>
    </form>
</template>
