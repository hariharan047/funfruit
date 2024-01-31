import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheNutHouse from "../views/TheNutHouse.vue";
import FunFruit from "../views/FunFruit.vue";
import ProductosAGranel from "../views/ProductosAGranel.vue";
import AcercaDeFun from "../views/AcercaDeFun.vue";
import FundacionFun from "../views/FundacionFun.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/the-nut-house",
    name: "theNutHouse",
    component: TheNutHouse,
  },
  {
    path: "/fun-fruit",
    name: "funFruit",
    component: FunFruit,
  },
  {
    path: "/productos-a-granel",
    name: "productosAGranel",
    component: ProductosAGranel,
  },
  {
    path: "/acerca-de-fun",
    name: "acercaDeFun",
    component: AcercaDeFun,
  },
  {
    path: "/fundacion-fun",
    name: "fundacionFun",
    component: FundacionFun,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
