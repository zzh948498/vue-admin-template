import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';// svg component
import 'virtual:svg-icons-register';
// register globally
Vue.component('SvgIcon', SvgIcon);

// const req = require.context('./svg', false, /\.svg$/);
// const requireAll = requireContext => requireContext.keys().map(requireContext);
// requireAll(req);
