<template>
    <BaseLayout>
        <h1>Button Groups</h1>

        <p>The <code>CButtonGroups (alias: c-button-groups)</code> component in the <code>@cmmv/ui</code> framework
            provides a cohesive way to group multiple buttons together. It creates a visual connection between related
            actions, making the UI more intuitive and organized. Button groups are especially useful for toggle options,
            pagination controls, or sets of related actions.</p>

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
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Sets the size of all buttons in the group. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"outlined"</td>
                    <td class="border-b px-4 py-2">Sets the variant style of all buttons in the group. Options:
                        <code>elevated</code>, <code>flat</code>, <code>tonal</code>, <code>outlined</code>,
                        <code>text</code>, <code>plain</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String/Array</td>
                    <td class="border-b px-4 py-2">"bg-white dark:bg-neutral-800"</td>
                    <td class="border-b px-4 py-2">Sets the background color for all buttons in the group. Can be a
                        Tailwind class or array of classes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-gray-900 dark:text-gray-100"</td>
                    <td class="border-b px-4 py-2">Sets the text color for all buttons in the group.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">shadow</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Sets the shadow style for the button group.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">vertical</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Stacks the buttons vertically instead of horizontally.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Example -->
        <h3>Basic Button Group</h3>

        <p>The <code>CButtonGroups</code> component allows multiple buttons to be visually connected, creating a
            cohesive unit. This is particularly useful for related actions or options that form a logical set.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-start">
                <c-button-groups class="mb-4">
                    <c-button>Years</c-button>
                    <c-button>Months</c-button>
                    <c-button>Days</c-button>
                </c-button-groups>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button-groups&gt;
  &lt;c-button&gt;Years&lt;/c-button&gt;
  &lt;c-button&gt;Months&lt;/c-button&gt;
  &lt;c-button&gt;Days&lt;/c-button&gt;
&lt;/c-button-groups&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Variants and Sizes -->
        <h3>Variants and Sizes</h3>

        <p>Button groups inherit styling from the <code>CButton</code> component while ensuring consistent appearance
            across all
            buttons in the group. You can customize the appearance by setting the <code>variant</code>,
            <code>size</code>,
            <code>bgColor</code>, and <code>textColor</code> props on the button group, which will be applied to all
            child
            buttons.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-center gap-6 w-full">
                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold mb-2">Outlined Variant (Default)</h4>
                    <c-button-groups>
                        <c-button>First</c-button>
                        <c-button>Middle</c-button>
                        <c-button>Last</c-button>
                    </c-button-groups>
                </div>

                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold mb-2">Elevated Variant</h4>
                    <c-button-groups variant="elevated">
                        <c-button>First</c-button>
                        <c-button>Middle</c-button>
                        <c-button>Last</c-button>
                    </c-button-groups>
                </div>

                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold mb-2">Different Sizes</h4>
                    <div class="flex flex-col gap-4 items-center">
                        <c-button-groups size="sm">
                            <c-button>Small</c-button>
                            <c-button>Buttons</c-button>
                        </c-button-groups>

                        <c-button-groups size="lg">
                            <c-button>Large</c-button>
                            <c-button>Buttons</c-button>
                        </c-button-groups>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Outlined (Default) --&gt;
&lt;c-button-groups&gt;
  &lt;c-button&gt;First&lt;/c-button&gt;
  &lt;c-button&gt;Middle&lt;/c-button&gt;
  &lt;c-button&gt;Last&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;!-- Elevated --&gt;
&lt;c-button-groups variant="elevated"&gt;
  &lt;c-button&gt;First&lt;/c-button&gt;
  &lt;c-button&gt;Middle&lt;/c-button&gt;
  &lt;c-button&gt;Last&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;!-- Small Size --&gt;
&lt;c-button-groups size="sm"&gt;
  &lt;c-button&gt;Small&lt;/c-button&gt;
  &lt;c-button&gt;Buttons&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;!-- Large Size --&gt;
&lt;c-button-groups size="lg"&gt;
  &lt;c-button&gt;Large&lt;/c-button&gt;
  &lt;c-button&gt;Buttons&lt;/c-button&gt;
&lt;/c-button-groups&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Vertical Orientation -->
        <h3>Vertical Button Groups</h3>

        <p>The <code>CButtonGroups</code> component can be oriented vertically using the <code>vertical</code> prop.
            This stacks
            buttons on top of each other, which can be useful for sidebar navigation, settings panels, or any interface
            where
            vertical space is more available than horizontal space.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex justify-center items-center gap-8">
                <c-button-groups vertical>
                    <c-button>Top</c-button>
                    <c-button>Middle</c-button>
                    <c-button>Bottom</c-button>
                </c-button-groups>

                <c-button-groups vertical variant="flat">
                    <c-button>Option 1</c-button>
                    <c-button>Option 2</c-button>
                    <c-button>Option 3</c-button>
                </c-button-groups>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button-groups vertical&gt;
  &lt;c-button&gt;Top&lt;/c-button&gt;
  &lt;c-button&gt;Middle&lt;/c-button&gt;
  &lt;c-button&gt;Bottom&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;c-button-groups vertical variant="flat"&gt;
  &lt;c-button&gt;Option 1&lt;/c-button&gt;
  &lt;c-button&gt;Option 2&lt;/c-button&gt;
  &lt;c-button&gt;Option 3&lt;/c-button&gt;
&lt;/c-button-groups&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Custom Styling -->
        <h3>Custom Styling</h3>

        <p>Button groups can be customized with different background colors, text colors, and other styling options. By
            setting
            these properties on the group component, all child buttons will inherit the same styling, ensuring a
            consistent
            appearance.</p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center justify-center gap-4">
                <c-button-groups bg-color="bg-indigo-600 hover:bg-indigo-700" text-color="text-white">
                    <c-button>Home</c-button>
                    <c-button>Products</c-button>
                    <c-button>About</c-button>
                </c-button-groups>

                <c-button-groups bg-color="bg-emerald-50 hover:bg-emerald-100" text-color="text-emerald-800">
                    <c-button>Daily</c-button>
                    <c-button>Weekly</c-button>
                    <c-button>Monthly</c-button>
                </c-button-groups>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-button-groups
  bg-color="bg-indigo-600 hover:bg-indigo-700"
  text-color="text-white"&gt;
  &lt;c-button&gt;Home&lt;/c-button&gt;
  &lt;c-button&gt;Products&lt;/c-button&gt;
  &lt;c-button&gt;About&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;c-button-groups
  bg-color="bg-emerald-50 hover:bg-emerald-100"
  text-color="text-emerald-800"&gt;
  &lt;c-button&gt;Daily&lt;/c-button&gt;
  &lt;c-button&gt;Weekly&lt;/c-button&gt;
  &lt;c-button&gt;Monthly&lt;/c-button&gt;
&lt;/c-button-groups&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Button Group Use Cases -->
        <h3>Common Use Cases</h3>

        <p>Button groups are versatile components that can be applied in various UI scenarios. Here are some common use
            cases:
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center gap-6">
                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold mb-2">Pagination Controls</h4>
                    <c-button-groups>
                        <c-button>Previous</c-button>
                        <c-button>1</c-button>
                        <c-button>2</c-button>
                        <c-button>3</c-button>
                        <c-button>Next</c-button>
                    </c-button-groups>
                </div>

                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold mb-2">Toggle Options</h4>
                    <c-button-groups bg-color="bg-gray-100 dark:bg-gray-800"
                        text-color="text-gray-800 dark:text-gray-200">
                        <c-button>List</c-button>
                        <c-button>Grid</c-button>
                        <c-button>Table</c-button>
                    </c-button-groups>
                </div>

                <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold mb-2">Action Groups</h4>
                    <c-button-groups variant="elevated" bg-color="bg-blue-600 hover:bg-blue-700"
                        text-color="text-white">
                        <c-button>Save</c-button>
                        <c-button>Duplicate</c-button>
                        <c-button>Delete</c-button>
                    </c-button-groups>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Pagination Controls --&gt;
&lt;c-button-groups&gt;
  &lt;c-button&gt;Previous&lt;/c-button&gt;
  &lt;c-button&gt;1&lt;/c-button&gt;
  &lt;c-button&gt;2&lt;/c-button&gt;
  &lt;c-button&gt;3&lt;/c-button&gt;
  &lt;c-button&gt;Next&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;!-- Toggle Options --&gt;
&lt;c-button-groups bg-color="bg-gray-100 dark:bg-gray-800" text-color="text-gray-800 dark:text-gray-200"&gt;
  &lt;c-button&gt;List&lt;/c-button&gt;
  &lt;c-button&gt;Grid&lt;/c-button&gt;
  &lt;c-button&gt;Table&lt;/c-button&gt;
&lt;/c-button-groups&gt;

&lt;!-- Action Groups --&gt;
&lt;c-button-groups variant="elevated" bg-color="bg-blue-600 hover:bg-blue-700" text-color="text-white"&gt;
  &lt;c-button&gt;Save&lt;/c-button&gt;
  &lt;c-button&gt;Duplicate&lt;/c-button&gt;
  &lt;c-button&gt;Delete&lt;/c-button&gt;
&lt;/c-button-groups&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Text Editor Example -->
        <h3>Text Editor Example</h3>

        <p>Button groups are excellent for creating toolbar interfaces, such as those found in text editors. This
            example
            demonstrates how to create a simple text editor toolbar without implementing actual editor functionality.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center gap-6">
                <div
                    class="max-w-4xl w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-sm overflow-hidden">
                    <div
                        class="p-2 border-b border-gray-200 dark:border-neutral-700 flex flex-wrap items-center gap-2 bg-gray-50 dark:bg-neutral-800">
                        <!-- Text formatting controls -->
                        <c-button-groups size="sm" variant="flat"
                            bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm">
                            <c-button>
                                <icon-bold size="sm" ariaLabel="Bold" customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                            <c-button>
                                <icon-underline size="sm" ariaLabel="Underline"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                            <c-button>
                                <icon-strikethrough size="sm" ariaLabel="Strikethrough"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                        </c-button-groups>

                        <!-- Alignment and layout controls -->
                        <c-button-groups size="sm" variant="flat"
                            bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm">
                            <c-button>
                                <icon-squares-plus size="sm" ariaLabel="Add section"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                            <c-button>
                                <icon-squares-2x2 size="sm" ariaLabel="Grid layout"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                        </c-button-groups>

                        <!-- Color and style controls -->
                        <c-button-groups size="sm" variant="flat"
                            bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm">
                            <c-button>
                                <icon-swatch size="sm" ariaLabel="Color picker"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                            <c-button>
                                <icon-sparkles size="sm" ariaLabel="Special effects"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                        </c-button-groups>

                        <!-- Insert controls -->
                        <c-button-groups size="sm" variant="flat"
                            bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                            text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm">
                            <c-button>
                                <icon-photo size="sm" ariaLabel="Insert image"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                            <c-button>
                                <icon-link size="sm" ariaLabel="Insert link"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                            <c-button>
                                <icon-table-cells size="sm" ariaLabel="Insert table"
                                    customClass="text-gray-700 dark:text-gray-300" />
                            </c-button>
                        </c-button-groups>

                        <div class="ml-auto"></div>

                        <!-- Action controls -->
                        <c-button-groups size="sm" variant="flat" bg-color="bg-white dark:bg-neutral-800"
                            text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm">
                            <c-button text-color="text-green-600 dark:text-green-400" class="px-2.5 py-1">
                                <icon-check size="sm" ariaLabel="Save"
                                    customClass="mr-1 text-gray-700 dark:text-gray-300" />
                                Save
                            </c-button>
                            <c-button text-color="text-red-600 dark:text-red-400" class="px-2.5 py-1">
                                <icon-x-mark size="sm" ariaLabel="Cancel"
                                    customClass="mr-1 text-gray-700 dark:text-gray-300" />
                                Cancel
                            </c-button>
                        </c-button-groups>
                    </div>

                    <div class="p-4 min-h-[150px] bg-white dark:bg-neutral-900 font-sans">
                        <p class="text-gray-800 dark:text-gray-200 mb-2 text-sm font-medium">Sample Document</p>
                        <p class="text-gray-700 dark:text-gray-300 text-sm mb-2">This is a sample text editor interface
                            created
                            with button groups.</p>
                        <p class="text-gray-500 dark:text-gray-400 text-sm italic">Click on the toolbar buttons above to
                            format
                            text or insert content...</p>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-4xl w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-sm overflow-hidden"&gt;
  &lt;div class="p-2 border-b border-gray-200 dark:border-neutral-700 flex flex-wrap items-center gap-2 bg-gray-50 dark:bg-neutral-800"&gt;
    &lt;!-- Text formatting controls --&gt;
    &lt;c-button-groups size="sm" variant="flat" bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm"&gt;
      &lt;c-button&gt;
        &lt;icon-bold size="sm" ariaLabel="Bold" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
      &lt;c-button&gt;
        &lt;icon-underline size="sm" ariaLabel="Underline" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
      &lt;c-button&gt;
        &lt;icon-strikethrough size="sm" ariaLabel="Strikethrough" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
    &lt;/c-button-groups&gt;

    &lt;!-- Alignment and layout controls --&gt;
    &lt;c-button-groups size="sm" variant="flat" bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm"&gt;
      &lt;c-button&gt;
        &lt;icon-squares-plus size="sm" ariaLabel="Add section" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
      &lt;c-button&gt;
        &lt;icon-squares-2x2 size="sm" ariaLabel="Grid layout" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
    &lt;/c-button-groups&gt;

    &lt;!-- Color and style controls --&gt;
    &lt;c-button-groups size="sm" variant="flat" bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm"&gt;
      &lt;c-button&gt;
        &lt;icon-swatch size="sm" ariaLabel="Color picker" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
      &lt;c-button&gt;
        &lt;icon-sparkles size="sm" ariaLabel="Special effects" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
    &lt;/c-button-groups&gt;

    &lt;!-- Insert controls --&gt;
    &lt;c-button-groups size="sm" variant="flat" bg-color="bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm"&gt;
      &lt;c-button&gt;
        &lt;icon-photo size="sm" ariaLabel="Insert image" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
      &lt;c-button&gt;
        &lt;icon-link size="sm" ariaLabel="Insert link" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
      &lt;c-button&gt;
        &lt;icon-table-cells size="sm" ariaLabel="Insert table" customClass="text-gray-700 dark:text-gray-300" /&gt;
      &lt;/c-button&gt;
    &lt;/c-button-groups&gt;

    &lt;div class="ml-auto"&gt;&lt;/div&gt;

    &lt;!-- Action controls --&gt;
    &lt;c-button-groups size="sm" variant="outlined" bg-color="bg-white dark:bg-neutral-800"
      text-color="text-gray-700 dark:text-gray-300" shadow="shadow-sm"&gt;
      &lt;c-button text-color="text-green-600 dark:text-green-400" class="px-2.5 py-1"&gt;
        &lt;icon-check size="sm" ariaLabel="Save" customClass="mr-1" /&gt;
        Save
      &lt;/c-button&gt;
      &lt;c-button text-color="text-red-600 dark:text-red-400" class="px-2.5 py-1"&gt;
        &lt;icon-x-mark size="sm" ariaLabel="Cancel" customClass="mr-1" /&gt;
        Cancel
      &lt;/c-button&gt;
    &lt;/c-button-groups&gt;
  &lt;/div&gt;

  &lt;div class="p-4 min-h-[150px] bg-white dark:bg-neutral-900 font-sans"&gt;
    &lt;p class="text-gray-800 dark:text-gray-200 mb-2 text-sm font-medium"&gt;Sample Document&lt;/p&gt;
    &lt;p class="text-gray-700 dark:text-gray-300 text-sm mb-2"&gt;This is a sample text editor interface created with button groups.&lt;/p&gt;
    &lt;p class="text-gray-500 dark:text-gray-400 text-sm italic"&gt;Click on the toolbar buttons above to format text or insert content...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Button" previousLink="/button" next="Card" nextLink="/card" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CButtonGroups from "@components/components/CButtonGroups.vue";
import CButton from "@components/components/CButton.vue";
</script>
