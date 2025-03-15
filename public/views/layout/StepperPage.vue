<template>
    <BaseLayout>
        <c-seo
            section="Stepper Component"
            description="Learn how to use the CStepper component in CMMV UI. A step-by-step navigation component for guiding users through multi-step processes with progress tracking and validation."
            :keywords="['stepper', 'component', 'ui', 'wizard', 'steps', 'progress']"
        />

        <h1>Stepper</h1>

        <p>The <code>CStepper (alias: c-stepper)</code> component in the <code>@cmmv/ui</code> framework provides a
            customizable step-by-step interface for sequential processes. It allows users to navigate through a series
            of steps, show progress, and display content for each step.</p>

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
                    <td class="border-b px-4 py-2">modelValue / v-model</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Current active step index.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">steps</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of step objects with properties like title, subtitle, and
                        content.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">linear</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">When true, steps must be completed in sequence.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">orientation</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'horizontal'</td>
                    <td class="border-b px-4 py-2">Layout orientation: 'horizontal' or 'vertical'.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'sm'</td>
                    <td class="border-b px-4 py-2">Size of the step indicators: 'xs', 'sm', 'md', 'lg', 'xl'.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">completedSteps</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of step indices marked as completed.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables interaction with the stepper.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showContent</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to show content area for the current step.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showNavigation</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to show navigation buttons.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showCheckmarks</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Show checkmarks in completed steps.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">forceMode</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'auto'</td>
                    <td class="border-b px-4 py-2">Force a specific display mode: 'auto', 'mobile', or 'desktop'. When
                        'auto', the mode is determined by container width.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">mobileBreakpoint</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">480</td>
                    <td class="border-b px-4 py-2">Width threshold in pixels below which the mobile layout is used (when
                        forceMode is 'auto').</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>A simple stepper with three steps that automatically displays the content for the current step.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-stepper v-model="currentStep" :steps="basicSteps" @finish="handleFinish" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-stepper
        v-model="currentStep"
        :steps="steps"
        @finish="handleFinish"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentStep = ref(0);

const steps = [
    {
        title: 'Personal',
        subtitle: 'Info',
        content: 'Fill in your personal information'
    },
    {
        title: 'Account',
        subtitle: 'Info',
        content: 'Create your account credentials'
    },
    {
        title: 'Review',
        content: 'Review your information before submitting'
    }
];

const handleFinish = () => {
    console.log('Process completed');
    // Reset the stepper if needed
    // currentStep.value = 0;
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Vertical Orientation</h3>

        <p>A vertical stepper is useful for longer forms or when more content space is needed for each step.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-stepper v-model="verticalStep" :steps="verticalSteps" orientation="vertical" size="md" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-stepper
        v-model="currentStep"
        :steps="steps"
        orientation="vertical"
        size="md"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentStep = ref(0);

const steps = [
    {
        title: 'Product Selection',
        subtitle: 'Choose items',
        content: 'Select products from our catalog that you would like to purchase.'
    },
    {
        title: 'Shipping',
        subtitle: 'Address',
        content: 'Enter your shipping address and select delivery method.'
    },
    {
        title: 'Payment',
        subtitle: 'Method',
        content: 'Choose your payment method and complete the purchase.'
    },
    {
        title: 'Confirmation',
        content: 'Review your order details and confirm your purchase.'
    }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Non-linear Stepper</h3>

        <p>A non-linear stepper allows users to jump to any step at any time, which is useful for editing forms or
            reviewing
            information that doesn't need to be completed in sequence.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-stepper v-model="nonlinearStep" :steps="nonlinearSteps" :linear="false" shadow="md" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-stepper
        v-model="currentStep"
        :steps="steps"
        :linear="false"
        shadow="md"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentStep = ref(0);

const steps = [
    {
        title: 'Step 1',
        content: 'This is the content for step 1. You can navigate to any step from here.'
    },
    {
        title: 'Step 2',
        content: 'This is the content for step 2. You can navigate to any step from here.'
    },
    {
        title: 'Step 3',
        content: 'This is the content for step 3. You can navigate to any step from here.'
    }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Styling</h3>

        <p>The stepper component can be styled to match your application's theme by adjusting colors, borders, and other
            visual
            properties.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-stepper v-model="customStep" :steps="customSteps"
                    activeTextColor="text-purple-600 dark:text-purple-400"
                    completedTextColor="text-teal-600 dark:text-teal-400"
                    activeBorderColor="border-purple-600 dark:border-purple-400"
                    completedBorderColor="border-teal-600 dark:border-teal-400"
                    activeBgColor="bg-purple-50 dark:bg-purple-900/20" completedBgColor="bg-teal-50 dark:bg-teal-900/20"
                    rounded="md" size="lg" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-stepper
        v-model="currentStep"
        :steps="steps"
        activeTextColor="text-purple-600 dark:text-purple-400"
        completedTextColor="text-teal-600 dark:text-teal-400"
        activeBorderColor="border-purple-600 dark:border-purple-400"
        completedBorderColor="border-teal-600 dark:border-teal-400"
        activeBgColor="bg-purple-50 dark:bg-purple-900/20"
        completedBgColor="bg-teal-50 dark:bg-teal-900/20"
        rounded="md"
        size="lg"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentStep = ref(0);

const steps = [
    {
        title: 'Profile',
        subtitle: 'Setup',
        content: 'Configure your profile settings.'
    },
    {
        title: 'Preferences',
        content: 'Set your application preferences.'
    },
    {
        title: 'Complete',
        content: 'Your setup is complete!'
    }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Content and Navigation</h3>

        <p>Use slots to customize the content and navigation areas of the stepper for more complex use cases.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-stepper v-model="slotStep" :steps="slotSteps" size="md">
                    <template #content="{ step, index }">
                        <c-card :title="`Step ${index + 1}: ${step.title}`" subtitle="Custom Content" shadow="md"
                            class="my-4">
                            <div class="p-4">
                                <p>{{ step.content }}</p>
                                <div v-if="index === 0" class="mt-4">
                                    <c-input label="Name" placeholder="Enter your name" />
                                </div>
                                <div v-if="index === 1" class="mt-4">
                                    <c-input label="Email" placeholder="Enter your email" type="email" />
                                </div>
                            </div>
                        </c-card>
                    </template>

                    <template #navigation="{ nextStep, prevStep, currentStep }">
                        <div class="flex justify-between mt-4">
                            <div>
                                <c-button v-if="currentStep > 0" @click="prevStep" variant="secondary">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Back
                                    </div>
                                </c-button>
                            </div>

                            <div>
                                <c-button v-if="currentStep < slotSteps.length - 1" @click="nextStep" variant="primary">
                                    <div class="flex items-center">
                                        Continue
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </c-button>
                                <c-button v-else @click="handleSlotFinish" variant="success">
                                    <div class="flex items-center">
                                        Submit
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </c-button>
                            </div>
                        </div>
                    </template>
                </c-stepper>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-stepper
        v-model="currentStep"
        :steps="steps"
        size="md"
    &gt;
        &lt;template #content="{ step, index }"&gt;
            &lt;c-card :title="`Step ${index + 1}: ${step.title}`" subtitle="Custom Content" shadow="md" class="my-4"&gt;
                &lt;div class="p-4"&gt;
                    &lt;p&gt;&#123;&#123; step.content &#125;&#125;&lt;/p&gt;
                    &lt;div v-if="index === 0" class="mt-4"&gt;
                        &lt;c-input label="Name" placeholder="Enter your name" /&gt;
                    &lt;/div&gt;
                    &lt;div v-if="index === 1" class="mt-4"&gt;
                        &lt;c-input label="Email" placeholder="Enter your email" type="email" /&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/c-card&gt;
        &lt;/template&gt;

        &lt;template #navigation="{ nextStep, prevStep, currentStep }"&gt;
            &lt;div class="flex justify-between mt-4"&gt;
                &lt;div&gt;
                    &lt;c-button v-if="currentStep > 0" @click="prevStep" variant="secondary"&gt;
                        &lt;div class="flex items-center"&gt;
                            &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
                                &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /&gt;
                            &lt;/svg&gt;
                            Back
                        &lt;/div&gt;
                    &lt;/c-button&gt;
                &lt;/div&gt;

                &lt;div&gt;
                    &lt;c-button v-if="currentStep < steps.length - 1" @click="nextStep" variant="primary"&gt;
                        &lt;div class="flex items-center"&gt;
                            Continue
                            &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
                                &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /&gt;
                            &lt;/svg&gt;
                        &lt;/div&gt;
                    &lt;/c-button&gt;
                    &lt;c-button v-else @click="handleFinish" variant="success"&gt;
                        &lt;div class="flex items-center"&gt;
                            Submit
                            &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
                                &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /&gt;
                            &lt;/svg&gt;
                        &lt;/div&gt;
                    &lt;/c-button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-stepper&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Step Icons</h3>

        <p>Customize the step icons by using the <code>step-icon</code> slot to create a unique visual style.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-stepper v-model="iconStep" :steps="iconSteps" size="md">
                    <template #step-icon="{ index, active, completed }">
                        <div v-if="completed && !active" class="flex items-center justify-center size-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div v-else-if="active" class="flex items-center justify-center size-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <div v-else>
                            {{ index + 1 }}
                        </div>
                    </template>
                </c-stepper>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-stepper
        v-model="currentStep"
        :steps="steps"
        size="md"
    &gt;
        &lt;template #step-icon="{ index, active, completed }"&gt;
            &lt;div v-if="completed && !active" class="flex items-center justify-center size-full"&gt;
                &lt;svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor"&gt;
                    &lt;path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /&gt;
                &lt;/svg&gt;
            &lt;/div&gt;
            &lt;div v-else-if="active" class="flex items-center justify-center size-full"&gt;
                &lt;svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
                    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /&gt;
                    &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /&gt;
                &lt;/svg&gt;
            &lt;/div&gt;
            &lt;div v-else&gt;
                {{ index + 1 }}
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-stepper&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Available Slots</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Slot</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Props</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">step</td>
                    <td class="border-b px-4 py-2">step, index, active, completed</td>
                    <td class="border-b px-4 py-2">Custom markup for each step</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">step-icon</td>
                    <td class="border-b px-4 py-2">index, active, completed</td>
                    <td class="border-b px-4 py-2">Custom icon or marker for each step</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">separator</td>
                    <td class="border-b px-4 py-2">index</td>
                    <td class="border-b px-4 py-2">Custom separator between steps</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">content</td>
                    <td class="border-b px-4 py-2">step, index</td>
                    <td class="border-b px-4 py-2">Custom content for current step</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">navigation</td>
                    <td class="border-b px-4 py-2">currentStep, steps, goToStep, nextStep, prevStep</td>
                    <td class="border-b px-4 py-2">Custom navigation controls</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Events</h3>

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
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the current step changes</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">step-change</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the current step changes</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">finish</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when the finish button is clicked on the last step</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Exposed Methods</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Method</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Parameters</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">goToStep</td>
                    <td class="border-b px-4 py-2">index: number</td>
                    <td class="border-b px-4 py-2">Navigate to a specific step by index</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">nextStep</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Navigate to the next step</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">prevStep</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Navigate to the previous step</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">finish</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Trigger the finish event</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Form Integration with Validation</h3>

        <p>This example demonstrates how to integrate the stepper with form validation, only allowing users to proceed
            to the
            next step when the current form is valid.</p>

        <card-docs>
            <div class="mx-auto max-w-3xl">
                <c-form-stepper v-model="formStepperStep" :steps="formStepperSteps" :form-data="formStepperData"
                    :step-validators="formStepperValidators" @finish="handleFormStepperFinish">
                    <template #step-0="{ formData }">
                        <c-form v-model="stepFormValid[0]" class="space-y-4">
                            <c-input v-model="formData.fullName" label="Full Name" placeholder="Enter your full name"
                                required
                                :rules="[v => !!v || 'Name is required', v => v.length >= 3 || 'Name must be at least 3 characters']" />
                            <c-input v-model="formData.email" label="Email" placeholder="Enter your email" type="email"
                                required
                                :rules="[v => !!v || 'Email is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid']" />
                            <c-datepicker v-model="formData.birthdate" label="Date of Birth"
                                placeholder="Select your birthdate" required />
                        </c-form>
                    </template>

                    <template #step-1="{ formData }">
                        <c-form v-model="stepFormValid[1]" class="space-y-4">
                            <c-input v-model="formData.address" label="Street Address"
                                placeholder="Enter your street address" required />
                            <div class="grid grid-cols-2 gap-4">
                                <c-input v-model="formData.city" label="City" placeholder="Enter your city" required />
                                <c-input v-model="formData.zipCode" label="Zip Code" placeholder="Enter your zip code"
                                    required
                                    :rules="[v => !!v || 'Zip code is required', v => /^\d{5}(-\d{4})?$/.test(v) || 'Must be a valid zip code']" />
                            </div>
                            <c-combobox v-model="formData.country" label="Country" placeholder="Select your country"
                                options="/json/countries.json" :remoteDataKeyValue="true" required />
                        </c-form>
                    </template>

                    <!-- Step 2: Confirmation -->
                    <template #step-2="{ formData }">
                        <div class="space-y-4">
                            <h4 class="font-medium">Please review your information:</h4>

                            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                                <h5 class="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">Personal
                                    Information</h5>
                                <p><span class="font-medium">Name:</span> {{ formData.fullName }}</p>
                                <p><span class="font-medium">Email:</span> {{ formData.email }}</p>
                                <p><span class="font-medium">Date of Birth:</span> {{ formData.birthdate }}</p>
                            </div>

                            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                                <h5 class="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">Address
                                    Information</h5>
                                <p><span class="font-medium">Address:</span> {{ formData.address }}</p>
                                <p><span class="font-medium">City:</span> {{ formData.city }}</p>
                                <p><span class="font-medium">Zip Code:</span> {{ formData.zipCode }}</p>
                                <p><span class="font-medium">Country:</span> {{ formData.country }}</p>
                            </div>

                            <c-checkbox v-model="formData.termsAccepted" label="I accept the terms and conditions" />
                        </div>
                    </template>
                </c-form-stepper>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-form-stepper
        v-model="currentStep"
        :steps="steps"
        :form-data="formData"
        :step-validators="stepValidators"
        @finish="handleFinish"
    &gt;
        &lt;!-- Step 0: Personal Information --&gt;
        &lt;template #step-0="{ formData }"&gt;
            &lt;c-form v-model="stepFormValid[0]" class="space-y-4"&gt;
                &lt;c-input
                    v-model="formData.fullName"
                    label="Full Name"
                    placeholder="Enter your full name"
                    required
                    :rules="[v => !!v || 'Name is required', v => v.length >= 3 || 'Name must be at least 3 characters']"
                /&gt;
                &lt;c-input
                    v-model="formData.email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    required
                    :rules="[v => !!v || 'Email is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid']"
                /&gt;
                &lt;c-datepicker
                    v-model="formData.birthdate"
                    label="Date of Birth"
                    placeholder="Select your birthdate"
                    required
                /&gt;
            &lt;/c-form&gt;
        &lt;/template&gt;

        &lt;!-- Step 1: Address Information --&gt;
        &lt;template #step-1="{ formData }"&gt;
            &lt;c-form v-model="stepFormValid[1]" class="space-y-4"&gt;
                &lt;c-input
                    v-model="formData.address"
                    label="Street Address"
                    placeholder="Enter your street address"
                    required
                /&gt;
                &lt;div class="grid grid-cols-2 gap-4"&gt;
                    &lt;c-input
                        v-model="formData.city"
                        label="City"
                        placeholder="Enter your city"
                        required
                    /&gt;
                    &lt;c-input
                        v-model="formData.zipCode"
                        label="Zip Code"
                        placeholder="Enter your zip code"
                        required
                        :rules="[v => !!v || 'Zip code is required', v => /^\d{5}(-\d{4})?$/.test(v) || 'Must be a valid zip code']"
                    /&gt;
                &lt;/div&gt;
                &lt;c-combobox
                    v-model="formData.country"
                    label="Country"
                    placeholder="Select your country"
                    :options="['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Brazil', 'Japan']"
                    required
                /&gt;
            &lt;/c-form&gt;
        &lt;/template&gt;

        &lt;!-- Step 2: Confirmation --&gt;
        &lt;template #step-2="{ formData }"&gt;
            &lt;div class="space-y-4"&gt;
                &lt;h4 class="font-medium"&gt;Please review your information:&lt;/h4&gt;

                &lt;div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md"&gt;
                    &lt;h5 class="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2"&gt;Personal Information&lt;/h5&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;Name:&lt;/span&gt; &#123;&#123; formData.fullName &#125;&#125;&lt;/p&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;Email:&lt;/span&gt; &#123;&#123; formData.email &#125;&#125;&lt;/p&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;Date of Birth:&lt;/span&gt; &#123;&#123; formData.birthdate &#125;&#125;&lt;/p&gt;
                &lt;/div&gt;

                &lt;div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-md"&gt;
                    &lt;h5 class="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2"&gt;Address Information&lt;/h5&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;Address:&lt;/span&gt; &#123;&#123; formData.address &#125;&#125;&lt;/p&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;City:&lt;/span&gt; &#123;&#123; formData.city &#125;&#125;&lt;/p&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;Zip Code:&lt;/span&gt; &#123;&#123; formData.zipCode &#125;&#125;&lt;/p&gt;
                    &lt;p&gt;&lt;span class="font-medium"&gt;Country:&lt;/span&gt; &#123;&#123; formData.country &#125;&#125;&lt;/p&gt;
                &lt;/div&gt;

                &lt;c-checkbox v-model="formData.termsAccepted"&gt;
                    I accept the terms and conditions
                &lt;/c-checkbox&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-form-stepper&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>CFormStepper Component</h3>

        <p>The <code>CFormStepper</code> component extends the standard stepper with form validation capabilities,
            allowing you to validate form inputs before proceeding to the next step.</p>

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
                    <td class="border-b px-4 py-2">modelValue / v-model</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">Current active step index.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">steps</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of step objects with properties like title, subtitle, and
                        content.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">formData</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">Object containing form data for all steps.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">stepValidators</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of validator functions for each step, which should return true
                        or an
                        array of error messages.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">orientation</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'horizontal'</td>
                    <td class="border-b px-4 py-2">Layout orientation: 'horizontal' or 'vertical'.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">prevButtonText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Previous'</td>
                    <td class="border-b px-4 py-2">Text for the previous button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">nextButtonText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Next'</td>
                    <td class="border-b px-4 py-2">Text for the next button.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">finishButtonText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Finish'</td>
                    <td class="border-b px-4 py-2">Text for the finish button on the last step.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Form Stepper Events</h3>

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
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the current step changes</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">step-change</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the current step changes</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">finish</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when the finish button is clicked on the last step and
                        validation
                        passes</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">validation-error</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">Emitted when validation fails with an array of error messages</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">update:formData</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">Emitted when form data changes</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Form Stepper Slots</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Slot</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Props</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">step-{index}</td>
                    <td class="border-b px-4 py-2">step, index, formData</td>
                    <td class="border-b px-4 py-2">Content for a specific step (e.g., step-0, step-1, etc.)</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">content</td>
                    <td class="border-b px-4 py-2">step, index, formData</td>
                    <td class="border-b px-4 py-2">Custom content for current step</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">navigation</td>
                    <td class="border-b px-4 py-2">currentStep, nextStep, prevStep, goToStep, finish, formData,
                        validationErrors
                    </td>
                    <td class="border-b px-4 py-2">Custom navigation controls with validation functions</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">step</td>
                    <td class="border-b px-4 py-2">step, index, active, completed</td>
                    <td class="border-b px-4 py-2">Custom markup for each step (passes through to CStepper)</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">step-icon</td>
                    <td class="border-b px-4 py-2">index, active, completed</td>
                    <td class="border-b px-4 py-2">Custom icon or marker for each step (passes through to CStepper)</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">separator</td>
                    <td class="border-b px-4 py-2">index</td>
                    <td class="border-b px-4 py-2">Custom separator between steps (passes through to CStepper)</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Container Responsive Stepper</h3>

        <p>The stepper can adapt its layout based on the container width, not just the screen width. This is useful when
            placing the stepper in narrow containers.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="mb-2 text-sm font-medium">Auto Mode (Container-Based)</h4>
                    <div class="w-full max-w-[300px] border border-gray-200 dark:border-gray-700 p-2 rounded-lg mb-2">
                        <c-stepper v-model="containerStep" :steps="basicSteps" :mobile-breakpoint="400" />
                    </div>
                    <p class="text-xs text-gray-500">Automatically switches to mobile layout in narrow containers</p>
                </div>

                <div>
                    <h4 class="mb-2 text-sm font-medium">Forced Desktop Mode</h4>
                    <div class="w-full max-w-[300px] border border-gray-200 dark:border-gray-700 p-2 rounded-lg mb-2">
                        <c-stepper v-model="forcedDesktopStep" :steps="basicSteps" force-mode="desktop" />
                    </div>
                    <p class="text-xs text-gray-500">Forces desktop layout even in narrow containers</p>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- Auto Mode (Container-Based) --&gt;
    &lt;div class="w-full max-w-[300px]"&gt;
        &lt;c-stepper
            v-model="currentStep"
            :steps="steps"
            :mobile-breakpoint="400"
        /&gt;
    &lt;/div&gt;

    &lt;!-- Forced Desktop Mode --&gt;
    &lt;div class="w-full max-w-[300px]"&gt;
        &lt;c-stepper
            v-model="currentStep"
            :steps="steps"
            force-mode="desktop"
        /&gt;
    &lt;/div&gt;

    &lt;!-- Forced Mobile Mode --&gt;
    &lt;div class="w-full"&gt;
        &lt;c-stepper
            v-model="currentStep"
            :steps="steps"
            force-mode="mobile"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const currentStep = ref(0);

const steps = [
    {
        title: 'Personal',
        subtitle: 'Info',
        content: 'Fill in your personal information'
    },
    {
        title: 'Account',
        subtitle: 'Info',
        content: 'Create your account credentials'
    },
    {
        title: 'Review',
        content: 'Review your information before submitting'
    }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Speed Dial" previousLink="/speed-dial" next="Tabs" nextLink="/tabs" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import { ref, reactive } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const currentStep = ref(0);
const basicSteps = [
    {
        title: 'Personal',
        subtitle: 'Info',
        content: 'Fill in your personal information.'
    },
    {
        title: 'Account',
        subtitle: 'Info',
        content: 'Create your account credentials.'
    },
    {
        title: 'Review',
        content: 'Review your information before submitting.'
    }
];

const verticalStep = ref(0);
const verticalSteps = [
    {
        title: 'Product Selection',
        subtitle: 'Choose items',
        content: 'Select products from our catalog that you would like to purchase.'
    },
    {
        title: 'Shipping',
        subtitle: 'Address',
        content: 'Enter your shipping address and select delivery method.'
    },
    {
        title: 'Payment',
        subtitle: 'Method',
        content: 'Choose your payment method and complete the purchase.'
    },
    {
        title: 'Confirmation',
        content: 'Review your order details and confirm your purchase.'
    }
];

const nonlinearStep = ref(0);
const nonlinearSteps = [
    {
        title: 'Step 1',
        content: 'This is the content for step 1. You can navigate to any step from here.'
    },
    {
        title: 'Step 2',
        content: 'This is the content for step 2. You can navigate to any step from here.'
    },
    {
        title: 'Step 3',
        content: 'This is the content for step 3. You can navigate to any step from here.'
    }
];

const customStep = ref(0);
const customSteps = [
    {
        title: 'Profile',
        subtitle: 'Setup',
        content: 'Configure your profile settings.'
    },
    {
        title: 'Preferences',
        content: 'Set your application preferences.'
    },
    {
        title: 'Complete',
        content: 'Your setup is complete!'
    }
];

const slotStep = ref(0);
const slotSteps = [
    {
        title: 'User Information',
        content: 'Please enter your personal details.'
    },
    {
        title: 'Contact Details',
        content: 'How can we reach you?'
    },
    {
        title: 'Confirmation',
        content: 'Please confirm your information is correct before submitting.'
    }
];

const iconStep = ref(0);
const iconSteps = [
    {
        title: 'View',
        subtitle: 'Review',
        content: 'Review the details of your request.'
    },
    {
        title: 'Edit',
        subtitle: 'Modify',
        content: 'Make any necessary changes to your information.'
    },
    {
        title: 'Submit',
        subtitle: 'Confirm',
        content: 'Submit your information for processing.'
    }
];

const formStepperStep = ref(0);
const stepFormValid = ref([false, false, true]);

const formStepperData = reactive({
    fullName: '',
    email: '',
    birthdate: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    termsAccepted: false
});

const formStepperSteps = [
    {
        title: 'Personal Info',
        content: 'Enter your basic personal information.'
    },
    {
        title: 'Address',
        content: 'Enter your address details.'
    },
    {
        title: 'Confirmation',
        content: 'Review and confirm your information.'
    }
];

const formStepperValidators = [
    (data) => {
        const errors = [];
        if (!data.fullName) errors.push('Name is required');
        else if (data.fullName.length < 3) errors.push('Name must be at least 3 characters');

        if (!data.email) errors.push('Email is required');
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
            errors.push('Email must be valid');

        if (!data.birthdate) errors.push('Date of birth is required');

        return errors.length ? errors : true;
    },

    (data) => {
        const errors = [];
        if (!data.address) errors.push('Address is required');
        if (!data.city) errors.push('City is required');
        if (!data.zipCode) errors.push('Zip code is required');
        else if (!/^\d{5}(-\d{4})?$/.test(data.zipCode))
            errors.push('Must be a valid zip code');
        if (!data.country) errors.push('Country is required');

        return errors.length ? errors : true;
    },

    (data) => {
        const errors = [];
        if (!data.termsAccepted) errors.push('You must accept the terms and conditions');
        return errors.length ? errors : true;
    }
];

const handleFinish = () => {
    alert('Process completed!');
    currentStep.value = 0;
};

const handleSlotFinish = () => {
    alert('Custom form submitted!');
    slotStep.value = 0;
};

const handleFormStepperFinish = () => {
    alert('Form submitted successfully!');
    console.log('Form data:', formStepperData);
    formStepperStep.value = 0;

    Object.keys(formStepperData).forEach(key => {
        if (typeof formStepperData[key] === 'boolean') {
            formStepperData[key] = false;
        } else {
            formStepperData[key] = '';
        }
    });
};
</script>
