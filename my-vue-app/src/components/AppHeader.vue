<!-- src/components/Header.vue -->
  <template>
    <VegaBreadcrumb
      :items="breadcrumbItems"
      max-items="none"
    />
  </template>
  <script>
  import { VegaBreadcrumb, VegaFlex } from "@heartlandone/vega-vue";
  export default {
    data() {
      return {
        breadcrumbItems: [
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About",
            href: "",
          },
          {
            label: "Contact",
            href: "/AppForm.vue",
          },
          {
            label: "Services",
            href: "",
            tooltip: "More details about our services",
          },
        ],
      };
    },
    components: { VegaBreadcrumb, VegaFlex },
  };
  </script>
  
  
  
  <style scoped>
  .header {
    background-color: #333;
    padding: 1rem;
    width: 1000px;
    text-align: left;
  }
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  nav a.router-link-active {
    color: #42b983;
  }
  </style>