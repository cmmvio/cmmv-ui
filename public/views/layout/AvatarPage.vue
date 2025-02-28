<template>
    <BaseLayout>
        <h1>Avatar</h1>

        <p>
            The <code>CAvatar (alias: c-avatar)</code> component provides a customizable and responsive way to display user avatars.
            It supports images, icons, and text initials with various styling options for size, shape, and colors.
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
                    <td class="border-b px-4 py-2">src</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        The <code>src</code> prop defines the image URL for the avatar. If not provided, initials or a slot can be used as a fallback.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">alt</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Avatar'</td>
                    <td class="border-b px-4 py-2">
                        Specifies the alt text for the avatar image, improving accessibility.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">String/Object</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">
                        Defines an icon to display inside the avatar if no image is provided.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">initials</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        Displays text initials in the avatar as a fallback when no image or icon is provided.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'md'</td>
                    <td class="border-b px-4 py-2">
                        Specifies the size of the avatar. Available options are <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>2xl</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'full'</td>
                    <td class="border-b px-4 py-2">
                        Controls the border radius of the avatar. Options include <code>none</code>, <code>md</code>, and <code>full</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'bg-gray-300'</td>
                    <td class="border-b px-4 py-2">
                        Sets the background color of the avatar when displaying initials or an icon.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        Adds a border around the avatar with a customizable color.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Usage</h3>

        <p>
            The basic example showcases an avatar displaying an image. When the <code>src</code> prop is provided, the image is displayed inside the avatar container.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-avatar
                    alt="User Avatar"
                    size="lg"
                />

                <c-avatar
                    alt="User Avatar"
                    rounded="md"
                    size="lg"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-avatar
        alt="User Avatar"
        size="lg"
    /&gt;

    &lt;c-avatar
        alt="User Avatar"
        rounded="md"
        size="lg"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Avatar with Initials</h3>

        <p>
            When no image is provided, the <code>initials</code> prop can be used to display the user's initials. This is particularly useful for fallback designs.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-avatar initials="EY" bgColor="bg-blue-500" size="md" class="m-auto" />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-avatar
        initials="EY"
        bgColor="bg-blue-500"
        size="md"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Advanced Example</h3>

        <p>
            This example demonstrates a combination of the <code>CAvatar</code> component with other elements. It highlights how avatars can be integrated into user profiles or interactive designs.
        </p>

        <card-docs>
            <div class="flex items-center space-x-4">
                <c-avatar
                    src="https://i.pravatar.cc/150?img=3"
                    alt="User Avatar"
                    size="lg"
                    borderColor="border-2 border-blue-500"
                />
                <div>
                    <div class="font-bold text-lg">John Doe</div>
                    <div class="text-sm opacity-75">Software Engineer</div>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="flex items-center space-x-4"&gt;
        &lt;c-avatar
            src="https://example.com/avatar.jpg"
            alt="User Avatar"
            size="lg"
            borderColor="border-2 border-blue-500"
        /&gt;
        &lt;div&gt;
            &lt;div class="font-bold text-lg"&gt;John Doe&lt;/div&gt;
            &lt;div class="text-sm opacity-75"&gt;Software Engineer&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Dot Indicator</h3>

        <p>
            The <code>dotIndicator</code> feature allows you to display a small status indicator at the bottom right of the avatar.
            This is useful for showing a user's availability in chat applications, dashboards, or contact lists.
        </p>

        <ul>
            <li><strong><code>online</code></strong> Displays a green dot, indicating the user is online.</li>
            <li><strong><code>busy</code></strong> Displays a red dot, indicating the user is busy.</li>
            <li><strong><code>offline</code></strong> Displays a gray dot, indicating the user is offline.</li>
            <li><strong><code>custom</code></strong> Allows customizing the dot color using TailwindCSS classes.</li>
        </ul>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-avatar
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User Avatar"
                    size="lg"
                    borderColor="border-2 border-blue-500"
                    dotIndicator="online"
                />

                <c-avatar
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User Avatar"
                    size="lg"
                    borderColor="border-2 border-blue-500"
                    dotIndicator="busy"
                />

                <c-avatar
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User Avatar"
                    size="lg"
                    borderColor="border-2 border-blue-500"
                    dotIndicator="offline"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-avatar
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
        size="lg"
        borderColor="border-2 border-blue-500"
        dotIndicator="online"
    /&gt;

    &lt;c-avatar
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
        size="lg"
        borderColor="border-2 border-blue-500"
        dotIndicator="busy"
    /&gt;

    &lt;c-avatar
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
        size="lg"
        borderColor="border-2 border-blue-500"
        dotIndicator="offline"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Stacked</h3>

        <p>
            The <code>stacked</code> option allows multiple avatars to be displayed in an overlapping format, creating a group effect.
            This is ideal for representing teams, participants, or social interactions.
        </p>

        <card-docs>
            <div class="flex items-center justify-center gap-x-4">
                <c-avatar
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User Avatar"
                    size="lg"
                    borderColor="border-2 border-blue-500"
                    stacked
                >
                    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://i.pravatar.cc/150?img=1" alt="">
                    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://i.pravatar.cc/150?img=2" alt="">
                    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://i.pravatar.cc/150?img=3" alt="">
                    <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://i.pravatar.cc/150?img=4" alt="">
                    <div class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full dark:border-gray-800">+99</div>
                </c-avatar>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="flex items-center justify-center"&gt;
        &lt;c-avatar stacked&gt;
            &lt;img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="https://i.pravatar.cc/150?img=1"
                alt=""
            &gt;
            &lt;img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="https://i.pravatar.cc/150?img=2"
                alt=""
            &gt;
            &lt;img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="https://i.pravatar.cc/150?img=3"
                alt=""
            &gt;
            &lt;img
                class="w-10 h-10 border-2 border-white rounded-full"
                src="https://i.pravatar.cc/150?img=4"
                alt=""
            &gt;
            &lt;div
                class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full dark:border-gray-800"
            &gt;
                +99
            &lt;/div&gt;
        &lt;/c-avatar&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Alert"
            previousLink="/alert"
            next="Card"
            nextLink="/card"
        />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import TableDocs from "../../components/TableDocs.vue";
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
