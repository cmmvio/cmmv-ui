<template>
    <BaseLayout>
        <h1>Code Tool</h1>

        <p class="mb-4">
            Esta ferramenta converte código para uma versão segura para HTML,
            substituindo caracteres especiais por suas entidades HTML correspondentes.
            Útil para incluir exemplos de código nas páginas de documentação.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="mb-6">
                <h2 class="text-lg font-medium mb-2">Código Original</h2>
                <c-textarea
                    v-model="code"
                    placeholder="Cole seu código aqui..."
                    class="font-mono text-sm"
                    customClass="max-h-[350px] h-[350px]"
                    :resize="false"

                />
                <div class="mt-4 flex space-x-4">
                    <c-button @click="convertCode" variant="primary">Converter</c-button>
                    <c-button @click="code = ''" variant="outline">Limpar</c-button>
                </div>
            </div>

            <div>
                <h2 class="text-lg font-medium mb-2">Código Convertido</h2>
                <div class="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md overflow-auto h-[364px] font-mono text-sm whitespace-pre-wrap">
                    {{ convertedCode || "O código convertido aparecerá aqui..." }}
                </div>
                <div class="mt-4 flex space-x-4">
                    <c-button @click="copyToClipboard" variant="primary" :disabled="!convertedCode">
                        {{ copied ? 'Copiado!' : 'Copiar' }}
                    </c-button>
                </div>
            </div>
        </div>

        <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
            <h3 class="text-lg font-medium mb-2">Como usar</h3>
            <ol class="list-decimal pl-6 space-y-2">
                <li>Cole seu código no painel da esquerda</li>
                <li>Clique em "Converter" para processar o código</li>
                <li>O resultado da conversão aparecerá no painel da direita</li>
                <li>Clique em "Copiar" para copiar o código convertido para a área de transferência</li>
                <li>Cole o código convertido no HTML de sua página de documentação</li>
            </ol>
        </div>
    </BaseLayout>
</template>

<script setup>
import { ref, watch } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";

const code = ref('');
const convertedCode = ref('');
const copied = ref(false);

const convertCode = () => {
    if (!code.value) return;

    convertedCode.value = `<pre><code class="code-highlight language-html">${code.value
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')}</code></pre>`;
};

const copyToClipboard = async () => {
    if (!convertedCode.value) return;

    try {
        await navigator.clipboard.writeText(convertedCode.value);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar texto: ', err);
    }
};

watch(convertedCode, () => {
    copied.value = false;
});
</script>

<style scoped>
.whitespace-pre-wrap {
    white-space: pre-wrap;
}
</style>

