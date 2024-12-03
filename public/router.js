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
import LoaderPage from "./views/components/LoaderPage.vue";

//Layout
import AlertPage from "./views/layout/AlertPage.vue";
import AvatarPage from "./views/layout/AvatarPage.vue";
import CardPage from "./views/layout/CardPage.vue";
import ToolbarPage from "./views/layout/ToolbarPage.vue";

//Form
import FormPage from "./views/form/FormPage.vue";
import InputPage from "./views/form/InputPage.vue";
import CheckboxPage from "./views/form/CheckboxPage.vue";
import TextareaPage from "./views/form/TextareaPage.vue";
import TogglePage from "./views/form/TogglePage.vue";
import RadioPage from "./views/form/RadioPage.vue";
import SliderPage from "./views/form/SliderPage.vue";

//Overlays
import NotificationPage from "./views/overlays/NotificationPage.vue";

const routes = [
    { path: '/', component: IndexPage },
    { path: '/button', component: ButtonPage },
    { path: '/icon', component: IconPage },
	{ path: '/flags', component: FlagsPage },
    { path: '/tooltip', component: TooltipPage },
    { path: '/progress-bar', component: ProgressBarPage },
    { path: '/progress-circular', component: ProgressCircularPage },
    { path: '/badge', component: BadgePage },
    { path: '/loader', component: LoaderPage },
	
	//Layout
    { path: '/alert', component: AlertPage },
    { path: '/avatar', component: AvatarPage },
	{ path: '/card', component: CardPage },
    { path: '/toolbar', component: ToolbarPage },

	//Form
	{ path: '/form', component: FormPage },
	{ path: '/input', component: InputPage },
	{ path: '/checkbox', component: CheckboxPage },
    { path: '/textarea', component: TextareaPage },
    { path: '/toggle', component: TogglePage },
    { path: '/radio', component: RadioPage },
    { path: '/slider', component: SliderPage },

    //Overlays
    { path: '/notification', component: NotificationPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;