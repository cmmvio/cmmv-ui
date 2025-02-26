<template>
    <div class="c-dropdown relative w-full">
        <div class="relative">
            <div
                v-if="isActive"
                class="fixed inset-0 z-40 bg-transparent"
                @click="closeDropdown"
            ></div>

            <div class="relative flex items-center z-30" @click="toggleDropdown">
                <div v-if="hasIcon" class="absolute inset-y-0 left-0 flex items-center pl-3 z-30">
                    <slot name="icon"></slot>
                </div>

                <button
                    :id="id"
                    type="button"
                    :class="[sizes[size], roundedStyles[rounded], variantStyles[variant], bgColor ? bgColor : variantColors[variant], textColor,
                        { 'opacity-50': disabled, 'cursor-not-allowed': disabled, 'pl-10': hasIcon }]"
                    class="c-dropdown-field block w-full border shadow-sm pt-3 pb-2 outline-none text-left"
                    :disabled="disabled"
                >
                    <span v-if="$slots.selected && selectedLabel">
                        <slot name="selected" :data="selectedOption"></slot>
                    </span>
                    <span v-else-if="selectedLabel">
                        {{ selectedLabel }}
                    </span>
                    <span v-else>
                        {{ placeholder }}
                    </span>
                </button>

                <div
                    class="absolute inset-y-0 right-0 flex items-center px-2 transition-transform duration-300"
                    :class="{ 'rotate-180': isActive, 'opacity-50': disabled, 'cursor-not-allowed': disabled }"
                >
                    <icon-chevron-down class="w-6 h-6 text-neutral-800 dark:text-white" aria-hidden="true" />
                </div>
            </div>

            <!-- Lista de Opções com transição -->
            <transition name="fade">
                <div
                    v-if="isActive"
                    class="absolute z-50 w-full bg-white border border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 mt-2 max-h-40 overflow-auto shadow-lg rounded-md"
                >
                    <ul>
                        <li
                            v-for="option in options"
                            :key="option.value"
                            @click="selectOption(option)"
                            class="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors z-60 "
                        >
                            <span v-if="$slots.option">
                                <slot name="option" :data="option"></slot>
                            </span>
                            <span v-else>
                                {{ option.label }}
                            </span>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>

    </div>
</template>

<style scoped>
.c-dropdown {
    position: relative;
}

.c-dropdown ul {
    list-style: none;
    padding: 0;
    border-radius: 0.375rem;
}

.c-dropdown ul li {
    transition: background-color 0.2s;
}

.c-dropdown-label {
    transform: translate(0, -50%);
    z-index: 1;
    left: 0.75rem;
}

.c-dropdown-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>

<script setup lang="ts">
import { ref, computed, defineExpose, useSlots } from 'vue';
import type { PropType } from "vue";

const slots = useSlots();
const hasIcon = computed(() => !!slots.icon);

interface DropdownOption {
    value: string | number;
    label: string;
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
    label: {
        type: String,
        required: false
    },
    placeholder: {
        type: String,
        required: false,
        default: "Select an option"
    },
    size: {
        type: String,
        default: "md"
    },
    rounded: {
        type: String,
        default: "default"
    },
    variant: {
        type: String,
        default: "default"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    hint: {
        type: String,
        required: false,
        default: null
    },
    hintFixed: {
        type: Boolean,
        default: false
    },
    hiddenHint: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: false,
        default: null
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-white dark:bg-neutral-900"
    },
    textColor: {
        type: String,
        required: false,
        default: ""
    },
    borderColor: {
        type: String,
        required: false,
        default: "focus:ring focus:ring-zinc-700 focus:ring-opacity-50"
    },
});

const emit = defineEmits(["update:modelValue"]);
const isActive = ref(false);
const selectedOption = ref<any>(null);

const selectedLabel = computed(() => {
    selectedOption.value = props.options.find((option) => option.value === props.modelValue);
    return selectedOption.value ? selectedOption.value?.label : "";
});

const toggleDropdown = () => {
    if (!props.disabled) isActive.value = !isActive.value;
};

const closeDropdown = () => {
    isActive.value = false;
};

const selectOption = (option: { value: string | number; label: string }) => {
    emit("update:modelValue", option.value);
    isActive.value = false;
};

const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-4 text-base"
};

const roundedStyles = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full"
};

const variantStyles = {
    default: "border-neutral-300 dark:border-neutral-900",
    outlined: "border-2 border-zinc-700",
    filled: "border-1 border-zinc-900 shadow-md"
};

const variantColors = {
    default: "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-white",
    outlined: "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white",
    filled: "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white"
};

defineExpose({ value: props.modelValue });
</script>
