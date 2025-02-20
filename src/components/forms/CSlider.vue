<template>
    <div 
        class="relative w-full"
        :class="[thumb ? 'mt-10' : '']"
    >
        <div class="relative flex items-center">
            <slot name="icon-before" />

            <div
                ref="track"
                class="relative flex-1 h-2 rounded-full transition-all shadow-md"
                :class="[disabled ? 'bg-gray-300' : bgColor, hasError ? 'bg-red-300' : '']"
                @mousedown="startDrag"
                @touchstart="startDrag"
            >
                <div
                    class="absolute h-full rounded-full transition-all"
                    :style="{ width: `${percentage}%` }"
                    :class="disabled ? 'bg-blue-300' : activeTrackColor"
                ></div>

                <template v-if="showTicks">
                    <div
                        v-for="tick in tickPositions"
                        :key="tick"
                        class="absolute border-l"
                        :style="{ left: `${tick}%`, height: `${tickSize}px` }"
                        :class="disabled ? 'border-gray-400' : tickMarkColor"
                    ></div>
                </template>

                <div
                    ref="thumb"
                    class="absolute w-5 h-5 rounded-full flex items-center justify-center transition-all select-none transform"
                    :class="[disabled ? 'bg-gray-500 cursor-not-allowed' : thumbColor || bgColor, hasError ? 'bg-red-500' : '', 'cursor-pointer']"
                    :style="{ left: `${percentage - 1}%`, top: '-70%' }"
                    @mousedown="startDrag"
                    @touchstart="startDrag"
                >
                    <div
                        v-if="thumb"
                        class="absolute -top-10 px-2 py-1 rounded-md text-sm shadow-md"
                        :class="[disabled ? 'bg-blue-300' : activeTrackColor]"
                    >
                        {{ currentValue }}
                    </div>
                </div>
            </div>

            <slot name="icon-after" />
        </div>

        <slot name="append" />

        <p v-if="hasError" class="text-xs text-red-500 mt-1">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
.track {
    position: relative;
}

.thumb {
    cursor: grab;
}

.thumb:active {
    cursor: grabbing;
}

.tick {
    position: absolute;
    border-left: 1px solid;
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    modelValue: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: [Number, String], default: 1 },
    showTicks: { type: Boolean, default: false },
    tickSize: { type: Number, default: 10 },
    ticks: { type: Array, default: () => [] },
    thumb: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    bgColor: { type: String, default: "bg-white" },
    activeTrackColor: { type: String, default: "bg-blue-600" },
    tickMarkColor: { type: String, default: "border-blue-700" },
    thumbColor: { type: String, default: null },
    rules: { type: Array, default: () => [] },
});

const emit = defineEmits(["update:modelValue"]);
const track = ref<HTMLElement | null>(null);
const dragging = ref(false);
const hasError = ref(false);
const errorMessage = ref<string | null>(null);

const stepValue = computed(() => {
    const parsedStep = Number(props.step);
    return isNaN(parsedStep) || parsedStep <= 0 ? 1 : parsedStep;
});


const currentValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        const clampedValue = Math.min(props.max, Math.max(props.min, value));
        emit("update:modelValue", clampedValue);
        validate();
    },
});

const percentage = computed(() => {
    const range = props.max - props.min;
    return ((currentValue.value - props.min) / range) * 100;
});

const tickPositions = computed(() => {
    const range = props.max - props.min;
    return props.ticks.length//@ts-ignore
        ? props.ticks.map((tick) => ((tick - props.min) / range) * 100)
        : Array.from(
              { length: Math.floor(range / stepValue.value) + 1 },
              (_, i) => (i * stepValue.value) / range * 100
          );
});

const startDrag = (event: MouseEvent | TouchEvent) => {
    if (props.disabled) return;
    dragging.value = true;

    moveThumb(event); 
    document.addEventListener("mousemove", moveThumb);
    document.addEventListener("touchmove", moveThumb);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
};

const stopDrag = () => {
    dragging.value = false;

    document.removeEventListener("mousemove", moveThumb);
    document.removeEventListener("touchmove", moveThumb);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
};

const moveThumb = (event: MouseEvent | TouchEvent) => {
    if (!track.value) return;

    const rect = track.value.getBoundingClientRect();
    const clientX =
        event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const percent = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const rawValue = props.min + percent * (props.max - props.min);

    currentValue.value = Math.round(rawValue / stepValue.value) * stepValue.value;
};

const validate = () => {
    hasError.value = false;
    errorMessage.value = null;

    for (const rule of props.rules) {//@ts-ignore
        const error = rule(currentValue.value);
        if (error) {
            hasError.value = true;
            errorMessage.value = error;
            return false;
        }
    }
    return true;
};

onMounted(() => validate());
onBeforeUnmount(() => stopDrag());
</script>
