<template>
    <nav class="flex text-sm overflow-hidden" aria-label="Breadcrumb" :class="[bgColor]">
        <ol class="flex items-center space-x-2">
            <li v-if="icon || $slots.icon" class="flex items-center">
                <div :class="[iconClass, 'flex-shrink-0']">
                    <slot name="icon">
                        <component :is="icon" customClass="h-3 w-3 text-neutral-500 mt-0.5" size="sm" :class="[textColor]" />
                    </slot>
                </div>
            </li>

            <template v-for="(item, index) in items" :key="index">
                <li v-if="index > 0 || (icon || $slots.icon)" class="flex items-center text-sm" aria-hidden="true">
                    <slot name="separator" :index="index">
                        <span :class="[separatorClass, 'mx-1']">{{ separator }}</span>
                    </slot>
                </li>

                <li class="flex items-center">
                    <slot name="item" :item="item" :is-last="index === items.length - 1" :index="index">
                        <c-dropdown v-if="item.dropdown" :options="item.dropdown.options"
                            :position="item.dropdown.position || 'bottom-center'">
                            <template #activator>
                                <component :is="item.to ? 'router-link' : 'a'" :to="item.to" :href="item.href || '#'"
                                    class="inline-flex items-center" :class="[
                                        index === items.length - 1 ? activeTextColor : textColor,
                                        'hover:underline cursor-pointer flex items-center'
                                    ]">
                                    <component :is="item.icon" v-if="item.icon" class="mr-1.5 h-4 w-4" />
                                    {{ item.text }}
                                    <icon-chevron-down class="ml-1 h-3 w-3" />
                                </component>
                            </template>
                            <template #option="{ data }">
                                <slot name="dropdown-item" :data="data">
                                    {{ data.label }}
                                </slot>
                            </template>
                        </c-dropdown>

                        <template v-else>
                            <component v-if="index !== items.length - 1 && (item.to || item.href)"
                                :is="item.to ? 'router-link' : 'a'" :to="item.to" :href="item.href || '#'"
                                class="inline-flex items-center" :class="[textColor, 'hover:underline']">
                                <component :is="item.icon" v-if="item.icon" class="mr-1.5 h-4 w-4" />
                                {{ item.text }}
                            </component>
                            <span v-else class="inline-flex items-center"
                                :class="[index === items.length - 1 ? activeTextColor : textColor]">
                                <component :is="item.icon" v-if="item.icon" class="mr-1.5 h-4 w-4" />
                                {{ item.text }}
                            </span>
                        </template>
                    </slot>
                </li>
            </template>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import IconChevronDown from '@components/icons/IconChevronDown.vue';

interface DropdownOption {
    value: string | number;
    label: string;
}

interface DropdownConfig {
    options: DropdownOption[];
    position?: string;
}

interface BreadcrumbItem {
    text: string;
    to?: string | object;
    href?: string;
    icon?: object;
    dropdown?: DropdownConfig;
}

const props = defineProps({
    items: {
        type: Array as () => BreadcrumbItem[],
        required: true,
        default: () => [],
    },
    separator: {
        type: String,
        default: "/",
    },
    separatorClass: {
        type: String,
        default: "text-neutral-400 dark:text-neutral-600",
    },
    textColor: {
        type: String,
        default: "text-neutral-500 dark:text-neutral-400",
    },
    activeTextColor: {
        type: String,
        default: "text-neutral-900 dark:text-white font-medium",
    },
    bgColor: {
        type: String,
        default: "",
    },
    icon: {
        type: [Object, null],
        default: null,
    },
    iconClass: {
        type: String,
        default: "text-neutral-500 dark:text-neutral-400",
    },
});
</script>
