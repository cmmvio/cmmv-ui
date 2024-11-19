<template>
    <button-element 
        type="button"
        variant="elevated"
    >Click Me</button-element>
</template>
  
<style scoped>
  
</style>
  
<script setup>
import ButtonElement from "@components/ButtonElement.vue";

function handleClick() {
    alert('Button clicked!');
}
</script>