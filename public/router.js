import { createMemoryHistory, createRouter } from 'vue-router';

import IndexPage from "./views/IndexPage.vue";
import FirstStepsPage from "./views/FirstStepsPage.vue";

//Components
import AIChatPage from "./views/components/AIChatPage.vue";
import ButtonPage from "./views/components/ButtonPage.vue";
import TooltipPage from "./views/components/TooltipPage.vue";
import IconPage from "./views/components/IconPage.vue";
import FlagsPage from "./views/components/FlagsPage.vue";
import ProgressBarPage from "./views/components/ProgressBarPage.vue";
import ProgressCircularPage from "./views/components/ProgressCircularPage.vue";
import BadgePage from "./views/components/BadgePage.vue";
import LoaderPage from "./views/components/LoaderPage.vue";
import RatingPage from "./views/components/RatingPage.vue";

//Data
import ChartBarPage from "./views/data/ChartBarPage.vue";
import ChartLinePage from "./views/data/ChartLinePage.vue";
import ListPage from "./views/data/ListPage.vue";
import PaginationPage from "./views/data/PaginationPage.vue";
import TablePage from "./views/data/TablePage.vue";

//Layout
import AccordionPage from "./views/layout/AccordionPage.vue";
import AlertPage from "./views/layout/AlertPage.vue";
import AvatarPage from "./views/layout/AvatarPage.vue";
import CardPage from "./views/layout/CardPage.vue";
import DropdownPage from "./views/layout/DropdownPage.vue";
import SidebarPage from "./views/layout/SidebarPage.vue";
import SpeedDialPage from "./views/layout/SpeedDialPage.vue";
import TabsPage from "./views/layout/TabsPage.vue";
import ToolbarPage from "./views/layout/ToolbarPage.vue";
import NavbarPage from "./views/layout/NavbarPage.vue";

//Form
import AutocompletePage from "./views/form/AutocompletePage.vue";
import FormPage from "./views/form/FormPage.vue";
import InputPage from "./views/form/InputPage.vue";
import NumberInputPage from "./views/form/NumberInputPage.vue";
import OtpInputPage from "./views/form/OtpInputPage.vue";
import CheckboxPage from "./views/form/CheckboxPage.vue";
import TextareaPage from "./views/form/TextareaPage.vue";
import TogglePage from "./views/form/TogglePage.vue";
import RadioPage from "./views/form/RadioPage.vue";
import SliderPage from "./views/form/SliderPage.vue";
import ComboboxPage from "./views/form/ComboboxPage.vue";
import TimepickerPage from "./views/form/TimepickerPage.vue";
import DatepickerPage from "./views/form/DatepickerPage.vue";
import FileUploadPage from "./views/form/FileUploadPage.vue";

//Graph
import GraphBoxPage from "./views/graph/GraphBoxPage.vue";
import GraphNodePage from "./views/graph/GraphNodePage.vue";

//Overlays
import DialogPage from "./views/overlays/DialogPage.vue";
import NotificationPage from "./views/overlays/NotificationPage.vue";
import OverlayPage from "./views/overlays/OverlayPage.vue";

const routes = [
    //
    { path: '/', component: IndexPage },
    { path: '/introduction', component: IndexPage },
    { path: '/first-steps', component: FirstStepsPage },

    //Components
    { path: '/ai-chat', component: AIChatPage },
    { path: '/badge', component: BadgePage },
    { path: '/button', component: ButtonPage },
    { path: '/flags', component: FlagsPage },
    { path: '/icon', component: IconPage },
	{ path: '/loader', component: LoaderPage },
    { path: '/progress-bar', component: ProgressBarPage },
    { path: '/progress-circular', component: ProgressCircularPage },
    { path: '/rating', component: RatingPage },
    { path: '/tooltip', component: TooltipPage },

    //Data
    { path: '/chart-bar', component: ChartBarPage },
    { path: '/chart-line', component: ChartLinePage },
    { path: '/list', component: ListPage },
    { path: '/pagination', component: PaginationPage },
    { path: '/table', component: TablePage },

	//Layout
    { path: '/accordion', component: AccordionPage },
    { path: '/alert', component: AlertPage },
    { path: '/avatar', component: AvatarPage },
	{ path: '/card', component: CardPage },
    { path: '/dropdown', component: DropdownPage },
    { path: '/navbar', component: NavbarPage },
    { path: '/sidebar', component: SidebarPage },
    { path: '/speed-dial', component: SpeedDialPage },
    { path: '/tabs', component: TabsPage },
    { path: '/toolbar', component: ToolbarPage },

	//Form
    { path: '/autocomplete', component: AutocompletePage },
    { path: '/checkbox', component: CheckboxPage },
    { path: '/combobox', component: ComboboxPage },
    { path: '/datepicker', component: DatepickerPage },
    { path: '/file-upload', component: FileUploadPage },
	{ path: '/form', component: FormPage },
	{ path: '/input', component: InputPage },
    { path: '/number-input', component: NumberInputPage },
    { path: '/otp-input', component: OtpInputPage },
	{ path: '/radio', component: RadioPage },
    { path: '/slider', component: SliderPage },
    { path: '/textarea', component: TextareaPage },
    { path: '/timepicker', component: TimepickerPage },
    { path: '/toggle', component: TogglePage },

    //Graph
    { path: '/graph-box', component: GraphBoxPage },
    { path: '/graph-node', component: GraphNodePage },

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
