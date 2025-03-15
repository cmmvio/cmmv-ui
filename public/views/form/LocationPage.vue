<template>
    <BaseLayout>
        <c-seo
            section="Location Component"
            description="Learn how to use the CLocation component in CMMV UI. An advanced location input component with address autocomplete, map integration, and support for multiple geocoding services."
            :keywords="['location', 'component', 'ui', 'address', 'geocoding', 'maps']"
        />

        <h1>Location Input</h1>

        <p>
            The <code>CLocation (alias: c-location)</code> component provides an intuitive interface for searching and selecting locations using
            Google Places API. It extends the <code>CAutocomplete</code> component with specific functionality for addresses and places.
        </p>

        <div class="p-4 bg-amber-100 dark:bg-amber-900 rounded-md mb-6 border-l-4 border-amber-500 text-xs">
            <h3 class="text-amber-800 dark:text-amber-200 font-medium">Important: Loading the Google Maps API</h3>
            <p class="mt-2">
                This component uses OpenStreetMap's Nominatim API by default, which does not require an API key.
                However, if you prefer using Google Maps API for better search results and more detailed place data,
                you need to load the Google Maps API in your HTML before using it with the <code>preferGoogle</code> prop.
                Add the following script to your main HTML file (like index.html):
            </p>
            <pre class="bg-amber-50 dark:bg-amber-950 p-3 rounded mt-2 overflow-hidden">
&lt;script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"&gt;&lt;/script&gt;</pre>
            <p class="mt-2">
                Replace <code>YOUR_API_KEY</code> with your Google Maps API key. Make sure to enable the "Places" library in the Google Cloud Platform console.
            </p>
            <p class="mt-2">
                <strong>Note:</strong> By default, the component uses OpenStreetMap's Nominatim API which doesn't require an API key. The component formats the addresses
                in a simplified way, showing the street and number (if available) as the main line, followed by city,
                region, and country in the secondary line.
            </p>
        </div>

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
                    <td>modelValue</td>
                    <td>Object</td>
                    <td>null</td>
                    <td>The selected location object, bound using <code>v-model</code>.</td>
                </tr>
                <tr>
                    <td>country</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Country code (e.g., "us", "ca") to restrict results.</td>
                </tr>
                <tr>
                    <td>types</td>
                    <td>Array</td>
                    <td>['geocode']</td>
                    <td>Types of results to return (e.g., "address", "establishment"). Only used with Google Maps API.</td>
                </tr>
                <tr>
                    <td>componentRestrictions</td>
                    <td>Object</td>
                    <td>{}</td>
                    <td>Additional restrictions for places results. Only used with Google Maps API.</td>
                </tr>
                <tr>
                    <td>fetchDetails</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether to fetch detailed place information when a place is selected. Only used with Google Maps API.</td>
                </tr>
                <tr>
                    <td>debounceTimeout</td>
                    <td>Number</td>
                    <td>300</td>
                    <td>Time (ms) to wait before making API requests while typing.</td>
                </tr>
                <tr>
                    <td>preferGoogle</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Whether to prefer using Google Maps API over OpenStreetMap (Nominatim). By default, OpenStreetMap is used.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Label for the component.</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>"Search for a location"</td>
                    <td>Placeholder text when no location is selected.</td>
                </tr>
                <tr>
                    <td>floatingLabel</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>Whether to use a floating label design.</td>
                </tr>
                <tr>
                    <td>clearable</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Whether to show a clear button when a location is selected.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Events</h3>

        <table-docs>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Payload</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>update:modelValue</td>
                    <td>LocationValue | null</td>
                    <td>Emitted when the selected location changes.</td>
                </tr>
                <tr>
                    <td>place-changed</td>
                    <td>LocationValue</td>
                    <td>Emitted when a place is selected from the dropdown.</td>
                </tr>
                <tr>
                    <td>no-results-found</td>
                    <td>string</td>
                    <td>Emitted when a search returns no results.</td>
                </tr>
                <tr>
                    <td>error</td>
                    <td>Error</td>
                    <td>Emitted when an error occurs with the API.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Usage</h3>

        <p>
            To use the location component with the default OpenStreetMap provider, simply add it to your template.
            No API key or external script is required.
        </p>

        <card-docs>
            <div class="mx-auto p-4 min-h-[500px]">
                <c-location
                    v-model="selectedLocation"
                    label="Enter an address"
                    @place-changed="handlePlaceChanged"
                />

                <div v-if="selectedLocation" class="mt-4 p-4 bg-gray-100 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-semibold mb-2">Selected Location:</h4>
                    <pre class="text-xs overflow-auto">{{ JSON.stringify(selectedLocation, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-location
        v-model="selectedLocation"
        label="Enter an address"
        @place-changed="handlePlaceChanged"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const selectedLocation = ref(null);

const handlePlaceChanged = (place) => {
    console.log('Selected place:', place);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Using Google Maps API</h3>

        <p>
            If you prefer to use Google Maps API for better search results and more detailed place data,
            first add the Google Maps API script to your HTML, then set the <code>preferGoogle</code> prop to <code>true</code>.
        </p>

        <card-docs>
            <div class="mx-auto p-4 h-[400px]">
                <c-location
                    v-model="googleLocation"
                    label="Search using Google Maps"
                    preferGoogle
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;!-- First, add the Google API script in your main HTML file --&gt;
&lt;!-- index.html --&gt;
&lt;script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"&gt;&lt;/script&gt;

&lt;!-- Then, use the component with preferGoogle prop --&gt;
&lt;template&gt;
    &lt;c-location
        v-model="googleLocation"
        label="Search using Google Maps"
        preferGoogle
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const googleLocation = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Multiple Instances</h3>

        <p>
            Since the Google Maps API is loaded once in the HTML, you can use multiple instances of the component without concerns about duplicate loading:
        </p>

        <card-docs>
            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;div class="space-y-4"&gt;
        &lt;c-location v-model="originLocation" label="Origin" /&gt;
        &lt;c-location v-model="destinationLocation" label="Destination" /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const originLocation = ref(null);
const destinationLocation = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Country Restrictions</h3>

        <p>
            You can restrict the search results to a specific country.
        </p>

        <card-docs>
            <div class="mx-auto p-4 h-[400px]">
                <c-location
                    v-model="countryRestrictedLocation"
                    label="Search for locations in Canada"
                    country="ca"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-location
        v-model="countryRestrictedLocation"
        label="Search for locations in Canada"
        country="ca"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const countryRestrictedLocation = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Types</h3>

        <p>
            You can customize the types of places shown in the results (when using Google Maps API).
        </p>

        <card-docs>
            <div class="mx-auto p-4 h-[400px]">
                <c-location
                    v-model="establishmentLocation"
                    label="Search for establishments (businesses, etc.)"
                    :types="['establishment']"
                />
            </div>

            <template #code>
<pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-location
        v-model="establishmentLocation"
        label="Search for establishments (businesses, etc.)"
        :types="['establishment']"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

const establishmentLocation = ref(null);
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Input" previousLink="/input" next="Number Input" nextLink="/number-input" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CLocation from "@components/forms/CLocation.vue";

// Basic example
const selectedLocation = ref(null);

const handlePlaceChanged = (place) => {
    console.log('Selected place:', place);
};

// OpenStreetMap example
const osmLocation = ref(null);

// Floating label example
const floatingLabelLocation = ref(null);

// Country restricted example
const countryRestrictedLocation = ref(null);

// Establishment only example
const establishmentLocation = ref(null);

// Google Maps example
const googleLocation = ref(null);
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
