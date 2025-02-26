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

//Data
import ListPage from "./views/data/ListPage.vue";
import PaginationPage from "./views/data/PaginationPage.vue";
import TablePage from "./views/data/TablePage.vue";

//Layout
import AccordionPage from "./views/layout/AccordionPage.vue";
import AlertPage from "./views/layout/AlertPage.vue";
import AvatarPage from "./views/layout/AvatarPage.vue";
import CardPage from "./views/layout/CardPage.vue";
import TabsPage from "./views/layout/TabsPage.vue";
import ToolbarPage from "./views/layout/ToolbarPage.vue";

//Form
import AutocompletePage from "./views/form/AutocompletePage.vue";
import FormPage from "./views/form/FormPage.vue";
import InputPage from "./views/form/InputPage.vue";
import OtpInputPage from "./views/form/OtpInputPage.vue";
import CheckboxPage from "./views/form/CheckboxPage.vue";
import TextareaPage from "./views/form/TextareaPage.vue";
import TogglePage from "./views/form/TogglePage.vue";
import RadioPage from "./views/form/RadioPage.vue";
import SliderPage from "./views/form/SliderPage.vue";
import DropdownPage from "./views/form/DropdownPage.vue";

//Overlays
import DialogPage from "./views/overlays/DialogPage.vue";
import NotificationPage from "./views/overlays/NotificationPage.vue";
import OverlayPage from "./views/overlays/OverlayPage.vue";

const routes = [
    //Components
    { path: '/', component: IndexPage },
    { path: '/button', component: ButtonPage },
    { path: '/icon', component: IconPage },
	{ path: '/flags', component: FlagsPage },
    { path: '/tooltip', component: TooltipPage },
    { path: '/progress-bar', component: ProgressBarPage },
    { path: '/progress-circular', component: ProgressCircularPage },
    { path: '/badge', component: BadgePage },
    { path: '/loader', component: LoaderPage },

    //Data
    { path: '/list', component: ListPage },
    { path: '/pagination', component: PaginationPage },
    { path: '/table', component: TablePage },

	//Layout
    { path: '/accordion', component: AccordionPage },
    { path: '/alert', component: AlertPage },
    { path: '/avatar', component: AvatarPage },
	{ path: '/card', component: CardPage },
    { path: '/tabs', component: TabsPage },
    { path: '/toolbar', component: ToolbarPage },

	//Form
    { path: '/autocomplete', component: AutocompletePage },
    { path: '/checkbox', component: CheckboxPage },
    { path: '/dropdown', component: DropdownPage },
	{ path: '/form', component: FormPage },
	{ path: '/input', component: InputPage },
    { path: '/otp-input', component: OtpInputPage },
	{ path: '/radio', component: RadioPage },
    { path: '/slider', component: SliderPage },
    { path: '/textarea', component: TextareaPage },
    { path: '/toggle', component: TogglePage },

    //Overlays
    { path: '/dialog', component: DialogPage },
    { path: '/notification', component: NotificationPage },
    { path: '/overlay', component: OverlayPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
