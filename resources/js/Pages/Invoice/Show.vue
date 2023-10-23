<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: ['invoice'],
    data() {
        return {
            title: `${this.invoice.data.invoice_number}`,
        };
    },
    components: {
        AppLayout,
        Link,
        Head,
    },
    methods: {
        printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
        }
    },
    created() {

    }
});

</script>

<template>
    <Head :title="title" />
    <AppLayout :title="title">
        <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" />
        <template #breadcrumb>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item">
                <Link href="/invoices" class="text-muted text-hover-primary">Invoices</Link>
            </li>
            <li class="breadcrumb-item">
                <span class="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li class="breadcrumb-item">
                <span class="text-muted text-hover-primary">Overview</span>
            </li>
        </template>
        <div class="app-content flex-column-fluid">
            <div class="card" id="printableArea">
                <div class="card-body p-lg-20">
                    <div class="d-flex flex-column flex-xl-row">
                        <div class="flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0">
                            <div class="mt-n1">
                                <div class="d-flex flex-stack pb-10">
                                    <Link href="/">
                                    <img alt="Logo" src="/assets/images/logo-light.png" style="height:100px;">
                                    </Link>
                                </div>
                                <div class="m-0">
                                    <div class="fw-bold fs-3 text-gray-800 mb-8">Invoice #{{ invoice.data.invoice_number }}
                                    </div>
                                    <div class="row g-5 mb-11">
                                        <div class="col-sm-6">
                                            <div class="fw-semibold fs-4 text-gray-600 mb-1">Issue Date:</div>
                                            <div class="fw-bold fs-4 text-gray-800">{{ invoice.data.issue_date }}</div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="fw-semibold fs-4 text-gray-600 mb-1">Due Date:</div>
                                            <div class="fw-bold fs-4 text-gray-800 d-flex align-items-center flex-wrap">
                                                <span class="pe-2">{{ invoice.data.due_date }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-5 mb-12">
                                        <div class="col-sm-6">
                                            <div class="fw-semibold text-gray-600 mb-1">From:</div>
                                            <div class="fw-bold fs-4 text-gray-800 mb-5">A.R Solution</div>
                                            <div class="fw-semibold fs-4 text-gray-600 mb-5">
                                                {{ invoice.data.from_address }}
                                            </div>
                                            <div class="fw-semibold fs-4 text-gray-600">
                                                GSTIN : 07CAYPR9267G1ZN
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="fw-semibold fs-4 text-gray-600 mb-1">To:</div>
                                            <div class="fw-bold fs-4 text-gray-800 mb-5">{{ invoice.data.client.name }}
                                            </div>
                                            <div class="fw-semiboldtext-gray-600 fs-4 mb-5">
                                                {{ invoice.data.to_address }}
                                            </div>
                                            <div class="fw-semibold fs-4 text-gray-600" v-if="tax_number">
                                                GSTIN : {{invoice.data.client.tax_number}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <div class="table-responsive mb-0">
                                            <table class="table table-bordered bordered border">
                                                <thead class="text-center">
                                                    <tr class="bg-gray-300 fs-6 fw-bold text-gray-800">
                                                        <th class="col-3 text-start ps-5">Project Name</th>
                                                        <th class="col-3">CPI</th>
                                                        <th class="col-3">Quantity</th>
                                                        <th class="col-3 text-end pe-5">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-center">
                                                    <tr class="fw-bold text-gray-700 fs-5"
                                                        v-for="(item, index) in invoice.data.items" :key="index">
                                                        <td class="text-start ps-5">
                                                            {{ item.project_name }}
                                                        </td>
                                                        <td>{{ invoice.data.currency.symbol }}{{ item.cpi }}
                                                        </td>
                                                        <td>{{ item.quantity }}</td>
                                                        <td class="text-end text-dark fw-bolder pe-5">
                                                            {{ invoice.data.currency.symbol }}{{ item.cpi * item.quantity }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex pt-10 pb-10">
                                    <div class="col-4">
                                        <div class="table-responsive mb-0">
                                            <table class="table">
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">Account Holder
                                                        </div>
                                                    </td>
                                                    <td class="col-6">
                                                        <div class="fw-bold fs-4 text-gray-800">
                                                            A.R Solution
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">Account Number
                                                        </div>
                                                    </td>
                                                    <td class="col-6">
                                                        <div class="fw-bold fs-4 text-gray-800">
                                                            097863300000931
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">IFSC
                                                        </div>
                                                    </td>
                                                    <td class="col-6">
                                                        <div class="fw-bold fs-4 text-gray-800">
                                                            YESB0000978
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">Account Type
                                                        </div>
                                                    </td>
                                                    <td class="col-6">
                                                        <div class="fw-bold fs-4 text-gray-800">
                                                            Current
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-2"></div>
                                    <div class="col-6">
                                        <div class="table-responsive mb-0">
                                            <table class="table">
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6 text-end">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">Subtotal</div>
                                                    </td>
                                                    <td class="col-6 text-end border-bottom">
                                                        <div class="text-dark fw-bolder">{{
                                                            invoice.data.currency.symbol }}{{ invoice.data.total_amount }}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6 text-end">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">GSTIN
                                                            {{ invoice.data.tax_rate }}%</div>
                                                    </td>
                                                    <td class="col-6 text-end border-bottom">
                                                        <div class="text-dark fw-bolder">INR {{
                                                            parseFloat(invoice.data.total_amount / 118 *
                                                                invoice.data.tax_rate).toFixed(2) }}</div>
                                                    </td>
                                                </tr>
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6 text-end">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">Applied Exchange
                                                            Rate</div>
                                                    </td>
                                                    <td class="col-6 text-end border-bottom">
                                                        <div class="text-dark fw-bolder">
                                                            1 {{ invoice.data.currency.code }} = {{
                                                                invoice.data.conversion_rate }}
                                                            INR</div>
                                                    </td>
                                                </tr>
                                                <tr class="fw-bold text-gray-700 fs-5">
                                                    <td class="col-6 text-end">
                                                        <div class="fw-semibold pe-10 text-gray-600 fs-4">Total</div>
                                                    </td>
                                                    <td class="col-6 text-end border-bottom">
                                                        <div class="text-dark fw-bolder">{{
                                                            invoice.data.currency.symbol }}{{ invoice.data.total_amount }}
                                                            X INR {{ invoice.data.conversion_rate }} =
                                                            {{ invoice.data.currency.code }} {{
                                                                invoice.data.total_amount * invoice.data.conversion_rate }}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center border-top pt-10">
                                    <div class="mw-400px">
                                        <div class="d-flex flex-stack mb-3">
                                            <div class="text-end fw-bold fs-4 text-gray-800">
                                                Contact Details
                                            </div>
                                        </div>
                                        <div class="d-flex flex-stack mb-3">
                                            <div class="fw-semibold pe-10 text-gray-600 fs-4">Contact Number : </div>
                                            <div class="text-end fw-bold fs-4 text-gray-800">+91 75038-76258</div>
                                        </div>
                                        <div class="d-flex flex-stack mb-3">
                                            <div class="fw-semibold pe-10 text-gray-600 fs-4">Contact Email : </div>
                                            <div class="text-end fw-bold fs-4 text-gray-800">rahul.kumar@alrestion.com</div>
                                        </div>
                                    </div>
                                    <div class="mw-400px">
                                        <div class="d-flex flex-stack">
                                            <Link href="/">
                                            <img alt="Logo" src="/assets/images/logo-light.png" style="height:100px;">
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-5">
                <button class="btn btn-success" @click="printDiv('printableArea')"><i class="bi bi-filetype-pdf"></i>Save PDF</button>
        </div>
    </div>
</AppLayout></template>
