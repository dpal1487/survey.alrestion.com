import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, withModifiers, withDirectives, vModelText, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { Inertia } from "@inertiajs/inertia";
import "sweetalert2";
import "vue3-toastify";
/* empty css                 */import Loading from "vue-loading-overlay";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
const _sfc_main = defineComponent({
  props: ["invoices", "clients", "status", "reports"],
  data() {
    return {
      form: {},
      title: "Invoices",
      tbody: [
        "Invoice No",
        "Client",
        "Amount",
        "Type",
        "GTS Amount",
        "Conversion Rate",
        "Date Issued",
        "Due Date",
        "Invoice Status",
        "Action"
      ],
      isLoading: false
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Pagination,
    Multiselect,
    Loading
  },
  methods: {
    search() {
      Inertia.get(
        "/invoices",
        this.form
      );
    }
  },
  created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.form.client = urlParams.get("client");
    this.form.status = urlParams.get("status");
    this.form.q = urlParams.get("q");
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_Head = resolveComponent("Head");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: _ctx.title }, _attrs), {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}><span class="text-muted text-hover-primary"${_scopeId}>${ssrInterpolate(_ctx.title)}</span></li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "text-muted text-hover-primary" }, toDisplayString(_ctx.title), 1)
          ])
        ];
      }
    }),
    toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex align-items-center gap-2 gap-lg-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/invoice/create",
          class: "btn btn-sm fw-bold btn-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<i class="bi bi-plus-circle"${_scopeId2}></i>Add New Invoice`);
            } else {
              return [
                createVNode("i", { class: "bi bi-plus-circle" }),
                createTextVNode("Add New Invoice")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex align-items-center gap-2 gap-lg-3" }, [
            createVNode(_component_Link, {
              href: "/invoice/create",
              class: "btn btn-sm fw-bold btn-primary"
            }, {
              default: withCtx(() => [
                createVNode("i", { class: "bi bi-plus-circle" }),
                createTextVNode("Add New Invoice")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent2, _scopeId));
        _push2(`<div class="row mb-3"${_scopeId}><div class="col-xl-3 col-md-6"${_scopeId}><div class="card card-animate"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex align-items-center"${_scopeId}><div class="flex-grow-1"${_scopeId}><p class="text-uppercase fw-medium text-muted mb-0"${_scopeId}> Invoices Sent </p></div></div><div class="d-flex align-items-end justify-content-between mt-4"${_scopeId}><div${_scopeId}><h4 class="fs-22 fw-semibold ff-secondary mb-4"${_scopeId}> $<span class="counter-value"${_scopeId}>${ssrInterpolate(_ctx.reports.sent_invoices.total_amount)}</span></h4><span class="badge bg-primary me-1"${_scopeId}>${ssrInterpolate(_ctx.reports.sent_invoices.count)}</span><span class="text-muted"${_scopeId}>Invoices sent</span></div><div class="avatar-sm flex-shrink-0"${_scopeId}><span class="avatar-title bg-light rounded fs-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text text-primary"${_scopeId}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"${_scopeId}></path><polyline points="14 2 14 8 20 8"${_scopeId}></polyline><line x1="16" y1="13" x2="8" y2="13"${_scopeId}></line><line x1="16" y1="17" x2="8" y2="17"${_scopeId}></line><polyline points="10 9 9 9 8 9"${_scopeId}></polyline></svg></span></div></div></div></div></div><div class="col-xl-3 col-md-6"${_scopeId}><div class="card card-animate"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex align-items-center"${_scopeId}><div class="flex-grow-1"${_scopeId}><p class="text-uppercase fw-medium text-muted mb-0"${_scopeId}> Paid Invoices </p></div></div><div class="d-flex align-items-end justify-content-between mt-4"${_scopeId}><div${_scopeId}><h4 class="fs-22 fw-semibold ff-secondary mb-4"${_scopeId}> $<span class="counter-value"${_scopeId}>${ssrInterpolate(_ctx.reports.paid_invoices.total_amount)}</span></h4><span class="badge bg-success me-1"${_scopeId}>${ssrInterpolate(_ctx.reports.paid_invoices.count)}</span><span class="text-muted"${_scopeId}>Paid by Invoices</span></div><div class="avatar-sm flex-shrink-0"${_scopeId}><span class="avatar-title bg-light rounded fs-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square text-success"${_scopeId}><polyline points="9 11 12 14 22 4"${_scopeId}></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"${_scopeId}></path></svg></span></div></div></div></div></div><div class="col-xl-3 col-md-6"${_scopeId}><div class="card card-animate"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex align-items-center"${_scopeId}><div class="flex-grow-1"${_scopeId}><p class="text-uppercase fw-medium text-muted mb-0"${_scopeId}> Unpaid Invoices </p></div></div><div class="d-flex align-items-end justify-content-between mt-4"${_scopeId}><div${_scopeId}><h4 class="fs-22 fw-semibold ff-secondary mb-4"${_scopeId}> $<span class="counter-value"${_scopeId}>${ssrInterpolate(_ctx.reports.unpaid_invoices.total_amount)}</span></h4><span class="badge bg-warning me-1"${_scopeId}>${ssrInterpolate(_ctx.reports.unpaid_invoices.count)}</span><span class="text-muted"${_scopeId}>Unpaid by Invoices</span></div><div class="avatar-sm flex-shrink-0"${_scopeId}><span class="avatar-title bg-light rounded fs-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock text-warning"${_scopeId}><circle cx="12" cy="12" r="10"${_scopeId}></circle><polyline points="12 6 12 12 16 14"${_scopeId}></polyline></svg></span></div></div></div></div></div><div class="col-xl-3 col-md-6"${_scopeId}><div class="card card-animate"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex align-items-center"${_scopeId}><div class="flex-grow-1"${_scopeId}><p class="text-uppercase fw-medium text-muted mb-0"${_scopeId}> Cancelled Invoices </p></div></div><div class="d-flex align-items-end justify-content-between mt-4"${_scopeId}><div${_scopeId}><h4 class="fs-22 fw-semibold ff-secondary mb-4"${_scopeId}> $<span class="counter-value" data-target="0"${_scopeId}>${ssrInterpolate(_ctx.reports.cancel_invoices.total_amount)}</span></h4><span class="badge bg-danger me-1"${_scopeId}>${ssrInterpolate(_ctx.reports.cancel_invoices.count)}</span><span class="text-muted"${_scopeId}>Cancelled by Invoices</span></div><div class="avatar-sm flex-shrink-0"${_scopeId}><span class="avatar-title bg-light rounded fs-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-octagon text-danger"${_scopeId}><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"${_scopeId}></polygon><line x1="15" y1="9" x2="9" y2="15"${_scopeId}></line><line x1="9" y1="9" x2="15" y2="15"${_scopeId}></line></svg></span></div></div></div></div></div></div><div class="card"${_scopeId}><form class="card-header justify-content-start py-4 px-4 gap-2 gap-md-5"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.form.q)} class="form-control form-control-solid w-250px ps-14" placeholder="Search "${_scopeId}></div><div class="w-100 mw-200px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          options: _ctx.status,
          label: "label",
          valueProp: "id",
          class: "btn btn-sm btn-light py-2",
          placeholder: "Select Status",
          modelValue: _ctx.form.status,
          "onUpdate:modelValue": ($event) => _ctx.form.status = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-100 mw-200px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          options: _ctx.clients.data,
          label: "display_name",
          valueProp: "id",
          class: "btn btn-sm btn-light py-2",
          placeholder: "Select Client",
          modelValue: _ctx.form.client,
          "onUpdate:modelValue": ($event) => _ctx.form.client = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button></form><div class="card-body p-3"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 text-center"${_scopeId}><thead${_scopeId}><tr class="text-gray-400 fw-bold fs-7 text-uppercase"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.tbody, (th, index) => {
          _push2(`<th${_scopeId}>${ssrInterpolate(th)}</th>`);
        });
        _push2(`<!--]--></tr></thead><tbody class="fw-semibold text-gray-600"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.invoices.data, (invoice, index) => {
          var _a;
          _push2(`<tr${_scopeId}><td${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            class: "text-gray-800 text-hover-primary fs-6 fw-bold",
            href: `/invoice/${invoice.id}`
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(invoice == null ? void 0 : invoice.invoice_number)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(invoice == null ? void 0 : invoice.invoice_number), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</td><td${_scopeId}>${ssrInterpolate((_a = invoice == null ? void 0 : invoice.client) == null ? void 0 : _a.name)}</td><td${_scopeId}>${ssrInterpolate(invoice.currency.symbol)}${ssrInterpolate(invoice == null ? void 0 : invoice.total_amount)}</td><td${_scopeId}><span class="badge badge-primary"${_scopeId}>${ssrInterpolate(invoice.type)}</span></td><td${_scopeId}>INR ${ssrInterpolate(parseFloat(invoice.total_amount / 118 * invoice.tax_rate).toFixed(2))}</td><td${_scopeId}>INR ${ssrInterpolate(invoice == null ? void 0 : invoice.conversion_rate)}</td><td${_scopeId}>${ssrInterpolate(invoice == null ? void 0 : invoice.issue_date)}</td><td${_scopeId}>${ssrInterpolate(invoice == null ? void 0 : invoice.due_date)}</td><td${_scopeId}>`);
          if ((invoice == null ? void 0 : invoice.status) == 1) {
            _push2(`<span class="badge badge-success"${_scopeId}>Paid</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ((invoice == null ? void 0 : invoice.status) == 2) {
            _push2(`<span class="badge badge-warning"${_scopeId}>Unpaid</span>`);
          } else {
            _push2(`<!---->`);
          }
          if ((invoice == null ? void 0 : invoice.status) == 3) {
            _push2(`<span class="badge badge-danger"${_scopeId}>Cancelled</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</td><td${_scopeId}><a href="#" class="btn btn-sm btn-light menu-dropdown"${ssrRenderAttr("id", `dropdown-${invoice.id}`)} data-bs-toggle="dropdown"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"${ssrRenderAttr("aria-labelled:by", `dropdown-${invoice.id}`)}${_scopeId}><div class="menu-item px-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: `/invoice/${invoice.id}/edit`,
            class: "menu-link"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="bi bi-pencil me-2"${_scopeId2}></i>Edit `);
              } else {
                return [
                  createVNode("i", { class: "bi bi-pencil me-2" }),
                  createTextVNode("Edit ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div><div class="menu-item px-3"${_scopeId}><span class="menu-link"${_scopeId}><i class="bi bi-trash3 me-2"${_scopeId}></i>Delete</span></div></div></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
        if (_ctx.invoices.meta) {
          _push2(`<div class="d-flex align-items-center justify-content-center justify-content-md-end"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.invoices.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Head, { title: _ctx.title }, null, 8, ["title"]),
          createVNode("div", { class: "row mb-3" }, [
            createVNode("div", { class: "col-xl-3 col-md-6" }, [
              createVNode("div", { class: "card card-animate" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "d-flex align-items-center" }, [
                    createVNode("div", { class: "flex-grow-1" }, [
                      createVNode("p", { class: "text-uppercase fw-medium text-muted mb-0" }, " Invoices Sent ")
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-items-end justify-content-between mt-4" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "fs-22 fw-semibold ff-secondary mb-4" }, [
                        createTextVNode(" $"),
                        createVNode("span", { class: "counter-value" }, toDisplayString(_ctx.reports.sent_invoices.total_amount), 1)
                      ]),
                      createVNode("span", { class: "badge bg-primary me-1" }, toDisplayString(_ctx.reports.sent_invoices.count), 1),
                      createVNode("span", { class: "text-muted" }, "Invoices sent")
                    ]),
                    createVNode("div", { class: "avatar-sm flex-shrink-0" }, [
                      createVNode("span", { class: "avatar-title bg-light rounded fs-3" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          class: "feather feather-file-text text-primary"
                        }, [
                          createVNode("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                          createVNode("polyline", { points: "14 2 14 8 20 8" }),
                          createVNode("line", {
                            x1: "16",
                            y1: "13",
                            x2: "8",
                            y2: "13"
                          }),
                          createVNode("line", {
                            x1: "16",
                            y1: "17",
                            x2: "8",
                            y2: "17"
                          }),
                          createVNode("polyline", { points: "10 9 9 9 8 9" })
                        ]))
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "col-xl-3 col-md-6" }, [
              createVNode("div", { class: "card card-animate" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "d-flex align-items-center" }, [
                    createVNode("div", { class: "flex-grow-1" }, [
                      createVNode("p", { class: "text-uppercase fw-medium text-muted mb-0" }, " Paid Invoices ")
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-items-end justify-content-between mt-4" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "fs-22 fw-semibold ff-secondary mb-4" }, [
                        createTextVNode(" $"),
                        createVNode("span", { class: "counter-value" }, toDisplayString(_ctx.reports.paid_invoices.total_amount), 1)
                      ]),
                      createVNode("span", { class: "badge bg-success me-1" }, toDisplayString(_ctx.reports.paid_invoices.count), 1),
                      createVNode("span", { class: "text-muted" }, "Paid by Invoices")
                    ]),
                    createVNode("div", { class: "avatar-sm flex-shrink-0" }, [
                      createVNode("span", { class: "avatar-title bg-light rounded fs-3" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          class: "feather feather-check-square text-success"
                        }, [
                          createVNode("polyline", { points: "9 11 12 14 22 4" }),
                          createVNode("path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })
                        ]))
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "col-xl-3 col-md-6" }, [
              createVNode("div", { class: "card card-animate" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "d-flex align-items-center" }, [
                    createVNode("div", { class: "flex-grow-1" }, [
                      createVNode("p", { class: "text-uppercase fw-medium text-muted mb-0" }, " Unpaid Invoices ")
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-items-end justify-content-between mt-4" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "fs-22 fw-semibold ff-secondary mb-4" }, [
                        createTextVNode(" $"),
                        createVNode("span", { class: "counter-value" }, toDisplayString(_ctx.reports.unpaid_invoices.total_amount), 1)
                      ]),
                      createVNode("span", { class: "badge bg-warning me-1" }, toDisplayString(_ctx.reports.unpaid_invoices.count), 1),
                      createVNode("span", { class: "text-muted" }, "Unpaid by Invoices")
                    ]),
                    createVNode("div", { class: "avatar-sm flex-shrink-0" }, [
                      createVNode("span", { class: "avatar-title bg-light rounded fs-3" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          class: "feather feather-clock text-warning"
                        }, [
                          createVNode("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                          }),
                          createVNode("polyline", { points: "12 6 12 12 16 14" })
                        ]))
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "col-xl-3 col-md-6" }, [
              createVNode("div", { class: "card card-animate" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "d-flex align-items-center" }, [
                    createVNode("div", { class: "flex-grow-1" }, [
                      createVNode("p", { class: "text-uppercase fw-medium text-muted mb-0" }, " Cancelled Invoices ")
                    ])
                  ]),
                  createVNode("div", { class: "d-flex align-items-end justify-content-between mt-4" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "fs-22 fw-semibold ff-secondary mb-4" }, [
                        createTextVNode(" $"),
                        createVNode("span", {
                          class: "counter-value",
                          "data-target": "0"
                        }, toDisplayString(_ctx.reports.cancel_invoices.total_amount), 1)
                      ]),
                      createVNode("span", { class: "badge bg-danger me-1" }, toDisplayString(_ctx.reports.cancel_invoices.count), 1),
                      createVNode("span", { class: "text-muted" }, "Cancelled by Invoices")
                    ]),
                    createVNode("div", { class: "avatar-sm flex-shrink-0" }, [
                      createVNode("span", { class: "avatar-title bg-light rounded fs-3" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          class: "feather feather-x-octagon text-danger"
                        }, [
                          createVNode("polygon", { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }),
                          createVNode("line", {
                            x1: "15",
                            y1: "9",
                            x2: "9",
                            y2: "15"
                          }),
                          createVNode("line", {
                            x1: "9",
                            y1: "9",
                            x2: "15",
                            y2: "15"
                          })
                        ]))
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "card" }, [
            createVNode("form", {
              onSubmit: withModifiers(_ctx.search, ["prevent"]),
              class: "card-header justify-content-start py-4 px-4 gap-2 gap-md-5"
            }, [
              createVNode("div", { class: "d-flex align-items-center position-relative" }, [
                createVNode("span", { class: "svg-icon svg-icon-1 position-absolute ms-4" }, [
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
                withDirectives(createVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": ($event) => _ctx.form.q = $event,
                  class: "form-control form-control-solid w-250px ps-14",
                  placeholder: "Search "
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, _ctx.form.q]
                ])
              ]),
              createVNode("div", { class: "w-100 mw-200px" }, [
                createVNode(_component_Multiselect, {
                  "can-clear": false,
                  options: _ctx.status,
                  label: "label",
                  valueProp: "id",
                  class: "btn btn-sm btn-light py-2",
                  placeholder: "Select Status",
                  modelValue: _ctx.form.status,
                  "onUpdate:modelValue": ($event) => _ctx.form.status = $event
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "w-100 mw-200px" }, [
                createVNode(_component_Multiselect, {
                  "can-clear": false,
                  options: _ctx.clients.data,
                  label: "display_name",
                  valueProp: "id",
                  class: "btn btn-sm btn-light py-2",
                  placeholder: "Select Client",
                  modelValue: _ctx.form.client,
                  "onUpdate:modelValue": ($event) => _ctx.form.client = $event
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("button", {
                type: "submit",
                class: "btn btn-primary"
              }, " Search ")
            ], 40, ["onSubmit"]),
            createVNode("div", { class: "card-body p-3" }, [
              createVNode("div", { class: "table-responsive" }, [
                createVNode("table", { class: "table align-middle table-row-dashed fs-6 gy-5 text-center" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "text-gray-400 fw-bold fs-7 text-uppercase" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tbody, (th, index) => {
                        return openBlock(), createBlock("th", { key: index }, toDisplayString(th), 1);
                      }), 128))
                    ])
                  ]),
                  createVNode("tbody", { class: "fw-semibold text-gray-600" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.invoices.data, (invoice, index) => {
                      var _a;
                      return openBlock(), createBlock("tr", { key: index }, [
                        createVNode("td", null, [
                          createVNode(_component_Link, {
                            class: "text-gray-800 text-hover-primary fs-6 fw-bold",
                            href: `/invoice/${invoice.id}`
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(invoice == null ? void 0 : invoice.invoice_number), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        createVNode("td", null, toDisplayString((_a = invoice == null ? void 0 : invoice.client) == null ? void 0 : _a.name), 1),
                        createVNode("td", null, toDisplayString(invoice.currency.symbol) + toDisplayString(invoice == null ? void 0 : invoice.total_amount), 1),
                        createVNode("td", null, [
                          createVNode("span", { class: "badge badge-primary" }, toDisplayString(invoice.type), 1)
                        ]),
                        createVNode("td", null, "INR " + toDisplayString(parseFloat(invoice.total_amount / 118 * invoice.tax_rate).toFixed(2)), 1),
                        createVNode("td", null, "INR " + toDisplayString(invoice == null ? void 0 : invoice.conversion_rate), 1),
                        createVNode("td", null, toDisplayString(invoice == null ? void 0 : invoice.issue_date), 1),
                        createVNode("td", null, toDisplayString(invoice == null ? void 0 : invoice.due_date), 1),
                        createVNode("td", null, [
                          (invoice == null ? void 0 : invoice.status) == 1 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "badge badge-success"
                          }, "Paid")) : createCommentVNode("", true),
                          (invoice == null ? void 0 : invoice.status) == 2 ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "badge badge-warning"
                          }, "Unpaid")) : createCommentVNode("", true),
                          (invoice == null ? void 0 : invoice.status) == 3 ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: "badge badge-danger"
                          }, "Cancelled")) : createCommentVNode("", true)
                        ]),
                        createVNode("td", null, [
                          createVNode("a", {
                            href: "#",
                            class: "btn btn-sm btn-light menu-dropdown",
                            id: `dropdown-${invoice.id}`,
                            "data-bs-toggle": "dropdown"
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
                          ], 8, ["id"]),
                          createVNode("div", {
                            class: "text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                            "aria-labelled:by": `dropdown-${invoice.id}`
                          }, [
                            createVNode("div", { class: "menu-item px-3" }, [
                              createVNode(_component_Link, {
                                href: `/invoice/${invoice.id}/edit`,
                                class: "menu-link"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "bi bi-pencil me-2" }),
                                  createTextVNode("Edit ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            createVNode("div", { class: "menu-item px-3" }, [
                              createVNode("span", {
                                onClick: ($event) => _ctx.confirmDelete(index),
                                class: "menu-link"
                              }, [
                                createVNode("i", { class: "bi bi-trash3 me-2" }),
                                createTextVNode("Delete")
                              ], 8, ["onClick"])
                            ])
                          ], 8, ["aria-labelled:by"])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              _ctx.invoices.meta ? (openBlock(), createBlock("div", {
                key: 0,
                class: "d-flex align-items-center justify-content-center justify-content-md-end"
              }, [
                createVNode(_component_Pagination, {
                  links: _ctx.invoices.meta.links
                }, null, 8, ["links"])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Invoice/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
