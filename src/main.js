import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import globalComponents from "./components/";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import homeView from "/src/view/homeView.vue";
import likedView from "/src/view/likedView.vue";
import regView from "/src/view/regView.vue";
import adminView from "/src/view/adminView.vue";
import loginView from "/src/view/loginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeView,
  },
  {
    path: "/liked",
    name: "liked",
    component: likedView,
  },
  {
    path: "/reg",
    name: "reg",
    component: regView,
  },
  {
    path: "/admin",
    name: "admin",
    component: adminView,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();
const app = createApp(App);

app.use(globalComponents);
app.use(pinia);
app.use(router);

app.mount("#app");
