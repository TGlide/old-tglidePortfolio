// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("faIcon", FontAwesomeIcon);

// Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy, {
  defaultIconComponent: "faIcon",
  defaultIconPack: "fas"
});

// Font Awesome

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
