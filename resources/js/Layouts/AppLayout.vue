<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AppHeader from "./AppHeader.vue";
import AppSidebar from "./AppSidebar.vue";

export default {
    props: {
        title: String,
        breadcrumb: Object,
    },

    components: {
        Head,
        Link,
        AppHeader,
        AppSidebar,
    },

    data() {
        return {
            isMobile: false,
            sidebar: false,
            showingNavigationDropdown: false,
            hideSidebarOn: []
        };
    },

    methods: {
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        },
        logout() {
            this.$inertia.post(route("logout"));
        },
    },

    computed: {
        path() {
            return window.location.pathname;
        },
    },
    mounted() {
        let resolution = window.innerWidth;
        if(resolution <= 768){
            this.isMobile = true;
            this.sidebar = false;
        }else{
            this.isMobile = false;
            this.sidebar = true;
        }
        
        const handleWindowResize = () => {
            resolution = window.innerWidth;
            let mobile = resolution <= 768;
            this.isMobile = mobile;
            this.sidebar = !mobile;
        }
        window.addEventListener('resize', handleWindowResize, false);
    }
};
</script>


<template>
    <div>

        <Head :title="title" />
        <AppSidebar v-if="true" :sidebar="sidebar" @toggleSidebar="toggleSidebar" />

        <AppHeader :sidebar="sidebar" :isMobile="isMobile" />
        <main :style="`margin-left: ${(sidebar && !isMobile) ? 'var(--kt-app-sidebar-width)' : ''}`"
            
            class="app-wrapper flex-column flex-row-fluid">
            <div class="app-main flex-column flex-row-fluid">
                <div class="d-flex flex-column flex-column-fluid">
                    <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
                        <!--begin::Toolbar container-->
                        <div id="kt_app_toolbar_container" class="app-container container-fluid d-flex flex-stack">
                            <!--begin::Page title-->
                            <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                <!--begin::Title-->
                                <h1
                                    class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                    {{ title }}
                                </h1>
                                <!--end::Title-->
                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                    <!--begin::Item-->
                                    <li class="breadcrumb-item text-muted">
                                        <a href="/" class="text-muted text-hover-primary">Home</a>
                                    </li>
                                    <!--end::Item-->
                                    <slot name="breadcrumb" />
                                </ul>
                                <!--end::Breadcrumb-->

                            </div>
                            <!--end::Page title-->
                            <slot name="toolbar" />
                        </div>
                        <!--end::Toolbar container-->
                    </div>

                    <div class="app-content flex-column-fluid">
                        <!--begin::Content container-->
                        <div class="app-container container-fluid">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>


