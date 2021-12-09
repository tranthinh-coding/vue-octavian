import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { useComponents, useDirectives } from "@/vueRegister/index";

// Style
import "./assets/css/index.css";

const app = createApp(App);

useComponents(app);
useDirectives(app);

app.use(store);
app.use(router);

app.mount("#app");
