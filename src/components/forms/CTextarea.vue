<template>
    <div class="c-textarea relative w-full">
        <label
            :for="id"
            class="c-textarea-label absolute left-3 text-sm transition-all duration-200 ease-in-out pointer-events-none drop-shadow-xs"
            :class="[{
                'c-textarea-label--active': isActive,
                'top-[50%] -translate-y-1/2': !isActive && !currentValue && !hasError,
                'top-[30%]': !isActive && hasError,
                'top-1/3': currentValue !== undefined && currentValue !== ''
            },
            textColor ? textColor : 'text-gray-500 dark:text-gray-400',
            bgColor ? bgColor : variantColors[variant], 'px-1']"
        >
            {{ label }}
        </label>

        <textarea
            ref="textarea"
            :id="id"
            :name="name"
            :placeholder="isActive ? placeholder : ''"
            :maxlength="maxlength"
            :value="currentValue"
            :class="[
                sizes[size],
                roundedStyles[rounded],
                variantStyles[variant],
                bgColor ? bgColor : variantColors[variant],
                textColor,
                {
                    'ring-red-500 ring-2': hasError,
                    'opacity-50': disabled,
                    'resize-none': !resize
                }
            ]"
            class="c-textarea-field block w-full pt-4 pb-2 outline-none"
            @input="handleInput"
            @focus="activateLabel"
            @blur="deactivateLabel"
            :disabled="disabled"
            :aria-invalid="hasError"
        />

        <div v-if="lengthCount" class="absolute bottom-1 right-3 text-xs text-gray-500">
            {{ currentValue.length }} / {{ maxlength }}
        </div>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
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
    top: 1.3rem;
    left: 0.3rem;
}

.c-textarea-field {
    transition: box-shadow 0.3s, padding-top 0.3s;
    position: relative;
}
</style>

<script setup lang="ts">
import { ref, computed, watch, defineExpose } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: undefined,
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
    maxlength: {
        type: Number,
        required: false,
        default: 255,
    },
    lengthCount: {
        type: Boolean,
        default: false
    },
    resize: {
        type: Boolean,
        default: true,
    },
    autoresize: {
        type: Boolean,
        default: true
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
const textarea = ref<HTMLTextAreaElement | null>(null);
const currentValue = ref(props.modelValue ?? "");
const errorMessage = ref<string | null>(null);
const isActive = ref(false);

const generatedId = `c-textarea-${Math.random().toString(36).substr(2, 9)}`;
const id = computed(() => props.name || generatedId);

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
    default: "border border-gray-300 dark:border-gray-700",
    outlined: "border-2 border-zinc-700",
    filled: "bg-gray-100 dark:bg-zinc-800 border-none",
};

const variantColors: Record<string, string> = {
    default: "bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-white",
    outlined: "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white",
    filled: "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white",
};

const borderColorClass = computed(() => props.borderColor);

const hasError = computed(() => !!errorMessage.value);

watch(() => props.modelValue, (newValue) => {
    if (newValue !== undefined) {
        currentValue.value = newValue;
    }
    autoresizeTextarea();
});

watch(currentValue, (newValue) => {
    emit("update:modelValue", newValue);
});

const handleInput = (event: Event) => {
    currentValue.value = (event.target as HTMLTextAreaElement).value;
    autoresizeTextarea();
    validate();
};

const autoresizeTextarea = () => {
    if (props.autoresize && textarea.value) {
        textarea.value.style.height = "auto";
        textarea.value.style.height = `${textarea.value.scrollHeight}px`;
    }
};

const validate = () => {
    errorMessage.value = null;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error) {
            errorMessage.value = error;
            return false;
        }
    }

    return true;
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
