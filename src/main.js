import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "ant-design-vue";
import VueRes from "vue-resource";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(VueRes);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
