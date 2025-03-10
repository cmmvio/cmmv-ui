<template>
    <BaseLayout>
        <h1>Chips Input</h1>

        <p>
            The <code>CChipsInput (alias: c-chips-input)</code> component in the <code>@cmmv/ui</code> framework provides a
            versatile input field for selecting multiple options and displaying them as badges or "chips". It combines the
            dropdown functionality of a combobox with the tagging capability of badges, making it ideal for tag selection,
            filtering, and multi-option management.
        </p>

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
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2"><code>[]</code></td>
                    <td class="border-b px-4 py-2">The array of selected chips bound to the field using <code>v-model</code>.
                        Each item should have a <code>value</code> and <code>label</code> property.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">options</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2"><code>[]</code></td>
                    <td class="border-b px-4 py-2">The list of available options formatted as
                        <code>{ value: '', label: '' }</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>undefined</code></td>
                    <td class="border-b px-4 py-2">The label displayed above the input field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"Type to search or add new tag"</code></td>
                    <td class="border-b px-4 py-2">Placeholder text shown when no chips are selected.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"md"</code></td>
                    <td class="border-b px-4 py-2">Controls the input size. Options: <code>sm</code>,
                        <code>md</code>, <code>lg</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"default"</code></td>
                    <td class="border-b px-4 py-2">Defines the border radius. Options: <code>none</code>,
                        <code>default</code>, <code>full</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"default"</code></td>
                    <td class="border-b px-4 py-2">Defines the input style. Options: <code>default</code>,
                        <code>outlined</code>, <code>filled</code>.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Disables the input field, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">clearable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>true</code></td>
                    <td class="border-b px-4 py-2">Shows a clear button to remove all chips at once.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">required</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Adds a required indicator (*) to the label.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hint</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>null</code></td>
                    <td class="border-b px-4 py-2">Helper text shown below the input.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"bg-white dark:bg-neutral-900"</code></td>
                    <td class="border-b px-4 py-2">Custom background color class for the input.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>""</code></td>
                    <td class="border-b px-4 py-2">Custom text color class for the input text.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">chipBorderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"border border-blue-300 dark:border-blue-700"</code></td>
                    <td class="border-b px-4 py-2">Border color for the chip badges.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">chipBgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"bg-blue-100 dark:bg-blue-900"</code></td>
                    <td class="border-b px-4 py-2">Background color for the chip badges.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">chipTextColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2"><code>"text-blue-800 dark:text-blue-300"</code></td>
                    <td class="border-b px-4 py-2">Text color for the chip badges.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">allowCustom</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>true</code></td>
                    <td class="border-b px-4 py-2">Allows creating custom chips by typing text and pressing space, comma, or Enter.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxTags</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2"><code>Infinity</code></td>
                    <td class="border-b px-4 py-2">Maximum number of chips that can be added.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">duplicates</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2"><code>false</code></td>
                    <td class="border-b px-4 py-2">Allows duplicate chips when set to true.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The basic usage of the <code>CChipsInput</code> component allows users to select from predefined options and see them
            displayed as chips inside the input field. Users can also type to search through the available options.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-chips-input
                        v-model="selectedTags"
                        label="Select tags"
                        :options="availableTags"
                    />
                    <p class="mt-2 text-neutral-600 dark:text-neutral-300" v-if="selectedTags.length > 0">
                        Selected: {{ selectedTags.map(tag => tag.label).join(', ') }}
                    </p>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chips-input
        v-model="selectedTags"
        label="Select tags"
        :options="availableTags"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const availableTags = [
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'typescript', label: 'TypeScript' }
];

const selectedTags = ref([]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Tags</h3>

        <p>
            By default, the <code>CChipsInput</code> component allows users to create custom tags by typing and pressing space, comma, or
            Enter. This makes it ideal for free-form tagging scenarios like blog post tags or keywords.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-chips-input
                        v-model="customTags"
                        label="Add tags (type and press Enter or comma)"
                        placeholder="Type a custom tag..."
                        :options="[]"
                    />
                    <p class="mt-2 text-xs text-neutral-500">
                        Try typing a word and pressing space, comma, or Enter to create a tag
                    </p>
                    <p class="mt-2 text-neutral-600 dark:text-neutral-300" v-if="customTags.length > 0">
                        Tags: {{ customTags.map(tag => tag.label).join(', ') }}
                    </p>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chips-input
        v-model="customTags"
        label="Add tags (type and press Enter or comma)"
        placeholder="Type a custom tag..."
        :options="[]"
    /&gt;
    &lt;p class="mt-2 text-xs text-neutral-500"&gt;
        Try typing a word and pressing space, comma, or Enter to create a tag
    &lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const customTags = ref([]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Predefined Selection</h3>

        <p>
            The <code>CChipsInput</code> component can be initialized with preselected values. The component will automatically
            remove these options from the dropdown to prevent duplicate selection.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-chips-input
                        v-model="preselectedTags"
                        label="Programming Languages"
                        :options="languageTags"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chips-input
        v-model="preselectedTags"
        label="Programming Languages"
        :options="languageTags"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const languageTags = [
    { value: 'js', label: 'JavaScript' },
    { value: 'py', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cs', label: 'C#' },
    { value: 'go', label: 'Golang' }
];

// Initialize with preselected values
const preselectedTags = ref([
    { value: 'js', label: 'JavaScript' },
    { value: 'py', label: 'Python' }
]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Styling</h3>

        <p>
            The <code>CChipsInput</code> component allows customizing both the input field and the chip badges through dedicated
            props. You can change colors, border radius, and other visual aspects to match your application's design.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-chips-input
                        v-model="customStyledTags"
                        label="Categories"
                        :options="categoryTags"
                        variant="outlined"
                        rounded="full"
                        chipBgColor="bg-purple-100 dark:bg-purple-900"
                        chipTextColor="text-purple-800 dark:text-purple-300"
                        chipBorderColor="border border-purple-300 dark:border-purple-700"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chips-input
        v-model="customStyledTags"
        label="Categories"
        :options="categoryTags"
        variant="outlined"
        rounded="full"
        chipBgColor="bg-purple-100 dark:bg-purple-900"
        chipTextColor="text-purple-800 dark:text-purple-300"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const categoryTags = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'books', label: 'Books' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'sports', label: 'Sports' }
];

const customStyledTags = ref([]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>With Maximum Tags Limit</h3>

        <p>
            You can limit the number of tags that can be added to the input using the <code>maxTags</code> prop. This is useful for
            scenarios where you want to restrict the number of selections, such as limiting users to 5 tags per post.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-chips-input
                        v-model="limitedTags"
                        label="Select up to 3 interests"
                        :options="interestTags"
                        :maxTags="3"
                        hint="Maximum 3 tags allowed"
                    />
                    <p class="mt-2 text-neutral-600 dark:text-neutral-300">
                        Selected: {{ limitedTags.length }}/3
                    </p>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chips-input
        v-model="limitedTags"
        label="Select up to 3 interests"
        :options="interestTags"
        :maxTags="3"
        hint="Maximum 3 tags allowed"
    /&gt;
    &lt;p class="mt-2 text-neutral-600 dark:text-neutral-300"&gt;
        Selected: {{ limitedTags.length }}/3
    &lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const interestTags = [
    { value: 'art', label: 'Art' },
    { value: 'music', label: 'Music' },
    { value: 'sports', label: 'Sports' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'travel', label: 'Travel' },
    { value: 'photography', label: 'Photography' },
    { value: 'technology', label: 'Technology' }
];

const limitedTags = ref([]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Events</h3>
        <p>The <code>CChipsInput</code> component emits the following events:</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Payload</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">update:modelValue</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">Emitted when chips are added, removed, or all cleared, with the current array of selected chips.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">add</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when a chip is added, with the added chip object.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">remove</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when a chip is removed, with the removed chip object.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">clear</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when all chips are cleared.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Handling Events Example</h3>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center space-y-4 h-[300px]">
                <div class="w-full max-w-[400px]">
                    <c-chips-input
                        v-model="eventTags"
                        label="Tags with Events"
                        :options="fruitTags"
                        @add="onTagAdded"
                        @remove="onTagRemoved"
                        @clear="onTagsCleared"
                    />
                    <div class="mt-2 p-2 bg-neutral-100 dark:bg-neutral-800 rounded text-sm max-h-[100px] overflow-auto">
                        <div v-for="(log, index) in eventLogs" :key="index" class="mb-1">
                            {{ log }}
                        </div>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-chips-input
        v-model="eventTags"
        label="Tags with Events"
        :options="fruitTags"
        @add="onTagAdded"
        @remove="onTagRemoved"
        @clear="onTagsCleared"
    /&gt;
    &lt;div class="mt-2 p-2 bg-neutral-100 dark:bg-neutral-800 rounded text-sm"&gt;
        &lt;div v-for="(log, index) in eventLogs" :key="index" class="mb-1"&gt;
            {{ log }}
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const fruitTags = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'kiwi', label: 'Kiwi' }
];

const eventTags = ref([]);
const eventLogs = ref([]);

const onTagAdded = (tag) => {
    eventLogs.value.unshift(`Added: ${tag.label}`);
};

const onTagRemoved = (tag) => {
    eventLogs.value.unshift(`Removed: ${tag.label}`);
};

const onTagsCleared = () => {
    eventLogs.value.unshift('All tags cleared');
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Checkbox" previousLink="/checkbox" next="Combobox" nextLink="/combobox" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

const availableTags = [
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'typescript', label: 'TypeScript' }
];

const selectedTags = ref([]);
const customTags = ref([]);

const languageTags = [
    { value: 'js', label: 'JavaScript' },
    { value: 'py', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cs', label: 'C#' },
    { value: 'go', label: 'Golang' }
];
const preselectedTags = ref([
    { value: 'js', label: 'JavaScript' },
    { value: 'py', label: 'Python' }
]);

const categoryTags = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'books', label: 'Books' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'sports', label: 'Sports' }
];

const customStyledTags = ref([]);

const interestTags = [
    { value: 'art', label: 'Art' },
    { value: 'music', label: 'Music' },
    { value: 'sports', label: 'Sports' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'travel', label: 'Travel' },
    { value: 'photography', label: 'Photography' },
    { value: 'technology', label: 'Technology' }
];

const limitedTags = ref([]);

const fruitTags = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'kiwi', label: 'Kiwi' }
];
const eventTags = ref([]);
const eventLogs = ref([]);

const onTagAdded = (tag) => {
    eventLogs.value.unshift(`Added: ${tag.label}`);
};

const onTagRemoved = (tag) => {
    eventLogs.value.unshift(`Removed: ${tag.label}`);
};

const onTagsCleared = () => {
    eventLogs.value.unshift('All tags cleared');
};
</script>
