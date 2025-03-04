<template>
    <div class="form-builder">
        <c-alert v-if="showValidationAlert && Object.keys(invalidFields).length > 0" type="error" icon
            title="Validação do Formulário" class="mb-4" :closable="true" @close="showValidationAlert = false">
            <div>
                <p class="mb-2">Required fields not filled in or with error:</p>
                <ul class="list-disc pl-5">
                    <li v-for="(reason, field) in invalidFields" :key="field">
                        <b>{{ getFieldLabel(field) }}</b>: {{ reason }}
                    </li>
                </ul>
            </div>
        </c-alert>

        <div class="grid grid-cols-12 gap-4">
            <template v-for="(item, key) in schema" :key="key">
                <slot :name="key" v-bind="{
                    value: formData[key],
                    field: item,
                    update: (value) => updateField(key, value)
                }">
                    <div :class="[`col-span-${item.size || 12}`]">
                        <!-- Input -->
                        <c-input v-if="item.type === 'input'" v-model="formData[key]" :label="item.label"
                            :placeholder="item.placeholder" :required="item.required" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :rules="item.rules || item.props?.rules || []"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Combobox/Select -->
                        <c-combobox v-if="item.type === 'combobox' || item.type === 'select'" v-model="formData[key]"
                            :label="item.label" :placeholder="item.placeholder" :required="item.required"
                            :options="item.items" :remoteDataPrimaryKey="item.remoteDataPrimaryKey"
                            :remoteDataLabelKey="item.remoteDataLabelKey" :remoteDataKeyValue="item.remoteDataKeyValue"
                            :rules="item.rules || item.props?.rules || []" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }">
                            <!-- Forward the selected slot -->
                            <template v-if="$slots[`${key}-selected`]" #selected="slotProps">
                                <slot :name="`${key}-selected`" v-bind="slotProps"></slot>
                            </template>
                            <!-- Forward the option slot -->
                            <template v-if="$slots[`${key}-option`]" #option="slotProps">
                                <slot :name="`${key}-option`" v-bind="slotProps"></slot>
                            </template>
                            <!-- Forward the subitem slot -->
                            <template v-if="$slots[`${key}-subitem`]" #subitem="slotProps">
                                <slot :name="`${key}-subitem`" v-bind="slotProps"></slot>
                            </template>
                        </c-combobox>

                        <!-- Checkbox -->
                        <c-checkbox v-if="item.type === 'checkbox'" v-model="formData[key]" :label="item.label"
                            :required="item.required" v-bind="item.props || {}"
                            :rules="item.rules || item.props?.rules || []"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Radio -->
                        <c-radio v-if="item.type === 'radio'" v-model="formData[key]" :label="item.label"
                            :value="item.value" v-bind="item.props || {}" :required="item.required"
                            :rules="item.rules || item.props?.rules || []"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Datepicker -->
                        <c-datepicker v-if="item.type === 'date' || item.type === 'datepicker'" v-model="formData[key]"
                            :label="item.label" :placeholder="item.placeholder" :required="item.required"
                            :rules="item.rules || item.props?.rules || []" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Autocomplete -->
                        <c-autocomplete v-if="item.type === 'autocomplete'" v-model="formData[key]" :label="item.label"
                            :placeholder="item.placeholder" :required="item.required" :options="item.options || []"
                            :rules="item.rules || item.props?.rules || []" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Chips Input -->
                        <c-chips-input v-if="item.type === 'chips' || item.type === 'chipsinput'"
                            v-model="formData[key]"
                            :label="item.label"
                            :placeholder="item.placeholder"
                            :required="item.required"
                            :options="item.options || []"
                            :minTags="item.minTags"
                            :maxTags="item.maxTags"
                            :duplicates="item.duplicates"
                            :allowCustom="item.allowCustom !== false"
                            :chipBgColor="item.chipBgColor"
                            :chipTextColor="item.chipTextColor"
                            :rules="item.rules || item.props?.rules || []"
                            v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            @add="(chip) => item.onAdd && item.onAdd(chip)"
                            @remove="(chip) => item.onRemove && item.onRemove(chip)"
                            @clear="() => item.onClear && item.onClear()"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Currency Input -->
                        <c-currency-input v-if="item.type === 'currency'"
                            v-model="formData[key]"
                            :label="item.label"
                            :placeholder="item.placeholder"
                            :required="item.required"
                            :currency-code="item.currencyCode || 'USD'"
                            :show-currency-symbol="item.showCurrencySymbol !== false"
                            :hint="item.hint"
                            :error="item.error"
                            :disabled="item.disabled"
                            :readonly="item.readonly"
                            :variant="item.variant"
                            :rounded="item.rounded"
                            :floating-label="item.floatingLabel"
                            :rules="item.rules || item.props?.rules || []"
                            v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, parseFloat(value))"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- File Upload -->
                        <c-file-upload v-if="item.type === 'file' || item.type === 'fileupload'" v-model="formData[key]"
                            :accept="item.accept" :multiple="item.multiple" :max-files="item.maxFiles"
                            :max-file-size="item.maxFileSize" :auto-upload="item.autoUpload" :url="item.url"
                            :method="item.method" :headers="item.headers" :with-credentials="item.withCredentials"
                            :form-data-name="item.formDataName" :disabled="item.disabled"
                            :dropzone-text="item.dropzoneText" :browse-button-text="item.browseButtonText"
                            :upload-button-text="item.uploadButtonText" :required="item.required"
                            v-bind="item.props || {}"
                            @upload-success="(file) => handleFileUploadSuccess(key as string, file)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Number Input -->
                        <c-number-input v-if="item.type === 'number'" v-model="formData[key]" :label="item.label"
                            :min="item.min" :max="item.max" :step="item.step" :disabled="item.disabled"
                            :helper-text="item.helperText" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Textarea -->
                        <c-textarea v-if="item.type === 'textarea'" v-model="formData[key]" :label="item.label"
                            :placeholder="item.placeholder" :required="item.required" :maxlength="item.maxlength"
                            :length-count="item.lengthCount" :resize="item.resize !== false"
                            :autoresize="item.autoresize !== false" :rules="item.rules || item.props?.rules || []"
                            v-bind="item.props || {}" @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Timepicker -->
                        <c-timepicker v-if="item.type === 'time' || item.type === 'timepicker'" v-model="formData[key]"
                            :label="item.label" :min-time="item.minTime" :max-time="item.maxTime"
                            :disabled="item.disabled" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Toggle -->
                        <c-toggle v-if="item.type === 'toggle'" v-model="formData[key]" :label="item.label"
                            :disabled="item.disabled" v-bind="item.props || {}"
                            @update:modelValue="(value) => updateField(key as string, value)"
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" />

                        <!-- Header Component -->
                        <div v-if="item.type === 'header'" :class="`col-span-${item.size || 12}`">
                            <div :class="[
                                'mb-3 pb-2 font-medium text-lg border-b',
                                item.props?.variant === 'primary' ? 'text-primary-600 border-neutral-200 dark:border-neutral-900' :
                                item.props?.variant === 'secondary' ? 'text-secondary-600 border-neutral-200 dark:border-neutral-800' :
                                'text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-900'
                            ]">

                                {{ item.label }}
                            </div>
                        </div>

                        <!-- Custom Component for Slots -->
                        <div v-if="item.type === 'custom'" :class="`col-span-${item.size || 12}`">
                            <!-- Try both camelCase and kebab-case slot names -->
                            <slot v-if="$slots[key]" :name="key" v-bind="{
                                data: typeof item.props?.data === 'function' ? item.props?.data() : item.props?.data
                            }"></slot>
                            <slot v-else-if="$slots[toKebabCase(String(key))]" :name="toKebabCase(String(key))" v-bind="{
                                data: typeof item.props?.data === 'function' ? item.props?.data() : item.props?.data
                            }"></slot>
                            <slot v-else-if="$slots[toCamelCase(String(key))]" :name="toCamelCase(String(key))" v-bind="{
                                data: typeof item.props?.data === 'function' ? item.props?.data() : item.props?.data
                            }"></slot>
                        </div>

                        <!-- Custom Object Component - for multiple items with the same structure -->
                        <div v-if="item.type === 'custom-object'" :class="`col-span-${item.size || 12}`">
                            <template v-if="item.props?.items && item.props?.templateName">
                                <div v-for="(itemData, itemKey) in item.props.items" :key="itemKey">
                                    <slot :name="item.props.templateName" v-bind="{
                                        data: itemData,
                                        key: itemKey,
                                        formData: formData,
                                    }"></slot>
                                </div>
                            </template>
                        </div>

                        <c-button v-if="item.type === 'submit'" class="w-full pb-4 pt-4" type="submit"
                            buttonType="button" size="2xl" @click="handleSubmitButtonClick" :disabled="!isFormValid">
                            {{ item.label || 'Submit' }}
                        </c-button>
                    </div>
                </slot>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, onMounted, computed } from "vue";
import type { PropType } from "vue";
import CAlert from "@components/layout/CAlert.vue";
import CAutocomplete from "./CAutocomplete.vue";
import CFileUpload from "./CFileUpload.vue";
import CNumberInput from "./CNumberInput.vue";
import CTextarea from "./CTextarea.vue";
import CTimepicker from "./CTimepicker.vue";
import CToggle from "./CToggle.vue";
import CChipsInput from "./CChipsInput.vue";
import CCurrencyInput from "./CCurrencyInput.vue";

interface BaseFieldProps {
    label?: string;
    placeholder?: string;
    required?: boolean;
    size?: number;
    [key: string]: any;
    rules?: Array<any>,
    props?: Record<string, any>,
}

interface InputFieldProps extends BaseFieldProps {
    type: 'input';
}

interface ComboboxFieldProps extends BaseFieldProps {
    type: 'combobox' | 'select';
    items?: any[] | string;
    remoteDataPrimaryKey?: string;
    remoteDataLabelKey?: string;
    remoteDataKeyValue?: boolean;
}

interface CheckboxFieldProps extends BaseFieldProps {
    type: 'checkbox';
}

interface RadioFieldProps extends BaseFieldProps {
    type: 'radio';
    value: any;
}

interface DatepickerFieldProps extends BaseFieldProps {
    type: 'date' | 'datepicker';
}

interface AutocompleteFieldProps extends BaseFieldProps {
    type: 'autocomplete';
    options?: any[];
}

interface ChipsInputFieldProps extends BaseFieldProps {
    type: 'chips' | 'chipsinput';
    options?: any[];
    minTags?: number;
    maxTags?: number;
    duplicates?: boolean;
    allowCustom?: boolean;
    chipBgColor?: string;
    chipTextColor?: string;
    onAdd?: (chip: any) => void;
    onRemove?: (chip: any) => void;
    onClear?: () => void;
}

interface CurrencyInputFieldProps extends BaseFieldProps {
    type: 'currency';
    currencyCode?: string;
    showCurrencySymbol?: boolean;
    hint?: string;
    error?: string;
    disabled?: boolean;
    readonly?: boolean;
    variant?: 'outline' | 'filled' | 'underlined';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    floatingLabel?: boolean;
}

interface FileUploadFieldProps extends BaseFieldProps {
    type: 'file' | 'fileupload';
    accept?: string;
    multiple?: boolean;
    maxFiles?: number;
    maxFileSize?: number;
    autoUpload?: boolean;
    url?: string;
    method?: string;
    headers?: Record<string, string>;
    withCredentials?: boolean;
    formDataName?: string;
    dropzoneText?: string;
    browseButtonText?: string;
    uploadButtonText?: string;
}

interface NumberInputFieldProps extends BaseFieldProps {
    type: 'number';
    min?: number;
    max?: number;
    step?: number;
    helperText?: string;
}

interface TextareaFieldProps extends BaseFieldProps {
    type: 'textarea';
    maxlength?: number;
    lengthCount?: boolean;
    resize?: boolean;
    autoresize?: boolean;
}

interface TimepickerFieldProps extends BaseFieldProps {
    type: 'time' | 'timepicker';
    minTime?: string;
    maxTime?: string;
}

interface ToggleFieldProps extends BaseFieldProps {
    type: 'toggle';
}

interface SubmitButtonProps extends BaseFieldProps {
    type: 'submit';
}

interface HeaderFieldProps extends BaseFieldProps {
    type: 'header';
    props?: {
        variant?: 'primary' | 'secondary' | 'default';
        icon?: string;
    };
}

interface CustomFieldProps extends BaseFieldProps {
    type: 'custom';
    props?: {
        data?: any | (() => any);
    };
}

interface CustomObjectFieldProps extends BaseFieldProps {
    type: 'custom-object';
    props?: {
        items?: Record<string, any>;
        templateName?: string;
        [key: string]: any;
    };
}

type FieldProps =
    | InputFieldProps
    | ComboboxFieldProps
    | CheckboxFieldProps
    | RadioFieldProps
    | DatepickerFieldProps
    | AutocompleteFieldProps
    | FileUploadFieldProps
    | NumberInputFieldProps
    | TextareaFieldProps
    | TimepickerFieldProps
    | ToggleFieldProps
    | SubmitButtonProps
    | HeaderFieldProps
    | CustomFieldProps
    | CustomObjectFieldProps
    | ChipsInputFieldProps
    | CurrencyInputFieldProps

interface IFormBuilderSchema {
    [key: string]: FieldProps & {
        props?: Record<string, any>;
    };
}

const props = defineProps({
    modelValue: {
        type: Object as PropType<Record<string, any>>,
        required: true
    },
    schema: {
        type: Object as PropType<IFormBuilderSchema>,
        required: true
    }
});

const emit = defineEmits(["update:modelValue", "submit"]);
const formData = ref<Record<string, any>>({});
const fieldRefs = ref<Record<string, any>>({});
const fieldValidity = ref<Record<string, boolean>>({});
const showValidationAlert = ref(false);
const invalidFields = ref<Record<string, string>>({});

const updateField = (key: string | number, value: any) => {
    if (props.schema[key]?.type === 'chips' || props.schema[key]?.type === 'chipsinput') {
        if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && 'label' in value[0]) {
            formData.value[key] = value.map(item => item.label);
        } else {
            formData.value[key] = value;
        }
    } else {
        formData.value[key] = value;
    }

    validateField(key);
    emit("update:modelValue", { ...formData.value });
    checkFormValidity();
};

watch(() => props.modelValue, (newValue) => {
    if (newValue && Object.keys(newValue).length > 0) {
        const processedData = { ...newValue };

        // For each field in the schema
        for (const key in props.schema) {
            // If it's a chips input field and the value is already in processedData
            if ((props.schema[key].type === 'chips' || props.schema[key].type === 'chipsinput') &&
                key in processedData && Array.isArray(processedData[key])) {

                // If the array contains strings, convert them to objects for the component
                if (processedData[key].length > 0 && typeof processedData[key][0] === 'string') {
                    processedData[key] = processedData[key].map((label: string) => ({
                        value: `${label}-${Date.now()}`, // Generate a unique value
                        label: label
                    }));
                }
            }
        }

        formData.value = processedData;
    }
}, { deep: true });

onMounted(() => {
    // Process the initial data for special handling of chips input fields
    const processedData = { ...props.modelValue };

    // For each field in the schema
    for (const key in props.schema) {
        // If it's a chips input field and the value is already in formData
        if ((props.schema[key].type === 'chips' || props.schema[key].type === 'chipsinput') &&
            key in processedData && Array.isArray(processedData[key])) {

            // If the array contains strings, convert them to objects for the component
            if (processedData[key].length > 0 && typeof processedData[key][0] === 'string') {
                processedData[key] = processedData[key].map((label: string) => ({
                    value: `${label}-${Date.now()}`, // Generate a unique value
                    label: label
                }));
            }
        }
    }

    formData.value = processedData;
    initializeFieldValidity();
    setTimeout(() => {
        checkFormValidity();
    }, 100);
});

const initializeFieldValidity = () => {
    Object.keys(props.schema).forEach(key => {
        const isRequired = props.schema[key].required === true;
        const hasValue = key in formData.value &&
            formData.value[key] !== undefined &&
            formData.value[key] !== null &&
            formData.value[key] !== '';

        fieldValidity.value[key] = !isRequired || hasValue;
    });
};

const getFieldLabel = (key: string): string => {
    return props.schema[key]?.label || key;
};

const validateField = (key: string | number): boolean => {
    if (props.schema[key]?.type === 'submit') {
        fieldValidity.value[key] = true;
        return true;
    }

    const isRequired = props.schema[key]?.required === true;
    const isEmpty = formData.value[key] === undefined ||
        formData.value[key] === null ||
        formData.value[key] === '';

    if (isRequired && isEmpty) {
        fieldValidity.value[key] = false;
        invalidFields.value[key] = "Required field not filled";
        return false;
    }

    if (fieldRefs.value[key] && props.schema[key]?.props?.rules && fieldRefs.value[key].validate) {
        try {
            const validationResult = fieldRefs.value[key].validate();
            console.log(validationResult);

            if (!validationResult)
                invalidFields.value[key] = "Custom rules validation failed";
            else
                delete invalidFields.value[key];

            return fieldValidity.value[key];
        } catch (error) {
            console.error(`Error validating field ${key}:`, error);
            fieldValidity.value[key] = false;
            invalidFields.value[key] = "Validation error: " + (error instanceof Error ? error.message : String(error));
            return false;
        }
    }

    fieldValidity.value[key] = true;
    delete invalidFields.value[key];
    return true;
};

const validate = (): boolean => {
    invalidFields.value = {};
    let isValid = true;

    for (const key in props.schema) {
        if (props.schema[key].type === 'submit') continue;

        const fieldValid = validateField(key);
        isValid = isValid && fieldValid;
    }

    return isValid;
};

const checkFormValidity = () => {
    validate();
};

const isFormValid = computed((): boolean => {
    if (Object.keys(fieldValidity.value).length === 0) return false;

    for (const key in fieldValidity.value) {
        if (props.schema[key]?.type === 'submit') continue;

        if (!fieldValidity.value[key])
            return false;
    }

    return true;
});

const handleFileSelected = (key: string, fileInfo: any) => {
    validateField(key);
};

const handleFileUploadSuccess = (key: string, fileInfo: any) => {
    validateField(key);

    if (fileInfo.content && formData.value[key]) {
        const fileIndex = formData.value[key].findIndex(f =>
            f.name === fileInfo.file.name &&
            f.size === fileInfo.file.size
        );

        if (fileIndex !== -1) {
            if (!formData.value[key][fileIndex].content && fileInfo.content)
                formData.value[key][fileIndex].content = fileInfo.content;

            formData.value[key][fileIndex].status = 'success';
        }

        emit("update:modelValue", { ...formData.value });
    }
};

const reset = () => {
    formData.value = { ...props.modelValue };

    for (const key in fieldRefs.value) {
        if (fieldRefs.value[key] && fieldRefs.value[key].reset)
            fieldRefs.value[key].reset();
    }

    initializeFieldValidity();
    invalidFields.value = {};
};


const toggleValidationAlert = () => {
    showValidationAlert.value = !showValidationAlert.value;

    if (showValidationAlert.value)
        checkFormValidity();
};

const handleSubmitButtonClick = () => {
    if (validate())
        emit("submit", formData.value);
    else
        showValidationAlert.value = true;
};

const toKebabCase = (str: string): string => {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

const toCamelCase = (str: string): string => {
    return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};

defineExpose({
    reset,
    validate,
    formData
});
</script>
