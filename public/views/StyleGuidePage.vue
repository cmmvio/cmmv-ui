<template>
    <BaseLayout>
        <c-seo
            section="Style Guide"
            description="A comprehensive guide to the styling system in CMMV UI. Learn about colors, typography, borders, and visual elements for maintaining consistency in your application."
            :keywords="['style guide', 'colors', 'typography', 'design system', 'tailwind css', 'dark mode']"
        />

        <h1>Style Guide</h1>

        <p>
            This guide provides a comprehensive overview of the styling system in <code>@cmmv/ui</code>.
            You'll find detailed information about colors, typography, borders, and other visual elements
            that help maintain consistency across your application.
        </p>

        <!-- Colors Section -->
        <h2>Colors</h2>
        <p>
            Our color system is built on Tailwind CSS with carefully selected palettes that work harmoniously
            in both light and dark modes. Each color has specific use cases and semantic meaning.
        </p>

        <!-- Neutral Colors -->
        <h3>Neutral Colors</h3>
        <p class="mb-4">
            Neutral colors are essential for text, backgrounds, and subtle UI elements. They provide
            the foundation for both light and dark modes.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]" :key="shade"
                class="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div :class="`w-16 h-16 rounded-lg bg-neutral-${shade}`"></div>
                <div class="flex-1">
                    <div class="font-medium">Neutral {{ shade }}</div>
                    <div class="text-sm text-neutral-500 dark:text-neutral-400">
                        <code class="cursor-pointer" @click="copyColor(`bg-neutral-${shade}`)"
                            >bg-neutral-{{ shade }}</code>
                    </div>
                    <div class="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                        Click to copy
                    </div>
                </div>
            </div>
        </div>

        <!-- Semantic Colors -->
        <h3>Semantic Colors</h3>
        <p class="mb-4">
            These colors convey specific meanings and are used consistently throughout the interface
            for actions, states, and feedback.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <template v-for="(color, name) in semanticColors" :key="name">
                <div class="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div :class="`w-16 h-16 rounded-lg ${color.bg}`"></div>
                    <div class="flex-1">
                        <div class="font-medium">{{ name }}</div>
                        <div class="text-sm text-neutral-500 dark:text-neutral-400">
                            <code class="cursor-pointer" @click="copyColor(color.bg)">{{ color.bg }}</code>
                        </div>
                        <div class="text-xs mt-1">{{ color.usage }}</div>
                    </div>
                </div>
            </template>
        </div>

        <!-- Border Radius -->
        <h2>Border Radius</h2>
        <p class="mb-4">
            Consistent border radius values help maintain visual harmony across components.
            Here are the available border radius options:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div v-for="(radius, name) in borderRadius" :key="name"
                class="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div class="bg-neutral-200 dark:bg-neutral-700" :class="[radius.class, 'w-16 h-16']">
                    <div class="w-full h-full flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-300">
                        {{ name }}
                    </div>
                </div>
                <div class="flex-1">
                    <div class="font-medium">{{ name }}</div>
                    <div class="text-sm text-neutral-500 dark:text-neutral-400">
                        <code class="cursor-pointer" @click="copyColor(radius.class)">{{ radius.class }}</code>
                    </div>
                    <div class="text-xs mt-1">{{ radius.usage }}</div>
                </div>
            </div>
        </div>

        <!-- Typography -->
        <h2>Typography</h2>
        <p class="mb-4">
            Our typography system is designed for optimal readability and hierarchy.
            Here are the recommended text styles:
        </p>

        <div class="space-y-6 mb-8">
            <div v-for="(style, name) in typography" :key="name"
                class="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div :class="style.class">{{ style.example }}</div>
                <div class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <code class="cursor-pointer" @click="copyColor(style.class)">{{ style.class }}</code>
                </div>
                <div class="text-xs mt-1">{{ style.usage }}</div>
            </div>
        </div>

        <!-- Tailwind Colors -->
        <h2>Tailwind Colors</h2>
        <p class="mb-4">
            Complete color palette from Tailwind CSS. Each color is shown in 5 different shades.
            Click on any color to copy its class name.
        </p>

        <div class="space-y-8 mb-8">
            <div v-for="(colorSet, colorName) in tailwindColors" :key="colorName"
                class="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div class="font-medium mb-3">{{ colorName }}</div>
                <div class="grid grid-cols-5 gap-2">
                    <div v-for="shade in [100, 300, 500, 700, 900]" :key="shade"
                        class="group relative">
                        <div :class="`h-16 rounded-lg bg-${colorName}-${shade} cursor-pointer ring-2 ring-transparent hover:ring-neutral-400 dark:hover:ring-neutral-500`"
                            @click="copyColor(`bg-${colorName}-${shade}`)">
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div class="bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 px-2 py-1 rounded text-xs">
                                    {{ shade }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dark Mode -->
        <h2>Dark Mode</h2>
        <p class="mb-4">
            All components and utilities support dark mode out of the box. Here are the recommended
            color combinations for dark mode:
        </p>

        <div class="space-y-4 mb-8">
            <card-docs>
                <div class="space-y-4">
                    <div v-for="(combo, name) in darkModeColors" :key="name"
                        :class="combo.container"
                        class="p-4 rounded-lg">
                        <div :class="combo.text">{{ name }}</div>
                        <div class="text-sm mt-2">
                            <code class="cursor-pointer" @click="copyColor(combo.container + ' ' + combo.text)">
                                {{ combo.container }} {{ combo.text }}
                            </code>
                        </div>
                    </div>
                </div>

                <template #code>
                    <pre><code class="code-highlight language-html">&lt;!-- Light and Dark Mode Example --&gt;
&lt;div class="bg-white dark:bg-neutral-900"&gt;
    &lt;p class="text-neutral-900 dark:text-white"&gt;
        Primary Text
    &lt;/p&gt;
&lt;/div&gt;

&lt;div class="bg-neutral-100 dark:bg-neutral-800"&gt;
    &lt;p class="text-neutral-700 dark:text-neutral-200"&gt;
        Secondary Text
    &lt;/p&gt;
&lt;/div&gt;</code></pre>
                </template>
            </card-docs>
        </div>

        <PagePagination previous="First Steps" previousLink="/first-steps" next="AI Chat" nextLink="/ai-chat" />

        <c-notification ref="notification" position="bottom-right" />
    </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from "../layout/BaseLayout.vue"
import PagePagination from "../layout/PagePagination.vue"
import CardDocs from "../components/CardDocs.vue"
import CNotification from "../../src/components/overlays/CNotification.vue"

const notification = ref<InstanceType<typeof CNotification> | null>(null)

const semanticColors = {
    Success: {
        bg: 'bg-green-500',
        usage: 'Used for success states, completion, and positive actions'
    },
    Warning: {
        bg: 'bg-yellow-500',
        usage: 'Used for warnings, pending states, and cautionary actions'
    },
    Error: {
        bg: 'bg-red-500',
        usage: 'Used for errors, destructive actions, and critical states'
    },
    Info: {
        bg: 'bg-blue-500',
        usage: 'Used for informational messages and neutral states'
    }
}

const borderRadius = {
    None: {
        class: 'rounded-none',
        usage: 'No border radius'
    },
    Small: {
        class: 'rounded-sm',
        usage: 'Subtle rounded corners'
    },
    Default: {
        class: 'rounded',
        usage: 'Standard border radius'
    },
    Medium: {
        class: 'rounded-md',
        usage: 'Medium border radius'
    },
    Large: {
        class: 'rounded-lg',
        usage: 'Large border radius'
    },
    XLarge: {
        class: 'rounded-xl',
        usage: 'Extra large border radius'
    },
    Full: {
        class: 'rounded-full',
        usage: 'Circular border radius'
    }
}

const typography = {
    'Heading 1': {
        class: 'text-4xl font-bold',
        example: 'Main Heading',
        usage: 'Used for main page titles'
    },
    'Heading 2': {
        class: 'text-3xl font-semibold',
        example: 'Section Heading',
        usage: 'Used for major section headers'
    },
    'Heading 3': {
        class: 'text-2xl font-medium',
        example: 'Subsection Heading',
        usage: 'Used for subsection headers'
    },
    'Body': {
        class: 'text-base',
        example: 'Regular body text for general content',
        usage: 'Default text style for body content'
    },
    'Small': {
        class: 'text-sm',
        example: 'Smaller text for supporting content',
        usage: 'Used for captions, helper text, and metadata'
    }
}

const darkModeColors = {
    'Primary Content': {
        container: 'bg-white dark:bg-neutral-900',
        text: 'text-neutral-900 dark:text-white'
    },
    'Secondary Content': {
        container: 'bg-neutral-100 dark:bg-neutral-800',
        text: 'text-neutral-700 dark:text-neutral-200'
    },
    'Tertiary Content': {
        container: 'bg-neutral-200 dark:bg-neutral-700',
        text: 'text-neutral-600 dark:text-neutral-300'
    }
}

const colorCombinations = {
    'Primary Button': {
        bg: 'bg-primary-600',
        text: 'text-white',
        usage: 'Main call-to-action buttons'
    },
    'Secondary Button': {
        bg: 'bg-neutral-200 dark:bg-neutral-700',
        text: 'text-neutral-900 dark:text-white',
        usage: 'Secondary actions and options'
    },
    'Success Card': {
        bg: 'bg-green-50 dark:bg-green-900',
        text: 'text-green-900 dark:text-green-50',
        usage: 'Success messages and confirmations'
    },
    'Warning Card': {
        bg: 'bg-yellow-50 dark:bg-yellow-900',
        text: 'text-yellow-900 dark:text-yellow-50',
        usage: 'Warning messages and alerts'
    }
}

const tailwindColors = {
    slate: 'Slate',
    gray: 'Gray',
    zinc: 'Zinc',
    neutral: 'Neutral',
    stone: 'Stone',
    red: 'Red',
    orange: 'Orange',
    amber: 'Amber',
    yellow: 'Yellow',
    lime: 'Lime',
    green: 'Green',
    emerald: 'Emerald',
    teal: 'Teal',
    cyan: 'Cyan',
    sky: 'Sky',
    blue: 'Blue',
    indigo: 'Indigo',
    violet: 'Violet',
    purple: 'Purple',
    fuchsia: 'Fuchsia',
    pink: 'Pink',
    rose: 'Rose',
}

const copyColor = (color: string) => {
    navigator.clipboard.writeText(color)
        .then(() => {
            notification.value?.showNotification({
                newTitle: 'Copied!',
                newContent: `${color} has been copied to clipboard`,
                newDuration: 2000,
                bgColor: 'bg-green-50 dark:bg-green-900',
                textColor: 'text-green-900 dark:text-green-50',
                iconColor: 'text-green-500 dark:text-green-400',
                accentColor: '#22c55e'
            })
        })
        .catch(err => {
            notification.value?.showNotification({
                newTitle: 'Error',
                newContent: 'Failed to copy to clipboard',
                newDuration: 2000,
                bgColor: 'bg-red-50 dark:bg-red-900',
                textColor: 'text-red-900 dark:text-red-50',
                iconColor: 'text-red-500 dark:text-red-400',
                accentColor: '#ef4444'
            })
        })
}
</script>

<style scoped>
h2 {
    @apply text-2xl font-semibold mt-12 mb-4 text-neutral-900 dark:text-white;
}

h3 {
    @apply text-xl font-medium mt-8 mb-4 text-neutral-800 dark:text-neutral-100;
}

p {
    @apply text-neutral-700 dark:text-neutral-300 mb-4;
}

code {
    @apply px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300;
}

.color-grid {
    @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}
</style>
