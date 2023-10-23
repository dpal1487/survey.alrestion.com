import { defineComponent, resolveComponent, createSlots, withCtx, createVNode, withModifiers, openBlock, createBlock, withDirectives, vModelText, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import Multiselect from "@vueform/multiselect";
import { Inertia } from "@inertiajs/inertia";
import Loading from "vue-loading-overlay";
/* empty css                 */import ProjectList from "./ProjectList-b586bf6f.mjs";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "./utils-d9e085bf.mjs";
import "sweetalert2";
import "vue3-toastify";
const _sfc_main = defineComponent({
  props: ["projects", "status", "clients"],
  data() {
    return {
      form: {},
      action: "project.page",
      isLoading: false,
      fullPage: true,
      title: "Projects"
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Pagination,
    Multiselect,
    Loading,
    ProjectList
  },
  methods: {
    search() {
      this.isLoading = true;
      Inertia.get("/projects", this.form, {
        onFinish(response) {
          this.isLoading = false;
        }
      });
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_project_list = resolveComponent("project-list");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, createSlots({
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>Projects</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, "Projects")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_loading, {
          active: _ctx.isLoading,
          "onUpdate:active": ($event) => _ctx.isLoading = $event,
          "can-cancel": false,
          "is-full-page": _ctx.fullPage
        }, null, _parent2, _scopeId));
        _push2(`<div class="card card-flush"${_scopeId}><form class="card-header justify-content-start py-4 px-4 gap-2 gap-md-5"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.form.q)} class="form-control form-control-solid w-250px ps-14" placeholder="Search Project"${_scopeId}></div><div class="w-100 mw-200px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          options: _ctx.status.data,
          label: "label",
          valueProp: "value",
          class: "btn btn-sm btn-light py-2 px-0",
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
        _push2(`</div><button type="submit" class="btn btn-primary"${_scopeId}>Search</button></form></div>`);
        _push2(ssrRenderComponent(_component_project_list, {
          projects: _ctx.projects.data,
          status: _ctx.status.data,
          action: _ctx.action
        }, null, _parent2, _scopeId));
        if (_ctx.projects.meta) {
          _push2(`<div class="row"${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between"${_scopeId}><span class="fw-bold text-gray-700"${_scopeId}> Showing ${ssrInterpolate(_ctx.projects.meta.from)} to ${ssrInterpolate(_ctx.projects.meta.to)} of ${ssrInterpolate(_ctx.projects.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.projects.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_loading, {
            active: _ctx.isLoading,
            "onUpdate:active": ($event) => _ctx.isLoading = $event,
            "can-cancel": false,
            "is-full-page": _ctx.fullPage
          }, null, 8, ["active", "onUpdate:active", "is-full-page"]),
          createVNode("div", { class: "card card-flush" }, [
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
                  placeholder: "Search Project"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, _ctx.form.q]
                ])
              ]),
              createVNode("div", { class: "w-100 mw-200px" }, [
                createVNode(_component_Multiselect, {
                  "can-clear": false,
                  options: _ctx.status.data,
                  label: "label",
                  valueProp: "value",
                  class: "btn btn-sm btn-light py-2 px-0",
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
              }, "Search")
            ], 40, ["onSubmit"])
          ]),
          createVNode(_component_project_list, {
            projects: _ctx.projects.data,
            status: _ctx.status.data,
            action: _ctx.action
          }, null, 8, ["projects", "status", "action"]),
          _ctx.projects.meta ? (openBlock(), createBlock("div", {
            key: 0,
            class: "row"
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
    _: 2
  }, [
    _ctx.$page.props.user.role.role.slug != "user" ? {
      name: "toolbar",
      fn: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="d-flex align-items-center gap-2 gap-lg-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: "/project/create",
            class: "btn btn-sm fw-bold btn-primary"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="bi bi-plus-circle"${_scopeId2}></i>Add New Project`);
              } else {
                return [
                  createVNode("i", { class: "bi bi-plus-circle" }),
                  createTextVNode("Add New Project")
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
                href: "/project/create",
                class: "btn btn-sm fw-bold btn-primary"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "bi bi-plus-circle" }),
                  createTextVNode("Add New Project")
                ]),
                _: 1
              })
            ])
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
