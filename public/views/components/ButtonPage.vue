<template>
    <BaseLayout>
        <c-seo
            section="Button Component"
            description="Learn how to use the CButton component in CMMV UI. A versatile button element with customizable properties, styling, and behavior, supporting different sizes, variants, and interaction states."
            :keywords="['button', 'component', 'ui', 'ripple effect', 'interaction', 'customizable']"
        />

        <h1>Button</h1>

        <p>The <code>CButton (alias: c-button)</code> component in the <code>@cmmv/ui</code> framework provides a
            versatile button element with customizable properties, styling, and behavior. It supports different sizes,
            variants, and interaction states while offering a ripple effect for visual feedback on clicks.</p>

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
                    <td class="border-b px-4 py-2">type</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"button"</td>
                    <td class="border-b px-4 py-2">Specifies the type of the button. Options: <code>button</code>,
                        <code>reset</code>, <code>submit</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">buttonType</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"button"</td>
                    <td class="border-b px-4 py-2">Defines the HTML element to render. Options: <code>button</code>,
                        <code>anchor</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"lg"</td>
                    <td class="border-b px-4 py-2">Specifies the size of the button. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"default"</td>
                    <td class="border-b px-4 py-2">Controls the border radius of the button. Options: <code>none</code>,
                        <code>default</code>, <code>md</code>, <code>full</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"elevated"</td>
                    <td class="border-b px-4 py-2">Defines the visual style of the button. Options:
                        <code>elevated</code>, <code>flat</code>, <code>tonal</code>, <code>outlined</code>,
                        <code>text</code>, <code>plain</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
                    </td>
                    <td class="border-b px-4 py-2">Custom background color for the button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-white"</td>
                    <td class="border-b px-4 py-2">Custom text color for the button.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Button Sizes</h3>

        <p>The <code>CButton</code> component offers different sizes to adapt to various interface contexts. Below are
            examples of the five available sizes.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
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
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button size="sm" type="button"&gt;Click Me&lt;/c-button&gt;
&lt;c-button size="md" type="button"&gt;Click Me&lt;/c-button&gt;
&lt;c-button size="lg" type="button"&gt;Click Me&lt;/c-button&gt;
&lt;c-button size="xl" type="button"&gt;Click Me&lt;/c-button&gt;
&lt;c-button size="2xl" type="button"&gt;Click Me&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Buttons with Icons</h3>

        <p>The <code>CButton</code> component demonstrates its flexibility by allowing the integration of icons directly
            in its
            template. Instead of having a predefined functionality to handle icons internally, the component relies on
            the
            developer's freedom to include any icon library or custom SVGs as part of the button content.</p>

        <p>This approach ensures that the c-button remains lightweight, reusable, and framework-agnostic. Developers can
            seamlessly integrate icons from any library or source, such as <a href="https://fontawesome.com/"
                target="_blank" rel="noopener noreferrer">FontAwesome</a>, <a href="https://fonts.google.com/icons"
                target="_blank" rel="noopener noreferrer">Material Icons</a>, custom SVGs, or even <a
                href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">@heroicons</a>, as shown in this
            example.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-button size="md" type="button" variant="elevated" class="inline-flex items-center gap-x-2">
                    <CheckCircleIcon class="w-5 h-5 text-white" aria-hidden="true" />
                    Icon Left
                </c-button>

                <c-button size="md" type="button" variant="elevated" class="inline-flex items-center gap-x-2">
                    Icon Right
                    <CheckCircleIcon class="w-5 h-5 text-white" aria-hidden="true" />
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button
    size="md"
    type="button"
    variant="elevated"
    class="inline-flex items-center gap-x-2"
&gt;
    &lt;CheckCircleIcon class="w-5 h-5 text-white" aria-hidden="true" /&gt;
    Icon Left
&lt;/c-button&gt;

&lt;c-button
    size="md"
    type="button"
    variant="elevated"
    class="inline-flex items-center gap-x-2"
&gt;
    Icon Right
    &lt;CheckCircleIcon class="w-5 h-5 text-white" aria-hidden="true" /&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Variants</h3>

        <p>
            The <code>CButton</code> component supports a variety of style <code>variants</code>, making it highly
            adaptable to
            different design requirements. Each variant is defined through the variant property, which allows you to
            choose the
            visual style of the button. For example, the "elevated" variant adds a subtle shadow to give the button a
            sense of
            depth, making it stand out on the page. The "outlined" variant applies a clear border around the button,
            creating a
            clean, lightweight look without a filled background. On the other hand, the "flat" variant removes all
            shadows and
            borders, focusing purely on background and text colors for a minimalist appearance.
        </p>

        <p>For layouts with a lot of content or subtle interactions, the "text" style provides a button that looks like
            a simple
            text link, seamlessly integrating with its surroundings. Similarly, the "plain" variant ensures a very
            clean,
            unobtrusive button with a transparent background that highlights the internal content. The combination of
            these
            variants with custom properties like <code>bgColor</code> and <code>textColor</code> offers endless styling
            possibilities.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-button size="lg" type="button" variant="flat" bgColor="bg-purple-600 hover:bg-purple-500"
                    textColor="text-white" class="inline-flex items-center gap-x-3">
                    Purple Button
                </c-button>

                <c-button size="lg" type="button" variant="elevated" bgColor="bg-red-600 hover:bg-red-500"
                    textColor="text-white">
                    Red Button
                </c-button>

                <c-button size="lg" type="button" variant="elevated" bgColor="bg-green-600 hover:bg-green-500"
                    textColor="text-white">
                    Green Button
                </c-button>

                <c-button size="lg" type="button" variant="elevated" bgColor="bg-yellow-600 hover:bg-yellow-500"
                    textColor="text-white">
                    Yellow Button
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button
    size="lg"
    type="button"
    variant="flat"
    bgColor="bg-purple-600 hover:bg-purple-500"
    textColor="text-white"
&gt;
    Purple Button
&lt;/c-button&gt;

&lt;c-button
    size="lg"
    type="button"
    variant="elevated"
    bgColor="bg-red-600 hover:bg-red-500"
    textColor="text-white"
&gt;
    Red Button
&lt;/c-button&gt;

&lt;c-button
    size="lg"
    type="button"
    variant="elevated"
    bgColor="bg-green-600 hover:bg-green-500"
    textColor="text-white"
&gt;
    Green Button
&lt;/c-button&gt;

&lt;c-button
    size="lg"
    type="button"
    variant="elevated"
    bgColor="bg-yellow-600 hover:bg-yellow-500"
    textColor="text-white"
&gt;
    Yellow Button
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Variant</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Preview</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">elevated</td>
                    <td class="border-b px-4 py-2">
                        <c-button size="md" variant="elevated" bgColor="bg-blue-600 hover:bg-blue-500"
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
                        <c-button size="md" variant="flat" bgColor="bg-neutral-200 hover:bg-neutral-300"
                            textColor="text-neutral-800">
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
                        <c-button size="md" variant="tonal" bgColor="bg-blue-200 hover:bg-blue-300"
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
                        <c-button size="md" variant="outlined" bgColor="bg-transparent"
                            textColor="text-neutral-500 dark:text-white">
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
                        <c-button size="md" variant="text" textColor="text-white hover:underline">
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
                        <c-button size="md" variant="plain"
                            textColor="text-neutral-500 hover:text-neutral-100 dark:text-white dark:hover:text-neutral-200">
                            Plain
                        </c-button>
                    </td>
                    <td class="border-b px-4 py-2">
                        Makes the button highly subtle by removing the background and reducing opacity, which increases
                        on
                        hover.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Size Variants</h3>

        <p>The <code>CButton</code> component supports multiple sizes, making it adaptable for different contexts, from
            compact
            UI elements to prominent call-to-action buttons. The <code>size</code> property controls the button's
            dimensions,
            allowing you to choose from predefined options like <code>sm</code>, <code>md</code>, <code>lg</code>,
            <code>xl</code>, and <code>2xl</code>. These sizes adjust the button's padding and font size to create a
            visually
            balanced appearance. Below is a detailed explanation and preview of each size variant:
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button size="sm" type="button"&gt;Small&lt;/c-button&gt;
&lt;c-button size="md" type="button"&gt;Medium&lt;/c-button&gt;
&lt;c-button size="lg" type="button"&gt;Large&lt;/c-button&gt;
&lt;c-button size="xl" type="button"&gt;Extra Large&lt;/c-button&gt;
&lt;c-button size="2xl" type="button"&gt;Double Extra Large&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Rounded Styles</h3>

        <p>The <code>CButton</code> also supports customizing its border radius using the <code>rounded</code> property.
            This
            property allows you to define the button's appearance, ranging from sharp corners to fully rounded edges.
            The
            available options are <code>none</code>, <code>default</code>, <code>md</code>, and <code>full</code>.</p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button rounded="none" type="button"&gt;No Rounded&lt;/c-button&gt;
&lt;c-button rounded="default" type="button"&gt;Default&lt;/c-button&gt;
&lt;c-button rounded="md" type="button"&gt;Medium&lt;/c-button&gt;
&lt;c-button rounded="full" type="button"&gt;Fully Rounded&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Icon Buttons</h3>

        <p>The <code>CButton</code> component can be styled as an icon button, where the button serves as a container
            for an
            icon. This is particularly useful for actions that are commonly represented by icons, such as menu toggles,
            modal
            closures, or navigation shortcuts. By combining the <code>rounded="full"</code> property with custom sizes
            and
            paddings, the button becomes a perfectly circular container for the icon.</p>

        <card-docs>
            <div
                class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <c-button type="button" rounded="full" size="sm" bgColor="bg-blue-600 hover:bg-blue-500"
                    textColor="text-white" class="py-4 px-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </c-button>

                <c-button type="button" rounded="full" size="sm" bgColor="bg-green-600 hover:bg-green-500"
                    textColor="text-white" class="py-4 px-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                        <path fill-rule="evenodd"
                            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </c-button>

                <c-button type="button" rounded="full" size="sm" bgColor="bg-red-600 hover:bg-red-500"
                    textColor="text-white" class="py-4 px-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                            clip-rule="evenodd" />
                    </svg>
                </c-button>

                <c-button type="button" rounded="full" size="sm" variant="flat"
                    bgColor="bg-yellow-600 hover:bg-yellow-500" textColor="text-white"
                    class="py-4 px-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </c-button>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button
    type="button"
    rounded="full"
    size="sm"
    bgColor="bg-blue-600 hover:bg-blue-500"
    textColor="text-white"
    class="py-4 px-4 flex items-center justify-center"
&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /&gt;
    &lt;/svg&gt;
&lt;/c-button&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Badge" previousLink="/badge" next="Flags" nextLink="/flags" />
    </BaseLayout>
</template>

<style scoped>
.code-hightlight {
    white-space: pre;
}
</style>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import CButton from "@components/components/CButton.vue";
import { CheckCircleIcon } from '@heroicons/vue/20/solid';
</script>
