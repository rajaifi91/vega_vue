<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background-color: #333;
    padding: 1rem;
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