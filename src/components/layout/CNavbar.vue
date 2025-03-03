<template>
    <nav :class="[
        'c-navbar transition-all duration-300',
        mode === 'horizontal' ? 'flex items-center' : 'flex flex-col',
        elevated ? 'shadow-md' : '',
        border ? (mode === 'horizontal' ? 'border-b' : 'border-r') : '',
        borderColor
    ]" :style="{ backgroundColor: bgColor, color: textColor }">

        <div v-if="mode === 'horizontal'" class="w-full flex items-center">
            <div v-if="toggleable" class="lg:hidden">
                <button :aria-label="toggleAriaLabel" class="p-2 rounded-md mr-2" :class="toggleButtonClass"
                    @click="toggleMobileMenu">
                    <svg v-if="!mobileMenuOpen" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>

            <div :class="['relative',
                {
                    'hidden lg:block flex-grow': !mobileMenuOpen,
                    'absolute top-full left-0 right-0 z-50 bg-white dark:bg-zinc-800 shadow-md border-b border-neutral-200 dark:border-neutral-700 lg:static lg:border-0 lg:shadow-none lg:block lg:bg-transparent': mobileMenuOpen
                }
            ]">
                <slot name="items">
                    <ul class="flex flex-col lg:flex-row lg:gap-x-8 p-3 lg:p-0 items-center">
                        <template v-for="(item, index) in items" :key="index">
                            <li v-if="!item.children" class="relative">
                                <a :href="item.href" :class="[
                                    'text-sm font-semibold flex items-center gap-1 py-1 px-2 rounded-md',
                                    item.active ? activeClass : itemClass,
                                    hoverBgColor
                                ]" :title="item.title">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-4 h-4 flex-shrink-0" />
                                    <span class="truncate">{{ item.text }}</span>
                                </a>
                            </li>

                            <li v-else class="relative">
                                <button @click="toggleDropdown(index)" :class="['text-sm font-semibold flex items-center gap-1 py-1 px-2 rounded-md w-full text-left',
                                    openDropdownIndex === index ? activeClass : itemClass,
                                    hoverBgColor]" :title="item.title">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-4 h-4 flex-shrink-0" />
                                    <span class="truncate">{{ item.text }}</span>

                                    <svg class="w-4 h-4 ml-2 flex-shrink-0 transform transition-transform duration-200"
                                        :class="{ 'rotate-180': openDropdownIndex === index }" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 0 1 1.06-.02L10 10.293l3.71-3.08a.75.75 0 1 1 .98 1.14l-4.5 3.75a.75.75 0 0 1-.98 0l-4.5-3.75a.75.75 0 0 1-.02-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <transition name="slide-fade">
                                    <div v-if="openDropdownIndex === index"
                                        class="absolute left-0 mt-2 w-56 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-lg rounded-md z-50">
                                        <a v-for="(child, childIndex) in item.children" :key="childIndex"
                                            :href="child.href"
                                            class="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-zinc-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                            :class="{ 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 font-medium': child.active }">
                                            <component v-if="showIcons && child.icon" :is="child.icon"
                                                class="w-3.5 h-3.5 mr-2 flex-shrink-0" />
                                            <span class="truncate">{{ child.text }}</span>
                                        </a>
                                    </div>
                                </transition>
                            </li>
                        </template>
                    </ul>
                </slot>
            </div>
        </div>

        <div v-else class="w-full select-none text-slate-700 dark:text-slate-200 p-4">
            <ul>
                <li v-for="(item, index) in items" :key="index" class="mb-1">
                    <button
                        class="flex items-center w-full px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-zinc-700/70 transition-colors duration-200 cursor-pointer"
                        @click="toggleSubmenu(index)">
                        <span class="truncate">{{ item.text }}</span>

                        <icon-chevron-down size="sm" class="w-6 h-6 text-neutral-500 ml-auto transition-transform"
                            :class="{ 'rotate-180': submenuOpen === index }" aria-hidden="true" v-if="item.children" />
                    </button>

                    <transition name="slide-fade">
                        <ul v-if="submenuOpen === index" class="pl-6">
                            <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                <a :href="child.href"
                                    class="block py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-zinc-700/50">
                                    {{ child.text }}
                                </a>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

interface NavbarItem {
    text: string;
    href?: string;
    icon?: any;
    active?: boolean;
    class?: string;
    title?: string;
    children?: NavbarItem[];
}

const props = defineProps<{
    mode?: 'horizontal' | 'vertical';
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
    hoverBgColor?: string;
    activeClass?: string;
    itemClass?: string;
    size?: 'sm' | 'md' | 'lg';
    elevated?: boolean;
    border?: boolean;
    borderColor?: string;
    toggleable?: boolean;
    toggleButtonClass?: string;
    toggleAriaLabel?: string;
    items: NavbarItem[];
    showIcons?: boolean;
}>();

const emit = defineEmits(['toggle']);
const toggleAriaLabel = props.toggleAriaLabel || 'Toggle menu';

const mobileMenuOpen = ref(false);
const openDropdownIndex = ref<number | null>(null);
const submenuOpen = ref<number | null>(null);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    emit('toggle');
};

const toggleDropdown = (index: number) => {
    openDropdownIndex.value = openDropdownIndex.value === index ? null : index;
};

const toggleSubmenu = (index: number) => {
    submenuOpen.value = submenuOpen.value === index ? null : index;
};
</script>
