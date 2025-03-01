<template>
    <c-card
        variant="flat"
        class="mx-auto px-3 py-4 sm:p-6 flex flex-col center"
    >
        <h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">More updates...</h3>
        <p class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">Do you want to get notified when a new component is added to CMMV? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.</p>

        <div class="flex items-center mt-2">
            <c-form class="flex w-full">
                <c-input
                    id="custom"
                    label="Your email address..."
                    class="flex-1 mr-6"
                ></c-input>

                <c-button
                    size="md"
                    type="button"
                    class="shrink-0 h-11 px-7"
                >
                    Subscribe
                </c-button>
            </c-form>
        </div>

        <span class="mb-0">By subscribing, you agree with <a href="/terms-of-service">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>.</span>
    </c-card>
</template>
