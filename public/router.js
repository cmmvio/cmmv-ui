import { createMemoryHistory, createRouter } from 'vue-router';

import IndexPage from "./views/IndexPage.vue";

//Components
import ButtonPage from "./views/ButtonPage.vue";
import TooltipPage from "./views/TooltipPage.vue";
import IconPage from "./views/IconPage.vue";
import FlagsPage from "./views/FlagsPage.vue";
import ProgressCircularPage from "./views/ProgressCircularPage.vue";

//Layout
import CardPage from "./views/CardPage.vue";

//Form
import FormPage from "./views/FormPage.vue";
import InputPage from "./views/InputPage.vue";
import CheckboxPage from "./views/CheckboxPage.vue";
import TogglePage from "./views/TogglePage.vue";

const routes = [
    { path: '/', component: IndexPage },
    { path: '/button', component: ButtonPage },
    { path: '/icon', component: IconPage },
	{ path: '/flags', component: FlagsPage },
    { path: '/tooltip', component: TooltipPage },
    { path: '/progress-circular', component: ProgressCircularPage },
	
	//Layout
	{ path: '/card', component: CardPage },

	//Form
	{ path: '/form', component: FormPage },
	{ path: '/input', component: InputPage },
	{ path: '/checkbox', component: CheckboxPage },
    { path: '/toggle', component: TogglePage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;