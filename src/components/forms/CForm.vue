<template>
    <form @submit.prevent="validateForm">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, getCurrentInstance } from 'vue';

defineProps({
    modelValue: {
        type: Boolean,
        required: false,
        default: true,
    },
});

const emit = defineEmits(["update:modelValue"]);

const isValid = ref(true);
const inputComponents = ref<any[]>([]);

const collectComponents = (children: any) => {
    const components: any[] = [];

    if (!children || !Array.isArray(children)) return components;

    for (const child of children) {
        if (child.component?.exposed?.validate) {
            components.push(child.component.exposed);
        }

        if (child.children) {
            const nestedComponents = collectComponents(child.children);
            components.push(...nestedComponents);
        }
    }

    return components;
};

const collectInputs = () => {
    const instance = getCurrentInstance();
    if (!instance || !instance.subTree) return;

    const children = instance.subTree.children;
    inputComponents.value = collectComponents(children);
};

const validateForm = () => {
    const errors = inputComponents.value.map((input) => input.validate(false));
    const formIsValid = errors.every((error) => !error);

    isValid.value = formIsValid;
    emit("update:modelValue", formIsValid);
};

const watchInputs = () => {
    inputComponents.value.forEach((input) => {
        if (input && typeof input.value !== "undefined") {
            watch(
                () => input.value,
                () => validateForm(),
                { immediate: true }
            );
        }
    });
};

watch(isValid, (newValue) => {
    emit("update:modelValue", newValue);
});

onMounted(() => {
    collectInputs();
    watchInputs();
    validateForm();
});
</script>
