<template>
    <div
        v-for="position in positions"
        :key="position"
        aria-live="assertive"
        class="pointer-events-none fixed inset-0 flex px-4 py-6 z-50"
        :class="getPositionClasses(position)"
    >
        <div class="flex flex-col space-y-4 z-50" :style="{ maxWidth: maxWidth ? `${maxWidth}px` : 'auto' }">
            <transition-group
                name="notification-slide"
                tag="div"
                class="flex flex-col space-y-4"
            >
                <div
                    v-for="notification in getNotificationsByPosition(position)"
                    :key="notification.id"
                    class="pointer-events-auto overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
                    :class="[
                        notification.bgColor || bgColor,
                        notification.textColor || textColor,
                        notification.elevated ? 'shadow-xl' : '',
                        notification.width || width
                    ]"
                    :style="{
                        borderLeft: notification.accentColor ? `4px solid ${notification.accentColor}` : '',
                        maxWidth: notification.maxWidth || (maxWidth ? `${maxWidth}px` : '384px'),
                        minWidth: '320px'
                    }"
                >
                    <div class="p-4">
                        <div class="flex items-start">
                            <!-- Icon -->
                            <div v-if="notification.icon" class="shrink-0">
                                <component
                                    :is="notification.icon"
                                    class="h-6 w-6"
                                    :class="[notification.iconColor || iconColor]"
                                />
                            </div>

                            <!-- Title and Content -->
                            <div class="ml-3 w-0 flex-1">
                                <div
                                    v-if="notification.title"
                                    class="text-sm font-medium mt-0 pt-0"
                                    :class="notification.titleClass || ''"
                                >
                                    {{ notification.title }}
                                </div>
                                <div
                                    v-if="notification.content"
                                    class="mt-1 text-xs"
                                    :class="notification.contentClass || ''"
                                >
                                    {{ notification.content }}
                                </div>
                            </div>

                            <!-- Close Button -->
                            <div class="ml-4 flex shrink-0">
                                <c-button
                                    v-if="!notification.permanent"
                                    type="button"
                                    variant="plain"
                                    shadow="none"
                                    @click="() => closeNotification(notification.id)"
                                    class="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span class="sr-only">Close</span>
                                    <IconXMark class="h-5 w-5 text-gray-400 dark:text-white hover:text-gray-500" aria-hidden="true" />
                                </c-button>
                            </div>
                        </div>

                        <!-- Progress Bar -->
                        <div
                            v-if="!notification.permanent && notification.duration"
                            class="relative mt-3 h-1 w-full rounded"
                            :class="notification.progressBgClass || 'bg-gray-200 dark:bg-gray-500'"
                        >
                            <div
                                :style="{ width: `${notification.progress}%` }"
                                class="absolute h-full rounded transition-all duration-100"
                                :class="notification.progressClass || 'bg-indigo-500 dark:bg-indigo-400'"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
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

/* Position-specific animations */
.items-start .notification-slide-enter-from {
    transform: translateY(-2rem);
}
.items-start .notification-slide-leave-to {
    transform: translateY(-2rem);
}
.items-end .notification-slide-enter-from {
    transform: translateY(2rem);
}
.items-end .notification-slide-leave-to {
    transform: translateY(2rem);
}
.justify-start .notification-slide-enter-from {
    transform: translateX(-2rem);
}
.justify-start .notification-slide-leave-to {
    transform: translateX(-2rem);
}
.justify-end .notification-slide-enter-from {
    transform: translateX(2rem);
}
.justify-end .notification-slide-leave-to {
    transform: translateX(2rem);
}
</style>

<script setup>
import { ref, onUnmounted, markRaw, computed } from "vue";
import IconXMark from "@components/icons/IconXMark.vue";

const props = defineProps({
    maxWidth: {
        type: Number,
        default: 384,
    },
    position: {
        type: String,
        default: "top-right",
        validator: (value) => {
            return [
                "top-right",
                "top-left",
                "bottom-right",
                "bottom-left",
                "top-center",
                "bottom-center"
            ].includes(value);
        }
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-zinc-800",
    },
    textColor: {
        type: String,
        default: "text-black dark:text-white",
    },
    iconColor: {
        type: String,
        default: "text-blue-500 dark:text-blue-400",
    },
    permanent: {
        type: Boolean,
        default: false,
    },
    width: {
        type: String,
        default: "w-full",
    },
    limit: {
        type: Number,
        default: 5,
    }
});

// All available positions
const positions = [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
    "bottom-center"
];

// Get position classes based on position string
function getPositionClasses(position) {
    switch (position) {
        case 'top-right':
            return 'items-start justify-end';
        case 'top-left':
            return 'items-start justify-start';
        case 'bottom-right':
            return 'items-end justify-end';
        case 'bottom-left':
            return 'items-end justify-start';
        case 'top-center':
            return 'items-start justify-center';
        case 'bottom-center':
            return 'items-end justify-center';
        default:
            return 'items-start justify-end'; // Default to top-right
    }
}

const notifications = ref([]);
const notificationCounter = ref(0);

// Filter notifications by position
function getNotificationsByPosition(position) {
    return notifications.value.filter(n => n.position === position);
}

function closeNotification(id) {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index !== -1) {
        clearInterval(notifications.value[index].intervalId);
        notifications.value.splice(index, 1);
    }
}

function setNotification(options) {
    const id = notificationCounter.value++;

    // Remove any transparency from background colors
    let bgColor = options.bgColor || props.bgColor;
    bgColor = bgColor.replace(/\/\d+/g, ''); // Remove any opacity like bg-blue-500/30

    // Remove any transparency from text colors
    let textColor = options.textColor || props.textColor;
    textColor = textColor.replace(/\/\d+/g, '');

    // Determine the position for this notification
    const position = options.position || props.position;

    const notification = {
        id,
        title: options.newTitle || "",
        content: options.newContent || "",
        icon: options.newIcon ? markRaw(options.newIcon) : null,
        duration: options.newDuration || 5000,
        permanent: options.permanent || props.permanent,
        progress: 100,
        bgColor: bgColor,
        textColor: textColor,
        iconColor: options.iconColor,
        accentColor: options.accentColor,
        elevated: options.elevated || false,
        maxWidth: options.maxWidth,
        width: options.width,
        titleClass: options.titleClass,
        contentClass: options.contentClass,
        progressClass: options.progressClass,
        progressBgClass: options.progressBgClass,
        position: position, // Store the position with the notification
    };

    // Limit the number of notifications per position
    const positionNotifications = getNotificationsByPosition(position);
    if (positionNotifications.length >= props.limit) {
        const oldestNotification = positionNotifications[0];
        closeNotification(oldestNotification.id);
    }

    notifications.value.push(notification);

    if (notification.duration && !notification.permanent) {
        startTimer(id);
    }

    return id;
}

function startTimer(id) {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index === -1) return;

    const notification = notifications.value[index];
    const step = (100 / notification.duration) * 100;

    notification.intervalId = setInterval(() => {
        const currentIndex = notifications.value.findIndex(n => n.id === id);
        if (currentIndex === -1) {
            clearInterval(notification.intervalId);
            return;
        }

        if (notifications.value[currentIndex].progress <= 0) {
            closeNotification(id);
        } else {
            notifications.value[currentIndex].progress -= step;
        }
    }, 100);
}

function showNotification(options) {
    return setNotification(options);
}

function updateNotification(id, options) {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index === -1) return;

    const notification = notifications.value[index];

    if (options.newTitle !== undefined)
        notification.title = options.newTitle;

    if (options.newContent !== undefined)
        notification.content = options.newContent;

    if (options.newIcon !== undefined)
        notification.icon = options.newIcon ? markRaw(options.newIcon) : null;

    if (options.newDuration !== undefined) {
        notification.duration = options.newDuration;
        clearInterval(notification.intervalId);
        notification.progress = 100;
        if (notification.duration && !notification.permanent) {
            startTimer(id);
        }
    }

    if (options.permanent !== undefined) {
        notification.permanent = options.permanent;
        if (!notification.permanent && notification.duration) {
            clearInterval(notification.intervalId);
            notification.progress = 100;
            startTimer(id);
        } else if (notification.permanent) {
            clearInterval(notification.intervalId);
        }
    }

    // Update position if provided
    if (options.position !== undefined) {
        notification.position = options.position;
    }

    // Update styling options with transparency removed
    if (options.bgColor !== undefined) {
        notification.bgColor = options.bgColor.replace(/\/\d+/g, '');
    }
    if (options.textColor !== undefined) {
        notification.textColor = options.textColor.replace(/\/\d+/g, '');
    }
    if (options.iconColor !== undefined) notification.iconColor = options.iconColor;
    if (options.accentColor !== undefined) notification.accentColor = options.accentColor;
    if (options.elevated !== undefined) notification.elevated = options.elevated;
    if (options.maxWidth !== undefined) notification.maxWidth = options.maxWidth;
    if (options.width !== undefined) notification.width = options.width;
    if (options.titleClass !== undefined) notification.titleClass = options.titleClass;
    if (options.contentClass !== undefined) notification.contentClass = options.contentClass;
    if (options.progressClass !== undefined) notification.progressClass = options.progressClass;
    if (options.progressBgClass !== undefined) notification.progressBgClass = options.progressBgClass;
}

function clearAllNotifications() {
    notifications.value.forEach(notification => {
        clearInterval(notification.intervalId);
    });
    notifications.value = [];
}

onUnmounted(() => {
    notifications.value.forEach(notification => {
        clearInterval(notification.intervalId);
    });
});

defineExpose({
    showNotification,
    updateNotification,
    closeNotification,
    clearAllNotifications
});
</script>

