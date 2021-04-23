import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "./components/Pages/AboutApp.vue";
import Players from "./components/Pages/Players.vue";
import Timetable from "./components/Pages/Timetable.vue";
import Table from "./components/Pages/Table.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Players },
    { path: "/about", component: AboutApp },
    { path: "/timetable", component: Timetable },
    { path: "/table", component: Table },
  ],
});

export default router;
