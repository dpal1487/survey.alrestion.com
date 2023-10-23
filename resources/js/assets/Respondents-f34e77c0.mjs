import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, withDirectives, vModelText, Fragment, renderList, vModelSelect, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import Header from "./Header-def1044b.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { Inertia } from "@inertiajs/inertia";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
const Respondents_vue_vue_type_style_index_0_scoped_df25c941_lang = "";
const _sfc_main = defineComponent({
  props: ["supplier", "respondents"],
  data() {
    return {
      form: {},
      title: "Supplier Respondents",
      tbody: [
        "Project Name",
        "RESPONDENT ID",
        "USERNAME",
        "STARTING IP",
        "END IP",
        "DURATION",
        "DATE/TIME",
        "BROWSER",
        "Device",
        "STATUS"
      ],
      status: [
        { value: "complete", label: "Completed" },
        { value: "terminate", label: "Terminated" },
        { value: "quotafull", label: "Quotafull" }
      ]
    };
  },
  components: {
    AppLayout,
    Header,
    Link,
    Head,
    Multiselect,
    Pagination
  },
  methods: {
    search() {
      var _a, _b;
      Inertia.get(
        `/supplier/${(_b = (_a = this.supplier) == null ? void 0 : _a.data) == null ? void 0 : _b.id}/respondents`,
        this.form
      );
    },
    $queryParams(...args) {
      let queryString = this.$page.url;
      if (queryString.indexOf("?") === -1) {
        return {};
      }
      queryString = queryString.substring(queryString.indexOf("?") + 1);
      return Object.assign(Object.fromEntries(new URLSearchParams(queryString)), ...args);
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item" data-v-df25c941${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px" data-v-df25c941${_scopeId}></span></li><li class="breadcrumb-item" data-v-df25c941${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/suppliers",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Suppliers`);
            } else {
              return [
                createTextVNode("Suppliers")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item" data-v-df25c941${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px" data-v-df25c941${_scopeId}></span></li><li class="breadcrumb-item text-muted" data-v-df25c941${_scopeId}>${ssrInterpolate(_ctx.title)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/suppliers",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Suppliers")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          supplier: (_a = _ctx.supplier) == null ? void 0 : _a.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card" data-v-df25c941${_scopeId}><form class="card-header align-items-center" data-v-df25c941${_scopeId}><div class="card-title" data-v-df25c941${_scopeId}><h2 data-v-df25c941${_scopeId}>${ssrInterpolate(_ctx.title)}</h2></div><div class="card-toolbar flex-row-fluid justify-content-end gap-5" data-v-df25c941${_scopeId}><div class="d-flex align-items-center position-relative" data-v-df25c941${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4" data-v-df25c941${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-df25c941${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" data-v-df25c941${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" data-v-df25c941${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.form.q)} class="form-control form-control-sm w-200px ps-14" placeholder="Search " data-v-df25c941${_scopeId}></div><div class="w-200px" data-v-df25c941${_scopeId}><select class="form-control form-control-sm form-control-solid" data-v-df25c941${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.status, (status) => {
          _push2(`<option${ssrRenderAttr("value", status.value)} data-v-df25c941${_scopeId}>${ssrInterpolate(status.label)}</option>`);
        });
        _push2(`<!--]--></select></div><button type="submit" class="btn btn-primary btn-sm" data-v-df25c941${_scopeId}> Search </button><a target="_blank"${ssrRenderAttr("href", _ctx.route("supplier.export", (_c = (_b = _ctx.supplier) == null ? void 0 : _b.data) == null ? void 0 : _c.id, { ..._ctx.$queryParams() }))} class="btn btn-primary btn-sm" data-v-df25c941${_scopeId}><i class="bi bi-graph-down-arrow" data-v-df25c941${_scopeId}></i>Export </a></div></form></div><div class="card" data-v-df25c941${_scopeId}><div class="card-body pt-0" data-v-df25c941${_scopeId}><div class="table-responsive" data-v-df25c941${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 text-center" data-v-df25c941${_scopeId}><thead data-v-df25c941${_scopeId}><tr class="text-gray-400 fw-bold fs-7 w-100 text-uppercase" data-v-df25c941${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.tbody, (th, index) => {
          _push2(`<th class="min-w-120px" data-v-df25c941${_scopeId}>${ssrInterpolate(th)}</th>`);
        });
        _push2(`<!--]--></tr></thead><tbody class="fw-semibold text-gray-600" data-v-df25c941${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.respondents.data, (respondent, index) => {
          _push2(`<tr data-v-df25c941${_scopeId}><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent == null ? void 0 : respondent.project_name)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.id)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.user)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.starting_ip)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.end_ip)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.duration)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.created_at)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent.client_browser)}</td><td data-v-df25c941${_scopeId}>${ssrInterpolate(respondent == null ? void 0 : respondent.device)}</td><td data-v-df25c941${_scopeId}>`);
          if (respondent.status == "terminate") {
            _push2(`<div class="badge badge-danger" data-v-df25c941${_scopeId}>Terminate </div>`);
          } else if (respondent.status == "complete") {
            _push2(`<div class="badge badge-success" data-v-df25c941${_scopeId}>Complete </div>`);
          } else if (respondent.status == "quotafull") {
            _push2(`<div class="badge badge-info" data-v-df25c941${_scopeId}>Quotafull </div>`);
          } else if (respondent.status == "security-terminate") {
            _push2(`<div class="badge badge-danger" data-v-df25c941${_scopeId}> Security Terminate</div>`);
          } else {
            _push2(`<div class="badge badge-light" data-v-df25c941${_scopeId}>Incomplete</div>`);
          }
          _push2(`</td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
        if (_ctx.respondents.meta) {
          _push2(`<div class="row mx-5 mb-5" data-v-df25c941${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between mb-5" data-v-df25c941${_scopeId}><span class="fw-bold text-gray-700" data-v-df25c941${_scopeId}> Showing ${ssrInterpolate(_ctx.respondents.meta.from)} to ${ssrInterpolate(_ctx.respondents.meta.to)} of ${ssrInterpolate(_ctx.respondents.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.respondents.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            supplier: (_d = _ctx.supplier) == null ? void 0 : _d.data
          }, null, 8, ["supplier"]),
          createVNode("div", { class: "card" }, [
            createVNode("form", {
              class: "card-header align-items-center",
              onSubmit: withModifiers(($event) => _ctx.search(), ["prevent"])
            }, [
              createVNode("div", { class: "card-title" }, [
                createVNode("h2", null, toDisplayString(_ctx.title), 1)
              ]),
              createVNode("div", { class: "card-toolbar flex-row-fluid justify-content-end gap-5" }, [
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
                    class: "form-control form-control-sm w-200px ps-14",
                    placeholder: "Search "
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, _ctx.form.q]
                  ])
                ]),
                createVNode("div", { class: "w-200px" }, [
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
                    class: "form-control form-control-sm form-control-solid"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.status, (status) => {
                      return openBlock(), createBlock("option", {
                        value: status.value
                      }, toDisplayString(status.label), 9, ["value"]);
                    }), 256))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, _ctx.form.status]
                  ])
                ]),
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-primary btn-sm"
                }, " Search "),
                createVNode("a", {
                  target: "_blank",
                  href: _ctx.route("supplier.export", (_f = (_e = _ctx.supplier) == null ? void 0 : _e.data) == null ? void 0 : _f.id, { ..._ctx.$queryParams() }),
                  class: "btn btn-primary btn-sm"
                }, [
                  createVNode("i", { class: "bi bi-graph-down-arrow" }),
                  createTextVNode("Export ")
                ], 8, ["href"])
              ])
            ], 40, ["onSubmit"])
          ]),
          createVNode("div", { class: "card" }, [
            createVNode("div", { class: "card-body pt-0" }, [
              createVNode("div", { class: "table-responsive" }, [
                createVNode("table", { class: "table align-middle table-row-dashed fs-6 gy-5 text-center" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "text-gray-400 fw-bold fs-7 w-100 text-uppercase" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tbody, (th, index) => {
                        return openBlock(), createBlock("th", {
                          class: "min-w-120px",
                          key: index
                        }, toDisplayString(th), 1);
                      }), 128))
                    ])
                  ]),
                  createVNode("tbody", { class: "fw-semibold text-gray-600" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.respondents.data, (respondent, index) => {
                      return openBlock(), createBlock("tr", { key: index }, [
                        createVNode("td", null, toDisplayString(respondent == null ? void 0 : respondent.project_name), 1),
                        createVNode("td", null, toDisplayString(respondent.id), 1),
                        createVNode("td", null, toDisplayString(respondent.user), 1),
                        createVNode("td", null, toDisplayString(respondent.starting_ip), 1),
                        createVNode("td", null, toDisplayString(respondent.end_ip), 1),
                        createVNode("td", null, toDisplayString(respondent.duration), 1),
                        createVNode("td", null, toDisplayString(respondent.created_at), 1),
                        createVNode("td", null, toDisplayString(respondent.client_browser), 1),
                        createVNode("td", null, toDisplayString(respondent == null ? void 0 : respondent.device), 1),
                        createVNode("td", null, [
                          respondent.status == "terminate" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "badge badge-danger"
                          }, "Terminate ")) : respondent.status == "complete" ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "badge badge-success"
                          }, "Complete ")) : respondent.status == "quotafull" ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "badge badge-info"
                          }, "Quotafull ")) : respondent.status == "security-terminate" ? (openBlock(), createBlock("div", {
                            key: 3,
                            class: "badge badge-danger"
                          }, " Security Terminate")) : (openBlock(), createBlock("div", {
                            key: 4,
                            class: "badge badge-light"
                          }, "Incomplete"))
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              _ctx.respondents.meta ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row mx-5 mb-5"
              }, [
                createVNode("div", { class: "col-sm-12 d-flex align-items-center justify-content-between mb-5" }, [
                  createVNode("span", { class: "fw-bold text-gray-700" }, " Showing " + toDisplayString(_ctx.respondents.meta.from) + " to " + toDisplayString(_ctx.respondents.meta.to) + " of " + toDisplayString(_ctx.respondents.meta.total) + " entries ", 1),
                  createVNode(_component_Pagination, {
                    links: _ctx.respondents.meta.links
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Respondents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Respondents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-df25c941"]]);
export {
  Respondents as default
};
