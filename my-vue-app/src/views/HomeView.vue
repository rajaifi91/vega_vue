<template>
    <div class="home">
      <h1>Welcome Home</h1>
      <p>Counter: {{ count }}</p>
      <button @click="increment">Increment</button>
      <HelloWorld msg="Hello from Home!" />

  <VegaCard
    padding="size-24"
    margin="size-8"
    variant="shadow"
    background-color="bg-primary"
  >
    <div className="v-font-p2-short v-text-primary">Content for the card goes here.</div>
  </VegaCard>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import { VegaCard } from "@heartlandone/vega-vue"
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  </style>