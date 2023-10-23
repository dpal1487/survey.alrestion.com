import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { A as AppToolbar } from "./AppToolbar-ab6db7f6.mjs";
import SamplingForm from "./SamplingForm-998eaea6.mjs";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import SupplierList from "./SupplierList-bf5a7bc0.mjs";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
import "@vueform/multiselect";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./Button-2d51159e.mjs";
import "./Input-3696eefa.mjs";
import "./Label-ee7576bd.mjs";
import "./InputError-c62476a0.mjs";
import "./ValidationErrors-8afe2acd.mjs";
import "vue-loading-overlay";
/* empty css                 */import "vue3-clipboard";
import "./utils-d9e085bf.mjs";
import "sweetalert2";
const _sfc_main = defineComponent({
  props: ["projects", "project", "suppliers"],
  components: {
    AppLayout,
    Link,
    AppToolbar,
    Head,
    SamplingForm,
    Pagination,
    SupplierList
  },
  data() {
    return {
      form: {
        processing: false,
        action: ""
      }
    };
  },
  methods: {
    submit(form) {
      this.form = form;
      this.form.transform((data) => ({
        ...data
      })).post(this.route("sampling.store"), {
        onSuccess: (data) => {
          toast.success(this.$page.props.jetstream.flash.message);
          this.isEdit = false;
        },
        onError: (data) => {
          console.log(data);
        }
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_sampling_form = resolveComponent("sampling-form");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Add New Supplier" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: "Add New Supplier" }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/projects",
          class: "text-muted text-hover-primary"
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
          href: `/project/${_ctx.project.project_id}`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Overview`);
            } else {
              return [
                createTextVNode("Overview")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.project.project_name)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/projects",
              class: "text-muted text-hover-primary"
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
              href: `/project/${_ctx.project.project_id}`
            }, {
              default: withCtx(() => [
                createTextVNode("Overview")
              ]),
              _: 1
            }, 8, ["href"])
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.project.project_name), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row mb-5"${_scopeId}><div class="col-md-12"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_sampling_form, {
          suppliers: _ctx.suppliers.data,
          project: _ctx.project,
          onSubmitted: _ctx.submit
        }, {
          action: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex justify-content-end mt-4"${_scopeId2}><a class="btn btn-secondary me-5"${ssrRenderAttr("href", `/project/${_ctx.project.project_id}`)} role="button"${_scopeId2}>Discard</a><button${ssrIncludeBooleanAttr(_ctx.form.processing) ? " disabled" : ""} class="${ssrRenderClass([{
                "text-white-50": _ctx.form.processing
              }, "btn btn-primary"])}"${_scopeId2}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm" role="status"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Save </button></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex justify-content-end mt-4" }, [
                  createVNode("a", {
                    class: "btn btn-secondary me-5",
                    href: `/project/${_ctx.project.project_id}`,
                    role: "button"
                  }, "Discard", 8, ["href"]),
                  createVNode("button", {
                    onClick: ($event) => this.form.action = "save",
                    disabled: _ctx.form.processing,
                    class: ["btn btn-primary", {
                      "text-white-50": _ctx.form.processing
                    }]
                  }, [
                    withDirectives(createVNode("div", {
                      class: "spinner-border spinner-border-sm",
                      role: "status"
                    }, [
                      createVNode("span", { class: "visually-hidden" }, "Loading...")
                    ], 512), [
                      [vShow, _ctx.form.processing]
                    ]),
                    createTextVNode(" Save ")
                  ], 10, ["onClick", "disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row mb-5" }, [
            createVNode("div", { class: "col-md-12" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-8" }, [
                      createVNode(_component_sampling_form, {
                        suppliers: _ctx.suppliers.data,
                        project: _ctx.project,
                        onSubmitted: _ctx.submit
                      }, {
                        action: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-content-end mt-4" }, [
                            createVNode("a", {
                              class: "btn btn-secondary me-5",
                              href: `/project/${_ctx.project.project_id}`,
                              role: "button"
                            }, "Discard", 8, ["href"]),
                            createVNode("button", {
                              onClick: ($event) => this.form.action = "save",
                              disabled: _ctx.form.processing,
                              class: ["btn btn-primary", {
                                "text-white-50": _ctx.form.processing
                              }]
                            }, [
                              withDirectives(createVNode("div", {
                                class: "spinner-border spinner-border-sm",
                                role: "status"
                              }, [
                                createVNode("span", { class: "visually-hidden" }, "Loading...")
                              ], 512), [
                                [vShow, _ctx.form.processing]
                              ]),
                              createTextVNode(" Save ")
                            ], 10, ["onClick", "disabled"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["suppliers", "project", "onSubmitted"])
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Sampling/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
