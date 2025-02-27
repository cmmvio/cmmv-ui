<template>
    <BaseLayout>
        <h1>Tooltip</h1>

        <p>The <code>CTooltip (alias: c-tooltip)</code> component in the <code>@cmmv/ui</code> framework provides an elegant way to display contextual information on hover. It supports different positions, customizable styles, and an optional arrow for a more polished look.</p>

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
                    <td class="border-b px-4 py-2">content</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">The text or content displayed inside the tooltip.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">position</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"top"</td>
                    <td class="border-b px-4 py-2">Specifies the position of the tooltip relative to the target element. Options: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">opacity</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">100</td>
                    <td class="border-b px-4 py-2">Sets the opacity level of the tooltip content.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxWidth</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Defines the maximum width of the tooltip in pixels. A value of 0 means no limit.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-gray-200 dark:bg-zinc-900"</td>
                    <td class="border-b px-4 py-2">Sets the background color of the tooltip content. Accepts any valid Tailwind CSS background color class.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-black dark:text-white"</td>
                    <td class="border-b px-4 py-2">Sets the text color of the tooltip content. Accepts any valid Tailwind CSS text color class.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">arrowColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"zinc-900"</td>
                    <td class="border-b px-4 py-2">Sets the color of the tooltip's arrow. Accepts any valid Tailwind CSS color class.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Tooltip Positions -->
        <h3>Tooltip Positions</h3>

        <p>
            The <code>CTooltip</code> supports multiple positions, allowing you to display the tooltip above, below, to the left, or to the right of the target element. Use the <code>position</code> prop to configure this behavior.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-20 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4">
                <div class="flex flex-col items-start space-y-4">
                    <c-tooltip content="Tooltip on top" position="top">
                        <c-button class="px-4 py-2 bg-zinc-500 text-white rounded">Hover me (Top)</c-button>
                    </c-tooltip>

                    <c-tooltip content="Tooltip on the right" position="right">
                        <c-button class="px-4 py-2 bg-zinc-500 text-white rounded">Hover me (Right)</c-button>
                    </c-tooltip>

                    <c-tooltip content="Tooltip at the bottom" position="bottom">
                        <c-button class="px-4 py-2 bg-zinc-500 text-white rounded">Hover me (Bottom)</c-button>
                    </c-tooltip>

                    <c-tooltip content="Tooltip on the left" position="left">
                        <c-button class="px-4 py-2 bg-zinc-500 text-white rounded">Hover me (Left)</c-button>
                    </c-tooltip>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-tooltip content="Tooltip on top" position="top"&gt;
        &lt;c-button class="px-4 py-2 bg-zinc-500 text-white rounded"&gt;
            Hover me (Top)
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip content="Tooltip on the right" position="right"&gt;
        &lt;c-button class="px-4 py-2 bg-zinc-500 text-white rounded"&gt;
            Hover me (Right)
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip content="Tooltip at the bottom" position="bottom"&gt;
        &lt;c-button class="px-4 py-2 bg-zinc-500 text-white rounded"&gt;
            Hover me (Bottom)
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip content="Tooltip on the left" position="left"&gt;
        &lt;c-button class="px-4 py-2 bg-zinc-500 text-white rounded"&gt;
            Hover me (Left)
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Tooltip with Custom Colors -->
        <h3>Custom Colors</h3>

        <p>
            The <code>bgColor</code>, <code>textColor</code>, and <code>arrowColor</code> props allow you to customize the tooltip's appearance to match your application's design system or to create different types of tooltips for various contexts.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-20 flex flex-col items-center justify-center space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <c-tooltip
                        content="Purple tooltip with white text"
                        position="top"
                        bgColor="bg-purple-600"
                        textColor="text-white"
                        arrowColor="purple-600"
                    >
                        <c-button bgColor="bg-purple-600" size="lg">Purple Theme</c-button>
                    </c-tooltip>

                    <c-tooltip
                        content="Green success tooltip"
                        position="top"
                        bgColor="bg-green-500"
                        textColor="text-white"
                        arrowColor="green-500"
                    >
                        <c-button bgColor="bg-green-500" size="lg">Success Theme</c-button>
                    </c-tooltip>

                    <c-tooltip
                        content="Red error tooltip"
                        position="bottom"
                        bgColor="bg-red-500"
                        textColor="text-white"
                        arrowColor="red-500"
                    >
                        <c-button bgColor="bg-red-500" size="lg">Error Theme</c-button>
                    </c-tooltip>

                    <c-tooltip
                        content="Dark tooltip with yellow accent"
                        position="bottom"
                        bgColor="bg-gray-800"
                        textColor="text-yellow-300"
                        arrowColor="gray-800"
                    >
                        <c-button bgColor="bg-gray-800 text-yellow-300" size="lg">Dark Theme</c-button>
                    </c-tooltip>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-tooltip
        content="Purple tooltip with white text"
        position="top"
        bgColor="bg-purple-600"
        textColor="text-white"
        arrowColor="purple-600"
    &gt;
        &lt;c-button bgColor="bg-purple-600" size="lg"&gt;Purple Theme&lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="Green success tooltip"
        position="top"
        bgColor="bg-green-500"
        textColor="text-white"
        arrowColor="green-500"
    &gt;
        &lt;c-button bgColor="bg-green-500" size="lg"&gt;Success Theme&lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="Red error tooltip"
        position="bottom"
        bgColor="bg-red-500"
        textColor="text-white"
        arrowColor="red-500"
    &gt;
        &lt;c-button bgColor="bg-red-500" size="lg"&gt;Error Theme&lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="Dark tooltip with yellow accent"
        position="bottom"
        bgColor="bg-gray-800"
        textColor="text-yellow-300"
        arrowColor="gray-800"
    &gt;
        &lt;c-button bgColor="bg-gray-800 text-yellow-300" size="lg"&gt;Dark Theme&lt;/c-button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Tooltip with Limited Width -->
        <h3>Width Control</h3>

        <p>
            Use the <code>maxWidth</code> prop to restrict the tooltip's width. This is particularly useful for tooltips with longer content, ensuring they don't stretch too wide and maintaining a clean layout.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-20 flex flex-col items-center justify-center space-y-4">
                <c-tooltip
                    content="This is a tooltip with default width behavior, which will expand based on content length."
                    position="top"
                >
                    <c-button class="px-4 py-2 bg-gray-500 text-white rounded">Default Width</c-button>
                </c-tooltip>

                <c-tooltip
                    content="This is a longer tooltip with limited width (200px) for demonstration purposes. Notice how the text wraps within the constrained space."
                    position="bottom"
                    maxWidth="200"
                >
                    <c-button class="px-4 py-2 bg-gray-700 text-white rounded">200px Width Limit</c-button>
                </c-tooltip>

                <c-tooltip
                    content="This tooltip has an even narrower width limit (150px), forcing more text wrapping for very constrained spaces."
                    position="right"
                    maxWidth="150"
                >
                    <c-button class="px-4 py-2 bg-gray-900 text-white rounded">150px Width Limit</c-button>
                </c-tooltip>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-tooltip
        content="This is a tooltip with default width behavior, which will expand based on content length."
        position="top"
    &gt;
        &lt;c-button class="px-4 py-2 bg-gray-500 text-white rounded"&gt;
            Default Width
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="This is a longer tooltip with limited width (200px) for demonstration purposes. Notice how the text wraps within the constrained space."
        position="bottom"
        maxWidth="200"
    &gt;
        &lt;c-button class="px-4 py-2 bg-gray-700 text-white rounded"&gt;
            200px Width Limit
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="This tooltip has an even narrower width limit (150px), forcing more text wrapping for very constrained spaces."
        position="right"
        maxWidth="150"
    &gt;
        &lt;c-button class="px-4 py-2 bg-gray-900 text-white rounded"&gt;
            150px Width Limit
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Tooltip Opacity -->
        <h3>Opacity Control</h3>

        <p>
            The <code>opacity</code> prop allows you to adjust the transparency of tooltips. This can be useful for creating subtle hints or for layering tooltips over other UI elements without completely obscuring them.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-20 flex flex-col items-center justify-center space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <c-tooltip
                        content="100% opacity (fully opaque)"
                        position="top"
                        :opacity="100"
                    >
                        <c-button class="px-4 py-2 bg-blue-500 text-white rounded">100% Opacity</c-button>
                    </c-tooltip>

                    <c-tooltip
                        content="75% opacity (slightly transparent)"
                        position="top"
                        :opacity="75"
                    >
                        <c-button class="px-4 py-2 bg-blue-500 text-white rounded">75% Opacity</c-button>
                    </c-tooltip>

                    <c-tooltip
                        content="50% opacity (semi-transparent)"
                        position="top"
                        :opacity="50"
                    >
                        <c-button class="px-4 py-2 bg-blue-500 text-white rounded">50% Opacity</c-button>
                    </c-tooltip>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-tooltip
        content="100% opacity (fully opaque)"
        position="top"
        :opacity="100"
    &gt;
        &lt;c-button class="px-4 py-2 bg-blue-500 text-white rounded"&gt;
            100% Opacity
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="75% opacity (slightly transparent)"
        position="top"
        :opacity="75"
    &gt;
        &lt;c-button class="px-4 py-2 bg-blue-500 text-white rounded"&gt;
            75% Opacity
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip
        content="50% opacity (semi-transparent)"
        position="top"
        :opacity="50"
    &gt;
        &lt;c-button class="px-4 py-2 bg-blue-500 text-white rounded"&gt;
            50% Opacity
        &lt;/c-button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Rating"
            previousLink="/rating"
            next="Table"
            nextLink="/table"
        />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CTooltip from "@components/components/CTooltip.vue";
import CButton from "@components/components/CButton.vue";
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
