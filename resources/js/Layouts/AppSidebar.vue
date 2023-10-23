<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

export default defineComponent({
    props: ["projects", "status", "sidebar"],
    emits: ['check', 'toggleSidebar'],
    components: {
        Link,
    },
    data() {
        return {
            navigations: [
                {
                    link: "/master",
                    title: "Master",
                    icon: "bi bi-pie-chart-fill",
                    role: ["pm", "admin"],
                },
                {
                    link: "/projects",
                    title: "Projects",
                    icon: "bi bi-card-heading",
                    role: ["pm", "admin", "user"],
                },
                {
                    link: "/clients",
                    title: "Clients",
                    icon: "bi bi-journal-code",
                    role: ["pm", "admin"],
                },
                {
                    link: "/suppliers",
                    title: "Suppliers",
                    icon: "bi bi-collection-fill",
                    role: ["pm", "admin"],
                },
                {
                    link: "/invoices",
                    title: "Invoices",
                    icon: "bi bi-receipt",
                    role: ["account", "admin"],
                },
                {
                    link: "/users",
                    title: "Users",
                    icon: "bi bi-person-badge-fill",
                    role: ["pm", "admin"],
                },
            ],
        };
    },
    methods: {
        search() {
            console.log(this.q);
        },
        updateSelected(id, e) {
            console.log(id);
            console.log(e);
        },
        logout() {
            Inertia.post(route("logout"));
        },
    },
    created() { },
});
</script>
<template>
    <div class="app-sidebar flex-column"
        :style="`left: ${sidebar ? '0px' : 'calc(0px - var(--kt-app-sidebar-width))'}; transition: .4s all ease;`">
        <div class="px-6" style="border-bottom: 1px solid rgb(64, 64, 64); height: 70px;">
            <Link href="/">
            <img alt="Logo" src="/assets/images/logo-light.png" class="h-40px mt-5 app-sidebar-logo-default" />
            </Link>
            <button @click="() => this.$emit('toggleSidebar')"
                class="bg-white btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute translate-middle shadow-lg"
                :style="`top: 28px; left: ${!sidebar ? 'calc(10px + var(--kt-app-sidebar-width))' : '100%'}; `">
                <span style="transition: .4s all ease" :class="`svg-icon svg-icon-2 ${!sidebar && 'rotate-180'}`">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5"
                            d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                            fill="currentColor"></path>
                        <path
                            d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                            fill="currentColor"></path>
                    </svg>
                </span>
            </button>
            <!--end::Sidebar toggle-->

        </div>
        <!--end::Logo-->
        <!--begin::sidebar menu-->
        <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
            <!--begin::Menu wrapper-->
            <div class="app-sidebar-wrapper my-5">
                <!--begin::Menu-->
                <div class="menu menu-column menu-rounded menu-sub-indention px-3">
                    <!--begin:Menu item-->
                    <div class="menu-item m-0" v-for="(navigation, index) in navigations" :key="index">
                        <!--begin:Menu link-->
                        <Link class="menu-link m-0" v-if="navigation?.role?.includes(
                            $page?.props?.ziggy?.user?.role?.role?.slug
                        )
                            " :href="navigation.link">
                        <i :class="`${navigation.icon}  mx-1 fs-2`"></i>
                        {{ navigation.title }}
                        </Link>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                </div>
                <!--end::Menu-->
            </div>
            <!--end::Menu wrapper-->
        </div>
        <!--end::sidebar menu-->
        <!--begin::Footer-->
        <div class="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6">
            <form method="post" @submit.prevent="logout">
                <button type="submit"
                    class="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100">
                    <span class="btn-label">Logout</span>
                    <!--begin::Svg Icon | path: icons/duotune/general/gen005.svg-->
                    <span class="svg-icon btn-icon svg-icon-2 m-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                fill="currentColor"></path>
                            <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor"></rect>
                            <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor"></rect>
                            <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor"></rect>
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </button>
            </form>
        </div>
        <!--end::Footer-->
    </div>
</template>
