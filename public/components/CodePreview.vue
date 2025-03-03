<template>
    <div class="w-full overflow-hidden">
        <div
            class="code-preview-container border border-gray-200 dark:border-neutral-700 rounded-lg mb-8 overflow-hidden">
            <div
                class="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
                <div class="flex space-x-1">
                    <button v-if="showPreviewButton" @click="activeTab = 'preview'" :class="[
                        'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                        activeTab === 'preview'
                            ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                    ]">
                        Preview
                    </button>
                    <button @click="activeTab = 'code'" :class="[
                        'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                        activeTab === 'code'
                            ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                    ]">
                        Code
                    </button>
                </div>

                <div class="flex items-center space-x-4">
                    <div v-if="activeTab === 'preview' && showPreviewButton"
                        class="flex items-center space-x-2 border-r border-gray-300 dark:border-neutral-600 pr-4">
                        <button @click="deviceSize = 'desktop'" :class="[
                            'p-1 rounded transition-colors',
                            deviceSize === 'desktop' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-neutral-400'
                        ]" title="Desktop view">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button @click="deviceSize = 'tablet'" :class="[
                            'p-1 rounded transition-colors',
                            deviceSize === 'tablet' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-neutral-400'
                        ]" title="Tablet view">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button @click="deviceSize = 'mobile'" :class="[
                            'p-1 rounded transition-colors',
                            deviceSize === 'mobile' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-neutral-400'
                        ]" title="Mobile view">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>

                    <div v-if="activeTab === 'preview' && showPreviewButton" class="flex items-center">
                        <span class="text-xs text-gray-500 dark:text-neutral-400 mr-2">Theme:</span>
                        <c-toggle @click="toggleTheme" />
                    </div>
                </div>
            </div>

            <div>
                <div v-show="activeTab === 'preview'" class="transition-all duration-200 "
                    :class="[previewTheme === 'dark' ? 'dark bg-neutral-900' : 'bg-gray-100 dark:bg-neutral-900']">
                    <div class="preview-container relative border border-gray-200 dark:border-neutral-700">
                        <div class="absolute inset-0 grid-bg"></div>

                        <div class="relative mx-auto border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm"
                            :class="[
                                deviceSize === 'desktop' ? 'w-full' :
                                    deviceSize === 'tablet' ? 'w-[768px] max-w-full' :
                                        'w-[375px] max-w-full'
                            ]">
                            <div :class="[padding]" ref="previewContent">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="activeTab === 'code'" class="overflow-auto max-h-[500px]">
                    <div class="overflow-x-auto">
                        <slot name="code"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    defaultView: {
        type: String,
        default: 'preview',
        validator: (value) => ['preview', 'code'].includes(value)
    },
    showPreviewButton: {
        type: Boolean,
        default: true
    },
    padding: {
        type: String,
        default: 'p-6'
    }
});

const activeTab = ref(props.defaultView);
const deviceSize = ref('desktop');
const previewTheme = ref('dark');
const isDarkMode = ref(false);

const detectDarkMode = () => {
    const htmlElement = document.documentElement;
    isDarkMode.value = htmlElement.classList.contains('dark');
    previewTheme.value = isDarkMode.value ? 'dark' : 'light';
};

const toggleTheme = () => {
    previewTheme.value = previewTheme.value === 'dark' ? 'light' : 'dark';
};

const observeThemeChanges = () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class')
                detectDarkMode();
        });
    });

    observer.observe(document.documentElement, { attributes: true });
    return observer;
};

onMounted(() => {
    detectDarkMode();
    const observer = observeThemeChanges();

    onUnmounted(() => {
        observer.disconnect();
    });
});
</script>

<style scoped>
.code-preview-container pre {
    margin: 0;
    padding: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-width: 100%;
    overflow-x: auto;
}

.code-preview-container code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    display: block;
    max-width: 100%;
}

.preview-container {
    padding: 1rem;
}

.grid-bg {
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(0, 0, 0, 0.03) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.03) 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.dark .grid-bg {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%);
}
</style>
