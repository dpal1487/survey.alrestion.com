import { defineComponent, resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, createVNode, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Head } from "@inertiajs/inertia-vue3";
import UserRoleForm from "./UserRoleForm-69ca469d.mjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
import "@vuelidate/validators";
import "./Input-3696eefa.mjs";
import "./InputError-c62476a0.mjs";
import "./Modal-813c1851.mjs";
import "vue3-toastify";
import "@vuelidate/core";
const _sfc_main = defineComponent({
  props: ["permissions", "roles"],
  data() {
    return {
      isEdit: false,
      role: [],
      showModal: false
    };
  },
  components: {
    AppLayout,
    Head,
    UserRoleForm
  },
  methods: {
    toggleModal(value, role) {
      if (role) {
        this.isEdit = true;
        this.showModal = true;
        this.role = role;
      } else if (value) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_UserRoleForm = resolveComponent("UserRoleForm");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "User Role" }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.showModal) {
          _push2(ssrRenderComponent(_component_UserRoleForm, {
            show: _ctx.showModal,
            isEdit: _ctx.isEdit,
            onHidemodal: ($event) => _ctx.toggleModal(false),
            permissions: _ctx.permissions.data,
            role: _ctx.role
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.roles.data, (role, index) => {
          _push2(`<div class="col-md-6"${_scopeId}><div class="card card-flush h-md-100"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title text-uppercase"${_scopeId}><h2${_scopeId}>${ssrInterpolate(role.name)}</h2></div></div><div class="card-body pt-1"${_scopeId}><div class="fw-bold text-gray-600 mb-5"${_scopeId}>Total users with this role: 5</div><div class="d-flex flex-column text-gray-600"${_scopeId}><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>All Admin Controls </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View and Edit Financial Summaries </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>Enabled Bulk Reports </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View and Edit Payouts </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span>View and Edit Disputes </div><div class="d-flex align-items-center py-2"${_scopeId}><span class="bullet bg-primary me-3"${_scopeId}></span><em${_scopeId}>and 7 more...</em></div></div></div><div class="card-footer flex-wrap pt-0"${_scopeId}><a href="/roles/user/view" class="btn btn-light btn-active-primary my-1 me-2"${_scopeId}>View Role</a><button type="button" class="btn btn-light btn-active-light-primary my-1"${_scopeId}>Edit Role</button></div></div></div>`);
        });
        _push2(`<!--]--><div class="col-md-6"${_scopeId}><div class="card h-md-100"${_scopeId}><div class="card-body d-flex flex-center"${_scopeId}><button type="button" class="btn btn-clear d-flex flex-column flex-center"${_scopeId}><img src="/assets/media/illustrations/sketchy-1/4.png" alt="" class="mw-100 mh-150px mb-7"${_scopeId}><div class="fw-bold fs-3 text-gray-600 text-hover-primary"${_scopeId}>Add New Role</div></button></div></div></div></div>`);
      } else {
        return [
          _ctx.showModal ? (openBlock(), createBlock(_component_UserRoleForm, {
            key: 0,
            show: _ctx.showModal,
            isEdit: _ctx.isEdit,
            onHidemodal: ($event) => _ctx.toggleModal(false),
            permissions: _ctx.permissions.data,
            role: _ctx.role
          }, null, 8, ["show", "isEdit", "onHidemodal", "permissions", "role"])) : createCommentVNode("", true),
          createVNode("div", { class: "row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9" }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.roles.data, (role, index) => {
              return openBlock(), createBlock("div", {
                class: "col-md-6",
                key: index
              }, [
                createVNode("div", { class: "card card-flush h-md-100" }, [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("div", { class: "card-title text-uppercase" }, [
                      createVNode("h2", null, toDisplayString(role.name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "card-body pt-1" }, [
                    createVNode("div", { class: "fw-bold text-gray-600 mb-5" }, "Total users with this role: 5"),
                    createVNode("div", { class: "d-flex flex-column text-gray-600" }, [
                      createVNode("div", { class: "d-flex align-items-center py-2" }, [
                        createVNode("span", { class: "bullet bg-primary me-3" }),
                        createTextVNode("All Admin Controls ")
                      ]),
                      createVNode("div", { class: "d-flex align-items-center py-2" }, [
                        createVNode("span", { class: "bullet bg-primary me-3" }),
                        createTextVNode("View and Edit Financial Summaries ")
                      ]),
                      createVNode("div", { class: "d-flex align-items-center py-2" }, [
                        createVNode("span", { class: "bullet bg-primary me-3" }),
                        createTextVNode("Enabled Bulk Reports ")
                      ]),
                      createVNode("div", { class: "d-flex align-items-center py-2" }, [
                        createVNode("span", { class: "bullet bg-primary me-3" }),
                        createTextVNode("View and Edit Payouts ")
                      ]),
                      createVNode("div", { class: "d-flex align-items-center py-2" }, [
                        createVNode("span", { class: "bullet bg-primary me-3" }),
                        createTextVNode("View and Edit Disputes ")
                      ]),
                      createVNode("div", { class: "d-flex align-items-center py-2" }, [
                        createVNode("span", { class: "bullet bg-primary me-3" }),
                        createVNode("em", null, "and 7 more...")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card-footer flex-wrap pt-0" }, [
                    createVNode("a", {
                      href: "/roles/user/view",
                      class: "btn btn-light btn-active-primary my-1 me-2"
                    }, "View Role"),
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-light btn-active-light-primary my-1",
                      onClick: ($event) => _ctx.toggleModal(true, role)
                    }, "Edit Role", 8, ["onClick"])
                  ])
                ])
              ]);
            }), 128)),
            createVNode("div", { class: "col-md-6" }, [
              createVNode("div", { class: "card h-md-100" }, [
                createVNode("div", { class: "card-body d-flex flex-center" }, [
                  createVNode("button", {
                    type: "button",
                    class: "btn btn-clear d-flex flex-column flex-center",
                    onClick: ($event) => _ctx.toggleModal(true)
                  }, [
                    createVNode("img", {
                      src: "/assets/media/illustrations/sketchy-1/4.png",
                      alt: "",
                      class: "mw-100 mh-150px mb-7"
                    }),
                    createVNode("div", { class: "fw-bold fs-3 text-gray-600 text-hover-primary" }, "Add New Role")
                  ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Roles/RoleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoleList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RoleList as default
};
