<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Navbar1 from './components/Navbar1.vue';
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Navbar1/>

 <!-- <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </div>-->
<RouterView />

<AppFooter/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
nav {
  margin-bottom: 20px;
  position: fixed;
  display: flex;
}
nav a {
  margin-right: 10px;
}
</style>
