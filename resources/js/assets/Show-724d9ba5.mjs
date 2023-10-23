import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import SupplierList from "./SupplierList-437a6e40.mjs";
import TopCard from "./TopCard-0c53bac0.mjs";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
import "vue-loading-overlay";
/* empty css                 */import "vue3-toastify";
import "vue3-clipboard";
import "./utils-d9e085bf.mjs";
import "sweetalert2";
import "@vueform/multiselect";
import "./InputError-c62476a0.mjs";
import "./ValidationErrors-8afe2acd.mjs";
import "./Input-3696eefa.mjs";
import "./Label-ee7576bd.mjs";
import "./MappingForm-8a23e7a6.mjs";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./Button-2d51159e.mjs";
const _sfc_main = defineComponent({
  props: ["project", "respondents", "countries"],
  data() {
    return {
      title: "Link Overview",
      form: {},
      tbody: [
        "S.No",
        "RESPONDENT ID",
        "PROJECT ID",
        "UERNAME",
        "SUPPLIER NAME",
        "STARTING IP",
        "END IP",
        "DURATION",
        "DATE/TIME",
        "BROWSER",
        "STATUS"
      ]
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    SupplierList,
    TopCard,
    Pagination
  },
  methods: {},
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Head = resolveComponent("Head");
  const _component_TopCard = resolveComponent("TopCard");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: _ctx.title }, _attrs), {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "text-muted text-hover-primary",
          href: "/projects"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Projects`);
            } else {
              return [
                createTextVNode("Projects")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "text-muted text-hover-primary",
          href: `/project/${_ctx.project.data.project_id}`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Project Overview`);
            } else {
              return [
                createTextVNode("Project Overview")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.title)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode(_component_Link, {
              class: "text-muted text-hover-primary",
              href: "/projects"
            }, {
              default: withCtx(() => [
                createTextVNode("Projects")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode(_component_Link, {
              class: "text-muted text-hover-primary",
              href: `/project/${_ctx.project.data.project_id}`
            }, {
              default: withCtx(() => [
                createTextVNode("Project Overview")
              ]),
              _: 1
            }, 8, ["href"])
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TopCard, {
          project: _ctx.project.data,
          countries: _ctx.countries.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-5"${_scopeId}><div class="card"${_scopeId}><div class="card-header align-items-center"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>${ssrInterpolate(_ctx.title)}</h2></div></div><div class="card-body"${_scopeId}>`);
        if (_ctx.respondents.data.length > 0) {
          _push2(`<div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 text-center"${_scopeId}><thead${_scopeId}><tr class="text-gray-400 fw-bold fs-7 w-100 text-uppercase"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.tbody, (th, index) => {
            _push2(`<th class="min-w-120px"${_scopeId}>${ssrInterpolate(th)}</th>`);
          });
          _push2(`<!--]--></tr></thead><tbody class="fw-semibold text-gray-600"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.respondents.data, (respondent, index) => {
            _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(index + 1)}</td><td${_scopeId}>${ssrInterpolate(respondent.id)}</td><td${_scopeId}>${ssrInterpolate(respondent.project_id)}</td><td${_scopeId}>${ssrInterpolate(respondent.user)}</td><td${_scopeId}>${ssrInterpolate(respondent.supplier_name)}</td><td${_scopeId}>${ssrInterpolate(respondent.starting_ip)}</td><td${_scopeId}>${ssrInterpolate(respondent.end_ip)}</td><td${_scopeId}>${ssrInterpolate(respondent.duration)}</td><td${_scopeId}>${ssrInterpolate(respondent.created_at)}</td><td${_scopeId}>${ssrInterpolate(respondent.client_browser)}</td><td${_scopeId}>`);
            if (respondent.status == "terminate") {
              _push2(`<div class="badge badge-danger"${_scopeId}> Terminate </div>`);
            } else if (respondent.status == "complete") {
              _push2(`<div class="badge badge-success"${_scopeId}> Complete </div>`);
            } else if (respondent.status == "quotafull") {
              _push2(`<div class="badge badge-info"${_scopeId}> Quotafull </div>`);
            } else if (respondent.status == "null") {
              _push2(`<div class="badge badge-light"${_scopeId}> Incomplete </div>`);
            } else {
              _push2(`<div class="badge badge-danger"${_scopeId}> Security Terminate </div>`);
            }
            _push2(`</td></tr>`);
          });
          _push2(`<!--]--></tbody></table></div>`);
        } else {
          _push2(`<div class="d-flex justify-content-center align-content-center pt-10 pb-10"${_scopeId}><div class="text-center py-10"${_scopeId}><img src="/assets/images/emptyrespondent.png" style="${ssrRenderStyle({ "height": "200px" })}"${_scopeId}><div class="fw-bold fs-2 text-gray-900 mt-5"${_scopeId}> No Data Found! </div></div></div>`);
        }
        if (_ctx.respondents.data.length > 0) {
          _push2(`<div class="row mt-3"${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between"${_scopeId}><span class="fw-bold text-gray-700"${_scopeId}> Showing ${ssrInterpolate(_ctx.respondents.meta.from)} to ${ssrInterpolate(_ctx.respondents.meta.to)} of ${ssrInterpolate(_ctx.respondents.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.respondents.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode(_component_Head, { title: _ctx.title }, null, 8, ["title"]),
          createVNode(_component_TopCard, {
            project: _ctx.project.data,
            countries: _ctx.countries.data
          }, null, 8, ["project", "countries"]),
          createVNode("div", { class: "mb-5" }, [
            createVNode("div", { class: "card" }, [
              createVNode("div", { class: "card-header align-items-center" }, [
                createVNode("div", { class: "card-title" }, [
                  createVNode("h2", null, toDisplayString(_ctx.title), 1)
                ])
              ]),
              createVNode("div", { class: "card-body" }, [
                _ctx.respondents.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "table-responsive"
                }, [
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
                          createVNode("td", null, toDisplayString(index + 1), 1),
                          createVNode("td", null, toDisplayString(respondent.id), 1),
                          createVNode("td", null, toDisplayString(respondent.project_id), 1),
                          createVNode("td", null, toDisplayString(respondent.user), 1),
                          createVNode("td", null, toDisplayString(respondent.supplier_name), 1),
                          createVNode("td", null, toDisplayString(respondent.starting_ip), 1),
                          createVNode("td", null, toDisplayString(respondent.end_ip), 1),
                          createVNode("td", null, toDisplayString(respondent.duration), 1),
                          createVNode("td", null, toDisplayString(respondent.created_at), 1),
                          createVNode("td", null, toDisplayString(respondent.client_browser), 1),
                          createVNode("td", null, [
                            respondent.status == "terminate" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "badge badge-danger"
                            }, " Terminate ")) : respondent.status == "complete" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "badge badge-success"
                            }, " Complete ")) : respondent.status == "quotafull" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "badge badge-info"
                            }, " Quotafull ")) : respondent.status == "null" ? (openBlock(), createBlock("div", {
                              key: 3,
                              class: "badge badge-light"
                            }, " Incomplete ")) : (openBlock(), createBlock("div", {
                              key: 4,
                              class: "badge badge-danger"
                            }, " Security Terminate "))
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "d-flex justify-content-center align-content-center pt-10 pb-10"
                }, [
                  createVNode("div", { class: "text-center py-10" }, [
                    createVNode("img", {
                      src: "/assets/images/emptyrespondent.png",
                      style: { "height": "200px" }
                    }),
                    createVNode("div", { class: "fw-bold fs-2 text-gray-900 mt-5" }, " No Data Found! ")
                  ])
                ])),
                _ctx.respondents.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "row mt-3"
                }, [
                  createVNode("div", { class: "col-sm-12 d-flex align-items-center justify-content-between" }, [
                    createVNode("span", { class: "fw-bold text-gray-700" }, " Showing " + toDisplayString(_ctx.respondents.meta.from) + " to " + toDisplayString(_ctx.respondents.meta.to) + " of " + toDisplayString(_ctx.respondents.meta.total) + " entries ", 1),
                    createVNode(_component_Pagination, {
                      links: _ctx.respondents.meta.links
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
