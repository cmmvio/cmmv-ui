<template>
    <BaseLayout>
        <h1>List</h1>

        <p>
            The <code>CList</code> (alias: <code>c-list</code>) component provides a flexible way to render lists dynamically.
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
                <tr>
                    <td class="border-b px-4 py-2">itemPadding</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"py-5"</td>
                    <td class="border-b px-4 py-2">Controls the padding of each list item.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">customClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Additional CSS classes to apply to the list container.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The following example demonstrates how to use the <code>CList</code> component to display a simple list of items.
            The list items are passed via <code>modelValue</code>, and each item is rendered dynamically using the default slot.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
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
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
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
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Fixed Width/Height</h3>

        <p>
            The <code>CList</code> component can be customized with specific dimensions using the <code>width</code> and <code>height</code> props.
            This is particularly useful when you want to create scrollable lists with a fixed size, such as in sidebars or panels.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-list
                    v-model="items"
                    height="h-[400px]"
                    width="md:w-full w-3/6 m-auto"
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
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-list
        v-model="items"
        height="h-[400px]"
        width="w-full md:w-3/6"
        class="bg-white dark:bg-neutral-800 py-2 px-4 m-2 shadow border dark:border-neutral-900"
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
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Styling</h3>

        <p>
            The <code>CList</code> component offers extensive customization options through props like <code>rounded</code>, <code>shadow</code>, and <code>divideColor</code>.
            These props allow you to tailor the appearance of your lists to match your application's design system.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-list
                    v-model="topThreeItems"
                    rounded="rounded-xl"
                    shadow="shadow-lg"
                    divideColor="divide-blue-100 dark:divide-blue-900"
                    class="bg-blue-50 dark:bg-blue-950 py-2 px-4 m-2 border border-blue-200 dark:border-blue-800"
                >
                    <template v-slot="{ item }">
                        <div class="w-full flex items-center py-2">
                            <img class="size-10 flex-none rounded-full bg-neutral-500 mr-3" :src="item.imageUrl" alt="" />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold text-blue-900 dark:text-blue-200">{{ item.name }}</p>
                                <p class="text-xs text-blue-700 dark:text-blue-400">{{ item.email }}</p>
                            </div>
                        </div>
                    </template>
                </c-list>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-list
        v-model="topThreeItems"
        rounded="rounded-xl"
        shadow="shadow-lg"
        divideColor="divide-blue-100 dark:divide-blue-900"
        class="bg-blue-50 dark:bg-blue-950 py-2 px-4 m-2 border border-blue-200 dark:border-blue-800"
    &gt;
        &lt;template v-slot="{ item }"&gt;
            &lt;div class="w-full flex items-center py-2"&gt;
                &lt;img class="size-10 flex-none rounded-full bg-neutral-500 mr-3" :src="item.imageUrl" alt="" /&gt;
                &lt;div class="min-w-0 flex-auto"&gt;
                    &lt;p class="text-sm font-semibold text-blue-900 dark:text-blue-200"&gt;&#123;&#123; item.name &#125;&#125;&lt;/p&gt;
                    &lt;p class="text-xs text-blue-700 dark:text-blue-400"&gt;&#123;&#123; item.email &#125;&#125;&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-list&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from "vue";

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
]);

// Computed properties for filtered items
const topThreeItems = computed(() => items.value.slice(0, 3));

// Adicionar a variável chatContacts para o exemplo do WhatsApp
const chatContacts = ref([
  {
    id: 1,
    name: 'Maria Silva',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    lastMessage: 'Olá! Como você está?',
    time: '10:30',
    online: true,
    unread: 2
  },
  {
    id: 2,
    name: 'João Oliveira',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'Vamos nos encontrar amanhã?',
    time: '09:15',
    online: false,
    unread: 0
  },
  {
    id: 3,
    name: 'Ana Souza',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMessage: 'Obrigada pela ajuda!',
    time: 'Ontem',
    online: true,
    unread: 0
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    lastMessage: 'Você viu o novo filme?',
    time: 'Ontem',
    online: false,
    unread: 3
  },
  {
    id: 5,
    name: 'Grupo Família',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1057/1057089.png',
    lastMessage: 'Mãe: Alguém vai passar lá hoje?',
    time: 'Seg',
    online: false,
    unread: 5
  },
  {
    id: 6,
    name: 'Pedro Santos',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    lastMessage: 'Preciso da sua ajuda com um projeto',
    time: 'Seg',
    online: true,
    unread: 0
  },
  {
    id: 7,
    name: 'Juliana Costa',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    lastMessage: 'Vamos marcar aquele café?',
    time: '23/05',
    online: false,
    unread: 0
  },
  {
    id: 8,
    name: 'Roberto Almeida',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    lastMessage: 'Os documentos estão prontos',
    time: '22/05',
    online: false,
    unread: 0
  },
  {
    id: 9,
    name: 'Grupo Trabalho',
    avatar: 'https://cdn-icons-png.flaticon.com/512/166/166258.png',
    lastMessage: 'Chefe: Reunião amanhã às 9h',
    time: '21/05',
    online: false,
    unread: 1
  },
  {
    id: 10,
    name: 'Fernanda Lima',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    lastMessage: 'Obrigada pelo convite!',
    time: '20/05',
    online: true,
    unread: 0
  }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Interactive List Items</h3>

        <p>
            You can create interactive lists by adding event handlers and interactive elements to your list items.
            This example demonstrates how to implement clickable list items with hover effects and action buttons.
        </p>

        <card-docs>
            <div class="w-full max-w-[780px] mx-auto">
                <c-list
                    v-model="topThreeItems"
                    class="w-full"
                >
                    <template v-slot="{ item }">
                        <div class="w-full flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors cursor-pointer">
                            <div class="flex min-w-0 gap-x-4">
                                <img class="size-12 flex-none rounded-full bg-neutral-500" :src="item.imageUrl" alt="" />
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm/6 font-semibold text-neutral-900 dark:text-neutral-200">{{ item.name }}</p>
                                    <p class="mt-1 truncate text-xs/5 text-neutral-500 dark:text-neutral-500">{{ item.email }}</p>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <c-button size="sm" variant="outline">View</c-button>
                                <c-button size="sm" variant="outline" bgColor="bg-red-50" textColor="text-red-600">Delete</c-button>
                            </div>
                        </div>
                    </template>
                </c-list>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-list
        v-model="topThreeItems"
        class="w-full"
    &gt;
        &lt;template v-slot="{ item }"&gt;
            &lt;div
                class="w-full flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors cursor-pointer"
                @click="viewItem(item)"
            &gt;
                &lt;div class="flex min-w-0 gap-x-4"&gt;
                    &lt;img class="size-12 flex-none rounded-full bg-neutral-500" :src="item.imageUrl" alt="" /&gt;
                    &lt;div class="min-w-0 flex-auto"&gt;
                        &lt;p class="text-sm/6 font-semibold text-neutral-900 dark:text-neutral-200"&gt;&#123;&#123; item.name &#125;&#125;&lt;/p&gt;
                        &lt;p class="mt-1 truncate text-xs/5 text-neutral-500 dark:text-neutral-500"&gt;&#123;&#123; item.email &#125;&#125;&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="flex space-x-2"&gt;
                    &lt;c-button size="sm" variant="outline" @click.stop="viewItem(item)"&gt;View&lt;/c-button&gt;
                    &lt;c-button
                        size="sm"
                        variant="outline"
                        bgColor="bg-red-50"
                        textColor="text-red-600"
                        @click.stop="deleteItem(item)"
                    &gt;
                        Delete
                    &lt;/c-button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-list&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from "vue";
import { CList, CButton } from "@cmmv/ui";

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
]);

// Computed properties for filtered items
const topThreeItems = computed(() => items.value.slice(0, 3));

const viewItem = (item) => {
    console.log('View item:', item);
    // Implement view functionality
};

const deleteItem = (item) => {
    console.log('Delete item:', item);
    // Implement delete functionality with confirmation
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>WhatsApp Style Chat Interface</h3>

        <p>
            Este exemplo demonstra como criar uma interface inspirada no WhatsApp Web usando os componentes do projeto.
            A combinação de <code>CList</code> e <code>CCard</code> permite criar um layout de chat simples e eficiente.
        </p>

        <card-docs>
            <div class="w-full max-w-[900px] mx-auto">
                <div class="flex h-[600px] border dark:border-neutral-800 rounded-lg overflow-hidden shadow-lg">
                    <!-- Painel de contatos (lado esquerdo) -->
                    <div class="w-2/5 flex flex-col border-r dark:border-neutral-800">
                        <!-- Cabeçalho do painel de contatos -->
                        <div class="bg-emerald-700 dark:bg-emerald-800 text-white p-2 flex justify-between items-center">
                            <div class="flex items-center">
                                <img class="size-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Seu perfil" />
                            </div>
                            <div class="flex space-x-3">
                                <button class="focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button class="focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Barra de pesquisa -->
                        <div class="bg-emerald-50 dark:bg-neutral-800 p-2">
                            <div class="relative">
                                <input
                                    type="text"
                                    placeholder="Pesquisar contatos"
                                    class="w-full p-1.5 pl-7 text-sm rounded-lg bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-2 top-2 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <!-- Lista de contatos -->
                        <div class="flex-1 overflow-y-auto bg-white dark:bg-neutral-900">
                            <c-list
                                v-model="chatContacts"
                                class="w-full"
                                divideColor="divide-neutral-100 dark:divide-neutral-800"
                                shadow="shadow-none"
                                itemPadding="py-2"
                            >
                                <template v-slot="{ item }">
                                    <div class="flex items-center px-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer w-full">
                                        <div class="relative">
                                            <img class="size-10 rounded-full mr-3" :src="item.avatar" alt="" />
                                            <div v-if="item.online" class="absolute bottom-0 right-2 size-2.5 bg-green-500 rounded-full border-2 border-white dark:border-neutral-900"></div>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <div class="flex justify-between items-center">
                                                <p class="font-medium text-sm text-neutral-900 dark:text-neutral-100">{{ item.name }}</p>
                                                <span class="text-xs text-neutral-500">{{ item.time }}</span>
                                            </div>
                                            <p class="text-xs text-neutral-500 truncate">{{ item.lastMessage }}</p>
                                        </div>
                                        <div v-if="item.unread" class="ml-2">
                                            <c-badge color="bg-green-500" textColor="text-white" class="rounded-full px-1.5 py-0.5 text-xs">{{ item.unread }}</c-badge>
                                        </div>
                                    </div>
                                </template>
                            </c-list>
                        </div>
                    </div>

                    <!-- Painel de chat (lado direito) -->
                    <div class="w-3/5 flex flex-col">
                        <!-- Cabeçalho do chat -->
                        <div class="bg-emerald-50 dark:bg-neutral-800 p-2 flex justify-between items-center border-b dark:border-neutral-700">
                            <div class="flex items-center">
                                <img class="size-9 rounded-full mr-3"
                                     :src="chatContacts && chatContacts.length > 0 ? chatContacts[0].avatar : ''"
                                     alt="" />
                                <div>
                                    <p class="font-medium text-sm text-neutral-900 dark:text-neutral-100">{{ chatContacts && chatContacts.length > 0 ? chatContacts[0].name : 'Usuário' }}</p>
                                    <p class="text-xs text-neutral-500">online</p>
                                </div>
                            </div>
                            <div class="flex space-x-4">
                                <button class="text-neutral-600 dark:text-neutral-300 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                    </svg>
                                </button>
                                <button class="text-neutral-600 dark:text-neutral-300 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </button>
                                <button class="text-neutral-600 dark:text-neutral-300 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Área de mensagens -->
                        <div class="flex-1 overflow-y-auto p-4 bg-neutral-100 dark:bg-neutral-900 relative">
                            <!-- Padrão de fundo do WhatsApp -->
                            <div class="absolute inset-0 opacity-10 dark:opacity-5 "  style="background-image: url('https://camo.githubusercontent.com/ebf18cd85f7aa9dc79fb74c58dc94febf3a6441d8d689cd5a400b2707e19ec0e/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67'); background-repeat: repeat;"></div>

                            <!-- Mensagens -->
                            <div class="space-y-3 relative z-10">
                                <!-- Mensagem recebida -->
                                <div class="flex items-end">
                                    <img
                                        class="size-7 rounded-full mr-2"
                                        :src="chatContacts && chatContacts.length > 0 ? chatContacts[0].avatar : ''"
                                        alt=""
                                    />
                                    <div class="bg-white dark:bg-neutral-700 rounded-lg rounded-bl-none p-2 max-w-[70%] shadow-sm">
                                        <p class="text-sm text-neutral-800 dark:text-neutral-200">Olá! Como você está?</p>
                                        <p class="text-[10px] text-neutral-500 text-right mt-1">10:30</p>
                                    </div>
                                </div>

                                <!-- Mensagem enviada -->
                                <div class="flex items-end justify-end">
                                    <div class="bg-green-100 dark:bg-green-800 rounded-lg rounded-br-none p-2 max-w-[70%] shadow-sm">
                                        <p class="text-sm text-neutral-800 dark:text-neutral-200">Estou bem, obrigado! E você?</p>
                                        <div class="flex justify-end items-center mt-1">
                                            <p class="text-[10px] text-neutral-500 mr-1">10:32</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!-- Outra mensagem recebida -->
                                <div class="flex items-end">
                                    <img
                                        class="size-7 rounded-full mr-2"
                                        :src="chatContacts && chatContacts.length > 0 ? chatContacts[0].avatar : ''"
                                        alt=""
                                    />
                                    <div class="bg-white dark:bg-neutral-700 rounded-lg rounded-bl-none p-2 max-w-[70%] shadow-sm">
                                        <p class="text-sm text-neutral-800 dark:text-neutral-200">Tudo ótimo! Vamos usar o componente CList para criar uma interface de chat.</p>
                                        <p class="text-[10px] text-neutral-500 text-right mt-1">10:33</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Área de digitação -->
                        <div class="bg-emerald-50 dark:bg-neutral-800 p-2 flex items-center">
                            <button class="text-neutral-600 dark:text-neutral-300 mr-2 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button class="text-neutral-600 dark:text-neutral-300 mr-2 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4a.5.5 0 01-.5-.5v-6.813l2.146 3.219a.5.5 0 00.708.114l3.246-2.599 3.4 5.1a.5.5 0 00.7.1l3.3-2.633V14.5a.5.5 0 01-.5.5z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                placeholder="Digite uma mensagem"
                                class="flex-1 p-1.5 rounded-lg bg-white dark:bg-neutral-900 text-sm text-neutral-800 dark:text-neutral-200 focus:outline-none"
                            >
                            <button class="text-emerald-600 dark:text-emerald-400 ml-2 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">// Código removido para focar apenas no preview</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Tooltip"
            previousLink="/tooltip"
            next="Pagination"
            nextLink="/pagination"
        />
    </BaseLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
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
]);

// Computed properties for filtered items
const topThreeItems = computed(() => items.value.slice(0, 3));

// Adicionar a variável chatContacts para o exemplo do WhatsApp
const chatContacts = ref([
  {
    id: 1,
    name: 'Maria Silva',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    lastMessage: 'Olá! Como você está?',
    time: '10:30',
    online: true,
    unread: 2
  },
  {
    id: 2,
    name: 'João Oliveira',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'Vamos nos encontrar amanhã?',
    time: '09:15',
    online: false,
    unread: 0
  },
  {
    id: 3,
    name: 'Ana Souza',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMessage: 'Obrigada pela ajuda!',
    time: 'Ontem',
    online: true,
    unread: 0
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    lastMessage: 'Você viu o novo filme?',
    time: 'Ontem',
    online: false,
    unread: 3
  },
  {
    id: 5,
    name: 'Grupo Família',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1057/1057089.png',
    lastMessage: 'Mãe: Alguém vai passar lá hoje?',
    time: 'Seg',
    online: false,
    unread: 5
  },
  {
    id: 6,
    name: 'Pedro Santos',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    lastMessage: 'Preciso da sua ajuda com um projeto',
    time: 'Seg',
    online: true,
    unread: 0
  },
  {
    id: 7,
    name: 'Juliana Costa',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    lastMessage: 'Vamos marcar aquele café?',
    time: '23/05',
    online: false,
    unread: 0
  },
  {
    id: 8,
    name: 'Roberto Almeida',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    lastMessage: 'Os documentos estão prontos',
    time: '22/05',
    online: false,
    unread: 0
  },
  {
    id: 9,
    name: 'Grupo Trabalho',
    avatar: 'https://cdn-icons-png.flaticon.com/512/166/166258.png',
    lastMessage: 'Chefe: Reunião amanhã às 9h',
    time: '21/05',
    online: false,
    unread: 1
  },
  {
    id: 10,
    name: 'Fernanda Lima',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    lastMessage: 'Obrigada pelo convite!',
    time: '20/05',
    online: true,
    unread: 0
  }
]);
</script>
