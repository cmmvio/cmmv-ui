<template>
    <BaseLayout>
        <p align="center">
            <img src="https://raw.githubusercontent.com/cmmvio/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" />
        </p>

        <p align="center">Contract-Model-Model-View (CMMV) <br/> Building scalable and modular applications using contracts.</p>

        <div class="flex flex-container">
            <a href="https://www.npmjs.com/package/@cmmv/ui" target="_blank" rel="nofollow">
                <img src="https://img.shields.io/npm/v/@cmmv/ui.svg" alt="NPM Version" />
            </a>
            <a href="https://github.com/cmmvio/cmmv/blob/main/LICENSE" target="_blank" rel="nofollow">
                <img src="https://img.shields.io/npm/l/@cmmv/ui.svg" alt="Package License" />
            </a>
        </div>

        <br/>

        <h3>Introduction to CMMV</h3>

        <p>
            Contract-Model-Model-View (CMMV) is an architectural pattern designed to create highly modular, maintainable, and scalable frontend applications. The pattern builds upon established practices from other architectural approaches while introducing the concept of contracts as a central organizing principle.
        </p>

        <p>
            At its core, CMMV separates concerns into four distinct layers:
        </p>

        <ul class="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Contract:</strong> Defines the interface and data structures that connect different parts of the application.</li>
            <li><strong>Domain Model:</strong> Manages business logic and validation rules that are independent of UI concerns.</li>
            <li><strong>View Model:</strong> Transforms the domain model data into a format suitable for presentation.</li>
            <li><strong>View:</strong> Handles presentation logic and user interactions without containing business logic.</li>
        </ul>

        <p>
            This separation creates a clear boundary between UI components and business logic, making applications easier to test, refactor, and scale. The contract-first approach ensures that teams can work independently on different parts of the application, as long as they adhere to the agreed-upon contracts.
        </p>

        <h3>UI Component Library</h3>

        <p>
            <code>@cmmv/ui</code> is a modular UI component library built on top of Vue 3 and Tailwind CSS. It offers a collection of pre-designed, customizable components to streamline the development of user interfaces. This library is optimized for modern frontend frameworks, providing developers with tools to quickly build performant, scalable, and accessible web applications.
        </p>

        <p>
            Since <code>@cmmv/ui</code> is built using <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and <a href="https://vuejs.org/" target="_blank">Vue 3</a>, it is essential that these dependencies are configured in your project. You can include them via direct imports in your build process or through a CDN for simpler setups.
        </p>

        <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md my-6">
            <p class="font-bold">Disclaimer</p>
            <p>
                The <code>@cmmv/ui</code> module is currently in <strong>beta</strong>. It is not recommended for use in production applications.
                Features and APIs are subject to change, and there may be unresolved issues or incomplete implementations.
                Please use it for testing or experimental purposes only.
            </p>
        </div>

        <h3>Core Principles</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="border border-gray-200 dark:border-neutral-700 rounded-lg p-6">
                <h4 class="text-base font-semibold mb-3">Contract-First Development</h4>
                <p>CMMV encourages defining clear contracts between system components before implementation. This approach enables parallel development and better system integration.</p>
            </div>
            <div class="border border-gray-200 dark:border-neutral-700 rounded-lg p-6">
                <h4 class="text-base font-semibold mb-3">Separation of Concerns</h4>
                <p>By separating domain logic, presentation logic, and UI components, CMMV creates more maintainable code with reduced interdependencies.</p>
            </div>
            <div class="border border-gray-200 dark:border-neutral-700 rounded-lg p-6">
                <h4 class="text-base font-semibold mb-3">Testability</h4>
                <p>The clean separation between layers makes unit testing much simpler, as each component can be tested in isolation with clear boundaries.</p>
            </div>
            <div class="border border-gray-200 dark:border-neutral-700 rounded-lg p-6">
                <h4 class="text-base font-semibold mb-3">Scalability</h4>
                <p>CMMV applications are designed to scale from small prototypes to enterprise applications without requiring architectural redesigns.</p>
            </div>
        </div>

        <h3>Features</h3>

        <br/>

        <ul>
            <li>Pre-built Vue 3 components with reactivity and flexibility.</li>
            <li>Customizable through props, slots, and styles.</li>
            <li>Supports theming and responsiveness out of the box.</li>
            <li>Integrates seamlessly with <code>@cmmv/core</code> and other modules in the CMMV ecosystem.</li>
        </ul>

        <h3>Installation</h3>

        <pre class="rounded-md">
            <code class="code-highlight language-bash">$ pnpm install @cmmv/ui vue@latest tailwindcss</code>
        </pre>

        <h3>Development</h3>

        <p>If you wish to contribute or customize the library, clone the repository and install dependencies:</p>

    <pre class="rounded-md">
<code class="code-highlight language-bash">git clone https://github.com/cmmvio/cmmv-ui.git
cd cmmv-ui
pnpm install
</code>
    </pre>

    <h3>Build Commands</h3>

    <p>The library provides two types of builds:</p>

    <pre class="rounded-md"><code>pnpm run build</code></pre>

    <br/>

    <PagePagination
            previous=""
            previousLink=""
            next="First Steps"
            nextLink="/first-steps"
        />

    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../layout/BaseLayout.vue";
import PagePagination from "../layout/PagePagination.vue";
</script>
