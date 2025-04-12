<template>
  <VegaBox>
    <VegaCard
      :margin="{ bottom: 'size-32' }"
      padding="size-16"
      background-color="bg-page"
    >
      <VegaSectionTitle
        title="How to get started"
        description="Here's a quick overview of the process , from start to finish."
      ></VegaSectionTitle>
    </VegaCard>

    <VegaGrid
      :column="{ S: 1, M: 2, L: 3 }"
      gap="size-16"
    >
      <VegaCard
        background-color="bg-action-secondary-hover"
        padding="size-16"
      >
        <VegaSectionTitle
          title="Learn our quality standards"
          icon="fa-duotone fa-circle-1"
          description="Make sure your experience meets our bar for expertise, insider access, and connection."
        ></VegaSectionTitle>
      </VegaCard>
      <VegaCard
        background-color="bg-action-secondary-hover"
        padding="size-16"
      >
        <VegaSectionTitle
          title="Create an experience page"
          icon="fa-duotone fa-circle-2"
          description="Your page is how people find you. Make a great first impression by highlighting your expertise and adding high quality photos."
        ></VegaSectionTitle>
      </VegaCard>
      <VegaCard
        background-color="bg-action-secondary-hover"
        padding="size-16"
      >
        <VegaSectionTitle
          title="Start hosting your experience"
          icon="fa-duotone fa-circle-3"
          description="As long as your experience meets the standards, you're ready to add dates and start hosting."
        ></VegaSectionTitle>
      </VegaCard>
    </VegaGrid>
  </VegaBox>

  <VegaBox>
    <VegaGrid
      :column="{ S: 1, M: 2, L: 3 }"
      gap="size-16"
    >
      <VegaCard
        background-color="bg-action-secondary-hover"
        padding="size-16"
      >
        <VegaSectionTitle
          title="Learn our quality standards"
          icon="fa-duotone fa-circle-1"
          description="Make sure your experience meets our bar for expertise, insider access, and connection."
        ></VegaSectionTitle>
      </VegaCard>
      <VegaCard
        background-color="bg-action-secondary-hover"
        padding="size-16"
      >
        <VegaSectionTitle
          title="Create an experience page"
          icon="fa-duotone fa-circle-2"
          description="Your page is how people find you. Make a great first impression by highlighting your expertise and adding high quality photos."
        ></VegaSectionTitle>
      </VegaCard>
      <VegaCard
        background-color="bg-action-secondary-hover"
        padding="size-16"
      >
        <VegaSectionTitle
          title="Start hosting your experience"
          icon="fa-duotone fa-circle-3"
          description="As long as your experience meets the standards, you're ready to add dates and start hosting."
        ></VegaSectionTitle>
      </VegaCard>
    </VegaGrid>
  </VegaBox>


  <VegaLoadingIndicator
    mode="determinate"
    shape="bar"
    label="Loading 25%"
    hint="Please wait"
    :percent="25"
    size="small"
  />

  </template>
  
  <script>
  //import { ref } from 'vue'
  //import HelloWorld from '../components/HelloWorld.vue'
  import { VegaSectionTitle } from '@heartlandone/vega-vue';
  import { VegaCard } from "@heartlandone/vega-vue";
  import { VegaGrid } from '@heartlandone/vega-vue';
  import { VegaBox } from '@heartlandone/vega-vue';
  import { VegaFlex } from '@heartlandone/vega-vue';
  import { VegaLoadingIndicator } from '@heartlandone/vega-vue';
  import { VegaIcon } from '@heartlandone/vega-vue';
  //const count = ref(0)
  //const increment = () => {
   // count.value++
  //}
;
export default {
  data() {
    return {};
  },
  components: { VegaBox, VegaCard, VegaSectionTitle, VegaGrid, VegaFlex,VegaLoadingIndicator },
};

  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }
  </style>