<template>
    <div class="c-wysiwyg-editor" v-if="editor">
        <div
            class="toolbar flex flex-wrap gap-1 p-2 border border-neutral-300 dark:border-neutral-900 rounded-t-md bg-neutral-50 dark:bg-neutral-800 shadow-sm">

            <div class="toolbar-group flex">
                <c-button
                    @click="editor?.chain().focus().toggleBold().run()"
                    :variant="editor?.isActive('bold') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('bold') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('bold') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Bold">
                    <icon-bold size="sm" ariaLabel="Bold" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="editor?.chain().focus().toggleItalic().run()"
                    :variant="editor?.isActive('italic') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('italic') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('italic') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Italic">
                    <icon-italic size="sm" ariaLabel="Italic" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="editor?.chain().focus().toggleStrike().run()"
                    :variant="editor?.isActive('strike') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('strike') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('strike') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Strikethrough">
                    <icon-strikethrough size="sm" ariaLabel="Strikethrough" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="editor?.chain().focus().toggleCode().run()"
                    :variant="editor?.isActive('code') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('code') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('code') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Code">
                    <icon-code-bracket size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="relative inline-block heading-dropdown">
                <c-button
                    @click="headingMenuOpen = !headingMenuOpen"
                    variant="flat"
                    size="sm"
                    rounded="md"
                    :bgColor="isHeadingActive ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="isHeadingActive ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2 flex items-center"
                    title="Heading">
                    <icon-h1 size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                    <icon-chevron-down size="sm" class="ml-1" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <div v-if="headingMenuOpen"
                    class="heading-menu absolute bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-lg mt-1 z-10 p-1 w-36">
                    <button @click="setHeading(1); headingMenuOpen = false"
                        :class="{ 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300': editor?.isActive('heading', { level: 1 }) }"
                        class="w-full text-left px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors">
                        Heading 1
                    </button>
                    <button @click="setHeading(2); headingMenuOpen = false"
                        :class="{ 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300': editor?.isActive('heading', { level: 2 }) }"
                        class="w-full text-left px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors mt-1">
                        Heading 2
                    </button>
                    <button @click="setHeading(3); headingMenuOpen = false"
                        :class="{ 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300': editor?.isActive('heading', { level: 3 }) }"
                        class="w-full text-left px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors mt-1">
                        Heading 3
                    </button>
                    <button @click="editor?.chain().focus().setParagraph().run(); headingMenuOpen = false"
                        :class="{ 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300': editor?.isActive('paragraph') }"
                        class="w-full text-left px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors mt-1">
                        Paragraph
                    </button>
                </div>
            </div>

            <c-button
                @click="editor?.chain().focus().toggleBlockquote().run()"
                :variant="editor?.isActive('blockquote') ? 'tonal' : 'flat'"
                size="sm"
                rounded="md"
                :bgColor="editor?.isActive('blockquote') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                :textColor="editor?.isActive('blockquote') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                class="min-w-0 px-2"
                title="Quote">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6zm1 2v6h6V8H7z" />
                    <path d="M4.5 6c-.276 0-.5.224-.5.5v7c0 .276.224.5.5.5h.5v-1h-.5v-6h.5V6h-.5z" />
                </svg>
            </c-button>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group flex">
                <c-button
                    @click="editor?.chain().focus().toggleBulletList().run()"
                    :variant="editor?.isActive('bulletList') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('bulletList') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('bulletList') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Bullet List">
                    <icon-list size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="editor?.chain().focus().toggleOrderedList().run()"
                    :variant="editor?.isActive('orderedList') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('orderedList') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('orderedList') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Numbered List">
                    <icon-list-number size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group flex">
                <c-button
                    @click="editor?.chain().focus().liftListItem('listItem').run()"
                    variant="flat"
                    size="sm"
                    rounded="md"
                    bgColor="bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    textColor="text-neutral-700 dark:text-neutral-300"
                    class="min-w-0 px-2"
                    title="Decrease Indent">
                    <icon-outdent size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="editor?.chain().focus().sinkListItem('listItem').run()"
                    variant="flat"
                    size="sm"
                    rounded="md"
                    bgColor="bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    textColor="text-neutral-700 dark:text-neutral-300"
                    class="min-w-0 px-2"
                    title="Increase Indent">
                    <icon-indent size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group flex">
                <c-button
                    @click="setLink"
                    :variant="editor?.isActive('link') ? 'tonal' : 'flat'"
                    size="sm"
                    rounded="md"
                    :bgColor="editor?.isActive('link') ? 'bg-blue-100 dark:bg-blue-900' : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700'"
                    :textColor="editor?.isActive('link') ? 'text-blue-600 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-300'"
                    class="min-w-0 px-2"
                    title="Link">
                    <icon-link size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="addImage"
                    variant="flat"
                    size="sm"
                    rounded="md"
                    bgColor="bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    textColor="text-neutral-700 dark:text-neutral-300"
                    class="min-w-0 px-2"
                    title="Upload image">
                    <icon-photo size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
            </div>

            <div class="toolbar-divider"></div>

            <div class="toolbar-group flex">
                <c-button
                    @click="editor?.chain().focus().undo().run()"
                    :disabled="editor && !editor.can().undo()"
                    variant="flat"
                    size="sm"
                    rounded="md"
                    bgColor="bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    textColor="text-neutral-700 dark:text-neutral-300"
                    class="min-w-0 px-2"
                    title="Undo">
                    <icon-undo size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
                <c-button
                    @click="editor?.chain().focus().redo().run()"
                    :disabled="editor && !editor.can().redo()"
                    variant="flat"
                    size="sm"
                    rounded="md"
                    bgColor="bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    textColor="text-neutral-700 dark:text-neutral-300"
                    class="min-w-0 px-2"
                    title="Redo">
                    <icon-redo size="sm" aria-hidden="true" customClass="text-neutral-700 dark:text-neutral-300" />
                </c-button>
            </div>
        </div>

        <!-- Editor -->
        <div class="editor-content p-4 border border-t-0 rounded-b-md border-neutral-300 dark:border-neutral-900 bg-white dark:bg-neutral-900 min-h-[200px] overflow-auto focus:outline-none shadow-sm"
            :class="{ 'editor-disabled': disabled }">
            <editor-content v-if="editor" :editor="editor" />
            <div v-else class="flex items-center justify-center h-full text-neutral-400">
                Loading editor...
            </div>
        </div>

        <!-- Input file (hidden) -->
        <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*" class="hidden" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import { Markdown } from 'tiptap-markdown';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: 'Write something...',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    editorClass: {
        type: String,
        default: '',
    },
    outputFormat: {
        type: String,
        default: 'html',
        validator: (value: string) => ['html', 'markdown'].includes(value),
    },
});

const emit = defineEmits(['update:modelValue']);

const headingMenuOpen = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
type Level = 1 | 2 | 3;

const editor = useEditor({
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3],
            },
        }),
        Link.configure({
            openOnClick: false,
            HTMLAttributes: {
                class: 'text-blue-500 hover:underline',
            },
        }),
        Image.configure({
            inline: true,
            allowBase64: true,
        }),
        Underline,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Placeholder.configure({
            placeholder: props.placeholder,
        }),
        Markdown.configure({
            transformPastedText: true,
            transformCopiedText: true,
        }),
    ],
    content: props.modelValue,
    editable: !props.disabled,
    onUpdate: ({ editor }) => {
        if (props.outputFormat === 'html') {
            emit('update:modelValue', editor.getHTML());
        } else {
            // @ts-ignore - Markdown is an extension
            emit('update:modelValue', editor.storage.markdown.getMarkdown());
        }
    },
});

const isHeadingActive = computed(() => {
    if (!editor.value) return false;
    return editor.value.isActive('heading', { level: 1 }) ||
           editor.value.isActive('heading', { level: 2 }) ||
           editor.value.isActive('heading', { level: 3 });
});

const setHeading = (level: Level) => {
    editor.value?.chain().focus().toggleHeading({ level }).run();
};

const setLink = () => {
    const url = window.prompt('URL');

    if (url === null)
        return;

    if (url === '') {
        editor.value?.chain().focus().extendMarkRange('link').unsetLink().run();
        return;
    }

    editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
};

const addImage = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
};

const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                editor.value?.chain().focus().setImage({ src: e.target.result }).run();
            }
        };

        reader.readAsDataURL(file);
        input.value = '';
    }
};

watch(() => props.modelValue, (newContent) => {
    const currentContent = props.outputFormat === 'html'
        ? editor.value?.getHTML()
        // @ts-ignore - Markdown is an extension
        : editor.value?.storage.markdown.getMarkdown();

    if (editor.value && newContent !== currentContent) {
        editor.value.commands.setContent(newContent);
    }
});

watch(() => props.disabled, (isDisabled) => {
    if (editor.value) {
        editor.value.setEditable(!isDisabled);
    }
});

const closeHeadingMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const isHeadingButton = target.closest('.heading-dropdown');

    if (!isHeadingButton && headingMenuOpen.value) {
        headingMenuOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeHeadingMenu);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', closeHeadingMenu);
    editor.value?.destroy();
});

defineExpose({
    editor,
    getHTML: () => editor.value?.getHTML(),
    getMarkdown: () => {
        // @ts-ignore - Markdown is an extension
        return editor.value?.storage.markdown.getMarkdown();
    },
    getJSON: () => editor.value?.getJSON(),
    focus: () => editor.value?.commands.focus(),
    clearContent: () => editor.value?.commands.clearContent(),
});
</script>

<style scoped>
.c-wysiwyg-editor {
    width: 100%;
    border-radius: 0.375rem;
    overflow: hidden;
}

.toolbar-group {
    @apply rounded-md overflow-hidden;
}

.toolbar-divider {
    @apply w-px h-8 mx-1 bg-neutral-300 dark:bg-neutral-600 self-center;
}

.editor-disabled {
    @apply opacity-75 cursor-not-allowed;
}

:deep(.ProseMirror) {
    outline: none;
    min-height: 100px;
}

:deep(.ProseMirror p) {
    margin-bottom: 0.5em;
}

:deep(.ProseMirror h1) {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5em;
}

:deep(.ProseMirror h2) {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5em;
}

:deep(.ProseMirror h3) {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.5em;
}

:deep(.ProseMirror blockquote) {
    border-left: 3px solid #e5e7eb;
    padding-left: 1rem;
    color: #6b7280;
    margin-left: 0;
    margin-right: 0;
}

:deep(.ProseMirror ul) {
    padding-left: 1.5rem;
    list-style-type: disc;
}

:deep(.ProseMirror ol) {
    padding-left: 1.5rem;
    list-style-type: decimal;
}

:deep(.ProseMirror code) {
    @apply bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded font-mono text-sm;
}

:deep(.ProseMirror img) {
    max-width: 100%;
    height: auto;
}

:deep(.ProseMirror .is-empty::before) {
    content: attr(data-placeholder);
    float: left;
    color: #9ca3af;
    pointer-events: none;
    height: 0;
}
</style>
