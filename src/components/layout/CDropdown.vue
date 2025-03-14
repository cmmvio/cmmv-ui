<template>
    <div class="relative inline-block text-center">
        <div class="flex items-center justify-center">
            <button
                type="button"
                @click="toggleDropdown"
                :disabled="disabled"
                class="focus:outline-none flex items-center justify-center"
                :class="{'icon-button': isIconActivator}"
            >
                <slot name="activator">
                    <span>{{ selectedLabel || placeholder }}</span>
                </slot>
            </button>
        </div>

        <transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 z-40 bg-transparent" @click="closeDropdown"></div>
        </transition>

        <transition :name="transitionEffect">
            <div v-if="isOpen"
                class="absolute z-50 mt-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-lg rounded-md"
                :class="[positionClasses, width]"
                :style="positionStyle"
            >
                <!-- Custom content slot -->
                <slot name="content">
                    <ul class="py-1 text-neutral-700 dark:text-neutral-300 text-left">
                        <template v-if="hasSlotItems">
                            <slot name="items"></slot>
                        </template>
                        <template v-else>
                            <li v-for="option in options" :key="option.value"
                                @click="selectOption(option)"
                                class="px-4 py-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition text-sm"
                            >
                                <!-- Router link if to is provided -->
                                <router-link v-if="option.to" :to="option.to" class="block w-full h-full">
                                    <slot name="option" :data="option">
                                        {{ option.label }}
                                    </slot>
                                </router-link>

                                <!-- Standard link if href is provided -->
                                <a v-else-if="option.href" :href="option.href" class="block w-full h-full">
                                    <slot name="option" :data="option">
                                        {{ option.label }}
                                    </slot>
                                </a>

                                <!-- Regular item -->
                                <span v-else class="block w-full h-full">
                                    <slot name="option" :data="option">
                                        {{ option.label }}
                                    </slot>
                                </span>
                            </li>
                        </template>
                    </ul>
                </slot>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.icon-button {
    line-height: 0;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<script setup lang="ts">
import {
    ref, computed, defineProps,
    defineEmits, defineExpose, useSlots, onMounted
} from "vue";

import type { PropType } from "vue";

interface DropdownOption {
    value: string | number;
    label: string;
    to?: string;
    href?: string;
    action?: () => void;
}

const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: ""
    },
    options: {
        type: Array as PropType<DropdownOption[]>,
        required: true,
        default: () => []
    },
    placeholder: {
        type: String,
        required: false,
        default: "Select an option"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        default: "bottom-center"
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-zinc-900"
    },
    textColor: {
        type: String,
        default: "text-neutral-800 dark:text-white"
    },
    borderColor: {
        type: String,
        default: "border-neutral-300 dark:border-neutral-900"
    },
    rounded: {
        type: String,
        default: "rounded-md"
    },
    width: {
        type: String,
        default: "w-56"
    }
});

const emit = defineEmits(["update:modelValue", "select"]);

const isOpen = ref(false);
const slots = useSlots();
const hasSlotItems = computed(() => !!slots.items);
const selectedOption = computed(() => props.options.find(option => option.value === props.modelValue));
const selectedLabel = computed(() => selectedOption.value ? selectedOption.value.label : "");
const isIconActivator = ref(false);

// Verifica se o ativador é um ícone
onMounted(() => {
    if (slots.activator) {
        const activatorEl = document.querySelector('.icon-button');
        if (activatorEl) {
            // Se tiver apenas um filho SVG ou com classe que contém 'icon'
            const children = activatorEl.children;
            if (children.length === 1) {
                const child = children[0];
                if (child.tagName === 'SVG' ||
                    (child.className && typeof child.className === 'string' &&
                    (child.className.includes('icon') || child.className.includes('Icon')))) {
                    isIconActivator.value = true;
                }
            }
        }
    }
});

const toggleDropdown = () => {
    if (!props.disabled) isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
    isOpen.value = false;
};

const selectOption = (option: DropdownOption) => {
    emit("update:modelValue", option.value);
    emit("select", option);

    if (option.action) {
        option.action();
    }

    isOpen.value = false;
};

const transitionEffect = computed(() => "slide-fade");

const positionClasses = computed(() => {
    switch (props.position) {
        case "top-left":
            return "bottom-full mb-2 left-0";
        case "top-right":
            return "bottom-full mb-2 right-0";
        case "top-center":
            return "bottom-full mb-2 left-1/2";
        case "bottom-right":
            return "top-full right-0";
        case "bottom-center":
            return "top-full left-1/2";
        default:
            return "top-full left-0";
    }
});

const positionStyle = computed(() => {
    return props.position === "top-center" || props.position === "bottom-center"
        ? "transform: translateX(-50%);"
        : "";
});

defineExpose({ close: closeDropdown });
</script>
