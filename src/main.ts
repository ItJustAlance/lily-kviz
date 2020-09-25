// Компоненты Vue

// Всё, что относится к Vue
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import App from './App.vue';


// components jquery

// Подключение скриптов jquery

// подключаем скролл


// Globally register all `_base`-prefixed components
import './components/_global';

// Активация плагинов Vue
Vue.use(Vuex);


Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');
