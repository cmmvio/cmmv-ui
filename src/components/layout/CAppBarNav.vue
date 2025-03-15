<template>
    <div class="c-app-bar-nav" :class="mode">
        <c-button
            type="button"
            variant="plain"
            rounded="full"
            class="c-app-bar-nav"
            @click="$emit('click')"
        >
            <slot>
                <IconBars3 class="text-white" />
            </slot>
        </c-button>
    </div>
</template>

<script setup>
defineProps({
  mode: {
    type: String,
    default: '',
    validator: (value) => ['', 'light', 'dark'].includes(value)
  }
});

defineEmits(['click']);
</script>

<style scoped>
.c-app-bar-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    outline: none;
    left: -8px
}

.c-app-bar-nav-icon {
    width: 24px;
    height: 24px;
}
</style>
