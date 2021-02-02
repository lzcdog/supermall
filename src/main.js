import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import store from './store/index'
import 'vant/lib/index.css';
import Vuelazyload from 'vue-lazyload';
import Toast from '@/components/common/toast';
import FastClick from 'fastclick'

FastClick.attach(document.body)
Vue.use(Vuelazyload,{
  loading:require('./assets/img/common/微信截图_20210202190026.png')
})
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Toast);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
