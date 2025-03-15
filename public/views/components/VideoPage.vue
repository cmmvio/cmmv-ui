<template>
    <BaseLayout>
        <c-seo
            section="Video Component"
            description="Learn how to use the CVideo component in CMMV UI. A powerful video player with customizable controls, responsive design, and support for captions, playback speed, and quality settings."
            :keywords="['video', 'component', 'ui', 'player', 'media', 'streaming', 'controls']"
        />

        <h1>Video</h1>

        <p>
            The <code>CVideo (alias: c-video)</code> component provides a customizable video player with a Netflix-style
            interface. It includes features like responsive sizing, custom controls, playback speed adjustment,
            fullscreen mode, volume controls, and support for captions.
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
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">URL of the video file to play.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">poster</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">URL of the image to display before the video starts playing.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">autoplay</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Attempts to automatically play the video when loaded.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">muted</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Initializes the video with sound muted.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">loop</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Makes the video replay when it reaches the end.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">captions</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of caption tracks to display with the video. Each item can be a string URL or an object with src, srclang, label, and kind properties.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">defaultVolume</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">1</td>
                    <td class="border-b px-4 py-2">Initial volume level (0-1).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">rounded</td>
                    <td class="border-b px-4 py-2">[String, Boolean]</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Applies border radius to the video container. Options: true (default rounded), <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>full</code>.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">height</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">'auto'</td>
                    <td class="border-b px-4 py-2">Explicitly sets the height of the video player.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">aspectRatio</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">'16/9'</td>
                    <td class="border-b px-4 py-2">Sets the aspect ratio of the video container (e.g., '16/9', '4/3').</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">customClass</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">Additional CSS classes to apply to the video container.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">hideControlsDelay</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">2000</td>
                    <td class="border-b px-4 py-2">Time in milliseconds before controls auto-hide during playback.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">qualities</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Array of quality options for the video. Each item should have label and value properties.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">defaultQuality</td>
                    <td class="border-b px-4 py-2">[String, Number]</td>
                    <td class="border-b px-4 py-2">'auto'</td>
                    <td class="border-b px-4 py-2">Initial quality setting for the video.</td>
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
                    <td class="border-b px-4 py-2">play</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when the video starts playing.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">pause</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when the video is paused.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ended</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when the video playback reaches the end.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">timeupdate</td>
                    <td class="border-b px-4 py-2">{ currentTime, duration }</td>
                    <td class="border-b px-4 py-2">Emitted when the playback position changes, providing the current time and total duration.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">volumechange</td>
                    <td class="border-b px-4 py-2">{ volume, muted }</td>
                    <td class="border-b px-4 py-2">Emitted when the volume or mute state changes.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fullscreenchange</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">Emitted when entering or exiting fullscreen mode.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">error</td>
                    <td class="border-b px-4 py-2">{ code, message }</td>
                    <td class="border-b px-4 py-2">Emitted when an error occurs during video loading or playback.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">captionchange</td>
                    <td class="border-b px-4 py-2">{ enabled, track }</td>
                    <td class="border-b px-4 py-2">Emitted when captions are enabled, disabled, or changed.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">qualitychange</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Emitted when the video quality setting is changed.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">ratechange</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">Emitted when the playback speed is changed.</td>
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
                    <td class="border-b px-4 py-2">play</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Starts playing the video.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">pause</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Pauses the video.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">setCurrentTime</td>
                    <td class="border-b px-4 py-2">time: Number</td>
                    <td class="border-b px-4 py-2">Seeks to a specific time in the video (in seconds).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">setVolume</td>
                    <td class="border-b px-4 py-2">volume: Number</td>
                    <td class="border-b px-4 py-2">Sets the volume level (0-1).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">setMuted</td>
                    <td class="border-b px-4 py-2">muted: Boolean</td>
                    <td class="border-b px-4 py-2">Sets the muted state of the video.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">setPlaybackRate</td>
                    <td class="border-b px-4 py-2">rate: Number</td>
                    <td class="border-b px-4 py-2">Sets the playback speed (e.g., 0.5, 1, 1.5, 2).</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">toggleCaptions</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Toggles caption visibility.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">setQuality</td>
                    <td class="border-b px-4 py-2">quality: String</td>
                    <td class="border-b px-4 py-2">Sets the video quality.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">getVideoElement</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Returns the native video element for advanced usage.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Keyboard Shortcuts</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Key</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">Space or K</td>
                    <td class="border-b px-4 py-2">Play/Pause</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">Right Arrow</td>
                    <td class="border-b px-4 py-2">Skip forward 10 seconds</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">Left Arrow</td>
                    <td class="border-b px-4 py-2">Skip backward 10 seconds</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">Up Arrow</td>
                    <td class="border-b px-4 py-2">Increase volume</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">Down Arrow</td>
                    <td class="border-b px-4 py-2">Decrease volume</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">M</td>
                    <td class="border-b px-4 py-2">Mute/Unmute</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">F</td>
                    <td class="border-b px-4 py-2">Toggle fullscreen</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">C</td>
                    <td class="border-b px-4 py-2">Toggle captions</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">0-9</td>
                    <td class="border-b px-4 py-2">Jump to percentage of video (0=0%, 5=50%, 9=90%)</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Video Player</h3>

        <p>
            The basic video player includes all essential controls with a Netflix-style interface: play/pause, volume control,
            progress bar, fullscreen toggle, and time display. The controls automatically hide during playback and reappear
            when the user moves the mouse over the video.
        </p>

        <card-docs padding="p-0">
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-3xl mx-auto">
                    <c-video
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                        :aspect-ratio="16/9"
                    ></c-video>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-video
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
        :aspect-ratio="16/9"
    &gt;&lt;/c-video&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Video with Captions</h3>

        <p>
            The video player supports captions and subtitles in multiple languages. You can provide an array of caption track URLs
            or objects with detailed information about each track. Users can toggle captions on/off and select different languages
            from the settings menu.
        </p>

        <card-docs padding="p-0">
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-3xl mx-auto">
                    <c-video
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
                        :captions="captionTracks"
                        :aspect-ratio="16/9"
                    ></c-video>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-video
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
        :captions="captionTracks"
        :aspect-ratio="16/9"
    &gt;&lt;/c-video&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const captionTracks = [
    {
        src: 'https://example.com/captions/en.vtt',
        srclang: 'en',
        label: 'English',
        kind: 'subtitles',
        default: true
    },
    {
        src: 'https://example.com/captions/es.vtt',
        srclang: 'es',
        label: 'Español',
        kind: 'subtitles'
    },
    {
        src: 'https://example.com/captions/fr.vtt',
        srclang: 'fr',
        label: 'Français',
        kind: 'subtitles'
    }
];
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Custom Styling</h3>

        <p>
            The video component supports customization through props like <code>rounded</code>, <code>customClass</code>,
            and <code>aspectRatio</code>. You can create rounded video players, apply custom styles, and maintain different
            aspect ratios to fit your design.
        </p>

        <card-docs padding="p-0">
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-3xl mx-auto">
                    <c-video
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg"
                        :aspect-ratio="16/9"
                        rounded="lg"
                        customClass="shadow-lg"
                    ></c-video>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;c-video
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
        :aspect-ratio="16/9"
        rounded="lg"
        customClass="shadow-lg"
    &gt;&lt;/c-video&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Responsive Video (Different Aspect Ratios)</h3>

        <p>
            The video component can be configured with different aspect ratios using the <code>aspectRatio</code> prop.
            This makes it easier to maintain consistent proportions across different screen sizes while accommodating
            different video formats.
        </p>

        <card-docs padding="p-0">
            <div class="mx-auto px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">16:9 Aspect Ratio</p>
                    <c-video
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
                        :aspect-ratio="16/9"
                        rounded="md"
                    ></c-video>
                </div>
                <div>
                    <p class="text-center mb-2 text-sm text-neutral-600 dark:text-neutral-300">4:3 Aspect Ratio</p>
                    <c-video
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
                        :aspect-ratio="4/3"
                        rounded="md"
                    ></c-video>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;!-- 16:9 Widescreen Format --&gt;
    &lt;c-video
        src="https://example.com/widescreen.mp4"
        poster="https://example.com/widescreen-poster.jpg"
        :aspect-ratio="16/9"
        rounded="md"
    &gt;&lt;/c-video&gt;

    &lt;!-- 4:3 Standard Format --&gt;
    &lt;c-video
        src="https://example.com/standard.mp4"
        poster="https://example.com/standard-poster.jpg"
        :aspect-ratio="4/3"
        rounded="md"
    &gt;&lt;/c-video&gt;
&lt;/template&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Programmatic Control</h3>

        <p>
            The video component exposes methods that can be used to control playback programmatically.
            This enables integration with custom UI elements or automated playback scenarios.
        </p>

        <card-docs padding="p-0">
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-3xl mx-auto">
                    <div class="flex flex-wrap gap-2 mb-4 justify-center">
                        <c-button @click="playVideo" variant="primary">Play</c-button>
                        <c-button @click="pauseVideo" variant="secondary">Pause</c-button>
                        <c-button @click="seekToMiddle" variant="outlined">Seek to Middle</c-button>
                        <c-button @click="setHalfVolume" variant="outlined">50% Volume</c-button>
                        <c-button @click="toggleMuteVideo" variant="outlined">Toggle Mute</c-button>
                        <c-button @click="setDoubleSpeed" variant="outlined">2x Speed</c-button>
                    </div>
                    <c-video
                        ref="videoRef"
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
                        :aspect-ratio="16/9"
                        rounded="md"
                    ></c-video>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="flex gap-2 mb-4"&gt;
        &lt;c-button @click="playVideo" variant="primary"&gt;Play&lt;/c-button&gt;
        &lt;c-button @click="pauseVideo" variant="secondary"&gt;Pause&lt;/c-button&gt;
        &lt;c-button @click="seekToMiddle" variant="outlined"&gt;Seek to Middle&lt;/c-button&gt;
        &lt;c-button @click="setHalfVolume" variant="outlined"&gt;50% Volume&lt;/c-button&gt;
        &lt;c-button @click="toggleMuteVideo" variant="outlined"&gt;Toggle Mute&lt;/c-button&gt;
        &lt;c-button @click="setDoubleSpeed" variant="outlined"&gt;2x Speed&lt;/c-button&gt;
    &lt;/div&gt;

    &lt;c-video
        ref="videoRef"
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
        :aspect-ratio="16/9"
    &gt;&lt;/c-video&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const videoRef = ref(null);

const playVideo = () => {
    videoRef.value.play();
};

const pauseVideo = () => {
    videoRef.value.pause();
};

const seekToMiddle = () => {
    // Get the video element and set current time to the middle
    const videoElement = videoRef.value.getVideoElement();
    const middleTime = videoElement.duration / 2;
    videoRef.value.setCurrentTime(middleTime);
};

const setHalfVolume = () => {
    videoRef.value.setVolume(0.5);
};

const toggleMuteVideo = () => {
    const videoElement = videoRef.value.getVideoElement();
    videoRef.value.setMuted(!videoElement.muted);
};

const setDoubleSpeed = () => {
    videoRef.value.setPlaybackRate(2);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Event Handling</h3>

        <p>
            The video component emits various events that you can listen to and respond to in your application.
            This enables you to create interactive experiences based on the video's playback state.
        </p>

        <card-docs padding="p-0">
            <div class="mx-auto px-4 py-5 sm:p-6">
                <div class="max-w-3xl mx-auto">
                    <c-video
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg"
                        :aspect-ratio="16/9"
                        rounded="md"
                        @play="logEvent('play')"
                        @pause="logEvent('pause')"
                        @ended="logEvent('ended')"
                        @timeupdate="logTimeUpdate"
                        @volumechange="logVolumeChange"
                        @fullscreenchange="logFullscreen"
                        @captionchange="logCaptionChange"
                        @ratechange="logRateChange"
                    ></c-video>
                    <div class="mt-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-x-auto">
                        <h4 class="font-medium mb-2">Event Log:</h4>
                        <pre class="text-sm">{{ eventLog }}</pre>
                    </div>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
    &lt;div class="mb-4 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md"&gt;
        &lt;h4 class="font-medium mb-2"&gt;Event Log:&lt;/h4&gt;
        &lt;pre class="text-sm"&gt;{{ eventLog }}&lt;/pre&gt;
    &lt;/div&gt;

    &lt;c-video
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
        :aspect-ratio="16/9"
        @play="logEvent('play')"
        @pause="logEvent('pause')"
        @ended="logEvent('ended')"
        @timeupdate="logTimeUpdate"
        @volumechange="logVolumeChange"
        @fullscreenchange="logFullscreen"
        @captionchange="logCaptionChange"
        @ratechange="logRateChange"
    &gt;&lt;/c-video&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const eventLog = ref('Events will appear here as they occur...\n');

const logEvent = (eventName) => {
    eventLog.value += `[${new Date().toISOString()}] Event: ${eventName}\n`;
    // Trim log if it gets too long
    if (eventLog.value.length > 1000) {
        eventLog.value = eventLog.value.substring(eventLog.value.length - 1000);
    }
};

const logTimeUpdate = (data) => {
    // Log time updates less frequently to avoid flooding the log
    if (Math.floor(data.currentTime) % 5 === 0 && data.currentTime > 0) {
        logEvent(`timeupdate: ${Math.floor(data.currentTime)}s / ${Math.floor(data.duration)}s`);
    }
};

const logVolumeChange = (data) => {
    logEvent(`volumechange: ${Math.round(data.volume * 100)}%, muted: ${data.muted}`);
};

const logFullscreen = (isFullscreen) => {
    logEvent(`fullscreenchange: ${isFullscreen ? 'entered' : 'exited'} fullscreen`);
};

const logCaptionChange = (data) => {
    logEvent(`captionchange: ${data.enabled ? 'enabled' : 'disabled'}, track: ${data.track?.label || 'none'}`);
};

const logRateChange = (rate) => {
    logEvent(`ratechange: ${rate}x speed`);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Image" previousLink="/image" next="Loader" nextLink="/loader" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CardDocs from "../../components/CardDocs.vue";

// Sample caption tracks for demonstration
const captionTracks = [
    {
        src: "/vtt/sample-en.vtt",
        srclang: "en",
        label: "English",
        kind: "subtitles",
        default: true
    },
    {
        src: "/vtt/sample-es.vtt",
        srclang: "es",
        label: "Español",
        kind: "subtitles"
    },
    {
        src: "/vtt/sample-fr.vtt",
        srclang: "fr",
        label: "Français",
        kind: "subtitles"
    }
];

// References for programmatic control
const videoRef = ref(null);

// Methods for programmatic control
const playVideo = () => {
    if (videoRef.value) videoRef.value.play();
};

const pauseVideo = () => {
    if (videoRef.value) videoRef.value.pause();
};

const seekToMiddle = () => {
    if (videoRef.value) {
        const videoElement = videoRef.value.getVideoElement();
        if (videoElement) {
            const middleTime = videoElement.duration / 2;
            videoRef.value.setCurrentTime(middleTime);
        }
    }
};

const setHalfVolume = () => {
    if (videoRef.value) videoRef.value.setVolume(0.5);
};

const toggleMuteVideo = () => {
    if (videoRef.value) {
        const videoElement = videoRef.value.getVideoElement();
        if (videoElement) {
            videoRef.value.setMuted(!videoElement.muted);
        }
    }
};

const setDoubleSpeed = () => {
    if (videoRef.value) videoRef.value.setPlaybackRate(2);
};

// Event logging
const eventLog = ref('Events will appear here as they occur...\n');

const logEvent = (eventName) => {
    eventLog.value += `[${new Date().toLocaleTimeString()}] Event: ${eventName}\n`;
    // Trim log if it gets too long
    if (eventLog.value.length > 1000) {
        eventLog.value = eventLog.value.substring(eventLog.value.length - 1000);
    }
};

const logTimeUpdate = (data) => {
    // Log time updates less frequently to avoid flooding the log
    if (Math.floor(data.currentTime) % 5 === 0 && data.currentTime > 0) {
        logEvent(`timeupdate: ${Math.floor(data.currentTime)}s / ${Math.floor(data.duration)}s`);
    }
};

const logVolumeChange = (data) => {
    logEvent(`volumechange: ${Math.round(data.volume * 100)}%, muted: ${data.muted}`);
};

const logFullscreen = (isFullscreen) => {
    logEvent(`fullscreenchange: ${isFullscreen ? 'entered' : 'exited'} fullscreen`);
};

const logCaptionChange = (data) => {
    logEvent(`captionchange: ${data.enabled ? 'enabled' : 'disabled'}, track: ${data.track?.label || 'none'}`);
};

const logRateChange = (rate) => {
    logEvent(`ratechange: ${rate}x speed`);
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
    font-family: monospace;
}
</style>
