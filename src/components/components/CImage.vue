<template>
    <div :class="['c-image select-none', {'c-image-gallery': isGallery}, customClass]" :style="containerStyle">
        <div v-if="isGallery" class="absolute inset-0 w-full h-full">
            <div class="relative overflow-hidden w-full h-full">
                <div
                    class="flex h-full w-full transition-transform duration-300"
                    :style="{ transform: `translateX(-${currentGalleryIndex * 100}%)` }"
                    @mousedown="startDrag"
                    @mousemove="onDrag"
                    @mouseup="endDrag"
                    @mouseleave="endDrag"
                    @touchstart.prevent="startDrag"
                    @touchmove.prevent="onDrag"
                    @touchend="endDrag"
                    @touchcancel="endDrag"
                >
                    <div v-for="(imgSrc, index) in normalizedSrcs" :key="index" class="min-w-full h-full flex-shrink-0">
                        <img
                            v-if="imgSrc"
                            :src="imgSrc"
                            :alt="alt"
                            :class="[
                                'w-full h-full',
                                roundedClass,
                                objectFitClass,
                                transitionClass
                            ]"
                            :style="{ objectPosition: backgroundPosition }"
                            :loading="lazyLoad ? 'lazy' : 'eager'"
                            :width="width"
                            :height="height"
                        />
                    </div>
                </div>
            </div>

            <button
                v-if="currentGalleryIndex > 0 && showGalleryControls"
                @click="prevImage"
                class="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md text-neutral-700 hover:bg-white focus:outline-none z-10"
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                v-if="currentGalleryIndex < normalizedSrcs.length - 1 && showGalleryControls"
                @click="nextImage"
                class="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md text-neutral-700 hover:bg-white focus:outline-none z-10"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div v-if="showGalleryIndicators && normalizedSrcs.length > 1" class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                <div
                    v-for="(_, index) in normalizedSrcs"
                    :key="index"
                    :class="[
                        'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                        currentGalleryIndex === index
                            ? 'bg-white w-4'
                            : 'bg-white/50 hover:bg-white/70 w-1.5'
                    ]"
                    @click="setCurrentImage(index)"
                ></div>
            </div>
        </div>

        <template v-else>
            <img
                v-if="singleSrc && !error"
                :src="loading ? placeholder : singleSrc"
                :alt="alt"
                :class="[
                    responsive ? 'w-full h-auto' : '',
                    roundedClass,
                    objectFitClass,
                    loading ? 'opacity-50' : 'opacity-100',
                    transitionClass,
                    customClass
                ]"
                :style="imgStyle"
                @load="handleSingleImageLoaded"
                @error="handleSingleImageError"
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
        </template>

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
        type: [String, Array],
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
    showGalleryControls: {
        type: Boolean,
        default: true,
    },
    showGalleryIndicators: {
        type: Boolean,
        default: true,
    },
    startIndex: {
        type: Number,
        default: 0,
    },
    customClass: {
        type: String,
        default: "",
    }
});

const emit = defineEmits(['load', 'error', 'change']);

const loading = ref(true);
const error = ref(false);

const currentGalleryIndex = ref(props.startIndex || 0);
const isDragging = ref(false);
const startX = ref(0);
const currentTranslate = ref(0);
const dragThreshold = 50;

const isGallery = computed(() => Array.isArray(props.src) && props.src.length > 1);
const singleSrc = computed(() => Array.isArray(props.src) ? props.src[0] : props.src);
const normalizedSrcs = computed(() => {
    if (Array.isArray(props.src)) {
        return props.src;
    } else if (props.src) {
        return [props.src];
    }
    return [];
});

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

const handleSingleImageLoaded = () => {
    loading.value = false;
    emit('load');
};

const handleSingleImageError = () => {
    loading.value = false;
    error.value = true;
    emit('error');
};

const startDrag = (e) => {
    if (!isGallery.value) return;

    if (e.cancelable)
        e.preventDefault();

    isDragging.value = true;
    startX.value = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    currentTranslate.value = currentGalleryIndex.value * 100;

    const galleryElement = e.currentTarget;
    galleryElement.style.transition = 'none';
};

const onDrag = (e) => {
    if (!isDragging.value || !isGallery.value) return;

    if (e.cancelable)
        e.preventDefault();

    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = (startX.value - currentX) / (e.currentTarget.offsetWidth / 100);
    const newTranslate = Math.max(0, Math.min(currentTranslate.value + diff, (normalizedSrcs.value.length - 1) * 100));

    e.currentTarget.style.transform = `translateX(-${newTranslate}%)`;
};

const endDrag = (e) => {
    if (!isDragging.value || !isGallery.value) return;

    isDragging.value = false;

    const galleryElement = e.currentTarget;
    galleryElement.style.transition = 'transform 300ms';

    const currentX = e.type.includes('mouse') ? e.clientX : e.changedTouches ? e.changedTouches[0].clientX : startX.value;
    const diffX = startX.value - currentX;

    if (Math.abs(diffX) > dragThreshold) {
        if (diffX > 0 && currentGalleryIndex.value < normalizedSrcs.value.length - 1) {
            setCurrentImage(currentGalleryIndex.value + 1);
        } else if (diffX < 0 && currentGalleryIndex.value > 0) {
            setCurrentImage(currentGalleryIndex.value - 1);
        } else {
            galleryElement.style.transform = `translateX(-${currentGalleryIndex.value * 100}%)`;
        }
    } else {
        galleryElement.style.transform = `translateX(-${currentGalleryIndex.value * 100}%)`;
    }
};

const nextImage = () => {
    if (currentGalleryIndex.value < normalizedSrcs.value.length - 1) {
        setCurrentImage(currentGalleryIndex.value + 1);
    }
};

const prevImage = () => {
    if (currentGalleryIndex.value > 0) {
        setCurrentImage(currentGalleryIndex.value - 1);
    }
};

const setCurrentImage = (index) => {
    if (index >= 0 && index < normalizedSrcs.value.length) {
        currentGalleryIndex.value = index;
        emit('change', index);
    }
};

onMounted(() => {
    if (isGallery.value && props.startIndex >= 0 && props.startIndex < normalizedSrcs.value.length)
        currentGalleryIndex.value = props.startIndex;

    if (!isGallery.value && singleSrc.value) {
        const img = new Image();
        img.onload = handleSingleImageLoaded;
        img.onerror = handleSingleImageError;
        img.src = singleSrc.value;
    }
});

watch(() => props.src, () => {
    if (!isGallery.value && singleSrc.value) {
        loading.value = true;
        error.value = false;

        const img = new Image();
        img.onload = handleSingleImageLoaded;
        img.onerror = handleSingleImageError;
        img.src = singleSrc.value;
    }
});

watch(() => props.startIndex, (newIndex) => {
    if (isGallery.value && newIndex >= 0 && newIndex < normalizedSrcs.value.length) {
        currentGalleryIndex.value = newIndex;
    }
});
</script>

<style scoped>
.c-image {
    display: inline-block;
    position: relative;
}

.c-image-gallery {
    width: 100%;
    height: 100%;
}

.c-image img {
    display: block;
}
</style>
