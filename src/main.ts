import { computed, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {fromBase64} from "@/services/utils";
import "@/assets/scss/casual.scss";

const app = createApp(App).use(store).use(router)

app.config.globalProperties.$fromBase64 = fromBase64;

app.mount("#app");
