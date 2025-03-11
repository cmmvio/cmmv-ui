<template>
    <ul class="c-menu-list">
        <li v-for="item in items" :key="item.id" :data-menu-item-id="item.id" class="c-menu-item" :class="{
            'c-menu-item--active': activeItem === item.id,
            'c-menu-item--disabled': item.disabled,
            'c-menu-item--has-submenu': item.items && item.items.length > 0,
            'c-menu-item--divider': item.divider
        }" @click.stop="handleItemClick(item)" @mouseenter="handleItemHover(item)">

            <template v-if="item.divider">
                <div class="c-menu-divider"></div>
            </template>

            <template v-else>
                <div class="c-menu-item-container">
                    <div class="c-menu-item-check"></div>

                    <div v-if="item.icon" class="c-menu-item-icon">
                        <i :class="item.icon"></i>
                    </div>

                    <div class="c-menu-item-label">{{ item.label }}</div>

                    <div v-if="item.shortcut" class="c-menu-item-shortcut">
                        {{ item.shortcut }}
                    </div>

                    <div v-if="item.items && item.items.length > 0" class="c-menu-item-submenu-indicator">
                        <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12l4-4-4-4h1l4 4-4 4H6z" />
                        </svg>
                    </div>
                </div>
            </template>
        </li>
    </ul>
</template>

<script setup lang="ts">
export interface MenuItem {
    id: string;
    label?: string;
    icon?: string;
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
    parentId: {
        type: String,
        required: true
    },
    isSubmenu: {
        type: Boolean,
        default: false
    },
    activeItem: {
        type: String,
        default: null
    }
});

const emit = defineEmits(['select', 'hover']);

const handleItemClick = (item: MenuItem) => {
    if (item.divider || item.disabled) return;
    emit('select', item.id);
};

const handleItemHover = (item: MenuItem) => {
    if (item.divider) return;
    emit('hover', item.id, props.parentId);
};
</script>

<style scoped>
.c-menu-list {
    list-style: none;
    margin: 0;
    padding: 4px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-width: 180px;
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
    margin: 5px 0;
    pointer-events: none;
}

.c-menu-divider {
    height: 1px;
    margin: 0 8px;
    background-color: var(--vscode-menu-separator-background, rgba(0, 0, 0, 0.1));
}

.c-menu-item-container {
    display: flex;
    align-items: center;
    height: 22px;
    padding: 0 8px 0 20px;
    position: relative;
}

.c-menu-item--active:not(.c-menu-item--disabled) .c-menu-item-container {
    background-color: var(--vscode-menu-selection-background, rgba(0, 0, 0, 0.1));
    color: var(--vscode-menu-selection-foreground, #000000);
}

.c-menu-item:hover:not(.c-menu-item--disabled):not(.c-menu-item--active) .c-menu-item-container {
    background-color: var(--vscode-menu-hover-background, rgba(0, 0, 0, 0.04));
}

.c-menu-item--disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
}

.c-menu-item-check {
    flex: 0 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    visibility: hidden;
}

.c-menu-item-icon {
    flex: 0 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
}

.c-menu-item-label {
    flex: 1;
    padding-right: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    color: var(--vscode-menu-foreground, #333333);
    line-height: 22px;
}

.c-menu-item-shortcut {
    flex: 0 0 auto;
    margin-left: 10px;
    font-size: 12px;
    opacity: 0.75;
    color: var(--vscode-menu-foreground, #333333);
}

.c-menu-item-submenu-indicator {
    flex: 0 0 14px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    color: var(--vscode-menu-foreground, #333333);
}

.dark .c-menu-divider {
    background-color: var(--vscode-menu-separator-background, rgba(255, 255, 255, 0.1));
}
</style>
