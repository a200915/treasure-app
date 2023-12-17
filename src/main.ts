import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/dist/index.css";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import i18n from "./locales/index";

const app = createApp(App);
app.use(i18n);

setupRouter(app);
setupStore(app);

app.mount("#app");
