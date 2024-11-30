<template>
    <div class="c-textarea relative w-full">
        <!-- Label -->
        <label 
            :for="id"
            class="c-textarea-label absolute left-3 text-sm transition-all duration-200 ease-in-out pointer-events-none"
            :class="[
                {
                    'c-textarea-label--active': isActive,
                    'top-[50%] -translate-y-1/2': !isActive && !currentValue,
                    'top-1': currentValue !== undefined && currentValue !== '',
                },
                textColor ? textColor : 'text-gray-500 dark:text-gray-400'
            ]"
        >
            {{ label }}
        </label>
    
        <!-- Textarea -->
        <textarea
            :id="id"
            :name="name"
            :placeholder="isActive ? placeholder : ''"
            :maxlength="maxlength"
            :value="currentValue"
            :class="[
                sizes[size], roundedStyles[rounded], variantStyles[variant], 
                bgColor, textColor, borderColorClass, { 'opacity-50': disabled, 'resize-none': !resize }
            ]"
            class="c-textarea-field block w-full border shadow-sm pt-4 pb-2 outline-none"
            @input="handleInput"
            @focus="activateLabel"
            @blur="deactivateLabel"
            :disabled="disabled"
        ></textarea>
    
        <!-- Character Counter -->
        <div v-if="lengthCount" class="absolute bottom-1 right-3 text-xs text-gray-500">
            {{ currentValue.length }} / {{ maxlength }}
        </div>
    </div>
</template>

<style scoped>
.c-textarea {
  margin-bottom: 1rem;
  position: relative;
}

.c-textarea-label {
  transform: translate(0, -50%);
  z-index: 1;
  left: 0.75rem;
}

.c-textarea-label--active {
  transform: translate(0, -2rem) scale(0.85);
  top: 0.75rem;
  left: 0.3rem;
}

.c-textarea-field {
  transition: border-color 0.3s, box-shadow 0.3s, padding-top 0.3s;
  position: relative;
}

.c-textarea-field.resize-none {
  resize: none;
}
</style>
  
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
  
const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: "",
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    size: {
        type: String,
        default: "md", // sm | md | lg
    },
    rounded: {
        type: String,
        default: "default", // none | default | full
    },
    variant: {
        type: String,
        default: "default", // default | outlined | filled
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
    disabled: {
        type: Boolean,
        default: false,
    },
    resize: {
        type: Boolean,
        default: true, // Enables or disables textarea resizing
    },
    maxlength: {
        type: Number,
        required: false,
        default: 255, // Maximum character length
    },
    lengthCount: {
        type: Boolean,
        default: false, // Displays character count
    },
});
  
// Emits
const emit = defineEmits(["update:modelValue"]);

// Reactive Variables
const currentValue = ref(props.modelValue);
const isActive = ref(false);
const generatedId = `c-textarea-${Math.random().toString(36).substr(2, 9)}`;
const id = computed(() => props.name || generatedId);
  
// Computed Classes
const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-5 py-4 text-base",
};
  
const roundedStyles = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};
  
const variantStyles = {
    default: "border border-gray-300",
    outlined: "border-2 border-zinc-700",
    filled: "bg-gray-100 dark:bg-zinc-800 border-none",
};
  
const borderColorClass = computed(() => props.borderColor);
  
// Watchers
watch(() => props.modelValue, (newValue) => {
    currentValue.value = newValue;
});
  
watch(currentValue, (newValue) => {
    emit("update:modelValue", newValue);
});
  
// Methods
const handleInput = (event: Event) => {
    currentValue.value = (event.target as HTMLTextAreaElement).value;
};
  
const activateLabel = () => {
    isActive.value = true;
};
  
const deactivateLabel = () => {
    if (!currentValue.value) {
        isActive.value = false;
    }
};
</script>
  