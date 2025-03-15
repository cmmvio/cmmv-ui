<template>
    <nav :class="[
        'c-navbar transition-all duration-300 overflow-visible',
        mode === 'horizontal' ? 'flex items-center' : 'flex flex-col',
        elevated ? 'shadow-md' : '',
        borderColor,
        fixed ? 'c-navbar-fixed' : '',
        height
    ]" :style="{
        backgroundColor: bgColor,
        color: textColor,
        width: mode === 'vertical' && collapsed && !isExpanded ? '3.25rem' : (mode === 'vertical' ? '' : 'auto')
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">

        <!-- Header para modo fixed -->
        <div v-if="fixed && fixedHeader" class="c-navbar-fixed-header border-b border-neutral-200 dark:border-neutral-700 flex items-center px-6 sticky top-0 z-10"
             :style="{ backgroundColor: bgColor || 'inherit' }"
             style="min-height: 3rem;">
            <h4 class="text-lg">{{ fixedHeader }}</h4>
        </div>

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
                    'absolute top-full left-0 right-0 z-50 bg-white dark:bg-zinc-800 border-b border-neutral-200 dark:border-neutral-700 lg:static lg:border-0 lg:shadow-none lg:block lg:bg-transparent': mobileMenuOpen
                }
            ]">
                <slot name="items">
                    <ul class="flex flex-col lg:flex-row lg:gap-x-4 p-3 lg:p-0 items-center w-full">
                        <template v-for="(item, index) in items" :key="index">
                            <!-- Divider -->
                            <li v-if="item.divider" class="w-full my-2">
                                <div class="h-px bg-neutral-200 dark:bg-neutral-700 w-full"></div>
                            </li>

                            <!-- Spacer -->
                            <li v-else-if="item.spacer" class="flex-1"></li>

                            <!-- Normal item without children -->
                            <li v-else-if="!item.children" class="relative">
                                <!-- Vue Router Link -->
                                <router-link v-if="useRouter && item.href"
                                    :to="item.href"
                                    :exact="exactPath"
                                    custom
                                    v-slot="{ href, navigate, isActive, isExactActive }">
                                    <a :href="href"
                                        @click="navigate"
                                        :class="[
                                            'text-sm flex items-center gap-1 py-1 px-2 rounded-md',
                                            (exactPath ? isExactActive : isActive) ? activeClass : itemClass,
                                            hoverBgColor
                                        ]"
                                        :title="item.title">
                                        <component v-if="showIcons && item.icon" :is="item.icon"
                                            class="w-4 h-4 flex-shrink-0" :class="iconClass" />
                                        <span class="truncate">{{ item.text }}</span>
                                    </a>
                                </router-link>

                                <!-- Regular link or clickable item -->
                                <a v-else
                                   :href="item.href || '#'"
                                   :class="[
                                        'text-sm flex items-center gap-1 py-1 px-2 rounded-md cursor-pointer',
                                        item.active ? activeClass : itemClass,
                                        hoverBgColor
                                   ]"
                                   :title="item.title"
                                   @click="item.href ? null : handleItemClick(item)">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-4 h-4 flex-shrink-0" :class="iconClass" />
                                    <span class="truncate">{{ item.text }}</span>
                                </a>
                            </li>

                            <!-- Item with dropdown -->
                            <li v-else class="relative">
                                <button @click="toggleDropdown(index)" :class="['text-sm flex items-center gap-1 py-1 px-2 rounded-md w-full text-left',
                                    openDropdownIndex === index ? activeClass : itemClass,
                                    hoverBgColor]" :title="item.title">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-4 h-4 flex-shrink-0" :class="iconClass" />
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
                                        class="absolute left-0 mt-2 w-56 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md z-50">
                                        <template v-for="(child, childIndex) in item.children" :key="childIndex">
                                            <!-- Child divider -->
                                            <div v-if="child.divider" class="h-px bg-neutral-200 dark:bg-neutral-700 my-1 mx-2"></div>

                                            <!-- Child link -->
                                            <router-link v-else-if="useRouter && child.href"
                                                :to="child.href"
                                                :exact="exactPath"
                                                custom
                                                v-slot="{ href, navigate, isActive, isExactActive }">
                                                <a :href="href"
                                                    @click="navigate"
                                                    class="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-zinc-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                                    :class="{ 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 font-medium': (exactPath ? isExactActive : isActive) }">
                                                    <component v-if="showIcons && child.icon" :is="child.icon"
                                                        class="w-3.5 h-3.5 mr-2 inline-block" :class="iconClass" />
                                                    <span class="truncate max-w-[9rem]">{{ child.text }}</span>
                                                </a>
                                            </router-link>

                                            <a v-else
                                                :href="child.href || '#'"
                                                @click="child.href ? null : handleItemClick(child)"
                                                class="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-zinc-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                                                :class="{ 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 font-medium': child.active }">
                                                <component v-if="showIcons && child.icon" :is="child.icon"
                                                    class="w-3.5 h-3.5 mr-2 inline-block" :class="iconClass" />
                                                <span class="truncate max-w-[9rem]">{{ child.text }}</span>
                                            </a>
                                        </template>
                                    </div>
                                </transition>
                            </li>
                        </template>
                    </ul>
                </slot>
            </div>
        </div>

        <div v-else
            class="w-full h-full select-none text-neutral-700 dark:text-neutral-200"
            :class="[fixed ? 'px-0 c-navbar-scroll' : '']"
        >
            <ul :class="{'overflow-y-auto': fixed}" class="h-full">
                <template v-for="(item, index) in items" :key="index">
                    <!-- Subheader in fixed mode -->
                    <li v-if="fixed && item.subheader" class="mx-3 my-6">
                        <div class="flex space-x-3 mb-2 font-normal px-3">
                            <span class="text-sm text-neutral-500 dark:text-neutral-400 w-full">
                                <div class="flex flex-col space-y-2 uppercase font-mono">
                                    <span>{{ item.subheader }}</span>
                                </div>
                            </span>
                        </div>
                        <div v-if="item.children" class="mt-2">
                            <template v-for="(child, childIndex) in item.children" :key="childIndex">
                                <!-- Router link for subheader child -->
                                <router-link v-if="useRouter && child.href"
                                    :to="child.href"
                                    :exact="exactPath"
                                    custom
                                    v-slot="{ href, navigate, isActive, isExactActive }">
                                    <a :href="href"
                                       @click="navigate"
                                       :class="[
                                           'flex items-center py-1 px-3 text-sm rounded-md',
                                           (exactPath ? isExactActive : isActive) ? 'font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                                       ]">
                                        <component v-if="showIcons && child.icon" :is="child.icon"
                                            class="w-4 h-4 flex-shrink-0 mr-2" :class="iconClass" />
                                        <span class="truncate max-w-[9rem]">{{ child.text }}</span>
                                    </a>
                                </router-link>

                                <!-- Regular link for subheader child -->
                                <a v-else
                                   :href="child.href || '#'"
                                   @click="child.href ? null : handleItemClick(child)"
                                   :class="[
                                       'flex items-center py-1 px-3 text-sm rounded-md',
                                       child.active ? 'font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                                   ]">
                                    <component v-if="showIcons && child.icon" :is="child.icon"
                                        class="w-4 h-4 flex-shrink-0 mr-2" :class="iconClass" />
                                    <span class="truncate max-w-[9rem]">{{ child.text }}</span>
                                </a>
                            </template>
                        </div>
                    </li>

                    <!-- Divider in vertical mode -->
                    <li v-else-if="item.divider" :class="['my-2', fixed ? 'px-0' : 'px-2']">
                        <div class="h-px bg-neutral-200 dark:bg-neutral-700 w-full"></div>
                    </li>

                    <!-- Spacer in vertical mode -->
                    <li v-else-if="item.spacer" class="flex-grow"></li>

                    <!-- Header item in vertical mode (not fixed mode) -->
                    <li v-else-if="item.header && !fixed" class="mb-2 px-2">
                        <div class="font-medium text-base text-neutral-900 dark:text-white px-1 py-1">
                            {{ item.header }}
                        </div>
                    </li>

                    <!-- Regular item in vertical mode -->
                    <li v-else class="mb-1">
                        <!-- Item with tooltip when collapsed -->
                        <c-tooltip v-if="collapsed && !isExpanded" :content="item.text || ''" position="right" :maxWidth="200">
                            <!-- Router link with icon only when collapsed -->
                            <router-link v-if="useRouter && item.href && !item.children"
                                :to="item.href"
                                :exact="exactPath"
                                custom
                                v-slot="{ href, navigate, isActive }">
                                <a :href="href"
                                    @click="navigate"
                                    class="flex items-center w-full p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700/70 transition-colors duration-200 cursor-pointer"
                                    :class="{ [activeClass]: isActive }"
                                    :title="item.title || item.text">
                                    <div class="flex items-center justify-center w-full">
                                        <component v-if="showIcons && item.icon" :is="item.icon"
                                            class="w-5 h-5 flex-shrink-0" :class="iconClass" size="sm" />
                                    </div>
                                </a>
                            </router-link>

                            <!-- Regular link or button when collapsed -->
                            <a v-else-if="!item.children && item.href"
                                :href="item.href"
                                class="flex items-center w-full p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700/70 transition-colors duration-200 cursor-pointer"
                                :class="{ [activeClass]: item.active }"
                                :title="item.title || item.text">
                                <div class="flex items-center justify-center w-full">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-5 h-5 flex-shrink-0" :class="iconClass" size="sm" />
                                </div>
                            </a>

                            <!-- Submenu toggle button when collapsed -->
                            <button v-else
                                class="flex items-center w-full p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700/70 transition-colors duration-200 cursor-pointer"
                                @click="item.href && !item.children ? null : toggleSubmenu(index)"
                                :title="item.title || item.text">
                                <div class="flex items-center justify-center w-full">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-5 h-5 flex-shrink-0" :class="iconClass" size="sm" />
                                </div>
                            </button>
                        </c-tooltip>

                        <!-- Router link with expanded view -->
                        <router-link v-else-if="useRouter && item.href && !item.children"
                            :to="item.href"
                            :exact="exactPath"
                            custom
                            v-slot="{ href, navigate, isActive }">
                            <a :href="href"
                                @click="navigate"
                                class="flex items-center w-full p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700/70 transition-colors duration-200 cursor-pointer"
                                :class="{ [activeClass]: isActive }"
                                :title="item.title || item.text">
                                <div class="flex items-center">
                                    <component v-if="showIcons && item.icon" :is="item.icon"
                                        class="w-5 h-5 flex-shrink-0" :class="iconClass" size="sm" />
                                    <span class="truncate ml-2 transition-opacity duration-200 text-sm max-w-[9rem]"
                                        :class="[mode === 'vertical' && collapsed && !isExpanded ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto']">
                                        {{ item.text }}
                                    </span>
                                </div>
                            </a>
                        </router-link>

                        <!-- Regular link with expanded view -->
                        <a v-else-if="!item.children && item.href"
                            :href="item.href"
                            class="flex items-center w-full p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700/70 transition-colors duration-200 cursor-pointer"
                            :class="{ [activeClass]: item.active }"
                            :title="item.title || item.text">
                            <div class="flex items-center">
                                <component v-if="showIcons && item.icon" :is="item.icon"
                                    class="w-5 h-5 flex-shrink-0" :class="iconClass" size="sm" />
                                <span class="truncate ml-2 transition-opacity duration-200 text-sm max-w-[9rem]"
                                    :class="[mode === 'vertical' && collapsed && !isExpanded ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto']">
                                    {{ item.text }}
                                </span>
                            </div>
                        </a>

                        <!-- Submenu toggle with expanded view -->
                        <button v-else
                            class="flex items-center justify-between w-full p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700/70 transition-colors duration-200 cursor-pointer"
                            @click="toggleSubmenu(index)"
                            :title="item.title || item.text">
                            <div class="flex items-center">
                                <component v-if="showIcons && item.icon" :is="item.icon"
                                    class="w-5 h-5 flex-shrink-0" :class="iconClass" size="sm" />
                                <span class="truncate ml-2 transition-opacity duration-200 text-sm max-w-[9rem]"
                                    :class="[mode === 'vertical' && collapsed && !isExpanded ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto']">
                                    {{ item.text }}
                                </span>
                            </div>

                            <icon-chevron-down v-if="item.children" size="sm"
                                class="w-4 h-4 transition-transform"
                                :class="[
                                    { 'rotate-180': submenuOpen === index },
                                    mode === 'vertical' && collapsed && !isExpanded ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 ml-3'
                                ]"
                                customClass="text-neutral-700 dark:text-neutral-200"
                                aria-hidden="true" />
                        </button>

                        <transition name="slide-fade">
                            <ul v-if="submenuOpen === index"
                                :class="[
                                    'pl-6',
                                    mode === 'vertical' && collapsed && !isExpanded ? 'hidden' : 'block'
                                ]">
                                <template v-for="(child, childIndex) in item.children" :key="childIndex">
                                    <!-- Child divider -->
                                    <li v-if="child.divider" class="my-1">
                                        <div class="h-px bg-neutral-200 dark:bg-neutral-700 w-full"></div>
                                    </li>

                                    <li v-else>
                                        <!-- Tooltip for collapsed submenu item -->
                                        <c-tooltip v-if="collapsed && !isExpanded" :content="child.text || ''" position="right" :maxWidth="200">
                                            <router-link v-if="useRouter && child.href"
                                                :to="child.href"
                                                :exact="exactPath"
                                                custom
                                                v-slot="{ href, navigate, isActive }">
                                                <a :href="href"
                                                   @click="navigate"
                                                   class="flex items-center justify-center py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700/50 rounded-md"
                                                   :class="{ [activeClass]: isActive }">
                                                    <component v-if="showIcons && child.icon" :is="child.icon"
                                                        class="w-4 h-4 flex-shrink-0" :class="iconClass" />
                                                </a>
                                            </router-link>

                                            <a v-else
                                                :href="child.href || '#'"
                                                @click="child.href ? null : handleItemClick(child)"
                                                class="flex items-center justify-center py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700/50 rounded-md"
                                                :class="{ [activeClass]: child.active }">
                                                <component v-if="showIcons && child.icon" :is="child.icon"
                                                    class="w-4 h-4 flex-shrink-0" :class="iconClass" />
                                            </a>
                                        </c-tooltip>

                                        <!-- Expanded submenu item with router support -->
                                        <router-link v-else-if="useRouter && child.href"
                                            :to="child.href"
                                            :exact="exactPath"
                                            custom
                                            v-slot="{ href, navigate, isActive }">
                                            <a :href="href"
                                               @click="navigate"
                                               class="flex items-center py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700/50 rounded-md"
                                               :class="{ [activeClass]: isActive }">
                                                <component v-if="showIcons && child.icon" :is="child.icon"
                                                    class="w-4 h-4 flex-shrink-0 mr-2" :class="iconClass" />
                                                <span class="truncate max-w-[9rem]">{{ child.text }}</span>
                                            </a>
                                        </router-link>

                                        <!-- Expanded regular submenu item -->
                                        <a v-else
                                            :href="child.href || '#'"
                                            @click="child.href ? null : handleItemClick(child)"
                                            class="flex items-center py-2 px-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700/50 rounded-md cursor-pointer"
                                            :class="{ [activeClass]: child.active }">
                                            <component v-if="showIcons && child.icon" :is="child.icon"
                                                class="w-4 h-4 flex-shrink-0 mr-2" :class="iconClass" />
                                            <span class="truncate max-w-[9rem]">{{ child.text }}</span>
                                        </a>
                                    </li>
                                </template>
                            </ul>
                        </transition>
                    </li>
                </template>
            </ul>
        </div>

        <slot name="footer"></slot>
    </nav>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from 'vue';
import IconChevronDown from '@components/icons/IconChevronDown.vue';
import CTooltip from '@components/components/CTooltip.vue';

interface NavbarItem {
    text?: string;
    href?: string;
    icon?: any;
    active?: boolean;
    class?: string;
    title?: string;
    children?: NavbarItem[];
    divider?: boolean;
    spacer?: boolean;
    header?: string;
    subheader?: string;
}

const props = defineProps({
    mode: {
        type: String as () => 'horizontal' | 'vertical',
        default: 'horizontal'
    },
    bgColor: {
        type: String,
        default: undefined
    },
    textColor: {
        type: String,
        default: undefined
    },
    hoverColor: {
        type: String,
        default: undefined
    },
    hoverBgColor: {
        type: String,
        default: undefined
    },
    activeClass: {
        type: String,
        default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
    },
    itemClass: {
        type: String,
        default: 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
    },
    iconClass: {
        type: String,
        default: 'text-neutral-500 dark:text-neutral-200'
    },
    size: {
        type: String as () => 'sm' | 'md' | 'lg',
        default: 'md'
    },
    elevated: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: true
    },
    borderColor: {
        type: String,
        default: 'border-neutral-200 dark:border-neutral-700'
    },
    toggleable: {
        type: Boolean,
        default: false
    },
    toggleButtonClass: {
        type: String,
        default: 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
    },
    toggleAriaLabel: {
        type: String,
        default: 'Toggle menu'
    },
    items: {
        type: Array as () => NavbarItem[],
        required: true
    },
    showIcons: {
        type: Boolean,
        default: false
    },
    collapsed: {
        type: Boolean,
        default: false
    },
    expandOnHover: {
        type: Boolean,
        default: true
    },
    useRouter: {
        type: Boolean,
        default: false
    },
    exactPath: {
        type: Boolean,
        default: false
    },
    fixed: {
        type: Boolean,
        default: false
    },
    fixedHeader: {
        type: String,
        default: null
    },
    height: {
        type: String,
        default: 'h-full'
    }
});

const emit = defineEmits(['toggle', 'item-click']);
const mobileMenuOpen = ref(false);
const openDropdownIndex = ref<number | null>(null);
const submenuOpen = ref<number | null>(null);
const hoverExpanded = ref(false);

const isExpanded = computed(() => {
    return props.expandOnHover && hoverExpanded.value;
});

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

const handleMouseEnter = () => {
    if (props.mode === 'vertical' && props.collapsed && props.expandOnHover) {
        hoverExpanded.value = true;
    }
};

const handleMouseLeave = () => {
    if (props.mode === 'vertical' && props.collapsed && props.expandOnHover) {
        hoverExpanded.value = false;
    }
};

const handleItemClick = (item: NavbarItem) => {
    emit('item-click', item);
};
</script>

<style>
.c-navbar {
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.c-navbar-fixed .c-navbar-fixed-header {
    min-height: 3rem;
    background-color: inherit;
}

.c-navbar-scroll::-webkit-scrollbar {
    width: 4px;
}

.c-navbar-fixed ul li a:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.dark .c-navbar-fixed ul li a:hover {
    background-color: rgba(255, 255, 255, 0.05);
}
</style>
