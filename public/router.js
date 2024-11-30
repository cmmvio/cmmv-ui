import { createMemoryHistory, createRouter } from 'vue-router';

import IndexPage from "./views/IndexPage.vue";

//Components
import ButtonPage from "./views/components/ButtonPage.vue";
import TooltipPage from "./views/components/TooltipPage.vue";
import IconPage from "./views/components/IconPage.vue";
import FlagsPage from "./views/components/FlagsPage.vue";
import ProgressBarPage from "./views/components/ProgressBarPage.vue";
import ProgressCircularPage from "./views/components/ProgressCircularPage.vue";
import BadgePage from "./views/components/BadgePage.vue";

//Layout
import CardPage from "./views/layout/CardPage.vue";
import ToolbarPage from "./views/layout/ToolbarPage.vue";

//Form
import FormPage from "./views/form/FormPage.vue";
import InputPage from "./views/form/InputPage.vue";
import CheckboxPage from "./views/form/CheckboxPage.vue";
import TogglePage from "./views/form/TogglePage.vue";

//Overlays
import NotificationPage from "./views/NotificationPage.vue";

const routes = [
    { path: '/', component: IndexPage },
    { path: '/button', component: ButtonPage },
    { path: '/icon', component: IconPage },
	{ path: '/flags', component: FlagsPage },
    { path: '/tooltip', component: TooltipPage },
    { path: '/progress-bar', component: ProgressBarPage },
    { path: '/progress-circular', component: ProgressCircularPage },
    { path: '/badge', component: BadgePage },
	
	//Layout
	{ path: '/card', component: CardPage },
    { path: '/toolbar', component: ToolbarPage },

	//Form
	{ path: '/form', component: FormPage },
	{ path: '/input', component: InputPage },
	{ path: '/checkbox', component: CheckboxPage },
    { path: '/toggle', component: TogglePage },

    //Overlays
    { path: '/notification', component: NotificationPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;