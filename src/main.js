import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";

import BasePage from "./components/UI/BasePage.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-page", BasePage);
app.component("base-button", BaseButton);

app.use(router);
app.use(store);

app.mount("#app");
