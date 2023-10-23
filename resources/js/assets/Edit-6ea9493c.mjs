import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, withDirectives, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { A as AppToolbar } from "./AppToolbar-61908919.mjs";
import MappingForm from "./MappingForm-8a23e7a6.mjs";
import LinkList from "./LinkList-5d98ccd4.mjs";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
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
  props: ["countries", "project"],
  components: {
    AppLayout,
    Link,
    AppToolbar,
    Head,
    MappingForm,
    ProjecLinkList: LinkList
  },
  data() {
    return {
      title: "Edit Link",
      isEdit: false,
      form: {}
    };
  },
  methods: {
    submit(form) {
      this.form = form;
      this.form.transform((data) => ({
        ...data
      })).post(this.route("mapping.update", this.project.data.id), {
        onSuccess: (data) => {
          toast.success(this.$page.props.jetstream.flash.message);
        },
        onError: (data) => {
        }
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_mapping_form = resolveComponent("mapping-form");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Edit Link" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}><a href="/projects" class="text-muted text-hover-primary"${_scopeId}>Projects</a></li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}><a${ssrRenderAttr("href", `/project/${_ctx.project.project_id}`)} class="text-muted text-hover-primary"${_scopeId}>Overview</a></li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}> Project Link </li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode("a", {
              href: "/projects",
              class: "text-muted text-hover-primary"
            }, "Projects")
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode("a", {
              href: `/project/${_ctx.project.project_id}`,
              class: "text-muted text-hover-primary"
            }, "Overview", 8, ["href"])
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, " Project Link ")
        ];
      }
    }),
    toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
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
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row mb-5"${_scopeId}><div class="col-md-12"${_scopeId}><div class="card"${_scopeId}><div class="card-header align-items-center"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Edit Link</h2></div></div><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-12 mb-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_mapping_form, {
          onSubmitted: _ctx.submit,
          countries: _ctx.countries.data,
          project: _ctx.project.data
        }, {
          action: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex justify-content-end"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Link, {
                type: "button",
                class: "btn btn-secondary me-5",
                href: `/project/${_ctx.project.data.project_id}`
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Discard`);
                  } else {
                    return [
                      createTextVNode("Discard")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId2}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Save Change </button></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex justify-content-end" }, [
                  createVNode(_component_Link, {
                    type: "button",
                    class: "btn btn-secondary me-5",
                    href: `/project/${_ctx.project.data.project_id}`
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Discard")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode("button", {
                    type: "submit",
                    class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                  }, [
                    withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                      createVNode("span", { class: "visually-hidden" }, "Loading...")
                    ], 512), [
                      [vShow, _ctx.form.processing]
                    ]),
                    createTextVNode(" Save Change ")
                  ], 2)
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
                createVNode("div", { class: "card-header align-items-center" }, [
                  createVNode("div", { class: "card-title" }, [
                    createVNode("h2", null, "Edit Link")
                  ])
                ]),
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-12 mb-5" }, [
                      createVNode(_component_mapping_form, {
                        onSubmitted: _ctx.submit,
                        countries: _ctx.countries.data,
                        project: _ctx.project.data
                      }, {
                        action: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-content-end" }, [
                            createVNode(_component_Link, {
                              type: "button",
                              class: "btn btn-secondary me-5",
                              href: `/project/${_ctx.project.data.project_id}`
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Discard")
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            createVNode("button", {
                              type: "submit",
                              class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                            }, [
                              withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                                createVNode("span", { class: "visually-hidden" }, "Loading...")
                              ], 512), [
                                [vShow, _ctx.form.processing]
                              ]),
                              createTextVNode(" Save Change ")
                            ], 2)
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmitted", "countries", "project"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
