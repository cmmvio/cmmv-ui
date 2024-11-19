<template>
    <button-element 
        text="Click Me" 
        @click="handleClick"
    ></button-element>
</template>
  
<style scoped>
  
</style>
  
<script setup>
import ButtonElement from "@components/ButtonElement.vue";

function handleClick() {
    alert('Button clicked!');
}
</script>