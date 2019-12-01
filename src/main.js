import Vue from 'vue'
import elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue'


Vue.config.productionTip = false;
Vue.use(elementui);



new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
