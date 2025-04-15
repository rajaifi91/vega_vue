<template>
    <nav class="navbar1">
        <!-- Navigation Links -->
        <vega-flex direction="row" gap="medium">
          <vega-link
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.link"
            :class="{ active: selectedIndex === index }"
            @click="selectItem(index)"
          >
            <vega-icon :icon="item.icon" slot="prefix" size="small"></vega-icon>
            {{ item.label }}
          </vega-link>
        </vega-flex>
    </nav>
  </template>
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'NavBar',
    setup() {
      const navItems = ref([
        { label: 'Home', link: '#home', icon: 'hb-home' },
        { label: 'About', link: '#about', icon: 'hb-info' },
        { label: 'Contact', link: '#contact', icon: 'hb-contact' },
      ]);
  
      const selectedIndex = ref(0);
  
      const selectItem = (index) => {
        selectedIndex.value = index;
      };
  
      return {
        navItems,
        selectedIndex,
        selectItem,
      };
    },
  };
  </script>
  <style scoped>
  .navbar1 {
    background-color: rgb(108, 44, 44);
  }
  
  .logo {
    width: 100px;
    height: 30px;
  }
  
  vega-flex {
    display: flex;
    position: absolute;
  }
  
  vega-link {
    color: var(--vcl-color-neutral-700);
    text-decoration: none;
    font-weight: var(--vcl-font-weight-medium);
    display: flex;
    align-items: center;
    gap: var(--vcl-spacing-xsmall);
  }
  
  vega-link:hover {
    color: var(--vcl-color-primary-500);
  }
  
  vega-link.active {
    color: var(--vcl-color-primary-500);
    border-bottom: 2px solid var(--vcl-color-primary-500);
  }
  </style>