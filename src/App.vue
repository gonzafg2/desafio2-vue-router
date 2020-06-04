<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'Portada'}">Portada</router-link> |
      <router-link to="/post/1">Posts</router-link> |
      <router-link :to="{name: 'Contacto'}">Contacto</router-link> |
      <router-link :to="{name: 'SobreMi'}">Sobre Mí</router-link>
    </div>
    <transition name="v8-transition">
      <router-view />
    </transition>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {Footer},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.v8-transition-enter-active,
.v8-transition-leave-active {
  transition: opacity 100ms;
}
.v8-transition-enter,
.v8-transition-leave-to {
  opacity: 0;
}
.v8-transition-enter-to,
.v8-transition-leave {
  opacity: 1;
}
</style>
