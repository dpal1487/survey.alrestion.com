<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        default: "Modal Title Here"
    },
    isFullscreen: {
        type: Boolean,
        isFullscreen: true,

    },
    id: {
        type: String,
        default: ""
    }
});




const emit = defineEmits(['close', 'onhide']);



watch(() => props.show, () => {
    if (props.show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = null;
    }
});

const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape' && props.show) {
        close();
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
    return {
        'sm': 'sm:max-w-sm',
        'md': 'sm:max-w-md',
        'lg': 'sm:max-w-lg',
        'xl': 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
    }[props.maxWidth];
});
</script>

<template>
    <div :class="`modal fade ${show ? 'show d-block' : 'd-none'}`" tabindex="-1" :aria-hidden="show ? false : true"
        :style="`${show && 'background: rgba(0, 0, 0, 0.3)'}`">
        <!--begin::Modal header-->
        <div
            :class="` modal-dialog ${isFullscreen ? 'modal-fullscreen' : 'modal-dialog-centered mw-950px modal-dialog'}  `">

            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header flex-stack h-60px">
                    <!--begin::Title-->
                    <h2>{{ title }}</h2>
                    <!--end::Title-->
                    <div class="d-flex ">
                        <div class="mx-10">
                            <a target="_blank" :href="`/sampling/${id}/create`" class="btn btn-primary btn-sm"><i
                                class="bi bi-plus-circle"></i>Add New Link</a>
                            <!-- 
                            <Link href="/project/create" class="btn btn-sm fw-bold btn-primary">
                            <i class="bi bi-plus-circle"></i>Add New Project</Link> -->
                        </div>
                        <!--begin::Close-->
                        <button type="button" @click="$emit('onhide')" class="btn btn-sm btn-icon btn-active-color-primary">
                            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                            <span class="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                        transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </button>
                        <!--end::Close-->
                    </div>

                </div>

                <!--begin::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body scroll-y position-relative" style="min-height: 400px;">
                    <slot v-if="show" />
                </div>
            </div>
        </div>
    </div>
</template>
