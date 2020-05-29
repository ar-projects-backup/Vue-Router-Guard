import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    setAuthentication(state, status) {
      this.state.authenticated = status;
    }
  }
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
            next('login');
        } else {
            next();
        }
      }      
    }
  ]
});

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
