<template>
    <div class="c-autocomplete relative w-full">
        <div class="relative">
            <label 
                :for="id" 
                class="c-input-label absolute left-3 text-sm transition-all duration-200 ease-in-out pointer-events-none"
                :class="[{ 
                    'c-input-label--active': isActive || currentValue,
                    'bg-white dark:bg-zinc-900': variant === 'default' && !disabled && bgColor === '',
                }, bgColor, textColor ? textColor : 'text-gray-500 dark:text-gray-400']"
            >
                {{ label }}
            </label>
  
            <input
                :id="id"
                type="text"
                :class="[sizes[size], roundedStyles[rounded], variantStyles[variant], bgColor ? bgColor : variantColors[variant], textColor, borderColorClass]"
                class="c-input-field block w-full border shadow-sm pt-4 pb-2 outline-none"
                :placeholder="placeholder"
                :value="currentInput"
                @input="handleInput"
                @focus="activateLabel"
                @blur="deactivateLabel"
                :disabled="disabled"
            />
  
            <ul 
                v-if="isActive && filteredOptions.length > 0" 
                class="absolute z-50 z-50 w-full bg-white border border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 mt-1 max-h-40 overflow-auto"
            >
                <li 
                    v-for="option in filteredOptions" 
                    :key="option.value" 
                    @click="selectOption(option)"
                    class="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-700">
                    {{ option.label }}
                </li>
            </ul>
        </div>
  
        <!-- Hint/Error Message -->
        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, defineExpose, watch } from 'vue';
  
const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: false,
        default: "",
    },
    options: {
        type: Array,
        required: true,
        default: () => [],
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
        default: "",
    },
    size: {
        type: String,
        default: "md",
    },
    rounded: {
        type: String,
        default: "default",
    },
    variant: {
        type: String,
        default: "default",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    hint: {
        type: String,
        required: false,
        default: null,
    },
    hiddenHint: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
        required: false,
        default: null,
    },
    bgColor: {
        type: String,
        required: false,
        default: "",
    },
    textColor: {
        type: String,
        required: false,
        default: "",
    },
    borderColor: {
        type: String,
        required: false,
        default: "focus:ring focus:ring-zinc-700 focus:ring-opacity-50",
    },
});
  
const emit = defineEmits(["update:modelValue"]);
  
const currentValue = ref(props.modelValue);
const currentInput = ref("");
const isActive = ref(false);
const errorMessage = ref<string | null>(null);
  
watch(() => props.modelValue, (newValue) => {
    currentValue.value = newValue;
    const selectedOption = props.options.find((option) => option.value === newValue);
    currentInput.value = selectedOption ? selectedOption.label : "";
});
  
const filteredOptions = computed(() => {
    if (!currentInput.value) return props.options;
    return props.options.filter((option) =>
        option.label.toLowerCase().includes(currentInput.value.toLowerCase())
    );
});
  
const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-4 text-base",
};
  
const roundedStyles: Record<string, string> = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};
  
const variantStyles: Record<string, string> = {
    default: "border-none",
    outlined: "border-2 border-zinc-700",
    filled: "border-1 border-zinc-900 shadow-md",
};
  
const variantColors: Record<string, string> = {
    default: "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-white",
    outlined: "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white",
    filled: "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white",
};
  
const borderColorClass = computed(() => props.borderColor);
const hasError = computed(() => !!errorMessage.value);
  
const handleInput = (event: Event) => {
    currentInput.value = (event.target as HTMLInputElement).value;
};
  
const selectOption = (option: { value: string | number; label: string }) => {
    currentValue.value = option.value;
    currentInput.value = option.label;
    emit("update:modelValue", option.value);
    isActive.value = false;
};
  
const activateLabel = () => {
    isActive.value = true;
};
  
const deactivateLabel = () => {
    setTimeout(() => {
        if (!currentInput.value) isActive.value = false;
    }, 100);
};
  
defineExpose({
    value: currentValue,
});
</script>
  
<style scoped>
.c-autocomplete {
    position: relative;
}
  
.c-autocomplete ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 0.375rem;
}

.c-autocomplete ul {
    list-style: none;
}
  
.c-autocomplete ul li {
    transition: background-color 0.2s;
    list-style: none;
    margin: 0;
}
</style>
  