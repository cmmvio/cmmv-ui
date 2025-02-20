<template>
    <div>
        <slot name="activator"></slot>
          
        <c-overlay
            v-if="showDialog"
            v-model="showDialog"
            :bgColor="overlayBgColor"
            :opacity="overlayOpacity"
            :closeOnOverlayClick="!modal"
            :class="[{ 'h-full fixed': fullscreen, 'fade-out': !showDialog, 'fade-in': showDialog }]"
            :style="{ display: fullscreen ? 'block !important' : 'flex !important' }"
            @update:modelValue="closeDialog"
        >
            <c-card
                :maxWidth="fullscreen ? '100%' : cardMaxWidth"
                :minHeight="fullscreen ? '100vh' : 'auto'"
                :class="['dialog-animation', { 'w-full h-full relative': fullscreen }]"
                :bgColor="cardBgColor"
                :textColor="cardTextColor"
                :borderColor="cardBorderColor"
                :closable="closable"
                :hover="false"
                actions
                @close="handleClose"
            >
                <template v-if="$slots.header" #header>
                    <div 
                        class="px-4 py-4 flex justify-between items-center relative rounded-t-md border-b bottom-0"
                        :class="[cardBorderColor, headerBgColor ? headerBgColor : cardBgColor]"
                    >
                        <div>
                            <slot name="header"></slot>
                        </div>

                        <div class="top-2 right-1 absolute">
                            <c-button
                                type="button"
                                rounded="full"
                                size="md"
                                variant="flat"
                                v-if="closable"
                                @click="handleClose"
                                :bgColor="[headerBgColor ? headerBgColor : cardBgColor, 'bg-opacity-50 hover:bg-opacity-100'].join(' ')"
                                class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                aria-label="Close"
                            >
                                <IconXMark :class="cardTextColor ? cardTextColor : 'text-white'" />
                            </c-button>
                        </div>
                    </div>
                </template>

                <template v-if="$slots.content" v-slot:content>
                    <div class="px-4 py-3 pt-0 w-full pb-14">
                        <slot name="content"></slot>
                    </div>
                </template>

                <template v-if="$slots.actions" v-slot:actions>
                    <div 
                        class="flex justify-end space-x-2 px-4 py-3 border-t bottom-0 absolute w-full" 
                        :class="cardBorderColor"
                    >
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

.fade-out {
    animation: fade-out 300ms ease-in-out forwards;
}

.scale-in {
    animation: scale-in 300ms ease-in-out forwards;
}

.scale-out {
    animation: scale-out 300ms ease-in-out forwards;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes scale-in {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes scale-out {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
}
</style>

<script setup lang="ts">
import { ref, watch, nextTick, defineProps, defineEmits } from "vue";
import IconXMark from "@components/icons/IconXMark.vue";

const props = defineProps({
    modelValue: { type: Boolean, required: true },
    modal: { type: Boolean, default: false },
    fullscreen: { type: Boolean, default: false },
    overlayBgColor: { type: String, default: "#000" },
    overlayOpacity: { type: Number, default: 50 },
    cardBgColor: { type: String, default: "bg-white" },
    cardTextColor: { type: String, default: "text-black" },
    cardBorderColor: { type: String, default: "border-gray-300" },
    cardMaxWidth: { type: String, default: "600px" },
    headerBgColor: { type: String, default: "bg-gray-200" },
    closable: { type: Boolean, default: true },
    transitionEnter: { type: String, default: "fade-enter-active" },
    transitionLeave: { type: String, default: "fade-leave-active" },
});

const emit = defineEmits(["update:modelValue"]);
const showDialog = ref(false);

watch(
    () => props.modelValue,
    async (newValue) => {
        await nextTick();
        showDialog.value = newValue;
    }
);

const openDialog = () => {
    showDialog.value = true;
    emit("update:modelValue", true);
};

const closeDialog = () => {
    if (!props.modal) {
        showDialog.value = false;
        emit("update:modelValue", false);
    }
};

const handleClose = () => {
    showDialog.value = false;
    emit("update:modelValue", false);
};
</script>
