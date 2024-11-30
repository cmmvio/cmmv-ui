<template>
    <div
        aria-live="assertive"
        class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end z-50">
            <transition
                name="notification-slide"
                enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="visible"
                    class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
                    :class="[bgColor, textColor, top]"
                >
                    <div class="p-4">
                        <div class="flex items-start">
                            <!-- Icon Slot -->
                            <div v-if="icon" class="shrink-0">
                                <component :is="icon" class="h-6 w-6" :class="[iconColor]" />
                            </div>

                            <!-- Title and Content -->
                            <div class="ml-3 w-0 flex-1">
                                <div v-if="title" class="text-sm font-medium mt-0 pt-0">
                                    {{ title }}
                                </div>
                                <div v-if="content" class="mt-1 text-sm text-opacity-80">
                                    {{ content }}
                                </div>
                            </div>

                            <!-- Close Button -->
                            <div class="ml-4 flex shrink-0">
                            <button
                                v-if="!permanent"
                                type="button"
                                @click="closeNotification"
                                class="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span class="sr-only">Close</span>
                                <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                            </button>
                            </div>
                        </div>

                        <!-- Progress Bar -->
                        <div v-if="!permanent && duration" class="relative mt-3 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded">
                            <div
                            :style="{ width: `${progress}%` }"
                            class="absolute h-full bg-indigo-500 dark:bg-indigo-400 rounded transition-all duration-100"
                            />
                        </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
</template>

<style scoped>
.notification-slide-enter-active,
.notification-slide-leave-active {
    transition: all 0.3s ease;
    z-index: 99999
}
.notification-slide-enter-from {
    opacity: 0;
    transform: translateY(2rem);
}
.notification-slide-leave-to {
    opacity: 0;
    transform: translateY(2rem);
}
</style>
  
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { XMarkIcon } from "@heroicons/vue/20/solid";
  
const props = defineProps({
    maxWidth: {
        type: Number,
        default: 0,
    },
    top: {
        type: String,
        default: "top-40",
    },
    bgColor: {
        type: String,
        default: "bg-gray-200 dark:bg-zinc-900",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
    iconColor: {
        type: String,
        default: "text-blue-800",
    },
    permanent: {
        type: Boolean,
        default: false,
    },
});
  
const visible = ref(false);
const title = ref("");
const content = ref("");
const icon = ref(null);
const duration = ref(5000);
const progress = ref(100);
let interval = null;
  
function closeNotification() {
    clearInterval(interval);
    visible.value = false;
}
  
function setNotification({ newTitle, newContent, newIcon, newDuration }) {
    if(newTitle)
        title.value = newTitle;

    if(newContent)
        content.value = newContent;

    if(newIcon)
        icon.value = newIcon;

    if(newDuration)
        duration.value = newDuration;
}
  
function showNotification(options) {
    setNotification(options);
    visible.value = true;
  
    if (duration.value && !props.permanent) 
        startTimer();
}
  
function startTimer() {
    clearInterval(interval);
    progress.value = 100;
  
    const step = (100 / duration.value) * 100; // Calculate progress decrement step
    interval = setInterval(() => {
      if (progress.value <= 0) {
        closeNotification();
      } else {
        progress.value -= step;
      }
    }, 100);
}
  
onUnmounted(() => {
    clearInterval(interval);
});
  
defineExpose({
    showNotification,
});
</script>
  
  