<template>
    <div
        :class="[ 
            'c-flag inline-flex items-center justify-center',
            sizes[size],
            roundedStyles[rounded]
        ]"
        :aria-label="ariaLabel"
    >
        <component
            v-if="Flag"
            :is="Flag"
            :class="[roundedStyles[rounded]]"
            class="c-flag w-full h-full"
        ></component>
    </div>
</template>

<style scoped>
.c-flag {
    display: inline-block;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    transition: color 0.3s, fill 0.3s;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
    border: 0.5px solid rgba(0, 0, 0, 0.2);
}

.c-flag::before {
    mix-blend-mode: overlay;
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    box-sizing: border-box;
    background: radial-gradient(50% 36%, rgba(255, 255, 255, 0.3) 0, rgba(0, 0, 0, 0.24) 11%, rgba(0, 0, 0, 0.55) 17%, rgba(255, 255, 255, 0.26) 22%, rgba(0, 0, 0, 0.17) 27%, rgba(255, 255, 255, 0.28) 31%, rgba(255, 255, 255, 0) 37%) center calc(50% - 8px) / 600% 600%, radial-gradient(50% 123%, rgba(255, 255, 255, 0.3) 25%, rgba(0, 0, 0, 0.24) 48%, rgba(0, 0, 0, 0.55) 61%, rgba(255, 255, 255, 0.26) 72%, rgba(0, 0, 0, 0.17) 80%, rgba(255, 255, 255, 0.28) 88%, rgba(255, 255, 255, 0.3) 100%) center calc(50% - 8px) / 600% 600%;
}
</style>

<script lang="ts" setup>
import { shallowRef, watch } from "vue";

const props = defineProps({
    iso: {
        type: String,
        required: true, // ISO country code (e.g., "br", "us", "fr")
    },
    size: {
        type: String,
        default: "md", // sm|md|lg|xl|2xl
    },
    rounded: {
        required: false,
        type: [String],
        default: "md", // none|default|md|full
    },
    ariaLabel: {
        type: String,
        default: "flag",
    },
});

const Flag = shallowRef(null);

const sizes = {
    sm: "w-8",
    md: "w-10",
    lg: "w-12",
    xl: "w-16",
    "2xl": "w-24",
};

const roundedStyles = {
    none: "rounded-none",
    default: "rounded",
    md: "rounded-md",
    full: "rounded-full",
};

const loadFlag = async () => {
    try {
        const flagComponent = await import(`@components/flags/Flag${props.iso.toUpperCase()}.vue`);
        Flag.value = flagComponent.default;
    } catch (error) {
        console.error(`Could not load the flag for ISO code "${props.iso}".`, error);
        Flag.value = null;
    }
};

watch(() => props.iso, loadFlag, { immediate: true });
</script>
