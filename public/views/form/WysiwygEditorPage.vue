<template>
    <BaseLayout>
        <h1>WYSIWYG Editor</h1>

        <p>The <code>CWysiwygEditor (alias: c-wysiwyg-editor)</code> component provides a rich text editor with a comprehensive set of formatting options. This component is built on top of <a href="https://tiptap.dev/" target="_blank" rel="noopener noreferrer">TipTap</a>, a headless and extendable rich text editor for Vue.</p>

        <c-alert
            type="info"
            title="Dependencies"
            :icon="true">
            <p class="mb-2">This component requires the following packages to be installed in your project:</p>
        </c-alert>

        <pre class="rounded-md">
            <code class="code-highlight language-bash">$ pnpm add @tiptap/vue-3 @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-image @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-placeholder tiptap-markdown</code></pre>

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
                    <td class="border-b px-4 py-2">modelValue</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">The content of the editor, in HTML or Markdown format (depending on outputFormat).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Write something...'</td>
                    <td class="border-b px-4 py-2">Text shown when the editor is empty.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Makes the editor read-only when set to true.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">editorClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Additional CSS classes to apply to the editor.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">outputFormat</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'html'</td>
                    <td class="border-b px-4 py-2">Format of the editor output. Options: 'html' or 'markdown'.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Examples -->
        <h3>Basic Example</h3>

        <p>The most basic implementation of the <code>CWysiwygEditor</code> component with default settings.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[600px]">
                    <c-wysiwyg-editor v-model="basicContent" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-wysiwyg-editor v-model="content" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const content = ref('&lt;p&gt;Hello World!&lt;/p&gt;');
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Markdown output -->
        <h3>Markdown Output</h3>

        <p>You can configure the editor to output Markdown format instead of HTML.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[600px]">
                    <c-wysiwyg-editor v-model="markdownContent" outputFormat="markdown" />
                    <div class="mt-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                        <h4 class="text-sm font-semibold mb-2">Markdown Output:</h4>
                        <pre class="bg-neutral-200 dark:bg-neutral-900 p-2 rounded text-xs font-mono whitespace-pre-wrap">{{ markdownContent }}</pre>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-wysiwyg-editor v-model="content" outputFormat="markdown" /&gt;
    &lt;div class="mt-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-md"&gt;
        &lt;h4 class="text-sm font-semibold mb-2"&gt;Markdown Output:&lt;/h4&gt;
        &lt;pre class="bg-neutral-200 dark:bg-neutral-900 p-2 rounded text-xs font-mono whitespace-pre-wrap"&gt;{{ content }}&lt;/pre&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const content = ref('# Heading\n\nThis is **bold** and *italic* text.');
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Disabled state -->
        <h3>Disabled State</h3>

        <p>You can set the editor to be read-only by using the <code>disabled</code> prop.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[600px]">
                    <c-wysiwyg-editor
                        v-model="disabledContent"
                        :disabled="true"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-wysiwyg-editor
        v-model="content"
        :disabled="true"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const content = ref('&lt;p&gt;This content cannot be edited.&lt;/p&gt;');
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Placeholder -->
        <h3>Custom Placeholder</h3>

        <p>You can customize the placeholder text shown when the editor is empty.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[600px]">
                    <c-wysiwyg-editor
                        v-model="placeholderContent"
                        placeholder="Start writing your amazing content here..."
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-wysiwyg-editor
        v-model="content"
        placeholder="Start writing your amazing content here..."
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const content = ref('');
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Programmatic control -->
        <h3>Programmatic Control</h3>

        <p>You can programmatically control the editor through exposed methods.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
                <div class="w-full max-w-[600px]">
                    <c-wysiwyg-editor
                        v-model="controlContent"
                        ref="editorRef"
                    />
                    <div class="mt-4 flex flex-wrap gap-2">
                        <c-button @click="insertSampleContent" variant="primary" size="sm">Insert Content</c-button>
                        <c-button @click="clearContent" variant="danger" size="sm">Clear Editor</c-button>
                        <c-button @click="getHtmlContent" variant="secondary" size="sm">Get HTML</c-button>
                        <c-button @click="getMarkdownContent" variant="secondary" size="sm">Get Markdown</c-button>
                    </div>
                    <div v-if="outputContent" class="mt-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                        <h4 class="text-sm font-semibold mb-2">Output:</h4>
                        <pre class="bg-neutral-200 dark:bg-neutral-900 p-2 rounded text-xs font-mono whitespace-pre-wrap">{{ outputContent }}</pre>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-wysiwyg-editor
        v-model="content"
        ref="editorRef"
    /&gt;
    &lt;div class="mt-4 flex flex-wrap gap-2"&gt;
        &lt;c-button @click="insertSampleContent" variant="primary" size="sm"&gt;Insert Content&lt;/c-button&gt;
        &lt;c-button @click="clearContent" variant="danger" size="sm"&gt;Clear Editor&lt;/c-button&gt;
        &lt;c-button @click="getHtmlContent" variant="secondary" size="sm"&gt;Get HTML&lt;/c-button&gt;
        &lt;c-button @click="getMarkdownContent" variant="secondary" size="sm"&gt;Get Markdown&lt;/c-button&gt;
    &lt;/div&gt;
    &lt;div v-if="outputContent" class="mt-4 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-md"&gt;
        &lt;h4 class="text-sm font-semibold mb-2"&gt;Output:&lt;/h4&gt;
        &lt;pre class="bg-neutral-200 dark:bg-neutral-900 p-2 rounded text-xs font-mono whitespace-pre-wrap"&gt;&123;&123; outputContent &125;&125;&lt;/pre&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const content = ref('');
const editorRef = ref(null);
const outputContent = ref('');

const insertSampleContent = () => {
    const sampleContent = '&lt;h2&gt;Sample Heading&lt;/h2&gt;&lt;p&gt;This is a &lt;strong&gt;bold&lt;/strong&gt; sample text with a &lt;a href="https://example.com"&gt;link&lt;/a&gt;.&lt;/p&gt;';
    content.value = sampleContent;
};

const clearContent = () => {
    editorRef.value.clearContent();
};

const getHtmlContent = () => {
    outputContent.value = editorRef.value.getHTML();
};

const getMarkdownContent = () => {
    outputContent.value = editorRef.value.getMarkdown();
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Editor features -->
        <h3>Editor Features</h3>

        <p>The WYSIWYG editor includes a comprehensive set of text formatting options:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
                <h4 class="font-semibold mb-2">Text Formatting</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Bold</li>
                    <li>Italic</li>
                    <li>Strikethrough</li>
                    <li>Code</li>
                </ul>
            </div>
            <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
                <h4 class="font-semibold mb-2">Block Elements</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Headings (H1, H2, H3)</li>
                    <li>Paragraphs</li>
                    <li>Blockquotes</li>
                </ul>
            </div>
            <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
                <h4 class="font-semibold mb-2">Lists</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Bullet lists</li>
                    <li>Numbered lists</li>
                    <li>Nested lists with indentation</li>
                </ul>
            </div>
            <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
                <h4 class="font-semibold mb-2">Media & Links</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Links</li>
                    <li>Images</li>
                </ul>
            </div>
        </div>

        <!-- Exposed Methods -->
        <h3>Exposed Methods</h3>

        <p>The <code>CWysiwygEditor</code> component exposes several methods that allow programmatic control of the editor:</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Method</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2"><code>getHTML()</code></td>
                    <td class="border-b px-4 py-2">Returns the editor content as HTML.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2"><code>getMarkdown()</code></td>
                    <td class="border-b px-4 py-2">Returns the editor content as Markdown.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2"><code>getJSON()</code></td>
                    <td class="border-b px-4 py-2">Returns the editor content as a ProseMirror JSON document.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2"><code>focus()</code></td>
                    <td class="border-b px-4 py-2">Focuses the editor.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2"><code>clearContent()</code></td>
                    <td class="border-b px-4 py-2">Clears all content from the editor.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2"><code>editor</code></td>
                    <td class="border-b px-4 py-2">Provides direct access to the underlying TipTap editor instance for advanced usage.</td>
                </tr>
            </tbody>
        </table-docs>

        <p>For more information about TipTap and its capabilities, visit the <a href="https://tiptap.dev/docs" target="_blank" rel="noopener noreferrer">TipTap documentation</a>.</p>

        <PagePagination previous="Toggle" previousLink="/toggle" next="Accordion" nextLink="/accordion" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import CAlert from "@components/layout/CAlert.vue";

// Example content
const basicContent = ref('<p>Hello World! This is a basic example of the WYSIWYG editor.</p>');
const markdownContent = ref('# Hello Markdown\n\nThis is **bold** and *italic* text.\n\n- Bullet point 1\n- Bullet point 2');
const disabledContent = ref('<p>This content is in read-only mode and cannot be edited.</p><p>Try clicking on the editor!</p>');
const placeholderContent = ref('');
const controlContent = ref('');
const outputContent = ref('');
const editorRef = ref(null);

// Methods for programmatic control demo
const insertSampleContent = () => {
    const sampleContent = '<h2>Sample Heading</h2><p>This is a <strong>bold</strong> sample text with a <a href="https://example.com">link</a>.</p>';
    controlContent.value = sampleContent;
};

const clearContent = () => {
    if (editorRef.value) {
        editorRef.value.clearContent();
    }
};

const getHtmlContent = () => {
    if (editorRef.value) {
        outputContent.value = editorRef.value.getHTML() || '';
    }
};

const getMarkdownContent = () => {
    if (editorRef.value) {
        outputContent.value = editorRef.value.getMarkdown() || '';
    }
};
</script>
