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

            <icon-docs tooltipContent="IconArrowLeftEndOnRectangle" class="flex items-center justify-center">
                <IconArrowLeftEndOnRectangle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLeftStartOnRectangle" class="flex items-center justify-center">
                <IconArrowLeftStartOnRectangle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLeft" class="flex items-center justify-center">
                <IconArrowLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLongDown" class="flex items-center justify-center">
                <IconArrowLongDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLongLeft" class="flex items-center justify-center">
                <IconArrowLongLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLongRight" class="flex items-center justify-center">
                <IconArrowLongRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowLongUp" class="flex items-center justify-center">
                <IconArrowLongUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowPathRoundedSquare" class="flex items-center justify-center">
                <IconArrowPathRoundedSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowPath" class="flex items-center justify-center">
                <IconArrowPath class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowRightCircle" class="flex items-center justify-center">
                <IconArrowRightCircle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowRightEndOnRectangle" class="flex items-center justify-center">
                <IconArrowRightEndOnRectangle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowRightStartOnRectangle" class="flex items-center justify-center">
                <IconArrowRightStartOnRectangle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowRight" class="flex items-center justify-center">
                <IconArrowRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTopRightOnSquare" class="flex items-center justify-center">
                <IconArrowTopRightOnSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTrendingDown" class="flex items-center justify-center">
                <IconArrowTrendingDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTrendingUp" class="flex items-center justify-center">
                <IconArrowTrendingUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnDownLeft" class="flex items-center justify-center">
                <IconArrowTurnDownLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnDownRight" class="flex items-center justify-center">
                <IconArrowTurnDownRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnLeftDown" class="flex items-center justify-center">
                <IconArrowTurnLeftDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnLeftUp" class="flex items-center justify-center">
                <IconArrowTurnLeftUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnRightDown" class="flex items-center justify-center">
                <IconArrowTurnRightDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnRightUp" class="flex items-center justify-center">
                <IconArrowTurnRightUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnUpLeft" class="flex items-center justify-center">
                <IconArrowTurnUpLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowTurnUpRight" class="flex items-center justify-center">
                <IconArrowTurnUpRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUpCircle" class="flex items-center justify-center">
                <IconArrowUpCircle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUpLeft" class="flex items-center justify-center">
                <IconArrowUpLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUpOnSquareStack" class="flex items-center justify-center">
                <IconArrowUpOnSquareStack class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUpOnSquare" class="flex items-center justify-center">
                <IconArrowUpOnSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUpRight" class="flex items-center justify-center">
                <IconArrowUpRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconArrowUpTray" class="flex items-center justify-center">
                <IconArrowUpTray class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUp" class="flex items-center justify-center">
                <IconArrowUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowUTurnUp" class="flex items-center justify-center">
                <IconArrowUTurnUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowsPointingIn" class="flex items-center justify-center">
                <IconArrowsPointingIn class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowsPointingOut" class="flex items-center justify-center">
                <IconArrowsPointingOut class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowsRightLeft" class="flex items-center justify-center">
                <IconArrowsRightLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconArrowsUpDown" class="flex items-center justify-center">
                <IconArrowsUpDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconAtSymbol" class="flex items-center justify-center">
                <IconAtSymbol class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBackspace" class="flex items-center justify-center">
                <IconBackspace class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBackwand" class="flex items-center justify-center">
                <IconBackwand class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBacknotes" class="flex items-center justify-center">
                <IconBacknotes class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBars2" class="flex items-center justify-center">
                <IconBars2 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBars3BottomLeft" class="flex items-center justify-center">
                <IconBars3BottomLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBars3BottomRight" class="flex items-center justify-center">
                <IconBars3BottomRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBars3CenterLeft" class="flex items-center justify-center">
                <IconBars3CenterLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBars3" class="flex items-center justify-center">
                <IconBars3 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBars4" class="flex items-center justify-center">
                <IconBars4 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBarsArrowDown" class="flex items-center justify-center">
                <IconBarsArrowDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBarsArrowUp" class="flex items-center justify-center">
                <IconBarsArrowUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBattery0" class="flex items-center justify-center">
                <IconBattery0 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBattery100" class="flex items-center justify-center">
                <IconBattery100 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBattery50" class="flex items-center justify-center">
                <IconBattery50 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBeaker" class="flex items-center justify-center">
                <IconBeaker class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBellAlert" class="flex items-center justify-center">
                <IconBellAlert class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBellSlash" class="flex items-center justify-center">
                <IconBellSlash class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBellSnooze" class="flex items-center justify-center">
                <IconBellSnooze class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBell" class="flex items-center justify-center">
                <IconBell class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBold" class="flex items-center justify-center">
                <IconBold class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBoltSlash" class="flex items-center justify-center">
                <IconBoltSlash class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBolt" class="flex items-center justify-center">
                <IconBolt class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBookOpen" class="flex items-center justify-center">
                <IconBookOpen class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBookmarkSlash" class="flex items-center justify-center">
                <IconBookmarkSlash class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBookmarkSquare" class="flex items-center justify-center">
                <IconBookmarkSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBookmark" class="flex items-center justify-center">
                <IconBookmark class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBriefcase" class="flex items-center justify-center">
                <IconBriefcase class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBugAnt" class="flex items-center justify-center">
                <IconBugAnt class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBuildingLibrary" class="flex items-center justify-center">
                <IconBuildingLibrary class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBuildingOffice2" class="flex items-center justify-center">
                <IconBuildingOffice2 class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBuildingOffice" class="flex items-center justify-center">
                <IconBuildingOffice class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconBuildingStorefront" class="flex items-center justify-center">
                <IconBuildingStorefront class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCake" class="flex items-center justify-center">
                <IconCake class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCalculator" class="flex items-center justify-center">
                <IconCalculator class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCalendarDateRange" class="flex items-center justify-center">
                <IconCalendarDateRange class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCalendarDays" class="flex items-center justify-center">
                <IconCalendarDays class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCalendar" class="flex items-center justify-center">
                <IconCalendar class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCamera" class="flex items-center justify-center">
                <IconCamera class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChartBarSquare" class="flex items-center justify-center">
                <IconChartBarSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChartBar" class="flex items-center justify-center">
                <IconChartBar class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChartPie" class="flex items-center justify-center">
                <IconChartPie class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChatBubbleBottomCenterText" class="flex items-center justify-center">
                <IconChatBubbleBottomCenterText class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconChatBubbleBottomCenter" class="flex items-center justify-center">
                <IconChatBubbleBottomCenter class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconChatBubbleLeftEllipsis" class="flex items-center justify-center">
                <IconChatBubbleLeftEllipsis class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconChatBubbleLeftRight" class="flex items-center justify-center">
                <IconChatBubbleLeftRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconChatBubbleLeft" class="flex items-center justify-center">
                <IconChatBubbleLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>
            
            <icon-docs tooltipContent="IconChatBubbleOvalLeftEllipsis" class="flex items-center justify-center">
                <IconChatBubbleOvalLeftEllipsis class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChatBubbleOvalLeft" class="flex items-center justify-center">
                <IconChatBubbleOvalLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCheckBadge" class="flex items-center justify-center">
                <IconCheckBadge class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCheckCircle" class="flex items-center justify-center">
                <IconCheckCircle class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCheck" class="flex items-center justify-center">
                <IconCheck class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronDoubleDown" class="flex items-center justify-center">
                <IconChevronDoubleDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronDoubleLeft" class="flex items-center justify-center">
                <IconChevronDoubleLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronDoubleRight" class="flex items-center justify-center">
                <IconChevronDoubleRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronDoubleUp" class="flex items-center justify-center">
                <IconChevronDoubleUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronDown" class="flex items-center justify-center">
                <IconChevronDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronLeft" class="flex items-center justify-center">
                <IconChevronLeft class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronRight" class="flex items-center justify-center">
                <IconChevronRight class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronUpDown" class="flex items-center justify-center">
                <IconChevronUpDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconChevronUp" class="flex items-center justify-center">
                <IconChevronUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconCircleStack" class="flex items-center justify-center">
                <IconCircleStack class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs> 

            <icon-docs tooltipContent="IconClipboardDocumentCheck" class="flex items-center justify-center">
                <IconClipboardDocumentCheck class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>
            
            <icon-docs tooltipContent="IconClipboardDocumentList" class="flex items-center justify-center">
                <IconClipboardDocumentList class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconClipboardDocument" class="flex items-center justify-center">
                <IconClipboardDocument class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconClipboard" class="flex items-center justify-center">
                <IconClipboard class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconClock" class="flex items-center justify-center">
                <IconClock class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCloudArrowDown" class="flex items-center justify-center">
                <IconCloudArrowDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCloudArrowUp" class="flex items-center justify-center">
                <IconCloudArrowUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCloud" class="flex items-center justify-center">
                <IconCloud class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCodeBracketSquare" class="flex items-center justify-center">
                <IconCodeBracketSquare class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCodeBracket" class="flex items-center justify-center">
                <IconCodeBracket class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCog6Tooth" class="flex items-center justify-center">
                <IconCog6Tooth class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCog8Tooth" class="flex items-center justify-center">
                <IconCog8Tooth class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCog" class="flex items-center justify-center">
                <IconCog class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCommandLine" class="flex items-center justify-center">
                <IconCommandLine class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconComputerDesktop" class="flex items-center justify-center">
                <IconComputerDesktop class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCpuChip" class="flex items-center justify-center">
                <IconCpuChip class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCreditCard" class="flex items-center justify-center">
                <IconCreditCard class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCubeTransparent" class="flex items-center justify-center">
                <IconCubeTransparent class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCube" class="flex items-center justify-center">
                <IconCube class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCurrencyBangladeshi" class="flex items-center justify-center">
                <IconCurrencyBangladeshi class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCurrencyDollar" class="flex items-center justify-center">
                <IconCurrencyDollar class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCurrencyEuro" class="flex items-center justify-center">
                <IconCurrencyEuro class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCurrencyPound" class="flex items-center justify-center">
                <IconCurrencyPound class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCurrencyRupee" class="flex items-center justify-center">
                <IconCurrencyRupee class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCurrencyYen" class="flex items-center justify-center">
                <IconCurrencyYen class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCursorArrowRays" class="flex items-center justify-center">
                <IconCursorArrowRays class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconCursorArrowRipple" class="flex items-center justify-center">
                <IconCursorArrowRipple class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDevicePhoneMobile" class="flex items-center justify-center">
                <IconDevicePhoneMobile class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDeviceTablet" class="flex items-center justify-center">
                <IconDeviceTablet class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDivide" class="flex items-center justify-center">
                <IconDivide class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentArrowDown" class="flex items-center justify-center">
                <IconDocumentArrowDown class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentArrowUp" class="flex items-center justify-center">
                <IconDocumentArrowUp class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentChartBar" class="flex items-center justify-center">
                <IconDocumentChartBar class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCheck" class="flex items-center justify-center">
                <IconDocumentCheck class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCurrencyBangladeshi" class="flex items-center justify-center">
                <IconDocumentCurrencyBangladeshi class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCurrencyDollar" class="flex items-center justify-center">
                <IconDocumentCurrencyDollar class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCurrencyEuro" class="flex items-center justify-center">
                <IconDocumentCurrencyEuro class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCurrencyPound" class="flex items-center justify-center">
                <IconDocumentCurrencyPound class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCurrencyRupee" class="flex items-center justify-center">
                <IconDocumentCurrencyRupee class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentCurrencyYen" class="flex items-center justify-center">
                <IconDocumentCurrencyYen class="w-8 h-8 text-white" aria-hidden="true" />
            </icon-docs>

            <icon-docs tooltipContent="IconDocumentDuplicate" class="flex items-center justify-center">
                <IconDocumentDuplicate class="w-8 h-8 text-white" aria-hidden="true" />
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
