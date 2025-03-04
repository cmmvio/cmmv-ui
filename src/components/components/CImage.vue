<template>
    <div class="c-image" :class="[customClass]" :style="containerStyle">
        <img
            v-if="src && !error"
            :src="loading ? placeholder : src"
            :alt="alt"
            :class="[
                responsive ? 'w-full h-auto' : '',
                roundedClass,
                objectFitClass,
                loading ? 'opacity-50' : 'opacity-100',
                transitionClass
            ]"
            :style="imgStyle"
            @load="handleImageLoaded"
            @error="handleImageError"
            :loading="lazyLoad ? 'lazy' : 'eager'"
            :width="width"
            :height="height"
        />

        <div v-if="loading && showLoader" class="absolute inset-0 flex items-center justify-center">
            <c-loader :size="loaderSize" :color="loaderColor" />
        </div>

        <div v-if="error" class="items-center justify-center w-full h-full bg-gray-100 p-4 rounded-md">
            <div class="text-center ">
                <icon-exclamation-circle class="mx-auto h-8 w-8 text-gray-400" />
                <span class="mt-2 block text-sm text-gray-500">{{ errorText }}</span>
            </div>
        </div>

        <div v-if="caption" class="mt-2 text-sm text-gray-500">
            {{ caption }}
        </div>
    </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, onMounted, watch } from "vue";
import CLoader from "./CLoader.vue";
import IconExclamationCircle from "@components/icons/IconExclamationCircle.vue";

const props = defineProps({
    src: {
        type: String,
        default: "",
    },
    alt: {
        type: String,
        default: "",
    },
    width: {
        type: [String, Number],
        default: null,
    },
    height: {
        type: [String, Number],
        default: null,
    },
    cover: {
        type: Boolean,
        default: false,
    },
    contain: {
        type: Boolean,
        default: false,
    },
    responsive: {
        type: Boolean,
        default: true,
    },
    rounded: {
        type: [String, Boolean],
        default: false,
        validator: (value) => {
            if (typeof value === 'boolean') return true;
            return ['sm', 'md', 'lg', 'xl', 'full', 'none'].includes(value);
        }
    },
    lazyLoad: {
        type: Boolean,
        default: true,
    },
    placeholder: {
        type: String,
        default: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23cccccc'%3E%3Cpath d='M4.5 10.5c0-1 .828-1.828 1.828-1.828s1.828.828 1.828 1.828S7.328 12.328 6.328 12.328 4.5 11.5 4.5 10.5zm7.172-1.828c-1 0-1.828.828-1.828 1.828s.828 1.828 1.828 1.828S13.5 11.5 13.5 10.5s-.828-1.828-1.828-1.828zm5.344 0c-1 0-1.828.828-1.828 1.828s.828 1.828 1.828 1.828S18.844 11.5 18.844 10.5s-.828-1.828-1.828-1.828z'/%3E%3C/svg%3E",
    },
    showLoader: {
        type: Boolean,
        default: true,
    },
    loaderSize: {
        type: [String, Number],
        default: "md",
    },
    loaderColor: {
        type: String,
        default: "primary",
    },
    errorText: {
        type: String,
        default: "Failed to load image",
    },
    caption: {
        type: String,
        default: "",
    },
    customClass: {
        type: String,
        default: "",
    },
    backgroundPosition: {
        type: String,
        default: "center",
    },
    transition: {
        type: Boolean,
        default: true,
    },
    aspectRatio: {
        type: [String, Number],
        default: null,
    },
});

const emit = defineEmits(['load', 'error']);

const loading = ref(true);
const error = ref(false);

const objectFitClass = computed(() => {
    if (props.cover) return 'object-cover';
    if (props.contain) return 'object-contain';
    return '';
});

const roundedClass = computed(() => {
    if (props.rounded === true) return 'rounded';
    if (props.rounded === 'sm') return 'rounded-sm';
    if (props.rounded === 'md') return 'rounded-md';
    if (props.rounded === 'lg') return 'rounded-lg';
    if (props.rounded === 'xl') return 'rounded-xl';
    if (props.rounded === 'full') return 'rounded-full';
    return '';
});

const transitionClass = computed(() => {
    return props.transition ? 'transition-opacity duration-300 ease-in-out' : '';
});

const containerStyle = computed(() => {
    const style = {};

    if (props.aspectRatio) {
        style.position = 'relative';
        style.paddingBottom = typeof props.aspectRatio === 'string'
            ? props.aspectRatio
            : `${(1 / props.aspectRatio) * 100}%`;
        style.height = '0';
        style.overflow = 'hidden';
    }

    return style;
});

const imgStyle = computed(() => {
    const style = {};

    if (props.aspectRatio) {
        style.position = 'absolute';
        style.top = '0';
        style.left = '0';
        style.width = '100%';
        style.height = '100%';
        style.objectPosition = props.backgroundPosition;
    }

    return style;
});

const handleImageLoaded = () => {
    loading.value = false;
    emit('load');
};

const handleImageError = () => {
    loading.value = false;
    error.value = true;
    emit('error');
};

onMounted(() => {
    if (props.src) {
        const img = new Image();
        img.onload = handleImageLoaded;
        img.onerror = handleImageError;
        img.src = props.src;
    }
});

watch(() => props.src, (newSrc) => {
    if (newSrc) {
        loading.value = true;
        error.value = false;

        const img = new Image();
        img.onload = handleImageLoaded;
        img.onerror = handleImageError;
        img.src = newSrc;
    }
});
</script>

<style scoped>
.c-image {
    display: inline-block;
    position: relative;
}

.c-image img {
    display: block;
}
</style>
