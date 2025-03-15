<template>
    <c-input v-model="currentValue" v-bind="$attrs" :label="label" :placeholder="placeholder" :hint="hint" :required="required"
        :disabled="disabled" :readonly="readonly" :size="size" :variant="variant" :rounded="rounded" :rules="rules"
        :floatingLabel="floatingLabel" :currencyMask="moneyConfig" @update:modelValue="updateValue">
        <template #leftIcon v-if="showCurrencySymbol && currencySymbol && symbolPosition === 'prefix'">
            <span class="text-gray-500 mx-1">{{ currencySymbol }}</span>
        </template>
        <template #rightIcon v-if="showCurrencySymbol && currencySymbol && symbolPosition === 'suffix'">
            <span class="text-gray-500 mx-1">{{ currencySymbol }}</span>
        </template>
        <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData"></slot>
        </template>
    </c-input>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineProps } from 'vue';
import { getCurrencyByCode, getDefaultCurrencyMask } from '@/composables/CurrencyList';
//@ts-ignore
import { unformat } from 'v-money3';

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
    hint: {
        type: String,
        required: false,
    },
    required: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
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
    floatingLabel: {
        type: Boolean,
        default: false,
    },
    customClass: {
        type: String,
        required: false,
        default: ""
    },
    currencyCode: {
        type: String,
        required: false,
        default: "USD"
    },
    showCurrencySymbol: {
        type: Boolean,
        default: true
    },
    rules: {
        type: Array,
        default: () => []
    },
});

const currentValue = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);
const errorMessage = ref('');
const currency = computed(() => {
    return getCurrencyByCode(props.currencyCode || 'USD') || getDefaultCurrencyMask();
});

const symbolPosition = computed(() => {
    return currency.value.prefix ? 'prefix' : 'suffix';
});

const currencySymbol = computed(() => {
    return symbolPosition.value === 'prefix' ? currency.value.prefix : currency.value.suffix;
});

const moneyConfig = computed(() => {
    return {
        prefix: props.showCurrencySymbol && symbolPosition.value === 'prefix' ? currency.value.prefix : '',
        suffix: props.showCurrencySymbol && symbolPosition.value === 'suffix' ? currency.value.suffix : '',
        thousands: currency.value.thousandsSeparatorSymbol,
        decimal: currency.value.decimalSymbol,
        precision: currency.value.decimalLimit,
        masked: false,
        disableNegative: false,
        minimumNumberOfCharacters: 0,
        allowBlank: false,
        number: true,
        disabled: props.disabled || props.readonly
    };
});

watch(() => props.currencyCode, () => {
    emit('update:modelValue', '');
    currentValue.value = '';
});

const updateValue = (value: string) => {
    const unformattedValue = unformat(value);
    emit('update:modelValue', unformattedValue);
};

const validate = (showError = true) => {
    if (props.required && !currentValue.value) {
        if (showError)
            errorMessage.value = "Required field";

        return false;
    }

    return true;
}
</script>
