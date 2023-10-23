<template>
    <Head title="Log in" />
    <jet-authentication-card>
        <form @submit.prevent="submit" class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework">
            <div class="text-center mb-11">
                <!--begin::Title-->
                <h1 class="text-dark fw-bolder mb-3">
                    Sign In
                </h1>
                <!--end::Title-->
            </div>
            <!--begin::Input group--->
            <JetValidationErrors />

            <div class="fv-row mb-8 fv-plugins-icon-container">
                <!--begin::Email-->
                <jet-label for="email" value="Email" />
                <jet-input id="email" type="email" v-model="v$.form.email.$model" autofocus :class="v$.form.email.$errors.length > 0 ? 'is-invalid' : ''
                    " />
                <div v-for="(error, index) of v$.form.email.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <!--end::Input group--->
            <div class="fv-row mb-8 fv-plugins-icon-container">
                <!--begin::Password-->
                <jet-label for="password" value="Password" />
                <jet-input id="password" type="password" v-model="v$.form.password.$model" :class="v$.form.password.$errors.length > 0 ? 'is-invalid' : ''
                    " />
                <div v-for="(error, index) of v$.form.password.$errors" :key="index">
                    <input-error :message="error.$message" />
                </div>
            </div>
            <!--end::Input group--->
            <!--begin::Submit button-->
            <div class="d-grid mb-10">
                <primary-button :disabled="form.processing" :class="{ 'text-white-50': form.processing }">
                    <div v-show="form.processing" class="spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    Log in
                </primary-button>
            </div>
            <!--end::Submit button-->
        </form>
    </jet-authentication-card>
</template>

<script>
import { defineComponent } from "vue";
import JetAuthenticationCard from "@/Jetstream/AuthenticationCard.vue";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";
import PrimaryButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetCheckbox from "@/Jetstream/Checkbox.vue";
import JetLabel from "@/Jetstream/Label.vue";
import InputError from "@/jetstream/InputError.vue";
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default defineComponent({
    setup() {
        return { v$: useVuelidate() };
    },
    components: {
        Head,
        JetAuthenticationCard,
        JetAuthenticationCardLogo,
        PrimaryButton,
        JetInput,
        JetCheckbox,
        JetLabel,
        JetValidationErrors,
        InputError,
        Link,
    },
    validations() {
        return {
            form: {
                email: {
                    required,
                    email,
                },
                password: {
                    required,
                    min: minLength(6),
                },
            },
        };
    },
    data() {
        return {
            form: this.$inertia.form({
                email: "",
                password: "",
                remember: false,
            }),
        };
    },

    methods: {
        submit() {
            this.v$.$touch();
            if (!this.v$.form.$invalid) {
                this.form
                    .transform((data) => ({
                        ...data,
                        remember: this.form.remember ? "on" : "",
                    }))
                    .post(this.route("login"), {
                        onFinish: () => this.form.reset("password"),
                    });
            }
        },
        authProvider(provider) {
            let self = this;
            this.$auth
                .authenticate(provider)
                .then((response) => {
                    self.socialLogin(provider, response);
                })
                .catch((err) => {
                    console.log({ err: err });
                });
        },
        socialLogin(provider, response) {
            this.$http
                .post("/social/" + provider, response)
                .then((response) => {
                    return response.data.token;
                })
                .catch((err) => {
                    console.log({ err: err });
                });
        },
    },
});
</script>
