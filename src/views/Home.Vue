<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our Vue.js app.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    setup() {
      console.log('Home page mounted');
    },
  };
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
    text-align: center;
  }
  </style>