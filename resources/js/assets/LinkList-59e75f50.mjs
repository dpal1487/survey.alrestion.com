import { defineComponent, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Loading from "vue-loading-overlay";
/* empty css                 */import { toast } from "vue3-toastify";
import { copyText } from "vue3-clipboard";
import { u as utils } from "./utils-d9e085bf.mjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "sweetalert2";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    const doCopy = (link) => {
      copyText(link, void 0, (error, event) => {
        if (error) {
          toast.info("Can not copy", {
            autoClose: 1e3
          });
        } else {
          toast.info("Copied", {
            autoClose: 1e3
          });
        }
      });
    };
    return { doCopy };
  },
  props: ["links"],
  data() {
    return {
      isLoading: false,
      isFullPage: true
    };
  },
  components: {
    Link,
    Loading
  },
  methods: {
    async updateStatus(id, e) {
      this.isLoading = true;
      await utils.changeStatus(route("mapping.status"), {
        id,
        status: e
      });
      this.isLoading = false;
    },
    async confirmDelete(index) {
      await utils.deleteIndexDialog(
        route("mapping.destroy", this.links[index].id),
        this.links,
        index
      );
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_loading, {
    active: _ctx.isLoading,
    "can-cancel": true,
    "is-full-page": _ctx.isFullPage
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.links, (project, index) => {
    _push(`<div class="card mt-5"><div class="card-body"><div class="d-flex justify-content-between align-items-center"><div class="flex-1">`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(ssrRenderComponent(_component_Link, {
        class: "text-gray-800 text-hover-primary fs-6 fw-bold",
        href: `/mapping/${project.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(project.project_name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(project.project_name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<div class="text-gray-800 fs-6 fw-bold">${ssrInterpolate(project.project_name)}</div>`);
    }
    _push(`<span class="text-muted fw-semibold d-block fs-7"><i class="bi bi-geo-alt-fill me-2"></i>${ssrInterpolate(project.country.display_name)}</span></div>`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="flex-1 fw-bold"><span>$${ssrInterpolate(project.cpi)}/-CPI</span></div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="flex-1 fw-bold"><span>${ssrInterpolate(project.loi)}Min/LOI</span></div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="flex-1 fw-bold"><span>${ssrInterpolate(project.ir)}%/IR</span></div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="flex-1 fw-bold">`);
      _push(ssrRenderComponent(_component_Link, {
        href: `/mapping/${project.id}/suppliers`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Suppliers (${ssrInterpolate(project.supplier_count)})`);
          } else {
            return [
              createTextVNode("Suppliers (" + toDisplayString(project.supplier_count) + ")", 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="flex-1">`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<button class="btn btn-outline btn-outline-dark btn-sm clipboard" title="Copy Project Link"><i class="bi bi-link"></i> Copy Link </button>`);
    } else {
      _push(`<button class="btn btn-outline btn-outline-dark btn-sm clipboard" title="Copy Project Link"><i class="bi bi-link"></i> Copy Link </button>`);
    }
    _push(`</div><div class="flex-1 text-end">`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="form-switch form-check-solid d-block form-check-custom form-check-success"><input class="form-check-input h-20px w-30px" type="checkbox"${ssrIncludeBooleanAttr(project.status == 1 ? true : false) ? " checked" : ""}><label class="form-check-label"> Status </label></div>`);
    } else {
      _push(`<div>`);
      if (project.status) {
        _push(`<span class="badge badge-success">Active</span>`);
      } else {
        _push(`<span class="badge badge-danger">Inactive</span>`);
      }
      _push(`</div>`);
    }
    _push(`</div>`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="flex-1 text-end"><button class="btn btn-icon btn-outline btn-light btn-circle me-5"${ssrRenderAttr("id", `dropdown-${project.id}`)} data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></button><div class="text-left dropdown-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"${ssrRenderAttr("aria-labelled:by", `dropdown-${project.id}`)}><div class="menu-item px-3">`);
      _push(ssrRenderComponent(_component_Link, {
        href: `/mapping/${project.id}/edit`,
        class: "menu-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-pencil me-2"${_scopeId}></i>Edit `);
          } else {
            return [
              createVNode("i", { class: "bi bi-pencil me-2" }),
              createTextVNode("Edit ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="menu-item px-3">`);
      _push(ssrRenderComponent(_component_Link, {
        title: "Add Supplier",
        href: `/sampling/${project.id}/create`,
        class: "menu-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-plus-circle me-2"${_scopeId}></i>Add Supplier `);
          } else {
            return [
              createVNode("i", { class: "bi bi-plus-circle me-2" }),
              createTextVNode("Add Supplier ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><div class="menu-item px-3"><span class="menu-link"><i class="bi bi-trash3 me-2"></i>Delete</span></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="separator separator-dashed my-4"></div><ul class="nav d-flex justify-content-between fw-bold text-center"><li class="nav-item row"><span>${ssrInterpolate(project.sample_size)}</span><span class="text-gray-400">Sample Size</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.total_clicks)}</span><span class="text-gray-400">Total Clicks</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.complete)}</span><span class="text-gray-400">Completes</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.terminate)}</span><span class="text-gray-400">Terminates</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.quotafull)}</span><span class="text-gray-400">Quotafull</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.security_terminate)}</span><span class="text-gray-400">Security Terminates</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.incomplete)}</span><span class="text-gray-400">Incompletes</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.total_ir)}</span><span class="text-gray-400">Incidence Ratio</span></li></ul></div></div>`);
  });
  _push(`<!--]--><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Components/LinkList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LinkList as default
};
