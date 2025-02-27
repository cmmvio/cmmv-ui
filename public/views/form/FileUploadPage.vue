<template>
    <BaseLayout>
        <h1>File Upload</h1>

        <p>The <code>CFileUpload (alias: c-file-upload)</code> component offers a complete solution for file uploads, with support for traditional input selection, drag and drop area (dropzone), preview, multiple selection, progress bar, and more.</p>

        <h3>Basic Example</h3>

        <p>The simplest example of the file upload component allows users to select files by dragging them to the dropzone area or clicking to open the file selector.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="lg:w-2/5 w-full max-w-[600px] mx-auto">
                <c-file-upload
                    @file-selected="handleFileSelected"
                    @file-removed="handleFileRemoved"
                    @upload-start="handleUploadStart"
                    @upload-complete="handleUploadComplete"
                ></c-file-upload>
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-file-upload
        @file-selected="handleFileSelected"
        @file-removed="handleFileRemoved"
        @upload-start="handleUploadStart"
        @upload-complete="handleUploadComplete"
    &gt;&lt;/c-file-upload&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleFileSelected = (event) => {
    console.log('File selected:', event.file.name);
};

const handleFileRemoved = (file) => {
    console.log('File removed:', file.name);
};

const handleUploadStart = (files) => {
    console.log('Upload started for', files.length, 'files');
};

const handleUploadComplete = () => {
    console.log('Upload complete');
};
&lt;/script&gt;</code>
        </pre>

        <h3>Image Upload with Preview</h3>

        <p>This example shows how to configure the component to accept only images, allowing users to see a preview before uploading.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="lg:w-2/5 w-full max-w-[600px] mx-auto">
                <c-file-upload
                    accept="image/*"
                    :maxFileSize="5 * 1024 * 1024"
                    dropzoneText="Drag and drop images here or click to select"
                    :showBrowseButton="true"
                    browseButtonText="Select Images"
                    uploadButtonText="Upload Images"
                ></c-file-upload>
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-file-upload
        accept="image/*"
        :maxFileSize="5 * 1024 * 1024"
        dropzoneText="Drag and drop images here or click to select"
        :showBrowseButton="true"
        browseButtonText="Select Images"
        uploadButtonText="Upload Images"
    &gt;&lt;/c-file-upload&gt;
&lt;/template&gt;</code>
        </pre>

        <h3>Automatic Upload</h3>

        <p>In this example, files are automatically uploaded as soon as they are selected, without the need to click an upload button.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="lg:w-2/5 w-full max-w-[600px] mx-auto">
                <c-file-upload
                    :autoUpload="true"
                    :multiple="true"
                    :maxFiles="3"
                    accept=".pdf,.doc,.docx"
                    dropzoneText="Drag and drop documents here"
                    @upload-success="handleUploadSuccess"
                    @upload-error="handleUploadError"
                ></c-file-upload>
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-file-upload
        :autoUpload="true"
        :multiple="true"
        :maxFiles="3"
        accept=".pdf,.doc,.docx"
        dropzoneText="Drag and drop documents here"
        @upload-success="handleUploadSuccess"
        @upload-error="handleUploadError"
    &gt;&lt;/c-file-upload&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleUploadSuccess = (event) => {
    console.log('Upload success:', event.file.name);
};

const handleUploadError = (event) => {
    console.error('Upload error:', event.file.name, event.error);
};
&lt;/script&gt;</code>
        </pre>

        <h3>API Integration</h3>

        <p>This example shows how to configure the component to send files directly to an API endpoint.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="lg:w-2/5 w-full max-w-[600px] mx-auto">
                <c-file-upload
                    url="https://api.example.com/upload"
                    method="POST"
                    :headers="{ Authorization: 'Bearer token123' }"
                    formDataName="uploadedFile"
                    :withCredentials="true"
                    @upload-progress="handleProgress"
                ></c-file-upload>
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-file-upload
        url="https://api.example.com/upload"
        method="POST"
        :headers="{ Authorization: 'Bearer token123' }"
        formDataName="uploadedFile"
        :withCredentials="true"
        @upload-progress="handleProgress"
    &gt;&lt;/c-file-upload&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleProgress = (event) => {
    console.log(`${event.file.name}: ${event.progress}% uploaded`);
};
&lt;/script&gt;</code>
        </pre>

        <h3>Text Customization</h3>

        <p>The component allows you to customize all displayed texts, making internationalization easier.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="lg:w-2/5 w-full max-w-[600px] mx-auto">
                <c-file-upload
                    dropzoneText="Drag your files here or click to browse"
                    browseButtonText="Browse"
                    uploadButtonText="Upload Now"
                    fileText="file"
                    filesText="files"
                    errorText="Upload failed. Please try again."
                ></c-file-upload>
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-file-upload
        dropzoneText="Drag your files here or click to browse"
        browseButtonText="Browse"
        uploadButtonText="Upload Now"
        fileText="file"
        filesText="files"
        errorText="Upload failed. Please try again."
    &gt;&lt;/c-file-upload&gt;
&lt;/template&gt;</code>
        </pre>

        <h3>Properties</h3>

        <p>The CFileUpload component offers various properties for customization and configuration.</p>

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
                    <td class="border-b px-4 py-2">accept</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'*/*'</td>
                    <td class="border-b px-4 py-2">Accepted file types (e.g., 'image/*', '.pdf,.doc')</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">multiple</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Allows selecting multiple files</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxFiles</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">10</td>
                    <td class="border-b px-4 py-2">Maximum number of files allowed</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxFileSize</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">10485760 (10MB)</td>
                    <td class="border-b px-4 py-2">Maximum file size in bytes</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">autoUpload</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Starts upload automatically after selection</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">url</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">''</td>
                    <td class="border-b px-4 py-2">URL for sending files</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">method</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'POST'</td>
                    <td class="border-b px-4 py-2">HTTP method for upload</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">headers</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">HTTP headers for the request</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">withCredentials</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Sends credentials with the request</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">formDataName</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'file'</td>
                    <td class="border-b px-4 py-2">Field name in FormData</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">disabled</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Disables the component</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">dropzoneText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Drag and drop files here or click to browse'</td>
                    <td class="border-b px-4 py-2">Text displayed in the dropzone area</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">browseButtonText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Browse Files'</td>
                    <td class="border-b px-4 py-2">Text for the browse button</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">uploadButtonText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Upload Files'</td>
                    <td class="border-b px-4 py-2">Text for the upload button</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">fileText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'file'</td>
                    <td class="border-b px-4 py-2">Text for a single file</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">filesText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'files'</td>
                    <td class="border-b px-4 py-2">Text for multiple files</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">errorText</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">'Upload failed. Please try again.'</td>
                    <td class="border-b px-4 py-2">Default error text</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showBrowseButton</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">Shows the browse button in the dropzone area</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Events</h3>

        <p>The component emits various events that allow you to control the upload process and respond to user interactions.</p>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Event</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Parameters</th>
                    <th class="border-b px-4 py-2 font-semibold text-gray-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">file-selected</td>
                    <td class="border-b px-4 py-2">{ file, accepted, error }</td>
                    <td class="border-b px-4 py-2">Emitted when a file is selected</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">file-removed</td>
                    <td class="border-b px-4 py-2">File</td>
                    <td class="border-b px-4 py-2">Emitted when a file is removed</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">upload-start</td>
                    <td class="border-b px-4 py-2">Array&lt;File&gt;</td>
                    <td class="border-b px-4 py-2">Emitted when upload starts</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">upload-progress</td>
                    <td class="border-b px-4 py-2">{ file, progress, index }</td>
                    <td class="border-b px-4 py-2">Emitted during upload progress</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">upload-success</td>
                    <td class="border-b px-4 py-2">{ file, response, index }</td>
                    <td class="border-b px-4 py-2">Emitted when an upload is successful</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">upload-error</td>
                    <td class="border-b px-4 py-2">{ file, error, index }</td>
                    <td class="border-b px-4 py-2">Emitted when an upload error occurs</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">upload-complete</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Emitted when all uploads are completed</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Complete Example</h3>

        <p>This example demonstrates a complete use case of the component, including event handling and customization.</p>

        <c-card variant="flat" class="mx-auto mt-4 px-4 py-5 sm:p-6">
            <div class="lg:w-2/5 w-full max-w-[600px] mx-auto">
                <c-file-upload
                    ref="fileUploadRef"
                    accept="image/*,.pdf"
                    :multiple="true"
                    :maxFiles="5"
                    :maxFileSize="2 * 1024 * 1024"
                    :autoUpload="false"
                    dropzoneText="Drag images or PDFs here"
                    browseButtonText="Select Files"
                    uploadButtonText="Upload All"
                    @file-selected="onFileSelected"
                    @file-removed="onFileRemoved"
                    @upload-start="onUploadStart"
                    @upload-progress="onUploadProgress"
                    @upload-success="onUploadSuccess"
                    @upload-error="onUploadError"
                    @upload-complete="onUploadComplete"
                ></c-file-upload>
            </div>
        </c-card>

        <pre>
            <code class="code-highlight language-vue">&lt;template&gt;
    &lt;c-file-upload
        ref="fileUploadRef"
        accept="image/*,.pdf"
        :multiple="true"
        :maxFiles="5"
        :maxFileSize="2 * 1024 * 1024"
        :autoUpload="false"
        dropzoneText="Drag images or PDFs here"
        browseButtonText="Select Files"
        uploadButtonText="Upload All"
        @file-selected="onFileSelected"
        @file-removed="onFileRemoved"
        @upload-start="onUploadStart"
        @upload-progress="onUploadProgress"
        @upload-success="onUploadSuccess"
        @upload-error="onUploadError"
        @upload-complete="onUploadComplete"
    &gt;&lt;/c-file-upload&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const fileUploadRef = ref(null);
const uploadedFiles = ref([]);

const onFileSelected = (event) => {
    if (event.accepted) {
        console.log(`File accepted: ${event.file.name}`);
    } else {
        console.warn(`File rejected: ${event.file.name} - ${event.error}`);
    }
};

const onFileRemoved = (file) => {
    console.log(`File removed: ${file.name}`);
    // Remove from uploaded files array if needed
    uploadedFiles.value = uploadedFiles.value.filter(f => f.name !== file.name);
};

const onUploadStart = (files) => {
    console.log(`Starting upload of ${files.length} files`);
    // Clear previous error messages or show loading indicator
};

const onUploadProgress = (event) => {
    console.log(`Progress for file ${event.file.name}: ${event.progress}%`);
    // Update UI with progress if needed
};

const onUploadSuccess = (event) => {
    console.log(`Upload completed: ${event.file.name}`);
    console.log('Server response:', event.response);

    // Add to uploaded files array
    uploadedFiles.value.push({
        name: event.file.name,
        size: event.file.size,
        type: event.file.type,
        url: event.response?.data?.url || null
    });
};

const onUploadError = (event) => {
    console.error(`Upload error: ${event.file.name}`);
    console.error('Error details:', event.error);

    // Show error message to user
};

const onUploadComplete = () => {
    console.log('All uploads completed');
    console.log('Uploaded files:', uploadedFiles.value);

    // Update UI or notify user
};
&lt;/script&gt;</code>
        </pre>

        <PagePagination
            previous="Datepicker"
            previousLink="/datepicker"
            next="Form"
            nextLink="/form"
        />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

// Handlers for examples
const handleFileSelected = (event) => {
    console.log('File selected:', event.file.name);
};

const handleFileRemoved = (file) => {
    console.log('File removed:', file.name);
};

const handleUploadStart = (files) => {
    console.log('Upload started for', files.length, 'files');
};

const handleUploadComplete = () => {
    console.log('Upload complete');
};

const handleUploadSuccess = (event) => {
    console.log('Upload success:', event.file.name);
};

const handleUploadError = (event) => {
    console.error('Upload error:', event.file.name, event.error);
};

const handleProgress = (event) => {
    console.log(`${event.file.name}: ${event.progress}% uploaded`);
};

// For the complete example
const fileUploadRef = ref(null);
const uploadedFiles = ref([]);

const onFileSelected = (event) => {
    if (event.accepted) {
        console.log(`File accepted: ${event.file.name}`);
    } else {
        console.warn(`File rejected: ${event.file.name} - ${event.error}`);
    }
};

const onFileRemoved = (file) => {
    console.log(`File removed: ${file.name}`);
    uploadedFiles.value = uploadedFiles.value.filter(f => f.name !== file.name);
};

const onUploadStart = (files) => {
    console.log(`Starting upload of ${files.length} files`);
};

const onUploadProgress = (event) => {
    console.log(`Progress for file ${event.file.name}: ${event.progress}%`);
};

const onUploadSuccess = (event) => {
    console.log(`Upload completed: ${event.file.name}`);
    uploadedFiles.value.push({
        name: event.file.name,
        size: event.file.size,
        type: event.file.type,
        url: event.response?.data?.url || null
    });
};

const onUploadError = (event) => {
    console.error(`Upload error: ${event.file.name}`);
    console.error('Error details:', event.error);
};

const onUploadComplete = () => {
    console.log('All uploads completed');
    console.log('Uploaded files:', uploadedFiles.value);
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
