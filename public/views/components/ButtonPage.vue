<template>
    <BaseLayout>
        <h1>Button</h1>

        <p>The <code>CButton (alias: c-button)</code> component in the <code>@cmmv/ui</code> framework provides a versatile button element with customizable properties, styling, and behavior. It supports different sizes, variants, and interaction states while offering a ripple effect for visual feedback on clicks.</p>

        <table class="w-full text-left border-collapse border-0 doc-table">
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
                    <td class="border-b px-4 py-2">type</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"button"</td>
                    <td class="border-b px-4 py-2">Specifies the type of the button. Options: <code>button</code>, <code>reset</code>, <code>submit</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">buttonType</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"button"</td>
                    <td class="border-b px-4 py-2">Defines the HTML element to render. Options: <code>button</code>, <code>anchor</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"lg"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the button. Options: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the button. Options: <code>none</code>, <code>default</code>, <code>md</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"elevated"</td>
                    <td class="border-b px-4 py-2">Defines the visual style of the button. Options: <code>elevated</code>, <code>flat</code>, <code>tonal</code>, <code>outlined</code>, <code>text</code>, <code>plain</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"</td>
                    <td class="border-b px-4 py-2">Custom background color for the button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-white"</td>
                    <td class="border-b px-4 py-2">Custom text color for the button.</td>
                </tr>
            </tbody>
        </table>


        <!-- Simple -->
        <c-card
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-button size="sm" type="button">
                Click Me
            </c-button>

            <c-button size="md" type="button">
                Click Me
            </c-button>

            <c-button size="lg" type="button">
                Click Me
            </c-button>

            <c-button size="xl" type="button">
                Click Me
            </c-button>

            <c-button size="2xl" type="button">
                Click Me
            </c-button>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-button type=&quot;button&quot;&gt;
        Click Me
    &lt;/c-button&gt;
&lt;/template&gt;

&lt;script&gt;
import CButton from &quot;@cmmv/ui/components/CButton.vue&quot;;
&lt;/script&gt;</code>
        </pre>

        <!-- Button with Icons -->
        <h2 class="text-lg font-semibold">Button with Icons</h2>

        <p>In this example, the <code>CButton</code> component demonstrates its flexibility by allowing the integration of icons directly within its template. Instead of having a predefined functionality to handle icons internally, the component relies on the developer's freedom to include any icon library or custom SVGs as part of the button content.</p>

        <p>This approach ensures that the c-button remains lightweight, reusable, and framework-agnostic. Developers can seamlessly integrate icons from any library or source, such as <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">FontAwesome</a>, <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">Material Icons</a>, custom SVGs, or even <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">@heroicons</a>, as shown in this example.</p>

        <c-card
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-button
                size="md"
                type="button"
                variant="elevated"
                class="inline-flex items-center gap-x-2"
            >
                <CheckCircleIcon class="w-5 h-5 text-white" aria-hidden="true" />
                Icon Left
            </c-button>

            <c-button
                size="md"
                type="button"
                variant="elevated"
                class="inline-flex items-center gap-x-2"
            >
                Icon Right
                <CheckCircleIcon class="w-5 h-5 text-white" aria-hidden="true" />
            </c-button>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;c-button
    size=&quot;md&quot;
    type=&quot;button&quot;
    variant=&quot;elevated&quot;
    class=&quot;inline-flex items-center gap-x-2&quot;
&gt;
    &lt;CheckCircleIcon class=&quot;w-5 h-5 text-white&quot; aria-hidden=&quot;true&quot; /&gt;
    Icon Left
&lt;/c-button&gt;

&lt;c-button
    size=&quot;md&quot;
    type=&quot;button&quot;
    variant=&quot;elevated&quot;
    class=&quot;inline-flex items-center gap-x-2&quot;
&gt;
    Icon Right
    &lt;CheckCircleIcon class=&quot;w-5 h-5 text-white&quot; aria-hidden=&quot;true&quot; /&gt;
&lt;/c-button&gt;

&lt;script&gt;
import CButton from &quot;@cmmv/ui/components/CButton.vue&quot;;
import { CheckCircleIcon } from &quot;@heroicons/vue/20/solid&quot;;
&lt;/script&gt;</code>
        </pre>

        <h2>
            Variants
        </h2>

        <p>
            The <code>CButton</code> component supports a variety of style <code>variants</code>, making it highly adaptable to different design requirements. Each variant is defined through the variant property, which allows you to choose the button's visual style. For instance, the "elevated" variant adds a subtle shadow to give the button a sense of depth, making it stand out on the page. The "outlined" variant applies a clear border around the button, creating a clean and lightweight look without a filled background. On the other hand, the "flat" variant removes all shadows and borders, focusing purely on the background and text colors for a minimalistic appearance.
        </p>

        <p>For content-heavy layouts or subtle interactions, the "text" style provides a button that looks like a simple text link, seamlessly blending into its surroundings. Similarly, the "plain" variant ensures a very clean and unobtrusive button, with a transparent background that highlights the content within. The combination of these variants with custom properties such as <code>bgColor</code> and <code>textColor</code> provides infinite possibilities for styling.</p>

        <c-card
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-button
                size="lg"
                type="button"
                variant="flat"
                bgColor="bg-purple-600 hover:bg-purple-500"
                textColor="text-white"
                class="inline-flex items-center gap-x-3"
            >
                Purple Button
            </c-button>

            <c-button
                size="lg"
                type="button"
                variant="elevated"
                bgColor="bg-red-600 hover:bg-red-500"
                textColor="text-white"
            >
                Red Button
            </c-button>

            <c-button
                size="lg"
                type="button"
                variant="elevated"
                bgColor="bg-green-600 hover:bg-green-500"
                textColor="text-white"
            >
                Green Button
            </c-button>

            <c-button
                size="lg"
                type="button"
                variant="elevated"
                bgColor="bg-yellow-600 hover:bg-yellow-500"
                textColor="text-white"
            >
                Yellow Button
            </c-button>
        </c-card>

        <table class="w-full text-left border-collapse border-0 doc-table">
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Variant</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Preview</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">elevated</td>
                    <td class="border-b px-4 py-2">
                        <c-button
                            size="md"
                            variant="elevated"
                            bgColor="bg-blue-600 hover:bg-blue-500"
                            textColor="text-white">
                            Elevated
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Elevates the button with a shadow, giving it depth and making it stand out.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">flat</td>
                    <td class="border-b px-4 py-2">
                        <c-button
                            size="md"
                            variant="flat"
                            bgColor="bg-gray-200 hover:bg-gray-300"
                            textColor="text-gray-800">
                            Flat
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Removes the button's shadow, focusing on its background and text.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">tonal</td>
                    <td class="border-b px-4 py-2">
                        <c-button
                            size="md"
                            variant="tonal"
                            bgColor="bg-blue-200 hover:bg-blue-300"
                            textColor="text-blue-800">
                            Tonal
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Applies a background color with reduced opacity based on the current text color.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">outlined</td>
                    <td class="border-b px-4 py-2">
                        <c-button
                            size="md"
                            variant="outlined"
                            bgColor="bg-transparent"
                            textColor="text-white">
                            Outlined
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Adds a thin border around the button with the current text color and no background.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">text</td>
                    <td class="border-b px-4 py-2">
                        <c-button
                            size="md"
                            variant="text"
                            textColor="text-white hover:underline">
                            Text
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Removes both the background and shadow, emphasizing the text for a lightweight look.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">plain</td>
                    <td class="border-b px-4 py-2">
                        <c-button
                            size="md"
                            variant="plain"
                            textColor="text-white">
                            Plain
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Makes the button highly subtle by removing the background and reducing opacity, which increases on hover.
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Size -->
        <h2>Size Variants</h2>

        <p>The <code>CButton</code> component supports multiple sizes, making it adaptable for different contexts, from compact UI elements to prominent call-to-action buttons. The <code>size</code> property controls the dimensions of the button, allowing you to choose from predefined options such as <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>2xl</code>. These sizes adjust the button's padding and font size to create a visually balanced appearance. Below is a detailed explanation and preview of each size variant:</p>

        <table class="w-full text-left border-collapse border-0 doc-table">
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Size</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Preview</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">sm</td>
                    <td class="border-b px-4 py-2">
                        <c-button size="sm" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Small
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        The smallest button size, ideal for compact UI elements or secondary actions.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">md</td>
                    <td class="border-b px-4 py-2">
                        <c-button size="md" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Medium
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        A standard button size suitable for most use cases.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lg</td>
                    <td class="border-b px-4 py-2">
                        <c-button size="lg" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Large
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        A larger button size that works well for primary actions and more prominent UI elements.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">xl</td>
                    <td class="border-b px-4 py-2">
                        <c-button size="xl" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Extra Large
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        An extra-large button size for bold and attention-grabbing actions.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">2xl</td>
                    <td class="border-b px-4 py-2">
                        <c-button size="2xl" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Double Extra Large
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        The largest button size, designed for standout actions or large interfaces.
                    </td>
                </tr>
            </tbody>
        </table>

        <pre>
    <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-button size=&quot;sm&quot; type=&quot;button&quot;&gt;Click Me&lt;/c-button&gt;
    &lt;c-button size=&quot;md&quot; type=&quot;button&quot;&gt;Click Me&lt;/c-button&gt;
    &lt;c-button size=&quot;lg&quot; type=&quot;button&quot;&gt;Click Me&lt;/c-button&gt;
    &lt;c-button size=&quot;xl&quot; type=&quot;button&quot;&gt;Click Me&lt;/c-button&gt;
    &lt;c-button size=&quot;2xl&quot; type=&quot;button&quot;&gt;Click Me&lt;/c-button&gt;
&lt;/template&gt;</code>
</pre>


        <!-- Rounded -->
        <h2>Rounded Styles</h2>

        <p>The <code>CButton</code> also supports customization of its corner radius using the <code>rounded</code> property. This property allows you to define the button's appearance, ranging from sharp corners to fully rounded edges. The available options are <code>none</code>, <code>default</code>, <code>md</code>, and <code>full</code>.</p>

        <table class="w-full text-left border-collapse border-0">
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Rounded</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Preview</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">none</td>
                    <td class="border-b px-4 py-2">
                        <c-button rounded="none" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            No Rounded
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        A sharp-cornered button with no border-radius.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">default</td>
                    <td class="border-b px-4 py-2">
                        <c-button rounded="default" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Default
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Applies a small border-radius for slightly rounded corners.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">md</td>
                    <td class="border-b px-4 py-2">
                        <c-button rounded="md" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Medium
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Medium-rounded corners for a balanced appearance.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">full</td>
                    <td class="border-b px-4 py-2">
                        <c-button rounded="full" bgColor="bg-blue-600 hover:bg-blue-500" textColor="text-white">
                            Fully Rounded
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Fully rounded corners, creating a circular appearance.
                    </td>
                </tr>
            </tbody>
        </table>

        <pre>
    <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-button rounded=&quot;none&quot; type=&quot;button&quot;&gt;No Rounded&lt;/c-button&gt;
    &lt;c-button rounded=&quot;default&quot; type=&quot;button&quot;&gt;Default&lt;/c-button&gt;
    &lt;c-button rounded=&quot;md&quot; type=&quot;button&quot;&gt;Medium&lt;/c-button&gt;
    &lt;c-button rounded=&quot;full&quot; type=&quot;button&quot;&gt;Fully Rounded&lt;/c-button&gt;
&lt;/template&gt;</code>
</pre>

        <!-- Icon -->
        <h2>Icon Buttons</h2>

        <p>The <code>CButton</code> component can be styled as an icon button, where the button serves as a container for an icon. This is particularly useful for actions that are commonly represented by icons, such as menu toggles, closing modals, or navigation shortcuts. By combining the <code>rounded="full"</code> property with custom sizes and padding, the button becomes a perfectly circular container for the icon.</p>

        <c-card
            class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-button
                type="button"
                rounded="full"
                size="sm"
                bgColor="bg-blue-600 hover:bg-blue-500"
                textColor="text-white"
                class="py-4 px-4 flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </c-button>

            <c-button
                type="button"
                rounded="full"
                size="sm"
                bgColor="bg-green-600 hover:bg-green-500"
                textColor="text-white"
                class="py-4 px-4 flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                    <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </c-button>

            <c-button
                type="button"
                rounded="full"
                size="sm"
                bgColor="bg-red-600 hover:bg-red-500"
                textColor="text-white"
                class="py-4 px-4 flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
                </svg>
            </c-button>

            <c-button
                type="button"
                rounded="full"
                size="sm"
                variant="flat"
                bgColor="bg-yellow-600 hover:bg-yellow-500"
                textColor="text-white"
                class="py-4 px-4 flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </c-button>
        </c-card>

    </BaseLayout>
</template>

<style scoped>
.code-hightlight {
    white-space: pre;
}
</style>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CCard from "@components/layout/CCard.vue";
import CButton from "@components/components/CButton.vue";
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
</script>
