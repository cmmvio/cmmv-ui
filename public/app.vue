<template>
    <main>
        <RouterView />
    </main>
</template>
  
<style scoped>
  
</style>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    const currentPath = window.location.pathname;

    if (currentPath && currentPath !== router.currentRoute.value.path) {
        router.push(currentPath).catch((err) => {
            if (err.name !== 'NavigationDuplicated') 
                console.error(err);
        });
    }
});
</script>