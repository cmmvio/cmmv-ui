<template>
    <BaseLayout>
        <h1>Rating</h1>

        <p>
            The <code>CRating (alias: c-rating)</code> component allows users to rate items using customizable icons. It
            supports
            different sizes, colors, fixed ratings, and emits events when the value changes.
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
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Initial rating value.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">total</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">5</td>
                    <td class="border-b px-4 py-2">Total number of rating icons.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">Component</td>
                    <td class="border-b px-4 py-2">IconStar</td>
                    <td class="border-b px-4 py-2">Custom icon component for rating.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">color</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-yellow-300"</td>
                    <td class="border-b px-4 py-2">Color for selected rating icons.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">inactiveColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"text-neutral-300 dark:text-neutral-600"</td>
                    <td class="border-b px-4 py-2">Color for unselected rating icons.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"md"</td>
                    <td class="border-b px-4 py-2">Size of the icons (<code>sm</code>, <code>md</code>, <code>lg</code>,
                        <code>xl</code>, <code>2xl</code>).
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fixed</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">If <code>true</code>, the rating is fixed and cannot be changed.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">precision</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0.5</td>
                    <td class="border-b px-4 py-2">The precision of the rating. Options: 0.1, 0.25, 0.5, 1.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showValue</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Whether to display the numeric rating value.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Rating</h3>

        <p>
            The basic rating component allows users to select a rating by clicking on the stars. The selected value is
            automatically updated and can be accessed through the v-model directive.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
                <c-rating v-model="ratingValue" />
                <p class="mt-2 text-neutral-600 dark:text-neutral-300">Selected Rating: {{ ratingValue }}</p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating v-model="ratingValue" /&gt;
    &lt;p class="mt-2"&gt;Selected Rating: {{ ratingValue }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const ratingValue = ref(3);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Icons</h3>

        <p>
            You can customize the rating component by using different icons. This example uses heart icons with a red
            color for
            a more expressive rating experience.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
                <c-rating v-model="ratingValue" :icon="IconHeart" color="text-red-500" />
                <p class="mt-2 text-neutral-600 dark:text-neutral-300">Heart Rating: {{ ratingValue }}</p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating
        v-model="ratingValue"
        :icon="IconHeart"
        color="text-red-500"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import IconHeart from '@components/icons/IconHeart.vue';

const ratingValue = ref(3);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Fixed Rating</h3>

        <p>
            Fixed ratings are useful for displaying user reviews or product ratings where interaction is not needed. The
            <code>fixed</code> prop prevents users from changing the rating.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
                <c-rating v-model="fixedRating" fixed />
                <p class="mt-2 text-neutral-600 dark:text-neutral-300">Fixed Rating: {{ fixedRating }}</p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating v-model="fixedRating" fixed /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const fixedRating = ref(4);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Different Sizes</h3>

        <p>
            The rating component supports multiple sizes to fit various UI contexts. Choose from <code>sm</code>,
            <code>md</code>, <code>lg</code>, <code>xl</code>, or <code>2xl</code> to match your design requirements.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center gap-4">
                <div class="flex items-center gap-4">
                    <span class="w-10 text-right text-sm text-neutral-600 dark:text-neutral-300">sm:</span>
                    <c-rating v-model="ratingValue" size="sm" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-10 text-right text-sm text-neutral-600 dark:text-neutral-300">md:</span>
                    <c-rating v-model="ratingValue" size="md" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-10 text-right text-sm text-neutral-600 dark:text-neutral-300">lg:</span>
                    <c-rating v-model="ratingValue" size="lg" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-10 text-right text-sm text-neutral-600 dark:text-neutral-300">xl:</span>
                    <c-rating v-model="ratingValue" size="xl" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-10 text-right text-sm text-neutral-600 dark:text-neutral-300">2xl:</span>
                    <c-rating v-model="ratingValue" size="2xl" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating v-model="ratingValue" size="sm" /&gt;
    &lt;c-rating v-model="ratingValue" size="md" /&gt;
    &lt;c-rating v-model="ratingValue" size="lg" /&gt;
    &lt;c-rating v-model="ratingValue" size="xl" /&gt;
    &lt;c-rating v-model="ratingValue" size="2xl" /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Colors</h3>

        <p>
            You can customize both the active and inactive colors of the rating component to match your application's
            theme.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center gap-4">
                <c-rating v-model="ratingValue" color="text-purple-500" inactiveColor="text-purple-200" />
                <c-rating v-model="ratingValue" color="text-blue-500" inactiveColor="text-blue-200" />
                <c-rating v-model="ratingValue" color="text-green-500" inactiveColor="text-green-200" />
                <c-rating v-model="ratingValue" color="text-amber-500" inactiveColor="text-amber-200" />
                <c-rating v-model="ratingValue" color="text-rose-500" inactiveColor="text-rose-200" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating
        v-model="ratingValue"
        color="text-purple-500"
        inactiveColor="text-purple-200"
    /&gt;

    &lt;c-rating
        v-model="ratingValue"
        color="text-blue-500"
        inactiveColor="text-blue-200"
    /&gt;

    &lt;c-rating
        v-model="ratingValue"
        color="text-green-500"
        inactiveColor="text-green-200"
    /&gt;

    &lt;c-rating
        v-model="ratingValue"
        color="text-amber-500"
        inactiveColor="text-amber-200"
    /&gt;

    &lt;c-rating
        v-model="ratingValue"
        color="text-rose-500"
        inactiveColor="text-rose-200"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Total</h3>

        <p>
            You can customize the total number of rating icons using the <code>total</code> prop. This is useful for
            different
            rating scales like 1-10 or 1-3.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center gap-4">
                <div class="flex items-center gap-4">
                    <span class="w-16 text-right text-sm text-neutral-600 dark:text-neutral-300">3 stars:</span>
                    <c-rating v-model="rating3" :total="3" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-16 text-right text-sm text-neutral-600 dark:text-neutral-300">5 stars:</span>
                    <c-rating v-model="rating5" :total="5" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-16 text-right text-sm text-neutral-600 dark:text-neutral-300">10 stars:</span>
                    <c-rating v-model="rating10" :total="10" size="sm" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating v-model="rating3" :total="3" /&gt;
    &lt;c-rating v-model="rating5" :total="5" /&gt;
    &lt;c-rating v-model="rating10" :total="10" size="sm" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const rating3 = ref(2);
const rating5 = ref(3);
const rating10 = ref(7);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Partial Ratings</h3>

        <p>
            You can use partial ratings (like 4.5) by setting the <code>precision</code> property. The default precision
            is 0.5
            (half stars).
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center gap-4">
                <div class="flex items-center gap-4">
                    <span class="w-40 text-right text-sm text-neutral-600 dark:text-neutral-300">Precision 0.5
                        (default):</span>
                    <c-rating v-model="ratingHalf" :precision="0.5" :showValue="true" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-40 text-right text-sm text-neutral-600 dark:text-neutral-300">Precision 0.1:</span>
                    <c-rating v-model="ratingTenth" :precision="0.1" :showValue="true" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-40 text-right text-sm text-neutral-600 dark:text-neutral-300">Precision 0.25:</span>
                    <c-rating v-model="ratingQuarter" :precision="0.25" :showValue="true" />
                </div>
                <div class="flex items-center gap-4">
                    <span class="w-40 text-right text-sm text-neutral-600 dark:text-neutral-300">Precision 1 (whole
                        stars):</span>
                    <c-rating v-model="ratingWhole" :precision="1" :showValue="true" />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div&gt;
        &lt;span&gt;Precision 0.5 (default):&lt;/span&gt;
        &lt;c-rating v-model="ratingHalf" :precision="0.5" :showValue="true" /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;span&gt;Precision 0.1:&lt;/span&gt;
        &lt;c-rating v-model="ratingTenth" :precision="0.1" :showValue="true" /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;span&gt;Precision 0.25:&lt;/span&gt;
        &lt;c-rating v-model="ratingQuarter" :precision="0.25" :showValue="true" /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;span&gt;Precision 1 (whole stars only):&lt;/span&gt;
        &lt;c-rating v-model="ratingWhole" :precision="1" :showValue="true" /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const ratingHalf = ref(3.5);
const ratingTenth = ref(3.7);
const ratingQuarter = ref(3.75);
const ratingWhole = ref(4);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Show Numeric Value</h3>

        <p>
            You can display the numeric rating value alongside the stars by setting the <code>showValue</code> property
            to
            <code>true</code>.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
                <c-rating v-model="ratingWithValue" :showValue="true" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating v-model="rating" :showValue="true" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const rating = ref(3.5);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Event Handling</h3>

        <p>
            The rating component emits a <code>change</code> event when the user selects a new rating. This can be used
            to
            trigger actions or update other parts of your application.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
                <c-rating v-model="ratingValue" @change="handleChange" />
                <p class="mt-2 text-neutral-600 dark:text-neutral-300">Last change: {{ lastChanged }}</p>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-rating v-model="ratingValue" @change="handleChange" /&gt;
    &lt;p class="mt-2"&gt;Last change: {{ lastChanged }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const ratingValue = ref(3);
const lastChanged = ref(null);

const handleChange = (value) => {
    lastChanged.value = `User selected ${value}`;
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Practical Example: Product Review</h3>

        <p>
            This example demonstrates how to integrate the rating component in a product review form, combining it with
            other
            form elements.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-md mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
                    <div class="p-4 bg-blue-500 text-white">
                        <h3 class="text-lg font-medium">Product Review</h3>
                    </div>
                    <div class="p-6">
                        <div class="mb-4">
                            <label class="block text-neutral-700 dark:text-neutral-300 text-sm font-bold mb-2">
                                Your Rating
                            </label>
                            <c-rating v-model="reviewRating" size="lg" :precision="0.5" :showValue="true" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-neutral-700 dark:text-neutral-300 text-sm font-bold mb-2">
                                Review Title
                            </label>
                            <input type="text"
                                class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:text-white"
                                placeholder="Summarize your experience" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-neutral-700 dark:text-neutral-300 text-sm font-bold mb-2">
                                Review Details
                            </label>
                            <textarea
                                class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:text-white"
                                rows="3" placeholder="Tell us more about your experience"></textarea>
                        </div>
                        <div class="flex justify-end">
                            <button
                                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="max-w-md mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden"&gt;
        &lt;div class="p-4 bg-blue-500 text-white"&gt;
            &lt;h3 class="text-lg font-medium"&gt;Product Review&lt;/h3&gt;
        &lt;/div&gt;
        &lt;div class="p-6"&gt;
            &lt;div class="mb-4"&gt;
                &lt;label class="block text-neutral-700 dark:text-neutral-300 text-sm font-bold mb-2"&gt;
                    Your Rating
                &lt;/label&gt;
                &lt;c-rating v-model="reviewRating" size="lg" :precision="0.5" :showValue="true" /&gt;
            &lt;/div&gt;
            &lt;div class="mb-4"&gt;
                &lt;label class="block text-neutral-700 dark:text-neutral-300 text-sm font-bold mb-2"&gt;
                    Review Title
                &lt;/label&gt;
                &lt;input
                    type="text"
                    class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:text-white"
                    placeholder="Summarize your experience"
                /&gt;
            &lt;/div&gt;
            &lt;div class="mb-4"&gt;
                &lt;label class="block text-neutral-700 dark:text-neutral-300 text-sm font-bold mb-2"&gt;
                    Review Details
                &lt;/label&gt;
                &lt;textarea
                    class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:text-white"
                    rows="3"
                    placeholder="Tell us more about your experience"
                &gt;&lt;/textarea&gt;
            &lt;/div&gt;
            &lt;div class="flex justify-end"&gt;
                &lt;button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"&gt;
                    Submit Review
                &lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const reviewRating = ref(0);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Progress Circular" previousLink="/progress-circular" next="System Bar"
            nextLink="/system-bar" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import IconHeart from "@components/icons/IconHeart.vue";
import CRating from "@components/components/CRating.vue";

const ratingValue = ref(3);
const fixedRating = ref(4);
const lastChanged = ref(null);
const rating3 = ref(2);
const rating5 = ref(3);
const rating10 = ref(7);
const reviewRating = ref(0);

// New variables for partial ratings
const ratingHalf = ref(3.5);
const ratingTenth = ref(3.7);
const ratingQuarter = ref(3.75);
const ratingWhole = ref(4);
const ratingWithValue = ref(3.5);

const handleChange = (value) => {
    lastChanged.value = `User selected ${value}`;
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
