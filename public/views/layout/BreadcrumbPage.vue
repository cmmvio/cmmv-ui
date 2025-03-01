<template>
    <BaseLayout>
        <h1>Breadcrumb</h1>

        <p>
            The <code>CBreadcrumb (alias: c-breadcrumb)</code> component is a navigation element that helps users
            understand their current location in the application's hierarchy. It provides a clear path from the
            homepage to the current page, enhancing navigation and user orientation.
        </p>

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
                    <td class="border-b px-4 py-2">items</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">
                        Array of breadcrumb items with properties: <code>text</code>, <code>to</code> (for router
                        links),
                        <code>href</code> (for standard links), <code>icon</code>, and <code>dropdown</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">separator</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">/</td>
                    <td class="border-b px-4 py-2">The character or text used to separate breadcrumb items.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">separatorClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-gray-400 dark:text-gray-600</td>
                    <td class="border-b px-4 py-2">CSS class applied to the separator elements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-gray-500 dark:text-gray-400</td>
                    <td class="border-b px-4 py-2">CSS class for the text color of non-active breadcrumb items.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">activeTextColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-gray-900 dark:text-white font-medium</td>
                    <td class="border-b px-4 py-2">CSS class for the text color of the active (current) breadcrumb item.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">CSS class for the background color of the breadcrumb container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Icon component to display at the beginning of the breadcrumb.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">iconClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-gray-500 dark:text-gray-400</td>
                    <td class="border-b px-4 py-2">CSS class applied to the icon at the beginning of the breadcrumb.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Breadcrumb</h3>

        <p>
            A basic breadcrumb with text links and the default separator.
        </p>

        <card-docs>
            <div class="p-4">
                <c-breadcrumb :items="basicItems" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
  &lt;c-breadcrumb :items="basicItems" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CBreadcrumb from '@components/layout/CBreadcrumb.vue';

const basicItems = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/products' },
  { text: 'Laptops' }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Separator</h3>

        <p>
            Breadcrumb with a custom separator character and colors.
        </p>

        <card-docs>
            <div class="p-4">
                <c-breadcrumb :items="basicItems" separator="›"
                    separatorClass="text-blue-500 dark:text-blue-400 font-bold"
                    textColor="text-blue-600 dark:text-blue-400"
                    activeTextColor="text-blue-800 dark:text-blue-300 font-medium" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
  &lt;c-breadcrumb
    :items="basicItems"
    separator="›"
    separatorClass="text-blue-500 dark:text-blue-400 font-bold"
    textColor="text-blue-600 dark:text-blue-400"
    activeTextColor="text-blue-800 dark:text-blue-300 font-medium"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CBreadcrumb from '@components/layout/CBreadcrumb.vue';

const basicItems = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/products' },
  { text: 'Laptops' }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>With Icons</h3>

        <p>
            Breadcrumb with an icon at the beginning and icons for each item.
        </p>

        <card-docs>
            <div class="p-4">
                <c-breadcrumb :items="iconItems" :icon="IconHome"
                    bgColor="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
  &lt;c-breadcrumb
    :items="iconItems"
    :icon="IconHome"
    bgColor="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CBreadcrumb from '@components/layout/CBreadcrumb.vue';
import IconHome from '@components/icons/IconHome.vue';
import IconShoppingBag from '@components/icons/IconShoppingBag.vue';
import IconDesktopComputer from '@components/icons/IconDesktopComputer.vue';

const iconItems = [
  { text: 'Products', to: '/products', icon: IconShoppingBag },
  { text: 'Electronics', to: '/products/electronics' },
  { text: 'Computers', icon: IconDesktopComputer }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Item Template</h3>

        <p>
            Breadcrumb with custom templates for items and separators.
        </p>

        <card-docs>
            <div class="p-4">
                <c-breadcrumb :items="basicItems">
                    <template #separator>
                        <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                    </template>
                    <template #item="{ item, isLast, index }">
                        <span v-if="isLast"
                            class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md">
                            {{ item.text }}
                        </span>
                        <router-link v-else :to="item.to || '#'"
                            class="px-2 py-1 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md text-gray-600 dark:text-gray-300">
                            {{ item.text }}
                        </router-link>
                    </template>
                </c-breadcrumb>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
  &lt;c-breadcrumb :items="basicItems"&gt;
    &lt;template #separator&gt;
      &lt;icon-chevron-right class="h-4 w-4 text-gray-400" /&gt;
    &lt;/template&gt;
    &lt;template #item="{ item, isLast, index }"&gt;
      &lt;span v-if="isLast" class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md"&gt;
        &#223;&#223; item.text &#225;&#225;
      &lt;/span&gt;
      &lt;router-link
        v-else
        :to="item.to || '#'"
        class="px-2 py-1 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md text-gray-600 dark:text-gray-300"
      &gt;
        &#223;&#223; item.text &#225;&#225;
      &lt;/router-link&gt;
    &lt;/template&gt;
  &lt;/c-breadcrumb&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import CBreadcrumb from '@components/layout/CBreadcrumb.vue';
import IconChevronRight from '@components/icons/IconChevronRight.vue';

const basicItems = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/products' },
  { text: 'Laptops' }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Avatar" previousLink="/avatar" next="Card" nextLink="/card" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from '../../layout/BaseLayout.vue';
import CardDocs from '../../components/CardDocs.vue';
import TableDocs from '../../components/TableDocs.vue';
import PagePagination from "../../layout/PagePagination.vue";
import CBreadcrumb from '@components/layout/CBreadcrumb.vue';
import IconHome from '@components/icons/IconHome.vue';
import IconShoppingBag from '@components/icons/IconShoppingBag.vue';
import IconChevronRight from '@components/icons/IconChevronRight.vue';

const basicItems = [
    { text: 'Home', to: '/' },
    { text: 'Products', to: '/products' },
    { text: 'Laptops' }
];

const iconItems = [
    { text: 'Products', to: '/products' },
    { text: 'Electronics', to: '/products/electronics' },
    { text: 'Computers' }
];

const dropdownItems = [
    { text: 'Home', to: '/' },
    {
        text: 'Products',
        to: '/products',
        dropdown: {
            options: [
                { value: 'electronics', label: 'Electronics' },
                { value: 'clothing', label: 'Clothing' },
                { value: 'furniture', label: 'Furniture' }
            ]
        }
    },
    {
        text: 'Electronics',
        to: '/products/electronics',
        dropdown: {
            options: [
                { value: 'computers', label: 'Computers' },
                { value: 'phones', label: 'Phones' },
                { value: 'accessories', label: 'Accessories' }
            ]
        }
    },
    { text: 'Laptops' }
];
</script>
