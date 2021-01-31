import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import store from './store/index'
import 'vant/lib/index.css';
import Toast from '@/components/common/toast'
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Toast);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
