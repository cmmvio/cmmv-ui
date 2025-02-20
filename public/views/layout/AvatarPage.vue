<template>
    <BaseLayout>
        <h1>Avatar</h1>

        <p>
            The <code>CAvatar (alias: c-avatar)</code> component provides a customizable and responsive way to display user avatars. 
            It supports images, icons, and text initials with various styling options for size, shape, and colors.
        </p>

        <table class="w-full text-left border-collapse border-0 rounded-md">
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
        </table>

        <h2>Basic Usage</h2>

        <p>
            The basic example showcases an avatar displaying an image. When the <code>src</code> prop is provided, the image is displayed inside the avatar container.
        </p>

        <card-docs>
            <c-avatar 
                src="https://avatar.iran.liara.run/public/12" 
                alt="User Avatar" 
                size="lg" 
                class="m-auto"
            />
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-avatar 
    src="https://avatar.iran.liara.run/public/12" 
    alt="User Avatar" 
    size="lg" 
/&gt;</code>
        </pre>

        <h2>Avatar with Initials</h2>

        <p>
            When no image is provided, the <code>initials</code> prop can be used to display the user's initials. This is particularly useful for fallback designs.
        </p>

        <card-docs>
            <c-avatar class="m-auto" initials="EY" bgColor="bg-blue-500" size="md" />
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-avatar initials="EY" bgColor="bg-blue-500" size="md" /&gt;</code>
        </pre>

        <h2>Advanced Example</h2>

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
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;div class="flex items-center space-x-4"&gt;
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
&lt;/div&gt;</code>
        </pre>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
</script>
