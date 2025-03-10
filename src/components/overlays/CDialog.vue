<template>
    <div>
        <slot name="activator"></slot>

        <c-overlay v-if="showDialog" :modelValue="true" :bgColor="overlayBgColor" :opacity="overlayOpacity"
            :closeOnOverlayClick="!modal"
            :class="[{ 'h-full fixed': fullscreen, 'fade-in': showDialog }]"
            :style="{ display: fullscreen ? 'block !important' : 'flex !important' }"
            @update:modelValue="handleOverlayClose">
            <c-card :maxWidth="fullscreen ? '100%' : cardMaxWidth" :minHeight="fullscreen ? '100vh' : 'auto'"
                :class="['dialog-card', animationClass, { 'w-full h-full relative': fullscreen }]" :bgColor="cardBgColor"
                :textColor="cardTextColor" :borderColor="cardBorderColor" :closable="closable" :hover="false" actions
                @close="handleClose" :rounded="fullscreen ? 'none' : 'default'">
                <template v-if="$slots.header" #header>
                    <div class="px-4 py-4 flex justify-between items-center relative border-b bottom-0" :class="[
                        cardBorderColor,
                        fullscreen ? '' : 'rounded-t-md',
                        headerBgColor ? headerBgColor : cardBgColor]">
                        <div>
                            <slot name="header"></slot>
                        </div>

                        <div class="top-2 right-1 absolute">
                            <c-button type="button" rounded="full" size="md" variant="flat" v-if="closable"
                                @click="handleClose"
                                :bgColor="[headerBgColor ? headerBgColor : cardBgColor, 'bg-opacity-50 hover:bg-opacity-100'].join(' ')"
                                class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                                aria-label="Close">
                                <IconXMark :class="cardTextColor ? cardTextColor : 'text-white'" />
                            </c-button>
                        </div>
                    </div>
                </template>

                <template v-if="$slots.content" v-slot:content>
                    <div
                        class="px-4 py-3 w-full mb-1"
                        :class="{'pb-16' : $slots.actions}"
                    >
                        <slot name="content"></slot>
                    </div>
                </template>

                <template v-if="$slots.actions" v-slot:actions>
                    <div class="flex justify-end space-x-2 px-4 py-3 border-t bottom-0 absolute w-full"
                        :class="cardBorderColor">
                        <slot name="actions"></slot>
                    </div>
                </template>
            </c-card>
        </c-overlay>
    </div>
</template>

<style scoped>
.fade-in {
    animation: fade-in 300ms ease-in-out forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.slide-down {
    animation: slide-down 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transform-origin: top center;
}

.slide-up-leave {
    animation: slide-up 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transform-origin: top center;
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide-up {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-50px);
    }
}

.zoom {
    animation: zoom 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    transform-origin: center;
}

.zoom-out-leave {
    animation: zoom-out 300ms cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
    transform-origin: center;
}

@keyframes zoom {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes zoom-out {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(0.8);
    }
}

.flip {
    animation: flip 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.flip-out-leave {
    animation: flip-out 300ms cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

@keyframes flip {
    from {
        opacity: 0;
        transform: perspective(1000px) rotateX(-90deg);
    }

    to {
        opacity: 1;
        transform: perspective(1000px) rotateX(0);
    }
}

@keyframes flip-out {
    from {
        opacity: 1;
        transform: perspective(1000px) rotateX(0);
    }

    to {
        opacity: 0;
        transform: perspective(1000px) rotateX(-90deg);
    }
}

.slide-right {
    animation: slide-right 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.slide-left-leave {
    animation: slide-left 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slide-right {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-left {
    from {
        opacity: 1;
        transform: translateX(0);
    }

    to {
        opacity: 0;
        transform: translateX(-50px);
    }
}

.bounce {
    animation: bounce 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    transform-origin: center;
}

.bounce-out-leave {
    animation: bounce-out 300ms cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
    transform-origin: center;
}

@keyframes bounce {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }

    50% {
        opacity: 0.9;
        transform: scale(1.1);
    }

    80% {
        opacity: 1;
        transform: scale(0.89);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    20% {
        transform: scale(1.1);
        opacity: 0.9;
    }

    100% {
        transform: scale(0.3);
        opacity: 0;
    }
}

/* Add elevation shadow with animation */
.dialog-card {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    will-change: transform, opacity;
}

/* Dialog overlay backdrop blur */
.dialog-backdrop {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}
</style>

<script setup lang="ts">
import {
    ref, watch, nextTick, defineProps,
    defineEmits, computed, onMounted, useSlots
} from "vue";

import IconXMark from "@components/icons/IconXMark.vue";

const slots = useSlots();

const checkNonEmptySlot = (name) => {
    return !!slots[name];
};

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    modal: {
        type: Boolean,
        default: false
    },
    fullscreen: {
        type: Boolean,
        default: false
    },
    overlayBgColor: {
        type: String,
        default: "#000"
    },
    overlayOpacity: {
        type: Number,
        default: 50
    },
    cardBgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800"
    },
    cardTextColor: {
        type: String,
        default: "text-black dark:text-white"
    },
    cardBorderColor: {
        type: String,
        default: "border-neutral-300 dark:border-neutral-900"
    },
    cardMaxWidth: {
        type: String,
        default: "600px"
    },
    headerBgColor: {
        type: String,
        default: "bg-neutral-200 dark:bg-neutral-800"
    },
    closable: {
        type: Boolean,
        default: true
    },
    animation: {
        type: String,
        default: "zoom", // Options: zoom, slide-down, slide-right, flip, bounce
        validator: (value: string) => ['zoom', 'slide-down', 'slide-right', 'flip', 'bounce'].includes(value)
    },
    animationDuration: {
        type: Number,
        default: 400
    }
});

const emit = defineEmits(["update:modelValue"]);
const showDialog = ref(false);
const isClosing = ref(false);
const hasActionsContent = ref(false);

// Verificar se o slot de actions tem conteúdo real
onMounted(() => {
    // Verificar apenas na próxima atualização do DOM
    nextTick(() => {
        if (document.querySelector('.dialog-card .actions-container')?.innerHTML.trim()) {
            hasActionsContent.value = true;
        }
    });
});

// Em vez de usar uma solução baseada em DOM, vamos usar uma verificação via props
watch(() => props.modelValue, () => {
    if (props.modelValue) {
        // Quando o dialog é aberto, verificamos novamente o conteúdo
        nextTick(() => {
            const actionsContainer = document.querySelector('.dialog-card .actions-container');
            hasActionsContent.value = actionsContainer && actionsContainer.innerHTML.trim() !== '';
        });
    }
});

const animationClass = computed(() => {
    if (isClosing.value) {
        switch (props.animation) {
            case 'zoom': return 'zoom-out-leave';
            case 'slide-down': return 'slide-up-leave';
            case 'slide-right': return 'slide-left-leave';
            case 'flip': return 'flip-out-leave';
            case 'bounce': return 'bounce-out-leave';
            default: return 'zoom-out-leave';
        }
    } else {
        return props.animation;
    }
});

const handleClose = () => {
    if (isClosing.value) return;
    closeWithAnimation();
};

const handleOverlayClose = (value: boolean) => {
    if (value === false && !props.modal && !isClosing.value)
        closeWithAnimation();
};

const closeWithAnimation = () => {
    if (isClosing.value || !showDialog.value) return;

    isClosing.value = true;

    setTimeout(() => {
        showDialog.value = false;
        isClosing.value = false;
        emit("update:modelValue", false);
    }, props.animationDuration * 0.75);
};

watch(
    () => props.modelValue,
    async (newValue) => {
        if (newValue) {
            isClosing.value = false;
            await nextTick();
            showDialog.value = true;
        } else if (!isClosing.value) {
            closeWithAnimation();
        }
    },
    { immediate: true }
);
</script>

