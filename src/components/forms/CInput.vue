<template>
    <div class="c-input relative w-full mb-2">
        <label v-if="label" :for="id"
            class="c-input-label text-sm"
            :class="[{
                'absolute transition-all duration-200 ease-in-out drop-shadow-xs pointer-events-none': floatingLabel,
                'c-input-label--active': floatingLabel && (isActive || currentValue),
                'top-[50%] -translate-y-1/2 left-3': floatingLabel && (!isActive && !currentValue),
                'top-[30%]': floatingLabel && !isActive && hasError,
                'block mb-1': !floatingLabel,
                'pl-10': hasIcon && floatingLabel && (!isActive && !currentValue),
                'ml-10 -mt-2': hasIcon && floatingLabel && ((isActive || currentValue))
            },
            textColor ? textColor : 'text-gray-500 dark:text-gray-400',
            !disabled && floatingLabel ? (bgColor ? bgColor : variantColors[variant]) : '',
            floatingLabel ? 'px-1' : '',
            customClass]">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>

        <div class="relative flex items-center">
            <div v-if="hasIcon" class="absolute inset-y-0 left-0 flex items-center pl-3 z-20">
                <slot name="icon"></slot>
            </div>

            <input :id="id" :type="inputType" :name="name"
                :placeholder="floatingLabel ? (isActive ? (placeholder || '') : '') : ((placeholder || '') + (required && placeholder ? ' *' : ''))"
                :value="modelValue"
                :class="[sizes[size], roundedStyles[rounded], variantStyles[variant],
                floatingLabel ? (bgColor ? bgColor : variantColors[variant]) : 'bg-transparent',
                textColor,
                { 'ring-red-500 ring-2': hasError, 'opacity-30': disabled, 'cursor-not-allowed': disabled, 'pl-12': hasIcon }, customClass,
                { 'pt-4': floatingLabel && !hasIcon, 'pb-3': hasIcon, 'pt-3': hasIcon, 'px-2': currencyMask }, shadow,
                'min-h-[38px]']"
                class="c-input-field block w-full border pb-1 outline-none" @keyup="handleInput"
                @change="handleInput" @focus="activateLabel" @blur="deactivateLabel" :disabled="disabled"
                :aria-invalid="hasError"
                v-money3="currencyMask ? currencyMask : undefined"
                v-if="currencyMask" />

            <input :id="id" :type="inputType" :name="name"
                :placeholder="floatingLabel ? (isActive ? (placeholder || '') : '') : ((placeholder || '') + (required && placeholder ? ' *' : ''))"
                :value="modelValue"
                :class="[sizes[size], roundedStyles[rounded], variantStyles[variant],
                floatingLabel ? (bgColor ? bgColor : variantColors[variant]) : 'bg-transparent',
                textColor,
                { 'ring-red-500 ring-2': hasError, 'opacity-30': disabled, 'cursor-not-allowed': disabled, 'pl-12': hasIcon }, customClass,
                { 'pt-4': floatingLabel && !hasIcon, 'pb-3': hasIcon, 'pt-3': hasIcon }, shadow,
                'min-h-[38px]']"
                class="c-input-field block w-full border pb-1 outline-none" @keyup="handleInput"
                @change="handleInput" @focus="activateLabel" @blur="deactivateLabel" :disabled="disabled"
                :aria-invalid="hasError"
                v-mask="mask || undefined"
                v-else-if="mask" />

            <input :id="id" :type="inputType" :name="name"
                :placeholder="floatingLabel ? (isActive ? (placeholder || '') : '') : ((placeholder || '') + (required && placeholder ? ' *' : ''))"
                :value="modelValue"
                :class="[sizes[size], roundedStyles[rounded], variantStyles[variant],
                floatingLabel ? (bgColor ? bgColor : variantColors[variant]) : 'bg-transparent',
                textColor,
                { 'ring-red-500 ring-2': hasError, 'opacity-30': disabled, 'cursor-not-allowed': disabled, 'pl-12': hasIcon }, customClass,
                { 'pt-4': floatingLabel && !hasIcon, 'pb-3': hasIcon, 'pt-3': hasIcon }, shadow,
                'min-h-[38px]']"
                class="c-input-field block w-full border pb-1 outline-none" @keyup="handleInput"
                @change="handleInput" @focus="activateLabel" @blur="deactivateLabel" :disabled="disabled"
                :aria-invalid="hasError"
                v-else />

            <button v-if="clearable && currentValue !== ''" type="button"
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-600"
                @click="clearInput">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <div v-if="loading" class="absolute inset-y-0 right-0 flex items-center px-2 mr-1 text-gray-400">
                <c-progress-circular indeterminate :size="20" :fillColor="'#666'" :width="2" />
            </div>

            <button v-if="type === 'password'" type="button" class="absolute inset-y-0 right-0 flex items-center px-2"
                @click="togglePasswordVisibility" :aria-pressed="showPassword" aria-label="Toggle password visibility"
                role="switch">
                <icon-eye-slash
                    :color="[textColor ? textColor : 'text-neutral-400 dark:text-neutral-400 hover:text-neutral-200']"
                    tabindex="-1" v-if="showPassword"></icon-eye-slash>

                <icon-eye
                    :color="[textColor ? textColor : 'text-neutral-400 dark:text-neutral-400 hover:text-neutral-200']"
                    tabindex="-1" v-else></icon-eye>
            </button>
        </div>

        <div class="mt-1" v-if="!hiddenHint && hasError">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
        </div>
    </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

.c-input {
    position: relative;
}

.c-input-label {
    z-index: 1;
}

/* Apenas aplicado quando floatingLabel=true */
.c-input-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}

.scale-75 {
    transform: scale(0.75);
}

.c-input-field {
    transition: border-color 0.3s, box-shadow 0.3s, padding-top 0.3s;
    position: relative;
}

.c-input .c-input-field.pl-10 {
    padding-left: 2.5rem;
}

.c-input [slot="icon"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.c-progress-circular {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<script lang="ts" setup>
import { ref, computed, defineExpose, watch, useSlots } from 'vue';
import { mask as vMask } from 'vue-the-mask';

const slots = useSlots();
const hasIcon = computed(() => !!slots.icon);

const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: ""
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        default: "text"
    },
    name: {
        type: String,
        required: false,
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
    clearable: {
        type: Boolean,
        default: false
    },
    rules: {
        type: Array,
        default: () => []
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
        default: null,
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
    loading: {
        type: Boolean,
        default: false,
    },
    floatingLabel: {
        type: Boolean,
        default: false,
    },
    customClass: {
        type: String,
        required: false,
        default: ""
    },
    required: {
        type: Boolean,
        default: false
    },
    mask: {
        type: [Object, Array, Function, String],
        default: null
    },
    currencyMask: {
        type: Object,
        default: null
    },
    shadow: {
        type: String,
        default: "shadow-sm"
    }
});

const emit = defineEmits(["update:modelValue"]);

const currentValue = ref(props.modelValue);
const showPassword = ref(false);

watch(() => props.modelValue, (newValue) => {
    currentValue.value = newValue;
});

watch(currentValue, (newValue) => {
    emit("update:modelValue", newValue);
});

const inputType = computed(() => (props.type === "password" && showPassword.value ? "text" : props.type));
const errorMessage = ref<string | null | boolean>(null);
const isActive = ref(false);
const changed = ref(false);

const generatedId = `c-input-${Math.random().toString(36).substr(2, 9)}`;
const id = computed(() => props.id || generatedId);

const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-2 py-2 text-base",
};

const roundedStyles: Record<string, string> = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};

const variantStyles: Record<string, string> = {
    default: "border border-gray-300 dark:border-neutral-900",
    outlined: "border border-2 border-zinc-700",
    filled: "border border-1 border-zinc-900 shadow-md",
};

const variantColors: Record<string, string> = {
    default: "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-white",
    outlined: "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white",
    filled: "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white",
}

const borderColorClass = computed(() => props.borderColor);
const hasError = computed(() => !!errorMessage.value && errorMessage.value !== true);

const handleInput = (event: Event) => {
    currentValue.value = (event.target as HTMLInputElement).value;

    if (!validate() || !changed.value)
        errorMessage.value = null;

    changed.value = true;

    if (currentValue.value) isActive.value = true;
};

const clearInput = () => {
    currentValue.value = "";
    errorMessage.value = null;
    isActive.value = false;
};

const validateShowError = () => {
    errorMessage.value = null;

    if (!changed.value) return false;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error)
            errorMessage.value = error;
    }
};

const validate = () => {
    errorMessage.value = null;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error) {
            validateShowError();
            return true;
        }
    }

    return false;
};

const activateLabel = () => {
    isActive.value = true;
};

const deactivateLabel = () => {
    if (!currentValue.value)
        isActive.value = false;
};

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

defineExpose({
    validate,
    value: currentValue,
});
</script>
