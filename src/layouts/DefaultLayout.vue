<template>
    <div class="layout">
      <header-component />
      <main>
        <!-- Router view renders the matched page component -->
        <router-view />
      </main>
      <footer-component />
    </div>
  </template>

<script>
import HeaderComponent from '../components/AppHeader.vue';
import FooterComponent from '../components/AppFooter.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>