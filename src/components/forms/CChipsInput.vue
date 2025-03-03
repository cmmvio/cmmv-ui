<template>
    <div class="c-chips-input relative w-full">
        <div class="relative">
            <div v-if="isActive" class="fixed z-40 inset-0 bg-transparent" @click="closeDropdown"></div>

            <div class="relative">
                <label v-if="label" :for="id"
                    class="c-chips-input-label absolute text-sm transition-all duration-200 ease-in-out pointer-events-none"
                    :class="[{
                        'c-chips-input-label--active': floatingLabel && (inputFocused || selectedChips.length > 0),
                        'top-[50%] -translate-y-1/2 left-1': !inputFocused && selectedChips.length === 0,
                        'top-0 left-1 text-xs': inputFocused || selectedChips.length > 0,
                        'scale-75 origin-left': (inputFocused || selectedChips.length > 0) && !floatingLabel,
                        'pl-10': hasIcon && (!inputFocused && selectedChips.length === 0)
                    },
                    textColor ? textColor : 'text-neutral-500 dark:text-neutral-400',
                    bgColor ? bgColor : variantColors[variant]]">
                    {{ label }} <span v-if="required" class="text-red-500">*</span>
                </label>

                <div class="flex items-center border rounded-md min-h-[42px] cursor-text overflow-hidden"
                    :class="[roundedStyles[rounded], variantStyles[variant], bgColor ? bgColor : variantColors[variant],
                    { 'ring-red-500 ring-2': hasError, 'opacity-50': disabled, 'cursor-not-allowed': disabled }]"
                    @click="focusInput">

                    <div v-if="hasIcon" class="flex items-center pl-2 shrink-0">
                        <slot name="icon"></slot>
                    </div>

                    <!-- Selected chips/tags - with reduced gap between badges and min-height -->
                    <div class="flex flex-wrap items-center gap-0.5 p-1 flex-grow overflow-x-auto min-h-[36px]"
                         :class="{'mt-4': !floatingLabel && label && selectedChips.length > 0, 'mt-5': !floatingLabel && label && selectedChips.length === 0}">
                        <c-badge
                            v-for="(chip, index) in selectedChips"
                            :key="index"
                            :bgColor="chipBgColor"
                            :textColor="chipTextColor"
                            rounded="rounded-md"
                            customClass="px-2 py-0.5 m-0.5 shrink-0 text-xs"
                            deletable
                            @delete="removeChip(index)"
                        >
                            {{ chip.label }}
                        </c-badge>

                        <!-- Input field -->
                        <input
                            ref="inputRef"
                            type="text"
                            :placeholder="inputFocused ? placeholder : ''"
                            v-model="inputValue"
                            class="outline-none bg-transparent min-w-[60px] py-1 px-2 flex-grow text-sm"
                            @focus="activateDropdown"
                            @blur="handleBlur"
                            @input="handleInput"
                            @keydown="handleKeyDown"
                            @click="activateDropdown"
                            :disabled="disabled"
                        />
                    </div>

                    <!-- Clear button - positioned at the top right -->
                    <button v-if="clearable && selectedChips.length > 0 && !disabled" type="button"
                        class="text-neutral-400 hover:text-neutral-600 flex items-center justify-center px-2 self-start shrink-0 mt-1 mr-1"
                        @click.stop="clearAll">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <!-- Dropdown for options -->
                <transition name="fade">
                    <div v-if="isActive && filteredOptions.length > 0"
                        class="absolute z-50 w-full bg-white border border-neutral-300 dark:border-neutral-900 dark:bg-neutral-800 mt-1 max-h-60 overflow-auto shadow-lg rounded-md">
                        <ul>
                            <li v-for="(option, index) in filteredOptions" :key="option.value"
                                @click.stop="addChipKeepDropdown(option)"
                                class="px-4 py-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 text-sm">
                                {{ option.label }}
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || inputFocused)" class="text-xs text-neutral-500">{{ hint }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import CBadge from '@components/components/CBadge.vue';

interface ChipOption {
    value: string | number;
    label: string;
}

const props = defineProps({
    modelValue: {
        type: Array as () => ChipOption[],
        default: () => []
    },
    options: {
        type: Array as () => ChipOption[],
        default: () => []
    },
    label: {
        type: String,
        required: false
    },
    placeholder: {
        type: String,
        required: false,
        default: "Type to search or add new tag"
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
    chipBgColor: {
        type: String,
        required: false,
        default: "bg-blue-100 dark:bg-blue-900"
    },
    chipTextColor: {
        type: String,
        required: false,
        default: "text-blue-800 dark:text-blue-300"
    },
    borderColor: {
        type: String,
        required: false,
        default: "focus:ring focus:ring-neutral-700 focus:ring-opacity-50"
    },
    allowCustom: {
        type: Boolean,
        default: true
    },
    clearable: {
        type: Boolean,
        default: true
    },
    required: {
        type: Boolean,
        default: false
    },
    minTags: {
        type: Number,
        default: 0
    },
    maxTags: {
        type: Number,
        default: Infinity
    },
    duplicates: {
        type: Boolean,
        default: false
    },
    floatingLabel: {
        type: Boolean,
        default: false
    },
    rules: {
        type: Array as () => ((value: any) => string | boolean | null)[],
        default: () => []
    }
});

const emit = defineEmits(["update:modelValue", "add", "remove", "clear"]);

const inputRef = ref<HTMLInputElement | null>(null);
const inputValue = ref('');
const inputFocused = ref(false);
const isActive = ref(false);
const selectedChips = ref<ChipOption[]>([]);
const availableOptions = ref<ChipOption[]>([]);
const errorMessage = ref<string | null>(null);
const hasIcon = computed(() => !!slots.icon);
const hasError = computed(() => !!errorMessage.value);
const changed = ref(false);

// Generate a unique ID if none is provided
const generatedId = `c-chips-input-${Math.random().toString(36).substr(2, 9)}`;
const id = computed(() => props.id || generatedId);

// Initialize available options and selected chips
onMounted(() => {
    // Initialize available options
    availableOptions.value = [...props.options];

    // Initialize selected chips from modelValue
    if (props.modelValue && props.modelValue.length) {
        selectedChips.value = [...props.modelValue];

        // Remove selected items from available options
        selectedChips.value.forEach(chip => {
            const index = availableOptions.value.findIndex(
                option => option.value === chip.value
            );
            if (index !== -1) {
                availableOptions.value.splice(index, 1);
            }
        });
    }
});

// Watch for changes in props.options
watch(() => props.options, (newOptions) => {
    // Recompute available options while preserving selected chips
    availableOptions.value = newOptions.filter(
        option => !selectedChips.value.some(
            chip => chip.value === option.value
        )
    );
}, { deep: true });

// Watch for changes in modelValue
watch(() => props.modelValue, (newValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(selectedChips.value)) {
        selectedChips.value = [...newValue];

        // Recompute available options
        availableOptions.value = props.options.filter(
            option => !selectedChips.value.some(
                chip => chip.value === option.value
            )
        );
    }
}, { deep: true });

// Watch for changes in selected chips
watch(selectedChips, (newValue) => {
    emit("update:modelValue", newValue);
    validateShowError();
}, { deep: true });

const filteredOptions = computed(() => {
    if (!inputValue.value) return availableOptions.value;

    const query = inputValue.value.toLowerCase();
    return availableOptions.value.filter(option =>
        option.label.toLowerCase().includes(query) ||
        String(option.value).toLowerCase().includes(query)
    );
});

const activateDropdown = () => {
    if (!props.disabled) {
        isActive.value = true;
        inputFocused.value = true;
    }
};

const closeDropdown = () => {
    isActive.value = false;
};

const handleBlur = () => {
    setTimeout(() => {
        // If there's text in the input, add it as a custom tag
        if (inputValue.value && props.allowCustom) {
            addCustomChip();
        }

        // Don't set inputFocused to false immediately to prevent UI flicker
        inputFocused.value = false;
        closeDropdown();

        // Validate on blur
        validateShowError();
    }, 200);
};

const focusInput = () => {
    if (!props.disabled && inputRef.value) {
        inputRef.value.focus();
        activateDropdown();
    }
};

const handleInput = () => {
    activateDropdown();
};

const handleKeyDown = (event: KeyboardEvent) => {
    // Add tag on space, comma, or Enter if there's text
    if ((event.key === ' ' || event.key === ',' || event.key === 'Enter') && inputValue.value.trim() && props.allowCustom) {
        event.preventDefault();
        addCustomChip();
    }

    // Remove last tag on backspace if input is empty
    if (event.key === 'Backspace' && !inputValue.value && selectedChips.value.length > 0) {
        removeChip(selectedChips.value.length - 1);
    }
};

const addCustomChip = () => {
    const value = inputValue.value.trim();
    if (!value) return;

    // Remove trailing comma if present
    const label = value.endsWith(',') ? value.slice(0, -1).trim() : value;

    if (label) {
        // Check for max tags limit
        if (selectedChips.value.length >= props.maxTags) {
            return;
        }

        // Check for duplicates if not allowed
        if (!props.duplicates && isDuplicate(label)) {
            return;
        }

        const newChip = {
            value: `custom-${Date.now()}-${label}`,
            label
        };

        selectedChips.value.push(newChip);
        emit("add", newChip);
        inputValue.value = '';
        changed.value = true;

        // Validate after adding
        validateShowError();
    }
};

const isDuplicate = (label: string) => {
    return selectedChips.value.some(chip =>
        chip.label.toLowerCase() === label.toLowerCase()
    );
};

// New method to add chip without closing dropdown
const addChipKeepDropdown = (option: ChipOption) => {
    // Check for max tags limit
    if (selectedChips.value.length >= props.maxTags) {
        return;
    }

    // Check for duplicates if not allowed
    if (!props.duplicates && selectedChips.value.some(chip => chip.value === option.value)) {
        return;
    }

    // Add to selected chips
    selectedChips.value.push(option);
    emit("add", option);
    changed.value = true;

    // Remove from available options
    const index = availableOptions.value.findIndex(
        availableOption => availableOption.value === option.value
    );
    if (index !== -1) {
        availableOptions.value.splice(index, 1);
    }

    // Clear input and focus
    inputValue.value = '';
    nextTick(() => {
        if (inputRef.value) {
            inputRef.value.focus();
            // Keep dropdown active
            isActive.value = true;
        }
    });

    // Validate after adding
    validateShowError();
};

// Keep original method for backward compatibility
const addChip = addChipKeepDropdown;

const removeChip = (index: number) => {
    const removedChip = selectedChips.value[index];
    selectedChips.value.splice(index, 1);
    emit("remove", removedChip);
    changed.value = true;

    // If it's from original options, add it back to available options
    const isFromOriginalOptions = props.options.some(
        option => option.value === removedChip.value
    );

    if (isFromOriginalOptions) {
        const originalOption = props.options.find(
            option => option.value === removedChip.value
        );
        if (originalOption && !availableOptions.value.some(option => option.value === removedChip.value)) {
            availableOptions.value.push(originalOption);
        }
    }

    // Validate after removing
    validateShowError();

    // Maintain focus on input after removing a chip
    nextTick(() => {
        if (inputRef.value) {
            inputRef.value.focus();
            isActive.value = true;
        }
    });
};

const clearAll = () => {
    // Return all selected chips to available options
    selectedChips.value.forEach(chip => {
        const isFromOriginalOptions = props.options.some(
            option => option.value === chip.value
        );

        if (isFromOriginalOptions) {
            const originalOption = props.options.find(
                option => option.value === chip.value
            );
            if (originalOption && !availableOptions.value.some(option => option.value === chip.value)) {
                availableOptions.value.push(originalOption);
            }
        }
    });

    selectedChips.value = [];
    emit("clear");
    changed.value = true;

    // Validate after clearing
    validateShowError();

    // Focus input after clearing
    nextTick(() => {
        if (inputRef.value) {
            inputRef.value.focus();
        }
    });
};

const validateShowError = () => {
    errorMessage.value = null;

    if (!changed.value) return false;

    // Validate min tags
    if (selectedChips.value.length < props.minTags) {
        errorMessage.value = `Minimum ${props.minTags} tags required`;
        return true;
    }

    // Validate max tags
    if (selectedChips.value.length > props.maxTags) {
        errorMessage.value = `Maximum ${props.maxTags} tags allowed`;
        return true;
    }

    // Run through custom validation rules
    for (const rule of props.rules) {
        const error = rule(selectedChips.value);
        if (error) {
            errorMessage.value = typeof error === 'string' ? error : 'Invalid value';
            return true;
        }
    }

    return false;
};

const validate = () => {
    return validateShowError();
};

const roundedStyles = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full"
};

const variantStyles = {
    default: "border-neutral-300 dark:border-neutral-900",
    outlined: "border-2 border-neutral-700",
    filled: "border-1 border-neutral-900 shadow-md"
};

const variantColors = {
    default: "bg-neutral-200 dark:bg-neutral-900 text-neutral-950 dark:text-white",
    outlined: "bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white",
    filled: "bg-neutral-200 dark:bg-neutral-800 text-neutral-950 dark:text-white"
};

const slots = defineSlots<{
    icon?: (props: {}) => any;
}>();

// Expose validate method for form validation
defineExpose({
    validate,
    value: selectedChips
});
</script>

<style scoped>
.c-chips-input-label {
    transform: translate(0, -50%);
    z-index: 1;
    left: 0.60rem;
}

.c-chips-input-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}

.scale-75 {
    transform: scale(0.75);
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
