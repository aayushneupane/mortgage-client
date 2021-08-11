import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import filter from "./filters";

createApp(App)
  .use(store)
  .use(router)
  .use(filter)
  .mount("#app");
