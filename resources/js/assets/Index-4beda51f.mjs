import { defineComponent, resolveComponent, withCtx, createVNode, withModifiers, openBlock, createBlock, withDirectives, vModelText, createTextVNode, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { Inertia } from "@inertiajs/inertia";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
const _sfc_main = defineComponent({
  props: ["surveys", "users"],
  data() {
    return {
      title: "Surveys",
      first_name: "",
      label: "",
      form: {},
      tbody: [
        "S.No",
        "RESPONDENT ID",
        "PID",
        "USERNAME",
        "STARTING IP",
        "END IP",
        "DURATION",
        "DATE/TIME",
        "BROWSER",
        "STATUS"
      ],
      checkbox: [],
      status: [
        { value: "complete", label: "Completed" },
        { value: "terminate", label: "Terminated" },
        { value: "quotafull", label: "Quotafull" }
      ]
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Pagination,
    Multiselect
  },
  methods: {
    search() {
      Inertia.get(
        "/master",
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
  },
  created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.form.user = urlParams.get("user");
    this.form.status = urlParams.get("status");
    this.form.q = urlParams.get("q");
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}><span class="text-muted text-hover-primary"${_scopeId}>Surveys </span></li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "text-muted text-hover-primary" }, "Surveys ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card"${_scopeId}><form class="card-header align-items-center gap-3 p-3"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.form.q)} class="form-control form-control-solid w-250px ps-14" placeholder="Search "${_scopeId}></div><div class="w-100 mw-150px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.users.data,
          "can-clear": false,
          label: "full_name",
          valueProp: "id",
          searchable: true,
          "track-by": "full_name",
          class: "btn btn-sm btn-light py-2 px-0",
          placeholder: "Select User",
          modelValue: _ctx.form.user,
          "onUpdate:modelValue": ($event) => _ctx.form.user = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-100 mw-150px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.status,
          label: "label",
          "can-clear": false,
          valueProp: "value",
          searchable: true,
          "track-by": _ctx.label,
          class: "btn btn-sm btn-light py-2 px-0",
          placeholder: "Select ",
          modelValue: _ctx.form.status,
          "onUpdate:modelValue": ($event) => _ctx.form.status = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button><a target="_blank"${ssrRenderAttr("href", _ctx.route("master.report", { ..._ctx.$queryParams() }))} class="btn btn-primary m-1"${_scopeId}><i class="bi bi-graph-down-arrow"${_scopeId}></i>Export Report</a><div class="card-toolbar flex-row-fluid justify-content-end gap-5"${_scopeId}></div></form><div class="card-body pt-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 text-center"${_scopeId}><thead${_scopeId}><tr class="text-gray-400 fw-bold fs-7 w-100 text-uppercase"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.tbody, (th, index) => {
          _push2(`<th class="min-w-120px"${_scopeId}>${ssrInterpolate(th)}</th>`);
        });
        _push2(`<!--]--></tr></thead><tbody class="fw-semibold text-gray-600"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.surveys.data, (survey, index) => {
          _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(index + 1)}</td><td${_scopeId}>${ssrInterpolate(survey.id)}</td><td${_scopeId}>${ssrInterpolate(survey.project_id)}</td><td${_scopeId}>${ssrInterpolate(survey.user)}</td><td${_scopeId}>${ssrInterpolate(survey.starting_ip)}</td><td${_scopeId}>${ssrInterpolate(survey.end_ip)}</td><td${_scopeId}>${ssrInterpolate(survey.duration)}</td><td${_scopeId}>${ssrInterpolate(survey.created_at)}</td><td${_scopeId}>${ssrInterpolate(survey.client_browser)}</td><td${_scopeId}>`);
          if (survey.status == "terminate") {
            _push2(`<div class="badge badge-danger"${_scopeId}>Terminate</div>`);
          } else if (survey.status == "complete") {
            _push2(`<div class="badge badge-success"${_scopeId}>Complete</div>`);
          } else if (survey.status == "quotafull") {
            _push2(`<div class="badge badge-info"${_scopeId}>Quotafull</div>`);
          } else if (survey.status == "security-terminate") {
            _push2(`<div class="badge badge-danger"${_scopeId}>Security Terminate</div>`);
          } else {
            _push2(`<div class="badge badge-light"${_scopeId}>Incomplete</div>`);
          }
          _push2(`</td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
        if (_ctx.surveys.meta) {
          _push2(`<div class="row"${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between"${_scopeId}><span class="fw-bold text-gray-700"${_scopeId}> Showing ${ssrInterpolate(_ctx.surveys.meta.from)} to ${ssrInterpolate(_ctx.surveys.meta.to)} of ${ssrInterpolate(_ctx.surveys.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.surveys.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "card" }, [
            createVNode("form", {
              class: "card-header align-items-center gap-3 p-3",
              onSubmit: withModifiers(($event) => _ctx.search(), ["prevent"])
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
              createVNode("div", { class: "w-100 mw-150px" }, [
                createVNode(_component_Multiselect, {
                  options: _ctx.users.data,
                  "can-clear": false,
                  label: "full_name",
                  valueProp: "id",
                  searchable: true,
                  "track-by": "full_name",
                  class: "btn btn-sm btn-light py-2 px-0",
                  placeholder: "Select User",
                  modelValue: _ctx.form.user,
                  "onUpdate:modelValue": ($event) => _ctx.form.user = $event
                }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "w-100 mw-150px" }, [
                createVNode(_component_Multiselect, {
                  options: _ctx.status,
                  label: "label",
                  "can-clear": false,
                  valueProp: "value",
                  searchable: true,
                  "track-by": _ctx.label,
                  class: "btn btn-sm btn-light py-2 px-0",
                  placeholder: "Select ",
                  modelValue: _ctx.form.status,
                  "onUpdate:modelValue": ($event) => _ctx.form.status = $event
                }, null, 8, ["options", "track-by", "modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("button", {
                type: "submit",
                class: "btn btn-primary"
              }, " Search "),
              createVNode("a", {
                target: "_blank",
                href: _ctx.route("master.report", { ..._ctx.$queryParams() }),
                class: "btn btn-primary m-1"
              }, [
                createVNode("i", { class: "bi bi-graph-down-arrow" }),
                createTextVNode("Export Report")
              ], 8, ["href"]),
              createVNode("div", { class: "card-toolbar flex-row-fluid justify-content-end gap-5" })
            ], 40, ["onSubmit"]),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.surveys.data, (survey, index) => {
                      return openBlock(), createBlock("tr", { key: index }, [
                        createVNode("td", null, toDisplayString(index + 1), 1),
                        createVNode("td", null, toDisplayString(survey.id), 1),
                        createVNode("td", null, toDisplayString(survey.project_id), 1),
                        createVNode("td", null, toDisplayString(survey.user), 1),
                        createVNode("td", null, toDisplayString(survey.starting_ip), 1),
                        createVNode("td", null, toDisplayString(survey.end_ip), 1),
                        createVNode("td", null, toDisplayString(survey.duration), 1),
                        createVNode("td", null, toDisplayString(survey.created_at), 1),
                        createVNode("td", null, toDisplayString(survey.client_browser), 1),
                        createVNode("td", null, [
                          survey.status == "terminate" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "badge badge-danger"
                          }, "Terminate")) : survey.status == "complete" ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "badge badge-success"
                          }, "Complete")) : survey.status == "quotafull" ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "badge badge-info"
                          }, "Quotafull")) : survey.status == "security-terminate" ? (openBlock(), createBlock("div", {
                            key: 3,
                            class: "badge badge-danger"
                          }, "Security Terminate")) : (openBlock(), createBlock("div", {
                            key: 4,
                            class: "badge badge-light"
                          }, "Incomplete"))
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              _ctx.surveys.meta ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode("div", { class: "col-sm-12 d-flex align-items-center justify-content-between" }, [
                  createVNode("span", { class: "fw-bold text-gray-700" }, " Showing " + toDisplayString(_ctx.surveys.meta.from) + " to " + toDisplayString(_ctx.surveys.meta.to) + " of " + toDisplayString(_ctx.surveys.meta.total) + " entries ", 1),
                  createVNode(_component_Pagination, {
                    links: _ctx.surveys.meta.links
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Master/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
