import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import SupplierList from "./SupplierList-437a6e40.mjs";
import TopCard from "./TopCard-0c53bac0.mjs";
import { Inertia } from "@inertiajs/inertia";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
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
  props: ["project", "suppliers", "countries"],
  data() {
    return {
      title: "Suppliers",
      form: {}
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    SupplierList,
    TopCard
  },
  methods: {
    search() {
      Inertia.get(`/mapping/${this.project.id}/suppliers`, this.form, {});
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
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
        _push2(`<div class="mb-5"${_scopeId}>`);
        if (_ctx.suppliers.data.length > 0) {
          _push2(ssrRenderComponent(_component_SupplierList, {
            projects: _ctx.suppliers.data
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<div class="d-flex justify-content-center align-content-center pt-10 pb-10"${_scopeId}><div class="text-center py-10"${_scopeId}><img src="/assets/images/emptyrespondent.png" style="${ssrRenderStyle({ "height": "200px" })}"${_scopeId}><div class="fw-bold fs-2 text-gray-900 mt-5"${_scopeId}> No Supplier Found! </div></div></div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_Head, { title: _ctx.title }, null, 8, ["title"]),
          createVNode(_component_TopCard, {
            project: _ctx.project.data,
            countries: _ctx.countries.data
          }, null, 8, ["project", "countries"]),
          createVNode("div", { class: "mb-5" }, [
            _ctx.suppliers.data.length > 0 ? (openBlock(), createBlock(_component_SupplierList, {
              key: 0,
              projects: _ctx.suppliers.data
            }, null, 8, ["projects"])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "d-flex justify-content-center align-content-center pt-10 pb-10"
            }, [
              createVNode("div", { class: "text-center py-10" }, [
                createVNode("img", {
                  src: "/assets/images/emptyrespondent.png",
                  style: { "height": "200px" }
                }),
                createVNode("div", { class: "fw-bold fs-2 text-gray-900 mt-5" }, " No Supplier Found! ")
              ])
            ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Supplier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Supplier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Supplier as default
};
