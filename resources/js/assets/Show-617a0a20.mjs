import { defineComponent, resolveComponent, createSlots, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, withDirectives, vModelText, vModelSelect, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import LinkList from "./LinkList-5d98ccd4.mjs";
import TopCard from "./TopCard-1cab9db8.mjs";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import Loading from "vue-loading-overlay";
/* empty css                 */import { Inertia } from "@inertiajs/inertia";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "vue3-toastify";
import "vue3-clipboard";
import "./utils-d9e085bf.mjs";
import "sweetalert2";
import "@vueform/multiselect";
import "./InputError-c62476a0.mjs";
import "./ValidationErrors-8afe2acd.mjs";
import "./Input-3696eefa.mjs";
import "./Label-ee7576bd.mjs";
import "@vuelidate/core";
import "@vuelidate/validators";
import "vue3-datepicker";
const _sfc_main = defineComponent({
  props: ["project", "project_links", "clients", "status"],
  data() {
    return {
      title: "Project Overview",
      isLoading: false,
      isFullPage: true,
      form: {}
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    LinkList,
    TopCard,
    Pagination,
    Loading
  },
  methods: {
    search() {
      this.isLoading = true;
      Inertia.get(
        `/project/${this.project.data.id}`,
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
    var url = new URL(window.location.href);
    this.form.q = url.searchParams.get("q");
    this.form.status = url.searchParams.get("status");
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  const _component_TopCard = resolveComponent("TopCard");
  const _component_LinkList = resolveComponent("LinkList");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, createSlots({
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
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_loading, {
          active: _ctx.isLoading,
          "onUpdate:active": ($event) => _ctx.isLoading = $event,
          "can-cancel": false,
          "is-full-page": _ctx.isFullPage
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TopCard, {
          project: _ctx.project.data,
          clients: _ctx.clients.data,
          status: _ctx.status
        }, null, _parent2, _scopeId));
        _push2(`<div class="card card-flush mb-5"${_scopeId}><div class="card-header align-items-center px-5"${_scopeId}><form class="card-title"${_scopeId}><input${ssrRenderAttr("value", _ctx.form.q)} class="form-control form-control-sm form-control-solid" type="text" placeholder="Search here..."${_scopeId}><select class="form-control form-control-sm form-control-solid ms-3"${_scopeId}><option value=""${_scopeId}>Select status</option><option value="1"${_scopeId}>Active</option><option value="0"${_scopeId}>Inctive</option></select><button class="btn btn-primary btn-sm ms-3"${_scopeId}><i class="bi bi-search"${_scopeId}></i></button></form>`);
        if (_ctx.$page.props.user.role.role.slug != "user") {
          _push2(ssrRenderComponent(_component_Link, {
            href: `/mapping/${_ctx.project.data.id}/create`,
            class: "btn btn-primary btn-sm"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="bi bi-plus-circle"${_scopeId2}></i>Add New Link`);
              } else {
                return [
                  createVNode("i", { class: "bi bi-plus-circle" }),
                  createTextVNode("Add New Link")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
        _push2(ssrRenderComponent(_component_LinkList, {
          links: _ctx.project_links.data
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_loading, {
            active: _ctx.isLoading,
            "onUpdate:active": ($event) => _ctx.isLoading = $event,
            "can-cancel": false,
            "is-full-page": _ctx.isFullPage
          }, null, 8, ["active", "onUpdate:active", "is-full-page"]),
          createVNode(_component_TopCard, {
            project: _ctx.project.data,
            clients: _ctx.clients.data,
            status: _ctx.status
          }, null, 8, ["project", "clients", "status"]),
          createVNode("div", { class: "card card-flush mb-5" }, [
            createVNode("div", { class: "card-header align-items-center px-5" }, [
              createVNode("form", {
                onSubmit: withModifiers(_ctx.search, ["prevent"]),
                class: "card-title"
              }, [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => _ctx.form.q = $event,
                  class: "form-control form-control-sm form-control-solid",
                  type: "text",
                  placeholder: "Search here..."
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, _ctx.form.q]
                ]),
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
                  class: "form-control form-control-sm form-control-solid ms-3"
                }, [
                  createVNode("option", { value: "" }, "Select status"),
                  createVNode("option", { value: "1" }, "Active"),
                  createVNode("option", { value: "0" }, "Inctive")
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, _ctx.form.status]
                ]),
                createVNode("button", { class: "btn btn-primary btn-sm ms-3" }, [
                  createVNode("i", { class: "bi bi-search" })
                ])
              ], 40, ["onSubmit"]),
              _ctx.$page.props.user.role.role.slug != "user" ? (openBlock(), createBlock(_component_Link, {
                key: 0,
                href: `/mapping/${_ctx.project.data.id}/create`,
                class: "btn btn-primary btn-sm"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "bi bi-plus-circle" }),
                  createTextVNode("Add New Link")
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true)
            ])
          ]),
          createVNode(_component_LinkList, {
            links: _ctx.project_links.data
          }, null, 8, ["links"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
