import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import IndexComponent from './pages/index';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    {
      path: '/', component: IndexComponent
    }
  ]
});

const app = new Vue({
  el: '#app',
  router,
  render() {
    return <router-view></router-view>;
  }
});

export default app;
