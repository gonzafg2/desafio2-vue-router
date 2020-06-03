import Vue from "vue";
import VueRouter from "vue-router";
import Portada from "../views/Portada.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "./../views/Contacto.vue"),
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "./../views/SobreMi.vue"),
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "error404" */ "./../components/Error404.vue"),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
