import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "./components/Pages/AboutApp.vue";
import ThePlayers from "./components/Pages/ThePlayers.vue";
import TheGame from "./components/Pages/TheGame.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ThePlayers },
    { path: "/about", component: AboutApp },
    { path: "/game", component: TheGame },
  ],
});

export default router;
