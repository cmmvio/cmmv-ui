<template>
    <BaseLayout>
        <h1>AI Chat</h1>

        <p>
            The <code>CAIChat (alias: c-ai-chat)</code> component provides a ChatGPT-like interface for AI
            conversations.
            It includes features like streaming responses, code highlighting, suggestion buttons, auto-scrolling, and
            markdown formatting.
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
                    <td class="border-b px-4 py-2">initialMessages</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Initial messages to display in the chat. Each message should have
                        <code>role</code> ('user' or 'assistant') and <code>content</code> properties.
                    </td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">suggestions</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Suggestion buttons displayed above the input field. Each item is a
                        string representing a suggested message.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">typingSpeed</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">30</td>
                    <td class="border-b px-4 py-2">Speed of the typing effect in milliseconds per character.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">aiName</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">"AI Assistant"</td>
                    <td class="border-b px-4 py-2">Name of the AI assistant displayed in the chat.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">autoScroll</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Whether to automatically scroll to the bottom when new messages are
                        added.</td>
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
                    <td class="border-b px-4 py-2">message-sent</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Emitted when a user sends a message. The payload is the message
                        content.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">message-completed</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Emitted when the AI finishes typing a response. The payload is the
                        complete message.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">stop-generating</td>
                    <td class="border-b px-4 py-2">None</td>
                    <td class="border-b px-4 py-2">Emitted when the user clicks the "Stop generating" button.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            The AI Chat component provides a complete chat interface with user and AI messages, typing indicators,
            and a message input area. This example shows the basic usage with default settings.
        </p>

        <card-docs>
            <c-card variant="flat">
                <div class="h-[600px]">
                    <CAIChat :initial-messages="basicExampleMessages"
                        :suggestions="['Tell me about Vue.js', 'How do I use this component?', 'Show me a code example']"
                        :auto-scroll="false" @message-sent="handleMessageSent"
                        @message-completed="handleMessageCompleted" @stop-generating="handleStopGenerating" />
                </div>
            </c-card>

            <template #code>
                <pre><code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-ai-chat
        :initial-messages="messages"
        :suggestions="['Tell me about Vue.js', 'How do I use this component?', 'Show me a code example']"
        :auto-scroll="false"
        @message-sent="handleMessageSent"
        @message-completed="handleMessageCompleted"
        @stop-generating="handleStopGenerating"
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue';

const messages = ref([
    {
        role: 'assistant',
        content: 'Hello! How can I help you today?'
    }
]);

const handleMessageSent = (message) => {
    console.log('User sent:', message);
};

const handleMessageCompleted = (message) => {
    console.log('AI response completed:', message);
};

const handleStopGenerating = () => {
    console.log('User stopped the generation');
};

onMounted(() => {
    window.scrollTo(0, 0);
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Integration with AI APIs</h3>

        <p>
            While the component includes a simulated AI response for demonstration purposes, in a real application
            you would connect it to an actual AI API. Here's an example of how you might integrate it with an API:
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-javascript">&lt;script&gt;
    const sendMessageToAI = async (userMessage) => {
    messages.value.push({
        role: 'user',
        content: userMessage
    });

    messages.value.push({
        role: 'assistant',
        content: '',
        isTyping: true
    });

    try {
        const response = await fetch('https://your-ai-api.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: messages.value.filter(m => !m.isTyping).map(m => ({
                    role: m.role,
                    content: m.content
                }))
            })
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let aiResponse = '';

        const messageIndex = messages.value.length - 1;
        messages.value[messageIndex] = {
            role: 'assistant',
            content: '',
            isTyping: false
        };

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            aiResponse += chunk;
            messages.value[messageIndex].content = aiResponse;
        }
    } catch (error) {
        console.error('Error calling AI API:', error);
    }
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Customization</h3>

        <p>
            The AI Chat component is designed to be customizable to match your application's design.
            You can adjust the typing speed, provide initial messages, and customize the suggestions.
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-vue">&lt;c-ai-chat
    :initial-messages="[
        { role: 'assistant', content: 'Welcome to our support chat! How can I help you today?' }
    ]"
    :suggestions="[
        'I need help with my account',
        'How do I reset my password?',
        'Where can I find pricing information?'
    ]"
    :typing-speed="50"
    :auto-scroll="false"
    ai-name="Support Bot"
/&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Preventing Auto-Scroll</h3>

        <p>
            By default, the chat component automatically scrolls to the bottom when new messages are added.
            If you want to disable this behavior, you can set the <code>autoScroll</code> prop to <code>false</code>.
        </p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-vue">&lt;c-ai-chat
    :initial-messages="messages"
    :auto-scroll="false"
/&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="First Steps" previousLink="/first-steps" next="Badge" nextLink="/badge" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";
import CAIChat from "@components/components/CAIChat.vue";
import CCard from "@components/layout/CCard.vue";

const basicExampleMessages = ref([
    {
        role: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today?'
    }
]);

const handleMessageSent = (message) => {
    console.log('Message sent:', message);
};

const handleMessageCompleted = (message) => {
    console.log('Message completed:', message);
};

const handleStopGenerating = () => {
    console.log('Generation stopped');
};

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
