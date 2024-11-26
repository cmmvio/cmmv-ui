<template>
    <div class="c-input relative w-full">
        <label 
            :for="id"
            class="c-input-label absolute left-3 text-sm p-0.5 text-gray-500 dark:text-gray-400  transition-all duration-200 ease-in-out pointer-events-none"
            :class="{ 
                'c-input-label--active': isActive, 
                'top-1/3': modelValue !== undefined && modelValue !== null,
                'bg-white dark:bg-zinc-900': variant === 'default',
                'bg-white dark:bg-zinc-800': variant === 'outlined'
            }"
        >
            {{ label }}
        </label>

        <div class="relative">
            <input
                :id="id"
                :type="type"
                :name="name"
                :placeholder="isActive ? placeholder : ''"
                :value="modelValue"
                :class="[sizes[size], roundedStyles[rounded], variantStyles[variant], 
                    { 'border-red-500': hasError, 'opacity-50': disabled, 'cursor-not-allowed': disabled }]"
                class="c-input-field text-zinc-950 dark:text-white block w-full border shadow-sm pt-4 pb-2"
                @keyup="handleInput"
                @change="handleInput"
                @focus="activateLabel"
                @blur="deactivateLabel"
                :disabled="disabled"
                :aria-invalid="hasError"
            />
            
            <button
                v-if="clearable"
                type="button"
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-600"
                @click="clearInput"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
       
        <div class="mt-1 h-6" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
        </div>
    </div>
</template>

<style scoped>
.c-input {
    margin-bottom: 1rem;
}

.c-input-label {
    transform: translate(0, -50%);
    z-index: 1;
    left: 0.75rem;
}

.c-input-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
    color: var(--color-indigo-500); 
}

.c-input-field {
    transition: border-color 0.3s, box-shadow 0.3s, padding-top 0.3s;
    position: relative;
}
</style>

<script setup lang="ts">
import { ref, computed, defineExpose, watch } from 'vue';

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
});

const emit = defineEmits(["update:modelValue"]);

const currentValue = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
    currentValue.value = newValue;
});

watch(currentValue, (newValue) => {
    emit("update:modelValue", newValue);
});

const errorMessage = ref<string | null>(null);
const isActive = ref(false);
const changed = ref(false);

const generatedId = `c-input-${Math.random().toString(36).substr(2, 9)}`;
const id = computed(() => props.id || generatedId);

const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
};

const roundedStyles = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};

const variantStyles = {
    default: "bg-zinc-200 dark:bg-zinc-900 border-none ",
    outlined: "bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-500",
    filled: "bg-zinc-200 dark:bg-zinc-800 border-none shadow-md",
};

const hasError = computed(() => !!errorMessage.value);

const handleInput = (event: Event) => {
    currentValue.value = (event.target as HTMLInputElement).value;

    if(!validate() || !changed.value)
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

    if(!changed.value) return false;

    for (const rule of props.rules) {
        const error = rule(currentValue.value);

        if (error) 
            errorMessage.value = error;
    }
};

const validate = () => {
    errorMessage.value = null;

    for (const rule of props.rules) {
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

defineExpose({
    validate,
    value: currentValue,
});
</script>
