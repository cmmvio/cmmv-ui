<template>
    <div>
      <slot name="activator"></slot>
  
      <c-overlay
        :modelValue="showDialog"
        :bgColor="overlayBgColor"
        :opacity="overlayOpacity"
        :closeOnOverlayClick="!modal"
        @update:modelValue="closeDialog"
      >
        <c-card
            :maxWidth="fullscreen ? '100%' : cardMaxWidth"
            :minHeight="fullscreen ? '100vh' : 'auto'"
            :class="{ 'w-full h-full': fullscreen }"
            :bgColor="cardBgColor"
            :textColor="cardTextColor"
            :borderColor="cardBorderColor"
            :closable="closable"
            :hover="false"
            @close="handleClose"
        >
            <template v-if="$slots.header" v-slot:header>
                <slot name="header"></slot>
            </template>

            <template v-if="$slots.content" v-slot:content>
                <slot name="content"></slot>
            </template>

            <template v-if="$slots.actions" v-slot:actions>
                <slot name="actions"></slot>
            </template>
        </c-card>
      </c-overlay>
    </div>
  </template>
  
<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
  
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
    modal: {
        type: Boolean,
        default: false,
    },
    fullscreen: {
        type: Boolean,
        default: false,
    },
    overlayBgColor: {
        type: String,
        default: "bg-black",
    },
    overlayOpacity: {
        type: Number,
        default: 50,
    },
    cardBgColor: {
        type: String,
        default: "bg-white",
    },
    cardTextColor: {
        type: String,
        default: "text-black",
    },
    cardBorderColor: {
        type: String,
        default: "border-gray-300",
    },
    cardMaxWidth: {
        type: String,
        default: "600px",
    },
    closable: {
        type: Boolean,
        default: true,
    },
});
  
const emit = defineEmits(["update:modelValue"]);
const showDialog = ref(false);
  
watch(
    () => props.modelValue,
    (newValue) => {
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
  