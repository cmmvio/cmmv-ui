<template>
    <BaseLayout>
        <h1>Image</h1>

        <p>
            The <code>CImage (alias: c-image)</code> component provides an enhanced image display with support for responsive sizes,
            object-fit properties, lazy loading, aspect ratios, and error handling. It's designed to improve user experience
            by offering smooth loading states and consistent image presentation.
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
                    <td class="border-b px-4 py-2">src</td>
                    <td class="border-b px-4 py-2">[String, Array]</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">URL of the image to display, or array of image URLs for gallery mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">alt</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Alternative text for the image (for accessibility).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">width</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Width of the image element.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Height of the image element.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">cover</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">If true, applies <code>object-cover</code> to make the image cover its container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">contain</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">If true, applies <code>object-contain</code> to make the image fit within its container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">responsive</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">If true, makes the image responsive (width 100%, height auto).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">[String, Boolean]</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Applies border radius. Options: true (default rounded), <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">lazyLoad</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">If true, enables native lazy loading of the image.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">[SVG placeholder]</td>
                    <td class="border-b px-4 py-2">URL or data URI of placeholder image shown during loading.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showLoader</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">If true, displays a loader while the image is loading.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">loaderSize</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">md</td>
                    <td class="border-b px-4 py-2">Size of the loader element.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">loaderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">primary</td>
                    <td class="border-b px-4 py-2">Color of the loader element.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">errorText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Failed to load image</td>
                    <td class="border-b px-4 py-2">Text shown when the image fails to load.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">caption</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Caption text displayed below the image.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">customClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Additional CSS classes to apply to the image container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">backgroundPosition</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">center</td>
                    <td class="border-b px-4 py-2">Controls the position of the image when using object-fit.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">transition</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">If true, applies smooth transition effects when loading the image.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">aspectRatio</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">null</td>
                    <td class="border-b px-4 py-2">Sets a fixed aspect ratio for the image container (e.g., 16/9, 4/3).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showGalleryControls</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Shows or hides the navigation arrows in gallery mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showGalleryIndicators</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Shows or hides the pagination indicators in gallery mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">startIndex</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Initial image index to display in gallery mode.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Image</h3>

        <p>
            The basic image component displays an image with default settings. It includes lazy loading and a loading indicator out of the box.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex justify-center">
                <c-image
                    src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
                    alt="Landscape image"
                    width="300"
                />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
        alt="Landscape image"
        width="300"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Responsive Images</h3>

        <p>
            By default, the image component is responsive and adjusts to the width of its container while maintaining the
            correct aspect ratio. You can disable this behavior by setting <code>:responsive="false"</code>.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-lg mx-auto">
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78232.jpeg"
                        alt="Responsive image"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="max-w-lg mx-auto"&gt;
        &lt;c-image
            src="/images/freepik__the-style-is-candid-image-photography-with-natural__78232.jpeg"
            alt="Responsive image"
            :responsive="true" &lt;!-- This is the default --&gt;
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Object Fit Properties</h3>

        <p>
            The image component supports different object-fit properties to control how the image fills its container.
            Use <code>cover</code> to make the image cover the entire area (cropping if needed) or
            <code>contain</code> to show the full image within the container.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">cover: true</p>
                    <div class="h-48 bg-neutral-100 dark:bg-neutral-800 rounded">
                        <c-image
                            src="/images/freepik__the-style-is-candid-image-photography-with-natural__78232.jpeg"
                            alt="Image with cover"
                            :cover="true"
                            class="h-full"
                        />
                    </div>
                </div>
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">contain: true</p>
                    <div class="h-48 bg-neutral-100 dark:bg-neutral-800 rounded">
                        <c-image
                            src="/images/freepik__the-style-is-candid-image-photography-with-natural__78232.jpeg"
                            alt="Image with contain"
                            :contain="true"
                            class="h-full"
                        />
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Cover: Image will cover the entire area (may crop) --&gt;
    &lt;div class="h-48 bg-neutral-100 dark:bg-neutral-800 rounded"&gt;
        &lt;c-image
            src="/images/freepik__the-style-is-candid-image-photography-with-natural__78232.jpeg"
            alt="Image with cover"
            :cover="true"
            class="h-full"
        /&gt;
    &lt;/div&gt;

    &lt;!-- Contain: Image will be fully visible inside the container --&gt;
    &lt;div class="h-48 bg-neutral-100 dark:bg-neutral-800 rounded"&gt;
        &lt;c-image
            src="/images/freepik__the-style-is-candid-image-photography-with-natural__78232.jpeg"
            alt="Image with contain"
            :contain="true"
            class="h-full"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Rounded Corners</h3>

        <p>
            You can add rounded corners to images using the <code>rounded</code> prop.
            Either use a boolean value for default rounding, or specify a size like
            <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, or <code>full</code>
            for circular images.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">rounded: true</p>
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
                        alt="Rounded image"
                        :rounded="true"
                        width="150"
                        height="150"
                        :cover="true"
                        class="mx-auto"
                    />
                </div>
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">rounded: "lg"</p>
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
                        alt="Rounded large image"
                        rounded="lg"
                        width="150"
                        height="150"
                        :cover="true"
                        class="mx-auto"
                    />
                </div>
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">rounded: "full"</p>
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
                        alt="Circular image"
                        rounded="full"
                        width="150"
                        height="150"
                        :cover="true"
                        class="mx-auto"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Default rounded corners --&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
        alt="Rounded image"
        :rounded="true"
        width="150"
        height="150"
        :cover="true"
    /&gt;

    &lt;!-- Large rounded corners --&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
        alt="Rounded large image"
        rounded="lg"
        width="150"
        height="150"
        :cover="true"
    /&gt;

    &lt;!-- Circular image --&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
        alt="Circular image"
        rounded="full"
        width="150"
        height="150"
        :cover="true"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Image with Caption</h3>

        <p>
            Add a descriptive caption below your image by using the <code>caption</code> prop.
            This is useful for providing additional context or attribution for the image.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 max-w-md">
                <c-image
                    src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
                    alt="Mountain landscape"
                    caption="A beautiful mountain landscape captured during sunrise"
                    rounded="md"
                />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
        alt="Mountain landscape"
        caption="A beautiful mountain landscape captured during sunrise"
        rounded="md"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Loader</h3>

        <p>
            Customize the loading spinner with the <code>loaderSize</code> and <code>loaderColor</code> props.
            You can also disable the loader completely with <code>:showLoader="false"</code>.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">Blue loader, size: lg</p>
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
                        alt="Image with custom loader"
                        loaderColor="blue"
                        loaderSize="lg"
                        width="240"
                        class="mx-auto"
                    />
                </div>
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">No loader</p>
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
                        alt="Image without loader"
                        :showLoader="false"
                        width="240"
                        class="mx-auto"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Custom loader color and size --&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
        alt="Image with custom loader"
        loaderColor="blue"
        loaderSize="lg"
        width="240"
    /&gt;

    &lt;!-- Disable loader completely --&gt;
    &lt;c-image
        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
        alt="Image without loader"
        :showLoader="false"
        width="240"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Error Handling</h3>

        <p>
            The image component automatically handles loading errors and displays a message when images fail to load.
            You can customize the error message with the <code>errorText</code> prop.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6 flex justify-center">
                <c-image
                    src="https://non-existent-image-url.jpg"
                    alt="Image that fails to load"
                    errorText="Oops! This image could not be loaded"
                    width="300"
                    height="200"
                />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-image
        src="https://non-existent-image-url.jpg"
        alt="Image that fails to load"
        errorText="Oops! This image could not be loaded"
        width="300"
        height="200"
    /&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Practical Example: Image Gallery</h3>

        <p>
            This example demonstrates how to use the <code>CImage</code> component to create a simple image gallery with
            consistent sizing and loading states.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <c-image
                        src="/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg"
                        alt="Landscape 1"
                        :aspectRatio="4/3"
                        :cover="true"
                        rounded="md"
                    />
                    <c-image
                        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=500"
                        alt="Landscape 2"
                        :aspectRatio="4/3"
                        :cover="true"
                        rounded="md"
                    />
                    <c-image
                        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=500"
                        alt="Landscape 3"
                        :aspectRatio="4/3"
                        :cover="true"
                        rounded="md"
                    />
                    <c-image
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=500"
                        alt="Landscape 4"
                        :aspectRatio="4/3"
                        :cover="true"
                        rounded="md"
                    />
                    <c-image
                        src="https://images.unsplash.com/photo-1497449493050-aad1e7cad165?q=80&w=500"
                        alt="Landscape 5"
                        :aspectRatio="4/3"
                        :cover="true"
                        rounded="md"
                    />
                    <c-image
                        src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=500"
                        alt="Landscape 6"
                        :aspectRatio="4/3"
                        :cover="true"
                        rounded="md"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"&gt;
        &lt;c-image
            src="https://example.com/image1.jpg"
            alt="Landscape 1"
            :aspectRatio="4/3"
            :cover="true"
            rounded="md"
        /&gt;
        &lt;c-image
            src="https://example.com/image2.jpg"
            alt="Landscape 2"
            :aspectRatio="4/3"
            :cover="true"
            rounded="md"
        /&gt;
        &lt;c-image
            src="https://example.com/image3.jpg"
            alt="Landscape 3"
            :aspectRatio="4/3"
            :cover="true"
            rounded="md"
        /&gt;
        &lt;!-- Additional images... --&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Image Carousel Gallery</h3>

        <p>
            The <code>CImage</code> component now supports a carousel gallery mode when provided with an array of images instead of a single string URL.
            This mode automatically adds navigation arrows and pagination indicators, similar to the Instagram-style dialog example.
        </p>

        <card-docs>
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-lg mx-auto">
                    <c-image
                        :src="[
                            '/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg',
                            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800',
                            'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800',
                            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800'
                        ]"
                        alt="Landscape gallery"
                        :aspectRatio="16/9"
                        :cover="true"
                        rounded="md"
                        caption="Use the arrows or dots to navigate between images"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="max-w-lg mx-auto"&gt;
        &lt;c-image
            :src="[
                '/path/to/image1.jpg',
                '/path/to/image2.jpg',
                '/path/to/image3.jpg',
                '/path/to/image4.jpg'
            ]"
            alt="Landscape gallery"
            :aspectRatio="16/9"
            :cover="true"
            rounded="md"
            caption="Use the arrows or dots to navigate between images"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Icon" previousLink="/icon" next="Loader" nextLink="/loader" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import CImage from "@components/components/CImage.vue";

// Array of image URLs for the carousel examples (mantido para referência)
const carouselImages = ref([
    '/images/freepik__the-style-is-candid-image-photography-with-natural__78231.jpeg',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800'
]);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
