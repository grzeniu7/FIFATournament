import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "./components/Pages/AboutApp.vue";
import ThePlayers from "./components/Pages/ThePlayers.vue";
import TheGame from "./components/Pages/TheGame.vue";
// import Timetable from "./components/Pages/Timetable.vue";
// import Table from "./components/Pages/Table.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ThePlayers },
    { path: "/about", component: AboutApp },
    { path: "/game", component: TheGame },
    // { path: "/timetable", component: Timetable },
    // { path: "/table", component: Table },
  ],
});

export default router;
