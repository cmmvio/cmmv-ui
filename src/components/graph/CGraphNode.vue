<template>
    <div
        :id="`node-${id}`"
        ref="node"
        class="absolute cursor-move select-none shadow-lg rounded-md border bg-gray-50/75 dark:bg-zinc-900/75 dark:border-black
               border-gray-300 hover:border-gray-400 dark:hover:border-black min-w-[180px]"
        :style="{ left: position.x + 'px', top: position.y + 'px' }"
        @mousedown="startDrag"
    >
        <div
            v-if="showHeader"
            class="flex items-center px-2 py-1 text-sm text-gray-900 dark:text-white
                   bg-gradient-to-b from-gray-200 to-gray-100 dark:from-zinc-700 dark:to-zinc-800
                   border-b border-gray-300 dark:border-zinc-700 rounded-t-md"
        >
            <span v-if="icon" class="mr-2 text-gray-700 dark:text-gray-300">
                <component :is="icon" class="w-4 h-4" />
            </span>

            {{ label }}
        </div>

        <div v-else class="text-center text-gray-500 dark:text-gray-400 text-lg py-6 font-semibold">
            {{ centerLabel }}
        </div>

        <div class="p-1 text-gray-800 dark:text-gray-200 text-sm leading-tight">
            <div class="overflow-hidden pt-1 mb-1 min-h-[15px]">
                <div class="display-inline-table float-left pl-[10px] pr-[10px]">
                    <div v-if="inputs && inputs.length" class="space-y-2">
                        <div v-for="(input, index) in inputs" :key="index"
                            class="div-inside int flex items-center rounded-md">
                            <div
                                :id="`input-${id}-${input.id}`"
                                class="clink connector w-3 h-3 rounded-full mr-2"
                                :class="getConnectorColor(input.type)"
                            ></div>
                            <div class="label-text text-xs font-medium text-gray-600 dark:text-gray-300 flex-1">
                                {{ input.label }}
                            </div>
                            <span class="fake-input ml-2 px-2 py-1 text-gray-900 dark:text-white bg-white h-5 dark:bg-zinc-700 shadow-sm
                                        border border-gray-300 dark:border-zinc-600 outline-none"
                                contenteditable="true"
                                @input="updateInput($event, index)">
                                {{ input.value }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="display-inline-table float-right pl-[10px] pr-[10px] text-right">
                    <div v-if="outputs && outputs.length" class="space-y-2">
                        <div v-for="(output, index) in outputs" :key="index"
                            class="div-inside int flex items-center rounded-md">
                            <div class="label-text text-xs font-medium text-gray-600 dark:text-gray-300 flex-1">
                                {{ output.label }}
                            </div>
                            <div
                                :id="`output-${id}-${output.id}`"
                                class="clink connector w-3 h-3 rounded-full ml-2"
                                :class="getConnectorColor(output.type)"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, inject } from "vue";

const props = defineProps({
    id: { type: String, required:true },
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    label: { type: String, default: "Node" },
    showHeader: { type: Boolean, default: true },
    centerLabel: { type: String, default: "" },
    icon: { type: [String, Object], default: null },
    inputs: {
        type: Array as () => Array<{ id: string; label: string; type: string; value: any }>,
        default: () => [],
    },
    outputs: {
        type: Array as () => Array<{ id: string; label: string; type: string; value: any }>,
        default: () => [],
    },
    portColor: { type: String, default: "bg-gray-500" },
});

const graphBox = inject("graphBox", { isDraggingNode: ref(false) });

const emit = defineEmits(["update:position", "update:input"]);

const position = ref({ x: props.x, y: props.y });
const dragging = ref(false);
const offset = ref({ x: 0, y: 0 });

const startDrag = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    dragging.value = true;

    offset.value = {
        x: event.clientX - position.value.x,
        y: event.clientY - position.value.y
    };

    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);
};

const drag = (event: MouseEvent) => {
    if (!dragging.value) return;

    position.value = {
        x: event.clientX - offset.value.x,
        y: event.clientY - offset.value.y
    };

    emit("update:position", position.value);
};

const stopDrag = () => {
    dragging.value = false;
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", stopDrag);
};

onMounted(() => {
    position.value = { x: props.x, y: props.y };
});

const updateInput = (event: Event, index: number) => {
    const target = event.target as HTMLSpanElement;
    emit("update:input", { index, value: target.innerText });
};

const getConnectorColor = (type: string) => {
    switch (type) {
        case "float":
            return "bg-emerald-500";
        case "int":
            return "bg-blue-500";
        case "boolean":
            return "bg-red-500";
        case "string":
            return "bg-purple-500";
        default:
            return "bg-gray-500";
    }
};
</script>
