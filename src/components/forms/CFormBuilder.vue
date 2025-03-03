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
                            :ref="el => { if (el) fieldRefs[key as string] = el; }" class="my-1" />

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
    | SubmitButtonProps;

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
    formData.value[key] = value;
    validateField(key);
    emit("update:modelValue", { ...formData.value });
    checkFormValidity();
};

watch(() => props.modelValue, (newValue) => {
    if (newValue && Object.keys(newValue).length > 0)
        formData.value = { ...newValue };
}, { deep: true });

onMounted(() => {
    formData.value = { ...props.modelValue };
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

// Handlers for file upload component
const handleFileSelected = (key: string, fileInfo: any) => {
    // Deprecated - usando v-model direto no componente
    validateField(key);
};

const handleFileUploadSuccess = (key: string, fileInfo: any) => {
    // Quando o upload é bem-sucedido, garantimos que a validação seja executada
    validateField(key);

    // Se o fileInfo contém content (base64), vamos garantir que está no model
    if (fileInfo.content && formData.value[key]) {
        // Encontra o item correspondente no array de arquivos e atualiza seu status
        const fileIndex = formData.value[key].findIndex(f =>
            f.name === fileInfo.file.name &&
            f.size === fileInfo.file.size
        );

        if (fileIndex !== -1) {
            // Garante que o conteúdo base64 seja preservado no modelo
            if (!formData.value[key][fileIndex].content && fileInfo.content) {
                formData.value[key][fileIndex].content = fileInfo.content;
            }

            // Atualiza o status para success
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

defineExpose({
    reset,
    validate,
    formData
});
</script>
