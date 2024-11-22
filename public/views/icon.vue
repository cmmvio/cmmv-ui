<template>
    <BaseLayout>
        <h1>Icon</h1>

        <p>
            The <code>CIcon</code> (alias: c-icon) component in the <code>@cmmv/ui</code> framework provides a flexible way to display icons with customizable sizes, colors, and accessibility features. This component is ideal for use in buttons, menus, or as standalone elements in your UI.
        </p>

        <p>
            While the default icons provided in the examples are from the 
            <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">Heroicons</a> library, the <code>CIcon</code> is designed to work with any icon library or custom SVGs. This ensures maximum flexibility and adaptability for your projects.
        </p>

        <!-- Simple Example -->
        <h2 class="text-lg font-semibold">Simple Example</h2>

        <p>
            The following example demonstrates the basic usage of the <code>CIcon</code> component with different sizes and colors. You can use it to wrap any SVG or inline icon.
        </p>

        <c-card 
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-icon size="sm" color="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                    <path
                        d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z"
                    />
                </svg>
            </c-icon>

            <c-icon size="md" color="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                    <path
                        d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z"
                    />
                </svg>
            </c-icon>

            <c-icon size="lg" color="text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                    <path
                        d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z"
                    />
                </svg>
            </c-icon>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">
&lt;template&gt;
    &lt;c-icon size="sm" color="text-blue-600"&gt;
        &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"&gt;
            &lt;path
                d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.286-.011-1.043-.017-2.047-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.306.761-1.606-2.666-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.231.957-.266 1.983-.399 3.003-.404 1.019.005 2.046.138 3.003.404 2.292-1.553 3.299-1.231 3.299-1.231.655 1.65.243 2.871.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.901-.014 3.293 0 .32.192.694.801.576C20.565 21.795 24 17.299 24 12c0-6.629-5.371-12-12-12z"
            /&gt;
        &lt;/svg&gt;
    &lt;/c-icon&gt;
&lt;/template&gt;

&lt;script&gt;
import CIcon from "@cmmv/ui/components/CIcon.vue";
&lt;/script&gt;</code>
        </pre>

        <!-- Accessibility -->
        <h2>Accessibility</h2>

        <p>
            The <code>ariaLabel</code> prop ensures that the <code>CIcon</code> is accessible for screen readers. Use this prop to provide a descriptive label for your icon.
        </p>

        <c-card 
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-icon size="md" color="text-white" ariaLabel="User Icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </c-icon>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">
&lt;template&gt;
    &lt;c-icon aria-hidden="Icon Menu"&gt;
        &lt;svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" viewBox="0 0 24 24" 
            fill="currentColor"
        &gt;
            &lt;path d="M12 2a10 10 0 11-7.071 17.071A10 10 0 0112 2zm0 18a8 8 0 100-16 8 8 0 000 16z" /&gt;
        &lt;/svg&gt;
    &lt;/c-icon&gt;
&lt;/template&gt;
            </code>
        </pre>

        <!-- All -->
        <h2>All Icons</h2>

        <c-card 
            class="m-auto mt-4 px-4 py-20 items-center grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4"
        >
            <icon-docs 
                tooltipContent="IconAcademicCap" 
                class="flex items-center justify-center"
            >
                <IconAcademicCap class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconAjustmentsHorizontal" class="flex items-center justify-center">
                <IconAjustmentsHorizontal class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconAjustmentsVertical" class="flex items-center justify-center">
                <IconAjustmentsVertical class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArchiveBoxArrowDown" class="flex items-center justify-center">
                <IconArchiveBoxArrowDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArchiveBoxXMark" class="flex items-center justify-center">
                <IconArchiveBoxXMark class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArchiveBox" class="flex items-center justify-center">
                <IconArchiveBox class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowDownCircle" class="flex items-center justify-center">
                <IconArrowDownCircle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowDownLeft" class="flex items-center justify-center">
                <IconArrowDownLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 
            
            <icon-docs tooltipContent="IconArrowDownOnSquareStack" class="flex items-center justify-center">
                <IconArrowDownOnSquareStack class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconArrowDownOnSquare" class="flex items-center justify-center">
                <IconArrowDownOnSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconArrowDownRight" class="flex items-center justify-center">
                <IconArrowDownRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowDownTray" class="flex items-center justify-center">
                <IconArrowDownTray class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowDown" class="flex items-center justify-center">
                <IconArrowDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLeftCircle" class="flex items-center justify-center">
                <IconArrowLeftCircle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconHome" class="flex items-center justify-center">
                <IconHome class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>
            
            <icon-docs tooltipContent="IconGithub" class="flex items-center justify-center">
                <IconGithub class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>
           
            <icon-docs tooltipContent="IconSearch" class="flex items-center justify-center">
                <IconSearch class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>
        </c-card>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../layout/BaseLayout.vue";
import IconDocs from "../components/IconDocs.vue";
import CCard from "@components/layout/CCard.vue";
import CIcon from "@components/components/CIcon.vue";
</script>
