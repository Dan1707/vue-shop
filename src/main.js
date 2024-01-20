import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import globalComponents from "./components/";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(globalComponents);
app.use(pinia);
app.mount("#app");
