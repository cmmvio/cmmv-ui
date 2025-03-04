<template>
    <div class="c-textarea relative w-full">
        <label :for="id"
            class="c-textarea-label absolute text-sm transition-all duration-200 ease-in-out pointer-events-none drop-shadow-xs"
            :class="[{
                'c-textarea-label--active': floatingLabel && (isActive || currentValue),
                'top-[50%] -translate-y-1/2 left-3': (!isActive && !currentValue),
                'top-[30%]': !isActive && hasError,
                'scale-75 origin-left text-xs top-1 left-1': (isActive || (currentValue !== undefined && currentValue !== '')) && !floatingLabel,
            },
            textColor ? textColor : 'text-neutral-500 dark:text-neutral-400',
            bgColor ? bgColor : variantColors[variant], 'px-1']">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>

        <textarea ref="textarea" :id="id" :name="name" :placeholder="isActive ? placeholder : ''" :maxlength="maxlength"
            :value="currentValue" :class="[
                sizes[size],
                roundedStyles[rounded],
                variantStyles[variant],
                bgColor ? bgColor : variantColors[variant],
                textColor,
                customClass,
                {
                    'ring-red-500 ring-2': hasError,
                    'opacity-50': disabled,
                    'resize-none': !resize,
                    'c-textarea-custom-resize': resize
                }
            ]" class="c-textarea-field block w-full pt-5 pb-2 outline-none min-h-[80px]" @input="handleInput" @focus="activateLabel"
            @blur="deactivateLabel" :disabled="disabled" :aria-invalid="hasError" />

        <div v-if="lengthCount" class="absolute bottom-1 right-3 text-xs text-neutral-500">
            {{ currentValue.length }} / {{ maxlength }}
        </div>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-neutral-500">{{ hint }}</p>
        </div>
    </div>
</template>

<style scoped>
.c-textarea {
    position: relative;
}

.c-textarea-label {
    transform: translate(0, -50%);
    z-index: 1;
}

.c-textarea-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}

.scale-75 {
    transform: scale(0.75);
}

.c-textarea-field {
    transition: box-shadow 0.3s, padding-top 0.3s;
    position: relative;
}

.c-textarea-custom-resize {
    resize: vertical;
    position: relative;
    overflow: auto;
}

.c-textarea-custom-resize::after {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 10px;
    height: 10px;
    cursor: ns-resize;
    background-image: linear-gradient(135deg, transparent calc(50% - 1px), rgba(128, 128, 128, 0.5) calc(50% - 1px), rgba(128, 128, 128, 0.5) 50%, transparent 50%),
                     linear-gradient(45deg, transparent calc(50% - 1px), rgba(128, 128, 128, 0.5) calc(50% - 1px), rgba(128, 128, 128, 0.5) 50%, transparent 50%);
    background-size: 4px 4px;
    background-position: bottom right;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 5;
}

.dark .c-textarea-custom-resize::after {
    background-image: linear-gradient(135deg, transparent calc(50% - 1px), rgba(180, 180, 180, 0.5) calc(50% - 1px), rgba(180, 180, 180, 0.5) 50%, transparent 50%),
                     linear-gradient(45deg, transparent calc(50% - 1px), rgba(180, 180, 180, 0.5) calc(50% - 1px), rgba(180, 180, 180, 0.5) 50%, transparent 50%);
}

/* Completely hide default resize handle */
.c-textarea-custom-resize::-webkit-resizer {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    background: transparent !important;
    border-color: transparent !important;
}

.c-textarea-custom-resize::corner-present {
    display: none !important;
}

.c-textarea-custom-resize::resizer {
    display: none !important;
}

.c-textarea-custom-resize::-webkit-scrollbar-corner {
    background: transparent !important;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar,
:deep(.light) .c-textarea-field::-webkit-scrollbar,
.light .c-textarea-field::-webkit-scrollbar,
.light .c-textarea-field tbody::-webkit-scrollbar {
    height: 4px;
    width: 4px;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar-track,
:deep(.light) .c-textarea-field::-webkit-scrollbar-track,
.light .c-textarea-field::-webkit-scrollbar-track,
.light .c-textarea-field tbody::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #EFEFEF;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar-track:hover,
:deep(.light) .c-textarea-field::-webkit-scrollbar-track:hover,
.light .c-textarea-field::-webkit-scrollbar-track:hover,
.light .c-textarea-field tbody::-webkit-scrollbar-track:hover {
    background-color: #E3E3E3;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar-track:active,
:deep(.light) .c-textarea-field::-webkit-scrollbar-track:active,
.light .c-textarea-field::-webkit-scrollbar-track:active,
.light .c-textarea-field tbody::-webkit-scrollbar-track:active {
    background-color: #E3E3E3;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar-thumb,
:deep(.light) .c-textarea-field::-webkit-scrollbar-thumb,
.light .c-textarea-field::-webkit-scrollbar-thumb,
.light .c-textarea-field tbody::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #999;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar-thumb:hover,
:deep(.light) .c-textarea-field::-webkit-scrollbar-thumb:hover,
.light .c-textarea-field::-webkit-scrollbar-thumb:hover,
.light .c-textarea-field tbody::-webkit-scrollbar-thumb:hover {
    background-color: #BFBFBF;
}

:deep(.light .c-textarea-field)::-webkit-scrollbar-thumb:active,
:deep(.light) .c-textarea-field::-webkit-scrollbar-thumb:active,
.light .c-textarea-field::-webkit-scrollbar-thumb:active,
.light .c-textarea-field tbody::-webkit-scrollbar-thumb:active {
    background-color: #BFBFBF;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar,
:deep(.dark) .c-textarea-field::-webkit-scrollbar,
.dark .c-textarea-field::-webkit-scrollbar,
.dark .c-textarea-field tbody::-webkit-scrollbar {
    height: 4px;
    width: 4px;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar-track,
:deep(.dark) .c-textarea-field::-webkit-scrollbar-track,
.dark .c-textarea-field::-webkit-scrollbar-track,
.dark .c-textarea-field tbody::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #2E3035;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar-track:hover,
:deep(.dark) .c-textarea-field::-webkit-scrollbar-track:hover,
.dark .c-textarea-field::-webkit-scrollbar-track:hover,
.dark .c-textarea-field tbody::-webkit-scrollbar-track:hover {
    background-color: #4C4C4C;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar-track:active,
:deep(.dark) .c-textarea-field::-webkit-scrollbar-track:active,
.dark .c-textarea-field::-webkit-scrollbar-track:active,
.dark .c-textarea-field tbody::-webkit-scrollbar-track:active {
    background-color: #4C4C4C;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar-thumb,
:deep(.dark) .c-textarea-field::-webkit-scrollbar-thumb,
.dark .c-textarea-field::-webkit-scrollbar-thumb,
.dark .c-textarea-field tbody::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #5B5B5B;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar-thumb:hover,
:deep(.dark) .c-textarea-field::-webkit-scrollbar-thumb:hover,
.dark .c-textarea-field::-webkit-scrollbar-thumb:hover,
.dark .c-textarea-field tbody::-webkit-scrollbar-thumb:hover {
    background-color: #777777;
}

:deep(.dark .c-textarea-field)::-webkit-scrollbar-thumb:active,
:deep(.dark) .c-textarea-field::-webkit-scrollbar-thumb:active,
.dark .c-textarea-field::-webkit-scrollbar-thumb:active,
.dark .c-textarea-field tbody::-webkit-scrollbar-thumb:active {
    background-color: #777777;
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
        default: 99999,
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
        default: ""
    },
    floatingLabel: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    customClass: {
        type: String,
        required: false,
        default: ""
    }
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
    default: "border border-neutral-300 dark:border-neutral-900",
    outlined: "border-2 border-neutral-700",
    filled: "bg-neutral-100 dark:bg-neutral-800 border-none",
};

const variantColors: Record<string, string> = {
    default: "bg-neutral-200 dark:bg-neutral-900 text-neutral-950 dark:text-white",
    outlined: "bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white",
    filled: "bg-neutral-200 dark:bg-neutral-800 text-neutral-950 dark:text-white",
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
