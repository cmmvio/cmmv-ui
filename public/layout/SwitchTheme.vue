<template>
    <button
        @click="toggleTheme"
        class="mt-0.5 mr-1"
    >
            <icon-sun v-if="theme === 'dark'" class="w-8 h-8 text-white dark:text-slate-50 text-2xl p-1 hover:text-neutral-300" aria-hidden="true" />
            <icon-moon v-else class="w-8 h-8 text-black dark:text-slate-50 text-2xl p-1 hover:text-neutral-600" aria-hidden="true" />
    </button>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");

watchEffect(() => {
    if (theme.value === "dark"){
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    }
    else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }

    localStorage.setItem("theme", theme.value);
});

const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
};
</script>
