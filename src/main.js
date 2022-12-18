import "@/style.css";

import Vue from "vue";
import App from "./App.vue";
import VueScrollmagic from "vue-scrollmagic";
Vue.config.productionTip = false;
Vue.use(VueScrollmagic, {
  verical: true,
  globalSceneOptions: {
    triggerHook: "onLeave"
    // duration: "100%"
  },
  loglevel: 2,
  refreshInterval: 100
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
