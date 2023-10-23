<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props: ["model"],
    data(){
        return {
            showLabel: true,
        }
    },
    methods: {
        handleLabelClick(event) {
            const target = event.currentTarget;
            const input = target.previousSibling;
            if(input) {
                input.focus();
                input.click();
                this.showLabel = false;
            }
        }
    }
})
</script>

<template>
    <div class="w-100 mw-150px position-relative" style="height: fit;">
        <!--begin::Select2-->
        <input type="date" class="form-control form-control-solid" placeholder="Select User" :v-model="model" />
        <div v-if="showLabel" class="position-absolute top-0  start-0 end-0 bottom-0 w-full h-100" @click="(event) => handleLabelClick(event)">
            <div class="w-100px h-100 ps-4 text-muted d-flex align-items-center "
                style="background-color: var(--kt-input-solid-bg); border-top: 1px solid var(--kt-input-border-color); border-left: 1px solid var(--kt-input-border-color); border-bottom: 1px solid var(--kt-input-border-color); border-radius: 8px;">
                Start date</div>
        </div>
        <!--end::Select2-->
    </div>
</template>