<template>
    <div class="c-password-input">
        <c-input
            v-model="password"
            type="password"
            :label="label"
            :placeholder="placeholder"
            :size="size"
            :rounded="rounded"
            :variant="variant"
            :disabled="disabled"
            :clearable="clearable"
            :rules="combinedRules"
            :hint="hint"
            :hintFixed="hintFixed"
            :hiddenHint="hiddenHint"
            :id="id"
            :bgColor="bgColor"
            :textColor="textColor"
            :borderColor="borderColor"
            :loading="loading"
            :floatingLabel="floatingLabel"
            :customClass="customClass"
            :required="required"
            :shadow="shadow"
            ref="inputRef"
        >
            <template v-if="$slots.icon" #icon>
                <slot name="icon"></slot>
            </template>
        </c-input>

        <div v-if="showStrengthBar && password" class="mt-2">
            <div class="flex items-center">
                <div class="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        :class="strengthBarColorClass"
                        :style="{ width: `${strengthPercentage}%` }"
                        class="h-full transition-all duration-300"
                    ></div>
                </div>
                <span class="ml-2 text-xs" :class="strengthTextColorClass">{{ strengthLabel }}</span>
            </div>
        </div>

        <div v-if="showRequirements && password" class="mt-2 text-sm">
            <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1 text-xs">Password requirements:</h4>
            <ul class="space-y-1 text-xs">
                <li v-if="requireUppercase" class="flex items-center">
                    <span :class="hasUppercase ? 'text-green-500' : 'text-gray-500'">
                        <svg v-if="hasUppercase" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <span :class="hasUppercase ? 'text-green-500' : 'text-gray-500'">
                        At least one uppercase letter
                    </span>
                </li>
                <li v-if="requireLowercase" class="flex items-center">
                    <span :class="hasLowercase ? 'text-green-500' : 'text-gray-500'">
                        <svg v-if="hasLowercase" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <span :class="hasLowercase ? 'text-green-500' : 'text-gray-500'">
                        At least one lowercase letter
                    </span>
                </li>
                <li v-if="requireNumbers" class="flex items-center">
                    <span :class="hasNumber ? 'text-green-500' : 'text-gray-500'">
                        <svg v-if="hasNumber" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <span :class="hasNumber ? 'text-green-500' : 'text-gray-500'">
                        At least one number
                    </span>
                </li>
                <li v-if="requireSpecialChars" class="flex items-center">
                    <span :class="hasSpecialChar ? 'text-green-500' : 'text-gray-500'">
                        <svg v-if="hasSpecialChar" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <span :class="hasSpecialChar ? 'text-green-500' : 'text-gray-500'">
                        At least one special character
                    </span>
                </li>
                <li v-if="minLength > 0" class="flex items-center">
                    <span :class="hasMinLength ? 'text-green-500' : 'text-gray-500'">
                        <svg v-if="hasMinLength" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <span :class="hasMinLength ? 'text-green-500' : 'text-gray-500'">
                        Minimum length of {{ minLength }} characters
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, defineExpose } from 'vue';
import CInput from './CInput.vue';

type ValidationRule = (value: string) => boolean | string;

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: ""
    },
    label: {
        type: String,
        required: false,
        default: "Password"
    },
    placeholder: {
        type: String,
        required: false,
        default: "Enter your password"
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
        type: Array as () => ValidationRule[],
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
    shadow: {
        type: String,
        default: "shadow-sm"
    },
    requireUppercase: {
        type: Boolean,
        default: true
    },
    requireLowercase: {
        type: Boolean,
        default: true
    },
    requireNumbers: {
        type: Boolean,
        default: true
    },
    requireSpecialChars: {
        type: Boolean,
        default: true
    },
    minLength: {
        type: Number,
        default: 8
    },
    showStrengthBar: {
        type: Boolean,
        default: true
    },
    showRequirements: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(["update:modelValue"]);
const inputRef = ref<InstanceType<typeof CInput> | null>(null);
const password = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
    password.value = newValue;
});

watch(password, (newValue) => {
    emit("update:modelValue", newValue);
});

const hasUppercase = computed(() => /[A-Z]/.test(password.value));
const hasLowercase = computed(() => /[a-z]/.test(password.value));
const hasNumber = computed(() => /\d/.test(password.value));
const hasSpecialChar = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value));
const hasMinLength = computed(() => password.value.length >= props.minLength);

const generatePasswordRules = () => {
    const rules: ValidationRule[] = [];

    if (props.requireUppercase) {
        rules.push((value) => {
            return /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter';
        });
    }

    if (props.requireLowercase) {
        rules.push((value) => {
            return /[a-z]/.test(value) || 'Password must contain at least one lowercase letter';
        });
    }

    if (props.requireNumbers) {
        rules.push((value) => {
            return /\d/.test(value) || 'Password must contain at least one number';
        });
    }

    if (props.requireSpecialChars) {
        rules.push((value) => {
            return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value) || 'Password must contain at least one special character';
        });
    }

    if (props.minLength > 0) {
        rules.push((value) => {
            return value.length >= props.minLength || `Password must be at least ${props.minLength} characters long`;
        });
    }

    return rules;
};

const combinedRules = computed(() => {
    return [...props.rules, ...generatePasswordRules()];
});

const calculateStrength = () => {
    if (!password.value) return 0;

    let strength = 0;
    const lengthFactor = Math.min(password.value.length / 12, 1) * 25;
    strength += lengthFactor;

    if (hasUppercase.value) strength += 15;
    if (hasLowercase.value) strength += 15;
    if (hasNumber.value) strength += 15;
    if (hasSpecialChar.value) strength += 30;

    return Math.min(strength, 100);
};

const strengthPercentage = computed(() => calculateStrength());

const strengthLabel = computed(() => {
    const strength = strengthPercentage.value;
    if (strength < 25) return 'Very Weak';
    if (strength < 50) return 'Weak';
    if (strength < 75) return 'Moderate';
    if (strength < 90) return 'Strong';
    return 'Very Strong';
});

const strengthBarColorClass = computed(() => {
    const strength = strengthPercentage.value;
    if (strength < 25) return 'bg-red-500';
    if (strength < 50) return 'bg-orange-500';
    if (strength < 75) return 'bg-yellow-500';
    if (strength < 90) return 'bg-green-500';
    return 'bg-green-600';
});

const strengthTextColorClass = computed(() => {
    const strength = strengthPercentage.value;
    if (strength < 25) return 'text-red-500';
    if (strength < 50) return 'text-orange-500';
    if (strength < 75) return 'text-yellow-500';
    if (strength < 90) return 'text-green-500';
    return 'text-green-600';
});

const validate = (showError = true) => {
    let valid = true;

    if (props.requireUppercase && !hasUppercase.value) valid = false;
    if (props.requireLowercase && !hasLowercase.value) valid = false;
    if (props.requireNumbers && !hasNumber.value) valid = false;
    if (props.requireSpecialChars && !hasSpecialChar.value) valid = false;
    if (props.minLength > 0 && !hasMinLength.value) valid = false;

    return valid;
};

const isValid = computed(() => {
    let valid = true;

    if (props.requireUppercase && !hasUppercase.value) valid = false;
    if (props.requireLowercase && !hasLowercase.value) valid = false;
    if (props.requireNumbers && !hasNumber.value) valid = false;
    if (props.requireSpecialChars && !hasSpecialChar.value) valid = false;
    if (props.minLength > 0 && !hasMinLength.value) valid = false;

    return valid;
});

defineExpose({
    validate,
    inputRef,
    isValid,
    strengthPercentage,
    strengthLabel
});
</script>

<style scoped>
.c-password-input {
    position: relative;
}
</style>
