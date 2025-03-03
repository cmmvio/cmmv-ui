<template>
    <BaseLayout>
        <h1>System Bar</h1>

        <p>
            The <code>CSystemBar (alias: c-system-bar)</code> component simulates the appearance of mobile operating
            system status bars (iOS and Android), allowing you to create mockups and interfaces with a more realistic
            look.
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
                    <td class="border-b px-4 py-2">platform</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'auto'</td>
                    <td class="border-b px-4 py-2">Platform to simulate ('auto', 'ios', 'android')</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">color</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'transparent'</td>
                    <td class="border-b px-4 py-2">Bar color ('transparent', 'light', 'dark', 'primary')</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">dark</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Force dark theme application</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">24</td>
                    <td class="border-b px-4 py-2">Bar height in pixels</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showNotch</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Shows the notch (iOS)</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">notch</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Controls notch visibility when showNotch is true</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">batteryLevel</td>
                    <td class="border-b px-4 py-2">Number/Boolean</td>
                    <td class="border-b px-4 py-2">70</td>
                    <td class="border-b px-4 py-2">Battery level (0-100) or false to hide</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showBatteryPercentage</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Shows battery percentage</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">wifiSignal</td>
                    <td class="border-b px-4 py-2">Number/Boolean</td>
                    <td class="border-b px-4 py-2">3</td>
                    <td class="border-b px-4 py-2">WiFi signal strength (0-3) or false to hide</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">cellularSignal</td>
                    <td class="border-b px-4 py-2">Number/Boolean</td>
                    <td class="border-b px-4 py-2">4</td>
                    <td class="border-b px-4 py-2">Cellular signal strength (0-4) or false to hide</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bluetooth</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Shows Bluetooth icon</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">notifications</td>
                    <td class="border-b px-4 py-2">Object/Boolean</td>
                    <td class="border-b px-4 py-2">{ app: false, count: undefined }</td>
                    <td class="border-b px-4 py-2">Notification configuration</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">timeFormat</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'24h'</td>
                    <td class="border-b px-4 py-2">Clock format ('12h' or '24h')</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">staticTime</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Sets a static time instead of real-time</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Usage</h3>

        <p>The system bar supports both iOS and Android styles, with the clock always displayed on the left side. The
            component automatically detects the platform or you can manually set it.</p>

        <card-docs>
            <div class="flex flex-col gap-4">
                <div class="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden">
                    <div class="bg-blue-600">
                        <CSystemBar color="transparent" :batteryLevel="80" :showBatteryPercentage="false"
                            :wifiSignal="3" :cellularSignal="4" :bluetooth="false" platform="ios" />
                    </div>
                    <div class="p-5 text-center bg-blue-500 text-white">
                        App content (iOS style)
                    </div>
                </div>

                <div class="border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden">
                    <div class="bg-black">
                        <c-system-bar color="transparent" :batteryLevel="60" :showBatteryPercentage="true"
                            :wifiSignal="2" :cellularSignal="3" :bluetooth="true" platform="android" />
                    </div>
                    <div class="p-5 text-center bg-blue-900 text-white">
                        App content (Android style)
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- iOS style bar --&gt;
&lt;c-system-bar
  color="transparent"
  :batteryLevel="80"
  :wifiSignal="3"
  :cellularSignal="4"
  platform="ios"
/&gt;

&lt;!-- Android style bar --&gt;
&lt;c-system-bar
  color="transparent"
  :batteryLevel="60"
  :showBatteryPercentage="true"
  :wifiSignal="2"
  :cellularSignal="3"
  :bluetooth="true"
  platform="android"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Platforms</h3>

        <p>The component can render layout in iOS or Android style, or automatically detect
            the user's platform with the 'auto' option. Both platforms display the clock on the left side.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-black flex flex-col rounded overflow-hidden">
                    <c-system-bar platform="ios" color="transparent" :batteryLevel="85" :showNotch="true" />
                    <div class="p-3 text-center text-white text-sm">
                        iOS with Notch
                    </div>
                </div>

                <div class="bg-black flex flex-col rounded overflow-hidden">
                    <c-system-bar platform="android" color="transparent" :batteryLevel="70" />
                    <div class="p-3 text-center text-white text-sm">
                        Android
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- iOS with notch --&gt;
&lt;c-system-bar
  platform="ios"
  color="transparent"
  :batteryLevel="85"
  :showNotch="true"
/&gt;

&lt;!-- Android --&gt;
&lt;c-system-bar
  platform="android"
  color="transparent"
  :batteryLevel="70"
/&gt;

&lt;!-- Auto-detection (detects user's platform) --&gt;
&lt;c-system-bar
  platform="auto"
  color="transparent"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Indicators and Elements</h3>

        <p>The component allows you to customize the indicators shown in the status bar, simulating different
            device states.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-black flex flex-col rounded overflow-hidden">
                    <c-system-bar platform="ios" color="transparent" :batteryLevel="25" :showBatteryPercentage="true"
                        :wifiSignal="1" :cellularSignal="2" :bluetooth="true" />
                    <div class="p-3 text-center text-white text-sm">
                        Low signal and low battery
                    </div>
                </div>

                <div class="bg-black flex flex-col rounded overflow-hidden">
                    <c-system-bar platform="android" color="transparent" :batteryLevel="100"
                        :showBatteryPercentage="true" :wifiSignal="0" :cellularSignal="0" :bluetooth="false" />
                    <div class="p-3 text-center text-white text-sm">
                        No signal indicators
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Low signal and low battery --&gt;
&lt;c-system-bar
  :batteryLevel="25"
  :showBatteryPercentage="true"
  :wifiSignal="1"
  :cellularSignal="2"
  :bluetooth="true"
/&gt;

&lt;!-- No signal indicators --&gt;
&lt;c-system-bar
  :batteryLevel="100"
  :showBatteryPercentage="true"
  :wifiSignal="0"
  :cellularSignal="0"
  :bluetooth="false"
/&gt;

&lt;!-- Disable elements --&gt;
&lt;c-system-bar
  :batteryLevel="false"  // Removes battery indicator
  :wifiSignal="false"    // Removes WiFi indicator
  :cellularSignal="false" // Removes cellular indicator
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Time and Notifications</h3>

        <p>You can customize the time format and show mock notifications to create more realistic mockups.</p>

        <card-docs>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-black flex flex-col rounded overflow-hidden">
                    <c-system-bar platform="ios" color="transparent" timeFormat="12h" staticTime="9:41 AM" />
                    <div class="p-3 text-center text-white text-sm">
                        Static time in 12h format (9:41 AM is the default time in Apple mockups)
                    </div>
                </div>

                <div class="bg-black flex flex-col rounded overflow-hidden">
                    <c-system-bar platform="android" color="transparent" timeFormat="24h"
                        :notifications="{ app: true, count: 3 }" />
                    <div class="p-3 text-center text-white text-sm">
                        Real-time clock (24h) with notifications
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;!-- Static time in 12h format --&gt;
&lt;c-system-bar
  timeFormat="12h"
  staticTime="9:41 AM"
/&gt;

&lt;!-- Real-time clock in 24h format with notifications --&gt;
&lt;c-system-bar
  timeFormat="24h"
  :notifications="{ app: true, count: 3 }"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Exposed Methods</h3>

        <p>The component exposes methods that can be accessed through refs.</p>

        <card-docs>
            <div class="grid grid-cols-1 gap-4">
                <table class="min-w-full border-collapse">
                    <thead>
                        <tr class="bg-neutral-100 dark:bg-neutral-800">
                            <th
                                class="p-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                Method
                            </th>
                            <th
                                class="p-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-neutral-200 dark:border-neutral-700">
                            <td
                                class="p-3 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                <code>updateTime()</code>
                            </td>
                            <td
                                class="p-3 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                Manually updates the displayed time
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-system-bar ref="systemBar" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue';

const systemBar = ref(null);

onMounted(() => {
  // Manually update the time
  systemBar.value.updateTime();

  // Access the detected platform
  console.log(systemBar.value.platform);
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Available Slots</h3>

        <p>The component provides slots for additional customization.</p>

        <card-docs>
            <div class="grid grid-cols-1 gap-4">
                <table class="min-w-full border-collapse">
                    <thead>
                        <tr class="bg-neutral-100 dark:bg-neutral-800">
                            <th
                                class="p-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                Slot Name
                            </th>
                            <th
                                class="p-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-neutral-200 dark:border-neutral-700">
                            <td
                                class="p-3 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                <code>app-icon</code>
                            </td>
                            <td
                                class="p-3 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                                Customize the app notification icon
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;c-system-bar :notifications="{ app: true, count: 5 }"&gt;
  &lt;template #app-icon&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"&gt;
      &lt;path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /&gt;
      &lt;path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /&gt;
    &lt;/svg&gt;
  &lt;/template&gt;
&lt;/c-system-bar&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Rating" previousLink="/rating" next="Tooltip" nextLink="/tooltip" />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "../../layout/BaseLayout.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
