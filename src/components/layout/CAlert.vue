<template>
    <div class="p-4 rounded-md flex items-start" :class="computedClasses" role="alert" :aria-label="ariaLabel">
        <div v-if="icon" class="mr-3">
            <slot name="icon">
                <component :is="computedIcon" class="h-6 w-6" :class="textColorClass" />
            </slot>
        </div>

        <div :class="[outlined ? textColorClass : textColor, 'flex-1']">
            <div v-if="title" class="font-bold text-md">
                {{ title }}
            </div>
            <p class="text-sm">
                <slot>
                    {{ defaultMessage }}
                </slot>
            </p>
        </div>

        <button v-if="closable" class="ml-4 p-2 rounded-md focus:outline-none" :class="textColorClass"
            @click="$emit('close')" aria-label="Close alert">
            <slot name="close-icon">
                <icon-x-mark class="w-6 h-6 text-white" aria-label="Close" />
            </slot>
        </button>
    </div>
</template>

<style scoped>
button:hover {
    opacity: 0.8;
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
import IconCheckCircle from "@components/icons/IconCheckCircle.vue";
import IconInformationCircle from "@components/icons/IconInformationCircle.vue";
import IconExclamationTriangle from "@components/icons/IconExclamationTriangle.vue";
import IconXCircle from "@components/icons/IconXCircle.vue";

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    closable: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'info',
        validator: (value: string) =>
            ['success', 'info', 'warning', 'error'].includes(value),
    },
    bgColor: {
        type: String,
        default: '',
    },
    textColor: {
        type: String,
        default: 'text-white',
    },
    outlined: {
        type: Boolean,
        default: false,
    },
    ariaLabel: {
        type: String,
        default: 'Alert',
    },
    margin: {
        type: String,
        default: '',
    },
});

const colorByType: Record<string, string> = {
    success: "green",
    info: "blue",
    warning: "yellow",
    error: "red"
}

const computedClasses = computed(() => {
    return [
        !props.outlined ? props.bgColor || `bg-${colorByType[props.type]}-400` : '',
        props.outlined
            ? `border border-${colorByType[props.type]}-400`
            : `border-l-4 border-${colorByType[props.type]}-500`,
        props.margin,
    ].join(' ');
});

const textColorClass = computed(() => {
    return props.outlined ? `text-${colorByType[props.type]}-600` : props.textColor || `text-${colorByType[props.type]}-600`;
});

const computedIcon = computed(() => {
    const icons: Record<string, object> = {
        success: IconCheckCircle,
        info: IconInformationCircle,
        warning: IconExclamationTriangle,
        error: IconXCircle,
    };
    return icons[props.type] || IconInformationCircle;
});

const defaultMessage = computed(() => {
    const messages: Record<string, string> = {
        success: 'This is a success alert.',
        info: 'This is an info alert.',
        warning: 'This is a warning alert.',
        error: 'This is an error alert.',
    };
    return messages[props.type] || 'This is a default alert.';
});
</script>
