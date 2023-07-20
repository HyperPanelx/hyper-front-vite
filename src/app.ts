import {createApp} from "vue";
import App from "./App.vue";

/////////// style
import './assets/app.css';

//// router
import router from "./router";


//////////// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCircleCheck,faXmark,faEye,faEyeSlash,faCircleExclamation,faBars,faChevronRight,faCompress,faExpand,faMagnifyingGlass,faBell,faMoon,faGear,faArrowRightFromBracket,faHouse,faUserGroup,faTowerBroadcast,faUser,faMicrochip,faServer,faHardDrive,faSignal,faChevronLeft,faKey,faPhone,faSliders,faDownload,faTrash,faRightLeft,faLock,faLockOpen,faArrowRight,faTriangleExclamation,faGhost,faUsersLine,faUserPlus,faSkullCrossbones,faTrashArrowUp,faCodePullRequest,faBan,faCheck} from '@fortawesome/free-solid-svg-icons'
import {faTelegram,faMegaport} from '@fortawesome/free-brands-svg-icons'
import {faCircle,faEnvelope,faSun,faPenToSquare} from '@fortawesome/free-regular-svg-icons'
library.add(faCircle,faCircleCheck,faXmark,faEye,faEyeSlash,faCircleExclamation,faBars,faChevronRight,faCompress,faExpand,faMagnifyingGlass,faBell,faEnvelope,faMoon,faSun,faGear,faArrowRightFromBracket,faHouse,faUserGroup,faTowerBroadcast,faUser,faMicrochip,faServer,faHardDrive,faSignal,faChevronLeft,faKey,faTelegram,faPhone,faCircle,faSliders,faPenToSquare,faDownload,faTrash,faRightLeft,faLock,faLockOpen,faArrowRight,faTriangleExclamation,faGhost,faUsersLine,faUserPlus,faMegaport,faSkullCrossbones,faTrashArrowUp,faCodePullRequest,faBan,faCheck)


///// dependencies
import Notifications from '@kyvg/vue3-notification'
import VueApexCharts from "vue3-apexcharts";
import { plugin ,defaultConfig} from '@formkit/vue';
import 'choices.js/public/assets/styles/choices.min.css'
import 'ladda/dist/ladda-themeless.min.css';
import config from '../formkit.config'
import vClickOutSide from './directive/vClickOutside'
import vFocus from './directive/vFocus'
import vFade from './directive/vFade'
import vCollapsible from './directive/vCollapsible'
import column from './components/grid/column.vue'
import container from './components/grid/container.vue'
import containerFull from './components/grid/containerFull.vue'
import row from './components/grid/row.vue'
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies'
///// app
const app=createApp(App)
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.use(VueApexCharts);
app.directive('collapse',vCollapsible);
app.directive('fade',vFade);
app.directive('click-outside',vClickOutSide);
app.directive('focus',vFocus);
app.component('row',row);
app.component('column',column);
app.component('container-full',containerFull);
app.component('container',container);
app.use(plugin, defaultConfig(config));
app.use(pinia);
app.use(VueCookies,{
    expires:10*24*60*60,
    path:'/'
})
app.use(Notifications);
app.mount('#v-app');
