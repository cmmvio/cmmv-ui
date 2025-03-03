<template>
    <div class="c-datepicker relative w-full">
        <div class="relative">
            <div v-if="showCalendar" class="fixed z-40 bg-transparent" @click="closeCalendar"></div>

            <div class="relative flex items-center z-30" @click="toggleCalendar">
                <input ref="inputRef" type="text" :value="formattedDate"
                    :placeholder="placeholder + (required ? ' *' : '')" :disabled="disabled"
                    class="c-datepicker-field block w-full border shadow-sm outline-none text-left px-3 py-2 text-sm rounded-md"
                    :class="[
                        sizes[size],
                        disabled ? 'bg-neutral-100 dark:bg-neutral-800 cursor-not-allowed' : 'bg-white dark:bg-neutral-900 cursor-pointer',
                        hasError ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 dark:border-neutral-900',
                        'text-neutral-900 dark:text-white'
                    ]" readonly />

                <div class="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                    :class="{ 'opacity-50': disabled, 'cursor-not-allowed': disabled }">
                    <icon-calendar class="w-5 h-5" size="sm" color="text-neutral-500 dark:text-white"
                        aria-hidden="true" />
                </div>
            </div>

            <transition name="dropdown">
                <div v-if="showCalendar" ref="calendarRef"
                    class="absolute z-50 mt-2 bg-white dark:bg-neutral-800 rounded-md shadow-lg border border-neutral-300 dark:border-neutral-900 p-2 w-72 calendar">
                    <div class="flex justify-between items-center mb-2">
                        <button
                            class="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-neutral-700 dark:text-neutral-300"
                            @click.stop="prevMonth">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <div class="flex items-center space-x-1">
                            <select v-model="currentMonth"
                                class="appearance-none bg-transparent px-1 py-0.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer text-neutral-900 dark:text-white"
                                @change.stop="updateCalendar" @click.stop>
                                <option v-for="(month, index) in monthNames" :key="index" :value="index">
                                    {{ month }}
                                </option>
                            </select>

                            <select v-model="currentYear"
                                class="appearance-none bg-transparent px-1 py-0.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer text-neutral-900 dark:text-white"
                                @change.stop="updateCalendar" @click.stop>
                                <option v-for="year in yearRange" :key="year" :value="year">
                                    {{ year }}
                                </option>
                            </select>
                        </div>

                        <button
                            class="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-neutral-700 dark:text-neutral-300"
                            @click.stop="nextMonth">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>

                    <div v-if="range" class="flex justify-between mb-2 text-xs text-neutral-600 dark:text-neutral-400">
                        <span>{{ startDate ? formatDate(startDate, 'dd/MM/yyyy') : 'Start date' }}</span>
                        <span>{{ endDate ? formatDate(endDate, 'dd/MM/yyyy') : 'End date' }}</span>
                    </div>

                    <div class="grid grid-cols-7 gap-1 mb-1">
                        <div v-for="day in weekDays" :key="day"
                            class="text-center text-xs font-medium text-neutral-500 dark:text-neutral-400 py-1">
                            {{ day }}
                        </div>
                    </div>

                    <div class="grid grid-cols-7 gap-1">
                        <div v-for="(day, index) in calendarDays" :key="index"
                            class="text-center py-1 text-sm rounded-md transition-colors" :class="[
                                day.isCurrentMonth && isDateInRange(day.date) ? 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700' : 'text-neutral-400 dark:text-neutral-500 cursor-not-allowed opacity-50',
                                isSelectedDate(day.date) ? 'bg-blue-600 text-white hover:bg-blue-700' : '',
                                isInSelectedRange(day.date) ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : '',
                                isToday(day.date) && !isSelectedDate(day.date) && !isInSelectedRange(day.date) ? 'border border-blue-600 dark:border-blue-500' : '',
                                !isSelectedDate(day.date) && !isInSelectedRange(day.date) && day.isCurrentMonth && isDateInRange(day.date) ? 'text-neutral-900 dark:text-white' : ''
                            ]" @click.stop="day.isCurrentMonth && isDateInRange(day.date) && selectDate(day.date)">
                            {{ day.day }}
                        </div>
                    </div>

                    <div class="flex justify-between mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-900">
                        <button
                            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            @click.stop="selectToday">
                            Today
                        </button>

                        <button
                            class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                            @click.stop="closeCalendar">
                            Close
                        </button>
                    </div>
                </div>
            </transition>

            <div v-if="hasError" class="text-xs text-red-500 dark:text-red-400 mt-1">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    modelValue: {
        type: [Date, Array],
        default: null
    },
    min: {
        type: Date,
        default: null
    },
    max: {
        type: Date,
        default: null
    },
    placeholder: {
        type: String,
        default: 'Select a date'
    },
    format: {
        type: String,
        default: 'dd/MM/yyyy'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    rules: {
        type: Array,
        default: () => []
    },
    range: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: "md"
    },
    required: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue']);

const isValidDate = (date: any): date is Date => {
    return date instanceof Date && !isNaN(date.getTime());
};

const getSafeDate = (value: any): Date => {
    if (isValidDate(value)) {
        return value;
    }

    if (Array.isArray(value) && value.length > 0 && isValidDate(value[0])) {
        return value[0];
    }

    return new Date();
};

const inputRef = ref<HTMLInputElement | null>(null);
const calendarRef = ref<HTMLElement | null>(null);
const showCalendar = ref(false);

const initialDate = getSafeDate(props.modelValue);
const currentMonth = ref(initialDate.getMonth());
const currentYear = ref(initialDate.getFullYear());

const hasError = ref(false);
const errorMessage = ref<string | null>(null);
const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);
const selectionPhase = ref<'start' | 'end'>('start');

const userLocale = navigator.language || 'en-US';

const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(2021, 0, 3 + i);
    return new Intl.DateTimeFormat(userLocale, { weekday: 'short' }).format(date);
});

const monthNames = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2021, i, 1);
    return new Intl.DateTimeFormat(userLocale, { month: 'long' }).format(date);
});

interface CalendarDay {
    day: number;
    date: Date;
    isCurrentMonth: boolean;
}

const yearRange = computed(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 101 }, (_, i) => currentYear - 50 + i);
});

const formattedDate = computed(() => {
    if (!props.modelValue) return '';

    if (props.range && Array.isArray(props.modelValue)) {
        if (props.modelValue.length === 0) return '';

        const start = props.modelValue[0];
        if (props.modelValue.length === 1 && isValidDate(start)) {
            return formatDate(start, props.format);
        }

        const end = props.modelValue[1];
        if (isValidDate(start) && isValidDate(end)) {
            return `${formatDate(start, props.format)} - ${formatDate(end, props.format)}`;
        }

        return '';
    }

    if (isValidDate(props.modelValue)) {
        return formatDate(props.modelValue, props.format);
    }

    return '';
});

const calendarDays = computed<CalendarDay[]>(() => {
    const days: CalendarDay[] = [];
    const firstDay = new Date(currentYear.value, currentMonth.value, 1);
    const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);

    const firstDayOfWeek = firstDay.getDay();
    const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0).getDate();

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const date = new Date(currentYear.value, currentMonth.value - 1, day);
        days.push({ day, date, isCurrentMonth: false });
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(currentYear.value, currentMonth.value, day);
        days.push({ day, date, isCurrentMonth: true });
    }

    const remainingDays = 42 - days.length;

    for (let day = 1; day <= remainingDays; day++) {
        const date = new Date(currentYear.value, currentMonth.value + 1, day);
        days.push({ day, date, isCurrentMonth: false });
    }

    return days;
});

const toggleCalendar = () => {
    if (props.disabled) return;

    if (!showCalendar.value) {
        showCalendar.value = true;

        if (props.range && Array.isArray(props.modelValue)) {
            if (props.modelValue.length >= 1 && isValidDate(props.modelValue[0])) {
                startDate.value = new Date(props.modelValue[0].getTime());
                selectionPhase.value = 'end';
            }
            if (props.modelValue.length >= 2 && isValidDate(props.modelValue[1])) {
                endDate.value = new Date(props.modelValue[1].getTime());
                selectionPhase.value = 'start'; // Reset for new selection
            }
        }

        const dateToShow = getSafeDate(props.modelValue);
        currentMonth.value = dateToShow.getMonth();
        currentYear.value = dateToShow.getFullYear();

        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    }
};

const closeCalendar = () => {
    showCalendar.value = false;
    document.removeEventListener('click', handleClickOutside);

    if (props.range && selectionPhase.value === 'end' && !endDate.value) {
        selectionPhase.value = 'start';
        startDate.value = null;
    }
};

const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const isInputClick = inputRef.value && inputRef.value.contains(target);
    const isCalendarClick = calendarRef.value && calendarRef.value.contains(target);

    if (!isInputClick && !isCalendarClick) {
        closeCalendar();
    }
};

const prevMonth = () => {
    if (currentMonth.value === 0) {
        currentMonth.value = 11;
        currentYear.value--;
    } else {
        currentMonth.value--;
    }
    updateCalendar();
};

const nextMonth = () => {
    if (currentMonth.value === 11) {
        currentMonth.value = 0;
        currentYear.value++;
    } else {
        currentMonth.value++;
    }
    updateCalendar();
};

const updateCalendar = () => {

};

const isDateInRange = (date: Date): boolean => {
    if (props.min && date < props.min) return false;
    if (props.max && date > props.max) return false;
    return true;
};

const selectDate = (date: Date) => {
    if (!isDateInRange(date)) return;

    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (props.range) {
        if (selectionPhase.value === 'start') {
            startDate.value = newDate;
            endDate.value = null;
            selectionPhase.value = 'end';
            emit('update:modelValue', [newDate]);
        } else {
            if (startDate.value && newDate < startDate.value) {
                endDate.value = startDate.value;
                startDate.value = newDate;
            } else {
                endDate.value = newDate;
            }

            selectionPhase.value = 'start';
            emit('update:modelValue', [startDate.value, endDate.value]);

            setTimeout(() => {
                closeCalendar();
            }, 100);
        }
    } else {
        emit('update:modelValue', newDate);
        validate();

        setTimeout(() => {
            closeCalendar();
        }, 100);
    }
};

const selectToday = () => {
    const today = new Date();
    currentMonth.value = today.getMonth();
    currentYear.value = today.getFullYear();

    if (!isDateInRange(today)) return;

    selectDate(today);
};

const isSelectedDate = (date: Date) => {
    if (props.range) {
        if (startDate.value && isSameDay(date, startDate.value)) return true;
        if (endDate.value && isSameDay(date, endDate.value)) return true;
        return false;
    }

    if (!props.modelValue) return false;
    return isSameDay(date, props.modelValue as Date);
};

const isInSelectedRange = (date: Date) => {
    if (!props.range || !startDate.value || !endDate.value) return false;

    return date > startDate.value && date < endDate.value;
};

const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
};

const isToday = (date: Date) => {
    const today = new Date();
    return isSameDay(date, today);
};

const formatDate = (date: Date, format: string) => {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        return '';
    }

    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    return format
        .replace('dd', day)
        .replace('MM', month)
        .replace('yyyy', year.toString())
        .replace('yy', year.toString().slice(-2));
};

const validate = () => {
    hasError.value = false;
    errorMessage.value = null;

    if (props.required && !props.modelValue) {
        hasError.value = true;
        errorMessage.value = 'This field is required';
        return false;
    }

    if (!props.rules.length) return true;

    for (const rule of props.rules) {//@ts-ignore
        const error = rule(props.modelValue);
        if (error) {
            hasError.value = true;
            errorMessage.value = error;
            return false;
        }
    }

    return true;
};

const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm h-[46px]",
    lg: "px-5 py-4 text-base"
};

watch(() => props.modelValue, (newValue) => {
    validate();

    if (props.range && Array.isArray(newValue)) {
        startDate.value = newValue.length > 0 && isValidDate(newValue[0])
            ? new Date(newValue[0].getTime())
            : null;

        endDate.value = newValue.length > 1 && isValidDate(newValue[1])
            ? new Date(newValue[1].getTime())
            : null;

        selectionPhase.value = endDate.value ? 'start' : 'end';
    }
});

onMounted(() => {
    validate();

    if (props.range && Array.isArray(props.modelValue)) {
        startDate.value = props.modelValue.length > 0 && isValidDate(props.modelValue[0])
            ? new Date(props.modelValue[0].getTime())
            : null;

        endDate.value = props.modelValue.length > 1 && isValidDate(props.modelValue[1])
            ? new Date(props.modelValue[1].getTime())
            : null;

        selectionPhase.value = endDate.value ? 'start' : 'end';
    }
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.c-datepicker {
    position: relative;
}

.c-datepicker-field {
    transition: border-color 0.2s, box-shadow 0.2s;
}

.calendar {
    left: 50%;
    transform: translateX(-50%);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px) translateX(-50%);
}
</style>
