<template>
    <div class="c-phone-input w-full" :class="[disabled ? 'opacity-60' : '']">
        <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>

        <div class="flex">
            <!-- Country selector -->
            <div class="relative country-selector mr-1" :class="[sizes[size], { 'z-50': isOpen }]">
                <c-combobox v-model="selectedCountryIso" :options="countries" size="sm" :rounded="rounded"
                    :variant="variant" :disabled="disabled" :bgColor="bgColor" :textColor="textColor"
                    :borderColor="borderColor" :shadow="shadow" @update:modelValue="onCountryChange"
                    ref="countryCombobox">
                    <template #selected="{ data }">
                        <div class="flex items-center w-full">
                            <c-flag :iso="data?.iso || 'us'" size="sm" class="mr-1" />
                            <span class="text-sm">+{{ data?.ddi || '1' }}</span>
                        </div>
                    </template>

                    <template #option="{ data }">
                        <div class="flex items-center">
                            <c-flag :iso="data.iso" size="sm" class="mr-1" />
                            <span class="text-sm">{{ data.name }}</span>
                            <span class="ml-auto text-xs text-gray-500">+{{ data.ddi }}</span>
                        </div>
                    </template>
                </c-combobox>
            </div>

            <!-- Phone number input -->
            <div class="flex-1">
                <c-input v-model="phoneNumber" :placeholder="placeholder" :size="size" :rounded="rounded"
                    :variant="variant" :disabled="disabled" :rules="rules" :bgColor="bgColor" :textColor="textColor"
                    :borderColor="borderColor" :shadow="shadow" :required="required" :id="id" v-mask="currentMask"
                    @input="onPhoneInput" @update:modelValue="updateModelValue" ref="phoneInput" />
            </div>
        </div>
        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="phoneInput?.hasError" class="text-xs text-red-500">{{ phoneInput?.errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import Countries, { getPhoneMaskByIso, getPhoneMaskByDDI } from '@/composables/CountriesList';
import type { Country } from '@/composables/CountriesList';
// @ts-ignore
import { mask as vMask } from 'vue-the-mask';
import CInput from './CInput.vue';
import type { ComponentPublicInstance } from 'vue';

// Define a interface para as propriedades e métodos expostos pelo CInput
interface InputInstance extends ComponentPublicInstance {
    validate: () => boolean;
    hasError: boolean;
    errorMessage: string | null;
    activateLabel: () => void;
    deactivateLabel: () => void;
}

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: 'Phone'
    },
    placeholder: {
        type: String,
        default: 'Enter phone number'
    },
    size: {
        type: String,
        default: 'md'
    },
    rounded: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'default'
    },
    bgColor: {
        type: String,
        default: 'bg-white dark:bg-neutral-900'
    },
    textColor: {
        type: String,
        default: ''
    },
    borderColor: {
        type: String,
        default: 'focus:ring focus:ring-zinc-700 focus:ring-opacity-50'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    rules: {
        type: Array,
        default: () => []
    },
    hint: {
        type: String,
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
        default: () => `phone-input-${Math.random().toString(36).substring(2, 11)}`
    },
    shadow: {
        type: String,
        default: 'shadow-sm'
    },
    defaultCountry: {
        type: String,
        default: 'us'
    }
});

const emit = defineEmits(['update:modelValue', 'country-changed']);

const countryCombobox = ref(null);
const phoneInput = ref<InputInstance | null>(null);
const isOpen = ref(false);

const countries = computed(() => {
    return Countries.map(country => ({
        value: country.iso,
        label: country.name,
        iso: country.iso,
        ddi: country.ddi
    }));
});

const selectedCountryIso = ref(props.defaultCountry);
const phoneNumber = ref('');
const isActive = ref(false);

const selectedCountry = computed(() => {
    return Countries.find(country => country.iso === selectedCountryIso.value) ||
        Countries.find(country => country.iso === 'us'); // Default to US
});

// Usar a função getPhoneMaskByIso para obter a máscara correta
const currentMask = computed(() => {
    // Se o país tiver uma máscara específica definida, usá-la
    if (selectedCountryIso.value) {
        return getPhoneMaskByIso(selectedCountryIso.value);
    }

    // Caso contrário, usar uma máscara padrão
    return "#### #### ####";
});

const formattedValue = computed(() => {
    if (!phoneNumber.value) return '';
    return `+${selectedCountry.value?.ddi} ${phoneNumber.value}`;
});

const updateModelValue = () => {
    emit('update:modelValue', formattedValue.value);
};

const onCountryChange = (value: string) => {
    const country = Countries.find(c => c.iso === value);
    if (country) {
        selectedCountryIso.value = country.iso;
        emit('country-changed', country);
        updateModelValue();
    }
};

const onPhoneInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;

    if (value.startsWith('+') || value.startsWith('00')) {
        const cleaned = value.replace(/\D/g, '');

        for (const country of Countries) {
            if (cleaned.startsWith(country.ddi)) {
                selectedCountryIso.value = country.iso;

                const phoneWithoutCode = cleaned.substring(country.ddi.length);
                phoneNumber.value = phoneWithoutCode;

                return;
            }
        }
    }

    updateModelValue();
};

const sizes = {
    sm: 'w-20',
    md: 'w-24',
    lg: 'w-28'
};

watch(() => props.modelValue, (newValue) => {
    if (!newValue || newValue === formattedValue.value) return;

    const cleaned = newValue.replace(/\D/g, '');

    for (const country of Countries) {
        if (cleaned.startsWith(country.ddi)) {
            selectedCountryIso.value = country.iso;
            phoneNumber.value = cleaned.substring(country.ddi.length);
            return;
        }
    }

    phoneNumber.value = cleaned;
});

const validate = () => {
    return phoneInput.value?.validate() || false;
};

const focus = () => {
    phoneInput.value?.activateLabel();
};

onMounted(() => {
    if (props.modelValue) {
        const cleaned = props.modelValue.replace(/\D/g, '');

        for (const country of Countries) {
            if (cleaned.startsWith(country.ddi)) {
                selectedCountryIso.value = country.iso;
                phoneNumber.value = cleaned.substring(country.ddi.length);
                return;
            }
        }

        phoneNumber.value = cleaned;
    }
});

defineExpose({
    validate,
    focus,
    selectedCountry,
    phoneNumber,
    formattedValue
});
</script>

<style scoped>
.c-phone-input {
    position: relative;
}

.country-selector {
    flex-shrink: 0;
}
</style>
