<template>
    <div class="relative select-none touch-none" :class="[
        orientation === 'horizontal' ? 'w-full h-4' : 'w-4 h-[300px]',
        disabled ? 'opacity-60 cursor-not-allowed' : '',
        dragging ? 'cursor-grabbing' : '',
        direction === 'rtl' ? 'direction-rtl' : ''
    ]" ref="sliderRef">
        <div class="relative w-full h-full cursor-pointer bg-transparent z-10" ref="baseRef" @click="onBaseClick">
            <div class="absolute h-1.5 rounded bg-gray-200 dark:bg-gray-700" :class="[
                orientation === 'horizontal' ? 'top-1/2 left-0 right-0 -translate-y-1/2' : 'left-1/2 top-0 bottom-0 w-1.5 h-full -translate-x-1/2'
            ]" :style="{ backgroundColor: colors.trackColor }"></div>

            <div class="absolute h-1.5 rounded" :class="[
                orientation === 'horizontal' ? 'top-1/2 -translate-y-1/2' : 'left-1/2 -translate-x-1/2 w-1.5'
            ]" :style="connectStyles"></div>

            <div v-if="showTicks" class="absolute w-full h-full">
                <div v-for="(tick, index) in computedTicks" :key="index" class="absolute" :class="[
                    orientation === 'horizontal' ? 'top-full w-0.5 h-2 -translate-x-1/2 mt-1' : 'left-full h-0.5 w-2 translate-y-1/2 ml-1'
                ]" :style="getTickStyle(tick)">
                    <div v-if="tickLabels && tickLabels[index]"
                        class="absolute text-xs whitespace-nowrap text-gray-500 dark:text-gray-400" :class="[
                            orientation === 'horizontal' ? 'top-full left-1/2 -translate-x-1/2 mt-1' : 'left-full top-1/2 -translate-y-1/2 ml-2'
                        ]" :style="{ color: colors.tickLabelColor }">{{ tickLabels[index] }}</div>
                </div>
            </div>

            <div v-for="(handle, index) in handlesData" :key="index"
                class="absolute w-5 h-5 rounded-full border shadow-md cursor-grab transition-transform duration-100 z-20"
                :class="[
                    orientation === 'horizontal' ? 'top-1/2 -translate-x-1/2 -translate-y-1/2' : 'left-1/2 -translate-x-1/2 translate-y-1/2',
                    handle.active ? 'scale-110 z-30' : '',
                    disabled ? 'cursor-not-allowed' : '',
                    dragging ? 'cursor-grabbing' : ''
                ]" :style="getHandleStyle(handle.position)" @mousedown="onHandleDown($event, index)"
                @touchstart="onHandleDown($event, index)" ref="handleRefs">
                <div v-if="showTooltip !== 'never'"
                    class="absolute px-2 py-1 text-xs rounded whitespace-nowrap font-medium z-30 transition-opacity duration-200"
                    :class="[
                        tooltipPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
                        showTooltip === 'drag' && !dragging ? 'opacity-0 pointer-events-none' : '',
                        isMerged && Array.isArray(modelValue) && index > 0 ? 'opacity-0 pointer-events-none' : '',
                        orientation === 'vertical' ? (
                            tooltipPosition === 'top' ? 'right-full top-1/2 -translate-y-1/2 mr-2' : 'left-full top-1/2 -translate-y-1/2 ml-2'
                        ) : ''
                    ]"
                    :style="{
                        backgroundColor: colors.tooltipBgColor,
                        color: colors.tooltipColor,
                        left: orientation === 'horizontal' ? (isMerged && Array.isArray(modelValue) && index === 0 && handlesData.length > 1 ?
                            `${(handlesData[0].position + handlesData[1].position) / 2}%` : '50%') : 'auto',
                        transform: orientation === 'horizontal' ? (isMerged && Array.isArray(modelValue) && index === 0 ? 'translateX(-25%)' : 'translateX(-50%)') : 'none'
                    }">
                    <span :style="{ color: colors.tooltipColor }">
                        {{
                            isMerged && Array.isArray(modelValue) && index === 0 && handlesData.length > 1
                                ? `${formatTooltip(handlesData[0].value)} - ${formatTooltip(handlesData[1].value)}`
                                : formatTooltip(handle.value)
                        }}
                    </span>
                    <div class="absolute w-0 h-0 border-solid" :class="[
                        orientation === 'horizontal' ? (
                            tooltipPosition === 'top' ? 'top-full left-1/2 -translate-x-1/2 border-t-[5px] border-x-transparent border-x-[5px] border-b-0' :
                                'bottom-full left-1/2 -translate-x-1/2 border-b-[5px] border-x-transparent border-x-[5px] border-t-0'
                        ) : (
                            tooltipPosition === 'top' ? 'left-full top-1/2 -translate-y-1/2 border-l-[5px] border-y-transparent border-y-[5px] border-r-0' :
                                'right-full top-1/2 -translate-y-1/2 border-r-[5px] border-y-transparent border-y-[5px] border-l-0'
                        )
                    ]" :style="{
                borderTopColor: tooltipPosition === 'top' ? colors.tooltipBgColor : 'transparent',
                borderBottomColor: tooltipPosition === 'bottom' ? colors.tooltipBgColor : 'transparent',
                borderLeftColor: orientation === 'vertical' && tooltipPosition === 'top' ? colors.tooltipBgColor : 'transparent',
                borderRightColor: orientation === 'vertical' && tooltipPosition === 'bottom' ? colors.tooltipBgColor : 'transparent'
            }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { type PropType } from 'vue';
import { getCurrencyByCode, getDefaultCurrencyMask } from '@/composables/CurrencyList';

interface HandleData {
    value: number;
    position: number;
    active: boolean;
}

interface FormatOptions {
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

const props = defineProps({
    modelValue: {
        type: [Number, Array],
        required: true
    },
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    step: {
        type: Number,
        default: 1
    },
    orientation: {
        type: String,
        default: 'horizontal',
        validator: (value: string) => ['horizontal', 'vertical'].includes(value)
    },
    direction: {
        type: String,
        default: 'ltr',
        validator: (value: string) => ['ltr', 'rtl'].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    },
    showTooltip: {
        type: String,
        default: 'always',
        validator: (value: string) => ['always', 'drag', 'focus', 'never'].includes(value)
    },
    tooltipPosition: {
        type: String,
        default: 'top',
        validator: (value: string) => ['top', 'bottom'].includes(value)
    },
    format: {
        type: [Function, Object] as PropType<((value: number) => string) | FormatOptions>,
        default: null
    },
    merge: {
        type: Number,
        default: 10
    },
    showTicks: {
        type: Boolean,
        default: false
    },
    ticks: {
        type: Array,
        default: () => []
    },
    tickLabels: {
        type: Array,
        default: null
    },
    tickDensity: {
        type: Number,
        default: 0
    },
    colors: {
        type: Object,
        default: () => ({
            trackColor: 'var(--slider-track-color, #e5e7eb)',
            connectColor: 'var(--slider-connect-color, #3b82f6)',
            handleColor: 'var(--slider-handle-color, #ffffff)',
            handleBorderColor: 'var(--slider-handle-border-color, #d1d5db)',
            handleShadowColor: 'var(--slider-handle-shadow-color, rgba(0, 0, 0, 0.1))',
            tooltipColor: 'var(--slider-tooltip-color, #ffffff)',
            tooltipBgColor: 'var(--slider-tooltip-bg-color, #3b82f6)',
            tickColor: 'var(--slider-tick-color, #e5e7eb)',
            tickLabelColor: 'var(--slider-tick-label-color, #6b7280)',
        })
    },
    currencyMode: {
        type: Boolean,
        default: false
    },
    currencyCode: {
        type: String,
        default: 'USD'
    },
    showCurrencySymbol: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['update:modelValue', 'slide', 'change', 'start', 'end']);

const sliderRef = ref<HTMLElement | null>(null);
const baseRef = ref<HTMLElement | null>(null);
const handleRefs = ref<HTMLElement[]>([]);

const dragging = ref(false);
const currentHandleIndex = ref(-1);
const handlesData = ref<HandleData[]>([]);
const isDragging = ref(false);
let animationFrameId: number | null = null;

const isRange = computed(() => Array.isArray(props.modelValue) && props.modelValue.length > 1);

const connectStyles = computed(() => {
    if (isRange.value) {
        const start = handlesData.value[0]?.position || 0;
        const end = handlesData.value[handlesData.value.length - 1]?.position || 0;

        if (props.orientation === 'horizontal') {
            return {
                left: `${Math.min(start, end)}%`,
                width: `${Math.abs(end - start)}%`,
                backgroundColor: props.colors.connectColor
            };
        } else {
            return {
                bottom: `${Math.min(start, end)}%`,
                height: `${Math.abs(end - start)}%`,
                backgroundColor: props.colors.connectColor
            };
        }
    } else {
        const pos = handlesData.value[0]?.position || 0;

        if (props.orientation === 'horizontal') {
            if (props.direction === 'rtl') {
                return {
                    right: '0',
                    width: `${100 - pos}%`,
                    backgroundColor: props.colors.connectColor
                };
            }
            return {
                left: '0',
                width: `${pos}%`,
                backgroundColor: props.colors.connectColor
            };
        } else {
            return {
                bottom: '0',
                height: `${pos}%`,
                backgroundColor: props.colors.connectColor
            };
        }
    }
});

const computedTicks = computed(() => {
    if (props.ticks && props.ticks.length > 0) {
        return props.ticks.map(tick => {
            const value = Number(tick);
            return {
                value,
                position: ((value - props.min) / (props.max - props.min)) * 100
            };
        });
    } else if (props.tickDensity > 0) {
        const count = props.tickDensity;
        const step = (props.max - props.min) / count;
        return Array.from({ length: count + 1 }, (_, i) => {
            const value = props.min + i * step;
            return {
                value,
                position: (i / count) * 100
            };
        });
    }

    return [];
});

const isMerged = computed(() => {
    if (!isRange.value || props.merge <= 0 || handlesData.value.length < 2) {
        return false;
    }

    for (let i = 1; i < handlesData.value.length; i++) {
        const prevPos = handlesData.value[i - 1].position;
        const currPos = handlesData.value[i].position;

        if (Math.abs(currPos - prevPos) <= props.merge) {
            return true;
        }
    }

    return false;
});

const valueToPosition = (value: number): number => {
    const percentage = ((value - props.min) / (props.max - props.min)) * 100;
    return Math.max(0, Math.min(100, percentage));
};

const positionToValue = (position: number): number => {
    let value = props.min + (position / 100) * (props.max - props.min);

    if (props.step > 0)
        value = Math.round(value / props.step) * props.step;

    return Math.max(props.min, Math.min(props.max, value));
};

const getPositionFromEvent = (event: MouseEvent | TouchEvent): number => {
    if (!baseRef.value) return 0;

    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    const rect = baseRef.value.getBoundingClientRect();

    let position;
    if (props.orientation === 'horizontal') {
        position = ((clientX - rect.left) / rect.width) * 100;
        if (props.direction === 'rtl') {
            position = 100 - position;
        }
    } else {
        position = 100 - ((clientY - rect.top) / rect.height) * 100;
    }

    return Math.max(0, Math.min(100, position));
};

const onBaseClick = (event: MouseEvent): void => {
    if (props.disabled) return;

    const position = getPositionFromEvent(event);
    const newValue = positionToValue(position);

    if (isRange.value) {
        const modelValueArray = [...(props.modelValue as number[])];
        let closestHandleIndex = 0;
        let minDistance = Infinity;

        modelValueArray.forEach((value, index) => {
            const handlePosition = valueToPosition(value);
            const distance = Math.abs(handlePosition - position);

            if (distance < minDistance) {
                minDistance = distance;
                closestHandleIndex = index;
            }
        });

        modelValueArray[closestHandleIndex] = newValue;
        modelValueArray.sort((a, b) => a - b);

        emit('update:modelValue', modelValueArray);
        emit('change', modelValueArray);
    } else {
        emit('update:modelValue', newValue);
        emit('change', newValue);
    }


    updateHandlesData();
};

const getHandleStyle = (position: number): Record<string, string> => {
    if (props.orientation === 'horizontal') {
        return {
            left: `${position}%`,
            backgroundColor: props.colors.handleColor,
            borderColor: props.colors.handleBorderColor,
            boxShadow: `0 2px 4px ${props.colors.handleShadowColor}`
        };
    } else {
        return {
            bottom: `${position}%`,
            backgroundColor: props.colors.handleColor,
            borderColor: props.colors.handleBorderColor,
            boxShadow: `0 2px 4px ${props.colors.handleShadowColor}`
        };
    }
};

const getTickStyle = (tick: { position: number }): Record<string, string> => {
    if (props.orientation === 'horizontal') {
        return {
            left: `${tick.position}%`,
            backgroundColor: props.colors.tickColor
        };
    } else {
        return {
            bottom: `${tick.position}%`,
            backgroundColor: props.colors.tickColor
        };
    }
};

const formatTooltip = (value: number): string => {
    // Se estiver no modo currency, formatar o valor como moeda
    if (props.currencyMode) {
        const currency = getCurrencyByCode(props.currencyCode);
        if (currency) {
            // Formata o número com base na configuração da moeda
            let formattedValue = value.toFixed(currency.decimalLimit);

            // Adiciona separadores de milhares
            const parts = formattedValue.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, currency.thousandsSeparatorSymbol);
            formattedValue = parts.join(currency.decimalSymbol);

            // Adiciona símbolo da moeda se showCurrencySymbol for true
            if (props.showCurrencySymbol) {
                if (currency.prefix) {
                    formattedValue = `${currency.prefix}${formattedValue}`;
                }
                if (currency.suffix) {
                    formattedValue = `${formattedValue}${currency.suffix}`;
                }
            }

            return formattedValue;
        }
    }

    // Formato padrão se não estiver em modo currency
    if (typeof props.format === 'function') {
        return props.format(value);
    } else if (props.format && typeof props.format === 'object') {
        let formattedValue: string | number = value;

        if (props.format.decimals !== undefined)
            formattedValue = Number(value).toFixed(props.format.decimals);

        if (props.format.prefix)
            formattedValue = `${props.format.prefix}${formattedValue}`;

        if (props.format.suffix)
            formattedValue = `${formattedValue}${props.format.suffix}`;

        return String(formattedValue);
    }

    return String(value);
};

const onHandleDown = (event: MouseEvent | TouchEvent, index: number): void => {
    if (props.disabled) return;

    event.preventDefault();
    event.stopPropagation();

    dragging.value = true;
    currentHandleIndex.value = index;

    handlesData.value = handlesData.value.map((handle, i) => ({
        ...handle,
        active: i === index
    }));

    document.addEventListener('mousemove', onHandleMove);
    document.addEventListener('touchmove', onHandleMove, { passive: false });
    document.addEventListener('mouseup', onHandleUp);
    document.addEventListener('touchend', onHandleUp);

    emit('start', isRange.value ? props.modelValue[index] : props.modelValue);
};

const onHandleMove = (event: MouseEvent | TouchEvent): void => {
    if (!dragging.value || currentHandleIndex.value === -1) return;

    event.preventDefault();

    if (animationFrameId !== null)
        cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
        const position = getPositionFromEvent(event);
        const newValue = positionToValue(position);

        if (isRange.value) {
            const modelValueArray = [...(props.modelValue as number[])];
            modelValueArray[currentHandleIndex.value] = newValue;

            if (currentHandleIndex.value > 0 && modelValueArray[currentHandleIndex.value] < modelValueArray[currentHandleIndex.value - 1])
                modelValueArray[currentHandleIndex.value] = modelValueArray[currentHandleIndex.value - 1];

            if (currentHandleIndex.value < modelValueArray.length - 1 && modelValueArray[currentHandleIndex.value] > modelValueArray[currentHandleIndex.value + 1])
                modelValueArray[currentHandleIndex.value] = modelValueArray[currentHandleIndex.value + 1];

            emit('update:modelValue', modelValueArray);
            emit('slide', modelValueArray);
        } else {
            emit('update:modelValue', newValue);
            emit('slide', newValue);
        }

        updateHandlesData();

        animationFrameId = null;
    });
};

const onHandleUp = (): void => {
    dragging.value = false;

    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    document.removeEventListener('mousemove', onHandleMove);
    document.removeEventListener('touchmove', onHandleMove);
    document.removeEventListener('mouseup', onHandleUp);
    document.removeEventListener('touchend', onHandleUp);

    handlesData.value = handlesData.value.map(handle => ({
        ...handle,
        active: false
    }));

    currentHandleIndex.value = -1;

    emit('end', props.modelValue);
};

const updateHandlesData = (): void => {
    if (isRange.value) {
        handlesData.value = (props.modelValue as number[]).map((value, index) => ({
            value,
            position: valueToPosition(value),
            active: index === currentHandleIndex.value
        }));
    } else {
        const value = props.modelValue as number;
        handlesData.value = [{
            value,
            position: valueToPosition(value),
            active: currentHandleIndex.value === 0
        }];
    }
};

watch(() => props.modelValue, () => {
    nextTick(() => {
        updateHandlesData();
    });
}, { immediate: true, deep: true });

onMounted(() => {
    updateHandlesData();
});

onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onHandleMove);
    document.removeEventListener('touchmove', onHandleMove);
    document.removeEventListener('mouseup', onHandleUp);
    document.removeEventListener('touchend', onHandleUp);

    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
});
</script>
