<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import DataTable from './components/DataTable.vue';
import Navbar1 from './components/Navbar1.vue';
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<Navbar1/>

<RouterView />

<DataTable/>

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
