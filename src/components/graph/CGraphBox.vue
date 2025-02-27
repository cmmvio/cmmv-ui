<template>
    <div
        ref="graphContainer"
        :class="[
            bgColor,
            borderColor,
            rounded,
            'c-graph-box relative w-full h-full overflow-hidden cursor-grab'
        ]"
        @mousedown="startPan"
        @wheel.prevent="zoomGraph"
    >
        <div class="absolute top-0 left-0 w-full h-full" :style="gridStyle"></div>

        <c-graph-link
            v-for="link in links"
            :key="`${link.from}-${link.to}`"
            :line="link"
            :offset="{ x: panX, y: panY }"
            :scrollOffset="{ x: 0, y: 0 }"
            :scale="scale"
        />

        <div
            class="absolute top-0 left-0 transition-transform ease-out duration-200"
            :style="transformStyle"
        >
            <slot></slot>
        </div>

        <div class="absolute top-4 right-4 bg-black/50 p-2 rounded-lg flex flex-row gap-2 opacity-30 hover:opacity-100 transition-opacity duration-300">
            <button @click="zoomIn" class="bg-transparent px-1 py-0.2 text-lg rounded-md hover:bg-neutral-800 transition">
                <icon-plus class="w-4 h-4 text-white mt-2" size="sm" aria-hidden="true" />
            </button>

            <button @click="resetZoom" class="bg-transparent px-1 py-0.2 text-lg rounded-md hover:bg-neutral-800 transition">
                <icon-arrow-path class="w-4 h-4 text-white mt-2" size="sm" aria-hidden="true" />
            </button>

            <button @click="zoomOut" class="bg-transparent px-1 py-0.2 text-lg rounded-md hover:bg-neutral-800 transition">
                <icon-minus class="w-4 h-4 text-white mt-2" size="sm" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>

<script setup>
import {
    ref, computed, defineProps,
    defineExpose, nextTick
 } from "vue";

const props = defineProps({
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800"
    },
    borderColor: {
        type: String,
        default: "border border-neutral-100 dark:border-neutral-800"
    },
    rounded: {
        type: String,
        default: "rounded-md"
    },
    minZoom: {
        type: Number,
        default: 0.5
    },
    maxZoom: {
        type: Number,
        default: 2
    },
});

const graphContainer = ref(null);
const panX = ref(0);
const panY = ref(0);
const scale = ref(1);
const isDraggingNode = ref(false);
const links = ref([]);

const transformStyle = computed(() => `transform: translate(${panX.value}px, ${panY.value}px) scale(${scale.value});`);
const gridStyle = computed(() => `background-size: ${20 * scale.value}px ${20 * scale.value}px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);`);

const startPan = (event) => {
    if (isDraggingNode.value) return;
    const startX = event.clientX - panX.value;
    const startY = event.clientY - panY.value;

    const onMouseMove = (e) => {
        panX.value = e.clientX - startX;
        panY.value = e.clientY - startY;
    };

    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
};

const zoomGraph = (event) => {
    const zoomFactor = 1.1;
    scale.value = Math.max(props.minZoom, Math.min(props.maxZoom, scale.value * (event.deltaY < 0 ? zoomFactor : 1 / zoomFactor)));
};

const zoomIn = () => (scale.value = Math.min(props.maxZoom, scale.value * 1.1));
const zoomOut = () => (scale.value = Math.max(props.minZoom, scale.value / 1.1));
const resetZoom = () => { scale.value = 1; panX.value = 0; panY.value = 0; };

const createLink = (from, to, type) => {
    links.value.push({ from, to, type });
    nextTick();
};

defineExpose({ isDraggingNode, createLink });
</script>
