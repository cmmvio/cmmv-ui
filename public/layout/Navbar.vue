<template>
    <div class="p-4 select-none top-16 text-slate-700 dark:text-slate-200">
        <div v-for="(item, key) in navbarItems" :key="key">
            <!-- Navbar Root Item -->
            <div
                class="flex hover:text-blue-700 itemRoot"
                :id="item?.name.replace(/\s/g, '_')"
                @click.stop="toggle(item.name?.replace(/\s/g, '_'))"
            >
                <div class="flex flex-1 font-bold text-md cursor-pointer navbar-item">
                    <h3 v-if="item?.isDir">{{ item.name }}</h3>
                    <span v-else>{{ item.name }}</span>
                </div>

                <div class="justify-between cursor-pointer" v-if="item?.isDir">
                    <div v-if="navbar[item?.name.replace(/\s/g, '_')] === true">
                        <!-- Down Arrow Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div v-else>
                        <!-- Up Arrow Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Navbar Children -->
            <transition name="toggle">
                <div
                    v-if="item?.children && item.children.length > 0 && navbar[item?.name.replace(/\s/g, '_')]"
                    :id="`${item?.name.replace(/\s/g, '_')}_contents`"
                    class="p-4 py-1 text-md mb-4"
                >
                    <div v-for="(child) in item.children" :key="child.name">
                        <div class="hover:text-gray-800 text-base p-1" style="font-size: 10px">
                            <a :href="child.uri" class="text-base hover:text-blue-500">
                                {{ child.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, watch } from "vue";

export default defineComponent({
    name: "Navbar",

    setup() {
        const navbar = reactive({});

        const navbarItems = [
            {
                name: "Components",
                isDir: true,
                children: [
                    { name: "Badge", uri: "/badge" },
                    { name: "Button", uri: "/button" },
                    { name: "Flags", uri: "/flags" },
                    { name: "Icon", uri: "/icon" },
                    { name: "Loader", uri: "/loader" },   
                    { name: "Progress Bar", uri: "/progress-bar" },
                    { name: "Progress Circular", uri: "/progress-circular" },
                    { name: "Tooltip", uri: "/tooltip" }
                ],
            },
            {
                name: "Layout",
                isDir: true,
                children: [
                    { name: "Card", uri: "/card" },
                    { name: "Container", uri: "/container" },
                    { name: "Toolbar", uri: "/toolbar" },
                ]
            },
            {
                name: "Form",
                isDir: true,
                children: [
                    { name: "Checkbox", uri: "/checkbox" },
                    { name: "Form", uri: "/form" },
                    { name: "Input", uri: "/input" },  
                    { name: "Radio", uri: "/radio" },
                    { name: "Textarea", uri: "/textarea" },                  
                    { name: "Toggle", uri: "/toggle" },
                ],
            },
            {
                name: "Overlays",
                isDir: true,
                children: [
                    { name: "Notification", uri: "/notification" },
                ],
            },
        ];

        const toggle = (key: string) => {
            navbar[key] = !navbar[key];
        };

        onMounted(() => {
            const savedState = localStorage.getItem("navbarState");

            if (savedState) 
                Object.assign(navbar, JSON.parse(savedState));
        });

        watch(
            () => navbar,
            (newState) => {
                localStorage.setItem("navbarState", JSON.stringify(newState));
            },
            { deep: true }
        );

        return { navbar, navbarItems, toggle };
    },
});
</script>

<style scoped>
.itemRoot {
    padding: 0.5rem 0;
    align-items: center;
}
.navbar-item {
    display: flex;
    align-items: center;
}
</style>
