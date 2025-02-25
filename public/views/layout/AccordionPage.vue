<template>
    <BaseLayout>
        <h1>Accordion</h1>

        <p>
            The <code>CAccordion (alias: c-accordion)</code> component allows users to toggle between different sections of content.
            It supports multiple configurations, such as always open mode, color customization, flush styling, and different arrow styles.
        </p>

        <h3>Basic Accordion</h3>

        <card-docs>
            <c-accordion :items="accordionItems" />
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-accordion
    :items="accordionItems"
/&gt;</code>
        </pre>

        <h3>Always Open</h3>

        <p>
            The <code>alwaysOpen</code> prop allows multiple accordion items to remain expanded at the same time.
        </p>

        <card-docs>
            <c-accordion :items="accordionItems" alwaysOpen />
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-accordion
    :items="accordionItems"
    alwaysOpen
/&gt;</code>
        </pre>

        <h3>Flush Accordion</h3>

        <p>
            The <code>flush</code> variant removes borders and shadows for a cleaner design.
        </p>

        <card-docs>
            <c-accordion :items="accordionItems" flush />
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-accordion
    :items="accordionItems"
    flush
/&gt;</code>
        </pre>

        <h3>Custom Colors</h3>

        <p>
            You can set different colors for the accordion header, background, and text using <code>headerColor</code>, <code>bgColor</code>, and <code>textColor</code> props.
        </p>

        <card-docs>
            <c-accordion
                :items="accordionItems"
                headerColor="bg-blue-500 text-white"
                bgColorContent="bg-blue-800"
                bgColor="bg-blue-100"
                borderColor="border-blue-300 dark:border-blue-700"
                textColor="text-white"
            />
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-accordion
    :items="accordionItems"
    headerColor="bg-blue-500 text-white"
    bgColorContent="bg-blue-800"
    bgColor="bg-blue-100"
    borderColor="border-blue-300 dark:border-blue-700"
    textColor="text-white"
/&gt;</code>
        </pre>

        <h3>Arrow Style</h3>

        <p>
            The <code>arrowStyle</code> prop changes the icon used to expand/retract the accordion. Available options: <code>default</code>, <code>chevron</code>, and <code>plus</code>.
        </p>

        <card-docs>
            <c-accordion :items="accordionItems" arrowStyle="plus" />
        </card-docs>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";

const accordionItems = [
    { title: "First Item", content: "This is the first item's content." },
    { title: "Second Item", content: "This is the second item's content." },
    { title: "Third Item", content: "This is the third item's content." },
];
</script>
