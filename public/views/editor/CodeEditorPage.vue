<template>
    <BaseLayout>
        <c-seo
            section="Code Editor Component"
            description="Learn how to use the CCodeEditor component in CMMV UI. A powerful code editor component with syntax highlighting, line numbers, and advanced editing features for multiple programming languages."
            :keywords="['code editor', 'component', 'ui', 'syntax highlighting', 'programming', 'editor']"
        />

        <h1>Code Editor</h1>

        <p>
            The <code>CCodeEditor (alias: c-code-editor)</code> component provides a powerful and customizable code
            editing experience using Monaco Editor, the same engine that powers Visual Studio Code. It supports syntax
            highlighting for dozens of languages, themes, code folding, and many other features to enhance code editing
            in your application.
        </p>

        <div
            class="alert alert-info mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md border border-blue-200 dark:border-blue-800">
            <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm">
                        This component uses Monaco Editor, which requires additional dependencies. Be sure to install
                        <code>monaco-editor</code> in your project with:
                        <code class="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">pnpm install monaco-editor</code>
                    </p>
                    <p class="text-sm mt-2">
                        For full documentation on Monaco Editor features, see the
                        <a href="https://microsoft.github.io/monaco-editor/" target="_blank"
                            class="text-blue-600 dark:text-blue-400 underline">official Monaco Editor documentation</a>.
                    </p>
                </div>
            </div>
        </div>

        <table-docs>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>modelValue</td>
                    <td>String</td>
                    <td>''</td>
                    <td>
                        The code text content of the editor. Use with <code>v-model</code> for two-way data binding.
                    </td>
                </tr>
                <tr>
                    <td>language</td>
                    <td>String</td>
                    <td>'javascript'</td>
                    <td>
                        The language for syntax highlighting. Options include 'javascript', 'typescript', 'html', 'css',
                        'json',
                        'python', and many more supported by Monaco Editor.
                    </td>
                </tr>
                <tr>
                    <td>theme</td>
                    <td>String</td>
                    <td>''</td>
                    <td>
                        The editor color theme. Options are 'vs' (light), 'vs-dark' (dark), and 'hc-black' (high
                        contrast).
                        When empty, automatically follows the system theme (light/dark class on the html element).
                    </td>
                </tr>
                <tr>
                    <td>readOnly</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>
                        When set to true, the editor content cannot be modified.
                    </td>
                </tr>
                <tr>
                    <td>minimap</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Enables or disables the code minimap on the right side of the editor.
                    </td>
                </tr>
                <tr>
                    <td>lineNumbers</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Enables or disables line numbers in the editor gutter.
                    </td>
                </tr>
                <tr>
                    <td>formatOnType</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>
                        Enables automatic formatting while typing.
                    </td>
                </tr>
                <tr>
                    <td>wordWrap</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>
                        Enables or disables word wrapping in the editor.
                    </td>
                </tr>
                <tr>
                    <td>automaticLayout</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Automatically adjusts editor layout when container size changes.
                    </td>
                </tr>
                <tr>
                    <td>tabSize</td>
                    <td>Number</td>
                    <td>2</td>
                    <td>
                        Number of spaces used for tab indentation.
                    </td>
                </tr>
                <tr>
                    <td>showToolbar</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Shows or hides the toolbar with action buttons.
                    </td>
                </tr>
                <tr>
                    <td>showFooter</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Shows or hides the footer with cursor position and language info.
                    </td>
                </tr>
                <tr>
                    <td>showCopyButton</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Shows or hides the copy button in the toolbar.
                    </td>
                </tr>
                <tr>
                    <td>allowFullscreen</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Enables or disables the fullscreen toggle button in the toolbar.
                    </td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>String</td>
                    <td>'300px'</td>
                    <td>
                        Sets the height of the editor (e.g., '300px', '50vh').
                    </td>
                </tr>
                <tr>
                    <td>options</td>
                    <td>Object</td>
                    <td>{}</td>
                    <td>
                        Additional Monaco Editor options to be passed directly to the editor instance.
                        See the <a
                            href="https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html"
                            target="_blank" class="text-blue-600 dark:text-blue-400 underline">full list of options</a>.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Events</h3>

        <table-docs>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Payload</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>update:modelValue</td>
                    <td>String</td>
                    <td>
                        Emitted when the editor content changes, for v-model binding.
                    </td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>String</td>
                    <td>
                        Emitted when the editor content changes, with the new content as payload.
                    </td>
                </tr>
                <tr>
                    <td>editor-mounted</td>
                    <td>IStandaloneCodeEditor</td>
                    <td>
                        Emitted when the Monaco editor instance is fully initialized, providing direct access to the
                        Monaco editor instance.
                    </td>
                </tr>
                <tr>
                    <td>cursor-position-change</td>
                    <td>{ lineNumber, column }</td>
                    <td>
                        Emitted when the cursor position changes in the editor.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Exposed Methods</h3>

        <table-docs>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Parameters</th>
                    <th>Return</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>getEditor</td>
                    <td>-</td>
                    <td>IStandaloneCodeEditor</td>
                    <td>
                        Returns the Monaco editor instance for direct manipulation.
                    </td>
                </tr>
                <tr>
                    <td>formatCode</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Formats the code in the editor according to the current language rules.
                    </td>
                </tr>
                <tr>
                    <td>toggleFullscreen</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Toggles the editor between normal and fullscreen modes.
                    </td>
                </tr>
                <tr>
                    <td>copyToClipboard</td>
                    <td>-</td>
                    <td>Promise&lt;void&gt;</td>
                    <td>
                        Copies the current editor content to the clipboard.
                    </td>
                </tr>
                <tr>
                    <td>getValue</td>
                    <td>-</td>
                    <td>string</td>
                    <td>
                        Returns the current content of the editor.
                    </td>
                </tr>
                <tr>
                    <td>setValue</td>
                    <td>(value: string)</td>
                    <td>void</td>
                    <td>
                        Sets the content of the editor.
                    </td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Sets focus to the editor.
                    </td>
                </tr>
                <tr>
                    <td>setLanguage</td>
                    <td>(language: string)</td>
                    <td>void</td>
                    <td>
                        Changes the language mode of the editor.
                    </td>
                </tr>
                <tr>
                    <td>setTheme</td>
                    <td>(theme: string)</td>
                    <td>void</td>
                    <td>
                        Changes the editor theme.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Code Editor</h3>

        <p>
            The <strong>Basic Code Editor</strong> demonstrates the fundamental usage of the <code>CCodeEditor</code>
            component.
            This example includes a simple JavaScript code snippet with syntax highlighting and the standard toolbar.
            It showcases how the editor adapts to the content while providing a rich editing experience with features
            like
            line numbers, syntax highlighting, and auto-indentation.
        </p>

        <card-docs padding="p-0">
            <div class="w-full">
                <c-code-editor v-model="basicEditorValue" language="javascript" height="300px" class="w-full"
                    @editor-mounted="handleEditorMounted"></c-code-editor>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-code-editor
    v-model="code"
    language="javascript"
    height="300px"
  &gt;&lt;/c-code-editor&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const code = ref(`function helloWorld() {
  console.log("Hello, world!");

  // This is a simple JavaScript function
  return "Hello, world!";
}`);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Read-Only Mode</h3>

        <p>
            Use the <code>readOnly</code> prop to create a read-only code editor that can be used for displaying code
            snippets without allowing edits. This is useful for documentation, code examples, or when you want to
            display
            code that shouldn't be modified.
        </p>

        <card-docs padding="p-0">
            <div class="w-full">
                <c-code-editor v-model="readOnlyValue" language="html" :read-only="true" height="300px"
                    class="w-full"></c-code-editor>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-code-editor
    v-model="code"
    language="html"
    :read-only="true"
    height="300px"
  &gt;&lt;/c-code-editor&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const code = ref(`<!DOCTYPE html>
<html>
<head>
  <title>Read-Only Example</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a read-only code snippet.</p>
</body>
</html>`);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Theme Options</h3>

        <p>
            The <code>CCodeEditor</code> automatically adapts to light or dark mode based on the presence of the
            <code>dark</code> class on the <code>html</code> element.
            You can also explicitly set the theme using the <code>theme</code> prop. The available built-in themes are
            'vs'
            (light), 'vs-dark' (dark), and 'hc-black'
            (high contrast).
        </p>

        <card-docs padding="p-0">
            <div class="w-full">
                <c-code-editor v-model="themeExampleValue" language="typescript" height="300px"
                    class="w-full"></c-code-editor>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-code-editor
    v-model="code"
    language="typescript"
    height="300px"
  &gt;&lt;/c-code-editor&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const code = ref(`interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

class UserService {
  private users: User[] = [];

  constructor() {
    console.log('UserService initialized');
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}`);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Options</h3>

        <p>
            The <code>options</code> prop allows you to pass custom options directly to the Monaco Editor instance. This
            provides
            extensive customization beyond the basic props exposed by the component. This example shows how to configure
            additional editor options such as font size, line height, and cursor style.
        </p>

        <card-docs padding="p-0">
            <div class="w-full">
                <c-code-editor v-model="customOptionsValue" language="javascript" height="300px"
                    :options="customEditorOptions" class="w-full"></c-code-editor>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-code-editor
    v-model="code"
    language="javascript"
    height="300px"
    :options="editorOptions"
  &gt;&lt;/c-code-editor&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const code = ref(`/**
 * This editor has custom options:
 * - Larger font size (16px)
 * - Custom cursor style (block)
 * - Line height (24px)
 * - Rulers at column 80
 */
function customizedEditor() {
  const greeting = "Hello";
  const subject = "World";
  return \`\${greeting}, \${subject}! This is a long line to demonstrate the ruler at column 80.\`;
}`);

const editorOptions = {
  fontSize: 16,
  lineHeight: 24,
  cursorStyle: 'block',
  cursorBlinking: 'smooth',
  rulers: [80],
  renderLineHighlight: 'all',
  roundedSelection: false,
  links: true
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Table" previousLink="/table" next="Menu" nextLink="/menu" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const basicEditorValue = ref(`function helloWorld() {
  console.log("Hello, world!");

  // This is a simple JavaScript function
  return "Hello, world!";
}`);

const readOnlyValue = ref(`<!DOCTYPE html>
<html>
<head>
  <title>Read-Only Example</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a read-only code snippet.</p>
</body>
</html>`);

const themeExampleValue = ref(`interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

class UserService {
  private users: User[] = [];

  constructor() {
    console.log('UserService initialized');
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}`);

const handleEditorMounted = (editor) => {
    console.log('Editor mounted:', editor);
};

const customOptionsValue = ref(`/**
 * This editor has custom options:
 * - Larger font size (16px)
 * - Custom cursor style (block)
 * - Line height (24px)
 * - Rulers at column 80
 */
function customizedEditor() {
  const greeting = "Hello";
  const subject = "World";
  return \`\${greeting}, \${subject}! This is a long line to demonstrate the ruler at column 80.\`;
}`);

const customEditorOptions = {
    fontSize: 16,
    lineHeight: 24,
    cursorStyle: 'block',
    cursorBlinking: 'smooth',
    rulers: [80],
    renderLineHighlight: 'all',
    roundedSelection: false,
    links: true
};
</script>

<style>
.card-docs>div:first-child {
    padding: 0 !important;
}
</style>
