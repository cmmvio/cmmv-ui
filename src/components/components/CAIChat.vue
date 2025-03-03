<template>
    <div
        class="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
        <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 relative"
            :class="{ 'pb-20': isResponding }">
            <template v-for="(message, index) in messages" :key="index">
                <div v-if="message.role === 'user'" class="flex justify-end mb-4">
                    <div class="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] shadow-sm">
                        <p class="whitespace-pre-wrap">{{ message.content }}</p>
                    </div>
                </div>

                <div v-else class="flex mb-4">
                    <div
                        class="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] shadow-sm">
                        <div v-if="message.isTyping" class="flex space-x-2 items-center py-2">
                            <div class="w-2 h-2 bg-neutral-500 rounded-full animate-bounce"></div>
                            <div class="w-2 h-2 bg-neutral-500 rounded-full animate-bounce"
                                style="animation-delay: 0.2s"></div>
                            <div class="w-2 h-2 bg-neutral-500 rounded-full animate-bounce"
                                style="animation-delay: 0.4s"></div>
                        </div>
                        <div v-else class="markdown-body" v-html="formatMessage(message.content)"></div>
                    </div>
                </div>
            </template>
        </div>

        <c-button v-if="showScrollButton" @click="scrollToBottom" variant="secondary" size="sm"
            class="absolute bottom-0 left-1/2 z-10 h-8 w-8 flex justify-center bg-neutral-200 dark:bg-neutral-800/80 shadow-sm"
            aria-label="Scroll to bottom">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
            </svg>
        </c-button>

        <div class="border-t border-neutral-200 dark:border-neutral-700 p-4 bg-white dark:bg-neutral-800 relative">
            <div v-if="!isResponding && suggestions.length > 0" class="flex flex-wrap gap-2 mb-3 px-2">
                <c-badge v-for="(suggestion, idx) in suggestions" :key="idx" @click="selectSuggestion(suggestion)"
                    bgColor="bg-neutral-100 dark:bg-neutral-700" textColor="text-neutral-700 dark:text-neutral-200"
                    rounded="rounded-full"
                    customClass="px-3 py-1 text-sm cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                    {{ suggestion }}
                </c-badge>
            </div>

            <div v-if="isResponding" class="flex justify-center mb-3">
                <c-button @click="stopGenerating" variant="danger" size="sm" class="px-4">
                    Stop generating
                </c-button>
            </div>

            <div class="flex items-end gap-2">
                <div class="c-textarea relative w-full">
                    <textarea ref="inputField" v-model="userInput" @keydown.enter.prevent="sendMessage"
                        :placeholder="isResponding ? '' : 'Type a message...'" :class="[
                            'px-3 py-2 text-sm',
                            'rounded-md',
                            'border border-neutral-300 dark:border-neutral-700',
                            'bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100',
                            {
                                'opacity-50': isResponding,
                                'resize-none': true
                            }
                        ]" class="c-textarea-field block w-full outline-none" :disabled="isResponding"
                        :rows="inputRows" style="overflow-y: hidden; min-height: 40px;" />
                </div>
                <c-button @click="sendMessage" variant="primary" size="md" :disabled="!userInput.trim() || isResponding"
                    class="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" />
                    </svg>
                </c-button>
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

<style scoped>
.c-textarea-field {
    transition: none;
    line-height: 1.5;
    overflow-y: hidden;
}

.c-textarea-field:focus {
    border-color: inherit;
    box-shadow: none;
}

.markdown-body {
    line-height: 1.6;
}

.markdown-body h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.markdown-body h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.markdown-body h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
}

.markdown-body p {
    margin-bottom: 1rem;
}

.markdown-body ul,
.markdown-body ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
}

.markdown-body ul {
    list-style-type: disc;
}

.markdown-body ol {
    list-style-type: decimal;
}

.markdown-body li {
    margin-bottom: 0.25rem;
}

.markdown-body code {
    font-family: monospace;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
}

.markdown-body pre {
    margin-bottom: 1rem;
    overflow-x: auto;
    border-radius: 0.375rem;
}

.markdown-body pre code {
    display: block;
    padding: 1rem;
    background-color: #f6f8fa;
    border-radius: 0.375rem;
    font-size: 0.875em;
    line-height: 1.5;
}

.dark .markdown-body pre code {
    background-color: #1e1e1e;
}

.markdown-body blockquote {
    border-left: 4px solid #ddd;
    padding-left: 1rem;
    color: #666;
    margin-bottom: 1rem;
}

.dark .markdown-body blockquote {
    border-left-color: #444;
    color: #aaa;
}

.markdown-body table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
}

.markdown-body table th,
.markdown-body table td {
    border: 1px solid #ddd;
    padding: 0.5rem;
}

.dark .markdown-body table th,
.dark .markdown-body table td {
    border-color: #444;
}

.markdown-body table th {
    background-color: #f6f8fa;
    font-weight: 600;
}

.dark .markdown-body table th {
    background-color: #333;
}
</style>
