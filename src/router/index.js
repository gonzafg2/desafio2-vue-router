import Vue from "vue";
import VueRouter from "vue-router";
import Portada from "../views/Portada.vue";

Vue.use(VueRouter);

const routes = [
  /* Redirecciones */
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/inicio",
    redirect: "/",
  },
  {
    path: "/portada",
    redirect: "/",
  },
  {
    path: "/contactame",
    redirect: "/contacto"
  },
  {
    path: "/acerca",
    redirect: "/sobremi"
  },
  /* Redirecciones */
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/post/:articulo",
    name: "Post",
    component: () =>
      import(/* webpackChunkName: "post" */ "./../views/Post.vue"),
    children: [
      {
        path: "/",
        name: "Articulo",
        component: () =>
          import(/* webpackChunkName: "post" */ "./../views/Articulo.vue"),
      },
    ],
  },
  {
    path: "/administrador/:administrador",
    name: "Administrador",
    component: () =>
      import(
        /* webpackChunkName: "administrador" */ "./../views/Administrador.vue"
      ),
    children: [
      {
        path: "/administrador/simple",
        name: "AdminSimple",
        component: () =>
          import(
            /* webpackChunkName: "administradorSimple" */ "./../views/AdminSimple.vue"
          ),
      },
      {
        path: "/administrador/avanzado",
        name: "AdminAvanzado",
        component: () =>
          import(
            /* webpackChunkName: "administradorSimple" */ "./../views/AdminAvanzado.vue"
          ),
      },
      {
        path: "/administrador/*",
        name: "Error404",
        component: () =>
          import(
            /* webpackChunkName: "error404" */ "./../components/Error404.vue"
          ),
      },
    ],
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
    name: "Error404",
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
