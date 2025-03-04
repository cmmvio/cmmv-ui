<template>
    <div :class="['overflow-auto', width, height, rounded, customClass]">
        <ul role="list" :class="['divide-y list-none', divideColor]">
            <li v-for="(item, index) in modelValue" :key="index"
                :class="['p-0 m-0 flex justify-between gap-x-2', itemPadding, sortable && !useHandler ? 'cursor-grab active:cursor-grabbing' : '']"
                :draggable="sortable && !useHandler"
                @dragstart="sortable && !useHandler ? handleDragStart($event, index) : null"
                @dragover="sortable ? handleDragOver($event, index) : null"
                @drop="sortable ? handleDrop($event, index) : null" @dragend="sortable ? handleDragEnd($event) : null"
                :data-index="index" :data-list-id="listId">
                <div v-if="sortable && useHandler"
                    class="drag-handle flex items-center mr-2 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
                    draggable="true" @dragstart="handleDragStart($event, index)" @dragend="handleDragEnd($event)">
                    <slot name="handle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                        </svg>
                    </slot>
                </div>
                <slot :item="item" :index="index"></slot>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(['update:modelValue', 'reorder', 'itemMoved']);
const draggedItem = ref(null);
const draggedListId = ref(null);

const props = defineProps({
    modelValue: {
        type: Array,
        required: false,
        default: () => []
    },
    rounded: {
        type: String,
        required: false,
        default: "rounded-md",
    },
    shadow: {
        type: String,
        required: false,
        default: "shadow-md",
    },
    divideColor: {
        type: String,
        required: false,
        default: "divide-neutral-200 dark:divide-neutral-900",
    },
    width: {
        type: String,
        required: false,
        default: "w-full"
    },
    height: {
        type: String,
        required: false,
        default: "h-auto"
    },
    itemPadding: {
        type: String,
        required: false,
        default: "py-2"
    },
    customClass: {
        type: String,
        required: false,
        default: ""
    },
    sortable: {
        type: Boolean,
        required: false,
        default: false
    },
    useHandler: {
        type: Boolean,
        required: false,
        default: true
    },
    listId: {
        type: String,
        required: false,
        default: () => `list-${Math.random().toString(36).substring(2, 9)}`
    },
    allowCrossListDrop: {
        type: Boolean,
        required: false,
        default: false
    },
    group: {
        type: String,
        required: false,
        default: ""
    },
    draggable: {
        type: Boolean,
        required: false,
        default: false
    }
});

function handleDragStart(event, index) {
    draggedItem.value = index;
    draggedListId.value = props.listId;

    event.dataTransfer.setData('text/plain', JSON.stringify({
        sourceListId: props.listId,
        sourceIndex: index,
        item: props.modelValue[index],
        group: props.group
    }));

    event.dataTransfer.effectAllowed = 'move';

    setTimeout(() => {
        const targetElement = props.useHandler
            ? event.target.closest('li')
            : event.target;

        if (targetElement) {
            targetElement.classList.add('opacity-50');
        }
    }, 0);
}

function handleDragOver(event, index) {
    event.preventDefault();

    const sourceListData = event.dataTransfer.getData('text/plain');

    if (!sourceListData) return;

    try {
        const { sourceListId, group: sourceGroup } = JSON.parse(sourceListData);
        const sameList = sourceListId === props.listId;
        const sameGroup = props.group && sourceGroup === props.group;

        if (!sameList && !props.allowCrossListDrop && !sameGroup) {
            return;
        }
    } catch (e) {
        return;
    }

    event.dataTransfer.dropEffect = 'move';

    const items = document.querySelectorAll(`[data-list-id="${props.listId}"]`);
    items.forEach(item => {
        item.classList.remove('border-t-2', 'border-blue-500', 'border-b-2');
    });

    const targetLi = event.target.closest('li');
    if (targetLi) {
        targetLi.classList.add('border-t-2', 'border-blue-500');
    }
}

function handleDrop(event, dropIndex) {
    event.preventDefault();

    const items = document.querySelectorAll(`[data-list-id="${props.listId}"]`);
    items.forEach(item => {
        item.classList.remove('border-t-2', 'border-blue-500', 'border-b-2', 'opacity-50');
    });

    const dataTransfer = event.dataTransfer.getData('text/plain');
    if (!dataTransfer) return;

    try {
        const { sourceListId, sourceIndex, item, group: sourceGroup } = JSON.parse(dataTransfer);
        const sameList = sourceListId === props.listId;
        const sameGroup = props.group && sourceGroup === props.group;
        const allowDrop = sameList || props.allowCrossListDrop || sameGroup;

        if (!allowDrop) return;

        if (sameList) {
            const newList = [...props.modelValue];
            const [movedItem] = newList.splice(sourceIndex, 1);
            newList.splice(dropIndex, 0, movedItem);

            emit('update:modelValue', newList);
            emit('reorder', {
                oldIndex: sourceIndex,
                newIndex: dropIndex,
                item: movedItem
            });
        }
        else if (props.allowCrossListDrop || sameGroup) {
            emit('itemMoved', {
                fromListId: sourceListId,
                toListId: props.listId,
                item: item,
                fromIndex: sourceIndex,
                toIndex: dropIndex
            });
        }
    } catch (e) {
        console.error('Erro ao processar drag and drop:', e);
    }
}

function handleDragEnd(event) {
    const items = document.querySelectorAll('li[draggable=true], .drag-handle');
    items.forEach(item => {
        item.classList.remove('opacity-50');
    });

    document.querySelectorAll('li').forEach(item => {
        item.classList.remove('border-t-2', 'border-blue-500', 'border-b-2', 'opacity-50');
    });

    draggedItem.value = null;
    draggedListId.value = null;
}
</script>

<style scoped>
.drag-handle {
    cursor: grab;
}

li:hover .drag-handle {
    opacity: 1;
}

li .drag-handle {
    opacity: 0.5;
    transition: opacity 0.2s ease;
}

[draggable=true] {
    transition: transform 0.1s, box-shadow 0.1s;
}

[draggable=true].opacity-50 {
    transform: scale(0.98);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>
