import { createApp } from 'vue';
import App from './app.vue';
import { createI18n } from 'vue-i18n';
import VueHighlightJS from 'vue-highlightjs';
import { Money3Directive } from 'v-money3';
import Router from './router.js';
import CmmvUI from "../src/module.js";

const i18n = createI18n({
    silentTranslationWarn: true,
    silentFallbackWarn: true,
    missingWarn: false,
    fallbackWarn: false,
});

const app = createApp(App);
app.directive('money3', Money3Directive)
app.use(VueHighlightJS);
app.use(Router);
app.use(i18n);
app.use(CmmvUI);
app.mount('#app');
