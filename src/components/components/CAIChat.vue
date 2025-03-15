<template>
    <div class="flex flex-col h-full">
        <!-- Chat Container -->
        <div ref="chatContainer" class="flex-1 overflow-y-auto space-y-6 px-4 py-6">
            <template v-for="(message, index) in messages" :key="index">
                <!-- User Message -->
                <div v-if="message.role === 'user'" class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                        U
                    </div>
                    <div class="flex-1 space-y-1">
                        <div class="text-sm text-neutral-900 dark:text-neutral-100 whitespace-pre-wrap">
                            {{ message.content }}
                        </div>
                    </div>
                </div>

                <!-- Assistant Message -->
                <div v-else class="flex items-start space-x-4">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                    </div>
                    <div class="flex-1 space-y-1">
                        <div v-if="message.isTyping" class="flex space-x-1">
                            <div class="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce"></div>
                            <div class="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                            <div class="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                        </div>
                        <div v-else class="prose dark:prose-invert max-w-none text-sm text-neutral-800 dark:text-neutral-200">
                            <div class="markdown-body" v-html="formatMessage(message.content)"></div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <!-- Input Area -->
        <div class="border-t border-neutral-200 dark:border-neutral-800">
            <div class="px-4 py-3 relative">
                <!-- Suggestions -->
                <div v-if="!isResponding && suggestions.length > 0" class="flex flex-wrap gap-2 mb-3">
                    <button v-for="(suggestion, idx) in suggestions" :key="idx"
                        @click="selectSuggestion(suggestion)"
                        class="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                        {{ suggestion }}
                    </button>
                </div>

                <!-- Stop Generating Button -->
                <div v-if="isResponding" class="flex justify-center mb-3">
                    <button @click="stopGenerating"
                        class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                        Stop generating
                    </button>
                </div>

                <!-- Input Field -->
                <div class="relative flex items-end gap-2 group">
                    <div class="flex-1 relative">
                        <div class="relative">
                            <textarea ref="inputField" v-model="userInput"
                                @keydown.enter.prevent="sendMessage"
                                :placeholder="isResponding ? '' : 'Send a message...'"
                                :disabled="isResponding"
                                :rows="inputRows"
                                class="block w-full resize-none rounded-lg pl-3 pr-12 py-3 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 text-sm border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 focus:border-blue-500/50 dark:focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all"
                                style="min-height: 44px; max-height: 200px;"
                            ></textarea>

                            <!-- Send Button -->
                            <div class="absolute right-1 bottom-1 flex items-center">
                                <button @click="sendMessage"
                                    :disabled="!userInput.trim() || isResponding"
                                    class="p-1.5 rounded-md text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="h-4 w-4 m-1 transition-transform group-hover:translate-x-px">
                                        <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Keyboard Shortcut Hint -->
                        <div class="absolute right-0 -bottom-5 flex items-center justify-end px-2 pointer-events-none">
                            <span class="text-xs text-neutral-400 dark:text-neutral-500">Press Enter to send</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true
});

const props = defineProps({
    initialMessages: {
        type: Array,
        default: () => []
    },
    suggestions: {
        type: Array,
        default: () => []
    },
    typingSpeed: {
        type: Number,
        default: 30
    },
    aiName: {
        type: String,
        default: 'AI Assistant'
    },
    autoScroll: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(['message-sent', 'message-completed', 'stop-generating']);

const messages = ref([...props.initialMessages]);
const userInput = ref('');
const isResponding = ref(false);
const chatContainer = ref(null);
const inputField = ref(null);
const showScrollButton = ref(false);
const currentResponseIndex = ref(0);
const stopTyping = ref(false);
const isInitialLoad = ref(true);

const inputRows = computed(() => {
    const lines = userInput.value.split('\n').length;
    return Math.min(Math.max(1, lines), 5);
});

const formatMessage = (content) => {
    if (!content) return '';
    const formattedContent = marked.parse(content);
    return formattedContent;
};

const sendMessage = async () => {
    if (!userInput.value.trim() || isResponding.value) return;

    messages.value.push({
        role: 'user',
        content: userInput.value
    });

    emit('message-sent', userInput.value);

    userInput.value = '';

    await nextTick();
    autoresizeTextarea();
    if (inputField.value) {
        inputField.value.focus();
    }

    await nextTick();
    if (props.autoScroll) {
        scrollToBottom();
    }

    simulateAIResponse();
};

const simulateAIResponse = () => {
    isResponding.value = true;
    stopTyping.value = false;

    messages.value.push({
        role: 'assistant',
        content: '',
        isTyping: true
    });

    const aiResponse = `
# Hello there!

I'm your AI assistant. I can help you with various tasks, including:

- Answering questions
- Writing code
- Explaining concepts
- And much more!

## Code Example

Here's a simple JavaScript function:

\`\`\`javascript
function greet(name) {
    return \`Hello, \${name}! How can I help you today?\`;
}

// Call the function
console.log(greet('User'));
\`\`\`

Let me know if you need anything else!
    `;

    setTimeout(() => {
        const lastIndex = messages.value.length - 1;
        messages.value[lastIndex] = {
            role: 'assistant',
            content: '',
            isTyping: false
        };

        currentResponseIndex.value = 0;
        typeNextCharacter(aiResponse.trim(), lastIndex);
    }, 1000);
};

const typeNextCharacter = (fullResponse, messageIndex) => {
    if (stopTyping.value) {
        messages.value[messageIndex].content = fullResponse;
        isResponding.value = false;
        emit('message-completed', fullResponse);
        return;
    }

    if (currentResponseIndex.value < fullResponse.length) {
        messages.value[messageIndex].content += fullResponse[currentResponseIndex.value];
        currentResponseIndex.value++;

        setTimeout(() => {
            typeNextCharacter(fullResponse, messageIndex);
            if (props.autoScroll) {
                scrollToBottomIfNearEnd();
            }
        }, props.typingSpeed);
    } else {
        isResponding.value = false;
        emit('message-completed', fullResponse);
    }
};

const stopGenerating = () => {
    stopTyping.value = true;
    emit('stop-generating');
};

const selectSuggestion = (suggestion) => {
    userInput.value = suggestion;
    if (inputField.value) {
        inputField.value.focus();
        autoresizeTextarea();
    }
};

const autoresizeTextarea = () => {
    if (inputField.value) {
        inputField.value.style.height = "40px";

        const newHeight = Math.max(40, inputField.value.scrollHeight);
        inputField.value.style.height = `${newHeight}px`;
        inputField.value.style.overflowY = "hidden";
    }
};

watch(userInput, () => {
    nextTick(() => {
        autoresizeTextarea();
    });
});

const scrollToBottom = () => {
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};

const scrollToBottomIfNearEnd = () => {
    if (chatContainer.value) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainer.value;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight - 200;

        if (isNearBottom) {
            scrollToBottom();
        }
    }
};

const checkScrollPosition = () => {
    if (chatContainer.value) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainer.value;
        showScrollButton.value = scrollTop + clientHeight < scrollHeight - 100;
    }
};

watch(() => messages.value.length, () => {

});

onMounted(() => {
    if (chatContainer.value)
        chatContainer.value.addEventListener('scroll', checkScrollPosition);

    nextTick(() => {
        if (inputField.value)
            autoresizeTextarea();

        isInitialLoad.value = false;
    });

    const preventPageScroll = (e) => {
        e.stopPropagation();
    };

    if (chatContainer.value)
        chatContainer.value.addEventListener('scroll', preventPageScroll);
});
</script>

<style>
.markdown-body {
    font-size: 0.875rem;
    line-height: 1.5;
}

.markdown-body h1 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
    color: inherit;
}

.markdown-body h2 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1.25rem 0 0.75rem;
    color: inherit;
}

.markdown-body h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0.75rem;
    color: inherit;
}

.markdown-body p {
    margin: 0 0 1rem;
}

.markdown-body ul,
.markdown-body ol {
    margin: 0 0 1rem;
    padding-left: 1.5rem;
}

.markdown-body li {
    margin: 0.25rem 0;
}

.markdown-body code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.875em;
    color: inherit;
    background-color: rgba(0, 0, 0, 0.04);
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
}

.dark .markdown-body code {
    background-color: rgba(255, 255, 255, 0.1);
}

.markdown-body pre {
    margin: 1rem 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
    overflow-x: auto;
}

.dark .markdown-body pre {
    background-color: rgba(255, 255, 255, 0.05);
}

.markdown-body pre code {
    background: none;
    padding: 0;
    font-size: 0.875em;
    color: inherit;
}

.markdown-body blockquote {
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 3px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);
}

.dark .markdown-body blockquote {
    border-left-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
}

.markdown-body table {
    width: 100%;
    margin: 1rem 0;
    border-collapse: collapse;
}

.markdown-body th,
.markdown-body td {
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .markdown-body th,
.dark .markdown-body td {
    border-color: rgba(255, 255, 255, 0.1);
}

.markdown-body th {
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.04);
}

.dark .markdown-body th {
    background-color: rgba(255, 255, 255, 0.05);
}
</style>
