<template>
    <div>
        <div class="grid grid-cols-1 sm:hidden">
            <select v-model="selectedTab"
                class="w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-neutral-300 focus:outline-indigo-600">
                <option v-for="(tab, index) in tabs" :key="tab.id" :value="index">
                    {{ tab.title }}
                </option>
            </select>
        </div>

        <div class="hidden sm:block relative tabs-wrapper">
            <div v-if="scrollable && canScrollLeft"
                class="absolute left-0 top-0 bottom-0 z-10 w-12 pointer-events-none"
                :class="[styleType === 'default' ? 'pb-0.5' : '']">
                <div class="w-full h-full" :class="gradientLeftClass"></div>
            </div>

            <button v-if="scrollable && canScrollLeft" @click="scrollLeft"
                class="absolute left-0 top-0 bottom-0 z-20 flex items-center justify-center focus:outline-none transition-all duration-300"
                :class="[
                    styleType === 'default' ? 'w-8 pb-0.5' : '',
                    styleType === 'bar' ? 'h-full rounded-l-lg border border-neutral-200 dark:border-neutral-900 px-2 shadow-sm' : '',
                    styleType === 'pills' ? 'w-8' : '',
                ]">
                <div :class="[
                    styleType === 'bar' ? 'flex items-center h-full' : 'rounded-full p-1 shadow-lg',
                    styleType === 'bar' ? bgColor : arrowBgClass
                ]">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        :class="[
                            arrowColorClass,
                            styleType === 'bar' ? 'h-4 w-4' : 'h-5 w-5'
                        ]"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </button>

            <div ref="tabsContainer" class="overflow-hidden relative">
                <div
                    ref="tabsNav"
                    class="flex overflow-x-auto scrollbar-hide draggable-tabs"
                    @mousedown="startDrag"
                    @touchstart="startDrag"
                    @mousemove="onDrag"
                    @touchmove="onDrag"
                    @mouseup="endDrag"
                    @touchend="endDrag"
                    @mouseleave="endDrag"
                    :class="[
                        styleType === 'bar' ? 'divide-x divide-neutral-200 dark:divide-neutral-900 rounded-lg shadow border border-neutral-200 dark:border-neutral-900' : '',
                        styleType === 'default' ? 'border-b border-neutral-200 dark:border-neutral-900' : '',
                        scrollable && styleType === 'bar' ? (canScrollLeft ? 'rounded-l-none' : '') + ' ' + (canScrollRight ? 'rounded-r-none' : '') : '',
                    ]"
                    aria-label="Tabs">
                    <span
                        v-for="(tab, index) in tabs"
                        :key="tab.id"
                        @click="!isDragging && selectTab(index)"
                        :aria-current="isSelected(index) ? 'page' : undefined"
                        :class="[
                            getTabClass(index),
                            fullWidth && (!scrollable || styleType !== 'bar') ? 'flex-1 group text-center' : '',
                            styleType === 'bar' && scrollable ? 'min-w-[120px]' : ''
                        ]"
                        class="cursor-pointer select-none whitespace-nowrap">
                        <div :class="[tab.icon ? 'flex' : 'flex-1']">
                            <div class="mt-0.5">
                                <component :is="tab.icon"
                                    :class="[isSelected(index) ? textActiveColor : textColor, 'w-4 h-4 mr-2 -pt-1 inline-block']"
                                    v-if="tab.icon" size="sm" color="currentColor" />
                            </div>

                            <div>
                                {{ tab.title }}

                                <span v-if="styleType === 'bar'" aria-hidden="true"
                                    :class="[isSelected(index) ? barBorderActive : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']">
                                </span>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div v-if="scrollable && canScrollRight"
                class="absolute right-0 top-0 bottom-0 z-10 w-12 pointer-events-none"
                :class="[styleType === 'default' ? 'pb-0.5' : '']">
                <div class="w-full h-full" :class="gradientRightClass"></div>
            </div>

            <button v-if="scrollable && canScrollRight" @click="scrollRight"
                class="absolute right-0 top-0 bottom-0 z-20 flex items-center justify-center focus:outline-none transition-all duration-300"
                :class="[
                    styleType === 'default' ? 'w-8 pb-0.5' : '',
                    styleType === 'bar' ? 'h-full rounded-r-lg border border-neutral-200 dark:border-neutral-900 px-2 shadow-sm' : '',
                    styleType === 'pills' ? 'w-8' : '',
                ]">
                <div :class="[
                    styleType === 'bar' ? 'flex items-center h-full' : 'rounded-full p-1 shadow-lg',
                    styleType === 'bar' ? bgColor : arrowBgClass
                ]">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        :class="[
                            arrowColorClass,
                            styleType === 'bar' ? 'h-4 w-4' : 'h-5 w-5'
                        ]"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        </div>

        <div v-if="$slots[tabs[selectedTab]?.id]" class="mt-4">
            <slot :name="tabs[selectedTab]?.id"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch, defineEmits } from "vue";

const emit = defineEmits(['update:tab', 'tab-change']);

const selectedTab = ref<number>(0);
const tabsNav = ref<HTMLElement | null>(null);
const tabsContainer = ref<HTMLElement | null>(null);
const scrollable = ref<boolean>(false);
const canScrollLeft = ref<boolean>(false);
const canScrollRight = ref<boolean>(false);

const isDragging = ref<boolean>(false);
const startX = ref<number>(0);
const startScrollLeft = ref<number>(0);
const dragDistance = ref<number>(0);
const clickThreshold = 10;

const props = defineProps({
    tabs: {
        type: Array as () => { title: string; id: string | number; icon?: object }[],
        required: true,
    },
    modelValue: {
        type: Number,
        default: 0
    },
    styleType: {
        type: String,
        default: "default",
    },
    textColor: {
        type: String,
        default: "text-neutral-400 hover:text-neutral-700",
    },
    textActiveColor: {
        type: String,
        default: "text-indigo-600",
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
    pillBgColor: {
        type: String,
        default: "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-400",
    },
    pillActiveBgColor: {
        type: String,
        default: "bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
    },
    barBorderActive: {
        type: String,
        default: "bg-indigo-500",
    },
    bgColor: {
        type: String,
        default: "bg-white dark:bg-neutral-800",
    },
    bgColorActive: {
        type: String,
        default: "bg-white dark:bg-neutral-800",
    }
});

const startDrag = (e: MouseEvent | TouchEvent) => {
    if (!tabsNav.value) return;

    isDragging.value = true;
    dragDistance.value = 0;

    if (e instanceof MouseEvent)
        startX.value = e.pageX;
    else
        startX.value = e.touches[0].pageX;

    startScrollLeft.value = tabsNav.value.scrollLeft;
    tabsNav.value.classList.add('dragging');
};

const onDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.value || !tabsNav.value) return;

    e.preventDefault();

    let currentX: number;
    if (e instanceof MouseEvent)
        currentX = e.pageX;
    else
        currentX = e.touches[0].pageX;

    const dx = currentX - startX.value;
    dragDistance.value = Math.abs(dx);

    tabsNav.value.scrollLeft = startScrollLeft.value - dx;

    checkScroll();
};

const endDrag = () => {
    if (!tabsNav.value || !isDragging.value) return;

    isDragging.value = false;
    tabsNav.value.classList.remove('dragging');

    if (dragDistance.value > 30) {
        const momentum = 0.2;
        const velocity = dragDistance.value * momentum;
        const direction = startX.value > tabsNav.value.scrollLeft ? 1 : -1;
        animateInertia(velocity * direction);
    }
};

const animateInertia = (velocity: number) => {
    if (!tabsNav.value) return;

    const decelerate = () => {
        if (Math.abs(velocity) > 0.5 && tabsNav.value) {
            tabsNav.value.scrollLeft -= velocity;
            velocity *= 0.94;
            requestAnimationFrame(decelerate);
        } else {
            checkScroll();
        }
    };

    requestAnimationFrame(decelerate);
};

const gradientLeftClass = computed(() => {
    if (props.styleType === 'bar')
        return `bg-gradient-to-r from-${props.bgColor.replace('bg-', '')} to-transparent`;

    return `bg-gradient-to-r from-white dark:from-neutral-800 to-transparent`;
});

const gradientRightClass = computed(() => {
    if (props.styleType === 'bar') {
        return `bg-gradient-to-l from-${props.bgColor.replace('bg-', '')} to-transparent`;
    }
    return `bg-gradient-to-l from-white dark:from-neutral-800 to-transparent`;
});

const arrowBgClass = computed(() => {
    return `bg-white dark:bg-neutral-700 bg-opacity-90 dark:bg-opacity-90`;
});

const arrowColorClass = computed(() => {
    return `text-neutral-600 dark:text-neutral-200`;
});

const isSelected = (index: number) => selectedTab.value === index;
const selectTab = (index: number) => {
    if (dragDistance.value > clickThreshold) return;

    selectedTab.value = index;
    scrollSelectedTabIntoView();

    // Emit events for external components
    emit('update:tab', index);
    emit('tab-change', index);
};

const checkScroll = () => {
    if (!tabsNav.value || !tabsContainer.value) return;

    const navWidth = tabsNav.value.scrollWidth;
    const containerWidth = tabsContainer.value.clientWidth;
    const scrollLeft = tabsNav.value.scrollLeft;

    scrollable.value = navWidth > containerWidth;
    canScrollLeft.value = scrollLeft > 0;
    canScrollRight.value = scrollLeft + containerWidth < navWidth;
};

const scrollLeft = () => {
    if (!tabsNav.value || !tabsContainer.value) return;

    const scrollDistance = Math.max(tabsContainer.value.clientWidth * 0.8, 100);
    const targetScrollLeft = Math.max(0, tabsNav.value.scrollLeft - scrollDistance);

    animateScroll(targetScrollLeft);
};

const scrollRight = () => {
    if (!tabsNav.value || !tabsContainer.value) return;

    const scrollDistance = Math.max(tabsContainer.value.clientWidth * 0.8, 100);
    const maxScrollLeft = tabsNav.value.scrollWidth - tabsContainer.value.clientWidth;
    const targetScrollLeft = Math.min(maxScrollLeft, tabsNav.value.scrollLeft + scrollDistance);

    animateScroll(targetScrollLeft);
};

const animateScroll = (targetScrollLeft: number) => {
    if (!tabsNav.value) return;

    tabsNav.value.style.scrollBehavior = 'smooth';
    tabsNav.value.scrollLeft = targetScrollLeft;

    setTimeout(() => {
        checkScroll();

        if (tabsNav.value)
            tabsNav.value.style.scrollBehavior = '';
    }, 350);
};

const scrollSelectedTabIntoView = () => {
    if (!tabsNav.value || !tabsContainer.value) return;

    const tabElements = Array.from(tabsNav.value.children);
    if (tabElements.length <= selectedTab.value) return;

    const selectedTabElement = tabElements[selectedTab.value] as HTMLElement;
    if (!selectedTabElement) return;

    const containerRect = tabsContainer.value.getBoundingClientRect();
    const tabRect = selectedTabElement.getBoundingClientRect();
    const isTabLeftOutOfView = tabRect.left < containerRect.left;
    const isTabRightOutOfView = tabRect.right > containerRect.right;

    if (isTabLeftOutOfView) {
        const newScrollLeft = tabsNav.value.scrollLeft + (tabRect.left - containerRect.left - 20);
        animateScroll(newScrollLeft);
    } else if (isTabRightOutOfView) {
        const newScrollLeft = tabsNav.value.scrollLeft + (tabRect.right - containerRect.right + 20);
        animateScroll(newScrollLeft);
    }
};

const handleScroll = () => {
    if (!tabsNav.value) return;
    requestAnimationFrame(() => {
        checkScroll();
    });
};

onMounted(() => {
    nextTick(() => {
        if (tabsNav.value)
            tabsNav.value.addEventListener('scroll', handleScroll);

        checkScroll();

        watch(selectedTab, () => {
            nextTick(scrollSelectedTabIntoView);
        });

        const resizeObserver = new ResizeObserver(() => {
            checkScroll();
            scrollSelectedTabIntoView();
        });

        if (tabsContainer.value) {
            resizeObserver.observe(tabsContainer.value);
        }

        watch(() => props.tabs, () => {
            nextTick(() => {
                checkScroll();
                scrollSelectedTabIntoView();
            });
        }, { deep: true });

        // Sincronizar com modelValue se fornecido
        watch(() => props.modelValue, (newValue) => {
            selectedTab.value = newValue;
        }, { immediate: true });
    });
});

const getTabClass = (index: number) => {
    if (props.styleType === "default") {
        return isSelected(index)
            ? "border-indigo-500 whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium " + props.textActiveColor
            : "border-transparent hover:border-neutral-300 whitespace-nowrap border-b-2 px-3 py-4 text-sm font-medium " + props.textColor;
    }

    if (props.styleType === "pills") {
        return isSelected(index)
            ? `rounded-md px-4 py-2 ${props.pillActiveBgColor}`
            : `rounded-md px-4 py-2 ${props.pillBgColor}`;
    }

    if (props.styleType === "bar") {
        const flexClasses = scrollable.value ? 'flex-shrink-0' : 'flex-1';

        const roundedClasses = (() => {
            if (!scrollable.value) {
                return `${index === 0 ? "rounded-l-lg" : ""} ${index === props.tabs.length - 1 ? "rounded-r-lg" : ""}`;
            } else {
                if (index === 0 && !canScrollLeft) return "rounded-l-lg";
                if (index === props.tabs.length - 1 && !canScrollRight) return "rounded-r-lg";
                return "";
            }
        })();

        return `group relative ${flexClasses} overflow-hidden px-4 py-4 text-center text-sm font-medium focus:z-10
            ${roundedClasses}
            ${isSelected(index) ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}
            ${isSelected(index) ? props.bgColorActive : props.bgColor}`;
    }

    return "";
};
</script>

<style scoped>
.overflow-hidden {
    overflow: hidden;
}

.tabs-wrapper {
    position: relative;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.draggable-tabs {
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
}

.draggable-tabs.dragging {
    cursor: grabbing;
    scroll-behavior: auto;
}

@media (hover: none) {
    .draggable-tabs {
        touch-action: pan-x;
    }
}
</style>
