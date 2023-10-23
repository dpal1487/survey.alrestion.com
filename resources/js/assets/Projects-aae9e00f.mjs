import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, withDirectives, vModelText, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import Header from "./Header-b1968f10.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import SupplierList from "./SupplierList-bf5a7bc0.mjs";
import Multiselect from "@vueform/multiselect";
import { Inertia } from "@inertiajs/inertia";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "vue-loading-overlay";
/* empty css                 */import "vue3-toastify";
import "vue3-clipboard";
import "./utils-d9e085bf.mjs";
import "sweetalert2";
const _sfc_main = defineComponent({
  props: ["supplier", "countries", "suppliers"],
  data() {
    return {
      form: {},
      th: [
        "Project Name",
        "Country",
        "CPI",
        "Sample Size",
        "Project Link",
        "TClick",
        "Complete",
        "Terminate",
        "S Terminate",
        "Quotafull",
        "Incomplete",
        "IR",
        "STATUS",
        "Action"
      ],
      title: "Projects"
    };
  },
  components: {
    AppLayout,
    Header,
    Link,
    Head,
    SupplierList,
    Multiselect,
    Pagination
  },
  methods: {
    search() {
      Inertia.get(
        "/supplier/" + this.supplier.data.id + "/projects",
        this.form
      );
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_SupplierList = resolveComponent("SupplierList");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/supplier",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Supplier`);
            } else {
              return [
                createTextVNode("Supplier")
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
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/supplier",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Supplier")
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
      var _a, _b;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          supplier: (_a = _ctx.supplier) == null ? void 0 : _a.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card"${_scopeId}><form class="card-header align-items-center"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>${ssrInterpolate(_ctx.title)}</h2></div><div class="card-toolbar flex-row-fluid justify-content-end gap-5"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.q)} class="form-control form-control-solid w-200px ps-14" placeholder="Search "${_scopeId}></div><div class="w-200px"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          options: _ctx.$page.props.ziggy.status,
          label: "name",
          valueProp: "value",
          class: "form-control form-control-solid",
          placeholder: "Select status",
          modelValue: _ctx.s,
          "onUpdate:modelValue": ($event) => _ctx.s = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button></div></form></div>`);
        _push2(ssrRenderComponent(_component_SupplierList, {
          projects: _ctx.suppliers.data,
          action: "supplier.project"
        }, null, _parent2, _scopeId));
        if (_ctx.suppliers.meta) {
          _push2(`<div class="row mt-5"${_scopeId}><div class="col-sm-12 d-flex align-items-center justify-content-between"${_scopeId}><span class="fw-bold text-gray-700"${_scopeId}> Showing ${ssrInterpolate(_ctx.suppliers.meta.from)} to ${ssrInterpolate(_ctx.suppliers.meta.to)} of ${ssrInterpolate(_ctx.suppliers.meta.total)} entries </span>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.suppliers.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_Header, {
            supplier: (_b = _ctx.supplier) == null ? void 0 : _b.data
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
                    "onUpdate:modelValue": ($event) => _ctx.q = $event,
                    class: "form-control form-control-solid w-200px ps-14",
                    placeholder: "Search "
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, _ctx.q]
                  ])
                ]),
                createVNode("div", { class: "w-200px" }, [
                  createVNode(_component_Multiselect, {
                    "can-clear": false,
                    options: _ctx.$page.props.ziggy.status,
                    label: "name",
                    valueProp: "value",
                    class: "form-control form-control-solid",
                    placeholder: "Select status",
                    modelValue: _ctx.s,
                    "onUpdate:modelValue": ($event) => _ctx.s = $event
                  }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-primary"
                }, " Search ")
              ])
            ], 40, ["onSubmit"])
          ]),
          createVNode(_component_SupplierList, {
            projects: _ctx.suppliers.data,
            action: "supplier.project"
          }, null, 8, ["projects"]),
          _ctx.suppliers.meta ? (openBlock(), createBlock("div", {
            key: 0,
            class: "row mt-5"
          }, [
            createVNode("div", { class: "col-sm-12 d-flex align-items-center justify-content-between" }, [
              createVNode("span", { class: "fw-bold text-gray-700" }, " Showing " + toDisplayString(_ctx.suppliers.meta.from) + " to " + toDisplayString(_ctx.suppliers.meta.to) + " of " + toDisplayString(_ctx.suppliers.meta.total) + " entries ", 1),
              createVNode(_component_Pagination, {
                links: _ctx.suppliers.meta.links
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Projects as default
};
