<template>
    <BaseLayout>
        <h1>Textarea</h1>

        <c-card class="mx-auto mt-4 px-4 py-5 sm:p-6 flex flex-col items-center space-y-4">
            <div class="lg:w-2/5 w-full">
                <c-textarea></c-textarea>
            </div>
        </c-card>
        
        
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
</script>