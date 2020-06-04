import Vue from "vue";
import VueRouter from "vue-router";
// import Portada from "../views/Portada.vue";
const Portada = () => import("./../views/Portada.vue");
const Post = () => import("./../views/Post.vue");
const Articulo = () => import("./../views/Articulo.vue");
const SobreMi = () => import("./../views/SobreMi.vue");
const Contacto = () => import("./../views/Contacto.vue");


// Otro método para LazyLoading.

// Con el método import(/* webpackChunkName: "componente" */ "./../views/componente.vue") ya se realiza LazyLoading.

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
  /* Redirecciones */
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/post/:articulo",
    name: "Post",
    component: Post,
    // component: () =>
    //   import(/* webpackChunkName: "post" */ "./../views/Post.vue"),
    children: [
      {
        path: "/",
        name: "Articulo",
        component: Articulo,
        // component: () =>
        //   import(/* webpackChunkName: "post" */ "./../views/Articulo.vue"),
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
        name: "Error404Admin",
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
    component: Contacto,
    // component: () =>
    //   import(/* webpackChunkName: "contacto" */ "./../views/Contacto.vue"),
    alias: "/contactame" // Puede ser un array cuando son necesarios más de un alias.
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
    // component: () =>
    //   import(/* webpackChunkName: "sobremi" */ "./../views/SobreMi.vue"),
    alias: ["/acerca"] // Puede ser un array cuando son necesarios más de un alias.
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
