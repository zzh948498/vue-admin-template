import { createApp } from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import SvgIcon from '@/components/SvgIcon/index.vue'; // svg component
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import '@/styles/index.scss'; // global css

import App from './App.vue';
import store from './store';
import router from './router';
import { HelpFilled, CaretBottom } from '@element-plus/icons-vue';
import '@/icons'; // icon
import '@/permission'; // permission control
const app = createApp(App);
app.config.globalProperties.productionTip = false;
app.component('SvgIcon', SvgIcon);
app.component('HelpFilled', HelpFilled);
app.component('CaretBottom', CaretBottom);

app.use(ElementPlus, {
    locale: zhCn,
});
app.use(router);
app.use(store);
app.mount('#app');
