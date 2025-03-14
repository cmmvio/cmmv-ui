<template>
    <c-card variant="flat" class="mx-auto px-3 py-4 sm:p-6 flex flex-col center text-sm">
        <h3 class="mb-3 text-xl font-medium text-neutral-900 dark:text-white">More updates...</h3>
        <p class="mb-5 text-xs font-medium text-neutral-500 dark:text-neutral-300">Do you want to get notified when a
            new component is added to CMMV? Sign up for our newsletter and you'll be among the first to find out about
            new features, components, versions, and tools.</p>

        <div class="mt-2 mb-2">
            <c-form class="flex w-full">
                <div class="flex-1 mr-6">
                    <c-input id="custom" label="Your email address..."></c-input>
                </div>

                <div class="flex items-end">
                    <c-button size="md" type="button" class="shrink-0 h-[38px] px-7">
                        Subscribe
                    </c-button>
                </div>
            </c-form>
        </div>

        <span class="mb-0 text-xs">By subscribing, you agree with <a href="/terms-of-service">Terms of Service</a> and <a
                href="/privacy-policy">Privacy Policy</a>.</span>
    </c-card>
</template>
