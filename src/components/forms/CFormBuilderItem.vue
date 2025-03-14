<template>
    <div :class="[`col-span-${field.size || 12}`]">
        <!-- Input -->
        <c-input v-if="field.type === 'input'" v-model="localValue" :label="field.label"
            :placeholder="field.placeholder" :required="field.required" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :rules="field.rules || field.props?.rules || []"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Combobox/Select -->
        <c-combobox v-if="field.type === 'combobox' || field.type === 'select'" v-model="localValue"
            :label="field.label" :placeholder="field.placeholder" :required="field.required"
            :options="field.items" :remoteDataPrimaryKey="field.remoteDataPrimaryKey"
            :remoteDataLabelKey="field.remoteDataLabelKey" :remoteDataKeyValue="field.remoteDataKeyValue"
            :rules="field.rules || field.props?.rules || []" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }">
            <!-- Forward the selected slot -->
            <template v-if="$slots.selected" #selected="slotProps">
                <slot name="selected" v-bind="slotProps"></slot>
            </template>
            <!-- Forward the option slot -->
            <template v-if="$slots.option" #option="slotProps">
                <slot name="option" v-bind="slotProps"></slot>
            </template>
            <!-- Forward the subitem slot -->
            <template v-if="$slots.subitem" #subitem="slotProps">
                <slot name="subitem" v-bind="slotProps"></slot>
            </template>
        </c-combobox>

        <!-- Checkbox -->
        <c-checkbox v-if="field.type === 'checkbox'" v-model="localValue" :label="field.label"
            :required="field.required" v-bind="field.props || {}"
            :rules="field.rules || field.props?.rules || []"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Radio -->
        <c-radio v-if="field.type === 'radio'" v-model="localValue" :label="field.label"
            :value="field.value" v-bind="field.props || {}" :required="field.required"
            :rules="field.rules || field.props?.rules || []"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Datepicker -->
        <c-datepicker v-if="field.type === 'date' || field.type === 'datepicker'" v-model="localValue"
            :label="field.label" :placeholder="field.placeholder" :required="field.required"
            :rules="field.rules || field.props?.rules || []" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Autocomplete -->
        <c-autocomplete v-if="field.type === 'autocomplete'" v-model="localValue" :label="field.label"
            :placeholder="field.placeholder" :required="field.required" :options="field.options || []"
            :rules="field.rules || field.props?.rules || []" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Chips Input -->
        <c-chips-input v-if="field.type === 'chips' || field.type === 'chipsinput'"
            v-model="localValue"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            :options="field.options || []"
            :minTags="field.minTags"
            :maxTags="field.maxTags"
            :duplicates="field.duplicates"
            :allowCustom="field.allowCustom !== false"
            :chipBgColor="field.chipBgColor"
            :chipTextColor="field.chipTextColor"
            :rules="field.rules || field.props?.rules || []"
            v-bind="field.props || {}"
            @update:modelValue="updateValue"
            @add="(chip) => field.onAdd && field.onAdd(chip)"
            @remove="(chip) => field.onRemove && field.onRemove(chip)"
            @clear="() => field.onClear && field.onClear()"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Currency Input -->
        <c-currency-input v-if="field.type === 'currency'"
            v-model="localValue"
            :label="field.label"
            :placeholder="field.placeholder"
            :required="field.required"
            :currency-code="field.currencyCode || 'USD'"
            :show-currency-symbol="field.showCurrencySymbol !== false"
            :hint="field.hint"
            :error="field.error"
            :disabled="field.disabled"
            :readonly="field.readonly"
            :variant="field.variant"
            :rounded="field.rounded"
            :floating-label="field.floatingLabel"
            :rules="field.rules || field.props?.rules || []"
            v-bind="field.props || {}"
            @update:modelValue="(val) => updateValue(parseFloat(val))"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Hidden Input -->
        <input v-if="field.type === 'hidden'"
            type="hidden"
            v-model="localValue"
            @update:modelValue="updateValue" />

        <!-- Slider -->
        <div v-if="field.type === 'slider'" class="w-full">
            <label v-if="field.label" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500">*</span>
            </label>
            <template v-if="field.type === 'slider'">
                <c-slider
                    :model-value="getNumberValue(localValue)"
                    :min="field.min || 0"
                    :max="field.max || 100"
                    :step="field.step || 1"
                    :orientation="field.orientation || 'horizontal'"
                    :direction="field.direction || 'ltr'"
                    :disabled="field.disabled || disabled"
                    :show-tooltip="field.showTooltip || 'always'"
                    :tooltip-position="field.tooltipPosition || 'top'"
                    :format="field.format"
                    :merge="field.merge || 10"
                    :show-ticks="field.showTicks || false"
                    :ticks="field.ticks || []"
                    :tick-labels="field.tickLabels || []"
                    :tick-density="field.tickDensity || 0"
                    :colors="field.colors || {}"
                    :currency-mode="field.currencyMode || false"
                    :currency-code="field.currencyCode || 'USD'"
                    :show-currency-symbol="field.showCurrencySymbol !== false"
                    v-bind="field.props || {}"
                    @update:model-value="updateValue"
                    @slide="field.onSlide && field.onSlide($event)"
                    @change="field.onChange && field.onChange($event)"
                    @start="field.onStart && field.onStart($event)"
                    @end="field.onEnd && field.onEnd($event)"
                    :ref="el => { if (el) fieldRef = el; }"
                />
            </template>
            <div v-if="field.helperText" class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {{ field.helperText }}
            </div>
        </div>

        <!-- File Upload -->
        <c-file-upload v-if="field.type === 'file' || field.type === 'fileupload'" v-model="localValue"
            :accept="field.accept" :multiple="field.multiple" :max-files="field.maxFiles"
            :max-file-size="field.maxFileSize" :auto-upload="field.autoUpload" :url="field.url"
            :method="field.method" :headers="field.headers" :with-credentials="field.withCredentials"
            :form-data-name="field.formDataName" :disabled="field.disabled"
            :dropzone-text="field.dropzoneText" :browse-button-text="field.browseButtonText"
            :upload-button-text="field.uploadButtonText" :required="field.required"
            v-bind="field.props || {}"
            @upload-success="handleFileUploadSuccess"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Number Input -->
        <c-number-input v-if="field.type === 'number'" v-model="localValue" :label="field.label"
            :min="field.min" :max="field.max" :step="field.step" :disabled="field.disabled"
            :helper-text="field.helperText" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Textarea -->
        <c-textarea v-if="field.type === 'textarea'" v-model="localValue" :label="field.label"
            :placeholder="field.placeholder" :required="field.required" :maxlength="field.maxlength"
            :length-count="field.lengthCount" :resize="field.resize !== false"
            :autoresize="field.autoresize !== false" :rules="field.rules || field.props?.rules || []"
            v-bind="field.props || {}" @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Timepicker -->
        <c-timepicker v-if="field.type === 'time' || field.type === 'timepicker'" v-model="localValue"
            :label="field.label" :min-time="field.minTime" :max-time="field.maxTime"
            :disabled="field.disabled" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Toggle -->
        <c-toggle v-if="field.type === 'toggle'" v-model="localValue" :label="field.label"
            :disabled="field.disabled" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Header Component -->
        <div v-if="field.type === 'header'">
            <div :class="[
                'mb-3 pb-2 font-medium text-lg border-b',
                field.props?.variant === 'primary' ? 'text-primary-600 border-neutral-200 dark:border-neutral-900' :
                field.props?.variant === 'secondary' ? 'text-secondary-600 border-neutral-200 dark:border-neutral-800' :
                'text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-900'
            ]">
                {{ field.label }}
            </div>
        </div>

        <!-- Custom Component for Slots -->
        <div v-if="field.type === 'custom'">
            <slot name="custom" v-bind="{
                data: typeof field.props?.data === 'function' ? field.props?.data() : field.props?.data
            }"></slot>
        </div>

        <!-- Custom Object Component - for multiple items with the same structure -->
        <div v-if="field.type === 'custom-object'">
            <template v-if="field.props?.items && field.props?.templateName">
                <div v-for="(itemData, itemKey) in field.props.items" :key="itemKey">
                    <slot name="custom-object" v-bind="{
                        data: itemData,
                        key: itemKey,
                        templateName: field.props.templateName
                    }"></slot>
                </div>
            </template>
        </div>

        <!-- Password Input -->
        <c-password-input v-if="field.type === 'password'" v-model="localValue"
            :label="field.label" :placeholder="field.placeholder" :required="field.required"
            :require-uppercase="field.requireUppercase" :require-lowercase="field.requireLowercase"
            :require-numbers="field.requireNumbers" :require-special-chars="field.requireSpecialChars"
            :min-length="field.minLength" :show-strength-bar="field.showStrengthBar"
            :show-requirements="field.showRequirements" :rules="field.rules || field.props?.rules || []"
            v-bind="field.props || {}" @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- WYSIWYG Editor -->
        <c-wysiwyg-editor v-if="field.type === 'wysiwyg' || field.type === 'richtext' || field.type === 'editor'"
            v-model="localValue" :label="field.label" :placeholder="field.placeholder"
            :required="field.required" :disabled="field.disabled" :output-format="field.outputFormat"
            :rules="field.rules || field.props?.rules || []" v-bind="field.props || {}"
            @update:modelValue="updateValue"
            :ref="el => { if (el) fieldRef = el; }" />

        <!-- Submit Button -->
        <c-button v-if="field.type === 'submit'" class="w-full pb-4 pt-4" type="submit"
            buttonType="button" size="2xl" @click="$emit('submit')" :disabled="disabled"
            v-bind="field.props || {}">
            {{ field.label || 'Submit' }}
        </c-button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from "vue";
import type { PropType } from "vue";
import CSlider from "@components/forms/CSlider.vue";

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

interface PasswordInputFieldProps extends BaseFieldProps {
    type: 'password';
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumbers?: boolean;
    requireSpecialChars?: boolean;
    minLength?: number;
    showStrengthBar?: boolean;
    showRequirements?: boolean;
}

interface WysiwygEditorFieldProps extends BaseFieldProps {
    type: 'wysiwyg' | 'richtext' | 'editor';
    placeholder?: string;
    outputFormat?: 'html' | 'markdown';
}

interface HiddenFieldProps extends BaseFieldProps {
    type: 'hidden';
}

interface SliderFieldProps extends BaseFieldProps {
    type: 'slider';
    min?: number;
    max?: number;
    step?: number;
    orientation?: 'horizontal' | 'vertical';
    direction?: 'ltr' | 'rtl';
    showTooltip?: 'always' | 'drag' | 'focus' | 'never';
    tooltipPosition?: 'top' | 'bottom';
    format?: any;
    merge?: number;
    showTicks?: boolean;
    ticks?: any[];
    tickLabels?: string[];
    tickDensity?: number;
    colors?: Record<string, string>;
    currencyMode?: boolean;
    currencyCode?: string;
    showCurrencySymbol?: boolean;
    helperText?: string;
    onSlide?: (value: any) => void;
    onChange?: (value: any) => void;
    onStart?: (value: any) => void;
    onEnd?: (value: any) => void;
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
    | PasswordInputFieldProps
    | WysiwygEditorFieldProps
    | HiddenFieldProps
    | SliderFieldProps;

const props = defineProps({
    field: {
        type: Object as PropType<FieldProps>,
        required: true
    },
    value: {
        type: [String, Number, Boolean, Array, Object],
        default: undefined
    },
    disabled: {
        type: Boolean,
        default: false
    },
    fieldName: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:value', 'validate', 'submit']);
const fieldRef = ref<any>(null);
const localValue = ref(props.value);

const getNumberValue = (value: any): number | number[] => {
    if (Array.isArray(value)) {
        return value.map(val => {
            if (typeof val === 'string') return parseFloat(val) || 0;
            if (typeof val === 'boolean') return val ? 1 : 0;
            return Number(val) || 0;
        });
    }

    if (value === undefined || value === null) {
        return props.field.type === 'slider' ? (props.field.min || 0) : 0;
    }
    if (typeof value === 'string') {
        return parseFloat(value) || 0;
    }
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    if (typeof value === 'object') {
        return 0;
    }
    return Number(value) || 0;
};

watch(() => props.value, (newVal) => {
    if (newVal !== localValue.value) {
        localValue.value = newVal;
    }
}, { deep: true });

const updateValue = (value: any) => {
    localValue.value = value;
    emit('update:value', value);
};

const handleFileUploadSuccess = (fileInfo: any) => {
    if (!fileInfo.content || !localValue.value || !Array.isArray(localValue.value)) {
        return;
    }

    const fileIndex = localValue.value.findIndex((f: any) =>
        f && typeof f === 'object' &&
        f.name === fileInfo.file.name &&
        f.size === fileInfo.file.size
    );

    if (fileIndex !== -1) {
        const updatedFiles = [...localValue.value];
        if (!updatedFiles[fileIndex].content && fileInfo.content)
            updatedFiles[fileIndex].content = fileInfo.content;

        updatedFiles[fileIndex].status = 'success';
        localValue.value = updatedFiles;
        emit('update:value', updatedFiles);
    }
};

const validate = (): boolean => {
    if (fieldRef.value && fieldRef.value.validate) {
        try {
            const result = fieldRef.value.validate();
            emit('validate', props.fieldName, result);
            return result;
        } catch (error) {
            console.error(`Error validating field ${props.fieldName}:`, error);
            emit('validate', props.fieldName, false);
            return false;
        }
    }

    if (props.field.required &&
        (localValue.value === undefined ||
         localValue.value === null ||
         localValue.value === '')) {
        emit('validate', props.fieldName, false);
        return false;
    }

    emit('validate', props.fieldName, true);
    return true;
};

defineExpose({
    validate,
    fieldRef,
    localValue
});
</script>
