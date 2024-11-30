<template>
    <div class="c-toolbar-title">
        <slot></slot>
    </div>
</template>
  
<style scoped>
.c-toolbar-title {
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
  