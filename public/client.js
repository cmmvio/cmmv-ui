import "./tailwind.css";

import { createApp } from 'vue';
import App from './app.vue';
import { createI18n } from 'vue-i18n';
import VueHighlightJS from 'vue-highlightjs';
import Router from './router.js';
import CmmvUI from "../src/module.js";

const i18n = createI18n({
    silentTranslationWarn: true, 
    silentFallbackWarn: true,   
    missingWarn: false,        
    fallbackWarn: false,
});

const app = createApp(App);
app.use(VueHighlightJS);
app.use(Router);
app.use(i18n);
app.use(CmmvUI);
app.mount('#app');
