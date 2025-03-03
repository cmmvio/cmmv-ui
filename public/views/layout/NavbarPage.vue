<template>
    <BaseLayout>
        <h1>Navbar</h1>

        <p>
            The <code>CNavbar</code> component offers a flexible navigation menu that can function in both horizontal
            and vertical modes, with support for dropdowns and submenus.
        </p>

        <div class="alert alert-info mt-4 mb-6">
            <p><strong>Note:</strong> The <code>CNavbar</code> is strictly a navigation menu component. For a complete
                application header, use it in combination with <code>CToolbar</code>. For a sidebar, use it within a
                sidebar container.</p>
        </div>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">mode</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'horizontal'</td>
                    <td class="border-b px-4 py-2">
                        The <code>mode</code> prop determines the layout orientation of the navbar. Options include
                        'horizontal' for a top navigation bar and 'vertical' for a sidebar navigation menu.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'transparent'</td>
                    <td class="border-b px-4 py-2">
                        The <code>bgColor</code> prop sets the background color of the navbar. It supports utility
                        classes or CSS color values to customize the appearance.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'#1e293b'</td>
                    <td class="border-b px-4 py-2">
                        The <code>textColor</code> prop defines the text color of navbar items, ensuring readability
                        against the background color.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hoverColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'text-blue-600'</td>
                    <td class="border-b px-4 py-2">
                        The <code>hoverColor</code> prop specifies the text color class applied when hovering over
                        navbar items, enhancing the interactive experience.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hoverBgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'bg-neutral-100'</td>
                    <td class="border-b px-4 py-2">
                        The <code>hoverBgColor</code> prop defines the background color class applied when hovering over
                        navbar items, providing visual feedback.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">activeClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'bg-blue-50 text-blue-700'</td>
                    <td class="border-b px-4 py-2">
                        The <code>activeClass</code> prop sets the CSS classes applied to active navigation items,
                        visually indicating the current section or page.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">itemClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        The <code>itemClass</code> prop allows additional CSS classes to be applied to all navigation
                        items, enabling consistent styling.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'md'</td>
                    <td class="border-b px-4 py-2">
                        The <code>size</code> prop controls the dimensions of navbar items. Options include 'sm' for
                        small, 'md' for medium, and 'lg' for large sizing.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">elevated</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">
                        When the <code>elevated</code> prop is set to true, a shadow is added to the navbar to create a
                        raised appearance, providing depth to the UI.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">border</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">
                        The <code>border</code> prop adds a border to the navbar when set to true, helping to visually
                        separate it from adjacent content.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'border-neutral-200'</td>
                    <td class="border-b px-4 py-2">
                        The <code>borderColor</code> prop sets the color class for the navbar's border when the border
                        prop is enabled.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">toggleable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">
                        When the <code>toggleable</code> prop is true, a button is displayed for mobile screens to
                        toggle the menu visibility, enhancing responsive design.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">toggleButtonClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'text-slate-700 hover:bg-neutral-100'</td>
                    <td class="border-b px-4 py-2">
                        The <code>toggleButtonClass</code> prop allows customization of the toggle button's appearance
                        through CSS classes.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">items</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">
                        The <code>items</code> prop accepts an array of objects representing navigation items, including
                        text, links, icons, and nested children for dropdowns.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showIcons</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">
                        The <code>showIcons</code> prop determines whether icons are displayed alongside navigation item
                        text when provided in the items array.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The <strong>Basic Example</strong> demonstrates the standard usage of the <code>CNavbar</code> component in
            horizontal mode, suitable for top navigation bars.
        </p>

        <card-docs>
            <div>
                <c-navbar hoverBgColor="hover:bg-neutral-100 dark:hover:bg-neutral-700" mode="horizontal"
                    :items="horizontalItems" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-navbar
  mode="horizontal"
  :items="items"
/&gt;

&lt;script setup&gt;
import IconUser from '@components/icons/IconUser.vue';
import IconStar from '@components/icons/IconStar.vue';

const items = [
  {
    text: 'Home',
    href: '#',
    icon: IconUser
  },
  {
    text: 'Components',
    icon: IconStar,
    children: [
      { text: 'Button', href: '#button' },
      { text: 'Card', href: '#card' },
      { text: 'Modal', href: '#modal' }
    ]
  },
  {
    text: 'Users',
    href: '#',
    icon: IconUser
  }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Vertical Mode</h3>

        <p>
            The <code>CNavbar</code> component can be set to vertical mode, which works well for sidebar
            menus. This example shows how to implement a vertical navigation menu.
        </p>

        <card-docs>
            <div>
                <div
                    class="flex min-h-[200px] border border-neutral-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                    <div class="w-56 bg-white dark:bg-zinc-800 border-r border-neutral-200 dark:border-zinc-700">
                        <c-navbar mode="vertical" :items="verticalItems" />
                    </div>
                    <div class="flex-1 bg-slate-50 dark:bg-neutral-900 flex justify-center items-center">
                        <p class="text-slate-700 dark:text-slate-200">Content area</p>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="sidebar-container"&gt;
  &lt;c-navbar
    mode="vertical"
    :items="items"
  /&gt;
&lt;/div&gt;

&lt;script setup&gt;
import IconUser from '@components/icons/IconUser.vue';
import IconStar from '@components/icons/IconStar.vue';

const items = [
  {
    text: 'Home',
    href: '#',
    icon: IconUser
  },
  {
    text: 'Components',
    icon: IconStar,
    children: [
      { text: 'Button', href: '#button' },
      { text: 'Card', href: '#card' },
      { text: 'Modal', href: '#modal' }
    ]
  },
  {
    text: 'Users',
    href: '#',
    icon: IconUser,
    active: true
  }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Dropdowns and Submenus</h3>

        <p>
            The <code>CNavbar</code> component supports dropdown menus in horizontal mode and submenus in vertical mode.
            This example demonstrates how to configure navigation items with nested children for structured content
            organization.
        </p>

        <card-docs>
            <div class="mb-6 h-[200px]">
                <div>
                    <c-navbar mode="horizontal" :items="dropdownItems" />
                </div>

            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-navbar
  mode="horizontal"
  :items="items"
/&gt;

&lt;script setup&gt;
const items = [
  {
    text: 'Home',
    href: '#',
    icon: IconUser
  },
  {
    text: 'Components',
    icon: IconStar,
    children: [
      { text: 'Button', href: '#button' },
      { text: 'Card', href: '#card' },
      { text: 'Modal', href: '#modal' }
    ]
  },
  {
    text: 'Users',
    href: '#',
    icon: IconUser
  }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Themes and Colors</h3>

        <p>
            The <code>CNavbar</code> component can be customized with different colors and themes to match your
            application's
            design.
            This example shows how to apply custom background colors, text colors, and hover effects.
        </p>

        <card-docs>
            <div class="rounded-md">
                <c-navbar mode="horizontal" :items="horizontalItems" bgColor="#4f46e5" textColor="#ffffff"
                    hoverColor="text-white" hoverBgColor="hover:bg-indigo-700" activeClass="bg-indigo-800 text-white"
                    class="rounded-md p-4" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-navbar
  mode="horizontal"
  :items="items"
  bgColor="#4f46e5"
  textColor="#ffffff"
  hoverColor="text-white"
  hoverBgColor="bg-indigo-700"
  activeClass="bg-indigo-800 text-white"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Integration with Toolbar</h3>

        <p>
            For a complete application header, the <code>CNavbar</code> component can be integrated with
            <code>CToolbar</code>.
            This example demonstrates how to combine these components to create a professional navigation header.
        </p>

        <card-docs>
            <div>
                <c-toolbar class="bg-blue-600 text-white rounded-t-md shadow-md">
                    <c-app-bar-nav />
                    <c-toolbar-title>My App</c-toolbar-title>
                    <c-spacer />

                    <div class="relative">
                        <c-navbar mode="horizontal" textColor="text-white" hoverColor="text-white"
                            hoverBgColor="hover:bg-blue-700" :items="horizontalItems" />
                    </div>
                </c-toolbar>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-toolbar&gt;
  &lt;div class="flex items-center justify-between w-full"&gt;
    &lt;div class="font-semibold text-lg"&gt;CMMV UI&lt;/div&gt;
    &lt;c-navbar
      mode="horizontal"
      :items="items"
    /&gt;
    &lt;div class="flex items-center space-x-2"&gt;
      &lt;button class="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700"&gt;
        &lt;icon-user class="w-5 h-5" /&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/c-toolbar&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Item Format</h3>

        <p class="mb-4">The <code>items</code> prop expects an array of objects with the following format:</p>

        <!-- prettier-ignore -->
        <card-docs>
            <template #code>
                <pre><code class="language-js">{
    text: 'Home', // Required: Display text
    href: '/home', // Optional: Link URL
    icon: IconComponent, // Optional: Icon component
    active: false, // Optional: Whether item is active
    class: '', // Optional: Additional CSS classes
    title: 'Go home', // Optional: Tooltip text
    children: [ // Optional: For dropdown/submenu
        {
            text: 'Profile',
            href: '/profile',
            icon: IconProfile,
            active: false
        }
    ]
}</code></pre>
            </template>
        </card-docs>

        <h3>Navbar with Sidebar and Toolbar</h3>

        <p>
            This example demonstrates how to integrate a vertical <code>CNavbar</code> within a <code>CSidebar</code>
            component
            along with a <code>CToolbar</code>. This pattern is commonly used for application layouts with collapsible
            navigation menus.
        </p>

        <card-docs>
            <div
                class="relative mx-auto flex flex-col items-center w-full min-h-[400px] overflow-hidden p-4 rounded-md">
                <div
                    class="bg-neutral-100 dark:bg-neutral-800 min-h-[400px] max-w-[600px] flex flex-col sm:w-full m-auto relative overflow-hidden">

                    <c-sidebar v-model="showSidebarNavbar" absolute shadow="" width="w-64"
                        class="w-full rounded-none overflow-hidden" bgColor="bg-white dark:bg-zinc-800">
                        <template #title>Navigation</template>
                        <c-navbar mode="vertical" :items="verticalItems" />
                    </c-sidebar>

                    <c-toolbar class="bg-blue-600 text-white shadow-md">
                        <c-app-bar-nav @click="showSidebarNavbar = true" />
                        <c-toolbar-title>Application</c-toolbar-title>
                        <c-spacer />

                        <c-button type="button" variant="plain" rounded="full" bgColor="bg-blue-600 hover:bg-blue-800"
                            class="py-1">
                            <IconUser class="text-white h-5 w-5" />
                        </c-button>
                    </c-toolbar>

                    <div class="flex-1 p-4 flex items-center justify-center">
                        <p class="text-neutral-700 dark:text-neutral-300">Content area</p>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;div class="app-container relative overflow-hidden"&gt;
    &lt;c-sidebar
      v-model="showSidebar"
      absolute
      width="w-64"
      bgColor="bg-white dark:bg-zinc-800"
    &gt;
      &lt;template #title&gt;Navigation&lt;/template&gt;
      &lt;c-navbar
        mode="vertical"
        :items="navItems"
      /&gt;
    &lt;/c-sidebar&gt;

    &lt;c-toolbar class="bg-blue-600 text-white shadow-md"&gt;
      &lt;c-app-bar-nav @click="showSidebar = true" /&gt;
      &lt;c-toolbar-title&gt;Application&lt;/c-toolbar-title&gt;
      &lt;c-spacer /&gt;

      &lt;c-button
        type="button"
        variant="plain"
        rounded="full"
        bgColor="bg-blue-600 hover:bg-blue-800"
        class="py-1"
      &gt;
        &lt;IconUser class="text-white h-5 w-5" /&gt;
      &lt;/c-button&gt;
    &lt;/c-toolbar&gt;

    &lt;div class="content-area p-4"&gt;
      &lt;!-- Your application content here --&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import IconUser from '@components/icons/IconUser.vue';
import IconStar from '@components/icons/IconStar.vue';

const showSidebar = ref(false);

const navItems = [
  {
    text: 'Dashboard',
    href: '#',
    icon: IconUser,
    active: true
  },
  {
    text: 'Components',
    icon: IconStar,
    children: [
      { text: 'Button', href: '#button' },
      { text: 'Card', href: '#card' },
      { text: 'Modal', href: '#modal' }
    ]
  },
  {
    text: 'Users',
    href: '#',
    icon: IconUser
  }
];

const showSidebarNavbar = ref(false);

// ... existing code ...
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>


        <PagePagination previous="Dropdown" previousLink="/dropdown" next="Sidebar" nextLink="/sidebar" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconUser from "@components/icons/IconUser.vue";
import IconStar from "@components/icons/IconStar.vue";
import IconHeart from "@components/icons/IconHeart.vue";


const horizontalItems = [
    {
        text: 'Home',
        href: '#',
        icon: IconUser
    },
    {
        text: 'Documentation',
        href: '#docs',
        icon: IconStar
    },
    {
        text: 'Users',
        href: '#users',
        icon: IconUser
    }
];

const dropdownItems = [
    {
        text: 'Home',
        href: '#',
        icon: IconUser
    },
    {
        text: 'Components',
        icon: IconStar,
        children: [
            { text: 'Button', href: '#button' },
            { text: 'Card', href: '#card' },
            { text: 'Modal', href: '#modal' },
            { text: 'Navbar', href: '#navbar' }
        ]
    },
    {
        text: 'Users',
        href: '#',
        icon: IconUser
    }
];

const verticalItems = [
    {
        text: 'Home',
        href: '#',
        icon: IconUser
    },
    {
        text: 'Components',
        icon: IconStar,
        children: [
            { text: 'Button', href: '#button' },
            { text: 'Card', href: '#card' },
            { text: 'Modal', href: '#modal' }
        ]
    },
    {
        text: 'Users',
        href: '#users',
        icon: IconUser,
        active: true
    },
    {
        text: 'Favorites',
        href: '#favorites',
        icon: IconHeart
    }
];

const showSidebarNavbar = ref(false);
</script>
