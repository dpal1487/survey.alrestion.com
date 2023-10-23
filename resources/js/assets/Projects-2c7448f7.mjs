import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, withDirectives, vModelText, createCommentVNode, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Header from "./Header-0e5b2cdf.mjs";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import ProjectList from "./ProjectList-b586bf6f.mjs";
import { Inertia } from "@inertiajs/inertia";
import Loading from "vue-loading-overlay";
/* empty css                 */import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@vueform/multiselect";
import "./utils-d9e085bf.mjs";
import "sweetalert2";
import "vue3-toastify";
const _sfc_main = defineComponent({
  props: ["projects", "client", "status", "addresses"],
  data() {
    return {
      title: "Client Projects",
      form: {},
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    Link,
    Head,
    Header,
    AppLayout,
    Pagination,
    ProjectList,
    Loading
  },
  methods: {
    search() {
      this.isLoading = true;
      Inertia.get(
        `/client/${this.client.data.id}/projects`,
        this.form,
        {
          onFinish(response) {
            this.isLoading = false;
          }
        }
      );
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading = resolveComponent("loading");
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_ProjectList = resolveComponent("ProjectList");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_loading, {
    active: _ctx.isLoading,
    "onUpdate:active": ($event) => _ctx.isLoading = $event,
    "can-cancel": false,
    "is-full-page": _ctx.fullPage
  }, null, _parent));
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/clients",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Clients`);
            } else {
              return [
                createTextVNode("Clients")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.client.data.name)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/clients",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Clients")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.client.data.name), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          client: (_a = _ctx.client) == null ? void 0 : _a.data,
          address: _ctx.addresses.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card"${_scopeId}><div class="card-header align-items-center"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Projects</h2></div><div class="card-toolbar flex-row-fluid justify-content-end gap-5"${_scopeId}><form class="card-toolbar flex-row-fluid justify-content-end gap-3"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.form.q)} class="form-control form-control-solid w-200px ps-14" placeholder="Search"${_scopeId}></div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button><a target="_blank"${ssrRenderAttr("href", _ctx.route("client.project.report", { id: (_c = (_b = _ctx.client) == null ? void 0 : _b.data) == null ? void 0 : _c.id }))} class="btn btn-primary m-1"${_scopeId}><i class="bi bi-graph-down-arrow"${_scopeId}></i>Export Report</a></form></div></div></div>`);
        _push2(ssrRenderComponent(_component_ProjectList, {
          projects: _ctx.projects.data,
          status: _ctx.status.data,
          action: "client.project"
        }, null, _parent2, _scopeId));
        if (_ctx.projects.meta) {
          _push2(`<div class="row mt-5"${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between"${_scopeId}><span class="fw-bold text-gray-700"${_scopeId}> Showing ${ssrInterpolate(_ctx.projects.meta.from)} to ${ssrInterpolate(_ctx.projects.meta.to)} of ${ssrInterpolate(_ctx.projects.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.projects.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_Header, {
            client: (_d = _ctx.client) == null ? void 0 : _d.data,
            address: _ctx.addresses.data
          }, null, 8, ["client", "address"]),
          createVNode("div", { class: "card" }, [
            createVNode("div", { class: "card-header align-items-center" }, [
              createVNode("div", { class: "card-title" }, [
                createVNode("h2", null, "Projects")
              ]),
              createVNode("div", { class: "card-toolbar flex-row-fluid justify-content-end gap-5" }, [
                createVNode("form", {
                  class: "card-toolbar flex-row-fluid justify-content-end gap-3",
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
                      class: "form-control form-control-solid w-200px ps-14",
                      placeholder: "Search"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, _ctx.form.q]
                    ])
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: "btn btn-primary"
                  }, " Search "),
                  createVNode("a", {
                    target: "_blank",
                    href: _ctx.route("client.project.report", { id: (_f = (_e = _ctx.client) == null ? void 0 : _e.data) == null ? void 0 : _f.id }),
                    class: "btn btn-primary m-1"
                  }, [
                    createVNode("i", { class: "bi bi-graph-down-arrow" }),
                    createTextVNode("Export Report")
                  ], 8, ["href"])
                ], 40, ["onSubmit"])
              ])
            ])
          ]),
          createVNode(_component_ProjectList, {
            projects: _ctx.projects.data,
            status: _ctx.status.data,
            action: "client.project"
          }, null, 8, ["projects", "status"]),
          _ctx.projects.meta ? (openBlock(), createBlock("div", {
            key: 0,
            class: "row mt-5"
          }, [
            createVNode("div", { class: "col-sm-12 d-flex align-items-center justify-content-between" }, [
              createVNode("span", { class: "fw-bold text-gray-700" }, " Showing " + toDisplayString(_ctx.projects.meta.from) + " to " + toDisplayString(_ctx.projects.meta.to) + " of " + toDisplayString(_ctx.projects.meta.total) + " entries ", 1),
              createVNode(_component_Pagination, {
                links: _ctx.projects.meta.links
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Projects as default
};
