<template>
    <BaseLayout>
        <c-seo
            section="Custom Themes"
            description="Learn how to create and customize themes in CMMV UI by modifying Tailwind CSS native variables. A comprehensive guide to theming with examples and live previews."
            :keywords="['themes', 'customization', 'tailwind css', 'styling', 'dark mode', 'color schemes']"
        />

        <h1>Custom Themes</h1>

        <p>
            Learn how to create and customize themes in <code>@cmmv/ui</code> by modifying Tailwind CSS
            native variables. Since we're using Tailwind via CDN, we'll modify the <code>--tw-*</code> variables directly.
        </p>

        <!-- Theme Switcher -->
        <div class="flex flex-wrap gap-3 mb-8">
            <button v-for="(theme, name) in themes" :key="name"
                @click="setTheme(name)"
                :class="[
                    'px-4 py-2 rounded-lg font-medium transition-colors',
                    currentTheme === name
                        ? 'bg-blue-500 text-white'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                ]">
                {{ name }}
            </button>
        </div>

        <!-- Theme Preview -->
        <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-8">
            <div class="p-6 bg-white dark:bg-neutral-900">
                <h3 class="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Theme Preview</h3>

                <!-- Color Samples -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div v-for="color in ['blue', 'red', 'green', 'yellow']" :key="color"
                        class="space-y-2">
                        <div :class="`h-12 rounded-lg bg-${color}-500`"></div>
                        <div :class="`h-8 rounded-lg bg-${color}-400`"></div>
                        <div :class="`h-8 rounded-lg bg-${color}-600`"></div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="space-y-4 mb-6">
                    <div class="space-x-2">
                        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Primary Button
                        </button>
                        <button class="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-lg">
                            Secondary Button
                        </button>
                        <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
                            Outline Button
                        </button>
                    </div>
                </div>

                <!-- Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="p-4 rounded-lg bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800">
                        <h4 class="font-medium text-blue-900 dark:text-blue-100">Primary Card</h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">Sample content for primary card.</p>
                    </div>
                    <div class="p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                        <h4 class="font-medium text-neutral-900 dark:text-neutral-100">Secondary Card</h4>
                        <p class="text-sm text-neutral-700 dark:text-neutral-300">Sample content for secondary card.</p>
                    </div>
                    <div class="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <h4 class="font-medium text-neutral-900 dark:text-neutral-100">Default Card</h4>
                        <p class="text-sm text-neutral-700 dark:text-neutral-300">Sample content for default card.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Theme Configuration -->
        <h2>Theme Configuration</h2>
        <p class="mb-4">
            When using Tailwind via CDN, we can customize colors by modifying the native CSS variables:
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-css">/* Custom theme variables */
:root {
    /* Blue */
    --tw-color-blue-50: {{ themes[currentTheme].colors.blue['50'] }};
    --tw-color-blue-100: {{ themes[currentTheme].colors.blue['100'] }};
    --tw-color-blue-500: {{ themes[currentTheme].colors.blue['500'] }};
    --tw-color-blue-900: {{ themes[currentTheme].colors.blue['900'] }};

    /* Red */
    --tw-color-red-50: {{ themes[currentTheme].colors.red['50'] }};
    --tw-color-red-500: {{ themes[currentTheme].colors.red['500'] }};
    --tw-color-red-900: {{ themes[currentTheme].colors.red['900'] }};

    /* Green */
    --tw-color-green-50: {{ themes[currentTheme].colors.green['50'] }};
    --tw-color-green-500: {{ themes[currentTheme].colors.green['500'] }};
    --tw-color-green-900: {{ themes[currentTheme].colors.green['900'] }};

    /* Yellow */
    --tw-color-yellow-50: {{ themes[currentTheme].colors.yellow['50'] }};
    --tw-color-yellow-500: {{ themes[currentTheme].colors.yellow['500'] }};
    --tw-color-yellow-900: {{ themes[currentTheme].colors.yellow['900'] }};
}</code></pre>
            </template>
        </card-docs>

        <!-- Theme Examples -->
        <h2>Available Themes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div v-for="(theme, name) in themes" :key="name"
                class="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div class="font-medium mb-3">{{ name }}</div>
                <div class="grid grid-cols-4 gap-4">
                    <div v-for="(colorSet, colorName) in theme.colors" :key="colorName" class="space-y-2">
                        <div class="text-xs text-neutral-500 dark:text-neutral-400">{{ colorName }}</div>
                        <div class="h-8 rounded-lg" :style="{ backgroundColor: colorSet['500'] }"></div>
                        <div class="h-6 rounded-lg" :style="{ backgroundColor: colorSet['700'] }"></div>
                    </div>
                </div>
                <div class="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                    {{ theme.description }}
                </div>
                <button class="mt-3 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-lg"
                    @click="setTheme(name)">
                    Apply Theme
                </button>
            </div>
        </div>

        <PagePagination previous="Style Guide" previousLink="/style-guide" next="Components" nextLink="/components" />
    </BaseLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseLayout from "../layout/BaseLayout.vue"
import PagePagination from "../layout/PagePagination.vue"
import CardDocs from "../components/CardDocs.vue"

const currentTheme = ref('Default')

const themes = {
    Default: {
        colors: {
            neutral: {
                '50': '#fafafa',
                '100': '#f5f5f5',
                '200': '#e5e5e5',
                '300': '#d4d4d4',
                '400': '#a3a3a3',
                '500': '#737373',
                '600': '#525252',
                '700': '#404040',
                '800': '#262626',
                '900': '#171717',
                '950': '#0a0a0a',
            },
            blue: {
                '50': '#eff6ff',
                '100': '#dbeafe',
                '500': '#3b82f6',
                '700': '#1d4ed8',
                '900': '#1e3a8a'
            },
            red: {
                '50': '#fef2f2',
                '100': '#fee2e2',
                '500': '#ef4444',
                '700': '#b91c1c',
                '900': '#7f1d1d'
            },
            green: {
                '50': '#f0fdf4',
                '100': '#dcfce7',
                '500': '#22c55e',
                '700': '#15803d',
                '900': '#14532d'
            },
            yellow: {
                '50': '#fefce8',
                '100': '#fef9c3',
                '500': '#eab308',
                '700': '#a16207',
                '900': '#713f12'
            }
        },
        description: 'Default Tailwind color palette.'
    },
    Vibrant: {
        colors: {
            neutral: {
                '50': '#ffffff',
                '100': '#fafafa',
                '200': '#e8e8e8',
                '300': '#d1d1d1',
                '400': '#b0b0b0',
                '500': '#808080',
                '600': '#666666',
                '700': '#333333',
                '800': '#1a1a1a',
                '900': '#0d0d0d',
                '950': '#000000',
            },
            blue: {
                '50': '#eef9ff',
                '100': '#e0f5ff',
                '500': '#00a3ff',
                '700': '#0077cc',
                '900': '#004c99'
            },
            red: {
                '50': '#fff0f0',
                '100': '#ffe0e0',
                '500': '#ff3333',
                '700': '#cc0000',
                '900': '#990000'
            },
            green: {
                '50': '#efffef',
                '100': '#d6ffd6',
                '500': '#00cc00',
                '700': '#009900',
                '900': '#006600'
            },
            yellow: {
                '50': '#fffbe6',
                '100': '#fff7cc',
                '500': '#ffcc00',
                '700': '#cca300',
                '900': '#997a00'
            }
        },
        description: 'Bright and energetic color palette.'
    },
    Pastel: {
        colors: {
            neutral: {
                '50': '#fcfcfc',
                '100': '#f7f7f7',
                '200': '#ebebeb',
                '300': '#e0e0e0',
                '400': '#bdbdbd',
                '500': '#9e9e9e',
                '600': '#757575',
                '700': '#616161',
                '800': '#424242',
                '900': '#212121',
                '950': '#141414',
            },
            blue: {
                '50': '#f5f8ff',
                '100': '#edf3ff',
                '500': '#a3c2ff',
                '700': '#7a9ecc',
                '900': '#516699'
            },
            red: {
                '50': '#fff5f5',
                '100': '#ffebeb',
                '500': '#ffb3b3',
                '700': '#cc8f8f',
                '900': '#996b6b'
            },
            green: {
                '50': '#f5fff5',
                '100': '#ebffeb',
                '500': '#b3ffb3',
                '700': '#8fcc8f',
                '900': '#6b996b'
            },
            yellow: {
                '50': '#fffdf5',
                '100': '#fffaeb',
                '500': '#ffe6b3',
                '700': '#ccb88f',
                '900': '#998a6b'
            }
        },
        description: 'Soft and soothing pastel colors.'
    },
    Nature: {
        colors: {
            neutral: {
                '50': '#f9f9f7',
                '100': '#f3f3ef',
                '200': '#e7e7e0',
                '300': '#d8d8cc',
                '400': '#b8b8a6',
                '500': '#999980',
                '600': '#7a7a66',
                '700': '#5c5c4d',
                '800': '#3d3d33',
                '900': '#1f1f1a',
                '950': '#0f0f0d',
            },
            blue: {
                '50': '#f0f7ff',
                '100': '#e1f0ff',
                '500': '#4d94ff',
                '700': '#3366cc',
                '900': '#1a3399'
            },
            red: {
                '50': '#fff2f0',
                '100': '#ffe6e1',
                '500': '#ff704d',
                '700': '#cc4433',
                '900': '#991a1a'
            },
            green: {
                '50': '#f0fff2',
                '100': '#e1ffe6',
                '500': '#4dcc66',
                '700': '#339944',
                '900': '#1a6622'
            },
            yellow: {
                '50': '#fffbf0',
                '100': '#fff7e1',
                '500': '#ffcc4d',
                '700': '#cc9933',
                '900': '#99661a'
            }
        },
        description: 'Colors inspired by natural elements with earthy neutrals.'
    },
    Monochrome: {
        colors: {
            neutral: {
                '50': '#fafafa',
                '100': '#f4f4f4',
                '200': '#e4e4e4',
                '300': '#d3d3d3',
                '400': '#a1a1a1',
                '500': '#6f6f6f',
                '600': '#515151',
                '700': '#333333',
                '800': '#1f1f1f',
                '900': '#0f0f0f',
                '950': '#080808',
            },
            blue: {
                '50': '#f2f2f2',
                '100': '#e6e6e6',
                '500': '#666666',
                '700': '#404040',
                '900': '#1a1a1a'
            },
            red: {
                '50': '#f2f2f2',
                '100': '#e6e6e6',
                '500': '#808080',
                '700': '#595959',
                '900': '#333333'
            },
            green: {
                '50': '#f2f2f2',
                '100': '#e6e6e6',
                '500': '#4d4d4d',
                '700': '#262626',
                '900': '#000000'
            },
            yellow: {
                '50': '#f2f2f2',
                '100': '#e6e6e6',
                '500': '#999999',
                '700': '#737373',
                '900': '#4d4d4d'
            }
        },
        description: 'Grayscale variations for a minimalist look.'
    }
} as const

type ThemeName = keyof typeof themes

// Função auxiliar para gerar regras CSS para uma cor
const generateColorRules = (color: string, shade: string, value: unknown) => {
    if (typeof value !== 'string') return ''

    return `
        .text-${color}-${shade} { color: ${value} !important; }
        .bg-${color}-${shade} { background-color: ${value} !important; }
        .border-${color}-${shade} { border-color: ${value} !important; }
        .ring-${color}-${shade} { --tw-ring-color: ${value} !important; }
        .hover\\:text-${color}-${shade}:hover { color: ${value} !important; }
        .hover\\:bg-${color}-${shade}:hover { background-color: ${value} !important; }
        .hover\\:border-${color}-${shade}:hover { border-color: ${value} !important; }
        .dark .dark\\:text-${color}-${shade} { color: ${value} !important; }
        .dark .dark\\:bg-${color}-${shade} { background-color: ${value} !important; }
        .dark .dark\\:border-${color}-${shade} { border-color: ${value} !important; }
        .focus\\:ring-${color}-${shade}:focus { --tw-ring-color: ${value} !important; }
        .focus\\:border-${color}-${shade}:focus { border-color: ${value} !important; }
        .focus\\:text-${color}-${shade}:focus { color: ${value} !important; }
        .focus\\:bg-${color}-${shade}:focus { background-color: ${value} !important; }
    `
}

const setTheme = (themeName: ThemeName) => {
    currentTheme.value = themeName
    const theme = themes[themeName].colors

    // Procura ou cria o elemento style para nossos temas
    let styleEl = document.getElementById('custom-theme-styles')
    if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = 'custom-theme-styles'
        document.head.appendChild(styleEl)
    }

    // Gera todas as regras CSS necessárias
    let css = ''
    Object.entries(theme).forEach(([color, shades]) => {
        Object.entries(shades).forEach(([shade, value]) => {
            css += generateColorRules(color, shade, value)
        })
    })

    // Atualiza o conteúdo do elemento style
    styleEl.textContent = css
}

// Inicializa o tema quando o componente é montado
onMounted(() => {
    setTheme('Default' as ThemeName)
})
</script>
