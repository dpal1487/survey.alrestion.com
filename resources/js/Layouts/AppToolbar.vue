<script>
import { defineComponent } from "vue"
import AppLayout from "@/Layouts/AppLayout.vue"
import { Head, Link } from '@inertiajs/inertia-vue3';
export default defineComponent({
    components: {
        Link
    }
});
</script>
<template>
    <div class="app-toolbar py-3 py-lg-6">
        <!--begin::Toolbar container-->
        <div class="app-container container-fluid d-flex flex-stack">
            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <!--begin::Title-->
                <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                    Projects</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <!-- <Link href="/" class="text-muted text-hover-primary">Home</Link> -->
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-400 w-5px h-2px"></span>
                    </li>
                </ul>
                <!--end::Breadcrumb-->
            </div>
            <!--end::Page title-->
        </div>
        <!--end::Toolbar container-->
    </div>
</template>
