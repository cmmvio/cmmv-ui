<template>
    <BaseLayout>
        <h1>Form Builder</h1>

        <p>The <code>CFormBuilder (alias: c-form-builder)</code> component in the <code>@cmmv/ui</code> framework
            provides a flexible and customizable form builder interface. It allows developers to create and manage
            forms dynamically, with options for adding fields, sections, and validation rules.</p>

        <h3>Complete Registration Form Example</h3>

        <p class="mb-4">
            This example demonstrates a comprehensive registration form with various field types and validations.
        </p>

        <card-docs>
            <div class="max-w-[400px] m-auto">
                <c-form-builder v-model="formData" :schema="schema" ref="formBuilder">
                    <template #country-selected="{ data }">
                        <div class="flex items-center" v-if="data">
                            <c-flag :iso="data.value" size="sm" rounded="none" />
                            <div class="ml-2">{{ data.label }}</div>
                        </div>
                        <div v-else>Select a country</div>
                    </template>

                    <template #country-option="{ data }">
                            <div class="flex text-left">
                                <c-flag :iso="data.value" size="sm" rounded="none" />
                                <div class="ml-2">{{ data.label }}</div>
                            </div>
                    </template>
                </c-form-builder>
            </div>

            <div class="mt-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Form Data (modelValue)</h4>
                    <pre
                        class="whitespace-pre-wrap text-xs overflow-auto max-h-[500px] p-2 rounded bg-white dark:bg-neutral-900">{{ JSON.stringify(formData, null, 2) }}</pre>
                </div>
            </div>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-[400px] m-auto"&gt;
    &lt;c-form-builder
        v-model="formData"
        :schema="schema"
        ref="formBuilder"
    /&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
    const formData = ref({});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Form Schema</h3>

        <p class="mb-4">The form is built using the following schema configuration:</p>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;script setup lang="ts"&gt;
const schema = ref({
    firstName: {
        type: "input",
        label: "First Name",
        placeholder: "Enter your first name",
        required: true,
        size: 6
    },
    lastName: {
        type: "input",
        label: "Last Name",
        placeholder: "Enter your last name",
        required: true,
        size: 6,
        props: {
            rules: [(v: string) => !!v || "Last name is required"]
        }
    },
    email: {
        type: "input",
        label: "Email Address",
        placeholder: "you@example.com",
        required: true,
        size: 12,
        props: {
            rules: [
                (v: string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email must be valid"
            ],
            type: "email"
        }
    },
    phone: {
        type: "input",
        label: "Phone Number",
        placeholder: "(123) 456-7890",
        size: 6,
        props: {
            type: "tel"
        }
    },
    birthDate: {
        type: "date",
        label: "Date of Birth",
        placeholder: "Select your birthday",
        size: 6,
        props: {
            max: new Date()
        }
    },
    address: {
        type: "input",
        label: "Street Address",
        placeholder: "1234 Main St",
        size: 12
    },
    country: {
        type: "combobox",
        label: "Country",
        placeholder: "Select your country",
        required: true,
        size: 12,
        props: {
            clearable: true,
            searchable: true,
            size: "md"
        },
        remoteDataKeyValue: true,
        items: "/json/countries.json"
    },
    city: {
        type: "input",
        label: "City",
        placeholder: "Enter your city",
        size: 6
    },
    zipCode: {
        type: "input",
        label: "Zip/Postal Code",
        placeholder: "12345",
        size: 6
    },
    username: {
        type: "input",
        label: "Username",
        placeholder: "Choose a username",
        required: true,
        size: 6,
    },
    password: {
        type: "input",
        label: "Password",
        placeholder: "Create a password",
        required: true,
        size: 6,
    },
    notifications: {
        type: "checkbox",
        label: "Receive email notifications",
        props: {
            size: "sm"
        },
        size: 12
    },
    termsAndConditions: {
        type: "checkbox",
        label: "I agree to the Terms and Conditions",
        required: true,
        size: 12,
        props: {
            size: "sm"
        }
    },
    submit: {
        type: "submit",
        label: "Submit",
        size: 12
    }
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Product Form Example</h3>

        <p class="mb-4">
            This example showcases a product management form using a variety of form controls, including the newer
            components
            like autocomplete, textarea, number inputs, file upload, time picker, and toggle switches.
        </p>

        <card-docs>
            <div class="max-w-[450px] m-auto">
                <c-form-builder v-model="productData" :schema="productSchema" ref="productForm"
                    @submit="handleProductSubmit" />
            </div>

            <div class="mt-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Product Form Data (modelValue)</h4>
                    <pre
                        class="whitespace-pre-wrap text-xs overflow-auto max-h-[500px] p-2 rounded bg-white dark:bg-neutral-900">
                {{ JSON.stringify(productData, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-[400px] m-auto"&gt;
    &lt;c-form-builder
        v-model="formData"
        :schema="productSchema"
        ref="productForm"
        @submit="handleProductSubmit"
    /&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
    const formData = ref({});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <card-docs>
            <template #code>
                <pre><code class="code-highlight language-html">&lt;script setup lang="ts"&gt;
const productSchema = ref({
    productName: {
        type: "input",
        label: "Product Name",
        placeholder: "Enter product name",
        required: true,
        size: 12
    },
    category: {
        type: "autocomplete",
        label: "Category",
        placeholder: "Select or type a category",
        required: true,
        size: 6,
        options: [
            { value: "electronics", label: "Electronics" },
            { value: "clothing", label: "Clothing & Apparel" },
            { value: "home", label: "Home & Garden" },
            { value: "books", label: "Books & Media" },
            { value: "food", label: "Food & Grocery" }
        ]
    },
    subcategory: {
        type: "combobox",
        label: "Subcategory",
        placeholder: "Select a subcategory",
        size: 6,
        items: [
            { value: "computers", label: "Computers" },
            { value: "phones", label: "Smartphones" },
            { value: "audio", label: "Audio Equipment" },
            { value: "accessories", label: "Accessories" }
        ]
    },
    description: {
        type: "textarea",
        label: "Product Description",
        placeholder: "Detailed description of the product",
        required: true,
        size: 12,
        maxlength: 500,
        lengthCount: true,
        autoresize: true
    },
    price: {
        type: "number",
        label: "Price ($)",
        min: 0.01,
        max: 9999.99,
        step: 0.01,
        required: true,
        size: 6
    },
    stock: {
        type: "number",
        label: "Stock Quantity",
        min: 0,
        max: 10000,
        step: 1,
        required: true,
        size: 6
    },
    productImage: {
        type: "file",
        accept: "image/*",
        multiple: false,
        required: true,
        size: 12,
        dropzoneText: "Drop product image here or click to browse",
        maxFileSize: 5 * 1024 * 1024 // 5MB
    },
    restockDate: {
        type: "date",
        label: "Restock Date",
        placeholder: "When will the product be restocked",
        size: 12
    },
    restockTime: {
        type: "time",
        label: "Restock Time",
        minTime: "08:00",
        maxTime: "20:00",
        size: 6
    },
    featured: {
        type: "toggle",
        label: "Featured Product",
        size: 6
    },
    availability: {
        type: "toggle",
        label: "Available for Sale",
        size: 6
    },
    productTags: {
        type: "input",
        label: "Tags (comma separated)",
        placeholder: "new, featured, limited",
        size: 12
    },
    submit: {
        type: "submit",
        label: "Save Product",
        size: 12
    }
});
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Role Permissions Management Example</h3>

        <p class="mb-4">
            This example demonstrates how to create a role permissions management form with a two-column layout, displaying module name on the left and permission toggles on the right.
        </p>

        <card-docs>
            <div class="max-w-[900px] m-auto">
                <c-form-builder v-model="rolePermissionsData" :schema="permissionsSchema" @submit="handlePermissionsSubmit">
                    <template #table-header>
                        <div class="flex items-center py-1 border-b border-gray-200 dark:border-gray-900">
                            <div class="w-1/5 font-medium text-sm text-primary-600 dark:text-primary-400">Module</div>

                            <div class="w-4/5 grid grid-cols-6 gap-2">
                                <div class="text-center font-medium text-xs text-primary-600 dark:text-primary-400">View</div>
                                <div class="text-center font-medium text-xs text-primary-600 dark:text-primary-400">Insert</div>
                                <div class="text-center font-medium text-xs text-primary-600 dark:text-primary-400">Update</div>
                                <div class="text-center font-medium text-xs text-primary-600 dark:text-primary-400">Delete</div>
                                <div class="text-center font-medium text-xs text-primary-600 dark:text-primary-400">Import</div>
                                <div class="text-center font-medium text-xs text-primary-600 dark:text-primary-400">Export</div>
                            </div>
                        </div>
                    </template>

                    <template #module-permissions="slotProps">
                        <div v-if="slotProps" class="flex items-center border-b border-gray-100 dark:border-gray-800 py-1">
                            <div class="w-1/5 font-medium text-sm">
                                {{ slotProps.key ? slotProps.key.charAt(0).toUpperCase() + slotProps.key.slice(1) :
                                   slotProps.formData ? Object.keys(slotProps.formData)[0] : 'Module' }}
                            </div>
                            <div class="w-4/5 grid grid-cols-6 gap-2">
                                <div v-for="perm in ['view', 'insert', 'update', 'delete', 'import', 'export']" :key="perm" class="text-center">
                                    <c-toggle
                                        v-if="slotProps.key && rolePermissionsData[slotProps.key]"
                                        v-model="rolePermissionsData[slotProps.key][perm]"
                                        size="sm" />
                                </div>
                            </div>
                        </div>
                    </template>
                </c-form-builder>
            </div>

            <div class="mt-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Role Permissions Data</h4>
                    <pre class="whitespace-pre-wrap text-xs overflow-auto max-h-[500px] p-2 rounded bg-white dark:bg-neutral-900">{{ JSON.stringify(rolePermissionsData, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-[900px] m-auto"&gt;
    &lt;c-form-builder
        v-model="rolePermissionsData"
        :schema="permissionsSchema"
        @submit="handlePermissionsSubmit"
    &gt;
        &lt;!-- Headers for permissions table --&gt;
        &lt;template #table-header&gt;
            &lt;div class="flex items-center py-1 border-b-2 border-gray-200 mb-2"&gt;
                &lt;div class="w-1/5 font-medium text-sm text-primary-600"&gt;Module&lt;/div&gt;
                &lt;div class="w-4/5 grid grid-cols-6 gap-2"&gt;
                    &lt;div class="text-center font-medium text-xs text-primary-600"&gt;View&lt;/div&gt;
                    &lt;div class="text-center font-medium text-xs text-primary-600"&gt;Insert&lt;/div&gt;
                    &lt;div class="text-center font-medium text-xs text-primary-600"&gt;Update&lt;/div&gt;
                    &lt;div class="text-center font-medium text-xs text-primary-600"&gt;Delete&lt;/div&gt;
                    &lt;div class="text-center font-medium text-xs text-primary-600"&gt;Import&lt;/div&gt;
                    &lt;div class="text-center font-medium text-xs text-primary-600"&gt;Export&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;

        &lt;!-- Single reusable template for all modules --&gt;
        &lt;template #module-permissions="slotProps"&gt;
            &lt;div class="flex items-center border-b border-gray-100 py-1.5"&gt;
                &lt;div class="w-1/5 font-medium text-sm"&gt;&#123;&#123; slotProps.key ? slotProps.key.charAt(0).toUpperCase() + slotProps.key.slice(1) : 'Module' &#125;&#125;&lt;/div&gt;
                &lt;div class="w-4/5 grid grid-cols-6 gap-2"&gt;
                    &lt;div class="text-center"&gt;
                        &lt;c-toggle v-if="slotProps.key && rolePermissionsData[slotProps.key].view" v-model="rolePermissionsData[slotProps.key].view" size="sm" /&gt;
                    &lt;/div&gt;
                    &lt;!-- Other toggles with size="sm" --&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-form-builder&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
const permissionsSchema = {
    groupName: {
        type: "input",
        label: "Group Name",
        placeholder: "Enter group name",
        required: true,
        size: 6
    },
    groupDescription: {
        type: "textarea",
        label: "Description",
        placeholder: "Enter group description",
        size: 6
    },
    // Table header
    tableHeader: {
        type: "custom",
        size: 12
    },
    // All modules in one custom-object
    modulePermissions: {
        type: "custom-object",
        size: 12,
        props: {
            templateName: "module-permissions",
            items: {
                users: rolePermissionsData.value.users,
                products: rolePermissionsData.value.products,
                orders: rolePermissionsData.value.orders,
                customers: rolePermissionsData.value.customers,
                reports: rolePermissionsData.value.reports
            }
        }
    },
    submit: {
        type: "submit",
        label: "Save Permissions",
        size: 12
    }
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>Props</h3>

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
                    <td class="border-b px-4 py-2">v-model / modelValue</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">Object containing the form values. Each key corresponds to a field in
                        the schema.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">schema</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">Schema definition object for building the form. Each key represents a
                        form field and contains configuration options.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Schema Field Properties</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Property</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Type</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Default</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">type</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">Required</td>
                    <td class="border-b px-4 py-2">The type of the form field. Possible values: 'input', 'combobox',
                        'select', 'checkbox', 'radio', 'date', 'datepicker', 'autocomplete', 'file', 'fileupload',
                        'number',
                        'textarea', 'time', 'timepicker', 'toggle', 'stepper'.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">label</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Label text for the form field.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">placeholder</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">""</td>
                    <td class="border-b px-4 py-2">Placeholder text for input fields.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">required</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Whether the field is required.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">size</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">12</td>
                    <td class="border-b px-4 py-2">Grid column size (1-12) for responsive layout.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">props</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">Additional props to pass to the underlying component.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">items</td>
                    <td class="border-b px-4 py-2">Array | String</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Options for select/combobox fields. Can be an array of objects or a
                        URL for remote data.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">options</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">Options for autocomplete fields with {value, label} pairs.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">min / max</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">-</td>
                    <td class="border-b px-4 py-2">Minimum and maximum values for number inputs.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">maxlength</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">255</td>
                    <td class="border-b px-4 py-2">Maximum character length for textarea inputs.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">accept</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">*/*</td>
                    <td class="border-b px-4 py-2">Accepted file types for file upload components.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">multiple</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">Allow multiple file selections for file upload components.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">remoteDataKeyValue</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">false</td>
                    <td class="border-b px-4 py-2">When true, treats remote data as key-value pairs.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">steps</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">For stepper type. Array of step objects with title, subtitle, and
                        content
                        properties.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">schemas</td>
                    <td class="border-b px-4 py-2">Array</td>
                    <td class="border-b px-4 py-2">[]</td>
                    <td class="border-b px-4 py-2">For stepper type. Array of form schemas for each step.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">stepperProps</td>
                    <td class="border-b px-4 py-2">Object</td>
                    <td class="border-b px-4 py-2">{}</td>
                    <td class="border-b px-4 py-2">For stepper type. Additional props to pass to the CStepper component.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Exposed Methods</h3>

        <table-docs>
            <thead>
                <tr>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Method</th>
                    <th class="border-b px-4 py-2 font-semibold text-neutral-800 dark:text-white">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b px-4 py-2">reset()</td>
                    <td class="border-b px-4 py-2">Resets the form to its initial values.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">validate()</td>
                    <td class="border-b px-4 py-2">Validates all form fields and returns a boolean indicating if the
                        form is valid.</td>
                </tr>
            </tbody>
        </table-docs>

        <PagePagination previous="Form" previousLink="/form" next="Input" nextLink="/input" />
    </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import CardDocs from "../../components/CardDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const formBuilder = ref(null);

const formData = ref({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: null,
    country: "",
    city: "",
    address: "",
    zipCode: "",
    notifications: true,
    username: "",
    password: "",
    termsAndConditions: false
});

const schema = ref({
    firstName: {
        type: "input",
        label: "First Name",
        placeholder: "Enter your first name",
        required: true,
        size: 6,
    },
    lastName: {
        type: "input",
        label: "Last Name",
        placeholder: "Enter your last name",
        required: true,
        size: 6,
    },
    email: {
        type: "input",
        label: "Email Address",
        placeholder: "you@example.com",
        required: true,
        size: 12,
        props: {
            rules: [
                (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email must be valid"
            ],
            type: "email"
        }
    },
    phone: {
        type: "input",
        label: "Phone Number",
        placeholder: "(123) 456-7890",
        size: 6,
        props: {
            type: "tel"
        }
    },
    birthDate: {
        type: "date",
        label: "Date of Birth",
        placeholder: "Select your birthday",
        size: 6,
        props: {
            max: new Date()
        }
    },
    address: {
        type: "input",
        label: "Street Address",
        placeholder: "1234 Main St",
        size: 12
    },
    country: {
        type: "combobox",
        label: "Country",
        placeholder: "Select your country",
        required: true,
        size: 12,
        props: {
            clearable: true,
            searchable: true,
            size: "md"
        },
        remoteDataKeyValue: true,
        items: "/json/countries.json"
    },
    city: {
        type: "input",
        label: "City",
        placeholder: "Enter your city",
        size: 6
    },
    zipCode: {
        type: "input",
        label: "Zip/Postal Code",
        placeholder: "12345",
        size: 6
    },
    username: {
        type: "input",
        label: "Username",
        placeholder: "Choose a username",
        required: true,
        size: 6,
    },
    password: {
        type: "input",
        label: "Password",
        placeholder: "Create a password",
        required: true,
        size: 6,
    },
    notifications: {
        type: "checkbox",
        label: "Receive email notifications",
        props: {
            size: "sm"
        },
        size: 12
    },
    termsAndConditions: {
        type: "checkbox",
        label: "I agree to the Terms and Conditions",
        required: true,
        size: 12,
        props: {
            size: "sm"
        }
    },
    submit: {
        type: "submit",
        label: "Submit",
        size: 12
    }
});

const productForm = ref(null);
const productData = ref({
    productName: "",
    category: "",
    subcategory: "",
    description: "",
    price: 0,
    stock: 0,
    productImage: [],
    restockDate: null,
    featured: false,
    availability: true,
    productTags: ""
});

const productSchema = ref({
    productName: {
        type: "input",
        label: "Product Name",
        placeholder: "Enter product name",
        required: true,
        size: 12
    },
    category: {
        type: "autocomplete",
        label: "Category",
        placeholder: "Select or type a category",
        required: true,
        size: 6,
        props: {
            size: "sm"
        },
        options: [
            { value: "electronics", label: "Electronics" },
            { value: "clothing", label: "Clothing & Apparel" },
            { value: "home", label: "Home & Garden" },
            { value: "books", label: "Books & Media" },
            { value: "food", label: "Food & Grocery" }
        ]
    },
    subcategory: {
        type: "combobox",
        label: "Subcategory",
        placeholder: "Select a subcategory",
        size: 6,
        items: [
            { value: "computers", label: "Computers" },
            { value: "phones", label: "Smartphones" },
            { value: "audio", label: "Audio Equipment" },
            { value: "accessories", label: "Accessories" }
        ]
    },
    description: {
        type: "textarea",
        label: "Product Description",
        placeholder: "Detailed description of the product",
        required: true,
        size: 12,
        maxlength: 500,
        lengthCount: true,
        autoresize: true
    },
    price: {
        type: "number",
        label: "Price ($)",
        min: 0.01,
        max: 9999.99,
        step: 0.01,
        required: true,
        size: 6
    },
    stock: {
        type: "number",
        label: "Stock Quantity",
        min: 0,
        max: 10000,
        step: 1,
        required: true,
        size: 6
    },
    productImage: {
        type: "file",
        accept: "image/*",
        multiple: false,
        required: true,
        size: 12,
        dropzoneText: "Drop product image here or click to browse",
        maxFileSize: 5 * 1024 * 1024
    },
    restockDate: {
        type: "date",
        label: "Restock Date",
        placeholder: "When will the product be restocked",
        size: 12
    },
    featured: {
        type: "toggle",
        label: "Featured Product",
        size: 6
    },
    availability: {
        type: "toggle",
        label: "Available for Sale",
        size: 6
    },
    productTags: {
        type: "chips",
        label: "Tags (comma separated)",
        placeholder: "new, featured, limited",
        size: 12
    },
    submit: {
        type: "submit",
        label: "Save Product",
        size: 12
    }
});

const handleProductSubmit = (data) => {
    console.log("Product form submitted:", data);
};

const currentStepperStep = ref(0);
const stepperFormData = ref({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    company: '',
    jobTitle: '',
    experience: '',
    interests: [],
    newsletter: true,
    comments: ''
});

const stepperSteps = [
    {
        title: 'Basic Info',
        subtitle: 'Personal',
        content: 'Enter your basic personal information.'
    },
    {
        title: 'Address',
        subtitle: 'Location',
        content: 'Where do you live?'
    },
    {
        title: 'Professional',
        subtitle: 'Work',
        content: 'Tell us about your professional background.'
    },
    {
        title: 'Additional',
        subtitle: 'Extra',
        content: 'Any additional information you want to share.'
    }
];

const stepperFormSchemas = [
    {
        fullName: {
            type: "input",
            label: "Full Name",
            placeholder: "Enter your full name",
            required: true,
            size: 12
        },
        email: {
            type: "input",
            label: "Email Address",
            placeholder: "you@example.com",
            required: true,
            size: 6,
            props: {
                rules: [
                    (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email must be valid"
                ],
                type: "email"
            }
        },
        phone: {
            type: "input",
            label: "Phone Number",
            placeholder: "(123) 456-7890",
            size: 6,
            props: {
                type: "tel"
            }
        }
    },
    {
        address: {
            type: "input",
            label: "Street Address",
            placeholder: "1234 Main St",
            required: true,
            size: 12
        },
        city: {
            type: "input",
            label: "City",
            placeholder: "Enter your city",
            required: true,
            size: 6
        },
        country: {
            type: "combobox",
            label: "Country",
            placeholder: "Select your country",
            required: true,
            size: 6,
            props: {
                clearable: true,
                searchable: true
            },
            items: [
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
                { value: "de", label: "Germany" },
                { value: "fr", label: "France" },
                { value: "jp", label: "Japan" }
            ]
        },
        postalCode: {
            type: "input",
            label: "Postal/Zip Code",
            placeholder: "12345",
            size: 12
        }
    },
    {
        company: {
            type: "input",
            label: "Company",
            placeholder: "Enter your company name",
            size: 6
        },
        jobTitle: {
            type: "input",
            label: "Job Title",
            placeholder: "Enter your job title",
            size: 6
        },
        experience: {
            type: "combobox",
            label: "Years of Experience",
            placeholder: "Select experience level",
            size: 12,
            items: [
                { value: "0-1", label: "0-1 years" },
                { value: "1-3", label: "1-3 years" },
                { value: "3-5", label: "3-5 years" },
                { value: "5-10", label: "5-10 years" },
                { value: "10+", label: "10+ years" }
            ]
        }
    },
    {
        interests: {
            type: "autocomplete",
            label: "Interests",
            placeholder: "Select your interests",
            size: 12,
            options: [
                { value: "technology", label: "Technology" },
                { value: "design", label: "Design" },
                { value: "business", label: "Business" },
                { value: "marketing", label: "Marketing" },
                { value: "development", label: "Development" },
                { value: "finance", label: "Finance" },
                { value: "healthcare", label: "Healthcare" }
            ]
        },
        newsletter: {
            type: "toggle",
            label: "Subscribe to newsletter",
            size: 12
        },
        comments: {
            type: "textarea",
            label: "Additional Comments",
            placeholder: "Any additional information you'd like to share",
            size: 12,
            maxlength: 500,
            lengthCount: true,
            autoresize: true
        }
    }
];

const formRefs = ref([null, null, null, null]);

const validateCurrentStep = async () => {
    const currentFormRef: any = formRefs.value[currentStepperStep.value];

    if (currentFormRef && typeof currentFormRef.validate === 'function')
        return await currentFormRef.validate();

    return true;
};

const handleStepChange = async (next = true) => {
    if (next) {
        const isValid = await validateCurrentStep();
        if (!isValid) return;

        if (currentStepperStep.value < stepperSteps.length - 1) {
            currentStepperStep.value++;
        }
    } else {
        if (currentStepperStep.value > 0) {
            currentStepperStep.value--;
        }
    }
};

const handleMultiStepFormSubmit = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
        console.log("Multi-step form submitted:", stepperFormData.value);
        alert("Form submitted successfully!");
    }
};

const integratedFormBuilder = ref(null);
const integratedStepperForm = ref({
    registrationFlow: {}
});
const integratedStepperSchema = ref({
    registrationFlow: {
        type: "stepper",
        size: "md",
        steps: [
            {
                title: 'Personal Info',
                subtitle: 'Basic details',
                content: 'Enter your basic personal information.'
            },
            {
                title: 'Contact',
                subtitle: 'Contact details',
                content: 'How can we reach you?'
            },
            {
                title: 'Account',
                subtitle: 'Setup access',
                content: 'Create your login credentials.'
            },
            {
                title: 'Confirmation',
                subtitle: 'Verify',
                content: 'Review and confirm your information.'
            }
        ],
        schemas: [
            {
                fullName: {
                    type: "input",
                    label: "Full Name",
                    placeholder: "Enter your full name",
                    required: true,
                    size: 12
                },
                birthDate: {
                    type: "date",
                    label: "Date of Birth",
                    placeholder: "Select your birthday",
                    required: true,
                    size: 12
                },
                gender: {
                    type: "combobox",
                    label: "Gender",
                    placeholder: "Select gender",
                    size: 12,
                    items: [
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                        { value: "prefer-not", label: "Prefer not to say" }
                    ]
                }
            },
            {
                email: {
                    type: "input",
                    label: "Email Address",
                    placeholder: "you@example.com",
                    required: true,
                    size: 12,
                    props: {
                        rules: [
                            (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email must be valid"
                        ],
                        type: "email"
                    }
                },
                phone: {
                    type: "input",
                    label: "Phone Number",
                    placeholder: "(123) 456-7890",
                    size: 12,
                    props: {
                        type: "tel"
                    }
                },
                address: {
                    type: "textarea",
                    label: "Address",
                    placeholder: "Enter your full address",
                    size: 12,
                    autoresize: true
                }
            },
            {
                username: {
                    type: "input",
                    label: "Username",
                    placeholder: "Choose a username",
                    required: true,
                    size: 12
                },
                password: {
                    type: "input",
                    label: "Password",
                    placeholder: "Create a password",
                    required: true,
                    size: 12,
                    props: {
                        type: "password",
                        rules: [
                            (v) => (v && v.length >= 8) || "Password must be at least 8 characters"
                        ]
                    }
                },
                notifications: {
                    type: "toggle",
                    label: "Receive email notifications",
                    size: 12
                }
            },
            {
                termsAndConditions: {
                    type: "checkbox",
                    label: "I agree to the Terms and Conditions",
                    required: true,
                    size: 12
                },
                privacyPolicy: {
                    type: "checkbox",
                    label: "I have read and agree to the Privacy Policy",
                    required: true,
                    size: 12
                },
                comments: {
                    type: "textarea",
                    label: "Additional Comments",
                    placeholder: "Any additional information you'd like to share",
                    size: 12,
                    maxlength: 500,
                    lengthCount: true,
                    autoresize: true
                }
            }
        ],
        stepperProps: {
            shadow: "sm",
            contentShadow: "none",
            validateBeforeNext: true
        }
    },
    submit: {
        type: "submit",
        label: "Complete Registration",
        size: 12
    }
});

const handleIntegratedStepperSubmit = (data) => {
    console.log("Integrated stepper form submitted:", data);
    alert("Registration completed successfully!");
};

const handleUserRolesSubmit = (data) => {
    console.log("User roles data submitted:", data);
};

const rolePermissionsData = ref({
    groupName: "Administrator",
    groupDescription: "Full system access role",
    users: {
        view: true,
        insert: true,
        update: true,
        delete: false,
        import: false,
        export: true
    },
    products: {
        view: true,
        insert: false,
        update: false,
        delete: false,
        import: false,
        export: false
    },
    orders: {
        view: true,
        insert: true,
        update: true,
        delete: false,
        import: true,
        export: true
    },
    customers: {
        view: true,
        insert: true,
        update: true,
        delete: false,
        import: false,
        export: true
    },
    reports: {
        view: true,
        insert: false,
        update: false,
        delete: false,
        import: false,
        export: true
    }
});

const permissionsSchema = {
    groupName: {
        type: "input",
        label: "Group Name",
        placeholder: "Enter group name",
        required: true,
        size: 12
    },
    groupDescription: {
        type: "textarea",
        label: "Description",
        placeholder: "Enter group description",
        size: 12
    },
    tableHeader: {
        type: "custom",
        size: 12
    },
    modulePermissions: {
        type: "custom-object",
        size: 12,
        props: {
            templateName: "module-permissions",
            items: {
                users: rolePermissionsData.value.users,
                products: rolePermissionsData.value.products,
                orders: rolePermissionsData.value.orders,
                customers: rolePermissionsData.value.customers,
                reports: rolePermissionsData.value.reports
            }
        }
    },
    submit: {
        type: "submit",
        label: "Save Permissions",
        size: 12
    }
};

const handlePermissionsSubmit = (data) => {
    console.log("Role permissions submitted:", data);
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
