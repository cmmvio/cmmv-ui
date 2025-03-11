<template>
    <div class="c-menu" ref="menuRef">
        <div v-if="menuType === 'menubar'" class="c-menu-bar">
            <div
                v-for="item in items"
                :key="item.id"
                class="c-menu-bar-item"
                :class="{ 'c-menu-bar-item--active': activeMenu === item.id }"
                @click="handleMenuBarClick(item.id)"
                @mouseenter="handleMenuBarHover(item.id)"
                @keydown="handleKeyDown"
                tabindex="0">
                {{ item.label }}
            </div>
        </div>

        <div v-else-if="menuType === 'context'" @contextmenu.prevent="openContextMenu" class="c-menu-context-trigger">
            <slot></slot>
        </div>

        <div v-else ref="triggerRef" class="c-menu-dropdown-trigger">
            <div @click="handleDropdownClick">
                <slot name="trigger">
                    <button type="button" class="c-menu-dropdown-button">
                        <slot name="trigger-content">Menu</slot>
                    </button>
                </slot>
            </div>
        </div>

        <div v-if="isOpen"
            class="c-menu-overlay"
            :class="{ 'c-menu-overlay--menubar': props.menuType === 'menubar' }"
            @click="closeMenu"
            @contextmenu.prevent></div>

        <transition name="c-menu-fade">
            <div
                v-if="isOpen && activeMenuItems.length > 0"
                ref="menuContainerRef"
                class="c-menu-container text-left"
                :style="menuContainerStyle"
                @keydown="handleKeyDown">
                <ul class="c-menu-list">
                    <li
                        v-for="item in activeMenuItems"
                        :key="item.id"
                        :data-menu-item-id="item.id"
                        class="c-menu-item"
                        :class="{
                            'c-menu-item--active': activeMenuItem === item.id,
                            'c-menu-item--disabled': item.disabled,
                            'c-menu-item--has-submenu': item.items && item.items.length > 0,
                            'c-menu-item--divider': item.divider
                        }"
                        @click.stop="handleItemClick(item)"
                        @mouseenter="handleItemHover(item, activeMenu)">

                        <!-- Divider -->
                        <template v-if="item.divider">
                            <div class="c-menu-divider"></div>
                        </template>

                        <template v-else>
                            <div class="c-menu-item-container">
                                <div v-if="item.icon || item.iconComponent" class="c-menu-item-icon">
                                    <component v-if="item.iconComponent" :is="item.iconComponent" size="sm" customClass="text-inherit" />
                                    <component v-else-if="typeof item.icon === 'object'" :is="item.icon" size="sm" customClass="text-inherit" />
                                </div>

                                <div class="c-menu-item-label">{{ item.label }}</div>

                                <div v-if="item.shortcut" class="c-menu-item-shortcut">
                                    {{ item.shortcut }}
                                </div>

                                <div v-if="item.items && item.items.length > 0" class="c-menu-item-submenu-indicator">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </template>
                    </li>
                </ul>
            </div>
        </transition>

        <transition-group name="c-menu-fade">
            <div
                v-for="submenu in openSubmenus"
                :key="submenu.id"
                class="c-menu-container c-menu-container--submenu text-left"
                :style="getSubmenuStyle(submenu.id)">
                <ul class="c-menu-list">
                    <li
                        v-for="item in getSubmenuItems(submenu.id)"
                        :key="item.id"
                        :data-menu-item-id="item.id"
                        class="c-menu-item"
                        :class="{
                            'c-menu-item--active': activeSubmenuItems[submenu.id] === item.id,
                            'c-menu-item--disabled': item.disabled,
                            'c-menu-item--has-submenu': item.items && item.items.length > 0,
                            'c-menu-item--divider': item.divider
                        }"
                        @click.stop="handleItemClick(item)"
                        @mouseenter="handleSubmenuItemHover(item, submenu.id)">

                        <template v-if="item.divider">
                            <div class="c-menu-divider"></div>
                        </template>

                        <template v-else>
                            <div class="c-menu-item-container">
                                <div v-if="item.icon || item.iconComponent" class="c-menu-item-icon">
                                    <component v-if="item.iconComponent" :is="item.iconComponent" size="sm" customClass="text-inherit" />
                                    <component v-else-if="typeof item.icon === 'object'" :is="item.icon" size="sm" customClass="text-inherit" />
                                </div>

                                <div class="c-menu-item-label">{{ item.label }}</div>

                                <div v-if="item.shortcut" class="c-menu-item-shortcut">
                                    {{ item.shortcut }}
                                </div>

                                <div v-if="item.items && item.items.length > 0" class="c-menu-item-submenu-indicator">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </template>
                    </li>
                </ul>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';

export interface MenuItem {
    id: string;
    label?: string;
    icon?: string | object;
    iconComponent?: string;
    shortcut?: string;
    disabled?: boolean;
    divider?: boolean;
    items?: MenuItem[];
    action?: () => void;
}

const props = defineProps({
    items: {
        type: Array as () => MenuItem[],
        required: true
    },
    menuType: {
        type: String,
        default: 'dropdown',
        validator: (value: string) => ['dropdown', 'context', 'menubar'].includes(value)
    },
    position: {
        type: String,
        default: 'bottom-left',
    },
    closeOnSelect: {
        type: Boolean,
        default: true
    },
    closeOnOutsideClick: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['select', 'open', 'close']);

const menuRef = ref<HTMLElement | null>(null);
const menuContainerRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);

const isOpen = ref(false);
const activeMenu = ref<string | null>(null);
const activeMenuItem = ref<string | null>(null);
const activeSubmenuItems = ref<Record<string, string | null>>({});
const openSubmenus = ref<{ id: string, parentId: string }[]>([]);
const submenuPositions = ref<Record<string, { x: number, y: number }>>({});
const lastPosition = ref({ x: 0, y: 0 });
const triggerRect = ref<DOMRect | null>(null);
const menuBarHeight = ref(36);

let lastScrollY = window.scrollY;
let lastScrollX = window.scrollX;

const activeMenuItems = computed((): MenuItem[] => {
    if (!activeMenu.value) return [];

    if (activeMenu.value === 'root') return props.items;

    const findMenu = (items: MenuItem[], id: string): MenuItem[] => {
        for (const item of items) {
            if (item.id === id && item.items) {
                return item.items;
            }
            if (item.items) {
                const found = findMenu(item.items, id);
                if (found.length) return found;
            }
        }
        return [];
    };

    return findMenu(props.items, activeMenu.value);
});

watch(activeMenu, () => {
    if (isOpen.value && props.menuType === 'menubar') {
        nextTick(() => {
            updateTriggerRect();
        });
    }
});

const findMenuItemById = (id: string, items = props.items): MenuItem | null => {
    for (const item of items) {
        if (item.id === id) return item;
        if (item.items) {
            const found = findMenuItemById(id, item.items);
            if (found) return found;
        }
    }
    return null;
};

const getSubmenuItems = (parentId: string): MenuItem[] => {
    const menuItem = findMenuItemById(parentId);
    return menuItem?.items || [];
};

const menuContainerStyle = computed(() => {
    if (props.menuType === 'context') {
        return {
            position: 'fixed' as const,
            left: `${lastPosition.value.x}px`,
            top: `${lastPosition.value.y}px`,
            zIndex: '1000'
        };
    } else if (props.menuType === 'menubar' && triggerRect.value) {
        return {
            position: 'fixed' as const,
            left: `${triggerRect.value.left}px`,
            top: `${triggerRect.value.bottom}px`,
            zIndex: '1000'
        };
    } else if (triggerRect.value) {
        const { clientWidth, clientHeight } = document.documentElement;

        let left = triggerRect.value.left;
        let top = triggerRect.value.bottom + 5;

        if (props.position.includes('right'))
            left = triggerRect.value.right - 180;

        if (left + 180 > clientWidth)
            left = clientWidth - 190;

        left = Math.max(5, left);

        if (top + 300 > clientHeight) {
            if (triggerRect.value.top > 310)
                top = triggerRect.value.top - 305;
            else
                top = Math.max(5, clientHeight - 305);
        }

        return {
            position: 'fixed' as const,
            left: `${left}px`,
            top: `${top}px`,
            zIndex: '1000'
        };
    }

    return { display: 'none' };
});

const getSubmenuStyle = (submenuId: string) => {
    const position = submenuPositions.value[submenuId];
    if (position) {
        return {
            position: 'fixed' as const,
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: '1001'
        };
    }
    return { display: 'none' };
};

const calculateSubmenuPosition = (parentItemId: string, submenuId: string) => {
    const parentEl = document.querySelector(`[data-menu-item-id="${parentItemId}"]`);
    if (!parentEl) return;

    const rect = parentEl.getBoundingClientRect();
    const { clientWidth, clientHeight } = document.documentElement;

    let x = rect.right;
    let y = rect.top;

    const submenuWidth = 180;

    if (x + submenuWidth > clientWidth)
        x = Math.max(0, rect.left - submenuWidth);

    const submenuHeight = Math.min(300, getSubmenuItems(submenuId).length * 28 + 10);

    if (y + submenuHeight > clientHeight)
        y = Math.max(0, clientHeight - submenuHeight);

    submenuPositions.value[submenuId] = { x, y };
};


const updateTriggerRect = () => {
    if (props.menuType === 'menubar') {
        const activeEl = menuRef.value?.querySelector(`.c-menu-bar-item--active`);
        triggerRect.value = activeEl ? activeEl.getBoundingClientRect() : null;
    } else if (props.menuType === 'dropdown') {
        if (triggerRef.value) {
            triggerRect.value = triggerRef.value.getBoundingClientRect();
        }
    }
};

const openMenu = () => {
    isOpen.value = true;
    activeMenuItem.value = null;
    openSubmenus.value = [];
    activeSubmenuItems.value = {};
    emit('open');

    lastScrollY = window.scrollY;
    lastScrollX = window.scrollX;

    nextTick(() => {
        addEventListeners();
    });
};

const closeMenu = () => {
    if (!isOpen.value) return;

    isOpen.value = false;

    if (props.menuType !== 'menubar')
        activeMenu.value = null;

    activeMenuItem.value = null;
    openSubmenus.value = [];
    activeSubmenuItems.value = {};
    emit('close');

    removeEventListeners();
};

const handleMenuBarClick = (menuId: string) => {
    if (isOpen.value && activeMenu.value === menuId) {
        closeMenu();
    } else {
        activeMenu.value = menuId;

        nextTick(() => {
            updateTriggerRect();
            openMenu();
        });
    }
};


const handleMenuBarHover = (menuId: string) => {
    if (activeMenu.value === menuId) return;

    activeMenu.value = menuId;

    if (isOpen.value) {
        activeMenuItem.value = null;
        openSubmenus.value = [];
        activeSubmenuItems.value = {};
    }
};

const handleDropdownClick = () => {
    if (isOpen.value) {
        closeMenu();
    } else {
        activeMenu.value = 'root';
        updateTriggerRect();
        openMenu();
    }
};

const openContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    lastPosition.value = { x: event.clientX, y: event.clientY };
    activeMenu.value = 'root';
    openMenu();
};

const handleItemClick = (item: MenuItem) => {
    if (item.divider || item.disabled) return;

    if (item.action)
        item.action();

    emit('select', item);

    if (props.closeOnSelect && (!item.items || item.items.length === 0))
        closeMenu();
};


const handleItemHover = (item: MenuItem, parentId: string | null) => {
    if (item.divider) return;

    activeMenuItem.value = item.id;

    if (item.items && item.items.length > 0) {
        setTimeout(() => {
            if (activeMenuItem.value === item.id)
                openSubmenu(item.id, parentId || 'root');
        }, 100);
    } else {
        openSubmenus.value = openSubmenus.value.filter(submenu =>
            isSubmenuAncestor(submenu.id, item.id)
        );
    }
};

const handleSubmenuItemHover = (item: MenuItem, parentId: string) => {
    if (item.divider) return;

    activeSubmenuItems.value[parentId] = item.id;

    if (item.items && item.items.length > 0) {
        setTimeout(() => {
            if (activeSubmenuItems.value[parentId] === item.id) {
                openSubmenu(item.id, parentId);
            }
        }, 100);
    } else {
        openSubmenus.value = openSubmenus.value.filter(submenu =>
            submenu.id === parentId || isSubmenuAncestor(parentId, submenu.parentId)
        );
    }
};

const openSubmenu = (itemId: string, parentId: string) => {
    const item = findMenuItemById(itemId);
    if (!item || !item.items || item.items.length === 0) return;

    openSubmenus.value = openSubmenus.value.filter(submenu =>
        isSubmenuAncestor(submenu.id, parentId)
    );

    if (!openSubmenus.value.some(sm => sm.id === itemId)) {
        openSubmenus.value.push({ id: itemId, parentId });
        activeSubmenuItems.value[itemId] = null;

        nextTick(() => {
            calculateSubmenuPosition(itemId, itemId);
        });
    }
};

const isSubmenuAncestor = (ancestorId: string, descendantId: string): boolean => {
    if (ancestorId === descendantId) return true;

    let currentId = descendantId;

    while (currentId) {
        const parent = findSubmenuParent(currentId);
        if (!parent) return false;
        if (parent === ancestorId) return true;
        currentId = parent;
    }

    return false;
};

const findSubmenuParent = (itemId: string): string | null => {
    for (const submenu of openSubmenus.value) {
        const items = getSubmenuItems(submenu.id);
        if (items.some(item => item.id === itemId)) {
            return submenu.id;
        }
    }
    return null;
};

const handleKeyDown = (event: KeyboardEvent) => {
    // Implement keyboard navigation later if needed
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;

    if (Math.abs(currentScrollY - lastScrollY) > 5 || Math.abs(currentScrollX - lastScrollX) > 5) {
        closeMenu();
    }
};

const handleResize = () => {
    if (isOpen.value) {
        updateTriggerRect();

        openSubmenus.value.forEach(submenu => {
            calculateSubmenuPosition(submenu.id, submenu.id);
        });
    }
};

const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        closeMenu();
    }
};

const addEventListeners = () => {
    if (props.closeOnOutsideClick) {
        document.addEventListener('click', handleOutsideClick);
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleResize);
    }
};

const removeEventListeners = () => {
    document.removeEventListener('click', handleOutsideClick);
    window.removeEventListener('scroll', handleScroll, true);
    window.removeEventListener('resize', handleResize);
};

onMounted(() => {
    if (props.menuType === 'menubar' && props.items.length > 0) {
        activeMenu.value = props.items[0].id;

        nextTick(() => {
            const menuBarElement = menuRef.value?.querySelector('.c-menu-bar');
            if (menuBarElement) {
                menuBarHeight.value = menuBarElement.getBoundingClientRect().height;
            }
        });
    }
});

onBeforeUnmount(() => {
    removeEventListeners();
});

defineExpose({
    open: (menuId: string = 'root') => {
        activeMenu.value = menuId;
        updateTriggerRect();
        openMenu();
    },
    close: closeMenu,
    openAt: (x: number, y: number) => {
        lastPosition.value = { x, y };
        activeMenu.value = 'root';
        openMenu();
    }
});
</script>

<style scoped>
.c-menu {
    position: relative;
    display: inline-block;
    width: 100%;
}

.c-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 998;
    pointer-events: auto;
}

.c-menu-overlay--menubar {
    position: absolute;
    top: 36px;
}

.c-menu-bar {
    display: flex;
    align-items: center;
    height: 36px;
    background-color: var(--c-bg-surface, #ffffff);
    border-bottom: 1px solid var(--c-border-subtle, #e0e0e0);
    width: 100%;
    z-index: 999;
    position: relative;
    pointer-events: auto;
}

.c-menu-bar-item {
    padding: 0 12px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    user-select: none;
    color: var(--c-text-primary, #333333);
    z-index: 1000;
    position: relative;
}

.c-menu-bar-item:hover {
    background-color: var(--c-bg-hover, rgba(0, 0, 0, 0.05));
}

.c-menu-bar-item--active {
    background-color: var(--c-bg-active, rgba(0, 0, 0, 0.1));
    color: var(--c-text-primary, #333333);
}

.c-menu-dropdown-trigger {
    display: inline-block;
    cursor: pointer;
}

.c-menu-dropdown-button {
    padding: 6px 12px;
    background: var(--c-bg-button, #f5f5f5);
    color: var(--c-text-primary, #333333);
    border: 1px solid var(--c-border-subtle, #e0e0e0);
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
}

.c-menu-context-trigger {
    display: inline-block;
}

.c-menu-container {
    background: var(--c-bg-surface, #ffffff);
    border: 1px solid var(--c-border-default, #e0e0e0);
    box-shadow: var(--c-shadow-dropdown, 0 2px 8px rgba(0, 0, 0, 0.15));
    border-radius: 4px;
    overflow: hidden;
    min-width: 180px;
    max-width: 280px;
    padding: 4px 0;
}

.c-menu-container--submenu {
    min-width: 180px;
    max-width: 280px;
}

.c-menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.c-menu-item {
    position: relative;
    height: auto;
    padding: 0;
    cursor: pointer;
    user-select: none;
}

.c-menu-item--divider {
    cursor: default;
    height: 0;
    padding: 0;
    margin: 4px 0;
    pointer-events: none;
}

.c-menu-divider {
    height: 1px;
    margin: 0 8px;
    background-color: var(--c-border-subtle, #e0e0e0);
}

.c-menu-item-container {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 12px;
    position: relative;
}

.c-menu-item--active:not(.c-menu-item--disabled) .c-menu-item-container {
    background-color: var(--c-bg-active, rgba(0, 0, 0, 0.1));
    color: var(--c-text-primary, #333333);
}

.c-menu-item:hover:not(.c-menu-item--disabled):not(.c-menu-item--active) .c-menu-item-container {
    background-color: var(--c-bg-hover, rgba(0, 0, 0, 0.05));
}

.c-menu-item--disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
}

.c-menu-item-icon {
    flex: 0 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    color: inherit;
}

.c-menu-item-label {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    color: var(--c-text-primary, #333333);
}

.c-menu-item-shortcut {
    margin-left: 16px;
    font-size: 12px;
    opacity: 0.7;
    color: var(--c-text-secondary, #666666);
}

.c-menu-item-submenu-indicator {
    margin-left: 8px;
    height: 14px;
    width: 14px;
    display: flex;
    align-items: center;
    color: var(--c-text-secondary, #666666);
}

.c-menu-fade-enter-active,
.c-menu-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.c-menu-fade-enter-from,
.c-menu-fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.dark .c-menu-bar {
    background-color: var(--c-bg-surface, #1e1e1e);
    border-color: var(--c-border-subtle, #333333);
}

.dark .c-menu-bar-item,
.dark .c-menu-item-label,
.dark .c-menu-item-icon {
    color: var(--c-text-primary, #e1e1e1);
}

.dark .c-menu-item-shortcut,
.dark .c-menu-item-submenu-indicator {
    color: var(--c-text-secondary, #a0a0a0);
}

.dark .c-menu-divider {
    background-color: var(--c-border-subtle, #333333);
}

.dark .c-menu-container {
    background-color: var(--c-bg-surface, #252526);
    border-color: var(--c-border-default, #333333);
}

.dark .c-menu-dropdown-button {
    background-color: var(--c-bg-button, #333333);
    color: var(--c-text-primary, #e1e1e1);
    border-color: var(--c-border-subtle, #444444);
}
</style>
