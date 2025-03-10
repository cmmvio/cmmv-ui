<template>
    <BaseLayout>
        <h1>Slider</h1>

        <p>
            The <code>CSlider (alias: c-slider)</code> component in the <code>@cmmv/ui</code> framework provides a
            customizable and versatile slider element. It supports dynamic value binding using <code>v-model</code>,
            validation, ticks, and customization options for colors, step size, and thumb visibility. The
            <code>c-slider</code> is ideal for forms, range selectors, and other interactive UI components.
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
                    <td class="border-b px-4 py-2">Number | Array</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">The value bound to the slider using <code>v-model</code>. Can be a number for single value or array for range.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">min</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">0</td>
                    <td class="border-b px-4 py-2">The minimum value of the slider.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">max</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">100</td>
                    <td class="border-b px-4 py-2">The maximum value of the slider.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">step</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">1</td>
                    <td class="border-b px-4 py-2">The increment step for the slider value.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showTicks</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Displays tick marks on the slider for each step.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">tickSize</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">10</td>
                    <td class="border-b px-4 py-2">Specifies the height of tick marks.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ticks</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Defines custom tick mark positions.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">thumb</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Displays the value bubble above the thumb.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the slider, making it non-interactive.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"bg-blue-600"</td>
                    <td class="border-b px-4 py-2">Specifies the background color of the active track and thumb.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">colors</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">An object with color values for customizing the slider appearance (trackColor, connectColor, handleColor, tooltipBgColor, etc).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">currencyMode</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Enables currency formatting mode for the slider values.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">currencyCode</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"USD"</td>
                    <td class="border-b px-4 py-2">Specifies the currency code for formatting (e.g., "USD", "EUR", "BRL").</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showCurrencySymbol</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Controls whether to display the currency symbol in tooltips.</td>
                </tr>
            </tbody>
        </table-docs>

        <!-- Basic Example -->
        <h3>Basic Slider</h3>

        <p>The following example demonstrates a basic slider with two-way binding using <code>v-model</code>.</p>

        <card-docs>
            <div class="px-4 py-5 sm:p-6">
                <c-slider v-model="sliderValue" class="mt-10" thumb />
                <div class="m-auto text-center pt-4">Current Value: {{ sliderValue }}</div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-slider v-model="sliderValue" thumb /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const sliderValue = ref(5);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Validation -->
        <h3>Validation</h3>

        <p>
            The <code>CSlider</code> component supports validation using the <code>rules</code> prop. These rules allow
            you to
            define custom logic for validating the slider value.
        </p>

        <card-docs>
            <div class="px-4 py-5 sm:p-6">
                <c-slider v-model="validatedValue"
                    :rules="[value => value >= 50 ? null : 'Value must be at least 50.']" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-slider
        v-model="validatedValue"
        :rules="[value => value >= 50 ? null : 'Value must be at least 50.']"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const validatedValue = ref(40);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Tick Marks -->
        <h3>Step</h3>

        <p>The slider can step or custom positions defined by the <code>step</code> prop.</p>

        <card-docs>
            <div class="px-4 py-5 sm:p-6">
                <c-slider v-model="sliderTicks" step="10" />
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-slider
        v-model="sliderTicks"
        step="10"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const sliderTicks = ref(40);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Range Slider Example -->
        <h3>Range Slider</h3>

        <p>
            Create a range slider with multiple handles by passing an array to the <code>v-model</code>. This allows users to select a range of values,
            perfect for filtering, price ranges, or any application requiring a min/max selection.
        </p>

        <card-docs>
            <div class="px-4 py-5 sm:p-6">
                <c-slider v-model="rangeValue" :colors="{
                    connectColor: '#10B981',
                    tooltipBgColor: '#10B981',
                    tooltipColor: '#ffffff',
                    handleColor: '#ffffff'
                }" />
                <div class="m-auto text-center pt-4">Selected Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}</div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-slider
        v-model="rangeValue"
        :colors="{
            connectColor: '#10B981',
            tooltipBgColor: '#10B981',
            handleColor: '#ffffff'
        }"
    /&gt;
    &lt;div&gt;Selected Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

// Array with [min, max] values
const rangeValue = ref([30, 70]);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Advanced Customization -->
        <h3>Advanced Customization</h3>

        <p>
            The slider component supports comprehensive customization through CSS variables and the <code>colors</code> prop.
            You can customize everything from track color to tooltip and handle appearance.
        </p>

        <card-docs>
            <div class="px-4 py-5 sm:p-6 space-y-8">
                <!-- Primary theme -->
                <div>
                    <p class="mb-2 text-sm text-neutral-500">Primary Theme</p>
                    <c-slider v-model="primaryThemeValue" :colors="{
                        trackColor: '#E0E7FF',
                        connectColor: '#4F46E5',
                        tooltipBgColor: '#4F46E5',
                        tooltipColor: '#ffffff',
                        handleColor: '#FFFFFF',
                        handleBorderColor: '#4F46E5',
                        handleShadowColor: 'rgba(79, 70, 229, 0.2)'
                    }" />
                </div>

                <!-- Danger theme -->
                <div>
                    <p class="mb-2 text-sm text-neutral-500">Danger Theme</p>
                    <c-slider v-model="dangerThemeValue" :colors="{
                        trackColor: '#FEE2E2',
                        connectColor: '#EF4444',
                        tooltipBgColor: '#EF4444',
                        tooltipColor: '#ffffff',
                        handleColor: '#FFFFFF',
                        handleBorderColor: '#EF4444',
                        handleShadowColor: 'rgba(239, 68, 68, 0.2)'
                    }" />
                </div>

                <!-- Success theme -->
                <div>
                    <p class="mb-2 text-sm text-neutral-500">Success Theme with Ticks</p>
                    <c-slider
                        v-model="successThemeValue"
                        showTicks
                        :tickDensity="4"
                        :tickLabels="['0%', '25%', '50%', '75%', '100%']"
                        :colors="{
                            trackColor: '#D1FAE5',
                            connectColor: '#10B981',
                            tooltipBgColor: '#10B981',
                            tooltipColor: '#ffffff',
                            handleColor: '#FFFFFF',
                            handleBorderColor: '#10B981',
                            handleShadowColor: 'rgba(16, 185, 129, 0.2)',
                            tickColor: '#10B981',
                            tickLabelColor: '#059669'
                        }"
                    />
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;!-- Primary Theme --&gt;
    &lt;c-slider v-model="primaryThemeValue" :colors="{
        trackColor: '#E0E7FF',
        connectColor: '#4F46E5',
        tooltipBgColor: '#4F46E5',
        handleColor: '#FFFFFF',
        handleBorderColor: '#4F46E5',
        handleShadowColor: 'rgba(79, 70, 229, 0.2)'
    }" /&gt;

    &lt;!-- Danger Theme --&gt;
    &lt;c-slider v-model="dangerThemeValue" :colors="{
        trackColor: '#FEE2E2',
        connectColor: '#EF4444',
        tooltipBgColor: '#EF4444',
        handleColor: '#FFFFFF',
        handleBorderColor: '#EF4444',
        handleShadowColor: 'rgba(239, 68, 68, 0.2)'
    }" /&gt;

    &lt;!-- Success Theme with Ticks --&gt;
    &lt;c-slider
        v-model="successThemeValue"
        showTicks
        :tickDensity="4"
        :tickLabels="['0%', '25%', '50%', '75%', '100%']"
        :colors="{
            trackColor: '#D1FAE5',
            connectColor: '#10B981',
            tooltipBgColor: '#10B981',
            handleColor: '#FFFFFF',
            handleBorderColor: '#10B981',
            handleShadowColor: 'rgba(16, 185, 129, 0.2)',
            tickColor: '#10B981',
            tickLabelColor: '#059669'
        }"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const primaryThemeValue = ref(60);
const dangerThemeValue = ref(40);
const successThemeValue = ref(75);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <!-- Currency Slider -->
        <h3>Currency Slider</h3>

        <p>
            The slider component can also be used to select currency values. It supports internationalization through
            the <code>currencyCode</code> property and automatically formats values according to the specified currency.
        </p>

        <card-docs>
            <div class="px-4 py-5 sm:p-6 space-y-8">
                <div>
                    <p class="mb-2 text-sm text-neutral-500">Price Selector (USD)</p>
                    <c-slider
                        v-model="priceUSD"
                        :min="0"
                        :max="1000"
                        :step="10"
                        currencyMode
                        currencyCode="USD"
                        :colors="{
                            connectColor: '#047857',
                            tooltipBgColor: '#047857',
                            tooltipColor: '#ffffff',
                            handleColor: '#FFFFFF',
                            handleBorderColor: '#10B981',
                            handleShadowColor: 'rgba(16, 185, 129, 0.2)',
                        }"
                    />
                    <p class="mt-2 text-sm text-center">Selected price: ${{ priceUSD }}</p>
                </div>

                <div>
                    <p class="mb-2 text-sm text-neutral-500">Price Range (EUR)</p>
                    <c-slider
                        v-model="priceRangeEUR"
                        :min="0"
                        :max="2000"
                        :step="50"
                        currencyMode
                        currencyCode="EUR"
                        :colors="{
                            connectColor: '#4F46E5',
                            tooltipBgColor: '#4F46E5',
                            tooltipColor: '#ffffff',
                            handleColor: '#FFFFFF',
                            handleBorderColor: '#4F46E5',
                            handleShadowColor: 'rgba(16, 185, 129, 0.2)',
                        }"
                    />
                    <p class="mt-2 text-sm text-center">Price range: €{{ priceRangeEUR[0] }} - €{{ priceRangeEUR[1] }}</p>
                </div>

                <div>
                    <p class="mb-2 text-sm text-neutral-500">Budget Selector (BRL)</p>
                    <c-slider
                        v-model="priceBRL"
                        :min="0"
                        :max="5000"
                        :step="500"
                        showTicks
                        :tickDensity="5"
                        currencyMode
                        currencyCode="BRL"
                        :colors="{
                            connectColor: '#059669',
                            tooltipBgColor: '#059669',
                            tickColor: '#059669',
                            tooltipColor: '#ffffff',
                            handleColor: '#FFFFFF',
                            handleBorderColor: '#10B981',
                            handleShadowColor: 'rgba(16, 185, 129, 0.2)',
                        }"
                    />
                    <p class="mt-2 text-sm text-center">Selected budget: R${{ priceBRL }}</p>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;!-- Basic Currency Slider (USD) --&gt;
    &lt;c-slider
        v-model="priceUSD"
        :min="0"
        :max="1000"
        :step="10"
        currencyMode
        currencyCode="USD"
        :colors="{
            connectColor: '#047857',
            tooltipBgColor: '#047857'
        }"
    /&gt;
    &lt;p&gt;Selected price: ${{ priceUSD }}&lt;/p&gt;

    &lt;!-- Currency Range Slider (EUR) --&gt;
    &lt;c-slider
        v-model="priceRangeEUR"
        :min="0"
        :max="2000"
        :step="50"
        currencyMode
        currencyCode="EUR"
        :colors="{
            connectColor: '#4F46E5',
            tooltipBgColor: '#4F46E5'
        }"
    /&gt;
    &lt;p&gt;Price range: €{{ priceRangeEUR[0] }} - €{{ priceRangeEUR[1] }}&lt;/p&gt;

    &lt;!-- Currency with Ticks (BRL) --&gt;
    &lt;c-slider
        v-model="priceBRL"
        :min="0"
        :max="5000"
        :step="500"
        showTicks
        :tickDensity="5"
        currencyMode
        currencyCode="BRL"
        :colors="{
            connectColor: '#059669',
            tooltipBgColor: '#059669',
            tickColor: '#059669'
        }"
    /&gt;
    &lt;p&gt;Selected budget: R${{ priceBRL }}&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

// Currency slider values
const priceUSD = ref(250);
const priceRangeEUR = ref([500, 1500]);
const priceBRL = ref(2000);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Radio" previousLink="/radio" next="Textarea" nextLink="/textarea" />
    </BaseLayout>
</template>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const sliderValue = ref(5);
const validatedValue = ref(40);
const sliderTicks = ref(40);
const customColorValue = ref(30);
const iconValue = ref(50);
const appendValue = ref(20);

// Valores para os exemplos de range e cores customizadas
const rangeValue = ref([30, 70]);
const primaryThemeValue = ref(60);
const dangerThemeValue = ref(40);
const successThemeValue = ref(75);

// Valores para os exemplos de slider de moeda
const priceUSD = ref(250);
const priceRangeEUR = ref([500, 1500]);
const priceBRL = ref(2000);
</script>
