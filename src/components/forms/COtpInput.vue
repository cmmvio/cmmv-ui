<template>
    <div class="relative flex flex-col items-center space-y-4">
        <div v-if="loading" class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10 ">
            <Loader90Ring />
        </div>

        <div class="flex space-x-2 mt-0 p-2" style="margin-top: 0px;">
            <input v-for="(char, index) in inputValues" :key="index" v-model="inputValues[index]" maxlength="1"
                class="w-12 h-12 text-center border rounded focus:outline-none focus:ring-2"
                :class="[bgColor, textColor, error ? 'border-red-500' : borderColor]" :disabled="loading"
                ref="otpInputs" @input="handleInput(index, $event)" @keydown.backspace="handleBackspace(index)"
                @paste="handlePaste($event, index)" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, nextTick } from "vue";

const props = defineProps({
    length: {
        type: Number,
        default: 6,
        validator: (value) => value >= 4 && value <= 8,
    },
    modelValue: {
        type: String,
        default: "",
    },
    error: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
    borderColor: {
        type: String,
        default: "border-neutral-400 dark:border-neutral-700 focus:ring-blue-500",
    },
});

const emit = defineEmits(["update:modelValue"]);
const otpInputs = ref([]);
const inputValues = ref(Array(props.length).fill(""));

watch(
    () => props.modelValue,
    (newValue) => {
        const splitValue = newValue.split("").slice(0, props.length);
        inputValues.value = Array(props.length)
            .fill("")
            .map((_, i) => splitValue[i] || "");
    },
    { immediate: true }
);

const handleInput = (index, event) => {
    const value = event.target.value;

    if (value.length > 1) {
        const digits = value.replace(/\D/g, '').split('').slice(0, props.length);

        if (digits.length === 0) return;

        digits.forEach((digit, i) => {
            const targetIndex = (index + i) % props.length;
            if (targetIndex < props.length) {
                inputValues.value[targetIndex] = digit;
            }
        });

        emit("update:modelValue", inputValues.value.join(""));

        nextTick(() => {
            const nextEmptyIndex = inputValues.value.findIndex(val => val === '');
            if (nextEmptyIndex !== -1 && nextEmptyIndex < props.length) {
                otpInputs.value[nextEmptyIndex].focus();
            } else {
                const lastFilledIndex = Math.min(index + digits.length - 1, props.length - 1);
                otpInputs.value[lastFilledIndex].focus();
            }
        });

        return;
    }

    if (/^[0-9]$/.test(value)) {
        inputValues.value[index] = value;
        emit("update:modelValue", inputValues.value.join(""));

        if (index < props.length - 1) {
            nextTick(() => {
                const nextInput = otpInputs.value[index + 1];
                if (nextInput) nextInput.focus();
            });
        }
    } else {
        event.target.value = "";
    }
};

const handleBackspace = (index) => {
    if (!inputValues.value[index]) {
        const previousIndex = index - 1;
        if (previousIndex >= 0) {
            inputValues.value[previousIndex] = "";
            emit("update:modelValue", inputValues.value.join(""));
            nextTick(() => {
                const previousInput = otpInputs.value[previousIndex];
                if (previousInput) previousInput.focus();
            });
        }
    }
};

const handlePaste = (event, index) => {
    event.preventDefault();

    const pastedText = (event.clipboardData || window.clipboardData).getData('text');
    const digits = pastedText.replace(/\D/g, '').split('').slice(0, props.length);

    if (digits.length === 0) return;

    const startingIndex = index;

    digits.forEach((digit, i) => {
        const targetIndex = (startingIndex + i) % props.length;
        inputValues.value[targetIndex] = digit;
    });

    emit("update:modelValue", inputValues.value.join(""));

    nextTick(() => {
        const nextEmptyIndex = inputValues.value.findIndex(val => val === '');
        if (nextEmptyIndex !== -1 && nextEmptyIndex < props.length) {
            otpInputs.value[nextEmptyIndex].focus();
        } else {
            const lastFilledIndex = Math.min(startingIndex + digits.length - 1, props.length - 1);
            otpInputs.value[lastFilledIndex].focus();
        }
    });
};
</script>
