<template>
    <BaseLayout>
        <h1>Flags</h1>

        <p>The <code>CFlag (alias: c-flag)</code> component in the <code>@cmmv/ui</code> framework provides an easy way to use country flags as SVG icons. The flags are imported from the <a href="https://github.com/lipis/flag-icons" target="_blank" rel="noopener noreferrer">flag-icons</a> project and adapted for seamless integration with Vue and the CMMV UI framework. Below is the guide to use the <code>CFlag</code> component.</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">iso</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">The ISO country code (e.g., "br" for Brazil, "us" for the United States). This is used to dynamically load the corresponding flag component.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the flag. Options: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the flag. Options: <code>none</code>, <code>default</code>, <code>md</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ariaLabel</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"flag"</td>
                    <td class="border-b px-4 py-2">Sets the accessible label for the flag, used by screen readers.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Simple Flags -->
        <c-card
            variant="flat"
            class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-flag iso="br" size="sm" />
            <c-flag iso="us" size="md" />
            <c-flag iso="fr" size="lg" />
            <c-flag iso="de" size="xl" />
            <c-flag iso="jp" size="2xl" />
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-flag iso="br" size="sm" /&gt;
    &lt;c-flag iso="us" size="md" /&gt;
    &lt;c-flag iso="fr" size="lg" /&gt;
    &lt;c-flag iso="de" size="xl" /&gt;
    &lt;c-flag iso="jp" size="2xl" /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Variants -->
        <h3>Flag Variants</h3>

        <p>
            The <code>CFlag</code> component supports a variety of sizes and styling options. By default, the component uses the ISO 3166-1 alpha-2 country codes to identify flags, ensuring compatibility with international standards. You can combine this with utility classes for additional customization.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Country</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Preview</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">ISO Code</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Alpha 3</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Numeric</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(country, index) in countries" :key="index">
                    <td class="border-b px-4 py-2">{{ country.name }}</td>
                    <td class="border-b px-4 py-2">
                        <c-flag :iso="country.iso" size="lg" />
                    </td>
                    <td class="border-b px-4 py-2">
                        <code>{{ country.iso }}</code>
                    </td>
                    <td class="border-b px-4 py-2">{{ country.alpha3 }}</td>
                    <td class="border-b px-4 py-2">{{ country.numeric }}</td>
                </tr>
            </tbody>
        </table-docs>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-flag iso="br" size="lg" /&gt;
    &lt;c-flag iso="us" size="lg" /&gt;
    &lt;c-flag iso="fr" size="lg" /&gt;
    &lt;c-flag iso="de" size="lg" /&gt;
    &lt;c-flag iso="jp" size="lg" /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Icon Buttons -->
        <h3>Icon Buttons with Flags</h3>

        <p>The <code>CFlag</code> component can also be used within button components to create flag-based interactions. By combining the <code>CFlag</code> component with <code>CButton</code>, you can easily build buttons that visually represent countries.</p>

        <c-card
            variant="flat"
            class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-button
                size="md"
                type="button"
                variant="elevated"
                class="inline-flex items-center gap-x-2"
            >
                <c-flag iso="br" class="w-8" />
                Brazil
            </c-button>

            <c-button
                size="md"
                type="button"
                variant="elevated"
                bgColor="bg-white"
                textColor="text-black"
                class="inline-flex items-center gap-x-2"
            >
                <c-flag iso="jp" class="w-8" />
                Japan
            </c-button>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-button
        size="md"
        type="button"
        variant="elevated"
        class="inline-flex items-center gap-x-2"
    &gt;
        &lt;c-flag iso="br" class="w-8" /&gt;
        Brazil
    &lt;/c-button&gt;

    &lt;c-button
        size="md"
        type="button"
        variant="elevated"
        bgColor="bg-white"
        textColor="text-black"
        class="inline-flex items-center gap-x-2"
    &gt;
        &lt;c-flag iso="jp" class="w-8" /&gt;
        Japan
    &lt;/c-button&gt;
&lt;/template&gt;</code>
        </pre>

        <PagePagination
            previous="Button"
            previousLink="/button"
            next="Icon"
            nextLink="/icon"
        />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import Countries from "@composables/CountriesList.ts";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CCard from "@components/layout/CCard.vue";
import CButton from "@components/components/CButton.vue";
const countries = Countries;
</script>
