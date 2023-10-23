import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, vShow, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import ContactForm from "./ContactForm-3721588b.mjs";
import Header from "./Header-b6f195c2.mjs";
import { toast } from "vue3-toastify";
import ContactCard from "./ContactCard-37ebf9b4.mjs";
import Swal from "sweetalert2";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
import "./Input-3696eefa.mjs";
import "./Label-ee7576bd.mjs";
import "./InputError-c62476a0.mjs";
import "./ValidationErrors-8afe2acd.mjs";
import "@vuelidate/core";
import "@vuelidate/validators";
/* empty css                 */const _sfc_main = defineComponent({
  props: ["client", "contacts", "countries"],
  components: {
    AppLayout,
    Link,
    Head,
    Multiselect,
    ContactForm,
    Header,
    ContactCard
  },
  data() {
    return {
      isEdit: false,
      isAdd: false,
      form: {
        processing: false
      },
      title: "Manage Contact"
    };
  },
  methods: {
    submit(form) {
      this.form = form;
      this.form.transform((data) => ({
        ...data
      })).post(this.isEdit ? this.route("client.updateContact", this.client.data.id) : this.route("client.addContact", this.client.data.id), {
        onSuccess: (data) => {
          toast.success(this.$page.props.jetstream.flash.message);
          this.isEdit = false;
          this.isAdd = false;
        },
        onError: (data) => {
          console.log(data);
        }
      });
    },
    toggleModal(isEdit, contact) {
      this.isEdit = isEdit;
      this.form = contact;
    },
    confirmDelete(index) {
      Swal.fire({
        title: "Are you sure you want to delete ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(this.route("client.delContact", this.contacts.data[index].id)).then((response) => {
            toast.success(response.data.message);
            if (response.data.success) {
              this.contacts.data.splice(index, 1);
              return;
            }
          }).catch((error) => {
            if (error.response.status == 400) {
              toast.error(error.response.data.message);
            }
          });
        } else if (result.dismiss === "cancel") {
          Swal.fire({
            text: " was not deleted.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn fw-bold btn-primary"
            }
          });
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
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_contact_form = resolveComponent("contact-form");
  const _component_contact_card = resolveComponent("contact-card");
  _push(`<!--[-->`);
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
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          client: _ctx.client.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Manage Contact</h3></div>`);
        if (!_ctx.isEdit) {
          _push2(`<button class="btn btn-primary align-self-center"${_scopeId}><i class="bi bi-plus-circle"${_scopeId}></i>Add A New Contact </button>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="card-body"${_scopeId}>`);
        if (_ctx.isEdit || _ctx.isAdd) {
          _push2(`<div class="row"${_scopeId}><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_contact_form, {
            onSubmitted: _ctx.submit,
            countries: _ctx.countries.data,
            contact: _ctx.form
          }, {
            action: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="d-flex justify-content-end"${_scopeId2}><button type="button" class="btn btn-outline-secondary me-5"${_scopeId2}>Discard</button><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId2}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Save Changes </button></div>`);
              } else {
                return [
                  createVNode("div", { class: "d-flex justify-content-end" }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-outline-secondary me-5",
                      onClick: ($event) => (this.isEdit = false, this.isAdd = false)
                    }, "Discard", 8, ["onClick"]),
                    createVNode("button", {
                      type: "submit",
                      class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                    }, [
                      withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                        createVNode("span", { class: "visually-hidden" }, "Loading...")
                      ], 512), [
                        [vShow, _ctx.form.processing]
                      ]),
                      createTextVNode(" Save Changes ")
                    ], 2)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<div class="row"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.contacts.data, (contact, index) => {
            _push2(`<div class="col-6 mb-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_contact_card, { contact }, {
              action: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-items-center py-2"${_scopeId2}><button class="btn btn-sm btn-light btn-active-light-primary me-3"${_scopeId2}><span class="indicator-label"${_scopeId2}>Delete</span></button><button class="btn btn-sm btn-light btn-active-light-primary"${_scopeId2}>Edit</button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-items-center py-2" }, [
                      createVNode("button", {
                        class: "btn btn-sm btn-light btn-active-light-primary me-3",
                        onClick: ($event) => _ctx.confirmDelete(
                          index
                        )
                      }, [
                        createVNode("span", { class: "indicator-label" }, "Delete")
                      ], 8, ["onClick"]),
                      createVNode("button", {
                        class: "btn btn-sm btn-light btn-active-light-primary",
                        onClick: ($event) => _ctx.toggleModal(true, contact)
                      }, "Edit", 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            client: _ctx.client.data
          }, null, 8, ["client"]),
          createVNode("div", { class: "card" }, [
            createVNode("div", { class: "card-header" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Manage Contact")
              ]),
              !_ctx.isEdit ? (openBlock(), createBlock("button", {
                key: 0,
                class: "btn btn-primary align-self-center",
                onClick: ($event) => (this.isAdd = true, this.form = {})
              }, [
                createVNode("i", { class: "bi bi-plus-circle" }),
                createTextVNode("Add A New Contact ")
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ]),
            createVNode("div", { class: "card-body" }, [
              _ctx.isEdit || _ctx.isAdd ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode("div", { class: "col-6" }, [
                  createVNode(_component_contact_form, {
                    onSubmitted: _ctx.submit,
                    countries: _ctx.countries.data,
                    contact: _ctx.form
                  }, {
                    action: withCtx(() => [
                      createVNode("div", { class: "d-flex justify-content-end" }, [
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-outline-secondary me-5",
                          onClick: ($event) => (this.isEdit = false, this.isAdd = false)
                        }, "Discard", 8, ["onClick"]),
                        createVNode("button", {
                          type: "submit",
                          class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                        }, [
                          withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                            createVNode("span", { class: "visually-hidden" }, "Loading...")
                          ], 512), [
                            [vShow, _ctx.form.processing]
                          ]),
                          createTextVNode(" Save Changes ")
                        ], 2)
                      ])
                    ]),
                    _: 1
                  }, 8, ["onSubmitted", "countries", "contact"])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "row"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.contacts.data, (contact, index) => {
                  return openBlock(), createBlock("div", {
                    class: "col-6 mb-5",
                    key: index
                  }, [
                    createVNode(_component_contact_card, { contact }, {
                      action: withCtx(() => [
                        createVNode("div", { class: "d-flex align-items-center py-2" }, [
                          createVNode("button", {
                            class: "btn btn-sm btn-light btn-active-light-primary me-3",
                            onClick: ($event) => _ctx.confirmDelete(
                              index
                            )
                          }, [
                            createVNode("span", { class: "indicator-label" }, "Delete")
                          ], 8, ["onClick"]),
                          createVNode("button", {
                            class: "btn btn-sm btn-light btn-active-light-primary",
                            onClick: ($event) => _ctx.toggleModal(true, contact)
                          }, "Edit", 8, ["onClick"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["contact"])
                  ]);
                }), 128))
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Contact as default
};
