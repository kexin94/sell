// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import 'common/stylus/index.styl';
/* 1.定义 (路由) 组件。 */
import Goods from 'components/Goods/Goods.vue';
import Ratings from 'components/Ratings/Ratings.vue';
import Seller from 'components/Seller/Seller.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
/* 2.定义路由 */
const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller },
  { path: '*', redirect: '/goods' }
];
/* 3.创建 router 实例，然后传 `routes` 配置 */
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass: 'active'
});
/* 4.创建和挂载根实例。 */
new Vue({
  router
}).$mount('#app');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
