import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, vModelSelect, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import axios from "axios";
import { toast } from "vue3-toastify";
import Loading from "vue-loading-overlay";
/* empty css                 */import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["clients", "currencies", "status", "invoice"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        client: {
          required
        },
        from_address: {
          required
        },
        to_address: {
          required
        },
        issue_date: {
          required
        },
        due_date: {
          required
        },
        notes: {},
        status: {
          required
        },
        type: {
          required
        },
        conversion_rate: {
          required
        },
        currency: {
          required
        },
        tax_rate: {
          required
        }
      }
    };
  },
  data() {
    return {
      title: "Edit Invoice",
      isEdit: false,
      isLoading: false,
      items: 1,
      rowCount: 1,
      form: this.$inertia.form({
        from_address: "121B, F/F Block A, Indira Park, Uttam Nagar,New Delhi,Delhi, India - 110059",
        to_address: this.invoice.data.to_address || "",
        client: this.invoice.data.client.id || "",
        type: "Invoice",
        issue_date: this.invoice.data.issue_date || "",
        due_date: this.invoice.data.due_date || "",
        conversion_rate: this.invoice.data.conversion_rate || "",
        total_amount: this.invoice.data.total_amount || "",
        tax_amount: this.invoice.data.tax_amount || "",
        notes: this.invoice.data.notes || "",
        status: this.invoice.data.status || "",
        currency: this.invoice.data.currency_id || this.currencies.data[1],
        tax_rate: this.invoice.data.tax_rate || "",
        items: this.invoice.data.items || [{
          project_name: "",
          cpi: "",
          quantity: ""
        }]
      })
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Multiselect,
    JetInput,
    JetLabel,
    InputError,
    VueDatePicker,
    Loading,
    JetValidationErrors
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(this.route("invoice.update", this.invoice.data.id), {
          onSuccess: (data) => {
            toast.success(this.$page.props.jetstream.flash.message);
          },
          onError: (data) => {
            if (data.message) {
              toast.error(data.message);
            }
          }
        });
      }
    },
    addItemForm(rowCount) {
      for (var i = 0; i < rowCount; i++) {
        this.form.items.push({
          name: "",
          cpi: "",
          quantity: "",
          price: ""
        });
      }
    },
    removeItem(index) {
      if (this.form.items.length > 0) {
        this.form.items.splice(index, 1);
      }
    },
    handler() {
      var total = 0;
      for (var i = 0; i < this.form.items.length; i++) {
        total += this.form.items[i].cpi * this.form.items[i].quantity;
      }
      this.form.total_amount = total;
      var final_amount = this.form.conversion_rate * this.form.total_amount;
      if (this.form.tax_rate) {
        this.form.tax_amount = parseFloat(final_amount / 118 * this.form.tax_rate).toFixed(2);
      }
    },
    getAddress(event) {
      this.form.to_address = "";
      this.isLoading = true;
      axios.get(`/client/${event}/address`).then((response) => {
        if (response.data.success) {
          var address = response.data.data;
          this.form.to_address = `${address.address}, ${address.state}, ${address.city}, ${address.country.name} - ${address.pincode}`;
          return;
        }
        toast.error(response.data.message);
      }).finally(() => {
        this.isLoading = false;
      });
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_input_error = resolveComponent("input-error");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/invoices",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Invoices`);
            } else {
              return [
                createTextVNode("Invoices")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}><span class="text-muted text-hover-primary"${_scopeId}>Create Invoice</span></li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/invoices",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Invoices")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "text-muted text-hover-primary" }, "Create Invoice")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_loading, {
          active: _ctx.isLoading,
          "onUpdate:active": ($event) => _ctx.isLoading = $event,
          "can-cancel": false,
          "is-full-page": true
        }, null, _parent2, _scopeId));
        _push2(`<div class="app-content flex-column-fluid"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<form class="d-flex flex-column flex-lg-row"${_scopeId}><div class="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-12"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="d-flex flex-column align-items-start flex-xxl-row gap-2"${_scopeId}><div class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"${_scopeId}><span class="fs-2x fw-bold text-gray-800"${_scopeId}>${ssrInterpolate(_ctx.form.type)}</span></div></div><div class="separator separator-dashed my-10"${_scopeId}></div><div class="mb-0"${_scopeId}><div class="row d-flex align-items-start"${_scopeId}><div class="col-6"${_scopeId}><div class="form-control form-control-solid"${_scopeId}><b${_scopeId}>From :</b> A.R Solution</div></div><div class="col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          options: _ctx.clients.data,
          label: "label",
          valueProp: "id",
          class: [
            "form-control form-control-lg form-control-solid",
            _ctx.v$.form.client.$errors.length > 0 ? "is-invalid" : ""
          ],
          searchable: true,
          modelValue: _ctx.v$.form.client.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.client.$model = $event,
          "track-by": "label",
          placeholder: "To Client",
          onChange: ($event) => _ctx.getAddress($event)
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.client.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="row"${_scopeId}><div class="col-6"${_scopeId}><div class="d-flex mt-5 flex-column gap-2 text-gray-600 fs-5"${_scopeId}><textarea rows="3" class="${ssrRenderClass([
          _ctx.v$.form.from_address.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-solid"
        ])}" readonly${_scopeId}>${ssrInterpolate(_ctx.v$.form.from_address.$model)}</textarea><!--[-->`);
        ssrRenderList(_ctx.v$.form.from_address.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="col-6"${_scopeId}><textarea rows="3" placeholder="To Address..." class="${ssrRenderClass([
          _ctx.v$.form.to_address.$errors.length > 0 ? "is-invalid" : "",
          "form-control from-control-lg form-control-solid mt-5"
        ])}"${_scopeId}>${ssrInterpolate(_ctx.v$.form.to_address.$model)}</textarea><!--[-->`);
        ssrRenderList(_ctx.v$.form.to_address.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="table-responsive mb-10 mt-10 border-top"${_scopeId}><table class="table g-5 gs-0 mb-0 fw-bold text-gray-700" data-kt-element="items"${_scopeId}><thead${_scopeId}><tr class="border-bottom fs-7 fw-bold text-gray-700 text-uppercase text-center"${_scopeId}><th${_scopeId}>Project Name</th><th${_scopeId}>CPI</th><th${_scopeId}>Quantity</th><th${_scopeId}>Total</th><th${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.form.items, (item, index) => {
          _push2(`<tr class="border-bottom border-bottom-dashed"${_scopeId}><td${_scopeId}><input type="text" class="form-control form-control-solid mb-2"${ssrRenderAttr("value", item.project_name)} placeholder="Project name"${_scopeId}></td><td${_scopeId}><input type="number" class="form-control form-control-solid"${ssrRenderAttr("value", item.cpi)}${ssrRenderAttr("placeholder", `${_ctx.form.currency.symbol}0.00`)}${_scopeId}></td><td class="ps-0"${_scopeId}><input class="form-control form-control-solid" type="number"${ssrRenderAttr("value", item.quantity)} placeholder="1"${_scopeId}></td><td class="pt-8 text-center text-nowrap"${_scopeId}>${ssrInterpolate(_ctx.form.currency.symbol)}${ssrInterpolate(item.quantity * item.cpi)}</td><td class="pt-5 text-end"${_scopeId}><button${ssrIncludeBooleanAttr(index < 1) ? " disabled" : ""} type="button" class="btn btn-sm btn-icon btn-active-color-primary"${_scopeId}><span class="svg-icon svg-icon-3"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"${_scopeId}></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"${_scopeId}></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"${_scopeId}></path></svg></span></button></td></tr>`);
        });
        _push2(`<!--]--></tbody><tfoot${_scopeId}><tr class="border-top border-top-dashed align-top fs-6 fw-bold text-gray-700"${_scopeId}><th colspan="2" class="text-primary"${_scopeId}><div class="d-flex"${_scopeId}><input type="number" class="form-control form-control-solid w-100px"${ssrRenderAttr("value", _ctx.rowCount)} min="1"${_scopeId}><button type="button" class="btn btn-primary btn-sm ms-5"${_scopeId}>Add More</button></div></th><th colspan="4" class="border-bottom border-bottom-dashed ps-0"${_scopeId}><div class="d-flex align-items-start justify-content-between mb-2"${_scopeId}><div class="text-grey py-1 fs-6"${_scopeId}>Subtotal : </div><div class="d-flex align-items-center gap-2"${_scopeId}><div class="fs-6 text-gray-800"${_scopeId}>${ssrInterpolate(_ctx.form.currency.symbol)}${ssrInterpolate(this.form.total_amount)}</div></div></div><div class="d-flex align-items-center justify-content-between mb-1"${_scopeId}><div class="text-grey py-1 fs-6"${_scopeId}>Tax Rate :</div><div class="d-flex align-items-center gap-2"${_scopeId}><div class="input-group input-group-sm input-group-solid mb-5 w-100px"${_scopeId}><input type="text"${ssrRenderAttr("value", _ctx.form.tax_rate)} class="${ssrRenderClass([
          _ctx.v$.form.tax_rate.$errors.length > 0 ? "is-invalid" : "",
          "form-control text-end pe-0"
        ])}"${_scopeId}><span class="input-group-text ps-0" id="basic-addon2"${_scopeId}>%</span><!--[-->`);
        ssrRenderList(_ctx.v$.form.tax_rate.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="d-flex align-items-center justify-content-between mb-1"${_scopeId}><div class="text-grey py-1 fs-6"${_scopeId}>Conversion Rate :</div><div class="d-flex align-items-center gap-2"${_scopeId}><div class="input-group input-group-sm input-group-solid mb-5 w-100px"${_scopeId}><input type="text" class="${ssrRenderClass([
          _ctx.v$.form.conversion_rate.$errors.length > 0 ? "is-invalid" : "",
          "form-control text-end"
        ])}"${ssrRenderAttr("value", _ctx.v$.form.conversion_rate.$model)}${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.v$.form.conversion_rate.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="d-flex align-items-center justify-content-between mb-1"${_scopeId}><div class="text-grey py-1 fs-6"${_scopeId}>Applied Exchange Rate :</div><div class="d-flex align-items-center gap-2"${_scopeId}> 1 ${ssrInterpolate(_ctx.form.currency.code)} = ${ssrInterpolate(_ctx.form.conversion_rate)} INR </div></div><div class="d-flex align-items-start justify-content-between"${_scopeId}><div class="text-grey py-1 fs-6"${_scopeId}>Tax Amount : </div><div class="d-flex align-items-center gap-2"${_scopeId}><div class="fs-6 text-gray-800"${_scopeId}>${ssrInterpolate(_ctx.form.tax_amount)}</div></div></div><div class="d-flex align-items-start justify-content-between"${_scopeId}><div class="text-grey py-1 fs-6"${_scopeId}>Total Amount : </div><div class="d-flex align-items-center gap-2"${_scopeId}><div class="fs-6 text-gray-800"${_scopeId}>${ssrInterpolate(_ctx.form.currency.symbol)}${ssrInterpolate(_ctx.form.total_amount)} X INR ${ssrInterpolate(_ctx.form.conversion_rate)} = ${ssrInterpolate(_ctx.form.currency.code)} ${ssrInterpolate(_ctx.form.total_amount * _ctx.form.conversion_rate)}</div></div></div></th></tr></tfoot></table></div><div class="mb-0"${_scopeId}><label class="form-label fs-6 fw-bold text-gray-700"${_scopeId}>Notes</label><textarea name="notes" class="form-control form-control-solid" rows="3" placeholder="Thanks for your business"${_scopeId}>${ssrInterpolate(_ctx.v$.form.notes.$model)}</textarea></div></div></div></div></div></div><div class="flex-lg-auto min-w-lg-300px position-relative"${_scopeId}><div class="card position-sticky top-0"${_scopeId}><div class="card-body p-10"${_scopeId}><div class="mb-5"${_scopeId}><label class="form-label fw-bold fs-6 text-gray-700"${_scopeId}>Currency</label><select class="${ssrRenderClass([
          _ctx.v$.form.currency.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-lg form-control-solid mb-2"
        ])}"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.currencies.data, (currency, index) => {
          _push2(`<option${ssrRenderAttr("value", currency)}${_scopeId}>${ssrInterpolate(currency.label)}</option>`);
        });
        _push2(`<!--]--></select><!--[-->`);
        ssrRenderList(_ctx.v$.form.currency.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="mb-5"${_scopeId}><label class="form-label fw-bold fs-6 text-gray-700"${_scopeId}>Status</label><select class="${ssrRenderClass([
          _ctx.v$.form.status.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-solid"
        ])}"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.status, (status, index) => {
          _push2(`<option${ssrRenderAttr("value", status.id)}${_scopeId}>${ssrInterpolate(status.label)}</option>`);
        });
        _push2(`<!--]--></select><!--[-->`);
        ssrRenderList(_ctx.v$.form.status.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="mb-5"${_scopeId}><label class="form-label fw-bold fs-6 text-gray-700"${_scopeId}>Type</label><select class="${ssrRenderClass([
          _ctx.v$.form.type.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-solid"
        ])}"${_scopeId}><option value="Invoice"${_scopeId}>Invoice</option><option value="Credit Note"${_scopeId}>Credit Note</option><option value="Quote"${_scopeId}>Quote</option><option value="Purchase Order"${_scopeId}>Purchase Order</option><option value="Receipt"${_scopeId}>Receipt</option></select><!--[-->`);
        ssrRenderList(_ctx.v$.form.type.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="mb-5"${_scopeId}><label class="form-label fw-bold fs-6 text-gray-700"${_scopeId}>Issue Date</label><input type="date"${ssrRenderAttr("value", _ctx.v$.form.issue_date.$model)} class="${ssrRenderClass([
          _ctx.v$.form.issue_date.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-solid"
        ])}" placeholder="Select date"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.v$.form.issue_date.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="mb-5"${_scopeId}><label class="form-label fw-bold fs-6 text-gray-700"${_scopeId}>Due Date</label><input type="date"${ssrRenderAttr("value", _ctx.v$.form.due_date.$model)} class="${ssrRenderClass([
          _ctx.v$.form.due_date.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-solid"
        ])}" placeholder="Select date"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.v$.form.due_date.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="separator separator-dashed mb-8"${_scopeId}></div><div class="mb-0"${_scopeId}><button type="submit" href="#" class="btn btn-primary w-100" id="kt_invoice_submit_button"${_scopeId}><span class="svg-icon svg-icon-3"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z" fill="currentColor"${_scopeId}></path><path opacity="0.3" d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z" fill="currentColor"${_scopeId}></path></svg></span> Save Invoice</button></div></div></div></div></form></div>`);
      } else {
        return [
          createVNode(_component_loading, {
            active: _ctx.isLoading,
            "onUpdate:active": ($event) => _ctx.isLoading = $event,
            "can-cancel": false,
            "is-full-page": true
          }, null, 8, ["active", "onUpdate:active"]),
          createVNode("div", { class: "app-content flex-column-fluid" }, [
            createVNode(_component_JetValidationErrors),
            createVNode("form", {
              onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
              class: "d-flex flex-column flex-lg-row"
            }, [
              createVNode("div", { class: "flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-12" }, [
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "d-flex flex-column flex-row-fluid gap-7 gap-lg-10" }, [
                      createVNode("div", { class: "d-flex flex-column align-items-start flex-xxl-row gap-2" }, [
                        createVNode("div", { class: "d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4" }, [
                          createVNode("span", { class: "fs-2x fw-bold text-gray-800" }, toDisplayString(_ctx.form.type), 1)
                        ])
                      ]),
                      createVNode("div", { class: "separator separator-dashed my-10" }),
                      createVNode("div", { class: "mb-0" }, [
                        createVNode("div", { class: "row d-flex align-items-start" }, [
                          createVNode("div", { class: "col-6" }, [
                            createVNode("div", { class: "form-control form-control-solid" }, [
                              createVNode("b", null, "From :"),
                              createTextVNode(" A.R Solution")
                            ])
                          ]),
                          createVNode("div", { class: "col-6" }, [
                            createVNode(_component_Multiselect, {
                              "can-clear": false,
                              options: _ctx.clients.data,
                              label: "label",
                              valueProp: "id",
                              class: [
                                "form-control form-control-lg form-control-solid",
                                _ctx.v$.form.client.$errors.length > 0 ? "is-invalid" : ""
                              ],
                              searchable: true,
                              modelValue: _ctx.v$.form.client.$model,
                              "onUpdate:modelValue": ($event) => _ctx.v$.form.client.$model = $event,
                              "track-by": "label",
                              placeholder: "To Client",
                              onChange: ($event) => _ctx.getAddress($event)
                            }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "class", "onChange"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.client.$errors, (error, index) => {
                              return openBlock(), createBlock("div", { key: index }, [
                                createVNode(_component_input_error, {
                                  message: error.$message
                                }, null, 8, ["message"])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-6" }, [
                            createVNode("div", { class: "d-flex mt-5 flex-column gap-2 text-gray-600 fs-5" }, [
                              withDirectives(createVNode("textarea", {
                                rows: "3",
                                class: [
                                  "form-control form-control-solid",
                                  _ctx.v$.form.from_address.$errors.length > 0 ? "is-invalid" : ""
                                ],
                                "onUpdate:modelValue": ($event) => _ctx.v$.form.from_address.$model = $event,
                                readonly: ""
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, _ctx.v$.form.from_address.$model]
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.from_address.$errors, (error, index) => {
                                return openBlock(), createBlock("div", { key: index }, [
                                  createVNode(_component_input_error, {
                                    message: error.$message
                                  }, null, 8, ["message"])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { class: "col-6" }, [
                            withDirectives(createVNode("textarea", {
                              rows: "3",
                              class: [
                                "form-control from-control-lg form-control-solid mt-5",
                                _ctx.v$.form.to_address.$errors.length > 0 ? "is-invalid" : ""
                              ],
                              placeholder: "To Address...",
                              "onUpdate:modelValue": ($event) => _ctx.v$.form.to_address.$model = $event
                            }, "\n                                            ", 10, ["onUpdate:modelValue"]), [
                              [vModelText, _ctx.v$.form.to_address.$model]
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.to_address.$errors, (error, index) => {
                              return openBlock(), createBlock("div", { key: index }, [
                                createVNode(_component_input_error, {
                                  message: error.$message
                                }, null, 8, ["message"])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "table-responsive mb-10 mt-10 border-top" }, [
                          createVNode("table", {
                            class: "table g-5 gs-0 mb-0 fw-bold text-gray-700",
                            "data-kt-element": "items"
                          }, [
                            createVNode("thead", null, [
                              createVNode("tr", { class: "border-bottom fs-7 fw-bold text-gray-700 text-uppercase text-center" }, [
                                createVNode("th", null, "Project Name"),
                                createVNode("th", null, "CPI"),
                                createVNode("th", null, "Quantity"),
                                createVNode("th", null, "Total"),
                                createVNode("th", null, "Action")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.form.items, (item, index) => {
                                return openBlock(), createBlock("tr", {
                                  key: index,
                                  class: "border-bottom border-bottom-dashed"
                                }, [
                                  createVNode("td", null, [
                                    withDirectives(createVNode("input", {
                                      type: "text",
                                      class: "form-control form-control-solid mb-2",
                                      "onUpdate:modelValue": ($event) => item.project_name = $event,
                                      placeholder: "Project name"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, item.project_name]
                                    ])
                                  ]),
                                  createVNode("td", null, [
                                    withDirectives(createVNode("input", {
                                      type: "number",
                                      class: "form-control form-control-solid",
                                      "onUpdate:modelValue": ($event) => item.cpi = $event,
                                      placeholder: `${_ctx.form.currency.symbol}0.00`,
                                      onKeyup: ($event) => _ctx.handler()
                                    }, null, 40, ["onUpdate:modelValue", "placeholder", "onKeyup"]), [
                                      [vModelText, item.cpi]
                                    ])
                                  ]),
                                  createVNode("td", { class: "ps-0" }, [
                                    withDirectives(createVNode("input", {
                                      class: "form-control form-control-solid",
                                      type: "number",
                                      "onUpdate:modelValue": ($event) => item.quantity = $event,
                                      placeholder: "1",
                                      onKeyup: ($event) => _ctx.handler()
                                    }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                                      [vModelText, item.quantity]
                                    ])
                                  ]),
                                  createVNode("td", { class: "pt-8 text-center text-nowrap" }, toDisplayString(_ctx.form.currency.symbol) + toDisplayString(item.quantity * item.cpi), 1),
                                  createVNode("td", { class: "pt-5 text-end" }, [
                                    createVNode("button", {
                                      disabled: index < 1,
                                      type: "button",
                                      class: "btn btn-sm btn-icon btn-active-color-primary",
                                      onClick: ($event) => _ctx.removeItem(index)
                                    }, [
                                      createVNode("span", { class: "svg-icon svg-icon-3" }, [
                                        (openBlock(), createBlock("svg", {
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg"
                                        }, [
                                          createVNode("path", {
                                            d: "M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z",
                                            fill: "currentColor"
                                          }),
                                          createVNode("path", {
                                            opacity: "0.5",
                                            d: "M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z",
                                            fill: "currentColor"
                                          }),
                                          createVNode("path", {
                                            opacity: "0.5",
                                            d: "M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z",
                                            fill: "currentColor"
                                          })
                                        ]))
                                      ])
                                    ], 8, ["disabled", "onClick"])
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode("tfoot", null, [
                              createVNode("tr", { class: "border-top border-top-dashed align-top fs-6 fw-bold text-gray-700" }, [
                                createVNode("th", {
                                  colspan: "2",
                                  class: "text-primary"
                                }, [
                                  createVNode("div", { class: "d-flex" }, [
                                    withDirectives(createVNode("input", {
                                      type: "number",
                                      class: "form-control form-control-solid w-100px",
                                      "onUpdate:modelValue": ($event) => _ctx.rowCount = $event,
                                      min: "1"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, _ctx.rowCount]
                                    ]),
                                    createVNode("button", {
                                      type: "button",
                                      class: "btn btn-primary btn-sm ms-5",
                                      onClick: ($event) => _ctx.addItemForm(this.rowCount)
                                    }, "Add More", 8, ["onClick"])
                                  ])
                                ]),
                                createVNode("th", {
                                  colspan: "4",
                                  class: "border-bottom border-bottom-dashed ps-0"
                                }, [
                                  createVNode("div", { class: "d-flex align-items-start justify-content-between mb-2" }, [
                                    createVNode("div", { class: "text-grey py-1 fs-6" }, "Subtotal : "),
                                    createVNode("div", { class: "d-flex align-items-center gap-2" }, [
                                      createVNode("div", { class: "fs-6 text-gray-800" }, toDisplayString(_ctx.form.currency.symbol) + toDisplayString(this.form.total_amount), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-items-center justify-content-between mb-1" }, [
                                    createVNode("div", { class: "text-grey py-1 fs-6" }, "Tax Rate :"),
                                    createVNode("div", { class: "d-flex align-items-center gap-2" }, [
                                      createVNode("div", { class: "input-group input-group-sm input-group-solid mb-5 w-100px" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          class: [
                                            "form-control text-end pe-0",
                                            _ctx.v$.form.tax_rate.$errors.length > 0 ? "is-invalid" : ""
                                          ],
                                          "onUpdate:modelValue": ($event) => _ctx.form.tax_rate = $event,
                                          onKeyup: ($event) => _ctx.handler()
                                        }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                          [vModelText, _ctx.form.tax_rate]
                                        ]),
                                        createVNode("span", {
                                          class: "input-group-text ps-0",
                                          id: "basic-addon2"
                                        }, "%"),
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.tax_rate.$errors, (error, index) => {
                                          return openBlock(), createBlock("div", { key: index }, [
                                            createVNode(_component_input_error, {
                                              message: error.$message
                                            }, null, 8, ["message"])
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-items-center justify-content-between mb-1" }, [
                                    createVNode("div", { class: "text-grey py-1 fs-6" }, "Conversion Rate :"),
                                    createVNode("div", { class: "d-flex align-items-center gap-2" }, [
                                      createVNode("div", { class: "input-group input-group-sm input-group-solid mb-5 w-100px" }, [
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          class: [
                                            "form-control text-end",
                                            _ctx.v$.form.conversion_rate.$errors.length > 0 ? "is-invalid" : ""
                                          ],
                                          "onUpdate:modelValue": ($event) => _ctx.v$.form.conversion_rate.$model = $event,
                                          onKeyup: ($event) => _ctx.handler()
                                        }, null, 42, ["onUpdate:modelValue", "onKeyup"]), [
                                          [vModelText, _ctx.v$.form.conversion_rate.$model]
                                        ]),
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.conversion_rate.$errors, (error, index) => {
                                          return openBlock(), createBlock("div", { key: index }, [
                                            createVNode(_component_input_error, {
                                              message: error.$message
                                            }, null, 8, ["message"])
                                          ]);
                                        }), 128))
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-items-center justify-content-between mb-1" }, [
                                    createVNode("div", { class: "text-grey py-1 fs-6" }, "Applied Exchange Rate :"),
                                    createVNode("div", { class: "d-flex align-items-center gap-2" }, " 1 " + toDisplayString(_ctx.form.currency.code) + " = " + toDisplayString(_ctx.form.conversion_rate) + " INR ", 1)
                                  ]),
                                  createVNode("div", { class: "d-flex align-items-start justify-content-between" }, [
                                    createVNode("div", { class: "text-grey py-1 fs-6" }, "Tax Amount : "),
                                    createVNode("div", { class: "d-flex align-items-center gap-2" }, [
                                      createVNode("div", { class: "fs-6 text-gray-800" }, toDisplayString(_ctx.form.tax_amount), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "d-flex align-items-start justify-content-between" }, [
                                    createVNode("div", { class: "text-grey py-1 fs-6" }, "Total Amount : "),
                                    createVNode("div", { class: "d-flex align-items-center gap-2" }, [
                                      createVNode("div", { class: "fs-6 text-gray-800" }, toDisplayString(_ctx.form.currency.symbol) + toDisplayString(_ctx.form.total_amount) + " X INR " + toDisplayString(_ctx.form.conversion_rate) + " = " + toDisplayString(_ctx.form.currency.code) + " " + toDisplayString(_ctx.form.total_amount * _ctx.form.conversion_rate), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mb-0" }, [
                          createVNode("label", { class: "form-label fs-6 fw-bold text-gray-700" }, "Notes"),
                          withDirectives(createVNode("textarea", {
                            name: "notes",
                            class: "form-control form-control-solid",
                            rows: "3",
                            placeholder: "Thanks for your business",
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.notes.$model = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, _ctx.v$.form.notes.$model]
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "flex-lg-auto min-w-lg-300px position-relative" }, [
                createVNode("div", { class: "card position-sticky top-0" }, [
                  createVNode("div", { class: "card-body p-10" }, [
                    createVNode("div", { class: "mb-5" }, [
                      createVNode("label", { class: "form-label fw-bold fs-6 text-gray-700" }, "Currency"),
                      withDirectives(createVNode("select", {
                        class: [
                          "form-control form-control-lg form-control-solid mb-2",
                          _ctx.v$.form.currency.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.currency.$model = $event,
                        onChange: ($event) => _ctx.getCurrencyValue($event)
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.currencies.data, (currency, index) => {
                          return openBlock(), createBlock("option", {
                            key: currency,
                            value: currency
                          }, toDisplayString(currency.label), 9, ["value"]);
                        }), 128))
                      ], 42, ["onUpdate:modelValue", "onChange"]), [
                        [vModelSelect, _ctx.v$.form.currency.$model]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.currency.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "mb-5" }, [
                      createVNode("label", { class: "form-label fw-bold fs-6 text-gray-700" }, "Status"),
                      withDirectives(createVNode("select", {
                        class: [
                          "form-control form-control-solid",
                          _ctx.v$.form.status.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.status.$model = $event
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.status, (status, index) => {
                          return openBlock(), createBlock("option", {
                            key: index,
                            value: status.id
                          }, toDisplayString(status.label), 9, ["value"]);
                        }), 128))
                      ], 10, ["onUpdate:modelValue"]), [
                        [vModelSelect, _ctx.v$.form.status.$model]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.status.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "mb-5" }, [
                      createVNode("label", { class: "form-label fw-bold fs-6 text-gray-700" }, "Type"),
                      withDirectives(createVNode("select", {
                        class: [
                          "form-control form-control-solid",
                          _ctx.v$.form.type.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.type.$model = $event
                      }, [
                        createVNode("option", { value: "Invoice" }, "Invoice"),
                        createVNode("option", { value: "Credit Note" }, "Credit Note"),
                        createVNode("option", { value: "Quote" }, "Quote"),
                        createVNode("option", { value: "Purchase Order" }, "Purchase Order"),
                        createVNode("option", { value: "Receipt" }, "Receipt")
                      ], 10, ["onUpdate:modelValue"]), [
                        [vModelSelect, _ctx.v$.form.type.$model]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.type.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "mb-5" }, [
                      createVNode("label", { class: "form-label fw-bold fs-6 text-gray-700" }, "Issue Date"),
                      withDirectives(createVNode("input", {
                        type: "date",
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.issue_date.$model = $event,
                        class: [
                          "form-control form-control-solid",
                          _ctx.v$.form.issue_date.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        placeholder: "Select date"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, _ctx.v$.form.issue_date.$model]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.issue_date.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "mb-5" }, [
                      createVNode("label", { class: "form-label fw-bold fs-6 text-gray-700" }, "Due Date"),
                      withDirectives(createVNode("input", {
                        type: "date",
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.due_date.$model = $event,
                        class: [
                          "form-control form-control-solid",
                          _ctx.v$.form.due_date.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        placeholder: "Select date"
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, _ctx.v$.form.due_date.$model]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.due_date.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "separator separator-dashed mb-8" }),
                    createVNode("div", { class: "mb-0" }, [
                      createVNode("button", {
                        type: "submit",
                        href: "#",
                        class: "btn btn-primary w-100",
                        id: "kt_invoice_submit_button"
                      }, [
                        createVNode("span", { class: "svg-icon svg-icon-3" }, [
                          (openBlock(), createBlock("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z",
                              fill: "currentColor"
                            }),
                            createVNode("path", {
                              opacity: "0.3",
                              d: "M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z",
                              fill: "currentColor"
                            })
                          ]))
                        ]),
                        createTextVNode(" Save Invoice")
                      ])
                    ])
                  ])
                ])
              ])
            ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Invoice/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
