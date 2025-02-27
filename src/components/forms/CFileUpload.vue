<template>
    <div class="c-file-upload">
        <!-- Dropzone Area -->
        <div
            class="dropzone-container"
            :class="{
                'border-dashed border-2 border-neutral-300 dark:border-neutral-600 rounded-lg p-6 transition-all duration-200': true,
                'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging,
                'hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10': !isDragging && !disabled,
                'opacity-50 cursor-not-allowed': disabled
            }"
            @dragover.prevent="handleDragOver"
            @dragleave.prevent="handleDragLeave"
            @drop.prevent="handleDrop"
            @click="!disabled && triggerFileInput()"
        >
            <div class="flex flex-col items-center justify-center space-y-2">
                <div class="text-neutral-400 dark:text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                </div>

                <div class="text-center">
                    <p class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {{ dropzoneText }}
                    </p>
                    <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {{ acceptedFileTypesText }}
                    </p>
                </div>

                <c-button
                    v-if="showBrowseButton"
                    size="sm"
                    :disabled="disabled"
                    @click.stop="triggerFileInput"
                >
                    {{ browseButtonText }}
                </c-button>
            </div>
        </div>

        <!-- Hidden File Input -->
        <input
            ref="fileInput"
            type="file"
            class="hidden"
            :accept="accept"
            :multiple="multiple"
            :disabled="disabled"
            @change="handleFileSelect"
        />

        <!-- File Preview Section -->
        <div v-if="selectedFiles.length > 0" class="mt-4 space-y-3">
            <div class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {{ selectedFiles.length }} {{ selectedFiles.length === 1 ? fileText : filesText }}
            </div>

            <div v-for="(file, index) in selectedFiles" :key="index" class="file-item">
                <div class="flex items-center p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                    <!-- File Preview -->
                    <div class="flex-shrink-0 mr-3">
                        <div v-if="isImage(file.file)" class="w-12 h-12 rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-700">
                            <img :src="file.preview" class="w-full h-full object-cover" alt="Preview" />
                        </div>
                        <div v-else class="w-12 h-12 rounded-md flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                    </div>

                    <!-- File Info -->
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-neutral-900 dark:text-white truncate">
                            {{ file.file.name }}
                        </p>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400">
                            {{ formatFileSize(file.file.size) }}
                        </p>
                    </div>

                    <!-- Upload Status -->
                    <div class="ml-4 flex-shrink-0 flex items-center space-x-2">
                        <!-- Status Icon -->
                        <span v-if="file.status === 'pending'" class="text-neutral-400 dark:text-neutral-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span v-else-if="file.status === 'uploading'" class="text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </span>
                        <span v-else-if="file.status === 'success'" class="text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span v-else-if="file.status === 'error'" class="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>

                        <!-- Remove Button -->
                        <button
                            v-if="file.status === 'pending' || file.status === 'error'"
                            @click.stop="removeFile(index)"
                            class="text-neutral-400 hover:text-red-500 dark:text-neutral-500 dark:hover:text-red-400 transition-colors"
                            :disabled="disabled"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div v-if="file.status === 'uploading'" class="mt-1">
                    <c-progress-bar
                        :value="file.progress"
                        :height="8"
                        class="rounded-full"
                        fillColor="#3b82f6"
                    ></c-progress-bar>
                </div>

                <!-- Error Message -->
                <div v-if="file.status === 'error'" class="mt-1 text-xs text-red-500">
                    {{ file.errorMessage || errorText }}
                </div>
            </div>
        </div>

        <!-- Upload Button -->
        <div v-if="selectedFiles.length > 0 && !autoUpload" class="mt-4 flex justify-end">
            <c-button
                @click="uploadFiles"
                :disabled="isUploading || disabled || selectedFiles.length === 0"
                :loading="isUploading"
            >
                {{ uploadButtonText }}
            </c-button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Props
const props = defineProps({
    // File selection props
    accept: {
        type: String,
        default: '*/*'
    },
    multiple: {
        type: Boolean,
        default: true
    },
    maxFiles: {
        type: Number,
        default: 10
    },
    maxFileSize: {
        type: Number,
        default: 10 * 1024 * 1024 // 10MB
    },

    // Upload configuration
    autoUpload: {
        type: Boolean,
        default: false
    },
    url: {
        type: String,
        default: ''
    },
    method: {
        type: String,
        default: 'POST'
    },
    headers: {
        type: Object,
        default: () => ({})
    },
    withCredentials: {
        type: Boolean,
        default: false
    },
    formDataName: {
        type: String,
        default: 'file'
    },
    disabled: {
        type: Boolean,
        default: false
    },

    // UI customization
    dropzoneText: {
        type: String,
        default: 'Drag and drop files here or click to browse'
    },
    browseButtonText: {
        type: String,
        default: 'Browse Files'
    },
    uploadButtonText: {
        type: String,
        default: 'Upload Files'
    },
    fileText: {
        type: String,
        default: 'file'
    },
    filesText: {
        type: String,
        default: 'files'
    },
    errorText: {
        type: String,
        default: 'Upload failed. Please try again.'
    },
    showBrowseButton: {
        type: Boolean,
        default: true
    }
});

// Emits
const emit = defineEmits([
    'file-selected',
    'file-removed',
    'upload-start',
    'upload-progress',
    'upload-success',
    'upload-error',
    'upload-complete'
]);

// Refs
const fileInput = ref(null);
const isDragging = ref(false);
const selectedFiles = ref([]);
const isUploading = ref(false);

// Computed
const acceptedFileTypesText = computed(() => {
    if (props.accept === '*/*') return 'All file types accepted';

    const types = props.accept.split(',').map(type => {
        return type.trim().replace('.', '').toUpperCase();
    }).join(', ');

    return `Accepted file types: ${types}`;
});

// Methods
const triggerFileInput = () => {
    if (!props.disabled) {
        fileInput.value.click();
    }
};

const handleDragOver = (event) => {
    if (props.disabled) return;
    isDragging.value = true;
};

const handleDragLeave = (event) => {
    isDragging.value = false;
};

const handleDrop = (event) => {
    if (props.disabled) return;
    isDragging.value = false;

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        processFiles(files);
    }
};

const handleFileSelect = (event) => {
    if (props.disabled) return;
    const files = event.target.files;
    if (files.length > 0) {
        processFiles(files);
        // Reset the input so the same file can be selected again
        event.target.value = '';
    }
};

const processFiles = (fileList) => {
    const files = Array.from(fileList);
    const validFiles = [];

    // Check if we're exceeding the max files limit
    if (!props.multiple && selectedFiles.value.length + files.length > 1) {
        // Replace the existing file
        selectedFiles.value = [];
    } else if (props.multiple && selectedFiles.value.length + files.length > props.maxFiles) {
        // Only add files up to the max limit
        const remainingSlots = props.maxFiles - selectedFiles.value.length;
        files.splice(remainingSlots);
    }

    // Process each file
    files.forEach(file => {
        // Check file size
        if (file.size > props.maxFileSize) {
            emit('file-selected', {
                file,
                error: 'File size exceeds limit',
                accepted: false
            });
            return;
        }

        // Check file type if accept is specified
        if (props.accept !== '*/*') {
            const acceptedTypes = props.accept.split(',').map(type => type.trim());
            const fileType = file.type;
            const fileExtension = `.${file.name.split('.').pop()}`;

            const isAccepted = acceptedTypes.some(type => {
                if (type.startsWith('.')) {
                    // Check by extension
                    return fileExtension.toLowerCase() === type.toLowerCase();
                } else if (type.includes('/*')) {
                    // Check by MIME type category (e.g., image/*)
                    const category = type.split('/')[0];
                    return fileType.startsWith(`${category}/`);
                } else {
                    // Check exact MIME type
                    return fileType === type;
                }
            });

            if (!isAccepted) {
                emit('file-selected', {
                    file,
                    error: 'File type not accepted',
                    accepted: false
                });
                return;
            }
        }

        // Create preview for images
        let preview = null;
        if (isImage(file)) {
            preview = URL.createObjectURL(file);
        }

        // Add to valid files
        validFiles.push({
            file,
            preview,
            status: 'pending', // pending, uploading, success, error
            progress: 0,
            errorMessage: null
        });

        emit('file-selected', { file, accepted: true });
    });

    // Add valid files to selected files
    selectedFiles.value = [...selectedFiles.value, ...validFiles];

    // Auto upload if enabled
    if (props.autoUpload && validFiles.length > 0) {
        uploadFiles();
    }
};

const removeFile = (index) => {
    const file = selectedFiles.value[index];

    // Revoke object URL to prevent memory leaks
    if (file.preview) {
        URL.revokeObjectURL(file.preview);
    }

    emit('file-removed', file.file);
    selectedFiles.value.splice(index, 1);
};

const isImage = (file) => {
    return file.type.startsWith('image/');
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const uploadFiles = async () => {
    if (props.disabled || isUploading.value || selectedFiles.value.length === 0) return;

    isUploading.value = true;
    emit('upload-start', selectedFiles.value.map(f => f.file));

    // If no URL is provided, just emit events for external handling
    if (!props.url) {
        for (let i = 0; i < selectedFiles.value.length; i++) {
            if (selectedFiles.value[i].status === 'pending' || selectedFiles.value[i].status === 'error') {
                selectedFiles.value[i].status = 'uploading';

                // Simulate progress for demonstration
                await simulateProgress(i);

                // Mark as success after "upload"
                selectedFiles.value[i].status = 'success';
                selectedFiles.value[i].progress = 100;

                emit('upload-success', {
                    file: selectedFiles.value[i].file,
                    index: i,
                    response: null
                });
            }
        }

        isUploading.value = false;
        emit('upload-complete');
        return;
    }

    // Upload files to the provided URL
    const uploadPromises = selectedFiles.value.map((fileObj, index) => {
        if (fileObj.status === 'pending' || fileObj.status === 'error') {
            return uploadFile(fileObj, index);
        }
        return Promise.resolve();
    });

    try {
        await Promise.all(uploadPromises);
    } catch (error) {
        console.error('Upload error:', error);
    } finally {
        isUploading.value = false;
        emit('upload-complete');
    }
};

const uploadFile = async (fileObj, index) => {
    if (fileObj.status === 'success') return;

    fileObj.status = 'uploading';
    fileObj.progress = 0;

    const formData = new FormData();
    formData.append(props.formDataName, fileObj.file);

    try {
        const xhr = new XMLHttpRequest();

        // Setup progress tracking
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const progress = Math.round((event.loaded * 100) / event.total);
                fileObj.progress = progress;

                emit('upload-progress', {
                    file: fileObj.file,
                    progress,
                    index
                });
            }
        });

        // Create a promise to handle the XHR request
        const uploadPromise = new Promise((resolve, reject) => {
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    fileObj.status = 'success';
                    fileObj.progress = 100;

                    const response = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        data: xhr.responseText
                    };

                    try {
                        response.data = JSON.parse(xhr.responseText);
                    } catch (e) {
                        // Response is not JSON
                    }

                    emit('upload-success', {
                        file: fileObj.file,
                        response,
                        index
                    });

                    resolve(response);
                } else {
                    fileObj.status = 'error';
                    fileObj.errorMessage = `Error ${xhr.status}: ${xhr.statusText}`;

                    const error = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        response: xhr.responseText
                    };

                    emit('upload-error', {
                        file: fileObj.file,
                        error,
                        index
                    });

                    reject(error);
                }
            };

            xhr.onerror = function() {
                fileObj.status = 'error';
                fileObj.errorMessage = 'Network error occurred';

                const error = {
                    status: 0,
                    statusText: 'Network Error',
                    response: null
                };

                emit('upload-error', {
                    file: fileObj.file,
                    error,
                    index
                });

                reject(error);
            };
        });

        // Open and send the request
        xhr.open(props.method, props.url, true);

        // Set headers
        if (props.withCredentials) {
            xhr.withCredentials = true;
        }

        Object.entries(props.headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
        });

        xhr.send(formData);

        return uploadPromise;
    } catch (error) {
        fileObj.status = 'error';
        fileObj.errorMessage = error.message || 'Upload failed';

        emit('upload-error', {
            file: fileObj.file,
            error,
            index
        });

        throw error;
    }
};

// Helper function to simulate progress for demonstration
const simulateProgress = async (index) => {
    const file = selectedFiles.value[index];
    file.progress = 0;

    return new Promise(resolve => {
        const interval = setInterval(() => {
            file.progress += 5;

            emit('upload-progress', {
                file: file.file,
                progress: file.progress,
                index
            });

            if (file.progress >= 100) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
};

// Clean up object URLs when component is unmounted
watch(selectedFiles, (newFiles, oldFiles) => {
    // Revoke URLs for files that are no longer in the list
    if (oldFiles) {
        oldFiles.forEach(oldFile => {
            const stillExists = newFiles.some(newFile => newFile.file === oldFile.file);
            if (!stillExists && oldFile.preview) {
                URL.revokeObjectURL(oldFile.preview);
            }
        });
    }
});
</script>

<style scoped>
.dropzone-container {
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.file-item {
    transition: all 0.2s ease;
}
</style>
