import { defineComponent, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, withModifiers, openBlock, createBlock, withDirectives, vModelText, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { Inertia } from "@inertiajs/inertia";
import "sweetalert2";
import "vue3-toastify";
/* empty css                 */import Loading from "vue-loading-overlay";
import "vue3-clipboard";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
const _sfc_main = defineComponent({
  props: ["suppliers"],
  setup() {
  },
  data() {
    return {
      form: {},
      tbody: [
        "Supplier Name",
        "Website",
        "Email Address",
        "Country",
        "CURL",
        "TURL",
        "QURL",
        "SURL",
        "STATUS",
        "Action"
      ],
      checkbox: [],
      title: "Suppliers"
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
    async confirmDelete(index) {
      this.isLoading = true;
      await utils.deleteIndexDialog(route("supplier.destroy", this.suppliers.data[index].id), this.suppliers.data, index);
      this.isLoading = false;
    },
    search() {
      Inertia.get(
        "/suppliers",
        this.form
      );
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.title)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex align-items-center gap-2 gap-lg-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/supplier/create",
          class: "btn btn-sm fw-bold btn-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<i class="bi bi-plus-circle"${_scopeId2}></i>Add New Supplier`);
            } else {
              return [
                createVNode("i", { class: "bi bi-plus-circle" }),
                createTextVNode("Add New Supplier")
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
              href: "/supplier/create",
              class: "btn btn-sm fw-bold btn-primary"
            }, {
              default: withCtx(() => [
                createVNode("i", { class: "bi bi-plus-circle" }),
                createTextVNode("Add New Supplier")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Head, { title: "Supplier" }, null, _parent2, _scopeId));
        _push2(`<div class="card card-flush"${_scopeId}><form class="card-header justify-content-start py-5 gap-2 gap-md-5"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.q)} class="form-control form-control-solid w-250px ps-14" placeholder="Search Client"${_scopeId}></div><div class="w-100 mw-200px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.$page.props.ziggy.status,
          label: "name",
          valueProp: "value",
          class: "form-control form-control-solid",
          placeholder: "Select Status",
          modelValue: _ctx.s,
          "onUpdate:modelValue": ($event) => _ctx.s = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button></form><div class="card-body pt-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 text-center"${_scopeId}><thead${_scopeId}><tr class="text-gray-400 fw-bold fs-7 text-uppercase"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.tbody, (th, index) => {
          _push2(`<th${_scopeId}>${ssrInterpolate(th)}</th>`);
        });
        _push2(`<!--]--></tr></thead><tbody class="fw-semibold text-gray-600"${_scopeId}><!--[-->`);
        ssrRenderList((_a = _ctx.suppliers) == null ? void 0 : _a.data, (supplier, index) => {
          var _a2;
          _push2(`<tr${_scopeId}><td${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: "/supplier/" + supplier.id,
            class: "text-gray-800 text-hover-primary fs-5 fw-bold mb-1"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(supplier == null ? void 0 : supplier.supplier_name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(supplier == null ? void 0 : supplier.supplier_name), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</td><td${_scopeId}>${ssrInterpolate(supplier == null ? void 0 : supplier.website)}</td><td${_scopeId}>${ssrInterpolate(supplier == null ? void 0 : supplier.email_address)}</td><td${_scopeId}>${ssrInterpolate((_a2 = supplier.country) == null ? void 0 : _a2.display_name)}</td><td${_scopeId}><button class="btn btn-secondary btn-sm link-btn clipboard"${_scopeId}> Copy Link </button></td><td${_scopeId}><button class="btn btn-secondary btn-sm link-btn clipboard"${_scopeId}> Copy Link </button></td><td${_scopeId}><button class="btn btn-secondary btn-sm link-btn clipboard"${_scopeId}> Copy Link </button></td><td${_scopeId}><button class="btn btn-secondary btn-sm link-btn clipboard"${_scopeId}> Copy Link </button></td><td${_scopeId}><span class="${ssrRenderClass(`badge bg-${(supplier == null ? void 0 : supplier.status) == 1 ? "success" : "danger"}`)}"${_scopeId}>${ssrInterpolate((supplier == null ? void 0 : supplier.status) ? "Active" : "Inactive")}</span></td><td${_scopeId}><a href="#" class="btn btn-sm btn-light menu-dropdown"${ssrRenderAttr("id", `dropdown-${supplier.id}`)} data-bs-toggle="dropdown"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><div class="text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"${ssrRenderAttr("aria-labelled:by", `dropdown-${supplier.id}`)}${_scopeId}><div class="menu-item px-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: `/supplier/${supplier.id}/edit`,
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
          _push2(`</div><div class="menu-item px-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: `/supplier/${supplier.id}`,
            class: "menu-link"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="bi bi-view-list me-2"${_scopeId2}></i>View `);
              } else {
                return [
                  createVNode("i", { class: "bi bi-view-list me-2" }),
                  createTextVNode("View ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div><div class="menu-item px-3"${_scopeId}><span class="menu-link"${_scopeId}><i class="bi bi-trash3 me-2"${_scopeId}></i>Delete</span></div></div></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
        if (_ctx.suppliers.meta) {
          _push2(`<div class="row"${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between"${_scopeId}><span class="fw-bold text-gray-700"${_scopeId}> Showing ${ssrInterpolate(_ctx.suppliers.meta.from)} to ${ssrInterpolate(_ctx.suppliers.meta.to)} of ${ssrInterpolate(_ctx.suppliers.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.suppliers.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Head, { title: "Supplier" }),
          createVNode("div", { class: "card card-flush" }, [
            createVNode("form", {
              onSubmit: withModifiers(_ctx.search, ["prevent"]),
              class: "card-header justify-content-start py-5 gap-2 gap-md-5"
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
                  "onUpdate:modelValue": ($event) => _ctx.q = $event,
                  class: "form-control form-control-solid w-250px ps-14",
                  placeholder: "Search Client"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, _ctx.q]
                ])
              ]),
              createVNode("div", { class: "w-100 mw-200px" }, [
                createVNode(_component_Multiselect, {
                  options: _ctx.$page.props.ziggy.status,
                  label: "name",
                  valueProp: "value",
                  class: "form-control form-control-solid",
                  placeholder: "Select Status",
                  modelValue: _ctx.s,
                  "onUpdate:modelValue": ($event) => _ctx.s = $event
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("button", {
                type: "submit",
                class: "btn btn-primary"
              }, " Search ")
            ], 40, ["onSubmit"]),
            createVNode("div", { class: "card-body pt-0" }, [
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
                    (openBlock(true), createBlock(Fragment, null, renderList((_b = _ctx.suppliers) == null ? void 0 : _b.data, (supplier, index) => {
                      var _a2;
                      return openBlock(), createBlock("tr", { key: index }, [
                        createVNode("td", null, [
                          createVNode(_component_Link, {
                            href: "/supplier/" + supplier.id,
                            class: "text-gray-800 text-hover-primary fs-5 fw-bold mb-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(supplier == null ? void 0 : supplier.supplier_name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        createVNode("td", null, toDisplayString(supplier == null ? void 0 : supplier.website), 1),
                        createVNode("td", null, toDisplayString(supplier == null ? void 0 : supplier.email_address), 1),
                        createVNode("td", null, toDisplayString((_a2 = supplier.country) == null ? void 0 : _a2.display_name), 1),
                        createVNode("td", null, [
                          createVNode("button", {
                            class: "btn btn-secondary btn-sm link-btn clipboard",
                            onClick: ($event) => {
                              var _a3;
                              return _ctx.doCopy((_a3 = supplier == null ? void 0 : supplier.supplier_redirect) == null ? void 0 : _a3.complete_url);
                            }
                          }, " Copy Link ", 8, ["onClick"])
                        ]),
                        createVNode("td", null, [
                          createVNode("button", {
                            class: "btn btn-secondary btn-sm link-btn clipboard",
                            onClick: ($event) => {
                              var _a3;
                              return _ctx.doCopy((_a3 = supplier == null ? void 0 : supplier.supplier_redirect) == null ? void 0 : _a3.terminate_url);
                            }
                          }, " Copy Link ", 8, ["onClick"])
                        ]),
                        createVNode("td", null, [
                          createVNode("button", {
                            class: "btn btn-secondary btn-sm link-btn clipboard",
                            onClick: ($event) => {
                              var _a3;
                              return _ctx.doCopy((_a3 = supplier == null ? void 0 : supplier.supplier_redirect) == null ? void 0 : _a3.quotafull_url);
                            }
                          }, " Copy Link ", 8, ["onClick"])
                        ]),
                        createVNode("td", null, [
                          createVNode("button", {
                            class: "btn btn-secondary btn-sm link-btn clipboard",
                            onClick: ($event) => {
                              var _a3;
                              return _ctx.doCopy((_a3 = supplier == null ? void 0 : supplier.supplier_redirect) == null ? void 0 : _a3.security_terminate_url);
                            }
                          }, " Copy Link ", 8, ["onClick"])
                        ]),
                        createVNode("td", null, [
                          createVNode("span", {
                            class: `badge bg-${(supplier == null ? void 0 : supplier.status) == 1 ? "success" : "danger"}`
                          }, toDisplayString((supplier == null ? void 0 : supplier.status) ? "Active" : "Inactive"), 3)
                        ]),
                        createVNode("td", null, [
                          createVNode("a", {
                            href: "#",
                            class: "btn btn-sm btn-light menu-dropdown",
                            id: `dropdown-${supplier.id}`,
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
                            "aria-labelled:by": `dropdown-${supplier.id}`
                          }, [
                            createVNode("div", { class: "menu-item px-3" }, [
                              createVNode(_component_Link, {
                                href: `/supplier/${supplier.id}/edit`,
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
                              createVNode(_component_Link, {
                                href: `/supplier/${supplier.id}`,
                                class: "menu-link"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "bi bi-view-list me-2" }),
                                  createTextVNode("View ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            createVNode("div", { class: "menu-item px-3" }, [
                              createVNode("span", {
                                onClick: ($event) => _ctx.confirmDelete(supplier.id, index),
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
              _ctx.suppliers.meta ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode("div", { class: "col-sm-12 d-flex align-items-center justify-content-between" }, [
                  createVNode("span", { class: "fw-bold text-gray-700" }, " Showing " + toDisplayString(_ctx.suppliers.meta.from) + " to " + toDisplayString(_ctx.suppliers.meta.to) + " of " + toDisplayString(_ctx.suppliers.meta.total) + " entries ", 1),
                  createVNode(_component_Pagination, {
                    links: _ctx.suppliers.meta.links
                  }, null, 8, ["links"])
                ])
              ])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
