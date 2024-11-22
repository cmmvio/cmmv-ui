import { createMemoryHistory, createRouter } from 'vue-router';

import IndexPage from "./views/index.vue";
import ButtonPage from "./views/button.vue";
import TooltipPage from "./views/tooltip.vue";
import IconPage from "./views/icon.vue";
import CheckboxPage from "./views/checkbox.vue";
import TogglePage from "./views/toggle.vue";

const routes = [
    { path: '/', component: IndexPage },
    { path: '/button', component: ButtonPage },
    { path: '/icon', component: IconPage },
    { path: '/tooltip', component: TooltipPage },
    { path: '/checkbox', component: CheckboxPage },
    { path: '/toggle', component: TogglePage },
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;