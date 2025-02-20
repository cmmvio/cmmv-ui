<template>
    <BaseLayout>
        <h1>Tooltip</h1>

        <p>The <code>CTooltip (alias: c-tooltip)</code> component in the <code>@cmmv/ui</code> framework provides an elegant way to display contextual information on hover. It supports different positions, customizable styles, and an optional arrow for a more polished look.</p>

        <table class="w-full text-left border-collapse border-0">
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
        </table>


        <!-- Tooltip Positions -->
        <h2>Positions</h2>
        <p>
            The <code>CTooltip</code> supports multiple positions, allowing you to display the tooltip above, below, to the left, or to the right of the target element. Use the <code>position</code> prop to configure this behavior.
        </p>

        <c-card 
            class="mx-auto mt-4 px-4 py-20 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
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
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-tooltip content=&quot;Tooltip on top&quot; position=&quot;top&quot;&gt;
        &lt;button 
            class=&quot;px-4 py-2 bg-blue-500 text-white rounded&quot;
        &gt;Hover me (Top)&lt;/button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip content=&quot;Tooltip on the right&quot; position=&quot;right&quot;&gt;
        &lt;button 
            class=&quot;px-4 py-2 bg-green-500 text-white rounded&quot;
        &gt;Hover me (Right)&lt;/button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip content=&quot;Tooltip at the bottom&quot; position=&quot;bottom&quot;&gt;
        &lt;button 
            class=&quot;px-4 py-2 bg-red-500 text-white rounded&quot;
        &gt;Hover me (Bottom)&lt;/button&gt;
    &lt;/c-tooltip&gt;

    &lt;c-tooltip content=&quot;Tooltip on the left&quot; position=&quot;left&quot;&gt;
        &lt;button 
            class=&quot;px-4 py-2 bg-yellow-500 text-white rounded&quot;
        &gt;Hover me (Left)&lt;/button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Tooltip with Custom Colors -->
        <h2>Custom Colors</h2>
        
        <p>
            The <code>bgColor</code>, <code>textColor</code>, and <code>arrowColor</code> props allow you to customize the tooltip's appearance. Here's an example with custom colors:
        </p>

        <c-card 
            class="mx-auto mt-4 px-4 py-20 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-tooltip 
                content="Custom tooltip!" 
                position="top" 
                bgColor="bg-purple-600" 
                textColor="text-white" 
                arrowColor="purple-600"
            >
                <c-button bgColor="bg-purple-600" size="2xl">Hover me (Custom)</c-button>
            </c-tooltip>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-tooltip 
        content=&quot;Custom tooltip!&quot; 
        position=&quot;top&quot; 
        bgColor=&quot;bg-purple-600&quot; 
        textColor=&quot;text-white&quot; 
        arrowColor=&quot;purple-600&quot;
    &gt;
        &lt;button 
            class=&quot;px-4 py-2 bg-purple-600 text-white rounded&quot;
        &gt;Hover me (Custom)&lt;/button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Tooltip with Limited Width -->
        <h2>Width Limit</h2>
        <p>
            Use the <code>maxWidth</code> prop to restrict the tooltip's width. This is useful for tooltips with longer content.
        </p>

        <c-card 
            class="mx-auto mt-4 px-4 py-20 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0 sm:space-x-4"
        >
            <c-tooltip 
                content="This is a longer tooltip with limited width for demonstration purposes." 
                position="bottom" 
                maxWidth="200"
            >
                <button class="px-4 py-2 bg-gray-500 text-white rounded">Hover me (Width Limit)</button>
            </c-tooltip>
        </c-card>

        <pre>
            <code class="code-hightlight language-vue">&lt;template&gt;
    &lt;c-tooltip 
        content=&quot;This is a longer tooltip with limited 
        width for demonstration purposes.&quot; 
        position=&quot;bottom&quot; 
        maxWidth=&quot;200&quot;
    &gt;
        &lt;button 
            class=&quot;px-4 py-2 bg-gray-500 text-white rounded&quot;
        &gt;Hover me (Width Limit)&lt;/button&gt;
    &lt;/c-tooltip&gt;
&lt;/template&gt;</code>
        </pre>
        
    </BaseLayout>
</template>

<style scoped>
.code-hightlight {
    white-space: pre;
}
</style>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import CCard from "@components/layout/CCard.vue";
import CTooltip from "@components/components/CTooltip.vue";
</script>
