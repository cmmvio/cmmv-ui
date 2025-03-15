<template>
    <div class="c-video-container relative overflow-hidden bg-black select-none" :class="[roundedClass, customClass]"
        :style="containerStyle" @mousemove="handleMouseMove" @mouseleave="hideControlsWithDelay" ref="containerRef">
        <!-- Video Element -->
        <video ref="videoRef" :src="src" :poster="poster" class="w-full h-full object-contain"
            :class="{ 'cursor-none': controlsHidden && isPlaying }" @timeupdate="onTimeUpdate"
            @loadedmetadata="onMetadataLoaded" @ended="onEnded" @click="togglePlay" @waiting="isBuffering = true"
            @canplay="isBuffering = false" @error="onVideoError" preload="metadata">
            <source v-if="src" :src="src" :type="videoType">
            <track v-for="(caption, index) in normalizedCaptions" :key="index" :src="caption.src"
                :kind="caption.kind || 'subtitles'" :srclang="caption.srclang" :label="caption.label"
                :default="caption.default" />
            Your browser does not support the video tag.
        </video>

        <!-- Loading Indicator -->
        <div v-if="isBuffering" class="absolute inset-0 flex items-center justify-center z-20">
            <div class="c-video-loader"></div>
        </div>

        <!-- Big Play Button -->
        <div v-if="!isPlaying && !controlsHidden"
            class="absolute inset-0 flex items-center justify-center cursor-pointer z-10" @click="togglePlay">
            <div class="bg-black/40 rounded-full p-5 hover:bg-black/60 transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </div>

        <!-- Error Overlay -->
        <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-black/90 text-white z-30">
            <div class="text-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-red-500 mb-2" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-bold mb-2">Video Error</h3>
                <p>{{ errorMessage || 'Failed to load video' }}</p>
            </div>
        </div>

        <!-- Controls Overlay - YouTube style -->
        <div v-show="!controlsHidden || isSettingsOpen || isHovering || isDragging"
            class="c-video-controls absolute inset-x-0 bottom-0 z-20 transition-opacity duration-300"
            :class="{ 'opacity-0': controlsHidden && !isSettingsOpen && !isHovering && !isDragging, 'opacity-100': !controlsHidden || isSettingsOpen || isHovering || isDragging }">
            <!-- Progress Bar - Interactive like CSlider -->
            <div ref="progressBarRef" class="relative w-full h-3 cursor-pointer group/progress"
                @mousedown="onProgressMouseDown" @mousemove="updatePreviewPosition" @mouseenter="isHovering = true"
                @mouseleave="isHovering = false">
                <!-- Background Track -->
                <div class="absolute bottom-0 w-full h-1 group-hover/progress:h-2 transition-all bg-gray-600/60">
                    <!-- Buffered Progress -->
                    <div class="absolute h-full bg-gray-500/70" :style="{ width: `${bufferedPercent}%` }"></div>

                    <!-- Playback Progress -->
                    <div class="absolute h-full bg-red-600" :style="{ width: `${progressPercent}%` }">
                        <!-- Progress Handle -->
                        <div class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full shadow-md opacity-0 group-hover/progress:opacity-100 hover:scale-110 transition-all"
                            :class="{ 'opacity-100 scale-110': isDragging }"></div>
                    </div>
                </div>
            </div>

            <!-- Control Buttons - Fixed alignment -->
            <div class="flex items-center justify-between px-4 py-2 bg-black/70">
                <div class="flex items-center space-x-4">
                    <!-- Play/Pause Button -->
                    <button @click.stop="togglePlay"
                        class="flex items-center justify-center w-6 h-6 text-white hover:text-white/80 focus:outline-none">
                        <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>

                    <!-- Volume Control - Fixed alignment -->
                    <div class="flex items-center group/volume">
                        <button @click.stop="toggleMute"
                            class="flex items-center justify-center w-6 h-6 text-white hover:text-white/80 focus:outline-none">
                            <svg v-if="isMuted || volume === 0" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                            </svg>
                            <svg v-else-if="volume < 0.5" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 9v6h4l5 5V4l-5 5H7z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                        </button>
                        <!-- Volume Slider - Improved alignment -->
                        <div
                            class="h-6 overflow-hidden flex items-center ml-1 w-0 group-hover/volume:w-20 transition-all duration-300">
                            <input type="range" min="0" max="1" step="0.01" v-model.number="volume"
                                class="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer accent-red-600" />
                        </div>
                    </div>

                    <!-- Time Display -->
                    <div class="text-white text-sm flex items-center h-6">
                        <span>{{ formatTime(currentTime) }}</span>
                        <span class="mx-1">/</span>
                        <span>{{ formatTime(duration) }}</span>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <!-- Captions Toggle -->
                    <button v-if="hasCaptions" @click.stop="toggleCaptions"
                        class="flex items-center justify-center w-6 h-6 text-white hover:text-white/80 focus:outline-none"
                        :class="{ 'text-red-500': captionsEnabled }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12zM7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" />
                        </svg>
                    </button>

                    <!-- Settings Button - Fixed size -->
                    <div class="relative">
                        <button @click.stop="toggleSettings"
                            class="flex items-center justify-center w-6 h-6 text-white hover:text-white/80 focus:outline-none"
                            :class="{ 'text-red-500': isSettingsOpen }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                            </svg>
                        </button>

                        <!-- Settings Menu - YouTube style -->
                        <div v-show="isSettingsOpen"
                            class="absolute bottom-full right-0 mb-2 w-60 bg-black/90 rounded-md shadow-lg p-2 z-30"
                            @click.stop>
                            <!-- Playback Speed -->
                            <div class="mb-3">
                                <div class="text-white text-xs font-medium mb-2 px-2 uppercase tracking-wider">Playback
                                    Speed</div>
                                <div class="grid grid-cols-3 gap-1 px-2">
                                    <button v-for="speed in playbackSpeeds" :key="speed"
                                        @click="setPlaybackSpeed(speed)"
                                        class="text-xs px-2 py-1.5 rounded text-white transition-colors"
                                        :class="playbackRate === speed ? 'bg-red-600' : 'bg-gray-700/50 hover:bg-gray-600/50'">
                                        {{ speed === 1 ? 'Normal' : speed + 'x' }}
                                    </button>
                                </div>
                            </div>

                            <!-- Captions -->
                            <div v-if="hasCaptions" class="mb-3">
                                <div class="text-white text-xs font-medium mb-2 px-2 uppercase tracking-wider">Captions
                                </div>
                                <div class="space-y-0.5">
                                    <button @click="disableCaptions"
                                        class="w-full text-left text-xs px-2 py-1.5 rounded text-white transition-colors"
                                        :class="!captionsEnabled ? 'bg-red-600' : 'hover:bg-gray-700/50'">
                                        Off
                                    </button>
                                    <button v-for="(track, index) in textTracks" :key="index"
                                        @click="selectTextTrack(index)"
                                        class="w-full text-left text-xs px-2 py-1.5 rounded text-white transition-colors"
                                        :class="captionsEnabled && activeTextTrack === index ? 'bg-red-600' : 'hover:bg-gray-700/50'">
                                        {{ track.label || `Track ${index + 1}` }}
                                    </button>
                                </div>
                            </div>

                            <!-- Quality Options -->
                            <div v-if="qualityLevels.length > 0" class="mb-2">
                                <div class="text-white text-xs font-medium mb-2 px-2 uppercase tracking-wider">Quality
                                </div>
                                <div class="space-y-0.5">
                                    <button v-for="quality in qualityLevels" :key="quality.value"
                                        @click="setQuality(quality.value)"
                                        class="w-full text-left text-xs px-2 py-1.5 rounded text-white transition-colors"
                                        :class="currentQuality === quality.value ? 'bg-red-600' : 'hover:bg-gray-700/50'">
                                        {{ quality.label }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Fullscreen Toggle -->
                    <button @click.stop="toggleFullscreen"
                        class="flex items-center justify-center w-6 h-6 text-white hover:text-white/80 focus:outline-none">
                        <svg v-if="isFullscreen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const props = defineProps({
    src: {
        type: String,
        default: '',
    },
    poster: {
        type: String,
        default: '',
    },
    autoplay: {
        type: Boolean,
        default: false,
    },
    muted: {
        type: Boolean,
        default: false,
    },
    loop: {
        type: Boolean,
        default: false,
    },
    captions: {
        type: Array,
        default: () => [],
    },
    defaultVolume: {
        type: Number,
        default: 1,
        validator: (value) => value >= 0 && value <= 1,
    },
    rounded: {
        type: [String, Boolean],
        default: "md",
        validator: (value) => {
            if (typeof value === 'boolean') return true;
            return ['sm', 'md', 'lg', 'xl', 'full', 'none'].includes(value);
        }
    },
    height: {
        type: [String, Number],
        default: 'auto',
    },
    aspectRatio: {
        type: [String, Number],
        default: '16/9',
    },
    customClass: {
        type: String,
        default: '',
    },
    hideControlsDelay: {
        type: Number,
        default: 2000, // ms
    },
    qualities: {
        type: Array,
        default: () => [],
    },
    defaultQuality: {
        type: [String, Number],
        default: 'auto',
    },
});

const emit = defineEmits([
    'play',
    'pause',
    'ended',
    'timeupdate',
    'volumechange',
    'fullscreenchange',
    'error',
    'captionchange',
    'qualitychange',
    'ratechange'
]);

// Refs
const videoRef = ref(null);
const progressBarRef = ref(null);
const containerRef = ref(null);

// State
const isPlaying = ref(false);
const isMuted = ref(props.muted);
const isBuffering = ref(false);
const isSettingsOpen = ref(false);
const isFullscreen = ref(false);
const controlsHidden = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const bufferedPercent = ref(0);
const volume = ref(props.defaultVolume);
const error = ref(false);
const errorMessage = ref('');
const controlsTimeout = ref(null);
const captionsEnabled = ref(false);
const activeTextTrack = ref(-1);
const textTracks = ref([]);
const playbackRate = ref(1);
const qualityLevels = ref(props.qualities.length ? props.qualities : [
    { label: 'Auto', value: 'auto' },
    { label: '1080p', value: '1080p' },
    { label: '720p', value: '720p' },
    { label: '480p', value: '480p' },
    { label: '360p', value: '360p' }
]);
const currentQuality = ref(props.defaultQuality);
const isHovering = ref(false);
const playerWidth = ref(0);
const playerHeight = ref(0);
const isDragging = ref(false);

// Computed
const progressPercent = computed(() => {
    if (duration.value === 0) return 0;
    return (currentTime.value / duration.value) * 100;
});

const videoType = computed(() => {
    if (!props.src) return '';
    const extension = props.src.split('.').pop().toLowerCase();
    switch (extension) {
        case 'mp4': return 'video/mp4';
        case 'webm': return 'video/webm';
        case 'ogg': return 'video/ogg';
        default: return `video/${extension}`;
    }
});

const normalizedCaptions = computed(() => {
    if (!props.captions || !Array.isArray(props.captions)) return [];
    return props.captions.map(caption => {
        if (typeof caption === 'string') {
            // Handle simple string URLs
            return {
                src: caption,
                srclang: 'en',
                label: 'English',
                kind: 'subtitles'
            };
        }
        return caption;
    });
});

const hasCaptions = computed(() => {
    return textTracks.value.length > 0;
});

// Fixed containerStyle computed property to handle responsive sizing better
const containerStyle = computed(() => {
    const style = {};

    if (props.height !== 'auto') {
        style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
    } else if (props.aspectRatio && !isFullscreen.value) {
        // Only apply aspect ratio when not in fullscreen
        let ratio;
        if (typeof props.aspectRatio === 'string') {
            const [w, h] = props.aspectRatio.split('/').map(Number);
            ratio = h / w;
            style.width = '100%';  // Make width 100% of parent
            style.height = 'auto'; // Auto height
            style.aspectRatio = `${w} / ${h}`;  // Use modern aspect-ratio
        } else if (typeof props.aspectRatio === 'number') {
            const w = 1, h = 1 / props.aspectRatio;
            style.width = '100%';
            style.height = 'auto';
            style.aspectRatio = `${w} / ${h}`;
        }
    }

    return style;
});

const roundedClass = computed(() => {
    if (props.rounded === true) return 'rounded';
    if (props.rounded === 'sm') return 'rounded-sm';
    if (props.rounded === 'md') return 'rounded-md';
    if (props.rounded === 'lg') return 'rounded-lg';
    if (props.rounded === 'xl') return 'rounded-xl';
    if (props.rounded === 'full') return 'rounded-full';
    return '';
});

const playbackSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];

// Methods
const togglePlay = () => {
    const video = videoRef.value;
    if (!video) return;

    if (video.paused) {
        video.play()
            .then(() => {
                isPlaying.value = true;
                emit('play');
            })
            .catch(err => {
                console.error('Error playing video:', err);
                error.value = true;
                errorMessage.value = 'Failed to play video. It may require user interaction first.';
            });
    } else {
        video.pause();
        isPlaying.value = false;
        emit('pause');
    }
};

const toggleMute = () => {
    const video = videoRef.value;
    if (!video) return;

    isMuted.value = !isMuted.value;
    video.muted = isMuted.value;

    // Store previous volume to restore when unmuting
    if (isMuted.value) {
        video.dataset.previousVolume = volume.value;
        volume.value = 0;
    } else {
        volume.value = parseFloat(video.dataset.previousVolume || 1);
    }

    emit('volumechange', { volume: volume.value, muted: isMuted.value });
};

const toggleFullscreen = async () => {
    try {
        const container = videoRef.value.parentElement;

        if (!document.fullscreenElement) {
            await container.requestFullscreen();
            isFullscreen.value = true;
        } else {
            await document.exitFullscreen();
            isFullscreen.value = false;
        }

        emit('fullscreenchange', isFullscreen.value);
    } catch (err) {
        console.error('Fullscreen error:', err);
        error.value = true;
        errorMessage.value = 'Fullscreen is not supported in your browser.';
    }
};

const seekTo = (event) => {
    updateProgressFromEvent(event);
};

const onTimeUpdate = () => {
    const video = videoRef.value;
    if (!video) return;

    currentTime.value = video.currentTime;
    updateBufferProgress();

    emit('timeupdate', { currentTime: currentTime.value, duration: duration.value });
};

const updateBufferProgress = () => {
    const video = videoRef.value;
    if (!video || !video.buffered || video.buffered.length === 0) return;

    // Find the buffer range that includes the current playback position
    for (let i = 0; i < video.buffered.length; i++) {
        if (video.buffered.start(i) <= video.currentTime && video.currentTime <= video.buffered.end(i)) {
            bufferedPercent.value = (video.buffered.end(i) / video.duration) * 100;
            break;
        }
    }
};

const onMetadataLoaded = () => {
    const video = videoRef.value;
    if (!video) return;

    duration.value = video.duration;

    // Get available text tracks
    if (video.textTracks && video.textTracks.length > 0) {
        textTracks.value = Array.from(video.textTracks);

        // Initially disable all text tracks
        for (let i = 0; i < video.textTracks.length; i++) {
            video.textTracks[i].mode = 'hidden';
        }
    }

    // Set initial volume
    video.volume = volume.value;
    video.muted = isMuted.value;

    // Set playback rate
    video.playbackRate = playbackRate.value;

    // Autoplay if specified
    if (props.autoplay) {
        togglePlay();
    }
};

const onEnded = () => {
    isPlaying.value = false;

    // Loop video if specified
    if (props.loop) {
        const video = videoRef.value;
        if (video) {
            video.currentTime = 0;
            togglePlay();
        }
    }

    emit('ended');
};

const onVideoError = (e) => {
    error.value = true;

    const video = videoRef.value;
    if (!video) return;

    // Map error codes to human-readable messages
    switch (video.error?.code) {
        case 1:
            errorMessage.value = 'The video playback was aborted.';
            break;
        case 2:
            errorMessage.value = 'Network error. Please check your connection.';
            break;
        case 3:
            errorMessage.value = 'The video decoding failed.';
            break;
        case 4:
            errorMessage.value = 'The video is not supported.';
            break;
        default:
            errorMessage.value = 'An unknown error occurred.';
    }

    emit('error', { code: video.error?.code, message: errorMessage.value });
};

const formatTime = (time) => {
    if (isNaN(time) || time === Infinity) return '0:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const handleMouseMove = () => {
    controlsHidden.value = false;

    // Clear any existing timeout
    if (controlsTimeout.value) {
        clearTimeout(controlsTimeout.value);
    }

    // Set a new timeout to hide controls
    if (isPlaying.value && !isSettingsOpen.value) {
        controlsTimeout.value = setTimeout(() => {
            controlsHidden.value = true;
        }, props.hideControlsDelay);
    }
};

const hideControlsWithDelay = () => {
    if (isPlaying.value && !isSettingsOpen.value) {
        controlsTimeout.value = setTimeout(() => {
            controlsHidden.value = true;
        }, props.hideControlsDelay / 2);
    }
};

const toggleSettings = () => {
    isSettingsOpen.value = !isSettingsOpen.value;

    // If settings is opened, don't hide controls
    if (isSettingsOpen.value && controlsTimeout.value) {
        clearTimeout(controlsTimeout.value);
    }
};

const toggleCaptions = () => {
    captionsEnabled.value = !captionsEnabled.value;

    const video = videoRef.value;
    if (!video || !video.textTracks) return;

    if (captionsEnabled.value) {
        // If enabling captions, select the first one or the previously active one
        if (activeTextTrack.value === -1 && video.textTracks.length > 0) {
            activeTextTrack.value = 0;
        }

        if (activeTextTrack.value >= 0 && activeTextTrack.value < video.textTracks.length) {
            for (let i = 0; i < video.textTracks.length; i++) {
                video.textTracks[i].mode = i === activeTextTrack.value ? 'showing' : 'hidden';
            }
        }
    } else {
        // Disable all captions
        for (let i = 0; i < video.textTracks.length; i++) {
            video.textTracks[i].mode = 'hidden';
        }
    }

    emit('captionchange', {
        enabled: captionsEnabled.value,
        track: captionsEnabled.value ? video.textTracks[activeTextTrack.value] : null
    });
};

const selectTextTrack = (index) => {
    const video = videoRef.value;
    if (!video || !video.textTracks || index >= video.textTracks.length) return;

    activeTextTrack.value = index;
    captionsEnabled.value = true;

    for (let i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = i === index ? 'showing' : 'hidden';
    }

    emit('captionchange', {
        enabled: true,
        track: video.textTracks[index]
    });
};

const disableCaptions = () => {
    const video = videoRef.value;
    if (!video || !video.textTracks) return;

    captionsEnabled.value = false;

    for (let i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'hidden';
    }

    emit('captionchange', { enabled: false, track: null });
};

const setPlaybackSpeed = (speed) => {
    const video = videoRef.value;
    if (!video) return;

    playbackRate.value = speed;
    video.playbackRate = speed;

    emit('ratechange', speed);
};

const setQuality = (quality) => {
    currentQuality.value = quality;
    emit('qualitychange', quality);

    // Implement quality switching logic here
    // This would require integration with a specific video library or API
    // For example, with HLS.js, Dash.js, or custom implementation for adaptive streaming
    console.log(`Quality set to: ${quality}`);
};

// New method to update the preview position
const updatePreviewPosition = (event) => {
    // This would be used for showing a thumbnail preview when hovering over the progress bar
    // For simplicity, we're just tracking the hover state for now
    isHovering.value = true;
};

// Method to update player dimensions
const updatePlayerDimensions = () => {
    if (containerRef.value) {
        playerWidth.value = containerRef.value.clientWidth;
        playerHeight.value = containerRef.value.clientHeight;
    }
};

// Methods for interactive progress slider
const onProgressMouseDown = (event) => {
    event.preventDefault();

    if (props.disabled) return;

    isDragging.value = true;
    document.addEventListener('mousemove', onProgressMouseMove);
    document.addEventListener('mouseup', onProgressMouseUp);

    // Update position immediately on click
    updateProgressFromEvent(event);
};

const onProgressMouseMove = (event) => {
    if (!isDragging.value) return;
    event.preventDefault();
    updateProgressFromEvent(event);
};

const onProgressMouseUp = (event) => {
    if (!isDragging.value) return;

    isDragging.value = false;
    document.removeEventListener('mousemove', onProgressMouseMove);
    document.removeEventListener('mouseup', onProgressMouseUp);

    // Final update to position
    updateProgressFromEvent(event);
};

const updateProgressFromEvent = (event) => {
    const video = videoRef.value;
    const progressBar = progressBarRef.value;

    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / rect.width));

    const newTime = percentage * duration.value;
    video.currentTime = newTime;
    currentTime.value = newTime;

    emit('timeupdate', { currentTime: currentTime.value, duration: duration.value });
};

// Lifecycle hooks
onMounted(() => {
    const video = videoRef.value;
    if (!video) return;

    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', () => {
        isFullscreen.value = !!document.fullscreenElement;
    });

    // Listen for keyboard events
    document.addEventListener('keydown', handleKeyboardControls);

    // Initialize video state
    volume.value = props.defaultVolume;
    isMuted.value = props.muted;
    video.volume = volume.value;
    video.muted = isMuted.value;

    // Track click outside of settings to close it
    document.addEventListener('click', (event) => {
        if (isSettingsOpen.value && !event.target.closest('.c-video-controls')) {
            isSettingsOpen.value = false;
        }
    });

    // Add window resize listener to update player dimensions
    window.addEventListener('resize', updatePlayerDimensions);
    nextTick(() => {
        updatePlayerDimensions();
    });

    // Additional cleanup for progress slider
    document.removeEventListener('mousemove', onProgressMouseMove);
    document.removeEventListener('mouseup', onProgressMouseUp);
});

onUnmounted(() => {
    // Clean up event listeners
    document.removeEventListener('keydown', handleKeyboardControls);
    document.removeEventListener('fullscreenchange', () => { });

    // Clear any remaining timeouts
    if (controlsTimeout.value) {
        clearTimeout(controlsTimeout.value);
    }

    // Pause video if it's still playing
    const video = videoRef.value;
    if (video && !video.paused) {
        video.pause();
    }

    // Remove window resize listener
    window.removeEventListener('resize', updatePlayerDimensions);

    // Additional cleanup for progress slider
    document.removeEventListener('mousemove', onProgressMouseMove);
    document.removeEventListener('mouseup', onProgressMouseUp);
});

// Keyboard controls
const handleKeyboardControls = (event) => {
    // Only handle keyboard events if the video container has focus
    const videoContainer = videoRef.value?.parentElement;
    if (!videoContainer || !videoContainer.contains(document.activeElement)) {
        return;
    }

    const video = videoRef.value;
    if (!video) return;

    switch (event.key) {
        case ' ':
        case 'k':
            event.preventDefault();
            togglePlay();
            break;

        case 'ArrowRight':
            event.preventDefault();
            video.currentTime = Math.min(video.currentTime + 10, video.duration);
            currentTime.value = video.currentTime;
            break;

        case 'ArrowLeft':
            event.preventDefault();
            video.currentTime = Math.max(video.currentTime - 10, 0);
            currentTime.value = video.currentTime;
            break;

        case 'ArrowUp':
            event.preventDefault();
            volume.value = Math.min(volume.value + 0.1, 1);
            break;

        case 'ArrowDown':
            event.preventDefault();
            volume.value = Math.max(volume.value - 0.1, 0);
            break;

        case 'm':
            event.preventDefault();
            toggleMute();
            break;

        case 'f':
            event.preventDefault();
            toggleFullscreen();
            break;

        case 'c':
            event.preventDefault();
            if (hasCaptions.value) {
                toggleCaptions();
            }
            break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // Jump to percentage of video duration
            event.preventDefault();
            const percent = parseInt(event.key) * 10;
            video.currentTime = (duration.value * percent) / 100;
            currentTime.value = video.currentTime;
            break;
    }
};

// Public API
defineExpose({
    play: () => {
        const video = videoRef.value;
        if (video && video.paused) {
            togglePlay();
        }
    },
    pause: () => {
        const video = videoRef.value;
        if (video && !video.paused) {
            togglePlay();
        }
    },
    setCurrentTime: (time) => {
        const video = videoRef.value;
        if (video) {
            video.currentTime = Math.max(0, Math.min(time, video.duration));
            currentTime.value = video.currentTime;
        }
    },
    setVolume: (newVolume) => {
        volume.value = Math.max(0, Math.min(newVolume, 1));
    },
    setMuted: (muted) => {
        const video = videoRef.value;
        if (video) {
            isMuted.value = muted;
            video.muted = muted;
        }
    },
    setPlaybackRate: setPlaybackSpeed,
    toggleCaptions,
    setQuality,
    getVideoElement: () => videoRef.value
});
</script>

<style scoped>
.c-video-container {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Update loader style to match YouTube */
.c-video-loader {
    width: 48px;
    height: 48px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #ffffff;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* YouTube-style volume slider */
input[type=range] {
    -webkit-appearance: none;
    height: 4px;
    border-radius: 2px;
    background: #555;
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e11d48;
    /* Red-600 */
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e11d48;
    /* Red-600 */
    cursor: pointer;
    border: none;
}

/* Improved progress bar styles */
.group\/progress:hover .h-1 {
    height: 0.5rem !important;
    /* 8px */
}

/* Custom scrollbar for settings menu */
.c-video-controls ::-webkit-scrollbar {
    width: 5px;
}

.c-video-controls ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
}

.c-video-controls ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

.c-video-controls ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* Prevent text selection in controls */
.c-video-controls {
    user-select: none;
}
</style>
