<template>
    <BaseLayout>
        <h1>Rating</h1>

        <p>
            The <code>c-rating</code> component allows users to rate items using customizable icons. It supports
            different sizes, colors, fixed ratings, and emits events when the value changes.
        </p>

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
                    <td><code>modelValue</code></td>
                    <td>Number</td>
                    <td><code>0</code></td>
                    <td>Initial rating value.</td>
                </tr>
                <tr>
                    <td><code>total</code></td>
                    <td>Number</td>
                    <td><code>5</code></td>
                    <td>Total number of rating icons.</td>
                </tr>
                <tr>
                    <td><code>icon</code></td>
                    <td>Component</td>
                    <td><code>IconStar</code></td>
                    <td>Custom icon component for rating.</td>
                </tr>
                <tr>
                    <td><code>color</code></td>
                    <td>String</td>
                    <td><code>"text-yellow-300"</code></td>
                    <td>Color for selected rating icons.</td>
                </tr>
                <tr>
                    <td><code>inactiveColor</code></td>
                    <td>String</td>
                    <td><code>"text-gray-300 dark:text-gray-600"</code></td>
                    <td>Color for unselected rating icons.</td>
                </tr>
                <tr>
                    <td><code>size</code></td>
                    <td>String</td>
                    <td><code>"md"</code></td>
                    <td>Size of the icons (<code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>).</td>
                </tr>
                <tr>
                    <td><code>fixed</code></td>
                    <td>Boolean</td>
                    <td><code>false</code></td>
                    <td>If <code>true</code>, the rating is fixed and cannot be changed.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            Below is a basic example of <code>c-rating</code>. Clicking on an icon will update the rating value.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-rating v-model="ratingValue" />
            <p class="mt-2 text-gray-600 dark:text-gray-300">Selected Rating: {{ ratingValue }}</p>
        </c-card>

        <pre>
            <code>&lt;c-rating v-model="ratingValue" /&gt;</code>
</pre>

        <h3>Custom Icons</h3>

        <p>
            You can customize the icons used for rating by passing an icon component.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-rating v-model="ratingValue" :icon="IconHeart" color="text-red-500" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-rating v-model="ratingValue" :icon="IconHeart" color="text-red-500" /&gt;</code>
</pre>

        <h3>Fixed Rating</h3>

        <p>
            A fixed rating cannot be changed by the user.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-rating v-model="fixedRating" fixed />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-rating v-model="fixedRating" fixed /&gt;</code>
</pre>

        <h3>Different Sizes</h3>

        <p>
            The rating component supports multiple sizes.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center gap-4">
            <c-rating v-model="ratingValue" size="sm" />
            <c-rating v-model="ratingValue" size="md" />
            <c-rating v-model="ratingValue" size="lg" />
            <c-rating v-model="ratingValue" size="xl" />
            <c-rating v-model="ratingValue" size="2xl" />
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-rating v-model="ratingValue" size="lg" /&gt;</code>
</pre>

        <h3>Listening to Events</h3>

        <p>
            The <code>change</code> event is emitted when the user selects a rating.
        </p>

        <c-card variant="flat" class="mx-auto p-4 flex flex-col items-center">
            <c-rating v-model="ratingValue" @change="handleChange" />
            <p class="mt-2 text-gray-600 dark:text-gray-300">Last change: {{ lastChanged }}</p>
        </c-card>

        <pre>
            <code class="code-highlight language-html">&lt;c-rating v-model="ratingValue" @change="handleChange" /&gt;</code>
        </pre>

        <PagePagination
            previous="Progress Circlar"
            previousLink="/progress-circular"
            next="Tooltip"
            nextLink="/tooltip"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconHeart from "@components/icons/IconHeart.vue";

const ratingValue = ref(3);
const fixedRating = ref(4);
const lastChanged = ref(null);

const handleChange = (value) => {
    lastChanged.value = `User selected ${value}`;
};
</script>
