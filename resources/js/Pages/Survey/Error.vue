<script>
import { defineComponent } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
export default defineComponent({
    props: ["data"],
    components: {
        Link,
        Head,
    },
    created() {
    }
});
</script>
<template>
    <div class="d-flex flex-column flex-root" id="kt_app_root">
        <!--begin::Authentication - Signup Welcome Message -->
        <div class="d-flex flex-column flex-center flex-column-fluid">
            <!--begin::Content-->
            <div class="d-flex flex-column flex-center text-center p-10">
                <!--begin::Wrapper-->
                <div class="card card-flush w-lg-650px py-5">
                    <div class="card-body py-15 py-lg-20">
                        <!--begin::Title-->
                        <h1 class="fw-bolder fs-2qx text-gray-900 mb-4">
                            {{ data.title }}
                        </h1>
                        <!--end::Title-->

                        <!--begin::Text-->
                        <div class="fw-semibold text-gray-500 mb-7">
                            {{ data.message }}
                        </div>
                        <!--end::Text-->

                        <!--begin::Illustration-->
                        <div class="mb-11">
                            <img src="/assets/images/error500.png" class="mw-100 mh-400px theme-light-show" alt="">
                        </div>
                        <!--end::Illustration-->
                    </div>
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Authentication - Signup Welcome Message-->
    </div>
</template>