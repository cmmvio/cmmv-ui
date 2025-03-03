<template>
    <div class="group" :class="[absolute ? 'absolute' : 'fixed', computedPosition]">
        <transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 z-40 bg-transparent" @click="close"></div>
        </transition>

        <template v-if="position.includes('bottom')">
            <transition name="fade">
                <div v-if="isOpen" class="absolute flex items-center z-50 bottom-12 ml-0.5" :class="menuOrientation">
                    <button v-for="(action, index) in actions" :key="index" @click="clickItem(action)"
                        :title="action.label"
                        class="flex justify-center items-center w-[52px] h-[52px] text-neutral-500 hover:text-neutral-900 bg-white rounded-full border border-neutral-200 shadow-md dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-50 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:focus:ring-neutral-400">
                        <component :is="action.icon" class="w-5 h-5 dark:text-neutral-300 hover:dark:text-white" />
                        <span class="sr-only">{{ action.label }}</span>
                    </button>
                </div>
            </transition>

            <button @click="toggleSpeedDial"
                class="flex items-center z-50 justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 transition-transform"
                :class="{ 'rotate-45': isOpen }">
                <svg class="w-5 h-5 transition-transform" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 1v16M1 9h16" />
                </svg>
                <span class="sr-only">Toggle actions</span>
            </button>
        </template>

        <template v-else>
            <button @click="toggleSpeedDial"
                class="flex items-center z-50 justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 transition-transform"
                :class="{ 'rotate-45': isOpen }">
                <svg class="w-5 h-5 transition-transform" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 1v16M1 9h16" />
                </svg>
                <span class="sr-only">Toggle actions</span>
            </button>

            <transition name="fade">
                <div v-if="isOpen" class="absolute flex items-center z-50" :class="menuOrientation">
                    <button v-for="(action, index) in actions" :key="index" @click="clickItem(action)"
                        :title="action.label"
                        class="flex justify-center mb-3 items-center w-[52px] h-[52px] text-neutral-500 hover:text-neutral-900 bg-white rounded-full border border-neutral-200 shadow-md dark:border-neutral-600 dark:text-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-50 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:focus:ring-neutral-400">
                        <component :is="action.icon" class="w-5 h-5 dark:text-neutral-300 hover:dark:text-white" />
                        <span class="sr-only">{{ action.label }}</span>
                    </button>
                </div>
            </transition>
        </template>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.rotate-45 {
    transform: rotate(45deg);
}
</style>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
    absolute: {
        type: Boolean,
        default: false
    },
    actions: {
        type: Array,
        required: true,
        default: () => []
    },
    position: {
        type: String,
        default: "bottom-right"
    },
    horizontal: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["select"]);
const isOpen = ref(false);

const toggleSpeedDial = () => {
    isOpen.value = !isOpen.value;
};

const close = () => {
    isOpen.value = false;
};

const computedPosition = computed(() => {
    switch (props.position) {
        case "top-left":
            return "top-6 left-6";
        case "top-right":
            return "top-6 right-6";
        case "bottom-left":
            return "bottom-6 left-6";
        default:
            return "bottom-6 right-6";
    }
});

const menuOrientation = computed(() => {
    if (props.horizontal)
        return "flex-row space-x-2 me-4 rtl:space-x-reverse";

    return props.position.includes("top") ? "flex-col-reverse mt-2" : "flex-col mb-4 space-y-2";
});

const clickItem = (action) => {
    emit("select", action);
    close();
};
</script>
