import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import SupplierList from "./SupplierList-7fc67609.mjs";
import TopCard from "./TopCard-691f9af3.mjs";
import { Inertia } from "@inertiajs/inertia";
import Loading from "vue-loading-overlay";
/* empty css                 */import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  props: ["project", "suppliers", "supplier_projects", "clients", "status"],
  data() {
    return {
      title: "Manage Suppliers",
      form: {},
      isLoading: false
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    SupplierList,
    TopCard,
    Loading
  },
  methods: {
    search() {
      this.isLoading = true;
      Inertia.get(
        `/project/${this.project.data.id}/suppliers`,
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
    this.form.supplier = url.searchParams.get("supplier");
    this.form.status = url.searchParams.get("status");
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_loading = resolveComponent("loading");
  const _component_Head = resolveComponent("Head");
  const _component_TopCard = resolveComponent("TopCard");
  const _component_Link = resolveComponent("Link");
  const _component_SupplierList = resolveComponent("SupplierList");
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
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}> Suppliers </li>`);
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
          createVNode("li", { class: "breadcrumb-item text-muted" }, " Suppliers ")
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
        _push2(ssrRenderComponent(_component_Head, { title: "Project Suppliers" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TopCard, {
          project: _ctx.project.data,
          clients: _ctx.clients.data,
          status: _ctx.status
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-5"${_scopeId}><div class="card"${_scopeId}><div class="card-header align-items-center ps-2"${_scopeId}><div class="card-title"${_scopeId}><form class="card-title"${_scopeId}><select class="form-control form-control-sm form-control-solid ms-3 w-150px"${_scopeId}><option value=""${_scopeId}>Select Supplier</option><!--[-->`);
        ssrRenderList(_ctx.suppliers.data, (supplier, index) => {
          _push2(`<option${ssrRenderAttr("value", supplier.id)}${_scopeId}>${ssrInterpolate(supplier.supplier_name)}</option>`);
        });
        _push2(`<!--]--></select><select class="form-control form-control-sm form-control-solid ms-3 w-150px"${_scopeId}><option value=""${_scopeId}>Select Status</option><option value="1"${_scopeId}>Active</option><option value="0"${_scopeId}>Inctive</option></select><button class="btn btn-primary btn-sm ms-3"${_scopeId}><i class="bi bi-search"${_scopeId}></i></button></form></div></div></div>`);
        _push2(ssrRenderComponent(_component_SupplierList, {
          projects: _ctx.supplier_projects.data,
          action: "project.supplier"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_loading, {
            active: _ctx.isLoading,
            "onUpdate:active": ($event) => _ctx.isLoading = $event,
            "can-cancel": false,
            "is-full-page": _ctx.fullPage
          }, null, 8, ["active", "onUpdate:active", "is-full-page"]),
          createVNode(_component_Head, { title: "Project Suppliers" }),
          createVNode(_component_TopCard, {
            project: _ctx.project.data,
            clients: _ctx.clients.data,
            status: _ctx.status
          }, null, 8, ["project", "clients", "status"]),
          createVNode("div", { class: "mb-5" }, [
            createVNode("div", { class: "card" }, [
              createVNode("div", { class: "card-header align-items-center ps-2" }, [
                createVNode("div", { class: "card-title" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.search, ["prevent"]),
                    class: "card-title"
                  }, [
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => _ctx.form.supplier = $event,
                      class: "form-control form-control-sm form-control-solid ms-3 w-150px"
                    }, [
                      createVNode("option", { value: "" }, "Select Supplier"),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.suppliers.data, (supplier, index) => {
                        return openBlock(), createBlock("option", {
                          value: supplier.id
                        }, toDisplayString(supplier.supplier_name), 9, ["value"]);
                      }), 256))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, _ctx.form.supplier]
                    ]),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
                      class: "form-control form-control-sm form-control-solid ms-3 w-150px"
                    }, [
                      createVNode("option", { value: "" }, "Select Status"),
                      createVNode("option", { value: "1" }, "Active"),
                      createVNode("option", { value: "0" }, "Inctive")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, _ctx.form.status]
                    ]),
                    createVNode("button", { class: "btn btn-primary btn-sm ms-3" }, [
                      createVNode("i", { class: "bi bi-search" })
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])
            ]),
            createVNode(_component_SupplierList, {
              projects: _ctx.supplier_projects.data,
              action: "project.supplier"
            }, null, 8, ["projects"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Supplier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Supplier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Supplier as default
};
