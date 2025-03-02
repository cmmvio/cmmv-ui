<template>
    <BaseLayout>
        <h1>Flags</h1>

        <p>The <code>CFlag (alias: c-flag)</code> component in the <code>@cmmv/ui</code> framework provides an easy way
            to use country flags as SVG icons. The flags are imported from the <a
                href="https://github.com/lipis/flag-icons" target="_blank" rel="noopener noreferrer">flag-icons</a>
            project and adapted for seamless integration with Vue and the CMMV UI framework. Below is the guide to use
            the <code>CFlag</code> component.</p>

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
                    <td class="border-b px-4 py-2">The ISO country code (e.g., "br" for Brazil, "us" for the United
                        States). This is used to dynamically load the corresponding flag component.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the flag. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the flag. Options: <code>none</code>,
                        <code>default</code>, <code>md</code>, <code>full</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ariaLabel</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"flag"</td>
                    <td class="border-b px-4 py-2">Sets the accessible label for the flag, used by screen readers.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Simple Flags</h3>

        <p>The <code>CFlag</code> component offers an easy way to display country flags in different sizes. Below are
            examples of flags in five different sizes.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-flag iso="br" size="sm" />
                <c-flag iso="us" size="md" />
                <c-flag iso="fr" size="lg" />
                <c-flag iso="de" size="xl" />
                <c-flag iso="jp" size="2xl" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-flag iso="br" size="sm" /&gt;
&lt;c-flag iso="us" size="md" /&gt;
&lt;c-flag iso="fr" size="lg" /&gt;
&lt;c-flag iso="de" size="xl" /&gt;
&lt;c-flag iso="jp" size="2xl" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Flag Variants</h3>

        <p>
            The <code>CFlag</code> component supports a variety of sizes and styling options. By default, the component
            uses the
            ISO 3166-1 alpha-2 country codes to identify flags, ensuring compatibility with international standards. You
            can
            combine this with utility classes for additional customization.
        </p>

        <div class="mb-6 mt-4">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-neutral-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" v-model="searchCountryQuery"
                    class="block w-full p-3 pl-10 text-sm border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    placeholder="Search countries by name or ISO code..." />
            </div>
            <p v-if="filteredCountries.length === 0 && searchCountryQuery"
                class="mt-2 text-sm text-gray-500 dark:text-neutral-400">
                No countries found matching "{{ searchCountryQuery }}". Try a different search term.
            </p>
        </div>

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
                <tr v-for="(country, index) in filteredCountries" :key="index">
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

        <div v-if="filteredCountries.length > 0" class="text-sm text-gray-500 dark:text-neutral-400 mt-4 text-center">
            Showing {{ filteredCountries.length }} of {{ countries.length }} countries
        </div>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-flag iso="br" size="lg" />
                <c-flag iso="us" size="lg" />
                <c-flag iso="fr" size="lg" />
                <c-flag iso="de" size="lg" />
                <c-flag iso="jp" size="lg" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-flag iso="br" size="lg" /&gt;
&lt;c-flag iso="us" size="lg" /&gt;
&lt;c-flag iso="fr" size="lg" /&gt;
&lt;c-flag iso="de" size="lg" /&gt;
&lt;c-flag iso="jp" size="lg" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Icon Buttons with Flags</h3>

        <p>The <code>CFlag</code> component can also be used within button components to create flag-based interactions.
            By
            combining the <code>CFlag</code> component with <code>CButton</code>, you can easily build buttons that
            visually
            represent countries.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-button size="md" type="button" variant="elevated" class="inline-flex items-center gap-x-2">
                    <c-flag iso="br" class="w-8" border="border-none" />
                    Brazil
                </c-button>

                <c-button size="md" type="button" variant="elevated" bgColor="bg-white" textColor="text-black"
                    class="inline-flex items-center gap-x-2">
                    <c-flag iso="jp" class="w-8" />
                    Japan
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button
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
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Rounded Styles</h3>

        <p>The <code>CFlag</code> component supports different rounding styles for the flag borders. You can choose
            between
            <code>none</code>, <code>default</code>, <code>md</code>, and <code>full</code> to customize the appearance
            of the
            flags.
        </p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-flag iso="us" size="lg" rounded="none" />
                <c-flag iso="us" size="lg" rounded="default" />
                <c-flag iso="us" size="lg" rounded="md" />
                <c-flag iso="us" size="lg" rounded="full" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-flag iso="us" size="lg" rounded="none" /&gt;
&lt;c-flag iso="us" size="lg" rounded="default" /&gt;
&lt;c-flag iso="us" size="lg" rounded="md" /&gt;
&lt;c-flag iso="us" size="lg" rounded="full" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Flags with Shadow and Border</h3>

        <p>You can add shadows and borders to flags to highlight them or better integrate them into your design. These
            styling
            options can be combined with different sizes and roundings.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-flag iso="fr" size="lg" shadow="shadow-md" />
                <c-flag iso="fr" size="lg" border="border-2 border-gray-300" />
                <c-flag iso="fr" size="lg" shadow="shadow-lg" border="border-2 border-blue-300" rounded="full" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-flag iso="fr" size="lg" shadow="shadow-md" /&gt;
&lt;c-flag iso="fr" size="lg" border="border-2 border-gray-300" /&gt;
&lt;c-flag iso="fr" size="lg" shadow="shadow-lg" border="border-2 border-blue-300" rounded="full" /&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Button" previousLink="/button" next="Icon" nextLink="/icon" />
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
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CButton from "@components/components/CButton.vue";
import { ref, computed } from "vue";

const countries = Countries;
const searchCountryQuery = ref('');

const filteredCountries = computed(() => {
    if (!searchCountryQuery.value) return countries;
    const query = searchCountryQuery.value.toLowerCase();
    return countries.filter(country =>
        country.name.toLowerCase().includes(query) ||
        country.iso.toLowerCase().includes(query) ||
        country.alpha3.toLowerCase().includes(query)
    );
});
</script>
