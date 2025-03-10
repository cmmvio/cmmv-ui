<template>
  <div class="c-phone-input w-full" :class="[disabled ? 'opacity-60' : '']">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="flex">
      <!-- Country selector -->
      <div class="relative country-selector mr-1" :class="[sizes[size], { 'z-50': isOpen }]">
        <c-combobox
          v-model="selectedCountryIso"
          :options="countries"
          size="sm"
          :rounded="rounded"
          :variant="variant"
          :disabled="disabled"
          :bgColor="bgColor"
          :textColor="textColor"
          :borderColor="borderColor"
          :shadow="shadow"
          @update:modelValue="onCountryChange"
          ref="countryCombobox"
        >
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
        <c-input
          v-model="phoneNumber"
          :placeholder="placeholder"
          :size="size"
          :rounded="rounded"
          :variant="variant"
          :disabled="disabled"
          :rules="rules"
          :bgColor="bgColor"
          :textColor="textColor"
          :borderColor="borderColor"
          :shadow="shadow"
          :required="required"
          :id="id"
          v-mask="currentMask"
          @input="onPhoneInput"
          @update:modelValue="updateModelValue"
          ref="phoneInput"
        />
      </div>
    </div>

    <div class="mt-1" v-if="!hiddenHint && phoneInput?.hasError">
      <p v-if="phoneInput?.hasError" class="text-xs text-red-500">{{ phoneInput?.errorMessage }}</p>
      <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-gray-500">{{ hint }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import Countries from '@/composables/CountriesList';
import { mask as vMask } from 'vue-the-mask';

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

// Component refs
const countryCombobox = ref(null);
const phoneInput = ref(null);
const isOpen = ref(false);

// Map countries data to be used by combobox
const countries = computed(() => {
  return Countries.map(country => ({
    value: country.iso,
    label: country.name,
    iso: country.iso,
    ddi: country.ddi
  }));
});

// States
const selectedCountryIso = ref(props.defaultCountry);
const phoneNumber = ref('');
const isActive = ref(false);

// Get the current selected country object
const selectedCountry = computed(() => {
  return Countries.find(country => country.iso === selectedCountryIso.value) ||
         Countries.find(country => country.iso === 'us'); // Default to US
});

// Generate phone mask based on selected country
const currentMask = computed(() => {
  const ddi = selectedCountry.value.ddi;

  // Different masks for different countries
  // These are just examples, you should customize based on requirements
  if (ddi === '1') { // US & Canada: +1 (XXX) XXX-XXXX
    return '(###) ###-####';
  } else if (ddi === '44') { // UK: +44 XXXX XXXXXX
    return '#### ######';
  } else if (ddi === '55') { // Brazil: +55 (XX) XXXXX-XXXX
    return '(##) #####-####';
  } else if (ddi === '33') { // France: +33 X XX XX XX XX
    return '# ## ## ## ##';
  } else if (ddi === '86') { // China: +86 XXX XXXX XXXX
    return '### #### ####';
  } else if (ddi === '91') { // India: +91 XXXXX XXXXX
    return '##### #####';
  } else if (ddi === '49') { // Germany: +49 XXX XXXXXXX
    return '### #######';
  } else if (ddi === '61') { // Australia: +61 XXX XXX XXX
    return '### ### ###';
  } else if (ddi === '81') { // Japan: +81 XX XXXX XXXX
    return '## #### ####';
  } else if (ddi === '52') { // Mexico: +52 XXX XXX XXXX
    return '### ### ####';
  } else {
    // Default mask for other countries: XXXX XXXX XXXX
    return '#### #### ####';
  }
});

// Format the complete phone number with country code
const formattedValue = computed(() => {
  if (!phoneNumber.value) return '';
  return `+${selectedCountry.value.ddi} ${phoneNumber.value}`;
});

// Update the model value when either country or phone number changes
const updateModelValue = () => {
  emit('update:modelValue', formattedValue.value);
};

// When the country selection changes
const onCountryChange = (value) => {
  const country = Countries.find(c => c.iso === value);
  if (country) {
    selectedCountryIso.value = country.iso;
    emit('country-changed', country);
    updateModelValue();
  }
};

// When typing in the phone input, check if user is entering a country code directly
const onPhoneInput = (event) => {
  const value = event.target.value;

  // If starts with + or 00, user might be entering country code
  if (value.startsWith('+') || value.startsWith('00')) {
    const cleaned = value.replace(/\D/g, '');

    // Try to detect country code
    for (const country of Countries) {
      if (cleaned.startsWith(country.ddi)) {
        // If we found a matching country code, select it and remove from input
        selectedCountryIso.value = country.iso;

        // Remove the country code from the phone input
        const phoneWithoutCode = cleaned.substring(country.ddi.length);
        phoneNumber.value = phoneWithoutCode;

        return;
      }
    }
  }

  updateModelValue();
};

// Size mappings for the component
const sizes = {
  sm: 'w-20',
  md: 'w-24',
  lg: 'w-28'
};

// Watch for changes in the modelValue prop
watch(() => props.modelValue, (newValue) => {
  if (!newValue || newValue === formattedValue.value) return;

  // Try to parse the modelValue to extract country code and phone number
  const cleaned = newValue.replace(/\D/g, '');

  // Find the country by checking if the cleaned value starts with a country code
  for (const country of Countries) {
    if (cleaned.startsWith(country.ddi)) {
      selectedCountryIso.value = country.iso;
      phoneNumber.value = cleaned.substring(country.ddi.length);
      return;
    }
  }

  // If no country code detected, just use the whole value as phone number
  phoneNumber.value = cleaned;
});

// Public methods
const validate = () => {
  return phoneInput.value?.validate();
};

const focus = () => {
  phoneInput.value?.activateLabel();
};

// Setup initial value from prop
onMounted(() => {
  if (props.modelValue) {
    // Parse the initial value
    const cleaned = props.modelValue.replace(/\D/g, '');

    // Try to detect country code
    for (const country of Countries) {
      if (cleaned.startsWith(country.ddi)) {
        selectedCountryIso.value = country.iso;
        phoneNumber.value = cleaned.substring(country.ddi.length);
        return;
      }
    }

    // If no country code detected, use default country and full value
    phoneNumber.value = cleaned;
  }
});

// Expose component methods and properties
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
