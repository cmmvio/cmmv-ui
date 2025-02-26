<template>
    <BaseLayout>
        <h1>List</h1>

        <p>
            The <code>CList</code> component provides a flexible way to render lists dynamically.
            It supports custom styling, shadow effects, and dividers between items, making it ideal for displaying structured data
            such as user lists, notifications, or interactive content.
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
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Defines the list items that will be rendered. Each item can be accessed in the slot.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"rounded-md"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the list container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">shadow</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"shadow-md"</td>
                    <td class="border-b px-4 py-2">Adds a shadow effect to the list container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">divideColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"divide-neutral-200 dark:divide-neutral-900"</td>
                    <td class="border-b px-4 py-2">Defines the divider color between items.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">width</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"w-full"</td>
                    <td class="border-b px-4 py-2">Sets the width of the list container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"h-auto"</td>
                    <td class="border-b px-4 py-2">Sets the height of the list container.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The following example demonstrates how to use the <code>CList</code> component to display a simple list of items.
            The list items are passed via <code>modelValue</code>, and each item is rendered dynamically using the default slot.
        </p>

        <c-card
            variant="flat"
            class="mx-auto px-4 flex flex-col items-center space-y-4"
        >
            <c-list v-model="items" class="w-full">
                <template v-slot="{ item }">
                    <div class="w-full flex justify-between">
                        <div class="flex min-w-0 gap-x-4">
                            <img class="size-12 flex-none rounded-full bg-neutral-500" :src="item.imageUrl" alt="" />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm/6 font-semibold text-neutral-900 dark:text-neutral-200">{{ item.name }}</p>
                                <p class="mt-1 truncate text-xs/5 text-neutral-500 dark:text-neutral-500">{{ item.email }}</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="text-sm/6 text-neutral-900 dark:text-neutral-200">{{ item.role }}</p>

                            <p v-if="item.lastSeen" class="mt-1 text-xs/5 text-gray-500">
                                Last seen <time :datetime="item.lastSeenDateTime">{{ item.lastSeen }}</time>
                            </p>

                            <div v-else class="mt-1 flex items-center gap-x-1.5">
                                <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div class="size-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p class="text-xs/5 text-gray-500">Online</p>
                            </div>
                        </div>
                    </div>
                </template>
            </c-list>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-list v-model="items" class="w-full"&gt;
        &lt;template v-slot="{ item }"&gt;
            &lt;div class="w-full flex justify-between"&gt;
                &lt;div class="flex min-w-0 gap-x-4"&gt;
                    &lt;img
                        class="size-12 flex-none rounded-full bg-neutral-500"
                        :src="item.imageUrl"
                        alt=""
                    /&gt;
                    &lt;div class="min-w-0 flex-auto"&gt;
                        &lt;p class="text-sm/6 font-semibold text-neutral-900 dark:text-neutral-200"&gt;&#123;&#123; item.name &#125;&#125;&lt;/p&gt;
                        &lt;p class="mt-1 truncate text-xs/5 text-neutral-500 dark:text-neutral-500"&gt;&#123;&#123; item.email &#125;&#125;&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end"&gt;
                    &lt;p class="text-sm/6 text-neutral-900 dark:text-neutral-200"&gt;
                        &#123;&#123; item.role &#125;&#125;
                    &lt;/p&gt;

                    &lt;p
                        v-if="item.lastSeen"
                        class="mt-1 text-xs/5 text-gray-500"
                    &gt;
                        Last seen &lt;time
                            :datetime="item.lastSeenDateTime"&gt;&#123;&#123;
                            item.lastSeen &#125;&#125;
                        &lt;/time&gt;
                    &lt;/p&gt;

                    &lt;div v-else class="mt-1 flex items-center gap-x-1.5"&gt;
                        &lt;div
                            class="flex-none rounded-full bg-emerald-500/20 p-1"
                        &gt;
                            &lt;div class="size-1.5 rounded-full bg-emerald-500" /&gt;
                        &lt;/div&gt;

                        &lt;p class="text-xs/5 text-gray-500"&gt;Online&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-list&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const items = ref([
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    }
])
&lt;/script&gt;</code>
</pre>

        <h3>Fixed Width/Height</h3>

        <p>
            The <code>CList</code> component can be customized to display more complex content, such as user lists with avatars and additional details.
            This example shows how to use slots to create a structured layout for each list item.
        </p>


        <c-card
            variant="flat"
            class="mx-auto px-4 flex flex-col items-center space-y-4"
        >
            <c-list
                v-model="items"
                height="h-[400px]"
                width="w-full md:w-3/6"
                class="bg-white dark:bg-neutral-800 py-2 px-4 m-2 shadow border dark:border-neutral-900"
            >
                <template v-slot="{ item }">
                    <div class="w-full flex justify-between">
                        <div class="flex min-w-0 gap-x-4">
                            <img class="size-12 flex-none rounded-full bg-neutral-500" :src="item.imageUrl" alt="" />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm/6 font-semibold text-neutral-900 dark:text-neutral-200">{{ item.name }}</p>
                                <p class="mt-1 truncate text-xs/5 text-neutral-500 dark:text-neutral-500">{{ item.email }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </c-list>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-list
        v-model="items"
        height="h-[400px]"
        width="w-full md:w-3/6"
        class="bg-white py-2 px-4 m-2 shadow border"
    &gt;
        &lt;template v-slot="{ item }"&gt;
            &lt;div class="w-full flex justify-between"&gt;
                &lt;div class="flex min-w-0 gap-x-4"&gt;
                    &lt;img class="size-12 flex-none rounded-full bg-neutral-500" :src="item.imageUrl" alt="" /&gt;
                    &lt;div class="min-w-0 flex-auto"&gt;
                        &lt;p class="text-sm/6 font-semibold text-neutral-900 dark:text-neutral-200"&gt;&#123;&#123; item.name &#125;&#125;&lt;/p&gt;
                        &lt;p class="mt-1 truncate text-xs/5 text-neutral-500 dark:text-neutral-500"&gt;&#123;&#123; item.email &#125;&#125;&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-list&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const items = ref([
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
]);
&lt;/script&gt;</code>
</pre>


        <PagePagination
            previous="Tooltip"
            previousLink="/tooltip"
            next="Pagination"
            nextLink="/pagination"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const items = ref([
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    }
])
</script>
