<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// @ts-ignore
import AppForm from './components/AppForm.vue';
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <AppHeader/>
  <!--<div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </div>
  -->
  <RouterView />
  <AppForm/>
 <!-- <HelloWorld msg="Vite + Vue" />-->
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
}
nav a {
  margin-right: 10px;
}
</style>
