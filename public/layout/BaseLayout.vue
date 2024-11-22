<template>
    <div 
        s:docs="docs" 
        class="bg-gray-200 dark:bg-zinc-900"
        v-cloak
    >
        <nav class="navbar bg-neutral-800 h-16 top-0 w-full fixed flex z-50 shadow-lg">
            <div 
                class="w-full mx-auto flex items-center" 
                style="background-color: transparent !important;"
            >
                <button 
                    id="menu-toggle" 
                    name="Navbar Button"
                    aria-label="Navbar Button" 
                    class="text-slate-700 dark:text-slate-200 text-2xl p-2 lg:hidden ml-2"
                    @click="toggleMenu"
                >
                    <IconBars3 class="text-black w-8 h-8 dark:text-slate-50 text-2xl p-1 hover:text-neutral-300"></IconBars3>
                </button>

                <div class="w-60">
                    <a 
                        href="https://cmmv.io/docs" 
                        title="CMMV - Contract Model Model View Framework" 
                        class="text-white ml-4 flex items-center"
                    >
                        <img src="/assets/favicon/android-chrome-192x192.png" alt="CMMV Logo" height="32" width="32">
                        <span class="ml-2 text-lg text-slate-700 dark:text-slate-200 font-semibold">CMMV</span>
                    </a>
                </div>           

                <div class="justify-between w-full text mr-2 flex">
                    <div 
                        class="text-black dark:text-slate-50 relative text-left items-center gap-x-8 lg:flex hidden"
                    >
                        <ul class="flex gap-x-8 items-center lg:flex">                        
                            <li class="relative">
                                <a 
                                    href="/docs/overview/first-steps" 
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-700"
                                    title="Server"
                                >Getting Started</a>
                            </li>
                            <li class="relative">
                                <a 
                                    href="/docs/server/overview" 
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-700"
                                    title="Server"
                                >Server</a>
                            </li>
                            <li class="relative"> 
                                <a 
                                    href="/docs/contracts/overview" 
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-700"
                                    title="Contracts"
                                >Contracts</a>
                            </li>
                            <li class="relative"> 
                                <a 
                                    href="/docs/rpc/overview" 
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-700"
                                    title="RPC"
                                >RPC</a>
                            </li>
                            <li class="relative"> 
                                <a 
                                    href="/docs/view/overview" 
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-700"
                                    title="View"
                                >View</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>

                <div class="relative text-right hover:cursor-pointer group float-right">
                    <div id="docsearch" class="dark"></div>
                </div>

                <div class="justify-between align-middle text-center mr-2 text-white flex">
                    <!-- GitHub Link -->
                    <a 
                        href="https://github.com/andrehrferreira/cmmv" 
                        title="Github" 
                        target="_blank"
                        class="mr-2"
                    >
                        <IconGithub class="text-black w-8 h-8 dark:text-slate-50 text-2xl p-1 hover:text-neutral-300"></IconGithub>
                    </a>
                </div>
            </div>
        </nav>

        <main class="flex flex-wrap mx-auto">
            <div 
                id="sidebar-menu" 
                :class="[{ show: isMenuVisible }, 'w-60 fixed z-40 overflow-auto text-slate-800 leftbar h-screen lg:block bg-neutral-800']"
            >
                <Navbar ref="navbar"></Navbar> 
            </div>

            <div class="mt-16 lg:ml-64 sm:ml-4 ml-4 text-justify relative m-auto w-full">
                <div class="pl-2 m-4 px-10 mx-auto xl:ml-0 container">
                    <div class="text-slate-800 relative dark:text-white mb-20 context-html">
                        <slot />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from "./Navbar.vue";
import IconGithub from "@components/icons/IconGithub.vue";
import IconBars3 from "@components/icons/IconBars3.vue";

const isMenuVisible = ref(false);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
</script>
