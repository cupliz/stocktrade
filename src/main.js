import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import vuetify from './plugins/vuetify'
import VueFormWizard from 'vue-form-wizard'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'

Vue.use(BootstrapVue);

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFormWizard);

Vue.http.options.root = 'https://ng-http-e20af.firebaseio.com/';

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
});


new Vue({ // eslint-disable-line no-new
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})
