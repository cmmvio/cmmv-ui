<template>
    <BaseLayout>
        <h1>Alert</h1>

        <p>The <code>CAlert</code> (c-alert) component provides a customizable alert message box for your application. It supports multiple types, styles, and interactive options for various use cases like success messages, warnings, or error notifications.</p>

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
                    <td class="border-b px-4 py-2">title</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Optional title displayed prominently at the top of the alert.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">closable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">If true, displays a close button on the alert.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Controls whether an icon is displayed based on the type.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">type</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">info</td>
                    <td class="border-b px-4 py-2">Defines the type of alert (success, info, warning, error).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Custom background color, overrides default based on type.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Custom text color, overrides default based on type.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">outlined</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">If true, displays the alert with an outlined style.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">aria-label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Alert</td>
                    <td class="border-b px-4 py-2">Defines the ARIA label for accessibility purposes.</td>
                </tr>
            </tbody>
        </table>

        <!-- Basic Usage -->

        <h2>Basic Usage</h2>

        <p>Using the default setup, you can quickly create alerts for user feedback. These alerts integrate seamlessly into your application's UI with minimal configuration.</p>
        
        <card-docs>
            <c-alert type="success" title="Success" icon>
                Operation completed successfully.
            </c-alert>
        </card-docs>
        <pre>
            <code class="code-highlight language-html">&lt;c-alert type="success" title="Success" icon&gt;
    Operation completed successfully.
&lt;/c-alert&gt;</code>
        </pre>

        <!-- Closable -->
        <h2>Closable</h2>

        <p>Add interactivity to your alerts by enabling the close button. This allows users to dismiss messages after reading them.</p>
        
        <card-docs>
            <c-alert type="error" title="Error" closable>
                Something went wrong. Please try again.
            </c-alert>
        </card-docs>
        <pre>
            <code class="code-highlight language-html">&lt;c-alert type="error" title="Error" closable&gt;
    Something went wrong. Please try again.
&lt;/c-alert&gt;</code>
        </pre>

        <h2>Custom Colors</h2>

        <p>For unique branding or design requirements, you can define custom background and text colors to match your application's theme.</p>
        
        <card-docs>
            <c-alert 
                title="Custom Alert" 
                bgColor="bg-purple-500" 
                textColor="text-white"
                icon
            >
                This is a custom alert with overridden colors.
            </c-alert>
        </card-docs>

        <pre>
            <code class="code-highlight language-html">&lt;c-alert 
    title="Custom Alert" 
    bgColor="bg-purple-500" 
    textColor="text-white"
    icon
&gt;
    This is a custom alert with overridden colors.
&lt;/c-alert&gt;</code>
        </pre>

        <!-- Outlined -->
        <h2>Outlined</h2>

        <p>Use outlined styles for a minimalist design. These alerts are subtle yet clear, ideal for less intrusive notifications.</p>

        <c-card class="px-6 mt-4">
            <c-alert type="warning" outlined>
                This is an outlined warning alert.
            </c-alert>

            <c-alert type="success" outlined>
                This is an outlined success alert.
            </c-alert>

            <c-alert type="error" outlined>
                This is an outlined error alert.
            </c-alert>

            <c-alert type="info" outlined>
                This is an outlined info alert.
            </c-alert>
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-alert type="warning" outlined&gt;
    This is an outlined warning alert.
&lt;/c-alert&gt;

&lt;c-alert type="success" outlined&gt;
    This is an outlined success alert.
&lt;/c-alert&gt;

&lt;c-alert type="error" outlined&gt;
    This is an outlined error alert.
&lt;/c-alert&gt;

&lt;c-alert type="info" outlined&gt;
    This is an outlined info alert.
&lt;/c-alert&gt;</code>
        </pre>

        <!-- Icon -->
        <h3>Icon</h3>
        <p>Icons enhance visual feedback and help users quickly identify the purpose of an alert. They can be customized or hidden as needed.</p>
        <card-docs>
            <c-alert type="info" title="Information" icon>
                This alert includes an informational icon for better context.
            </c-alert>
        </card-docs>
        <pre>
            <code class="code-highlight language-html">&lt;c-alert type="info" title="Information" icon&gt;
    This alert includes an informational icon for better context.
&lt;/c-alert&gt;</code>
        </pre>

        <!-- Accessibility -->
        <h3>Accessibility</h3>
        <p>The <code>CAlert</code> component includes built-in ARIA support to ensure alerts are accessible to all users, including those relying on screen readers.</p>
        <card-docs>
            <c-alert aria-label="Important alert" type="error" title="Critical Error">
                A critical error has occurred. Please contact support.
            </c-alert>
        </card-docs>
        <pre>
            <code class="code-highlight language-html">&lt;c-alert aria-label="Important alert" type="error" title="Critical Error"&gt;
    A critical error has occurred. Please contact support.
&lt;/c-alert&gt;</code>
        </pre>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
</script>
