import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia, PiniaVuePlugin } from "pinia";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Toasted from "vue-toasted";

// Toasted - default options
Vue.use(Toasted, {
  duration: 3000,
  type: "success",
});

// Loading
Vue.use(Loading);

// Load icons - leaflet
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Pinia
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
const store = createPinia();

// axios deafult api url
axios.defaults.baseURL = "https://localhost:8443/api/";

//Vue.config.productionTip = false;

new Vue({
  router,
  store,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
