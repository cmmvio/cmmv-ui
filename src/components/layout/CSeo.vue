<template>
    <!-- Este componente não renderiza nada visualmente -->
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useHead } from '@vueuse/head'

interface Props {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    url?: string
    type?: string
    twitterCard?: string
    twitterCreator?: string
    section?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'CMMV UI - Vue 3 Component Library',
    description: 'A modern Vue 3 component library with TypeScript support and Tailwind CSS styling',
    keywords: () => ['vue', 'components', 'ui', 'typescript', 'tailwind'],
    image: '/cmmv-ui-logo.png',
    url: 'https://cmmv-ui.dev',
    type: 'website',
    twitterCard: 'summary_large_image',
    twitterCreator: '@cmmv_ui',
    section: ''
})

const updateHead = () => {
    const fullTitle = props.section
        ? `${props.section} | CMMV UI`
        : props.title

    useHead({
        title: fullTitle,
        meta: [
            { name: 'description', content: props.description },
            { name: 'keywords', content: props.keywords.join(', ') },

            // Open Graph
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: props.description },
            { property: 'og:image', content: props.image },
            { property: 'og:url', content: props.url },
            { property: 'og:type', content: props.type },

            // Twitter
            { name: 'twitter:card', content: props.twitterCard },
            { name: 'twitter:creator', content: props.twitterCreator },
            { name: 'twitter:title', content: fullTitle },
            { name: 'twitter:description', content: props.description },
            { name: 'twitter:image', content: props.image },
        ],
        link: [
            { rel: 'canonical', href: props.url }
        ]
    })
}

// Atualiza os metadados quando as props mudarem
watch(() => props, updateHead, { immediate: true, deep: true })
</script>
