<template>
    <div class="flex items-center gap-1">
        <button
            v-for="index in total"
            :key="index"
            type="button"
            class="focus:outline-none transition relative"
            :class="[getColor(index)]"
            :disabled="fixed"
            @click="setRating(index)"
            @mouseover="hoverRating = fixed ? rating : index"
            @mouseleave="hoverRating = 0"
        >
            <!-- Ícone completo -->
            <component
                :is="iconComponent"
                color="color"
                :size="size"
                aria-hidden="true"
            />

            <!-- Ícone parcial (meio preenchido) -->
            <div
                v-if="showPartialIcon(index)"
                class="absolute top-0 left-0 overflow-hidden"
                :style="{ width: `${getPartialWidth(index)}%` }"
            >
                <component
                    :is="iconComponent"
                    :color="props.color"
                    :size="size"
                    aria-hidden="true"
                />
            </div>
        </button>

        <!-- Exibir valor numérico se showValue for true -->
        <span v-if="showValue" class="ml-2 text-sm font-medium">
            {{ displayValue }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed, watch } from "vue";
import IconStar from "@components/icons/IconStar.vue";

const props = defineProps({
    modelValue: {
        type: Number,
        required: false,
        default: 0
    },
    total: {
        type: Number,
        default: 5
    },
    icon: {
        type: Object,
        default: () => IconStar
    },
    color: {
        type: String,
        default: "text-yellow-300"
    },
    inactiveColor: {
        type: String,
        default: "text-gray-300 dark:text-gray-600"
    },
    fixed: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "md"
    },
    precision: {
        type: Number,
        default: 0.5,
        validator: (value: number) => [0.1, 0.25, 0.5, 1].includes(value)
    },
    showValue: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:modelValue", "change"]);
const rating = ref(props.modelValue);
const hoverRating = ref(0);

// Observar mudanças no modelValue
watch(() => props.modelValue, (newValue) => {
    rating.value = newValue;
});

const sizeClasses = computed(() => {
    return {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10",
        "2xl": "w-12 h-12"
    }[props.size] || "w-6 h-6";
});

const iconComponent = computed(() => props.icon);

const displayValue = computed(() => {
    return rating.value.toFixed(props.precision < 1 ? 1 : 0);
});

const getColor = (index: number) => {
    const activeRating = hoverRating.value || rating.value;

    // Se o índice for menor ou igual à parte inteira do rating, o ícone é totalmente colorido
    if (index <= Math.floor(activeRating)) {
        return props.color;
    }

    // Se o índice for igual à parte inteira + 1 e houver uma parte fracionária, o ícone é parcialmente colorido
    if (index === Math.ceil(activeRating) && activeRating % 1 !== 0) {
        return props.inactiveColor;
    }

    return props.inactiveColor;
};

const showPartialIcon = (index: number) => {
    const activeRating = hoverRating.value || rating.value;

    // Mostrar ícone parcial apenas se o índice for igual à parte inteira + 1 e houver uma parte fracionária
    return index === Math.ceil(activeRating) && activeRating % 1 !== 0;
};

const getPartialWidth = (index: number) => {
    const activeRating = hoverRating.value || rating.value;

    // Calcular a largura do preenchimento parcial (em porcentagem)
    if (index === Math.ceil(activeRating)) {
        return (activeRating % 1) * 100;
    }

    return 0;
};

const setRating = (value: number) => {
    if (!props.fixed) {
        // Se clicar no mesmo valor, alternar entre valor inteiro e meio valor
        if (Math.ceil(rating.value) === value) {
            // Se já estiver no valor inteiro, reduzir para o valor parcial
            if (rating.value === value) {
                rating.value = value - (1 - props.precision);
            } else {
                // Se estiver no valor parcial, aumentar para o valor inteiro
                rating.value = value;
            }
        } else {
            // Caso contrário, definir para o valor inteiro
            rating.value = value;
        }

        emit("update:modelValue", rating.value);
        emit("change", rating.value);
    }
};
</script>

<style scoped>
/* Garantir que o container do ícone tenha posição relativa para o posicionamento absoluto do ícone parcial */
.relative {
    position: relative;
}
</style>
