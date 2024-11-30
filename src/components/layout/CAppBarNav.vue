<template>
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
</template>
  
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
  