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
            <template #schema><pre><code class="code-highlight language-json">{
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
}</code></pre>
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

            <template #schema>
                <pre><code class="code-highlight language-json">{
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
}</code></pre>
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
                &lt;div class="w-1/5 font-medium text-sm"&gt;
                    &#123;&#123; slotProps.key ? slotProps.key.charAt(0).toUpperCase() + slotProps.key.slice(1) :
                    slotProps.formData ? Object.keys(slotProps.formData)[0] : 'Module' &#125;&#125;&lt;/div&gt;
                &lt;div class="w-4/5 grid grid-cols-6 gap-2"&gt;
                    &lt;div v-for="perm in ['view', 'insert', 'update', 'delete', 'import', 'export']" :key="perm" class="text-center"&gt;
                        &lt;c-toggle
                            v-if="slotProps.key && rolePermissionsData[slotProps.key]"
                            v-model="rolePermissionsData[slotProps.key][perm]"
                            size="sm"
                        /&gt;
                    &lt;/div>
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/c-form-builder&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
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
&lt;/script&gt;</code></pre>
            </template>

            <template #schema>
                <pre><code class="code-highlight language-json">{
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
}</code></pre>
            </template>
        </card-docs>

        <h3>Blog Post Creation Example</h3>

        <p class="mb-4">
            This example demonstrates a blog post creation form using the WYSIWYG editor component for content and the password input component for author authentication.
        </p>

        <card-docs>
            <div class="max-w-[800px] m-auto">
                <c-form-builder v-model="blogPostData" :schema="blogPostSchema" @submit="handleBlogPostSubmit" />
            </div>

            <div class="mt-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Blog Post Form Data (modelValue)</h4>
                    <pre
                        class="whitespace-pre-wrap text-xs overflow-auto max-h-[500px] p-2 rounded bg-white dark:bg-neutral-900">{{ JSON.stringify(blogPostData, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-[800px] m-auto"&gt;
    &lt;c-form-builder
        v-model="blogPostData"
        :schema="blogPostSchema"
        @submit="handleBlogPostSubmit"
    /&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
    const blogPostData = ref({
        title: "",
        category: "",
        tags: [],
        excerpt: "",
        content: "<p>Start writing your amazing blog post here...</p>",
        featuredImage: [],
        authorPassword: "",
        publishNow: true,
        publishDate: null
    });
&lt;/script&gt;</code></pre>
            </template>

            <template #schema>
                <pre><code class="code-highlight language-json">{
    blogHeader: {
        type: "header",
        label: "Create New Blog Post",
        size: 12,
        props: {
            variant: "primary"
        }
    },
    title: {
        type: "input",
        label: "Post Title",
        placeholder: "Enter post title",
        required: true,
        size: 12
    },
    category: {
        type: "combobox",
        label: "Category",
        placeholder: "Select a category",
        required: true,
        size: 6,
        items: [
            { value: "technology", label: "Technology" },
            { value: "design", label: "Design & UI" },
            { value: "business", label: "Business" },
            { value: "development", label: "Development" },
            { value: "tutorial", label: "Tutorial" }
        ]
    },
    tags: {
        type: "chips",
        label: "Tags",
        placeholder: "Add tags and press Enter",
        size: 6,
        minTags: 1,
        maxTags: 5,
        allowCustom: true
    },
    excerpt: {
        type: "textarea",
        label: "Post Excerpt",
        placeholder: "Brief summary of your post",
        required: true,
        size: 12,
        maxlength: 200,
        lengthCount: true
    },
    content: {
        type: "wysiwyg",
        label: "Post Content",
        placeholder: "Write your blog post here...",
        required: true,
        size: 12,
        outputFormat: "html"
    },
    featuredImage: {
        type: "file",
        label: "Featured Image",
        accept: "image/*",
        multiple: false,
        required: true,
        size: 12,
        dropzoneText: "Drop your feature image here or click to browse"
    },
    authorSection: {
        type: "header",
        label: "Author Details",
        size: 12,
        props: {
            variant: "secondary"
        }
    },
    authorPassword: {
        type: "password",
        label: "Author Password",
        placeholder: "Verify your identity",
        required: true,
        size: 12,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
        minLength: 8,
        showStrengthBar: true
    },
    publishNow: {
        type: "toggle",
        label: "Publish Immediately",
        size: 6
    },
    publishDate: {
        type: "date",
        label: "Schedule Publication",
        placeholder: "Select publication date",
        size: 6
    },
    submit: {
        type: "submit",
        label: "Save & Publish",
        size: 12
    }
}</code></pre>
            </template>
        </card-docs>

        <h3>Multi-Tab Form Example</h3>

        <p class="mb-4">
            This example demonstrates how to create a form with multiple tabs to organize complex forms into logical sections.
            The form uses the new tabs type to create a tabbed interface within the form builder.
        </p>

        <card-docs>
            <div class="max-w-[800px] m-auto">
                <c-form-builder v-model="tabsFormData" :schema="tabsFormSchema" @submit="handleTabsFormSubmit" />
            </div>

            <div class="mt-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Multi-Tab Form Data (modelValue)</h4>
                    <pre
                        class="whitespace-pre-wrap text-xs overflow-auto max-h-[500px] p-2 rounded bg-white dark:bg-neutral-900">{{ JSON.stringify(tabsFormData, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-[800px] m-auto"&gt;
    &lt;c-form-builder
        v-model="tabsFormData"
        :schema="tabsFormSchema"
        @submit="handleTabsFormSubmit"
    /&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
    const tabsFormData = ref({
        projectName: "",
        projectDescription: "",
        startDate: null,
        endDate: null,
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        budget: 0,
        teamMembers: [],
        tasks: [],
        priority: "",
        status: ""
    });
&lt;/script&gt;</code></pre>
            </template>

            <template #schema>
                <pre><code class="code-highlight language-json">{
    projectHeader: {
        type: "header",
        label: "Project Management",
        size: 12,
        props: {
            variant: "primary"
        }
    },
    projectName: {
        type: "input",
        label: "Project Name",
        placeholder: "Enter project name",
        required: true,
        size: 8
    },
    status: {
        type: "combobox",
        label: "Status",
        placeholder: "Select status",
        size: 4,
        items: [
            { value: "planning", label: "Planning" },
            { value: "inProgress", label: "In Progress" },
            { value: "onHold", label: "On Hold" },
            { value: "completed", label: "Completed" }
        ]
    },
    projectDescription: {
        type: "textarea",
        label: "Description",
        placeholder: "Project description",
        required: true,
        size: 12,
        maxlength: 500,
        lengthCount: true
    },
    formTabs: {
        type: "tabs",
        label: "Project Details",
        size: 12,
        items: {
            details: {
                label: "Timeline & Budget",
                schema: {
                    startDate: {
                        type: "date",
                        label: "Start Date",
                        placeholder: "Select start date",
                        required: true,
                        size: 6
                    },
                    endDate: {
                        type: "date",
                        label: "End Date",
                        placeholder: "Select end date",
                        size: 6
                    },
                    budget: {
                        type: "currency",
                        label: "Budget",
                        currencyCode: "USD",
                        showCurrencySymbol: true,
                        size: 6
                    },
                    priority: {
                        type: "combobox",
                        label: "Priority",
                        placeholder: "Select priority",
                        size: 6,
                        items: [
                            { value: "low", label: "Low" },
                            { value: "medium", label: "Medium" },
                            { value: "high", label: "High" },
                            { value: "urgent", label: "Urgent" }
                        ]
                    }
                }
            },
            client: {
                label: "Client Information",
                schema: {
                    clientName: {
                        type: "input",
                        label: "Client Name",
                        placeholder: "Enter client name",
                        size: 12
                    },
                    clientEmail: {
                        type: "input",
                        label: "Client Email",
                        placeholder: "client@example.com",
                        size: 6,
                        props: {
                            type: "email"
                        }
                    },
                    clientPhone: {
                        type: "input",
                        label: "Client Phone",
                        placeholder: "(123) 456-7890",
                        size: 6
                    }
                }
            },
            team: {
                label: "Team & Tasks",
                schema: {
                    teamMembers: {
                        type: "chips",
                        label: "Team Members",
                        placeholder: "Add team members",
                        size: 12,
                        allowCustom: true
                    },
                    tasks: {
                        type: "custom",
                        label: "Tasks",
                        size: 12,
                        props: {
                            description: "Use the project management module to add detailed tasks."
                        }
                    }
                }
            }
        }
    },
    notes: {
        type: "wysiwyg",
        label: "Additional Notes",
        placeholder: "Enter any additional notes about the project...",
        size: 12
    },
    submit: {
        type: "submit",
        label: "Save Project",
        size: 12
    }
}</code></pre>
            </template>
        </card-docs>

        <h3>Nested Tabs Form Example</h3>

        <p class="mb-4">
            This advanced example demonstrates how to create a form with nested tabs, allowing for even more complex
            form organization. This is particularly useful for applications that require extensive data collection
            organized in hierarchical categories.
        </p>

        <card-docs>
            <div class="max-w-[800px] m-auto">
                <c-form-builder v-model="nestedTabsFormData" :schema="nestedTabsFormSchema" @submit="handleNestedTabsFormSubmit" />
            </div>

            <div class="mt-4">
                <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-md">
                    <h4 class="text-sm font-medium mb-2">Nested Tabs Form Data (modelValue)</h4>
                    <pre
                        class="whitespace-pre-wrap text-xs overflow-auto max-h-[500px] p-2 rounded bg-white dark:bg-neutral-900">{{ JSON.stringify(nestedTabsFormData, null, 2) }}</pre>
                </div>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;div class="max-w-[800px] m-auto"&gt;
    &lt;c-form-builder
        v-model="nestedTabsFormData"
        :schema="nestedTabsFormSchema"
        @submit="handleNestedTabsFormSubmit"
    /&gt;
&lt;/div&gt;

&lt;script setup lang="ts"&gt;
    const nestedTabsFormData = ref({
        appName: "",
        appVersion: "",
        appEnvironment: "",
        theme: "",
        primaryColor: "",
        fontFamily: "",
        defaultLanguage: "",
        timezone: "",
        dateFormat: "",
        timeFormat: "",
        authMethod: "",
        sessionTimeout: "",
        passwordMinLength: "",
        requireUppercase: false,
        requireNumbers: false,
        requireSpecialChars: false,
        enableMFA: false,
        mfaMethod: "",
        enableAPI: false,
        apiKey: "",
        integrationNotes: ""
    });

    const nestedTabsFormSchema = ref({
        mainHeader: {
            type: "header",
            label: "Application Configuration",
            size: 12,
            props: {
                variant: "primary"
            }
        },
        appName: {
            type: "input",
            label: "Application Name",
            placeholder: "Enter application name",
            required: true,
            size: 12
        },
        mainTabs: {
            type: "tabs",
            label: "Configuration Sections",
            size: 12,
            items: {
                general: {
                    label: "General",
                    schema: {
                        appVersion: {
                            type: "input",
                            label: "Version",
                            placeholder: "1.0.0",
                            size: 6
                        },
                        appEnvironment: {
                            type: "combobox",
                            label: "Environment",
                            size: 6,
                            items: [
                                { value: "dev", label: "Development" },
                                { value: "test", label: "Testing" },
                                { value: "prod", label: "Production" }
                            ]
                        },
                        generalSettings: {
                            type: "tabs",
                            label: "Settings",
                            size: 12,
                            items: {
                                appearance: {
                                    label: "Appearance",
                                    schema: {
                                        theme: {
                                            type: "combobox",
                                            label: "Theme",
                                            size: 6,
                                            items: [
                                                { value: "light", label: "Light" },
                                                { value: "dark", label: "Dark" },
                                                { value: "auto", label: "Auto" }
                                            ]
                                        },
                                        primaryColor: {
                                            type: "input",
                                            label: "Primary Color",
                                            placeholder: "#3b82f6",
                                            size: 6
                                        },
                                        fontFamily: {
                                            type: "input",
                                            label: "Font Family",
                                            placeholder: "Inter, sans-serif",
                                            size: 12
                                        }
                                    }
                                },
                                localization: {
                                    label: "Localization",
                                    schema: {
                                        defaultLanguage: {
                                            type: "combobox",
                                            label: "Default Language",
                                            size: 6,
                                            items: [
                                                { value: "en", label: "English" },
                                                { value: "es", label: "Spanish" },
                                                { value: "fr", label: "French" },
                                                { value: "de", label: "German" }
                                            ]
                                        },
                                        timezone: {
                                            type: "combobox",
                                            label: "Default Timezone",
                                            size: 6,
                                            items: [
                                                { value: "utc", label: "UTC" },
                                                { value: "est", label: "Eastern (EST)" },
                                                { value: "cst", label: "Central (CST)" },
                                                { value: "pst", label: "Pacific (PST)" }
                                            ]
                                        },
                                        dateFormat: {
                                            type: "input",
                                            label: "Date Format",
                                            placeholder: "MM/DD/YYYY",
                                            size: 6
                                        },
                                        timeFormat: {
                                            type: "input",
                                            label: "Time Format",
                                            placeholder: "HH:mm",
                                            size: 6
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                security: {
                    label: "Security",
                    schema: {
                        authMethod: {
                            type: "combobox",
                            label: "Authentication Method",
                            size: 6,
                            items: [
                                { value: "jwt", label: "JWT" },
                                { value: "oauth2", label: "OAuth 2.0" },
                                { value: "saml", label: "SAML" }
                            ]
                        },
                        sessionTimeout: {
                            type: "input",
                            label: "Session Timeout (minutes)",
                            placeholder: "30",
                            size: 6
                        },
                        securityTabs: {
                            type: "tabs",
                            label: "Security Settings",
                            size: 12,
                            items: {
                                password: {
                                    label: "Password Policy",
                                    schema: {
                                        passwordMinLength: {
                                            type: "input",
                                            label: "Minimum Length",
                                            placeholder: "8",
                                            size: 6
                                        },
                                        requireUppercase: {
                                            type: "toggle",
                                            label: "Require Uppercase",
                                            size: 6
                                        },
                                        requireNumbers: {
                                            type: "toggle",
                                            label: "Require Numbers",
                                            size: 6
                                        },
                                        requireSpecialChars: {
                                            type: "toggle",
                                            label: "Require Special Characters",
                                            size: 6
                                        }
                                    }
                                },
                                mfa: {
                                    label: "Multi-Factor Auth",
                                    schema: {
                                        enableMFA: {
                                            type: "toggle",
                                            label: "Enable MFA",
                                            size: 6
                                        },
                                        mfaMethod: {
                                            type: "combobox",
                                            label: "MFA Method",
                                            size: 6,
                                            items: [
                                                { value: "app", label: "Authenticator App" },
                                                { value: "sms", label: "SMS" },
                                                { value: "email", label: "Email" }
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                integrations: {
                    label: "Integrations",
                    schema: {
                        enableAPI: {
                            type: "toggle",
                            label: "Enable API",
                            size: 6
                        },
                        apiKey: {
                            type: "input",
                            label: "API Key",
                            placeholder: "Enter your API key",
                            size: 6
                        },
                        integrationNotes: {
                            type: "textarea",
                            label: "Integration Notes",
                            placeholder: "Additional integration details...",
                            size: 12
                        }
                    }
                }
            }
        },
        submit: {
            type: "submit",
            label: "Save Configuration",
            size: 12
        }
    });

    const handleNestedTabsFormSubmit = (data) => {
        console.log("Nested tabs form submitted:", data);
        alert("Configuration saved successfully!");
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
                        'number', 'textarea', 'time', 'timepicker', 'toggle', 'stepper', 'password', 'wysiwyg',
                        'richtext', 'editor'.</td>
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
                <tr>
                    <td class="border-b px-4 py-2">requireUppercase</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">For password type. Requires the password to contain at least one uppercase letter.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">requireLowercase</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">For password type. Requires the password to contain at least one lowercase letter.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">requireNumbers</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">For password type. Requires the password to contain at least one number.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">requireSpecialChars</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">For password type. Requires the password to contain at least one special character.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">minLength</td>
                    <td class="border-b px-4 py-2">Number</td>
                    <td class="border-b px-4 py-2">8</td>
                    <td class="border-b px-4 py-2">For password type. Minimum required length for the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showStrengthBar</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">For password type. Shows a strength indicator for the password.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">showRequirements</td>
                    <td class="border-b px-4 py-2">Boolean</td>
                    <td class="border-b px-4 py-2">true</td>
                    <td class="border-b px-4 py-2">For password type. Shows a list of password requirements.</td>
                </tr>
                <tr>
                    <td class="border-b px-4 py-2">outputFormat</td>
                    <td class="border-b px-4 py-2">String</td>
                    <td class="border-b px-4 py-2">html</td>
                    <td class="border-b px-4 py-2">For wysiwyg/richtext/editor type. Output format of the editor content ('html' or 'markdown').</td>
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
        size: 6,
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
        placeholder: "22222-222",
        size: 12
    },
    username: {
        type: "input",
        label: "Username",
        placeholder: "Choose a username",
        required: true,
        size: 6,
    },
    password: {
        type: "password",
        label: "Password",
        required: true,
        size: 12,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
        minLength: 8,
        showStrengthBar: true
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
    stock: 1,
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
        type: "currency",
        label: "Price ($)",
        min: 0.01,
        max: 9999.99,
        step: 0.01,
        required: true,
        size: 6,
        currencyCode: "USD",
        showCurrencySymbol: true
    },
    stock: {
        type: "input",
        label: "Stock Quantity",
        placeholder: "Enter stock quantity",
        required: true,
        size: 6,
        value: 1,
        props: {
            mask: "####"
        }
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

const blogPostData = ref({
    title: "",
    category: "",
    tags: [],
    excerpt: "",
    content: "<p>Start writing your amazing blog post here...</p>",
    featuredImage: [],
    publishNow: true,
    publishDate: null
});

const blogPostSchema = ref({
    blogHeader: {
        type: "header",
        label: "Create New Blog Post",
        size: 12,
        props: {
            variant: "primary"
        }
    },
    title: {
        type: "input",
        label: "Post Title",
        placeholder: "Enter post title",
        required: true,
        size: 12
    },
    category: {
        type: "combobox",
        label: "Category",
        placeholder: "Select a category",
        required: true,
        size: 6,
        items: [
            { value: "technology", label: "Technology" },
            { value: "design", label: "Design & UI" },
            { value: "business", label: "Business" },
            { value: "development", label: "Development" },
            { value: "tutorial", label: "Tutorial" }
        ]
    },
    tags: {
        type: "chips",
        label: "Tags",
        placeholder: "Add tags and press Enter",
        size: 6,
        minTags: 1,
        maxTags: 5,
        allowCustom: true
    },
    excerpt: {
        type: "textarea",
        label: "Post Excerpt",
        placeholder: "Brief summary of your post",
        required: true,
        size: 12,
        maxlength: 200,
        lengthCount: true
    },
    content: {
        type: "wysiwyg",
        label: "Post Content",
        placeholder: "Write your blog post here...",
        required: true,
        size: 12,
        outputFormat: "html"
    },
    featuredImage: {
        type: "file",
        label: "Featured Image",
        accept: "image/*",
        multiple: false,
        required: true,
        size: 12,
        dropzoneText: "Drop your feature image here or click to browse"
    },
    authorSection: {
        type: "header",
        label: "Author Details",
        size: 12,
        props: {
            variant: "secondary"
        }
    },
    authorPassword: {
        type: "password",
        label: "Author Password",
        placeholder: "Verify your identity",
        required: true,
        size: 12,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
        minLength: 8,
        showStrengthBar: true
    },
    publishNow: {
        type: "toggle",
        label: "Publish Immediately",
        size: 6
    },
    publishDate: {
        type: "date",
        label: "Schedule Publication",
        placeholder: "Select publication date",
        size: 6
    },
    submit: {
        type: "submit",
        label: "Save & Publish",
        size: 12
    }
});

const handleBlogPostSubmit = (data) => {
    console.log("Blog post submitted:", data);
    // In a real application, you would save the blog post data to a database
};

const tabsFormData = ref({
    projectName: "",
    projectDescription: "",
    startDate: null,
    endDate: null,
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    budget: 0,
    teamMembers: [],
    tasks: [],
    priority: "",
    status: ""
});

const tabsFormSchema = ref({
    projectHeader: {
        type: "header",
        label: "Project Management",
        size: 12,
        props: {
            variant: "primary"
        }
    },
    projectName: {
        type: "input",
        label: "Project Name",
        placeholder: "Enter project name",
        required: true,
        size: 8
    },
    status: {
        type: "combobox",
        label: "Status",
        placeholder: "Select status",
        size: 4,
        items: [
            { value: "planning", label: "Planning" },
            { value: "inProgress", label: "In Progress" },
            { value: "onHold", label: "On Hold" },
            { value: "completed", label: "Completed" }
        ]
    },
    projectDescription: {
        type: "textarea",
        label: "Description",
        placeholder: "Project description",
        required: true,
        size: 12,
        maxlength: 500,
        lengthCount: true
    },
    formTabs: {
        type: "tabs",
        label: "Project Details",
        size: 12,
        items: {
            details: {
                label: "Timeline & Budget",
                schema: {
                    startDate: {
                        type: "date",
                        label: "Start Date",
                        placeholder: "Select start date",
                        required: true,
                        size: 6
                    },
                    endDate: {
                        type: "date",
                        label: "End Date",
                        placeholder: "Select end date",
                        size: 6
                    },
                    budget: {
                        type: "currency",
                        label: "Budget",
                        currencyCode: "USD",
                        showCurrencySymbol: true,
                        size: 6
                    },
                    priority: {
                        type: "combobox",
                        label: "Priority",
                        placeholder: "Select priority",
                        size: 6,
                        items: [
                            { value: "low", label: "Low" },
                            { value: "medium", label: "Medium" },
                            { value: "high", label: "High" },
                            { value: "urgent", label: "Urgent" }
                        ]
                    }
                }
            },
            client: {
                label: "Client Information",
                schema: {
                    clientName: {
                        type: "input",
                        label: "Client Name",
                        placeholder: "Enter client name",
                        size: 12
                    },
                    clientEmail: {
                        type: "input",
                        label: "Client Email",
                        placeholder: "client@example.com",
                        size: 6,
                        props: {
                            type: "email"
                        }
                    },
                    clientPhone: {
                        type: "input",
                        label: "Client Phone",
                        placeholder: "(123) 456-7890",
                        size: 6
                    }
                }
            },
            team: {
                label: "Team & Tasks",
                schema: {
                    teamMembers: {
                        type: "chips",
                        label: "Team Members",
                        placeholder: "Add team members",
                        size: 12,
                        allowCustom: true
                    },
                    tasks: {
                        type: "custom",
                        label: "Tasks",
                        size: 12,
                        props: {
                            description: "Use the project management module to add detailed tasks."
                        }
                    }
                }
            }
        }
    },
    notes: {
        type: "wysiwyg",
        label: "Additional Notes",
        placeholder: "Enter any additional notes about the project...",
        size: 12
    },
    submit: {
        type: "submit",
        label: "Save Project",
        size: 12
    }
});

const handleTabsFormSubmit = (data) => {
    console.log("Multi-tab form submitted:", data);
    alert("Form submitted successfully!");
};

const nestedTabsFormData = ref({
    appName: "",
    appVersion: "",
    appEnvironment: "",
    theme: "",
    primaryColor: "",
    fontFamily: "",
    defaultLanguage: "",
    timezone: "",
    dateFormat: "",
    timeFormat: "",
    authMethod: "",
    sessionTimeout: "",
    passwordMinLength: "",
    requireUppercase: false,
    requireNumbers: false,
    requireSpecialChars: false,
    enableMFA: false,
    mfaMethod: "",
    enableAPI: false,
    apiKey: "",
    integrationNotes: ""
});

const nestedTabsFormSchema = ref({
    mainHeader: {
        type: "header",
        label: "Application Configuration",
        size: 12,
        props: {
            variant: "primary"
        }
    },
    appName: {
        type: "input",
        label: "Application Name",
        placeholder: "Enter application name",
        required: true,
        size: 12
    },
    mainTabs: {
        type: "tabs",
        label: "Configuration Sections",
        size: 12,
        items: {
            general: {
                label: "General",
                schema: {
                    appVersion: {
                        type: "input",
                        label: "Version",
                        placeholder: "1.0.0",
                        size: 6
                    },
                    appEnvironment: {
                        type: "combobox",
                        label: "Environment",
                        size: 6,
                        items: [
                            { value: "dev", label: "Development" },
                            { value: "test", label: "Testing" },
                            { value: "prod", label: "Production" }
                        ]
                    },
                    generalSettings: {
                        type: "tabs",
                        label: "Settings",
                        size: 12,
                        items: {
                            appearance: {
                                label: "Appearance",
                                schema: {
                                    theme: {
                                        type: "combobox",
                                        label: "Theme",
                                        size: 6,
                                        items: [
                                            { value: "light", label: "Light" },
                                            { value: "dark", label: "Dark" },
                                            { value: "auto", label: "Auto" }
                                        ]
                                    },
                                    primaryColor: {
                                        type: "input",
                                        label: "Primary Color",
                                        placeholder: "#3b82f6",
                                        size: 6
                                    },
                                    fontFamily: {
                                        type: "input",
                                        label: "Font Family",
                                        placeholder: "Inter, sans-serif",
                                        size: 12
                                    }
                                }
                            },
                            localization: {
                                label: "Localization",
                                schema: {
                                    defaultLanguage: {
                                        type: "combobox",
                                        label: "Default Language",
                                        size: 6,
                                        items: [
                                            { value: "en", label: "English" },
                                            { value: "es", label: "Spanish" },
                                            { value: "fr", label: "French" },
                                            { value: "de", label: "German" }
                                        ]
                                    },
                                    timezone: {
                                        type: "combobox",
                                        label: "Default Timezone",
                                        size: 6,
                                        items: [
                                            { value: "utc", label: "UTC" },
                                            { value: "est", label: "Eastern (EST)" },
                                            { value: "cst", label: "Central (CST)" },
                                            { value: "pst", label: "Pacific (PST)" }
                                        ]
                                    },
                                    dateFormat: {
                                        type: "input",
                                        label: "Date Format",
                                        placeholder: "MM/DD/YYYY",
                                        size: 6
                                    },
                                    timeFormat: {
                                        type: "input",
                                        label: "Time Format",
                                        placeholder: "HH:mm",
                                        size: 6
                                    }
                                }
                            }
                        }
                    }
                }
            },
            security: {
                label: "Security",
                schema: {
                    authMethod: {
                        type: "combobox",
                        label: "Authentication Method",
                        size: 6,
                        items: [
                            { value: "jwt", label: "JWT" },
                            { value: "oauth2", label: "OAuth 2.0" },
                            { value: "saml", label: "SAML" }
                        ]
                    },
                    sessionTimeout: {
                        type: "input",
                        label: "Session Timeout (minutes)",
                        placeholder: "30",
                        size: 6
                    },
                    securityTabs: {
                        type: "tabs",
                        label: "Security Settings",
                        size: 12,
                        items: {
                            password: {
                                label: "Password Policy",
                                schema: {
                                    passwordMinLength: {
                                        type: "input",
                                        label: "Minimum Length",
                                        placeholder: "8",
                                        size: 6
                                    },
                                    requireUppercase: {
                                        type: "toggle",
                                        label: "Require Uppercase",
                                        size: 6
                                    },
                                    requireNumbers: {
                                        type: "toggle",
                                        label: "Require Numbers",
                                        size: 6
                                    },
                                    requireSpecialChars: {
                                        type: "toggle",
                                        label: "Require Special Characters",
                                        size: 6
                                    }
                                }
                            },
                            mfa: {
                                label: "Multi-Factor Auth",
                                schema: {
                                    enableMFA: {
                                        type: "toggle",
                                        label: "Enable MFA",
                                        size: 6
                                    },
                                    mfaMethod: {
                                        type: "combobox",
                                        label: "MFA Method",
                                        size: 6,
                                        items: [
                                            { value: "app", label: "Authenticator App" },
                                            { value: "sms", label: "SMS" },
                                            { value: "email", label: "Email" }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            },
            integrations: {
                label: "Integrations",
                schema: {
                    enableAPI: {
                        type: "toggle",
                        label: "Enable API",
                        size: 6
                    },
                    apiKey: {
                        type: "input",
                        label: "API Key",
                        placeholder: "Enter your API key",
                        size: 6
                    },
                    integrationNotes: {
                        type: "textarea",
                        label: "Integration Notes",
                        placeholder: "Additional integration details...",
                        size: 12
                    }
                }
            }
        }
    },
    submit: {
        type: "submit",
        label: "Save Configuration",
        size: 12
    }
});

const handleNestedTabsFormSubmit = (data) => {
    console.log("Nested tabs form submitted:", data);
    alert("Configuration saved successfully!");
};
</script>
