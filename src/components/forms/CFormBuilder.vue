<template>
    <div class="form-builder">
        <c-alert v-if="showValidationAlert && Object.keys(invalidFields).length > 0" type="error" icon
            title="Form Validation" class="mb-4" :closable="true" @close="showValidationAlert = false">
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
                <div v-if="item && item.type === 'tabs'" class="col-span-12">
                    <c-tabs
                        :tabs="convertTabsToFormat(item.items)"
                        :styleType="item.props?.styleType || 'default'"
                        :modelValue="getTabIndexForTabsConfig(item.items)"
                        @tab-change="(index) => !isInsideCodePreview && handleTabChange(index, item.items)"
                        ref="tabsComponent"
                    >
                        <template v-for="(tab, tabKey) in item.items" :key="tabKey" #[`tab-${tabKey}`]>
                            <div class="grid grid-cols-12 gap-4">
                                <template v-for="(field, fieldKey) in tab.schema || {}" :key="`${tabKey}-${fieldKey}`">
                                    <c-form-builder-item
                                        :field="field"
                                        :value="formData[fieldKey]"
                                        :field-name="String(fieldKey)"
                                        :disabled="isSubmitButton(field) && !isFormValid"
                                        @update:value="(value) => updateField(fieldKey, value)"
                                        @validate="(fieldName, isValid) => handleFieldValidation(fieldName, isValid)"
                                        @submit="handleSubmitButtonClick"
                                        @mounted="(el) => registerFieldRef(fieldKey, el)"
                                    >
                                        <!-- Forward slots para item-selected -->
                                        <template v-if="$slots && $slots[`${fieldKey}-selected`]" #selected="slotProps">
                                            <slot :name="`${fieldKey}-selected`" v-bind="slotProps"></slot>
                                        </template>

                                        <!-- Forward slots para item-option -->
                                        <template v-if="$slots && $slots[`${fieldKey}-option`]" #option="slotProps">
                                            <slot :name="`${fieldKey}-option`" v-bind="slotProps"></slot>
                                        </template>

                                        <!-- Forward slots para item-subitem -->
                                        <template v-if="$slots && $slots[`${fieldKey}-subitem`]" #subitem="slotProps">
                                            <slot :name="`${fieldKey}-subitem`" v-bind="slotProps"></slot>
                                        </template>

                                        <!-- Forward slots para custom -->
                                        <template v-if="$slots && $slots[fieldKey]" #custom="slotProps">
                                            <slot :name="fieldKey" v-bind="slotProps"></slot>
                                        </template>
                                        <template v-else-if="$slots && $slots[toKebabCase(String(fieldKey))]" #custom="slotProps">
                                            <slot :name="toKebabCase(String(fieldKey))" v-bind="slotProps"></slot>
                                        </template>
                                        <template v-else-if="$slots && $slots[toCamelCase(String(fieldKey))]" #custom="slotProps">
                                            <slot :name="toCamelCase(String(fieldKey))" v-bind="slotProps"></slot>
                                        </template>

                                        <!-- Forward slots para custom-object -->
                                        <template v-if="field && field.type === 'custom-object' && field.props?.templateName && $slots && $slots[field.props.templateName]" #custom-object="slotProps">
                                            <slot :name="field.props.templateName" v-bind="{
                                                data: slotProps.data,
                                                key: slotProps.key,
                                                formData: formData
                                            }"></slot>
                                        </template>
                                    </c-form-builder-item>
                                </template>
                            </div>
                        </template>
                    </c-tabs>
                </div>

                <!-- Normal field handling -->
                <c-form-builder-item
                    :field="item"
                    :value="formData[key]"
                    :field-name="String(key)"
                    :disabled="isSubmitButton(item) && !isFormValid"
                    @update:value="(value) => updateField(key, value)"
                    @validate="(fieldName, isValid) => handleFieldValidation(fieldName, isValid)"
                    @submit="handleSubmitButtonClick"
                    @mounted="(el) => registerFieldRef(key, el)"
                >
                    <!-- Forward slots para item-selected -->
                    <template v-if="$slots && $slots[`${key}-selected`]" #selected="slotProps">
                        <slot :name="`${key}-selected`" v-bind="slotProps"></slot>
                    </template>

                    <!-- Forward slots para item-option -->
                    <template v-if="$slots && $slots[`${key}-option`]" #option="slotProps">
                        <slot :name="`${key}-option`" v-bind="slotProps"></slot>
                    </template>

                    <!-- Forward slots para item-subitem -->
                    <template v-if="$slots && $slots[`${key}-subitem`]" #subitem="slotProps">
                        <slot :name="`${key}-subitem`" v-bind="slotProps"></slot>
                    </template>

                    <!-- Forward slots para custom -->
                    <template v-if="$slots && $slots[key]" #custom="slotProps">
                        <slot :name="key" v-bind="slotProps"></slot>
                    </template>
                    <template v-else-if="$slots && $slots[toKebabCase(String(key))]" #custom="slotProps">
                        <slot :name="toKebabCase(String(key))" v-bind="slotProps"></slot>
                    </template>
                    <template v-else-if="$slots && $slots[toCamelCase(String(key))]" #custom="slotProps">
                        <slot :name="toCamelCase(String(key))" v-bind="slotProps"></slot>
                    </template>

                    <!-- Forward slots para custom-object -->
                    <template v-if="item && item.type === 'custom-object' && item.props?.templateName && $slots && $slots[item.props.templateName]" #custom-object="slotProps">
                        <slot :name="item.props.templateName" v-bind="{
                            data: slotProps.data,
                            key: slotProps.key,
                            formData: formData
                        }"></slot>
                    </template>
                </c-form-builder-item>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, onMounted, computed } from "vue";
import type { PropType } from "vue";

const isSubmitButton = (item: any) => item && item.type === 'submit';

const safeString = (value: any): string => {
  if (value === undefined || value === null) {
    return '';
  }
  return String(value);
};

const toKebabCase = (str: string | number): string => {
  return safeString(str).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

const toCamelCase = (str: string | number): string => {
  return safeString(str).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};

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

interface TabItem {
    id?: string;
    label: string;
    type?: string;
    schema?: Record<string, any>;
    items?: Record<string, any>;
    icon?: any;
}

interface TabsFieldProps extends BaseFieldProps {
    type: 'tabs';
    label?: string;
    items: Record<string, TabItem>;
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
    | TabsFieldProps

interface FormBuilderSchema {
    [key: string]: FieldProps & {
        props?: Record<string, any>;
    };
}

interface TabConfig {
    id: string;
    title: string;
    icon?: any;
    schema: FormBuilderSchema;
}

interface TabsConfig {
    [key: string]: TabConfig;
}

const props = defineProps({
    modelValue: {
        type: Object as PropType<Record<string, any>>,
        required: true
    },
    schema: {
        type: Object as PropType<FormBuilderSchema>,
        required: true
    },
    tabs: {
        type: Object as PropType<TabsConfig>,
        default: () => ({})
    }
});

const emit = defineEmits(["update:modelValue", "submit"]);
const formData = ref<Record<string, any>>({});
const fieldRefs = ref<Record<string, any>>({});
const fieldValidity = ref<Record<string, boolean>>({});
const showValidationAlert = ref(false);
const invalidFields = ref<Record<string, string>>({});

const activeTab = ref('');
const isInsideCodePreview = ref(false);

const hasTabs = computed(() => {
    return props.tabs && Object.keys(props.tabs).length > 0;
});

const tabsConfig = computed(() => {
    if (!hasTabs.value || !props.tabs) return [];

    return Object.keys(props.tabs).map(tabKey => {
        const tab = props.tabs[tabKey];
        if (!tab) return { id: `tab-${tabKey}`, title: `Tab ${tabKey}` };

        return {
            id: tab.id || `tab-${tabKey}`,
            title: tab.title || `Tab ${tabKey}`,
            icon: tab.icon
        };
    }).filter(tab => tab.id && tab.title);
});

const updateField = (key: string | number, value: any) => {
    const fieldInSchema = props.schema?.[key];
    const fieldInTabs = findFieldInTabs(key);
    const field = fieldInSchema || fieldInTabs;

    if (!field) {
        formData.value[key] = value;
        emit("update:modelValue", { ...formData.value });
        return;
    }

    if ((field.type === 'chips' || field.type === 'chipsinput')) {
        if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && value[0] !== null && 'label' in value[0]) {
            formData.value[key] = value.map(item => item.label);
        } else {
            formData.value[key] = value;
        }
    } else {
        formData.value[key] = value;
    }

    emit("update:modelValue", { ...formData.value });
    checkFormValidity();
};

const findFieldInTabs = (key: string | number) => {
    if (!hasTabs.value) return undefined;

    for (const tabKey in props.tabs) {
        const tab = props.tabs[tabKey];

        if (tab.schema && key in tab.schema)
            return tab.schema[key];
    }
    return undefined;
};

const handleFieldValidation = (fieldName: string, isValid: boolean) => {
    fieldValidity.value[fieldName] = isValid;

    if (!isValid) {
        const field = props.schema[fieldName] || findFieldInTabs(fieldName);
        invalidFields.value[fieldName] = "Field validation failed";
    } else {
        delete invalidFields.value[fieldName];
    }
};

watch(() => props.modelValue, (newValue) => {
    if (newValue && Object.keys(newValue).length > 0) {
        const processedData = { ...newValue };

        processChipsInputs(processedData, props.schema);

        if (hasTabs.value) {
            for (const tabKey in props.tabs) {
                const tab = props.tabs[tabKey];
                processChipsInputs(processedData, tab.schema);
            }
        }

        formData.value = processedData;
    }
}, { deep: true });

const processChipsInputs = (data: Record<string, any>, schema: FormBuilderSchema) => {
    if (!schema) return;

    for (const key in schema) {
        const field = schema[key];
        if (!field) continue;

        if ((field.type === 'chips' || field.type === 'chipsinput') &&
            key in data && Array.isArray(data[key])) {

            if (data[key].length > 0 && typeof data[key][0] === 'string') {
                data[key] = data[key].map((label: string) => ({
                    value: `${label}-${Date.now()}`,
                    label: label
                }));
            }
        }
    }
};

onMounted(() => {
    const codePreviewContainer = document.querySelector('.code-preview-container');

    if (codePreviewContainer)
        isInsideCodePreview.value = true;

    if (activeTab.value === '') {
        const tabItems = Object.entries(props.schema).find(([_, item]) => item && item.type === 'tabs');
        if (tabItems && tabItems[1].items) {
            const [firstTabKey] = Object.keys(tabItems[1].items);
            if (firstTabKey) {
                activeTab.value = String(firstTabKey);
            }
        }
    }

    const processedData = { ...props.modelValue };
    processChipsInputs(processedData, props.schema);

    if (hasTabs.value) {
        for (const tabKey in props.tabs) {
            const tab = props.tabs[tabKey];
            processChipsInputs(processedData, tab.schema);
        }
    }

    formData.value = processedData;
    initializeFieldValidity();
    setTimeout(() => {
        checkFormValidity();
    }, 100);
});

const initializeFieldValidity = () => {
    initializeSchemaValidity(props.schema);

    if (hasTabs.value) {
        for (const tabKey in props.tabs) {
            const tab = props.tabs[tabKey];
            initializeSchemaValidity(tab.schema);
        }
    }
};

const initializeSchemaValidity = (schema: FormBuilderSchema) => {
    Object.keys(schema).forEach(key => {
        const isRequired = schema[key].required === true;
        const hasValue = key in formData.value &&
            formData.value[key] !== undefined &&
            formData.value[key] !== null &&
            formData.value[key] !== '';

        fieldValidity.value[key] = !isRequired || hasValue;
    });
};

const getFieldLabel = (key: string): string => {
    if (props.schema[key]?.label)
        return props.schema[key].label;

    const field = findFieldInTabs(key);

    if (field?.label)
        return field.label;

    return key;
};

const validate = (showError = false): boolean => {
    invalidFields.value = {};
    let isValid = true;

    for (const key in props.schema) {
        if (props.schema[key].type === 'submit') continue;

        const fieldValid = validateField(key, showError);
        isValid = isValid && fieldValid;
    }

    if (hasTabs.value) {
        for (const tabKey in props.tabs) {
            const tab = props.tabs[tabKey];
            for (const key in tab.schema) {
                if (tab.schema[key].type === 'submit') continue;

                const fieldValid = validateField(key, showError);
                isValid = isValid && fieldValid;
            }
        }
    }

    return isValid;
};

const validateField = (key: string | number, showError = false): boolean => {
    let field: FieldProps | undefined;

    if (key in props.schema)
        field = props.schema[key];
    else
        field = findFieldInTabs(key);

    if (!field) return true;

    if (isSubmitButton(field)) {
        fieldValidity.value[key] = true;
        return true;
    }

    const componentRef = fieldRefs.value[key];
    if (componentRef && typeof componentRef.validate === 'function') {
        const isComponentValid = componentRef.validate(showError);
        fieldValidity.value[key] = isComponentValid;

        if (!isComponentValid)
            invalidFields.value[key] = "Field validation failed";

        return isComponentValid;
    }

    return true;
};

const checkFormValidity = () => {
    //validate();
};

const isFormValid = computed((): boolean => {
    if (Object.keys(fieldValidity.value).length === 0) return false;

    for (const key in fieldValidity.value) {
        if (isSubmitButton(props.schema?.[key]) || isSubmitButton(findFieldInTabs(key)))
            continue;

        if (!fieldValidity.value[key])
            return false;
    }

    return true;
});

const reset = () => {
    formData.value = { ...props.modelValue };
    invalidFields.value = {};
    initializeFieldValidity();
};

const handleSubmitButtonClick = () => {
    if (validate(true))
        emit("submit", formData.value);
    else
        showValidationAlert.value = true;
};

const convertTabsToFormat = (tabs: Record<string, TabItem>): { title: string; id: string | number; icon?: object }[] => {
    return Object.keys(tabs).map(tabKey => {
        const tab = tabs[tabKey];
        return {
            id: `tab-${tabKey}`,
            title: tab.label || `Tab ${tabKey}`,
            icon: tab.icon
        };
    });
};

const handleTabChange = (index: number, tabItems: Record<string, TabItem>) => {
    const tabKey = Object.keys(tabItems)[index];
    activeTab.value = String(tabKey);
};

const getActiveTabIndex = (tabItems: Record<string, TabItem>) => {
    const keys = Object.keys(tabItems);
    return keys.findIndex(key => key === activeTab.value);
};

const getTabIndexForTabsConfig = (tabs: Record<string, TabItem>) => {
    if (!activeTab.value) return 0;
    return Math.max(0, getActiveTabIndex(tabs));
};

const registerFieldRef = (key: string | number, el: any) => {
    if (el)
        fieldRefs.value[key] = el;
};

defineExpose({
    reset,
    validate,
    formData
});
</script>
