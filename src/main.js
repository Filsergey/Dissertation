import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './Main.vue';

import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ],
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(Main),
});
