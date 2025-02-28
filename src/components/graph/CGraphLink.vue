<template>
    <svg class="absolute pointer-events-none overflow-visible">
        <path
            :class="[lineDashAnimation ? 'lineAnimation' : '', 'hover:stroke-slate-600']"
            :stroke="selected ? lineColorClicked : lineColor"
            :stroke-width="lineWidth"
            :stroke-dasharray="lineDashArray"
            :stroke-dashoffset="dashOffset"
            :d="d"
            fill="none"
        ></path>
    </svg>
</template>

<style scoped>
.svg {
    user-select: none;
    pointer-events: none;
}

.svg path {
    pointer-events: all;
    transform-origin: 0px 0px;
}

.lineAnimation {
    stroke-dashoffset: 0;
    animation: dash 4s infinite linear;
}

.lineAnimation:hover {
    animation-play-state: paused;
}

@keyframes dash {
    to {
        stroke-dashoffset: -50;
    }
}
</style>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
    line: Object,
    offset: Object,
    scrollOffset: Object,
    startOffset: {
        type: Number,
        default: 10
    },
    endOffset: {
        type: Number,
        default: 10
    },
    lineWidth: {
        type: Number,
        default: 2
    },
    lineColor: {
        type: String,
        default: "#ffffff"
    },
    lineColorClicked: {
        type: String,
        default: "#ff0000"
    },
    lineDashArray: {
        type: Number,
        default: 0
    },
    lineDashAnimation: {
        type: Boolean,
        default: false
    },
    scale: {
        type: Number,
        default: 1
    }
});

const d = ref("");
const dashOffset = ref("");

const updatePath = () => {
    if (!props.line.from || !props.line.to) return;

    const elemFrom = document.getElementById(props.line.from)
    const elemTo = document.getElementById(props.line.to)

    const fromPosition = elemFrom.getBoundingClientRect();
    const toPosition = elemTo.getBoundingClientRect();

    if (!fromPosition || !toPosition) return;

    const fromX = fromPosition.left - props.offset.x + props.scrollOffset.x;
    const offsetFromX = fromPosition.width;
    const fromY = fromPosition.top - props.offset.y + props.scrollOffset.y;

    const toX = toPosition.x - props.offset.x + props.scrollOffset.x;
    const toY = toPosition.y - props.offset.y + props.scrollOffset.y;

    const bezierFromX = fromX + offsetFromX;
    const bezierToX = toX + 10;
    const bezierIntensity = Math.min(
        100,
        Math.max(Math.abs(bezierFromX - bezierToX) / 2, Math.abs(fromY - toY))
    );

    d.value = `M${bezierFromX} ${fromY} C${fromX + props.startOffset + bezierIntensity} ${fromY} ${toX - props.endOffset - bezierIntensity} ${toY} ${bezierToX} ${toY}`;
};

onMounted(() => {
    updatePath();
});

watch([() => props.line.from, () => props.line.to, () => props.scale], updatePath);
</script>
