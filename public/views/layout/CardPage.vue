<template>
    <BaseLayout>
        <h1>Card</h1>

        <p>
            The <code>CCard (alias: c-card)</code> component provides a versatile and visually appealing container for grouping content.
            It supports titles, subtitles, actions, and various customization options for layout, colors, and styles.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Prop</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">title</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        The <code>title</code> prop allows you to define a prominent heading for the card. This is especially useful for providing a quick summary or name for the content inside the card.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">subtitle</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        The <code>subtitle</code> prop is used to add a secondary description below the title. It helps provide additional context to the content and complements the title.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">actions</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">
                        Use the <code>actions</code> prop to enable a dedicated area for buttons or links at the bottom of the card. This is ideal for interactive components like "Save" or "Cancel" buttons.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">loading</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">
                        When the <code>loading</code> prop is set to true, the card content is replaced with a loader. This is useful for async operations or when data is being fetched.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">default</td>
                    <td class="border-b px-4 py-2">
                        The <code>rounded</code> prop controls the border-radius of the card. Options include "none" for sharp corners, "default" for standard rounding, "md" for medium rounding, and "full" for pill-shaped edges.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">bg-white dark:bg-zinc-800</td>
                    <td class="border-b px-4 py-2">
                        The <code>bgColor</code> prop lets you specify the background color of the card. It supports both light and dark themes for consistent design.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">bgHeaderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        The <code>bgHeaderColor</code> prop customizes the background color of the card header, allowing for visual separation of the header from the main content.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">text-slate-800 dark:text-white</td>
                    <td class="border-b px-4 py-2">
                        The <code>textColor</code> prop defines the color of the text inside the card, ensuring readability across different themes and backgrounds.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">borderColor</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">border-gray-300 dark:border-gray-600</td>
                    <td class="border-b px-4 py-2">
                        The <code>borderColor</code> prop sets the border color of the card. This is particularly relevant when using the "outlined" variant.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">textSize</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">md</td>
                    <td class="border-b px-4 py-2">
                        The <code>textSize</code> prop adjusts the size of the text within the card. Available sizes include "sm", "md", "lg", "xl", and "2xl".
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">variant</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">elevated</td>
                    <td class="border-b px-4 py-2">
                        The <code>variant</code> prop defines the visual style of the card. Options include "elevated" for shadows, "flat" for no shadow, "tonal" for muted colors, "outlined" for bordered cards, "text" for minimal styles, and "plain".
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">href</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">
                        Use the <code>href</code> prop to convert the card into a clickable link. This is ideal for interactive cards that lead to external or internal pages.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hover</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">
                        The <code>hover</code> prop adds a subtle brightness effect when the card is hovered over, enhancing interactivity.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">
                        When the <code>disabled</code> prop is true, the card becomes non-interactive, with reduced opacity to visually indicate its disabled state.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxWidth</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">100%</td>
                    <td class="border-b px-4 py-2">
                        The <code>maxWidth</code> prop defines the maximum width of the card. This is useful for creating consistent layouts in responsive designs.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">minHeight</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">auto</td>
                    <td class="border-b px-4 py-2">
                        The <code>minHeight</code> prop ensures a minimum height for the card, useful for maintaining design consistency across dynamic content.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Card</h3>

        <p>
            The <strong>Basic Card</strong> demonstrates the default functionality of the <code>CCard</code> component. This example includes a title and subtitle, along with some placeholder content. The card is styled with a clean white background, a subtle header color, and rounded corners to enhance its visual appeal. It showcases how the card can adapt to different content sizes while maintaining a professional layout.
        </p>

        <card-docs>
            <c-card
                title="Basic Card"
                subtitle="This is a basic card example."
                bgColor="bg-white"
                bgHeaderColor="bg-zinc-200"
                bgBorderColor="border-b border-b-slate-300"
                textColor="text-black"
                maxWidth="500px"
                minHeight="300px"
                textSize="md"
                class="m-auto"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Basic Card"
    subtitle="This is a basic card example."
    bgColor="bg-white"
    bgHeaderColor="bg-zinc-200"
    bgBorderColor="border-b border-b-slate-300"
    textColor="text-black"
    maxWidth="500px"
    minHeight="300px"
    textSize="md"
    class="m-auto"
&gt;
    This is the card content.
&lt;/c-card&gt;</code>
</pre>
            </template>
        </card-docs>

        <h3>Loading</h3>

        <p>
            The example illustrates the use of the <code>loading</code> prop. When enabled, the card content is temporarily replaced by a loading indicator, making it suitable for scenarios where data is being fetched or processed.
        </p>

        <card-docs>
            <c-card
                title="Loading Card"
                subtitle="This is a loading card example."
                bgColor="bg-white"
                textColor="text-black"
                maxWidth="500px"
                minHeight="150px"
                loading
            >
                <template v-slot:default>
                    Content will be replaced by a loader until loading is false.
                </template>
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Loading Card"
    subtitle="This is a loading card example."
    bgColor="bg-white"
    textColor="text-black"
    maxWidth="500px"
    minHeight="150px"
    loading
&gt;
    Content will be replaced by a loader until loading is false.
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>


        <h3>Custom Colors</h3>

        <p>
            The example demonstrates the customization capabilities of the <code>CCard</code> component. By applying specific <code>bgColor</code> and <code>textColor</code> values, developers can create visually distinct cards that align with application design requirements.
        </p>

        <card-docs>
            <c-card
                bgColor="bg-purple-500"
                textColor="text-white"
                title="Custom Colors"
                maxWidth="500px"
                minHeight="150px"
            >
                This card has custom background and text colors.
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card bgColor="bg-purple-500" textColor="text-white" title="Custom Colors"&gt;
    This card has custom background and text colors.
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Outlined</h3>

        <p>
            The <code>Outlined</code> example shows the <code>outlined</code> variant of the <code>CCard</code> component. This variant applies a transparent background and a defined border, offering a lightweight and minimalistic visual style.
        </p>

        <card-docs>
            <c-card
                variant="outlined"
                title="Outlined Card"
                maxWidth="500px"
                minHeight="150px"
            >
                This card has an outlined style.
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card variant="outlined" title="Outlined Card"&gt;
    This card has an outlined style.
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>



        <h3>Card with Actions</h3>

        <p>
            Usage of the <code>actions</code> slot. This configuration allows for interactive buttons or other elements to be added within the card footer, enabling developers to create cards with user interaction capabilities.
        </p>

        <card-docs>
            <c-card
                title="Card with Actions"
                subtitle="This is a loading card example."
                bgColor="bg-white"
                borderColor="border-gray-200"
                textColor="text-black"
                maxWidth="500px"
                minHeight="150px"
                actions
            >
                <template #action-buttons>
                    <c-button
                        type="button"
                        variant="text"
                    >Accept</c-button>

                    <c-button
                        type="button"
                        variant="text"
                        class="bg-red-800 hover:bg-red-700"
                    >Cancel</c-button>
                </template>
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Card with Actions"
    subtitle="This is a loading card example."
    bgColor="bg-white"
    borderColor="border-gray-200"
    textColor="text-black"
    maxWidth="500px"
    minHeight="150px"
    actions
&gt;
    &lt;template #action-buttons&gt;
        &lt;c-button variant="plain"&gt;Accept&lt;/c-button&gt;
        &lt;c-button variant="text"&gt;Cancel&lt;/c-button&gt;
    &lt;/template&gt;
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Closable</h3>

        <p>
            The <code>Closable</code> example demonstrates the use of the <code>closable</code> prop in the <code>CCard</code> component.
            This feature adds a close button to the card's header and emits a <code>close</code> event when clicked, enabling dynamic card dismissal.
        </p>

        <card-docs>
            <c-card
                title="Closable Card"
                subtitle="This card can be closed."
                bgColor="bg-white"
                textColor="text-black"
                maxWidth="500px"
                minHeight="150px"
                closable
                @close="onClose"
            >
                This card contains content and a close button in the header. When the close button is clicked, the card emits a <code>close</code> event.
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Closable Card"
    subtitle="This card can be closed."
    bgColor="bg-white"
    textColor="text-black"
    maxWidth="500px"
    minHeight="150px"
    closable
    @close="onClose"
&gt;
    This card contains content and a close button in the header. When the close button is clicked, the card emits a &lt;code&gt;close&lt;/code&gt; event.
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>


    <h3>Advanced Example</h3>

    <p>
        This example demonstrates the comprehensive use of the <code>CCard</code> component, combining multiple configurations like
        <code>title</code>, <code>subtitle</code>, <code>actions</code>, <code>loading</code>, <code>hover</code>, and various styling options
        such as <code>bgColor</code>, <code>textColor</code>, <code>variant</code>, and <code>closable</code>. It showcases the flexibility and
        power of the <code>CCard</code> component to create complex and interactive UI designs.
    </p>

    <card-docs>
        <c-card
            title="Advanced Card"
            subtitle="This card demonstrates all configurations."
            customClass="overflow-hidden"
            bgColor="bg-white"
            bgHeaderColor="bg-blue-500 text-white"
            bgBorderColor="border-b border-gray-300"
            textColor="text-gray-800"
            borderColor="border-blue-700"
            closeColor="text-white"
            textSize="lg"
            variant="outlined"
            maxWidth="600px"
            minHeight="200px"
            hover
            closable
            @close="onClose"
            actions
        >
            <template #default>
                This advanced card uses a combination of all available configurations. It includes:
                <ul class="list-disc ml-6 mt-2">
                    <li>A title and subtitle for context.</li>
                    <li>A loading indicator at the top.</li>
                    <li>Custom background, header, and border colors.</li>
                    <li>A hover effect for interactivity.</li>
                    <li>An outlined style for a modern appearance.</li>
                    <li>A closable button to dismiss the card.</li>
                    <li>Action buttons at the footer.</li>
                </ul>
            </template>
            <template #action-buttons>
                <c-button
                    type="button"
                    class="text-white border-green-700 bg-green-700 hover:bg-green-500"
                >Accept</c-button>

                <c-button
                    type="button"
                    class="text-white border-red-700 bg-red-700 hover:bg-red-500"
                >Decline</c-button>
            </template>
        </c-card>

        <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Advanced Card"
    subtitle="This card demonstrates all configurations."
    bgColor="bg-white"
    bgHeaderColor="bg-blue-500"
    bgBorderColor="border-b border-blue-700"
    textColor="text-gray-800"
    borderColor="border-blue-700"
    closeColor="text-white"
    textSize="lg"
    variant="outlined"
    maxWidth="600px"
    minHeight="200px"
    hover
    closable
    @close="onClose"
    actions
&gt;
    &lt;template #default&gt;
        This advanced card uses a combination of all available configurations. It includes:
        &lt;ul&gt;
            &lt;li&gt;A title and subtitle for context.&lt;/li&gt;
            &lt;li&gt;A loading indicator at the top.&lt;/li&gt;
            &lt;li&gt;Custom background, header, and border colors.&lt;/li&gt;
            &lt;li&gt;A hover effect for interactivity.&lt;/li&gt;
            &lt;li&gt;An outlined style for a modern appearance.&lt;/li&gt;
            &lt;li&gt;A closable button to dismiss the card.&lt;/li&gt;
            &lt;li&gt;Action buttons at the footer.&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/template&gt;
    &lt;template #action-buttons&gt;
        &lt;c-button
            type="button"
            class="text-white border-green-700 bg-green-700 hover:bg-green-500"
        &gt;Accept&lt;/c-button&gt;
        &lt;c-button
            type="button"
            class="text-white border-red-700 bg-red-700 hover:bg-red-500"
        &gt;Decline&lt;/c-button&gt;
    &lt;/template&gt;
&lt;/c-card&gt;</code></pre>
        </template>
    </card-docs>



    <h2>More Example</h2>

    <p>Below are some more examples of what you can do with <code>CCard</code> using other <code>@cmmv/ui</code> components. CCard is a flexible component that can be easily combined with many other components to create rich and interactive layouts. See how it can be combined with other components to improve the interface and usability of your project:</p>

    <br/>

    <h3>Twitter Card</h3>

    <p>
        The <strong>Twitter Card</strong> example demonstrates how to create a social media post card that mimics the Twitter interface. This design showcases user information, post content, and engagement metrics in a familiar layout. It's perfect for social media feeds or dashboards that need to display user-generated content.
    </p>

    <card-docs>
        <c-card
            title="Twitter"
            subtitle="Evan You · Vue Creator"
            bgColor="bg-cyan-500"
            textColor="text-white"
            maxWidth="400px"
            rounded="md"
        >
            <template #header>
                <div class="flex items-center space-x-3 p-3">
                    <icon-twitter class="w-8 h-8 text-white" />

                    <div>
                        <h3 class="font-bold text-lg">Twitter</h3>
                    </div>
                </div>
            </template>

            <template #content>
                <div class="p-4 text-2xl">
                    "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </div>

                <div class="flex items-center w-full px-4 pt-2 pb-4">
                    <div class="flex items-center space-x-3 ">
                        <c-avatar
                            size="md"
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></c-avatar>
                        <div>
                            <div class="font-semibold">Evan You</div>
                            <div class="text-sm opacity-75">Vue Creator</div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 ml-auto">
                        <button class="flex items-center text-sm space-x-2">
                            <IconHeart class="text-white" />
                            <span>256</span>
                        </button>
                        <button class="flex items-center text-sm space-x-2">
                            <IconShare class="text-white" aria-hidden="true" />
                            <span>45</span>
                        </button>
                    </div>
                </div>
            </template>
        </c-card>

        <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Twitter"
    subtitle="Evan You · Vue Creator"
    bgColor="bg-cyan-500"
    textColor="text-white"
    maxWidth="400px"
    rounded="md"
&gt;
    &lt;template #header&gt;
        &lt;div class="flex items-center space-x-3 p-3"&gt;
            &lt;icon-twitter class="w-8 h-8 text-white" /&gt;
            &lt;div&gt;
                &lt;h3 class="font-bold text-lg"&gt;Twitter&lt;/h3&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #content&gt;
        &lt;div class="p-4 text-2xl"&gt;
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
        &lt;/div&gt;

        &lt;div class="flex items-center w-full px-4 pt-2 pb-4"&gt;
            &lt;div class="flex items-center space-x-3"&gt;
                &lt;c-avatar
                    size="md"
                    src="https://avataaars.io/?avatarStyle=Transparent&amp;topType=ShortHairShortCurly&amp;accessoriesType=Prescription02&amp;hairColor=Black&amp;facialHairType=Blank&amp;clotheType=Hoodie&amp;clotheColor=White&amp;eyeType=Default&amp;eyebrowType=DefaultNatural&amp;mouthType=Default&amp;skinColor=Light"
                &gt;&lt;/c-avatar&gt;
                &lt;div&gt;
                    &lt;div class="font-semibold"&gt;Evan You&lt;/div&gt;
                    &lt;div class="text-sm opacity-75"&gt;Vue Creator&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="flex items-center space-x-4 ml-auto"&gt;
                &lt;button class="flex items-center text-sm space-x-2"&gt;
                    &lt;IconHeart class="text-white" /&gt;
                    &lt;span&gt;256&lt;/span&gt;
                &lt;/button&gt;
                &lt;button class="flex items-center text-sm space-x-2"&gt;
                    &lt;IconShare class="text-white" aria-hidden="true" /&gt;
                    &lt;span&gt;45&lt;/span&gt;
                &lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/c-card&gt;</code></pre>
        </template>
    </card-docs>


        <h3>Weather card</h3>

        <p>
            The <strong>Weather Card</strong> example illustrates how to create an informative weather dashboard with real-time data visualization. This card combines icons, metrics, and interactive elements to provide a comprehensive weather report. The expandable section allows users to access additional forecast information without cluttering the initial view.
        </p>

        <card-docs>
            <c-card
                title="Florida"
                subtitle="Extreme Weather Alert"
                bgColor="bg-gray-800"
                textColor="text-white"
                borderColor="border-gray-900"
                maxWidth="368px"
                rounded="md"
                actions
            >
                <template #header>
                    <div class="flex items-center space-x-3 p-3 border-b border-gray-900">
                        <icon-exclamation-triangle class="w-8 h-8 text-red-500" aria-hidden="true" />

                        <div>
                            <h3 class="font-bold text-lg">Florida</h3>
                            <div class="text-sm text-red-200 flex items-center space-x-1">
                                <span>Extreme Weather Alert</span>
                            </div>
                        </div>
                    </div>
                </template>

                <template #content>
                    <div class="flex items-center justify-between px-4 py-2">
                        <div class="text-h1 text-6xl">64&deg;F</div>
                        <icon-weather-hurricane class="w-16 h-16 text-red-500" />
                    </div>

                    <div class="flex justify-between py-3 px-4">
                        <div class="flex items-center space-x-2">
                            <icon-wind class="w-5 h-5 text-white" />
                            <span>123 km/h</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <icon-rainy class="w-5 h-5 text-white" />
                            <span>48%</span>
                        </div>
                    </div>

                    <div v-if="expand" class="p-4">
                        <c-slider
                            v-model="time"
                            :min="0"
                            :max="6"
                            step="1"
                            tickLabels="['Now', '1h', '2h', '3h', '4h', '5h', '6h']"
                            showTicks
                            thumbSize="10px"
                        ></c-slider>

                        <c-list class="bg-transparent">
                            <c-list-item
                                v-for="item in forecast"
                                :key="item.day"
                                :title="item.day"
                                :subtitle="item.temp"
                                :icon="item.icon"
                                textColor="text-white"
                            ></c-list-item>
                        </c-list>
                    </div>
                </template>

                <template #actions>
                    <div class="flex justify-between items-center px-4 py-4 border-t border-gray-900">
                        <c-button
                            type="button"
                            variant="text"
                            class="text-blue-500 font-semibold bg-transparent hover:bg-gray-700"
                            @click="expand = !expand"
                        >
                            {{ expand ? 'Hide Report' : 'Full Report' }}
                        </c-button>
                    </div>
                </template>
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Florida"
    subtitle="Extreme Weather Alert"
    bgColor="bg-gray-800"
    textColor="text-white"
    borderColor="border-gray-900"
    maxWidth="368px"
    rounded="md"
    actions
&gt;
    &lt;template #header&gt;
        &lt;div class="flex items-center space-x-3 p-3 border-b border-gray-900"&gt;
            &lt;icon-exclamation-triangle class="w-8 h-8 text-red-500" aria-hidden="true" /&gt;

            &lt;div&gt;
                &lt;h3 class="font-bold text-lg"&gt;Florida&lt;/h3&gt;
                &lt;div class="text-sm text-red-200 flex items-center space-x-1"&gt;
                    &lt;span&gt;Extreme Weather Alert&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #content&gt;
        &lt;div class="flex items-center justify-between px-4 py-2"&gt;
            &lt;div class="text-h1 text-6xl"&gt;64&amp;deg;F&lt;/div&gt;
            &lt;icon-weather-hurricane class="w-16 h-16 text-red-500" /&gt;
        &lt;/div&gt;

        &lt;div class="flex justify-between py-3 px-4"&gt;
            &lt;div class="flex items-center space-x-2"&gt;
                &lt;icon-wind class="w-5 h-5 text-white" /&gt;
                &lt;span&gt;123 km/h&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="flex items-center space-x-2"&gt;
                &lt;icon-rainy class="w-5 h-5 text-white" /&gt;
                &lt;span&gt;48%&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div v-if="expand" class="p-4"&gt;
            &lt;c-slider
                v-model="time"
                :min="0"
                :max="6"
                step="1"
                tickLabels="['Now', '1h', '2h', '3h', '4h', '5h', '6h']"
                showTicks
                thumbSize="10px"
            &gt;&lt;/c-slider&gt;

            &lt;c-list class="bg-transparent"&gt;
                &lt;c-list-item
                    v-for="item in forecast"
                    :key="item.day"
                    :title="item.day"
                    :subtitle="item.temp"
                    :icon="item.icon"
                    textColor="text-white"
                &gt;&lt;/c-list-item&gt;
            &lt;/c-list&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #actions&gt;
        &lt;div class="flex justify-between items-center px-4 py-4 border-t border-gray-900"&gt;
            &lt;c-button
                type="button"
                variant="text"
                class="text-blue-500 font-semibold bg-transparent hover:bg-gray-700"
                @click="expand = !expand"
            &gt;
                {{ expand ? 'Hide Report' : 'Full Report' }}
            &lt;/c-button&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Hotel Reservation Card</h3>

        <p>
            The <strong>Hotel Reservation Card</strong> showcases how to create an attractive booking interface for hospitality applications. This example combines visual elements like high-quality images with practical information such as ratings, amenities, and pricing. The card includes interactive elements for user engagement and clear call-to-action buttons.
        </p>

        <card-docs>
            <c-card
                title="Grand Resort & Spa"
                subtitle="Cancún, México"
                bgColor="bg-white dark:bg-neutral-800"
                textColor="text-gray-900 dark:text-white"
                borderColor="border-gray-200 dark:border-gray-700"
                maxWidth="350px"
                rounded="md"
                variant="outlined"
                class="shadow-md border-2 border-gray-300 dark:border-gray-600"
                actions
            >
                <template #header>
                    <div class="relative w-full h-48 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80"
                            alt="Grand Resort & Spa"
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute top-4 right-4 bg-white dark:bg-neutral-800 text-red-500 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                            -25% OFF
                        </div>
                    </div>
                </template>

                <template #content>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <c-rating :model-value="4.5" size="sm" fixed />
                                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">4.5 (128 reviews)</span>
                            </div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">
                                <icon-map-pin class="inline-block w-4 h-4 mr-1" />
                                <span>Hotel Zone</span>
                            </div>
                        </div>

                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Luxury beachfront resort with 3 pools, full-service spa and 5 restaurants. Spacious rooms with ocean views and all amenities.
                        </p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md">Pool</span>
                            <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-md">Free Wi-Fi</span>
                            <span class="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs rounded-md">Breakfast</span>
                            <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-md">Spa</span>
                            <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-md">Restaurant</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-2xl font-bold">$750</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">$1,000</span>
                                <div class="text-xs text-gray-500 dark:text-gray-400">per night, taxes included</div>
                            </div>
                            <div class="flex items-center gap-2">
                                <icon-calendar class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                <span class="text-sm text-gray-600 dark:text-gray-400">3 nights</span>
                            </div>
                        </div>
                    </div>
                </template>

                <template #actions>
                    <div class="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                        <c-button
                            type="button"
                            variant="text"
                            class="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                            View details
                        </c-button>
                        <c-button
                            type="button"
                            class="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Book now
                        </c-button>
                    </div>
                </template>
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Grand Resort & Spa"
    subtitle="Cancún, México"
    bgColor="bg-white dark:bg-neutral-800"
    textColor="text-gray-900 dark:text-white"
    borderColor="border-gray-200 dark:border-gray-700"
    maxWidth="450px"
    rounded="md"
    variant="outlined"
    class="shadow-md border-2 border-gray-300 dark:border-gray-600"
    actions
&gt;
    &lt;template #header&gt;
        &lt;div class="relative w-full h-48 overflow-hidden"&gt;
            &lt;img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80"
                alt="Grand Resort & Spa"
                class="w-full h-full object-cover"
            /&gt;
            &lt;div class="absolute top-4 right-4 bg-white dark:bg-neutral-800 text-red-500 px-3 py-1 rounded-full text-sm font-bold shadow-md"&gt;
                -25% OFF
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #content&gt;
        &lt;div class="p-4"&gt;
            &lt;div class="flex justify-between items-center mb-2"&gt;
                &lt;div class="flex items-center"&gt;
                    &lt;c-rating :model-value="4.5" size="sm" fixed /&gt;
                    &lt;span class="ml-2 text-sm text-gray-600 dark:text-gray-400"&gt;4.5 (128 reviews)&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="text-sm text-gray-600 dark:text-gray-400"&gt;
                    &lt;icon-map-pin class="inline-block w-4 h-4 mr-1" /&gt;
                    &lt;span&gt;Hotel Zone&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;p class="text-sm text-gray-600 dark:text-gray-400 mb-4"&gt;
                Luxury beachfront resort with 3 pools, full-service spa and 5 restaurants. Spacious rooms with ocean views and all amenities.
            &lt;/p&gt;

            &lt;div class="flex flex-wrap gap-2 mb-4"&gt;
                &lt;span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"&gt;Pool&lt;/span&gt;
                &lt;span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-md"&gt;Free Wi-Fi&lt;/span&gt;
                &lt;span class="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs rounded-md"&gt;Breakfast&lt;/span&gt;
                &lt;span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-md"&gt;Spa&lt;/span&gt;
                &lt;span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-md"&gt;Restaurant&lt;/span&gt;
            &lt;/div&gt;

            &lt;div class="flex justify-between items-center"&gt;
                &lt;div&gt;
                    &lt;span class="text-2xl font-bold"&gt;$750&lt;/span&gt;
                    &lt;span class="text-sm text-gray-500 dark:text-gray-400 line-through ml-2"&gt;$1,000&lt;/span&gt;
                    &lt;div class="text-xs text-gray-500 dark:text-gray-400"&gt;per night, taxes included&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="flex items-center gap-2"&gt;
                    &lt;icon-calendar class="w-5 h-5 text-gray-600 dark:text-gray-400" /&gt;
                    &lt;span class="text-sm text-gray-600 dark:text-gray-400"&gt;3 nights&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #actions&gt;
        &lt;div class="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700"&gt;
            &lt;c-button
                type="button"
                variant="text"
                class="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
            &gt;
                View details
            &lt;/c-button&gt;
            &lt;c-button
                type="button"
                class="bg-blue-600 hover:bg-blue-700 text-white"
            &gt;
                Book now
            &lt;/c-button&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>

        <h3>E-commerce Product Card</h3>

        <p>
            The <strong>E-commerce Product Card</strong> demonstrates how to create an effective product display for online stores. This example showcases important product information including images, pricing, ratings, and availability status. The design incorporates clear call-to-action buttons and visual indicators to enhance the shopping experience.
        </p>

        <card-docs>
            <c-card
                title="Wireless Noise-Cancelling Headphones"
                subtitle="Premium Audio Series"
                bgColor="bg-white dark:bg-neutral-800"
                textColor="text-gray-900 dark:text-white"
                borderColor="border-gray-200 dark:border-neutral-700"
                maxWidth="350px"
                rounded="lg"
                variant="elevated"
                class="shadow-lg"
                actions
            >
                <template #header>
                    <div class="relative">
                        <div class="flex items-center justify-center bg-gray-100 dark:bg-neutral-700 p-6 h-52">
                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                                alt="Wireless Headphones"
                                class="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <div class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                        </div>
                        <div class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            SALE
                        </div>
                    </div>
                </template>

                <template #content>
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <c-rating :model-value="4" size="sm" fixed />
                                <span class="ml-2 text-sm text-gray-600 dark:text-neutral-400">4.0 (42 reviews)</span>
                            </div>
                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                In Stock
                            </span>
                        </div>

                        <div class="mt-3 mb-4">
                            <div class="flex items-baseline">
                                <span class="text-2xl font-bold text-gray-900 dark:text-white">$249.99</span>
                                <span class="ml-2 text-sm text-gray-500 dark:text-neutral-400 line-through">$299.99</span>
                                <span class="ml-2 text-sm font-medium text-green-600 dark:text-green-400">Save 17%</span>
                            </div>
                            <div class="text-xs text-gray-500 dark:text-neutral-400 mt-1">
                                Free shipping on orders over $50
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Color</div>
                            <div class="flex space-x-2">
                                <button class="w-6 h-6 rounded-full bg-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></button>
                                <button class="w-6 h-6 rounded-full bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></button>
                                <button class="w-6 h-6 rounded-full bg-blue-600 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></button>
                                <button class="w-6 h-6 rounded-full bg-red-600 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></button>
                            </div>
                        </div>

                        <div class="text-sm text-gray-600 dark:text-neutral-400">
                            <ul class="list-disc list-inside space-y-1">
                                <li>Active noise cancellation</li>
                                <li>40-hour battery life</li>
                                <li>Bluetooth 5.0 connectivity</li>
                                <li>Built-in microphone</li>
                            </ul>
                        </div>
                    </div>
                </template>

                <template #actions>
                    <div class="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-neutral-700">
                        <c-button
                            type="button"
                            variant="text"
                            class="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center"
                        >
                            <icon-heart class="w-4 h-4 mr-1.5 text-white" /> Wishlist
                        </c-button>
                        <c-button
                            type="button"
                            class="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                        >
                            <icon-shopping-cart class="w-4 h-4 mr-1.5 text-white" /> Add to Cart
                        </c-button>
                    </div>
                </template>
            </c-card>

            <template #code>
<pre><code class="code-highlight language-html">&lt;c-card
    title="Wireless Noise-Cancelling Headphones"
    subtitle="Premium Audio Series"
    bgColor="bg-white dark:bg-neutral-800"
    textColor="text-gray-900 dark:text-white"
    borderColor="border-gray-200 dark:border-neutral-700"
    maxWidth="350px"
    rounded="lg"
    variant="elevated"
    class="shadow-lg"
    actions
&gt;
    &lt;template #header&gt;
        &lt;div class="relative"&gt;
            &lt;div class="flex items-center justify-center bg-gray-100 dark:bg-neutral-700 p-6 h-52"&gt;
                &lt;img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80"
                    alt="Wireless Headphones"
                    class="max-h-full max-w-full object-contain"
                /&gt;
            &lt;/div&gt;
            &lt;div class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded"&gt;
                NEW
            &lt;/div&gt;
            &lt;div class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"&gt;
                SALE
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #content&gt;
        &lt;div class="p-4"&gt;
            &lt;div class="flex justify-between items-center mb-2"&gt;
                &lt;div class="flex items-center"&gt;
                    &lt;c-rating :model-value="4" size="sm" fixed /&gt;
                    &lt;span class="ml-2 text-sm text-gray-600 dark:text-neutral-400"&gt;4.0 (42 reviews)&lt;/span&gt;
                &lt;/div&gt;
                &lt;span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"&gt;
                    In Stock
                &lt;/span&gt;
            &lt;/div&gt;

            &lt;div class="mt-3 mb-4"&gt;
                &lt;div class="flex items-baseline"&gt;
                    &lt;span class="text-2xl font-bold text-gray-900 dark:text-white"&gt;$249.99&lt;/span&gt;
                    &lt;span class="ml-2 text-sm text-gray-500 dark:text-neutral-400 line-through"&gt;$299.99&lt;/span&gt;
                    &lt;span class="ml-2 text-sm font-medium text-green-600 dark:text-green-400"&gt;Save 17%&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="text-xs text-gray-500 dark:text-neutral-400 mt-1"&gt;
                    Free shipping on orders over $50
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class="mb-4"&gt;
                &lt;div class="text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1"&gt;Color&lt;/div&gt;
                &lt;div class="flex space-x-2"&gt;
                    &lt;button class="w-6 h-6 rounded-full bg-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"&gt;&lt;/button&gt;
                    &lt;button class="w-6 h-6 rounded-full bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"&gt;&lt;/button&gt;
                    &lt;button class="w-6 h-6 rounded-full bg-blue-600 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"&gt;&lt;/button&gt;
                    &lt;button class="w-6 h-6 rounded-full bg-red-600 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"&gt;&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class="text-sm text-gray-600 dark:text-neutral-400"&gt;
                &lt;ul class="list-disc list-inside space-y-1"&gt;
                    &lt;li&gt;Active noise cancellation&lt;/li&gt;
                    &lt;li&gt;40-hour battery life&lt;/li&gt;
                    &lt;li&gt;Bluetooth 5.0 connectivity&lt;/li&gt;
                    &lt;li&gt;Built-in microphone&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #actions&gt;
        &lt;div class="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-neutral-700"&gt;
            &lt;c-button
                type="button"
                variant="text"
                class="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center"
            &gt;
                &lt;icon-heart class="w-4 h-4 mr-1.5" /&gt; Wishlist
            &lt;/c-button&gt;
            &lt;c-button
                type="button"
                class="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
            &gt;
                &lt;icon-shopping-cart class="w-4 h-4 mr-1.5" /&gt; Add to Cart
            &lt;/c-button&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/c-card&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination
            previous="Avatar"
            previousLink="/avatar"
            next="Dropdown"
            nextLink="/dropdown"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import IconSun from "@components/icons/IconSun.vue";
import IconCloud from "@components/icons/IconCloud.vue";
import IconBolt from "@components/icons/IconBolt.vue";

const expand = ref(true);
const time = ref(0);

const forecast = [
    { day: 'Monday', temp: '66°F', icon: IconSun },
    { day: 'Tuesday', temp: '63°F', icon: IconCloud },
    { day: 'Wednesday', temp: '60°F', icon: IconBolt }
];

function onClose() {
    alert('Card closed!');
}
</script>
