<template>
    <BaseLayout>
        <c-seo
            section="Dialog Component"
            description="Learn how to use the CDialog component in CMMV UI. A versatile modal dialog component for displaying content, forms, and interactive elements with customizable transitions and styling."
            :keywords="['dialog', 'component', 'ui', 'modal', 'popup', 'overlay']"
        />

        <h1>Dialog</h1>

        <p>
            The <code>CDialog</code> component provides a flexible and accessible modal dialog.
            It supports customization of background color, text color, border color, and more.
            The dialog can be opened programmatically or via a slot activator.
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
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Controls the visibility of the dialog.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">modal</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Prevents closing the dialog when clicking outside.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fullscreen</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Expands the dialog to full-screen mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">closable</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Enables or disables the close button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">overlayBgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">#000</td>
                    <td class="border-b px-4 py-2">Background color of the overlay.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">overlayOpacity</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">50</td>
                    <td class="border-b px-4 py-2">Opacity of the overlay background.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">animation</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">zoom</td>
                    <td class="border-b px-4 py-2">Animation type (zoom, slide-down, slide-right, flip, bounce).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">animationDuration</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">400</td>
                    <td class="border-b px-4 py-2">Duration of the animation in milliseconds.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">collapsed</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Enables compact mode with reduced padding, smaller header (48px height), and smaller text.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Dialog</h3>

        <p>
            The <strong>Basic Dialog</strong> example demonstrates how to use the <code>CDialog</code> component with an
            activator slot.
        </p>

        <card-docs>
            <c-dialog v-model="showDialog" class="m-auto" closable>
                <template #activator>
                    <div class="flex items-center justify-center gap-x-4">
                        <c-button @click="showDialog = true" size="2xl">Open Dialog</c-button>
                    </div>
                </template>

                <template #header>
                    <h3 class="font-bold">Dialog Header</h3>
                </template>

                <template #content>
                    <p class="mb-0 text-sm opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        vitae feugiat nisi. Aliquam consectetur ex neque, at sagittis ante elementum a. Duis semper
                        gravida semper. Ut sollicitudin diam ut risus suscipit, in tristique metus mollis. Donec sit
                        amet sapien magna. Nunc interdum laoreet fermentum. Fusce condimentum vehicula sapien, nec
                        efficitur enim placerat eget. Mauris urna quam, mollis at consequat a, aliquam non nisi. Donec
                        arcu nisi, mollis id posuere vel, consequat quis nisl. Suspendisse cursus et nisi ac
                        condimentum. Donec non cursus arcu. Ut rhoncus elit leo, vel facilisis sapien ullamcorper id.
                        Aenean non condimentum purus, ac congue diam.</p>

                    <p class="mb-0 text-sm opacity-75">Donec et est orci. Nulla pretium, nisi vel consectetur porttitor,
                        enim neque viverra lacus, nec aliquet nisl leo sed lectus. Phasellus vitae lacus id lorem
                        consectetur vehicula faucibus a augue. Aliquam sit amet massa sollicitudin, efficitur sapien at,
                        porttitor ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam
                        ultrices sapien, eget aliquam tellus pharetra et. Nam bibendum justo a enim convallis, a
                        tincidunt augue maximus. Sed lacinia varius nibh, eget sollicitudin urna tempus a. Curabitur
                        rutrum mollis augue at tincidunt. Suspendisse ultrices hendrerit elit consectetur finibus.
                        Praesent quis sapien sodales felis aliquam cursus vel mollis sem. Nam nec mauris mauris. Fusce
                        vitae dapibus libero.</p>
                </template>

                <template #actions>
                    <c-button @click="showDialog = false">Close</c-button>
                </template>
            </c-dialog>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dialog v-model="showDialog" closable&gt;
        &lt;template #activator&gt;
            &lt;c-button @click="showDialog = true"&gt;Open Dialog&lt;/c-button&gt;
        &lt;/template&gt;

        &lt;template #header&gt;
            &lt;h3 class="font-bold"&gt;Dialog Header&lt;/h3&gt;
        &lt;/template&gt;

        &lt;template #content&gt;
            &lt;p&gt;This is the dialog content area. You can place any elements here.&lt;/p&gt;
        &lt;/template&gt;

        &lt;template #actions&gt;
            &lt;c-button @click="showDialog = false"&gt;Close&lt;/c-button&gt;
        &lt;/template&gt;
    &lt;/c-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const showDialog = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Collapsed Dialog</h3>

        <p>
            The <code>collapsed</code> prop creates a more compact dialog with reduced padding, smaller header height (48px),
            and smaller text size. This is useful for informational dialogs or when you need to display content in a more space-efficient manner.
        </p>

        <card-docs>
            <c-dialog v-model="collapsedDialog" class="m-auto" animation="slide-down" closable collapsed>
                <template #activator>
                    <div class="flex items-center justify-center gap-x-4">
                        <c-button @click="collapsedDialog = true" size="2xl">Open Collapsed Dialog</c-button>
                    </div>
                </template>

                <template #header>
                    <h3 class="font-bold !text-sm">Compact Header</h3>
                </template>

                <template #content>
                    <div class="space-y-2">
                        <h4 class="font-medium">Efficient Space Usage</h4>
                        <p class="mb-0 text-sm opacity-75">This dialog uses the collapsed mode for a more compact appearance. Notice the reduced padding, smaller header height, and slightly smaller text size.</p>
                        <p class="mb-0 text-sm opacity-75">The collapsed mode is perfect for:</p>
                        <ul class="list-disc pl-5 text-sm opacity-75">
                            <li>Information dialogs</li>
                            <li>Quick confirmation prompts</li>
                            <li>Notifications with action buttons</li>
                            <li>Mobile-friendly interfaces</li>
                        </ul>
                    </div>
                </template>

                <template #actions>
                    <c-button variant="outline" size="sm" @click="collapsedDialog = false">Cancel</c-button>
                    <c-button size="sm" @click="collapsedDialog = false">Confirm</c-button>
                </template>
            </c-dialog>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dialog
        v-model="collapsedDialog"
        closable
        collapsed
        animation="slide-down"
    &gt;
        &lt;template #activator&gt;
            &lt;c-button @click="collapsedDialog = true"&gt;Open Collapsed Dialog&lt;/c-button&gt;
        &lt;/template&gt;

        &lt;template #header&gt;
            &lt;h3 class="font-bold"&gt;Compact Header&lt;/h3&gt;
        &lt;/template&gt;

        &lt;template #content&gt;
            &lt;div class="space-y-2"&gt;
                &lt;h4 class="font-medium"&gt;Efficient Space Usage&lt;/h4&gt;
                &lt;p class="text-sm"&gt;This dialog uses the collapsed mode for a more compact appearance.&lt;/p&gt;
                &lt;p class="text-sm"&gt;The collapsed mode is perfect for:&lt;/p&gt;
                &lt;ul class="list-disc pl-5 text-sm"&gt;
                    &lt;li&gt;Information dialogs&lt;/li&gt;
                    &lt;li&gt;Quick confirmation prompts&lt;/li&gt;
                    &lt;li&gt;Notifications with action buttons&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #actions&gt;
            &lt;c-button variant="outline" size="sm" @click="collapsedDialog = false"&gt;Cancel&lt;/c-button&gt;
            &lt;c-button size="sm" @click="collapsedDialog = false"&gt;Confirm&lt;/c-button&gt;
        &lt;/template&gt;
    &lt;/c-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const collapsedDialog = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Fullscreen Dialog</h3>

        <p>
            The <code>fullscreen</code> prop expands the dialog to cover the entire screen.
        </p>

        <card-docs>
            <c-dialog v-model="fullscreenDialog" class="m-auto" fullscreen closable>
                <template #activator>
                    <div class="flex items-center justify-center gap-x-4">
                        <c-button @click="fullscreenDialog = true" size="2xl">Open Fullscreen Dialog</c-button>
                    </div>
                </template>

                <template #header>
                    <h3 class="font-bold">Fullscreen Dialog</h3>
                </template>

                <template #content>
                    <p class="mb-0 text-sm opacity-75">This dialog takes up the entire screen.</p>
                </template>

                <template #actions>
                    <c-button @click="fullscreenDialog = false">Close</c-button>
                </template>
            </c-dialog>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dialog
        v-model="fullscreenDialog"
        fullscreen
        closable
    &gt;
        &lt;template #activator&gt;
            &lt;c-button @click="fullscreenDialog = true"&gt;Open Fullscreen Dialog&lt;/c-button&gt;
        &lt;/template&gt;

        &lt;template #header&gt;
            &lt;h3 class="font-bold"&gt;Fullscreen Dialog&lt;/h3&gt;
        &lt;/template&gt;

        &lt;template #content&gt;
            &lt;p&gt;This dialog takes up the entire screen.&lt;/p&gt;
        &lt;/template&gt;

        &lt;template #actions&gt;
            &lt;c-button @click="fullscreenDialog = false"&gt;Close&lt;/c-button&gt;
        &lt;/template&gt;
    &lt;/c-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const fullscreenDialog = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Modal Dialog</h3>

        <p>
            The <code>modal</code> prop prevents the dialog from being closed when clicking outside of it.
            This is useful for dialogs that require user interaction before closing.
        </p>

        <card-docs>
            <c-dialog v-model="modalDialog" class="m-auto" modal closable animation="bounce">
                <template #activator>
                    <div class="flex items-center justify-center gap-x-4">
                        <c-button @click="modalDialog = true" size="2xl">Open Modal Dialog</c-button>
                    </div>
                </template>

                <template #header>
                    <h3 class="font-bold">Modal Dialog</h3>
                </template>

                <template #content>
                    <p class="mb-0 text-sm opacity-75">This is a modal dialog. You can't close it by clicking outside.</p>
                    <p class="mb-0 text-sm opacity-75 mt-4">Modal dialogs are useful when you need to ensure the user makes a decision or completes an action before proceeding.</p>
                    <p class="mb-0 text-sm font-bold mt-6">Try clicking outside - it won't close!</p>
                </template>

                <template #actions>
                    <c-button @click="modalDialog = false">Close Dialog</c-button>
                </template>
            </c-dialog>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-dialog
        v-model="modalDialog"
        modal
        closable
        animation="bounce"
    &gt;
        &lt;template #activator&gt;
            &lt;c-button @click="modalDialog = true"&gt;Open Modal Dialog&lt;/c-button&gt;
        &lt;/template&gt;

        &lt;template #header&gt;
            &lt;h3 class="font-bold"&gt;Modal Dialog&lt;/h3&gt;
        &lt;/template&gt;

        &lt;template #content&gt;
            &lt;p&gt;This is a modal dialog. You can't close it by clicking outside.&lt;/p&gt;
            &lt;p&gt;Modal dialogs are useful when you need to ensure the user makes a decision or completes an action.&lt;/p&gt;
        &lt;/template&gt;

        &lt;template #actions&gt;
            &lt;c-button @click="modalDialog = false"&gt;Close Dialog&lt;/c-button&gt;
        &lt;/template&gt;
    &lt;/c-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const modalDialog = ref(false);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Animation Options</h3>

        <p>
            The <code>animation</code> prop lets you choose from different animation styles for your dialog.
            Available options: <code>zoom</code> (default), <code>slide-down</code>, <code>slide-right</code>, <code>flip</code>, and <code>bounce</code>.
        </p>

        <card-docs>
            <div class="flex flex-wrap items-center justify-center gap-4">
                <c-button @click="showAnimationDialog('zoom')">Zoom</c-button>
                <c-button @click="showAnimationDialog('slide-down')">Slide Down</c-button>
                <c-button @click="showAnimationDialog('slide-right')">Slide Right</c-button>
                <c-button @click="showAnimationDialog('flip')">Flip</c-button>
                <c-button @click="showAnimationDialog('bounce')">Bounce</c-button>
            </div>

            <c-dialog v-model="animationDialog" class="m-auto" :animation="currentAnimation" closable>
                <template #header>
                    <h3 class="font-bold">{{ currentAnimation }} Animation</h3>
                </template>

                <template #content>
                    <p class="mb-0 text-sm opacity-75">This dialog uses the {{ currentAnimation }} animation.</p>
                </template>

                <template #actions>
                    <c-button @click="animationDialog = false">Close</c-button>
                </template>
            </c-dialog>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="flex flex-wrap items-center justify-center gap-4"&gt;
        &lt;c-button @click="showAnimationDialog('zoom')"&gt;Zoom&lt;/c-button&gt;
        &lt;c-button @click="showAnimationDialog('slide-down')"&gt;Slide Down&lt;/c-button&gt;
        &lt;c-button @click="showAnimationDialog('slide-right')"&gt;Slide Right&lt;/c-button&gt;
        &lt;c-button @click="showAnimationDialog('flip')"&gt;Flip&lt;/c-button&gt;
        &lt;c-button @click="showAnimationDialog('bounce')"&gt;Bounce&lt;/c-button&gt;
    &lt;/div&gt;

    &lt;c-dialog
        v-model="animationDialog"
        :animation="currentAnimation"
        closable
    &gt;
        &lt;template #header&gt;
            &lt;h3 class="font-bold"&gt;{{ currentAnimation }} Animation&lt;/h3&gt;
        &lt;/template&gt;

        &lt;template #content&gt;
            &lt;p&gt;This dialog uses the {{ currentAnimation }} animation.&lt;/p&gt;
        &lt;/template&gt;

        &lt;template #actions&gt;
            &lt;c-button @click="animationDialog = false"&gt;Close&lt;/c-button&gt;
        &lt;/template&gt;
    &lt;/c-dialog&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const animationDialog = ref(false);
const currentAnimation = ref('zoom');

const showAnimationDialog = (animation) => {
    currentAnimation.value = animation;
    animationDialog.value = true;
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Instagram-Style Dialog</h3>

        <p>
            This example demonstrates a social media style photo gallery dialog with image carousel functionality,
            similar to Instagram.
        </p>

        <card-docs>
            <div class="flex flex-wrap gap-4 justify-center">
                <div
                    v-for="(image, index) in instagramImages.slice(0, 1)"
                    :key="image.id"
                    class="relative flex w-64 cursor-pointer flex-col overflow-hidden rounded-lg bg-white bg-clip-border shadow-sm transition-opacity hover:opacity-90"
                    @click="openInstagramDialog(index)"
                >
                    <c-image
                        :src="image.src"
                        :alt="image.alt"
                        class="h-full w-full"
                        cover
                        responsive
                    />
                </div>
            </div>

            <c-dialog
                v-model="instagramDialog"
                class="m-auto"
                :cardMaxWidth="'600px'"
                animation="zoom"
                :cardBorderColor="'border-neutral-200 dark:border-neutral-700'"
                closable
            >
                <template #header>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center gap-2">
                            <c-image
                                src="/images/freepik__the-style-is-candid-image-photography-with-natural__78234.jpeg"
                                alt="User profile"
                                customClass="!h-8 !w-8"
                                rounded="full"
                                cover
                            />
                            <div class="flex flex-col">
                                <p class="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                                    Photography Enthusiast
                                </p>
                                <p class="text-xs text-neutral-500">
                                    @naturephotos
                                </p>
                            </div>
                        </div>
                    </div>
                </template>

                <template #content>
                    <div class="relative">
                        <div class="relative overflow-hidden" style="height: 360px;">
                            <div class="flex h-full transition-transform duration-300" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
                                <div v-for="image in instagramImages" :key="image.id" class="min-w-full h-full">
                                    <c-image
                                        :src="image.src"
                                        :alt="image.alt"
                                        class="w-full h-full"
                                        rounded="md"
                                        cover
                                        responsive
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            v-if="currentImageIndex > 0"
                            @click="prevImage"
                            class="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md text-neutral-700 hover:bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            v-if="currentImageIndex < instagramImages.length - 1"
                            @click="nextImage"
                            class="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md text-neutral-700 hover:bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                            <div
                                v-for="(_, index) in instagramImages"
                                :key="index"
                                :class="[
                                    'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                                    currentImageIndex === index
                                        ? 'bg-white w-4'
                                        : 'bg-white/50 hover:bg-white/70 w-1.5'
                                ]"
                                @click="currentImageIndex = index"
                            ></div>
                        </div>
                    </div>

                    <div class="p-3">
                        <div class="flex justify-between mb-2">
                            <div class="flex space-x-3">
                                <button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </button>
                                <button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                            <button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </button>
                        </div>

                        <div class="mb-2">
                            <p class="font-semibold text-xs text-neutral-800 dark:text-neutral-200">
                                {{ instagramImages[currentImageIndex].likes }} likes
                            </p>
                        </div>

                        <div class="mb-2">
                            <p class="text-xs">
                                <span class="font-semibold text-neutral-800 dark:text-neutral-200">Photography Enthusiast</span>
                                <span class="text-neutral-600 dark:text-neutral-400"> Captured this amazing view during my recent travels. #nature #photography</span>
                            </p>
                        </div>

                        <p class="text-neutral-500 text-xs mb-1">
                            View all {{ instagramImages[currentImageIndex].comments }} comments
                        </p>
                    </div>
                </template>
            </c-dialog>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
  &lt;!-- Thumbnails que abrem o dialog --&gt;
  &lt;div class="flex flex-wrap gap-4 justify-center"&gt;
    &lt;div
      v-for="(image, index) in instagramImages.slice(0, 2)"
      :key="image.id"
      class="relative h-48 w-48 cursor-pointer overflow-hidden rounded-lg shadow-sm hover:opacity-90"
      @click="openInstagramDialog(index)"
    &gt;
      &lt;c-image
        :src="image.src"
        :alt="image.alt"
        class="h-full w-full"
        cover
        responsive
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Dialog no estilo Instagram --&gt;
  &lt;c-dialog
    v-model="instagramDialog"
    :cardMaxWidth="'600px'"
    animation="zoom"
    closable
  &gt;
    &lt;template #header&gt;
      &lt;div class="flex items-center justify-between w-full"&gt;
        &lt;div class="flex items-center gap-2"&gt;
          &lt;c-image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1300&q=80"
            alt="User profile"
            class="h-8 w-8"
            rounded="full"
            cover
          /&gt;
          &lt;div class="flex flex-col"&gt;
            &lt;p class="text-xs font-medium"&gt;Photography Enthusiast&lt;/p&gt;
            &lt;p class="text-xs text-neutral-500"&gt;@naturephotos&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #content&gt;
      &lt;div class="relative"&gt;
        &lt;!-- Carrossel de imagens --&gt;
        &lt;div class="relative overflow-hidden" style="height: 360px;"&gt;
          &lt;div class="flex h-full transition-transform duration-300"
               :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"&gt;
            &lt;div v-for="image in instagramImages" :key="image.id" class="min-w-full h-full"&gt;
              &lt;c-image
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full"
                cover
                responsive
              /&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- Navegação e indicadores --&gt;
        &lt;button
          v-if="currentImageIndex > 0"
          @click="prevImage"
          class="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md text-neutral-700 hover:bg-white"
        &gt;
          &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
            &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /&gt;
          &lt;/svg&gt;
        &lt;/button&gt;

        &lt;button
          v-if="currentImageIndex < instagramImages.length - 1"
          @click="nextImage"
          class="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md text-neutral-700 hover:bg-white"
        &gt;
          &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
            &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /&gt;
          &lt;/svg&gt;
        &lt;/button&gt;

        &lt;div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5"&gt;
          &lt;div
            v-for="(_, index) in instagramImages"
            :key="index"
            :class="[
              'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
              currentImageIndex === index
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/70 w-1.5'
            ]"
            @click="currentImageIndex = index"
          &gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="p-3"&gt;
        &lt;!-- Botões de interação --&gt;
        &lt;div class="flex justify-between mb-2"&gt;
          &lt;div class="flex space-x-3"&gt;
            &lt;button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"&gt;
              &lt;!-- Ícone de like --&gt;
            &lt;/button&gt;
            &lt;button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"&gt;
              &lt;!-- Ícone de comentário --&gt;
            &lt;/button&gt;
            &lt;button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"&gt;
              &lt;!-- Ícone de compartilhar --&gt;
            &lt;/button&gt;
          &lt;/div&gt;
          &lt;button class="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600"&gt;
            &lt;!-- Ícone de salvar --&gt;
          &lt;/button&gt;
        &lt;/div&gt;

        &lt;p class="font-semibold text-xs"&gt;
          &#123;&#123; instagramImages[currentImageIndex].likes &#125;&#125; likes
        &lt;/p&gt;

        &lt;p class="text-xs"&gt;
          &lt;span class="font-semibold"&gt;Photography Enthusiast&lt;/span&gt;
          &lt;span&gt; Captured this amazing view during my recent travels. #nature #photography&lt;/span&gt;
        &lt;/p&gt;

        &lt;p class="text-neutral-500 text-xs"&gt;
          View all &#123;&#123; instagramImages[currentImageIndex].comments &#125;&#125; comments
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/c-dialog&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Toolbar" previousLink="/toolbar" next="Notification" nextLink="/notification" />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const showDialog = ref(false);
const fullscreenDialog = ref(false);
const modalDialog = ref(false);
const collapsedDialog = ref(false);
const animationDialog = ref(false);
const currentAnimation = ref('zoom');
const instagramDialog = ref(false);
const currentImageIndex = ref(0);

const instagramImages = ref([
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80',
        alt: 'Beach sunset with palm trees',
        likes: '223,145',
        comments: '1,432'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        alt: 'Mountain landscape',
        likes: '186,291',
        comments: '984'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        alt: 'Ocean waves',
        likes: '154,872',
        comments: '766'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80',
        alt: 'Forest path',
        likes: '198,334',
        comments: '1,109'
    }
]);

const showAnimationDialog = (animation) => {
    currentAnimation.value = animation;
    animationDialog.value = true;
};

const nextImage = () => {
    if (currentImageIndex.value < instagramImages.value.length - 1) {
        currentImageIndex.value++;
    }
};

const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
    }
};

const openInstagramDialog = (index = 0) => {
    currentImageIndex.value = index;
    instagramDialog.value = true;
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
