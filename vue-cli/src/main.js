import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import store from './store/store.js'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource); 

Vue.http.options.root = 'https://vuejs-stock-trader-proj.firebaseio.com/';

//Improving looks of funds using global filters
Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
});

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
