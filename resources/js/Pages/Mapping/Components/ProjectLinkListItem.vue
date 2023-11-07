<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import utils from "../../../utils";
import CopyLinkButton from "../../../Components/CopyLinkButton.vue";

export default defineComponent({

    props: ["project_link", "index"],
    emits: ['onSupplier', 'onDelete'],
    data() {
        return {
            isLoading: false,
            isModalOpen: false,
            activeId: null,
            isReadonly: true,
        };
    },
    components: {
        Link,
        Loading,
        CopyLinkButton
    },
    methods: {
        async updateStatus(id, e) {
            this.isLoading = true;
            await utils.changeStatus(route("mapping.status"), {
                id: id,
                status: e,
            });
            this.isLoading = false;
        },


        changeSampleSize() {
            this.isReadonly = false;
        },
        handelBlur() {
            this.isReadonly = true;
        },
        async handelKeyDown(id, e, project_id) {
            if (e.key === 'Enter') {
                this.project_link.sample_size = e.target.value;
                await utils.changeSampleSizeValue(route("mapping.sample-size"), {
                    id: id,
                    sample_size: e.target.value,
                    project_link_id: project_link_id
                });
                this.isReadonly = true;
            }
        }
    },
    created() { },
});
</script>
<template>
    <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
            <div class="flex-1">
                <Link class="text-gray-800 text-hover-primary fs-6 fw-bold" :href="`/mapping/${project_link.id}`"
                    v-if="$page.props.user.role.role.slug != 'user'">{{ project_link.project_name }}</Link>
                <div class="text-gray-800 fs-6 fw-bold" v-else>
                    {{ project_link.project_name }}
                </div>
                <span class="text-muted fw-semibold d-block fs-7"><i class="bi bi-geo-alt-fill me-2"></i>{{
                    project_link.country.display_name }}</span>
            </div>
            <div class="flex-1 fw-bold" v-if="$page.props.user.role.role.slug != 'user'">
                <span>${{ project_link.cpi }}/-CPI</span>
            </div>
            <div class="flex-1 fw-bold" v-if="$page.props.user.role.role.slug != 'user'">
                <span>{{ project_link.loi }}Min/LOI</span>
            </div>
            <div class="flex-1 fw-bold" v-if="$page.props.user.role.role.slug != 'user'">
                <span>{{ project_link.ir }}%/IR</span>
            </div>

            <div class="flex-1 fw-bold" v-if="$page.props.user.role.role.slug != 'user'">
                <span v-if="project_link?.user"><i class="bi bi-people me-2"></i>{{ project_link?.user }}</span>
                <span v-else><i class="bi bi-people me-2"></i>Admin</span>
            </div>
            <div class="flex-1 fw-bold" v-if="$page.props.user.role.role.slug != 'user'">
                <button type="button" class="btn btn-link" @click="$emit('onSupplier', project_link.id)">Suppliers
                    ({{ project_link.supplier_count }})</button>
            </div>
            <div class="flex-1">
                <CopyLinkButton :link="project_link.project_link" v-if="$page.props.user.role.role.slug != 'user'"
                    tooltip="Copy project link" />
                <CopyLinkButton :link="$page.props.ziggy.url +
                    '/survey/init/' +
                    project_link.id +
                    '/' +
                    $page.props.user.id" v-else />
            </div>
            <div class="flex-1 text-end">
                <div class="form-switch form-check-solid d-block form-check-custom form-check-success"
                    v-if="$page.props.user.role.role.slug != 'user'">
                    <input class="form-check-input h-20px w-30px" type="checkbox" @input="
                        updateStatus(project_link.id, $event.target.checked)
                        " :checked="project_link.status == 1 ? true : false" />
                    <label class="form-check-label"> Status </label>
                </div>
                <div v-else>
                    <span class="badge badge-success" v-if="project_link.status">Active</span>
                    <span class="badge badge-danger" v-else>Inactive</span>
                </div>
            </div>
            <!--begin:Action-->
            <div class="flex-1 text-end" v-if="$page.props.user.role.role.slug != 'user'">
                <button class="btn btn-icon btn-outline btn-light btn-circle me-5" :id="`dropdown-${project_link.id}`"
                    data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots-vertical"></i>
                </button>
                <div class="text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                    :aria-labelled:by="`dropdown-${project_link.id}`">
                    <div class="menu-item px-3">
                        <Link :href="`/mapping/${project_link.id}/edit`" class="menu-link"><i
                            class="bi bi-pencil me-2"></i>Edit
                        </Link>
                    </div>
                    <div class="menu-item px-3">
                        <Link title="Add Supplier" :href="`/sampling/${project_link.id}/create`" class="menu-link"><i
                            class="bi bi-plus-circle me-2"></i>Add
                        Supplier
                        </Link>
                    </div>
                    <div class="menu-item px-3">
                        <span @click="$emit('onDelete', index)" class="menu-link"><i
                                class="bi bi-trash3 me-2"></i>Delete</span>
                    </div>
                </div>
            </div>
            <!--end:Action-->
        </div>
        <div class="separator separator-dashed my-4"></div>
        <ul class="nav d-flex justify-content-between fw-bold text-center">
            <!--begin::Item-->

            <li class="nav-item row">
                <span v-if="$page.props.user.role.role.slug != 'user'">
                    <input type="text"
                        :class="`form-control w-100px mx-auto p-0 text-gray-900 text-center fw-bold ${isReadonly && 'border-0'}`"
                        @dblclick="changeSampleSize()" :readonly="isReadonly" :value="project_link.sample_size"
                        @keydown="(e) => handelKeyDown(project_link.id, e, project_link?.project_id, index)"
                        @blur="handelBlur()" title="Double click to edit" />
                </span>
                <span v-else>
                    {{ project_link.sample_size }}
                </span>
                <span class="text-gray-400">Sample Size</span>
            </li>
            <!--end::Item-->
            <!--begin::Item-->
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.total_clicks }}
                </span>
                <span class="text-gray-400">Total Clicks</span>
            </li>
            <!--end::Item-->
            <!--begin::Item-->
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.complete }}
                </span>
                <span class="text-gray-400">Completes</span>
            </li>
            <!--end::Item-->
            <!--begin::Item-->
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.terminate }}
                </span>
                <span class="text-gray-400">Terminates</span>
            </li>
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.quotafull }}
                </span>
                <span class="text-gray-400">Quotafull</span>
            </li>
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.security_terminate }}
                </span>
                <span class="text-gray-400">Security Terminates</span>
            </li>
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.incomplete }}
                </span>
                <span class="text-gray-400">Incompletes</span>
            </li>
            <li class="nav-item row">
                <span>
                    {{ project_link.reports.total_ir }}
                </span>
                <span class="text-gray-400">Incidence Ratio</span>
            </li>
        </ul>
    </div>
</template>
