<script>
import { defineComponent } from "vue";


export default defineComponent({

})
</script>

<template>
    <div class="row">
        <div class="col-10">
            <input type="text" class="form-control form-control-solid mb-2" name="name[]" placeholder="Item name" />
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-sm btn-icon btn-active-color-primary">
                <svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2" />
                    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2" />
                </svg>
            </button>
        </div>
    </div>
</template>
