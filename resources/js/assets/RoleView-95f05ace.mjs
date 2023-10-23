import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia-vue3";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: [""],
  data() {
    return {};
  },
  components: {
    AppLayout
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div id="kt_app_content" class="app-content flex-column-fluid"${_scopeId}><div id="kt_app_content_container" class="app-container container-xxl"${_scopeId}><div class="d-flex flex-column flex-lg-row"${_scopeId}><div class="flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10"${_scopeId}><div class="card card-flush"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2 class="mb-0"${_scopeId}>Developer</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="d-flex flex-column text-gray-600"${_scopeId}><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>Some Admin Controls </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View Financial Summaries only </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View and Edit API Controls </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View Payouts only </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View and Edit Disputes </div><div class="d-flex align-items-center py-2 d-none"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span><em${_scopeId}>and 3 more...</em></div></div></div><div class="card-footer pt-0"${_scopeId}><button type="button" class="btn btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role"${_scopeId}>Edit Role</button></div></div><div class="modal fade" id="kt_modal_update_role" tabindex="-1" aria-hidden="true"${_scopeId}><div class="modal-dialog modal-dialog-centered mw-750px"${_scopeId}><div class="modal-content"${_scopeId}><div class="modal-header"${_scopeId}><h2 class="fw-bold"${_scopeId}>Update Role</h2><div class="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close"${_scopeId}><span class="svg-icon svg-icon-1"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"${_scopeId}></rect><rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"${_scopeId}></rect></svg></span></div></div><div class="modal-body scroll-y mx-5 my-7"${_scopeId}><form id="kt_modal_update_role_form" class="form fv-plugins-bootstrap5 fv-plugins-framework" action="#"${_scopeId}><div class="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px" style="${ssrRenderStyle({ "max-height": "489px" })}"${_scopeId}><div class="fv-row mb-10 fv-plugins-icon-container"${_scopeId}><label class="fs-5 fw-bold form-label mb-2"${_scopeId}><span class="required"${_scopeId}>Role name</span></label><input class="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer"${_scopeId}><div class="fv-plugins-message-container invalid-feedback"${_scopeId}></div></div><div class="fv-row"${_scopeId}><label class="fs-5 fw-bold form-label mb-2"${_scopeId}>Role Permissions</label><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5"${_scopeId}><tbody class="text-gray-600 fw-semibold"${_scopeId}><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Administrator Access <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Allows a full access to the system" data-bs-original-title="Allows a full access to the system" data-kt-initialized="1"${_scopeId}></i></td><td${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-9"${_scopeId}><input class="form-check-input" type="checkbox" value="" id="kt_roles_select_all"${_scopeId}><span class="form-check-label" for="kt_roles_select_all"${_scopeId}>Select all</span></label></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>User Management</td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="user_management_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="user_management_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="user_management_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Content Management </td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="content_management_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="content_management_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="content_management_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Financial Management </td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="financial_management_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="financial_management_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="financial_management_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Reporting</td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="reporting_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="reporting_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="reporting_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Payroll</td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="payroll_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="payroll_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="payroll_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Disputes Management </td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="disputes_management_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="disputes_management_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="disputes_management_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>API Controls</td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="api_controls_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="api_controls_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="api_controls_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Database Management </td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="database_management_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="database_management_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="database_management_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Repository Management </td><td${_scopeId}><div class="d-flex"${_scopeId}><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="repository_management_read"${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-custom form-check-solid me-5 me-lg-20"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="repository_management_write"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="" name="repository_management_create"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label></div></td></tr></tbody></table></div></div></div><div class="text-center pt-15 gap-5"${_scopeId}><button type="reset" class="btn btn-light me-3" data-kt-roles-modal-action="cancel"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary" data-kt-roles-modal-action="submit"${_scopeId}><span class="indicator-label"${_scopeId}>Submit</span><span class="indicator-progress"${_scopeId}>Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></form></div></div></div></div></div><div class="flex-lg-row-fluid ms-lg-10"${_scopeId}><div class="card card-flush mb-6 mb-xl-9"${_scopeId}><div class="card-header pt-5"${_scopeId}><div class="card-title"${_scopeId}><h2 class="d-flex align-items-center"${_scopeId}>Users Assigned <span class="text-gray-600 fs-6 ms-1"${_scopeId}>(14)</span></h2></div><div class="card-toolbar"${_scopeId}><div class="d-flex align-items-center position-relative my-1" data-kt-view-roles-table-toolbar="base"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-6"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text" data-kt-roles-table-filter="search" class="form-control form-control-solid w-250px ps-15" placeholder="Search Users"${_scopeId}></div><div class="d-flex justify-content-end align-items-center d-none" data-kt-view-roles-table-toolbar="selected"${_scopeId}><div class="fw-bold me-5"${_scopeId}><span class="me-2" data-kt-view-roles-table-select="selected_count"${_scopeId}></span>Selected </div><button type="button" class="btn btn-danger" data-kt-view-roles-table-select="delete_selected"${_scopeId}>Delete Selected</button></div></div></div><div class="card-body pt-0"${_scopeId}><div id="kt_roles_view_table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 mb-0 dataTable no-footer" id="kt_roles_view_table"${_scopeId}><thead${_scopeId}><tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0"${_scopeId}><th class="w-10px pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="
																	
																		
																	
																" style="${ssrRenderStyle({ "width": "29.8906px" })}"${_scopeId}><div class="form-check form-check-sm form-check-custom form-check-solid me-3"${_scopeId}><input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_roles_view_table .form-check-input" value="1"${_scopeId}></div></th><th class="min-w-50px sorting" tabindex="0" aria-controls="kt_roles_view_table" rowspan="1" colspan="1" aria-label="ID: activate to sort column ascending" style="${ssrRenderStyle({ "width": "89.7031px" })}"${_scopeId}>ID</th><th class="min-w-150px sorting" tabindex="0" aria-controls="kt_roles_view_table" rowspan="1" colspan="1" aria-label="User: activate to sort column ascending" style="${ssrRenderStyle({ "width": "313.5px" })}"${_scopeId}>User</th><th class="min-w-125px sorting" tabindex="0" aria-controls="kt_roles_view_table" rowspan="1" colspan="1" aria-label="Joined Date: activate to sort column ascending" style="${ssrRenderStyle({ "width": "240.281px" })}"${_scopeId}>Joined Date</th><th class="text-end min-w-100px sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" style="${ssrRenderStyle({ "width": "148.125px" })}"${_scopeId}> Actions</th></tr></thead><tbody class="fw-semibold text-gray-600"${_scopeId}><tr class="odd"${_scopeId}><td${_scopeId}><div class="form-check form-check-sm form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="1"${_scopeId}></div></td><td${_scopeId}>ID4728</td><td class="d-flex align-items-center"${_scopeId}><div class="symbol symbol-circle symbol-50px overflow-hidden me-3"${_scopeId}><a href="../users/view.html"${_scopeId}><div class="symbol-label"${_scopeId}><img src="/assets/media/avatars/300-6.jpg" alt="Emma Smith" class="w-100"${_scopeId}></div></a></div><div class="d-flex flex-column"${_scopeId}><a href="../users/view.html" class="text-gray-800 text-hover-primary mb-1"${_scopeId}>Emma Smith</a><span${_scopeId}>smith@kpmg.com</span></div></td><td data-order="2022-02-21T06:43:00+05:30"${_scopeId}>21 Feb 2022, 6:43 am </td><td class="text-end"${_scopeId}><a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true"${_scopeId}><div class="menu-item px-3"${_scopeId}><a href="../users/view.html" class="menu-link px-3"${_scopeId}>View</a></div><div class="menu-item px-3"${_scopeId}><a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row"${_scopeId}>Delete</a></div></div></td></tr><tr class="even"${_scopeId}><td${_scopeId}><div class="form-check form-check-sm form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="1"${_scopeId}></div></td><td${_scopeId}>ID7050</td><td class="d-flex align-items-center"${_scopeId}><div class="symbol symbol-circle symbol-50px overflow-hidden me-3"${_scopeId}><a href="../users/view.html"${_scopeId}><div class="symbol-label fs-3 bg-light-danger text-danger"${_scopeId}> M</div></a></div><div class="d-flex flex-column"${_scopeId}><a href="../users/view.html" class="text-gray-800 text-hover-primary mb-1"${_scopeId}>Melody Macy</a><span${_scopeId}>melody@altbox.com</span></div></td><td data-order="2022-08-19T06:43:00+05:30"${_scopeId}>19 Aug 2022, 6:43 am </td><td class="text-end"${_scopeId}><a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true"${_scopeId}><div class="menu-item px-3"${_scopeId}><a href="../users/view.html" class="menu-link px-3"${_scopeId}>View</a></div><div class="menu-item px-3"${_scopeId}><a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row"${_scopeId}>Delete</a></div></div></td></tr><tr class="odd"${_scopeId}><td${_scopeId}><div class="form-check form-check-sm form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="1"${_scopeId}></div></td><td${_scopeId}>ID6056</td><td class="d-flex align-items-center"${_scopeId}><div class="symbol symbol-circle symbol-50px overflow-hidden me-3"${_scopeId}><a href="../users/view.html"${_scopeId}><div class="symbol-label"${_scopeId}><img src="/assets/media/avatars/300-1.jpg" alt="Max Smith" class="w-100"${_scopeId}></div></a></div><div class="d-flex flex-column"${_scopeId}><a href="../users/view.html" class="text-gray-800 text-hover-primary mb-1"${_scopeId}>Max Smith</a><span${_scopeId}>max@kt.com</span></div></td><td data-order="2022-06-24T20:43:00+05:30"${_scopeId}>24 Jun 2022, 8:43 pm </td><td class="text-end"${_scopeId}><a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true"${_scopeId}><div class="menu-item px-3"${_scopeId}><a href="../users/view.html" class="menu-link px-3"${_scopeId}>View</a></div><div class="menu-item px-3"${_scopeId}><a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row"${_scopeId}>Delete</a></div></div></td></tr><tr class="even"${_scopeId}><td${_scopeId}><div class="form-check form-check-sm form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="1"${_scopeId}></div></td><td${_scopeId}>ID8778</td><td class="d-flex align-items-center"${_scopeId}><div class="symbol symbol-circle symbol-50px overflow-hidden me-3"${_scopeId}><a href="../users/view.html"${_scopeId}><div class="symbol-label"${_scopeId}><img src="/assets/media/avatars/300-5.jpg" alt="Sean Bean" class="w-100"${_scopeId}></div></a></div><div class="d-flex flex-column"${_scopeId}><a href="../users/view.html" class="text-gray-800 text-hover-primary mb-1"${_scopeId}>Sean Bean</a><span${_scopeId}>sean@dellito.com</span></div></td><td data-order="2022-11-10T22:10:00+05:30"${_scopeId}>10 Nov 2022, 10:10 pm </td><td class="text-end"${_scopeId}><a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true"${_scopeId}><div class="menu-item px-3"${_scopeId}><a href="../users/view.html" class="menu-link px-3"${_scopeId}>View</a></div><div class="menu-item px-3"${_scopeId}><a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row"${_scopeId}>Delete</a></div></div></td></tr><tr class="odd"${_scopeId}><td${_scopeId}><div class="form-check form-check-sm form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox" value="1"${_scopeId}></div></td><td${_scopeId}>ID2101</td><td class="d-flex align-items-center"${_scopeId}><div class="symbol symbol-circle symbol-50px overflow-hidden me-3"${_scopeId}><a href="../users/view.html"${_scopeId}><div class="symbol-label"${_scopeId}><img src="/assets/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100"${_scopeId}></div></a></div><div class="d-flex flex-column"${_scopeId}><a href="../users/view.html" class="text-gray-800 text-hover-primary mb-1"${_scopeId}>Brian Cox</a><span${_scopeId}>brian@exchange.com</span></div></td><td data-order="2022-09-22T11:30:00+05:30"${_scopeId}>22 Sep 2022, 11:30 am </td><td class="text-end"${_scopeId}><a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true"${_scopeId}><div class="menu-item px-3"${_scopeId}><a href="../users/view.html" class="menu-link px-3"${_scopeId}>View</a></div><div class="menu-item px-3"${_scopeId}><a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row"${_scopeId}>Delete</a></div></div></td></tr></tbody></table></div><div class="row"${_scopeId}><div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"${_scopeId}></div><div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"${_scopeId}><div class="dataTables_paginate paging_simple_numbers" id="kt_roles_view_table_paginate"${_scopeId}><ul class="pagination"${_scopeId}><li class="paginate_button page-item previous disabled" id="kt_roles_view_table_previous"${_scopeId}><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="0" tabindex="0" class="page-link"${_scopeId}><i class="previous"${_scopeId}></i></a></li><li class="paginate_button page-item active"${_scopeId}><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="1" tabindex="0" class="page-link"${_scopeId}>1</a></li><li class="paginate_button page-item"${_scopeId}><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="2" tabindex="0" class="page-link"${_scopeId}>2</a></li><li class="paginate_button page-item"${_scopeId}><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="3" tabindex="0" class="page-link"${_scopeId}>3</a></li><li class="paginate_button page-item next" id="kt_roles_view_table_next"${_scopeId}><a href="#" aria-controls="kt_roles_view_table" data-dt-idx="4" tabindex="0" class="page-link"${_scopeId}><i class="next"${_scopeId}></i></a></li></ul></div></div></div></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            id: "kt_app_content",
            class: "app-content flex-column-fluid"
          }, [
            createVNode("div", {
              id: "kt_app_content_container",
              class: "app-container container-xxl"
            }, [
              createVNode("div", { class: "d-flex flex-column flex-lg-row" }, [
                createVNode("div", { class: "flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10" }, [
                  createVNode("div", { class: "card card-flush" }, [
                    createVNode("div", { class: "card-header" }, [
                      createVNode("div", { class: "card-title" }, [
                        createVNode("h2", { class: "mb-0" }, "Developer")
                      ])
                    ]),
                    createVNode("div", { class: "card-body pt-0" }, [
                      createVNode("div", { class: "d-flex flex-column text-gray-600" }, [
                        createVNode("div", { class: "d-flex align-items-center py-2" }, [
                          createVNode("span", { class: "bullet bg-primary me-3" }),
                          createTextVNode("Some Admin Controls ")
                        ]),
                        createVNode("div", { class: "d-flex align-items-center py-2" }, [
                          createVNode("span", { class: "bullet bg-primary me-3" }),
                          createTextVNode("View Financial Summaries only ")
                        ]),
                        createVNode("div", { class: "d-flex align-items-center py-2" }, [
                          createVNode("span", { class: "bullet bg-primary me-3" }),
                          createTextVNode("View and Edit API Controls ")
                        ]),
                        createVNode("div", { class: "d-flex align-items-center py-2" }, [
                          createVNode("span", { class: "bullet bg-primary me-3" }),
                          createTextVNode("View Payouts only ")
                        ]),
                        createVNode("div", { class: "d-flex align-items-center py-2" }, [
                          createVNode("span", { class: "bullet bg-primary me-3" }),
                          createTextVNode("View and Edit Disputes ")
                        ]),
                        createVNode("div", { class: "d-flex align-items-center py-2 d-none" }, [
                          createVNode("span", { class: "bullet bg-primary me-3" }),
                          createVNode("em", null, "and 3 more...")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card-footer pt-0" }, [
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-light btn-active-primary",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#kt_modal_update_role"
                      }, "Edit Role")
                    ])
                  ]),
                  createVNode("div", {
                    class: "modal fade",
                    id: "kt_modal_update_role",
                    tabindex: "-1",
                    "aria-hidden": "true"
                  }, [
                    createVNode("div", { class: "modal-dialog modal-dialog-centered mw-750px" }, [
                      createVNode("div", { class: "modal-content" }, [
                        createVNode("div", { class: "modal-header" }, [
                          createVNode("h2", { class: "fw-bold" }, "Update Role"),
                          createVNode("div", {
                            class: "btn btn-icon btn-sm btn-active-icon-primary",
                            "data-kt-roles-modal-action": "close"
                          }, [
                            createVNode("span", { class: "svg-icon svg-icon-1" }, [
                              (openBlock(), createBlock("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("rect", {
                                  opacity: "0.5",
                                  x: "6",
                                  y: "17.3137",
                                  width: "16",
                                  height: "2",
                                  rx: "1",
                                  transform: "rotate(-45 6 17.3137)",
                                  fill: "currentColor"
                                }),
                                createVNode("rect", {
                                  x: "7.41422",
                                  y: "6",
                                  width: "16",
                                  height: "2",
                                  rx: "1",
                                  transform: "rotate(45 7.41422 6)",
                                  fill: "currentColor"
                                })
                              ]))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "modal-body scroll-y mx-5 my-7" }, [
                          createVNode("form", {
                            id: "kt_modal_update_role_form",
                            class: "form fv-plugins-bootstrap5 fv-plugins-framework",
                            action: "#"
                          }, [
                            createVNode("div", {
                              class: "d-flex flex-column scroll-y me-n7 pe-7",
                              id: "kt_modal_update_role_scroll",
                              "data-kt-scroll": "true",
                              "data-kt-scroll-activate": "{default: false, lg: true}",
                              "data-kt-scroll-max-height": "auto",
                              "data-kt-scroll-dependencies": "#kt_modal_update_role_header",
                              "data-kt-scroll-wrappers": "#kt_modal_update_role_scroll",
                              "data-kt-scroll-offset": "300px",
                              style: { "max-height": "489px" }
                            }, [
                              createVNode("div", { class: "fv-row mb-10 fv-plugins-icon-container" }, [
                                createVNode("label", { class: "fs-5 fw-bold form-label mb-2" }, [
                                  createVNode("span", { class: "required" }, "Role name")
                                ]),
                                createVNode("input", {
                                  class: "form-control form-control-solid",
                                  placeholder: "Enter a role name",
                                  name: "role_name",
                                  value: "Developer"
                                }),
                                createVNode("div", { class: "fv-plugins-message-container invalid-feedback" })
                              ]),
                              createVNode("div", { class: "fv-row" }, [
                                createVNode("label", { class: "fs-5 fw-bold form-label mb-2" }, "Role Permissions"),
                                createVNode("div", { class: "table-responsive" }, [
                                  createVNode("table", { class: "table align-middle table-row-dashed fs-6 gy-5" }, [
                                    createVNode("tbody", { class: "text-gray-600 fw-semibold" }, [
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, [
                                          createTextVNode("Administrator Access "),
                                          createVNode("i", {
                                            class: "fas fa-exclamation-circle ms-1 fs-7",
                                            "data-bs-toggle": "tooltip",
                                            "aria-label": "Allows a full access to the system",
                                            "data-bs-original-title": "Allows a full access to the system",
                                            "data-kt-initialized": "1"
                                          })
                                        ]),
                                        createVNode("td", null, [
                                          createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-9" }, [
                                            createVNode("input", {
                                              class: "form-check-input",
                                              type: "checkbox",
                                              value: "",
                                              id: "kt_roles_select_all"
                                            }),
                                            createVNode("span", {
                                              class: "form-check-label",
                                              for: "kt_roles_select_all"
                                            }, "Select all")
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "User Management"),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "user_management_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "user_management_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "user_management_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Content Management "),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "content_management_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "content_management_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "content_management_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Financial Management "),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "financial_management_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "financial_management_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "financial_management_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Reporting"),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "reporting_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "reporting_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "reporting_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Payroll"),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "payroll_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "payroll_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "payroll_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Disputes Management "),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "disputes_management_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "disputes_management_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "disputes_management_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "API Controls"),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "api_controls_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "api_controls_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "api_controls_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Database Management "),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "database_management_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "database_management_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "database_management_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createVNode("tr", null, [
                                        createVNode("td", { class: "text-gray-800" }, "Repository Management "),
                                        createVNode("td", null, [
                                          createVNode("div", { class: "d-flex" }, [
                                            createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "repository_management_read"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Read")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-5 me-lg-20" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "repository_management_write"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Write")
                                            ]),
                                            createVNode("label", { class: "form-check form-check-custom form-check-solid" }, [
                                              createVNode("input", {
                                                class: "form-check-input",
                                                type: "checkbox",
                                                value: "",
                                                name: "repository_management_create"
                                              }),
                                              createVNode("span", { class: "form-check-label" }, "Create")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "text-center pt-15 gap-5" }, [
                              createVNode("button", {
                                type: "reset",
                                class: "btn btn-light me-3",
                                "data-kt-roles-modal-action": "cancel"
                              }, "Discard"),
                              createVNode("button", {
                                type: "submit",
                                class: "btn btn-primary",
                                "data-kt-roles-modal-action": "submit"
                              }, [
                                createVNode("span", { class: "indicator-label" }, "Submit"),
                                createVNode("span", { class: "indicator-progress" }, [
                                  createTextVNode("Please wait... "),
                                  createVNode("span", { class: "spinner-border spinner-border-sm align-middle ms-2" })
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex-lg-row-fluid ms-lg-10" }, [
                  createVNode("div", { class: "card card-flush mb-6 mb-xl-9" }, [
                    createVNode("div", { class: "card-header pt-5" }, [
                      createVNode("div", { class: "card-title" }, [
                        createVNode("h2", { class: "d-flex align-items-center" }, [
                          createTextVNode("Users Assigned "),
                          createVNode("span", { class: "text-gray-600 fs-6 ms-1" }, "(14)")
                        ])
                      ]),
                      createVNode("div", { class: "card-toolbar" }, [
                        createVNode("div", {
                          class: "d-flex align-items-center position-relative my-1",
                          "data-kt-view-roles-table-toolbar": "base"
                        }, [
                          createVNode("span", { class: "svg-icon svg-icon-1 position-absolute ms-6" }, [
                            (openBlock(), createBlock("svg", {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("rect", {
                                opacity: "0.5",
                                x: "17.0365",
                                y: "15.1223",
                                width: "8.15546",
                                height: "2",
                                rx: "1",
                                transform: "rotate(45 17.0365 15.1223)",
                                fill: "currentColor"
                              }),
                              createVNode("path", {
                                d: "M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z",
                                fill: "currentColor"
                              })
                            ]))
                          ]),
                          createVNode("input", {
                            type: "text",
                            "data-kt-roles-table-filter": "search",
                            class: "form-control form-control-solid w-250px ps-15",
                            placeholder: "Search Users"
                          })
                        ]),
                        createVNode("div", {
                          class: "d-flex justify-content-end align-items-center d-none",
                          "data-kt-view-roles-table-toolbar": "selected"
                        }, [
                          createVNode("div", { class: "fw-bold me-5" }, [
                            createVNode("span", {
                              class: "me-2",
                              "data-kt-view-roles-table-select": "selected_count"
                            }),
                            createTextVNode("Selected ")
                          ]),
                          createVNode("button", {
                            type: "button",
                            class: "btn btn-danger",
                            "data-kt-view-roles-table-select": "delete_selected"
                          }, "Delete Selected")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card-body pt-0" }, [
                      createVNode("div", {
                        id: "kt_roles_view_table_wrapper",
                        class: "dataTables_wrapper dt-bootstrap4 no-footer"
                      }, [
                        createVNode("div", { class: "table-responsive" }, [
                          createVNode("table", {
                            class: "table align-middle table-row-dashed fs-6 gy-5 mb-0 dataTable no-footer",
                            id: "kt_roles_view_table"
                          }, [
                            createVNode("thead", null, [
                              createVNode("tr", { class: "text-start text-muted fw-bold fs-7 text-uppercase gs-0" }, [
                                createVNode("th", {
                                  class: "w-10px pe-2 sorting_disabled",
                                  rowspan: "1",
                                  colspan: "1",
                                  "aria-label": "\n																	\n																		\n																	\n																",
                                  style: { "width": "29.8906px" }
                                }, [
                                  createVNode("div", { class: "form-check form-check-sm form-check-custom form-check-solid me-3" }, [
                                    createVNode("input", {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      "data-kt-check": "true",
                                      "data-kt-check-target": "#kt_roles_view_table .form-check-input",
                                      value: "1"
                                    })
                                  ])
                                ]),
                                createVNode("th", {
                                  class: "min-w-50px sorting",
                                  tabindex: "0",
                                  "aria-controls": "kt_roles_view_table",
                                  rowspan: "1",
                                  colspan: "1",
                                  "aria-label": "ID: activate to sort column ascending",
                                  style: { "width": "89.7031px" }
                                }, "ID"),
                                createVNode("th", {
                                  class: "min-w-150px sorting",
                                  tabindex: "0",
                                  "aria-controls": "kt_roles_view_table",
                                  rowspan: "1",
                                  colspan: "1",
                                  "aria-label": "User: activate to sort column ascending",
                                  style: { "width": "313.5px" }
                                }, "User"),
                                createVNode("th", {
                                  class: "min-w-125px sorting",
                                  tabindex: "0",
                                  "aria-controls": "kt_roles_view_table",
                                  rowspan: "1",
                                  colspan: "1",
                                  "aria-label": "Joined Date: activate to sort column ascending",
                                  style: { "width": "240.281px" }
                                }, "Joined Date"),
                                createVNode("th", {
                                  class: "text-end min-w-100px sorting_disabled",
                                  rowspan: "1",
                                  colspan: "1",
                                  "aria-label": "Actions",
                                  style: { "width": "148.125px" }
                                }, " Actions")
                              ])
                            ]),
                            createVNode("tbody", { class: "fw-semibold text-gray-600" }, [
                              createVNode("tr", { class: "odd" }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-check-sm form-check-custom form-check-solid" }, [
                                    createVNode("input", {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      value: "1"
                                    })
                                  ])
                                ]),
                                createVNode("td", null, "ID4728"),
                                createVNode("td", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "symbol symbol-circle symbol-50px overflow-hidden me-3" }, [
                                    createVNode("a", { href: "../users/view.html" }, [
                                      createVNode("div", { class: "symbol-label" }, [
                                        createVNode("img", {
                                          src: "/assets/media/avatars/300-6.jpg",
                                          alt: "Emma Smith",
                                          class: "w-100"
                                        })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("a", {
                                      href: "../users/view.html",
                                      class: "text-gray-800 text-hover-primary mb-1"
                                    }, "Emma Smith"),
                                    createVNode("span", null, "smith@kpmg.com")
                                  ])
                                ]),
                                createVNode("td", { "data-order": "2022-02-21T06:43:00+05:30" }, "21 Feb 2022, 6:43 am "),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "btn btn-sm btn-light btn-active-light-primary",
                                    "data-kt-menu-trigger": "click",
                                    "data-kt-menu-placement": "bottom-end"
                                  }, [
                                    createTextVNode("Actions "),
                                    createVNode("span", { class: "svg-icon svg-icon-5 m-0" }, [
                                      (openBlock(), createBlock("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          d: "M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",
                                          fill: "currentColor"
                                        })
                                      ]))
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                                    "data-kt-menu": "true"
                                  }, [
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "../users/view.html",
                                        class: "menu-link px-3"
                                      }, "View")
                                    ]),
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "menu-link px-3",
                                        "data-kt-roles-table-filter": "delete_row"
                                      }, "Delete")
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", { class: "even" }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-check-sm form-check-custom form-check-solid" }, [
                                    createVNode("input", {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      value: "1"
                                    })
                                  ])
                                ]),
                                createVNode("td", null, "ID7050"),
                                createVNode("td", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "symbol symbol-circle symbol-50px overflow-hidden me-3" }, [
                                    createVNode("a", { href: "../users/view.html" }, [
                                      createVNode("div", { class: "symbol-label fs-3 bg-light-danger text-danger" }, " M")
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("a", {
                                      href: "../users/view.html",
                                      class: "text-gray-800 text-hover-primary mb-1"
                                    }, "Melody Macy"),
                                    createVNode("span", null, "melody@altbox.com")
                                  ])
                                ]),
                                createVNode("td", { "data-order": "2022-08-19T06:43:00+05:30" }, "19 Aug 2022, 6:43 am "),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "btn btn-sm btn-light btn-active-light-primary",
                                    "data-kt-menu-trigger": "click",
                                    "data-kt-menu-placement": "bottom-end"
                                  }, [
                                    createTextVNode("Actions "),
                                    createVNode("span", { class: "svg-icon svg-icon-5 m-0" }, [
                                      (openBlock(), createBlock("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          d: "M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",
                                          fill: "currentColor"
                                        })
                                      ]))
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                                    "data-kt-menu": "true"
                                  }, [
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "../users/view.html",
                                        class: "menu-link px-3"
                                      }, "View")
                                    ]),
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "menu-link px-3",
                                        "data-kt-roles-table-filter": "delete_row"
                                      }, "Delete")
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", { class: "odd" }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-check-sm form-check-custom form-check-solid" }, [
                                    createVNode("input", {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      value: "1"
                                    })
                                  ])
                                ]),
                                createVNode("td", null, "ID6056"),
                                createVNode("td", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "symbol symbol-circle symbol-50px overflow-hidden me-3" }, [
                                    createVNode("a", { href: "../users/view.html" }, [
                                      createVNode("div", { class: "symbol-label" }, [
                                        createVNode("img", {
                                          src: "/assets/media/avatars/300-1.jpg",
                                          alt: "Max Smith",
                                          class: "w-100"
                                        })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("a", {
                                      href: "../users/view.html",
                                      class: "text-gray-800 text-hover-primary mb-1"
                                    }, "Max Smith"),
                                    createVNode("span", null, "max@kt.com")
                                  ])
                                ]),
                                createVNode("td", { "data-order": "2022-06-24T20:43:00+05:30" }, "24 Jun 2022, 8:43 pm "),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "btn btn-sm btn-light btn-active-light-primary",
                                    "data-kt-menu-trigger": "click",
                                    "data-kt-menu-placement": "bottom-end"
                                  }, [
                                    createTextVNode("Actions "),
                                    createVNode("span", { class: "svg-icon svg-icon-5 m-0" }, [
                                      (openBlock(), createBlock("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          d: "M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",
                                          fill: "currentColor"
                                        })
                                      ]))
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                                    "data-kt-menu": "true"
                                  }, [
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "../users/view.html",
                                        class: "menu-link px-3"
                                      }, "View")
                                    ]),
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "menu-link px-3",
                                        "data-kt-roles-table-filter": "delete_row"
                                      }, "Delete")
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", { class: "even" }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-check-sm form-check-custom form-check-solid" }, [
                                    createVNode("input", {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      value: "1"
                                    })
                                  ])
                                ]),
                                createVNode("td", null, "ID8778"),
                                createVNode("td", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "symbol symbol-circle symbol-50px overflow-hidden me-3" }, [
                                    createVNode("a", { href: "../users/view.html" }, [
                                      createVNode("div", { class: "symbol-label" }, [
                                        createVNode("img", {
                                          src: "/assets/media/avatars/300-5.jpg",
                                          alt: "Sean Bean",
                                          class: "w-100"
                                        })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("a", {
                                      href: "../users/view.html",
                                      class: "text-gray-800 text-hover-primary mb-1"
                                    }, "Sean Bean"),
                                    createVNode("span", null, "sean@dellito.com")
                                  ])
                                ]),
                                createVNode("td", { "data-order": "2022-11-10T22:10:00+05:30" }, "10 Nov 2022, 10:10 pm "),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "btn btn-sm btn-light btn-active-light-primary",
                                    "data-kt-menu-trigger": "click",
                                    "data-kt-menu-placement": "bottom-end"
                                  }, [
                                    createTextVNode("Actions "),
                                    createVNode("span", { class: "svg-icon svg-icon-5 m-0" }, [
                                      (openBlock(), createBlock("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          d: "M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",
                                          fill: "currentColor"
                                        })
                                      ]))
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                                    "data-kt-menu": "true"
                                  }, [
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "../users/view.html",
                                        class: "menu-link px-3"
                                      }, "View")
                                    ]),
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "menu-link px-3",
                                        "data-kt-roles-table-filter": "delete_row"
                                      }, "Delete")
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", { class: "odd" }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-check-sm form-check-custom form-check-solid" }, [
                                    createVNode("input", {
                                      class: "form-check-input",
                                      type: "checkbox",
                                      value: "1"
                                    })
                                  ])
                                ]),
                                createVNode("td", null, "ID2101"),
                                createVNode("td", { class: "d-flex align-items-center" }, [
                                  createVNode("div", { class: "symbol symbol-circle symbol-50px overflow-hidden me-3" }, [
                                    createVNode("a", { href: "../users/view.html" }, [
                                      createVNode("div", { class: "symbol-label" }, [
                                        createVNode("img", {
                                          src: "/assets/media/avatars/300-25.jpg",
                                          alt: "Brian Cox",
                                          class: "w-100"
                                        })
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    createVNode("a", {
                                      href: "../users/view.html",
                                      class: "text-gray-800 text-hover-primary mb-1"
                                    }, "Brian Cox"),
                                    createVNode("span", null, "brian@exchange.com")
                                  ])
                                ]),
                                createVNode("td", { "data-order": "2022-09-22T11:30:00+05:30" }, "22 Sep 2022, 11:30 am "),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "btn btn-sm btn-light btn-active-light-primary",
                                    "data-kt-menu-trigger": "click",
                                    "data-kt-menu-placement": "bottom-end"
                                  }, [
                                    createTextVNode("Actions "),
                                    createVNode("span", { class: "svg-icon svg-icon-5 m-0" }, [
                                      (openBlock(), createBlock("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          d: "M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",
                                          fill: "currentColor"
                                        })
                                      ]))
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                                    "data-kt-menu": "true"
                                  }, [
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "../users/view.html",
                                        class: "menu-link px-3"
                                      }, "View")
                                    ]),
                                    createVNode("div", { class: "menu-item px-3" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "menu-link px-3",
                                        "data-kt-roles-table-filter": "delete_row"
                                      }, "Delete")
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start" }),
                          createVNode("div", { class: "col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end" }, [
                            createVNode("div", {
                              class: "dataTables_paginate paging_simple_numbers",
                              id: "kt_roles_view_table_paginate"
                            }, [
                              createVNode("ul", { class: "pagination" }, [
                                createVNode("li", {
                                  class: "paginate_button page-item previous disabled",
                                  id: "kt_roles_view_table_previous"
                                }, [
                                  createVNode("a", {
                                    href: "#",
                                    "aria-controls": "kt_roles_view_table",
                                    "data-dt-idx": "0",
                                    tabindex: "0",
                                    class: "page-link"
                                  }, [
                                    createVNode("i", { class: "previous" })
                                  ])
                                ]),
                                createVNode("li", { class: "paginate_button page-item active" }, [
                                  createVNode("a", {
                                    href: "#",
                                    "aria-controls": "kt_roles_view_table",
                                    "data-dt-idx": "1",
                                    tabindex: "0",
                                    class: "page-link"
                                  }, "1")
                                ]),
                                createVNode("li", { class: "paginate_button page-item" }, [
                                  createVNode("a", {
                                    href: "#",
                                    "aria-controls": "kt_roles_view_table",
                                    "data-dt-idx": "2",
                                    tabindex: "0",
                                    class: "page-link"
                                  }, "2")
                                ]),
                                createVNode("li", { class: "paginate_button page-item" }, [
                                  createVNode("a", {
                                    href: "#",
                                    "aria-controls": "kt_roles_view_table",
                                    "data-dt-idx": "3",
                                    tabindex: "0",
                                    class: "page-link"
                                  }, "3")
                                ]),
                                createVNode("li", {
                                  class: "paginate_button page-item next",
                                  id: "kt_roles_view_table_next"
                                }, [
                                  createVNode("a", {
                                    href: "#",
                                    "aria-controls": "kt_roles_view_table",
                                    "data-dt-idx": "4",
                                    tabindex: "0",
                                    class: "page-link"
                                  }, [
                                    createVNode("i", { class: "next" })
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Roles/RoleView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoleView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RoleView as default
};
