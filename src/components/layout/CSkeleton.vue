<template>
    <div class="c-skeleton" :class="[
        `skeleton-${type}`,
        `skeleton-${variant}`,
        { 'skeleton-rounded': rounded },
        customClass
    ]" :style="customStyle">
        <template v-if="type === 'text'">
            <div v-for="(line, index) in lines" :key="index" class="skeleton-line" :class="{
                'skeleton-title': index === 0 && title,
                'skeleton-last': index === lines - 1 && lastLineWidth,
                [`skeleton-${animationType}-animation`]: animated
            }" :style="index === lines - 1 && lastLineWidth ? { width: `${lastLineWidth}%` } : {}"></div>
        </template>

        <template v-else-if="type === 'image'">
            <div class="skeleton-image" :class="{ [`skeleton-${animationType}-animation`]: animated }"
                :style="{ height: `${height}px`, width: `${width}${typeof width === 'number' ? 'px' : ''}` }">
                <div v-if="icon" class="skeleton-icon">
                    <slot name="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                    </slot>
                </div>
            </div>
        </template>

        <template v-else-if="type === 'image-text'">
            <div class="skeleton-image-text">
                <div class="skeleton-image" :class="{ [`skeleton-${animationType}-animation`]: animated }"
                    :style="{ height: `${imageHeight}px`, width: `${imageWidth}${typeof imageWidth === 'number' ? 'px' : ''}` }">
                    <div v-if="icon" class="skeleton-icon">
                        <slot name="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clip-rule="evenodd" />
                            </svg>
                        </slot>
                    </div>
                </div>
                <div class="skeleton-text">
                    <div v-for="(line, index) in imageTextLines" :key="index" class="skeleton-line" :class="{
                        'skeleton-title': index === 0 && title,
                        'skeleton-last': index === imageTextLines - 1 && lastLineWidth,
                        [`skeleton-${animationType}-animation`]: animated
                    }" :style="index === imageTextLines - 1 && lastLineWidth ? { width: `${lastLineWidth}%` } : {}">
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="type === 'video'">
            <div class="skeleton-video" :class="{ [`skeleton-${animationType}-animation`]: animated }"
                :style="{ height: `${height}px`, width: `${width}${typeof width === 'number' ? 'px' : ''}` }">
                <div class="skeleton-play-icon">
                    <slot name="play-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clip-rule="evenodd" />
                        </svg>
                    </slot>
                </div>
            </div>
        </template>

        <template v-else-if="type === 'card'">
            <div class="skeleton-card" :style="{ height: cardHeight ? `${cardHeight}px` : 'auto' }">
                <div v-if="cardImage" class="skeleton-card-image"
                    :class="{ [`skeleton-${animationType}-animation`]: animated }"
                    :style="{ height: `${cardImageHeight}px` }"></div>
                <div class="skeleton-card-content">
                    <div v-for="(line, index) in cardLines" :key="index" class="skeleton-line" :class="{
                        'skeleton-title': index === 0 && title,
                        'skeleton-last': index === cardLines - 1 && lastLineWidth,
                        [`skeleton-${animationType}-animation`]: animated
                    }" :style="index === cardLines - 1 && lastLineWidth ? { width: `${lastLineWidth}%` } : {}"></div>
                </div>
            </div>
        </template>

        <template v-else-if="type === 'list'">
            <div v-for="item in listItems" :key="item" class="skeleton-list-item"
                :class="{ 'skeleton-list-item-avatar': listItemAvatar }">
                <div v-if="listItemAvatar" class="skeleton-avatar"
                    :class="{ [`skeleton-${animationType}-animation`]: animated }"
                    :style="{ width: `${listItemAvatarSize}px`, height: `${listItemAvatarSize}px` }"></div>
                <div class="skeleton-list-content">
                    <div v-for="(line, index) in listItemLines" :key="index" class="skeleton-line" :class="{
                        'skeleton-title': index === 0 && title,
                        'skeleton-last': index === listItemLines - 1,
                        [`skeleton-${animationType}-animation`]: animated
                    }" :style="index === listItemLines - 1 ? { width: '60%' } : {}"></div>
                </div>
            </div>
        </template>

        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        validator: (value) => ['text', 'image', 'image-text', 'video', 'card', 'list'].includes(value)
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'primary', 'secondary', 'dark', 'light'].includes(value)
    },
    animated: {
        type: Boolean,
        default: true
    },
    animationType: {
        type: String,
        default: 'pulse',
        validator: (value) => ['pulse', 'shine'].includes(value)
    },
    rounded: {
        type: Boolean,
        default: false
    },
    customClass: {
        type: String,
        default: ''
    },
    customStyle: {
        type: Object,
        default: () => ({})
    },
    lines: {
        type: Number,
        default: 3
    },
    title: {
        type: Boolean,
        default: true
    },
    lastLineWidth: {
        type: Number,
        default: 70
    },
    width: {
        type: [Number, String],
        default: '100%'
    },
    height: {
        type: Number,
        default: 200
    },
    icon: {
        type: Boolean,
        default: true
    },
    imageWidth: {
        type: [Number, String],
        default: 100
    },
    imageHeight: {
        type: Number,
        default: 100
    },
    imageTextLines: {
        type: Number,
        default: 2
    },
    cardHeight: {
        type: Number,
        default: null
    },
    cardImage: {
        type: Boolean,
        default: true
    },
    cardImageHeight: {
        type: Number,
        default: 140
    },
    cardLines: {
        type: Number,
        default: 3
    },
    listItems: {
        type: Number,
        default: 3
    },
    listItemLines: {
        type: Number,
        default: 2
    },
    listItemAvatar: {
        type: Boolean,
        default: false
    },
    listItemAvatarSize: {
        type: Number,
        default: 40
    }
});
</script>

<style scoped>
.c-skeleton {
    --skeleton-bg: rgba(0, 0, 0, 0.11);
    --skeleton-highlight: rgba(255, 255, 255, 0.5);
    --skeleton-pulse-highlight: rgba(0, 0, 0, 0.18);
    --skeleton-radius: 4px;
    --skeleton-duration: 1.5s;

    display: block;
    position: relative;
    overflow: hidden;
}

.skeleton-dark {
    --skeleton-bg: rgba(255, 255, 255, 0.11);
    --skeleton-highlight: rgba(255, 255, 255, 0.15);
    --skeleton-pulse-highlight: rgba(255, 255, 255, 0.25);
}

.skeleton-primary {
    --skeleton-bg: rgba(59, 130, 246, 0.2);
    --skeleton-highlight: rgba(255, 255, 255, 0.4);
    --skeleton-pulse-highlight: rgba(59, 130, 246, 0.5);
}

.skeleton-secondary {
    --skeleton-bg: rgba(107, 114, 128, 0.2);
    --skeleton-highlight: rgba(255, 255, 255, 0.4);
    --skeleton-pulse-highlight: rgba(107, 114, 128, 0.5);
}

.skeleton-light {
    --skeleton-bg: rgba(229, 231, 235, 0.7);
    --skeleton-highlight: rgba(150, 150, 150, 0.4);
    --skeleton-pulse-highlight: rgba(200, 200, 200, 1);
}

.skeleton-line {
    width: 100%;
    height: 16px;
    background-color: var(--skeleton-bg);
    border-radius: var(--skeleton-radius);
    margin-bottom: 12px;
}

.skeleton-title {
    height: 24px;
    margin-bottom: 16px;
}

.skeleton-last {
    margin-bottom: 0;
}

.skeleton-image,
.skeleton-video {
    background-color: var(--skeleton-bg);
    border-radius: var(--skeleton-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.skeleton-icon,
.skeleton-play-icon {
    color: rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;
}

.skeleton-dark .skeleton-icon,
.skeleton-dark .skeleton-play-icon {
    color: rgba(255, 255, 255, 0.2);
}

.skeleton-image-text {
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.skeleton-image-text .skeleton-text {
    flex: 1;
}

.skeleton-card {
    border-radius: var(--skeleton-radius);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.skeleton-card-image {
    width: 100%;
    background-color: var(--skeleton-bg);
    position: relative;
}

.skeleton-card-content {
    padding: 16px;
}

.skeleton-list-item {
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.skeleton-list-item:last-child {
    border-bottom: none;
}

.skeleton-list-item-avatar {
    display: flex;
    gap: 16px;
}

.skeleton-avatar {
    border-radius: 50%;
    background-color: var(--skeleton-bg);
    flex-shrink: 0;
    position: relative;
}

.skeleton-list-content {
    flex: 1;
}

.skeleton-rounded .skeleton-line,
.skeleton-rounded .skeleton-image,
.skeleton-rounded .skeleton-video,
.skeleton-rounded .skeleton-card {
    border-radius: 9999px;
}

.skeleton-rounded .skeleton-card-image {
    border-radius: 0;
}

.skeleton-shine-animation {
    position: relative;
    overflow: hidden;
}

.skeleton-shine-animation::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg,
            transparent,
            var(--skeleton-highlight),
            transparent);
    animation: skeleton-shine var(--skeleton-duration) infinite;
    z-index: 1;
}

@keyframes skeleton-shine {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.skeleton-pulse-animation {
    position: relative;
    overflow: hidden;
    animation: skeleton-pulse var(--skeleton-duration) ease-in-out infinite;
}

@keyframes skeleton-pulse {

    0%,
    100% {
        background-color: var(--skeleton-bg);
    }

    50% {
        background-color: var(--skeleton-pulse-highlight);
    }
}
</style>
