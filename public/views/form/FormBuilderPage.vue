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
                <c-form-builder v-model="formData" :schema="schema" ref="formBuilder" />
            </div>

            <div class="mt-4 p-4">
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

            <div class="mt-4 p-4">
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
        size: 6
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
                        'textarea', 'time', 'timepicker', 'toggle'.</td>
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
        props: {
            clearable: true,
        },
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

const handleProductSubmit = (data) => {
    console.log("Product form submitted:", data);
};
</script>

<style scoped>
.code-highlight {
    white-space: pre;
}
</style>
