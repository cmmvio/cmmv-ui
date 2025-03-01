<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-950" v-cloak>
        <nav
            class="navbar bg-white dark:bg-zinc-800 h-16 top-0 w-full fixed flex z-40 shadow-md border-b border-gray-200 dark:border-zinc-700 transition-all duration-300">
            <div class="w-full mx-auto flex items-center px-3" style="background-color: transparent !important;">
                <button id="menu-toggle" name="Navbar Button" aria-label="Navbar Button"
                    class="text-slate-700 dark:text-slate-200 p-2 lg:hidden rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200 mr-2"
                    @click="toggleMenu">
                    <IconBars3 class="w-6 h-6 text-gray-700 dark:text-slate-100"></IconBars3>
                </button>

                <div class="w-60 flex-shrink-0">
                    <a href="https://cmmv.io/docs" title="CMMV - Contract Model Model View Framework"
                        class="text-white flex items-center group">
                        <img src="/assets/android-chrome-192x192.png" alt="CMMV Logo" height="36" width="36"
                            class="transition-transform duration-300 group-hover:scale-110">
                        <span
                            class="ml-2 text-lg text-gray-800 dark:text-slate-100 font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">CMMV</span>
                    </a>
                </div>

                <div class="justify-between w-full text mr-2 flex">
                    <div class="text-black dark:text-slate-50 relative text-left items-center gap-x-8 lg:flex hidden">
                        <ul class="flex gap-x-8 items-center lg:flex">
                            <li class="relative">
                                <a href="https://cmmv.io/docs/overview/first-steps"
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 py-1 px-2 rounded-md transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
                                    title="Server">Getting Started</a>
                            </li>
                            <li class="relative">
                                <a href="https://cmmv.io/docs/server/overview"
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 py-1 px-2 rounded-md transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
                                    title="Server">Server</a>
                            </li>
                            <li class="relative">
                                <a href="https://cmmv.io/docs/contracts/overview"
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 py-1 px-2 rounded-md transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
                                    title="Contracts">Contracts</a>
                            </li>
                            <li class="relative">
                                <a href="https://cmmv.io/docs/rpc/overview"
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 py-1 px-2 rounded-md transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
                                    title="RPC">RPC</a>
                            </li>
                            <li class="relative">
                                <a href="https://cmmv.io/docs/view/overview"
                                    class="text-sm/6 font-semibold flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 py-1 px-2 rounded-md transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
                                    title="View">View</a>
                            </li>
                            <li class="relative">
                                <a href="https://ui.cmmv.io"
                                    class="text-sm/6 font-semibold flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 py-1 px-3 rounded-md transition-colors duration-200"
                                    title="UI">UI</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="relative text-right hover:cursor-pointer group float-right">
                    <div id="docsearch" class="dark"></div>
                </div>

                <div class="justify-between align-middle text-center mr-1 text-white flex items-center space-x-2">
                    <SwitchTheme />

                    <a href="https://github.com/cmmvio/cmmv-ui" title="Github" target="_blank"
                        class="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200">
                        <IconGithub class="w-5 h-5 text-gray-700 dark:text-slate-100"></IconGithub>
                    </a>
                </div>
            </div>
        </nav>

        <main class="flex flex-wrap mx-auto pt-16 relative">
            <div id="sidebar-menu" :class="[
                { 'translate-x-0 shadow-2xl': isMenuVisible, '-translate-x-full lg:translate-x-0': !isMenuVisible },
                'bg-white dark:bg-zinc-800 w-72 fixed top-16 bottom-0 z-40 overflow-auto text-slate-800 pb-10 border-r border-gray-200 dark:border-zinc-700 transition-all duration-300 ease-in-out'
            ]">
                <Navbar ref="navbar" :isOpen="isMenuVisible" @close="isMenuVisible = false"></Navbar>
            </div>

            <div v-if="isMenuVisible" class="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
                @click="isMenuVisible = false"></div>

            <div
                class="lg:ml-80 sm:ml-4 ml-2 sm:mr-2 lg:mr-8 text-justify relative m-auto lg:max-w-[calc(100%-20rem)] max-w-[calc(100%-1rem)]">
                <div class="content-container rounded-lg overflow-hidden">
                    <div class="m-auto py-8 w-full">
                        <div class="text-slate-800 relative dark:text-white mb-12 context-html">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from "./Navbar.vue";
import SwitchTheme from "./SwitchTheme.vue";
import IconGithub from "@components/icons/IconGithub.vue";
import IconBars3 from "@components/icons/IconBars3.vue";

const route = useRoute();
const isMenuVisible = ref(false);
let navbarScrollWatcher = null;

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

const saveNavbarScrollPosition = () => {
    const navbarElement = document.getElementById('sidebar-menu');

    if (navbarElement) {
        const navbarScrollPosition = {
            y: navbarElement.scrollTop
        };
        localStorage.setItem('navbar_scroll_position', JSON.stringify(navbarScrollPosition));
    }
};

const setupNavbarScrollWatcher = () => {
    const navbarElement = document.getElementById('sidebar-menu');

    if (navbarElement) {
        navbarScrollWatcher = () => {
            saveNavbarScrollPosition();
        };
        navbarElement.addEventListener('scroll', navbarScrollWatcher, { passive: true });
    }
};

const restoreNavbarScrollPosition = () => {

    const savedNavbarPosition = localStorage.getItem('navbar_scroll_position');

    if (savedNavbarPosition) {
        const { y } = JSON.parse(savedNavbarPosition);

        nextTick(() => {
            const navbarElement = document.getElementById('sidebar-menu');
            if (navbarElement) {
                navbarElement.scrollTop = y;
            }
        });
    }
};

onMounted(() => {
    setupNavbarScrollWatcher();

    setTimeout(() => {
        restoreNavbarScrollPosition();
    }, 100);

    document.addEventListener('click', (e) => {
        if (isMenuVisible.value && e.target.tagName === 'A') {
            isMenuVisible.value = false;
        }
    });
});

onBeforeUnmount(() => {
    const navbarElement = document.getElementById('sidebar-menu');

    if (navbarElement && navbarScrollWatcher)
        navbarElement.removeEventListener('scroll', navbarScrollWatcher);

    saveNavbarScrollPosition();
});
</script>

<style>
#sidebar-menu::-webkit-scrollbar {
    width: 4px;
}

#sidebar-menu::-webkit-scrollbar-track {
    background: transparent;
}

#sidebar-menu::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 20px;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

[v-cloak] {
    display: none;
}

.content-container {
    margin-bottom: 3rem;
}

/* Efeito de grade no fundo com linhas contínuas */
:root {
    --color-white: #ffffff;
    --color-black: #000000;
    --grid-size: 50px;
}

.grid-pattern {
    --pattern-fg: rgba(0, 0, 0, 0.03);
    /* Fallback para navegadores sem suporte a color-mix */
    background-image:
        linear-gradient(315deg, transparent calc(var(--grid-size) - 1px), var(--pattern-fg) calc(var(--grid-size) - 1px), var(--pattern-fg) var(--grid-size), transparent var(--grid-size)),
        linear-gradient(45deg, transparent calc(var(--grid-size) - 1px), var(--pattern-fg) calc(var(--grid-size) - 1px), var(--pattern-fg) var(--grid-size), transparent var(--grid-size));
    background-size: var(--grid-size) var(--grid-size);
    background-attachment: fixed;
    pointer-events: none;
}

/* Versões modernas dos navegadores que suportam color-mix */
@supports (background: color-mix(in srgb, white, black)) {
    .grid-pattern {
        --pattern-fg: color-mix(in oklab, var(--color-black) 5%, transparent);
    }

    .dark .grid-pattern {
        --pattern-fg: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
}

/* Fallback para navegadores sem suporte a color-mix */
.dark .grid-pattern {
    --pattern-fg: rgba(255, 255, 255, 0.06);
}
</style>
