<template>
    <BaseLayout>
        <c-seo
            section="Skeleton Component"
            description="Learn how to use the CSkeleton component in CMMV UI. A loading placeholder component for creating smooth content loading states with customizable shapes and animations."
            :keywords="['skeleton', 'component', 'ui', 'loading', 'placeholder', 'animation']"
        />

        <h1>Skeleton</h1>

        <p>
            The <code>CSkeleton</code> component creates placeholder loading states that mimic the structure of your
            content before it loads.
            This provides users with a better experience by showing a preview of the content's layout rather than a
            traditional spinner or blank screen.
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
                    <td class="border-b px-4 py-2">type</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'text'</td>
                    <td class="border-b px-4 py-2">Type of skeleton: 'text', 'image', 'image-text', 'video', 'card', or
                        'list'</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'default'</td>
                    <td class="border-b px-4 py-2">Visual variant: 'default', 'primary', 'secondary', 'dark', or 'light'
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">animated</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to show the loading animation effect</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">animationType</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'pulse'</td>
                    <td class="border-b px-4 py-2">Animation type: 'pulse' or 'shine'</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Apply fully rounded corners to elements</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">customClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Custom CSS class to apply to the skeleton</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">customStyle</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">Custom inline styles to apply to the skeleton</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lines</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">3</td>
                    <td class="border-b px-4 py-2">Number of lines for text skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">title</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether the first line should be taller (like a title)</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lastLineWidth</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">70</td>
                    <td class="border-b px-4 py-2">Width percentage of the last line</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">width</td>
                    <td class="border-b px-4 py-2">Number/String</td>
                    <td class="border-b px-4 py-2">'100%'</td>
                    <td class="border-b px-4 py-2">Width of image and video skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">200</td>
                    <td class="border-b px-4 py-2">Height of image and video skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">icon</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to show an icon in image skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">imageWidth</td>
                    <td class="border-b px-4 py-2">Number/String</td>
                    <td class="border-b px-4 py-2">100</td>
                    <td class="border-b px-4 py-2">Width of image in image-text skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">imageHeight</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">100</td>
                    <td class="border-b px-4 py-2">Height of image in image-text skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">imageTextLines</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">2</td>
                    <td class="border-b px-4 py-2">Number of text lines in image-text skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">cardHeight</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Height of card skeletons (auto if null)</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">cardImage</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to include an image in card skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">cardImageHeight</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">140</td>
                    <td class="border-b px-4 py-2">Height of image in card skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">cardLines</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">3</td>
                    <td class="border-b px-4 py-2">Number of text lines in card skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">listItems</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">3</td>
                    <td class="border-b px-4 py-2">Number of items in list skeletons</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">listItemLines</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">2</td>
                    <td class="border-b px-4 py-2">Number of text lines per list item</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">listItemAvatar</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Whether to include avatars in list items</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">listItemAvatarSize</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">40</td>
                    <td class="border-b px-4 py-2">Size of avatars in list items</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Text Skeleton</h3>
        <p>The text skeleton is used to represent blocks of text content that is loading.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto" style="max-width: 780px;">
                <CSkeleton type="text" :lines="3" />

                <CSkeleton type="text" :lines="5" :lastLineWidth="40" variant="primary" />

                <CSkeleton type="text" :title="false" :lines="2" />

                <CSkeleton type="text" :animated="false" variant="light" />
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Basic text skeleton --&gt;
&lt;CSkeleton type="text" :lines="3" /&gt;

&lt;!-- Text skeleton with more lines and custom last line width --&gt;
&lt;CSkeleton type="text" :lines="5" :lastLineWidth="40" variant="primary" /&gt;

&lt;!-- Text skeleton without title styling --&gt;
&lt;CSkeleton type="text" :title="false" :lines="2" /&gt;

&lt;!-- Text skeleton without animation --&gt;
&lt;CSkeleton type="text" :animated="false" variant="light" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Image Skeleton</h3>
        <p>Use image skeletons to represent images that are still loading.</p>

        <card-docs>
            <div style="max-width: 780px;" class="mx-auto">
                <CSkeleton type="image" :height="150" />
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Image skeleton --&gt;
&lt;CSkeleton type="image" :height="150" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Video Skeleton</h3>
        <p>Video skeletons represent video elements that are loading.</p>

        <card-docs>
            <div style="max-width: 780px;" class="mx-auto">
                <CSkeleton type="video" :width="300" :height="180" />
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Video skeleton --&gt;
&lt;CSkeleton type="video" :width="300" :height="180" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Card Skeleton</h3>
        <p>Card skeletons are perfect for placeholder cards with image and text content.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto" style="max-width: 780px;">
                <CSkeleton type="card" :cardImageHeight="120" :cardLines="3" />

                <CSkeleton type="card" :cardImage="false" :cardLines="4" variant="light" />

                <CSkeleton type="card" :cardImageHeight="150" :cardLines="2" :lastLineWidth="40" variant="primary" />

                <CSkeleton type="card" :cardHeight="250" :cardImageHeight="100" :cardLines="3" variant="secondary" />
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Basic card skeleton --&gt;
&lt;CSkeleton type="card" :cardImageHeight="120" :cardLines="3" /&gt;

&lt;!-- Card skeleton without image --&gt;
&lt;CSkeleton
  type="card"
  :cardImage="false"
  :cardLines="4"
  variant="light"
/&gt;

&lt;!-- Card skeleton with primary variant --&gt;
&lt;CSkeleton
  type="card"
  :cardImageHeight="150"
  :cardLines="2"
  :lastLineWidth="40"
  variant="primary"
/&gt;

&lt;!-- Card skeleton with fixed height --&gt;
&lt;CSkeleton
  type="card"
  :cardHeight="250"
  :cardImageHeight="100"
  :cardLines="3"
  variant="secondary"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>List Skeleton</h3>
        <p>List skeletons are useful for representing a list of items that are loading.</p>

        <card-docs>
            <div class="space-y-8 mx-auto" style="max-width: 780px;">
                <CSkeleton type="list" :listItems="3" :listItemLines="2" />

                <CSkeleton type="list" :listItems="3" :listItemAvatar="true" :listItemAvatarSize="50" :listItemLines="2"
                    variant="primary" />

                <CSkeleton type="list" :listItems="2" :listItemAvatar="true" :listItemAvatarSize="40" :listItemLines="1"
                    rounded variant="light" />
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Basic list skeleton --&gt;
&lt;CSkeleton type="list" :listItems="3" :listItemLines="2" /&gt;

&lt;!-- List skeleton with avatars --&gt;
&lt;CSkeleton
  type="list"
  :listItems="3"
  :listItemAvatar="true"
  :listItemAvatarSize="50"
  :listItemLines="2"
  variant="primary"
/&gt;

&lt;!-- List skeleton with rounded avatars and single line --&gt;
&lt;CSkeleton
  type="list"
  :listItems="2"
  :listItemAvatar="true"
  :listItemAvatarSize="40"
  :listItemLines="1"
  rounded
  variant="light"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Variants</h3>
        <p>Choose from different variants to match your design system.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto" style="max-width: 780px;">
                <div>
                    <p class="mb-2 font-semibold">Default</p>
                    <CSkeleton type="text" :lines="3" variant="default" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Primary</p>
                    <CSkeleton type="text" :lines="3" variant="primary" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Secondary</p>
                    <CSkeleton type="text" :lines="3" variant="secondary" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Light</p>
                    <CSkeleton type="text" :lines="3" variant="light" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Dark</p>
                    <CSkeleton type="text" :lines="3" variant="dark" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Non-animated</p>
                    <CSkeleton type="text" :lines="3" :animated="false" />
                </div>
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Default variant --&gt;
&lt;CSkeleton type="text" :lines="3" variant="default" /&gt;

&lt;!-- Primary variant --&gt;
&lt;CSkeleton type="text" :lines="3" variant="primary" /&gt;

&lt;!-- Secondary variant --&gt;
&lt;CSkeleton type="text" :lines="3" variant="secondary" /&gt;

&lt;!-- Light variant --&gt;
&lt;CSkeleton type="text" :lines="3" variant="light" /&gt;

&lt;!-- Dark variant --&gt;
&lt;CSkeleton type="text" :lines="3" variant="dark" /&gt;

&lt;!-- Non-animated skeleton --&gt;
&lt;CSkeleton type="text" :lines="3" :animated="false" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Animation Types</h3>
        <p>The component supports two animation types: 'pulse' (default) and 'shine'.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto" style="max-width: 780px;">
                <div>
                    <p class="mb-2 font-semibold">Pulse Animation (Default)</p>
                    <CSkeleton type="text" :lines="3" animationType="pulse" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Shine Animation</p>
                    <CSkeleton type="text" :lines="3" animationType="shine" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Card with Pulse Animation</p>
                    <CSkeleton type="card" :cardLines="3" animationType="pulse" />
                </div>

                <div>
                    <p class="mb-2 font-semibold">Card with Shine Animation</p>
                    <CSkeleton type="card" :cardLines="3" animationType="shine" />
                </div>
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Pulse animation (default) --&gt;
&lt;CSkeleton type="text" :lines="3" animationType="pulse" /&gt;

&lt;!-- Shine animation --&gt;
&lt;CSkeleton type="text" :lines="3" animationType="shine" /&gt;

&lt;!-- Card with pulse animation --&gt;
&lt;CSkeleton type="card" :cardLines="3" animationType="pulse" /&gt;

&lt;!-- Card with shine animation --&gt;
&lt;CSkeleton type="card" :cardLines="3" animationType="shine" /&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Usage with v-if</h3>
        <p>Skeletons are typically shown conditionally while data is loading.</p>

        <card-docs>
            <template #code>
                <pre><code class="language-html">&lt;template&gt;
  &lt;div class="article-container"&gt;
    &lt;!-- Show skeleton while loading --&gt;
    &lt;CSkeleton v-if="loading" type="card" :cardLines="4" /&gt;

    &lt;!-- Show actual content when loaded --&gt;
    &lt;article v-else class="article"&gt;
      &lt;img :src="article.image" alt="Article image" /&gt;
      &lt;h2&gt;&#123;&#123; article.title &#125;&#125;&lt;/h2&gt;
      &lt;p&gt;&#123;&#123; article.description &#125;&#125;&lt;/p&gt;
    &lt;/article&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue';

const loading = ref(true);
const article = ref(null);

onMounted(async () => {
  // Simulate API call
  setTimeout(() => {
    article.value = {
      title: 'Article Title',
      description: 'Article description...',
      image: 'path/to/image.jpg'
    };
    loading.value = false;
  }, 2000);
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Customizing Icons</h3>
        <p>You can customize the icons used in image and video skeletons using slots.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto" style="max-width: 780px;">
                <CSkeleton type="image" :height="150">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                    </template>
                </CSkeleton>

                <CSkeleton type="video" :height="150">
                    <template #play-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clip-rule="evenodd" />
                        </svg>
                    </template>
                </CSkeleton>
            </div>

            <template #code>
                <pre><code class="language-html">&lt;!-- Custom icon for image skeleton --&gt;
&lt;CSkeleton type="image" :height="150"&gt;
  &lt;template #icon&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"&gt;
      &lt;path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /&gt;
    &lt;/svg&gt;
  &lt;/template&gt;
&lt;/CSkeleton&gt;

&lt;!-- Custom icon for video skeleton --&gt;
&lt;CSkeleton type="video" :height="150"&gt;
  &lt;template #play-icon&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"&gt;
      &lt;path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /&gt;
    &lt;/svg&gt;
  &lt;/template&gt;
&lt;/CSkeleton&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Sidebar" previousLink="/sidebar" next="Speed Dial" nextLink="/speed-dial" />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import CSkeleton from '@/components/layout/CSkeleton.vue';
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
