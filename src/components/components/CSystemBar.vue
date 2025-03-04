<template>
    <div class="c-system-bar flex items-center justify-between px-2 py-1 text-sm" :class="[
        platformClass,
        colorClass,
        { 'dark-theme': dark }
    ]" :style="{ height: `${height}px` }">
        <div class="left-icons flex items-center">
            <div class="time px-2">
                {{ currentTime }}
            </div>

            <div v-if="platform === 'android' && notifications" class="notifications flex items-center gap-1 ml-2">
                <div v-if="notifications.app" class="app-icon">
                    <slot name="app-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </slot>
                </div>
                <div v-if="notifications.count !== undefined" class="notification-count text-xs">
                    {{ notifications.count }}
                </div>
            </div>
        </div>

        <div v-if="platform === 'ios' && showNotch" class="notch-container order-1 flex-grow flex justify-center">
            <div v-if="notch" class="notch bg-black rounded-b-2xl" :style="{ width: '180px', height: '25px' }"></div>
        </div>

        <div class="right-icons flex items-center gap-2 order-2">
            <div v-if="cellularSignal !== false" class="cellular">
                <div v-if="platform === 'ios'" class="ios-cellular flex items-end h-3">
                    <div v-for="i in 4" :key="`cell-${i}`" class="cellular-bar w-1"
                        :class="{ 'h-1': i === 1, 'h-1.5': i === 2, 'h-2': i === 3, 'h-2.5': i === 4 }"
                        :style="{ opacity: cellularSignal >= i ? 1 : 0.3, marginRight: '1px', backgroundColor: 'currentColor' }">
                    </div>
                </div>
                <div v-else class="android-cellular flex items-end h-3">
                    <div v-for="i in 4" :key="`cell-${i}`" class="cellular-bar w-0.5"
                        :class="{ 'h-1': i === 1, 'h-1.5': i === 2, 'h-2': i === 3, 'h-2.5': i === 4 }"
                        :style="{ opacity: cellularSignal >= i ? 1 : 0.3, marginRight: '1px', backgroundColor: 'currentColor' }">
                    </div>
                </div>
            </div>

            <div v-if="wifiSignal !== false" class="wifi">
                <div v-if="platform === 'ios'" class="ios-wifi">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
                            :style="{ opacity: wifiSignal > 0 ? 1 : 0.3 }" />
                    </svg>
                </div>
                <div v-else class="android-wifi">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path v-if="wifiSignal >= 3"
                            d="M12 3C7.2 3 2.8 5.1 0 8.3l12 12.5 12-12.5C21.2 5.1 16.9 3 12 3z" />
                        <path v-else-if="wifiSignal === 2"
                            d="M12 6.8c-2.9 0-5.5 1.2-7.4 3l7.4 7.7 7.4-7.7c-1.9-1.8-4.5-3-7.4-3z" />
                        <path v-else-if="wifiSignal === 1"
                            d="M12 11.2c-1.3 0-2.4.5-3.2 1.3l3.2 3.3 3.2-3.3c-.8-.8-1.9-1.3-3.2-1.3z" />
                        <path v-else d="M12 11.2c-1.3 0-2.4.5-3.2 1.3l3.2 3.3 3.2-3.3c-.8-.8-1.9-1.3-3.2-1.3z"
                            style="opacity: 0.3;" />
                    </svg>
                </div>
            </div>

            <div v-if="bluetooth" class="bluetooth">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" />
                </svg>
            </div>

            <div v-if="batteryLevel !== false" class="battery flex items-center">
                <div v-if="platform === 'ios'"
                    class="ios-battery relative w-6 h-3 border rounded-sm flex items-center overflow-hidden">
                    <div class="absolute right-0 top-0 w-px h-3 bg-current -mr-0.5"></div>
                    <div class="battery-level h-full"
                        :style="{ width: `${batteryLevel}%`, backgroundColor: 'currentColor' }"></div>
                </div>
                <div v-else class="android-battery">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <rect x="2" y="7" width="16" height="10" rx="2" ry="2" fill="none" />
                        <line x1="22" y1="11" x2="22" y2="13" />
                        <rect v-if="batteryLevel > 0" x="4" y="9" :width="(batteryLevel / 100) * 12" height="6"
                            fill="currentColor" stroke="none" />
                    </svg>
                </div>
                <span v-if="showBatteryPercentage" class="battery-percentage text-xs ml-0.5">
                    {{ batteryLevel }}%
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    platform: {
        type: String,
        default: 'auto',
        validator: (val) => ['auto', 'ios', 'android'].includes(val)
    },
    color: {
        type: String,
        default: 'transparent',
        validator: (val) => ['transparent', 'light', 'dark', 'primary'].includes(val)
    },
    dark: {
        type: Boolean,
        default: false
    },
    height: {
        type: Number,
        default: 24
    },
    showNotch: {
        type: Boolean,
        default: false
    },
    notch: {
        type: Boolean,
        default: true
    },
    batteryLevel: {
        type: [Number, Boolean],
        default: 70,
        validator: (val) => typeof val === 'boolean' || (val >= 0 && val <= 100)
    },
    showBatteryPercentage: {
        type: Boolean,
        default: false
    },
    wifiSignal: {
        type: [Number, Boolean],
        default: 3,
        validator: (val) => typeof val === 'boolean' || (val >= 0 && val <= 3)
    },
    cellularSignal: {
        type: [Number, Boolean],
        default: 4,
        validator: (val) => typeof val === 'boolean' || (val >= 0 && val <= 4)
    },
    bluetooth: {
        type: Boolean,
        default: false
    },
    notifications: {
        type: [Object, Boolean],
        default: () => ({ app: false, count: undefined })
    },
    timeFormat: {
        type: String,
        default: '24h',
        validator: (val) => ['12h', '24h'].includes(val)
    },
    staticTime: {
        type: String,
        default: '',
        validator: (val) => val === '' || /^([01]\d|2[0-3]):([0-5]\d)$/.test(val) || /^(0?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i.test(val)
    }
});

const detectedPlatform = ref('');

onMounted(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        detectedPlatform.value = 'ios';
    else if (/android/i.test(userAgent))
        detectedPlatform.value = 'android';
    else
        detectedPlatform.value = 'android';
});

const platform = computed(() => {
    return props.platform === 'auto' ? detectedPlatform.value : props.platform;
});

const platformClass = computed(() => {
    return platform.value === 'ios' ? 'ios-system-bar' : 'android-system-bar';
});

const colorClass = computed(() => {
    if (props.color === 'transparent') return 'bg-transparent text-white';
    if (props.color === 'light') return 'bg-white text-neutral-800 border-b border-neutral-200';
    if (props.color === 'dark') return 'bg-black text-white';
    if (props.color === 'primary') return 'bg-blue-600 text-white';
    return 'bg-transparent';
});

const currentTime = ref('');
let clockInterval = null;

const updateTime = () => {
    if (props.staticTime) {
        currentTime.value = props.staticTime;
        return;
    }

    const now = new Date();

    if (props.timeFormat === '24h')
        currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    else
        currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

onMounted(() => {
    updateTime();
    clockInterval = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
    if (clockInterval) {
        clearInterval(clockInterval);
    }
});

defineExpose({
    platform,
    updateTime
});
</script>

<style scoped>
.c-system-bar {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.ios-system-bar {
    padding-top: 2px;
}

.notch {
    position: relative;
    z-index: 20;
}

.notch-space {
    width: 48px;
}

.cellular-bar {
    background-color: currentColor;
}

.dark-theme {
    color: white;
}

@media (prefers-color-scheme: dark) {
    .c-system-bar:not(.light) {
        color: white;
    }
}
</style>
