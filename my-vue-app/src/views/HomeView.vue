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
        :margin="{ bottom: 'size-32' }"
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
        :margin="{ bottom: 'size-32' }"
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
        :margin="{ bottom: 'size-32' }"
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
  <VegaGrid :column="{ S: 1, M: 2, L: 3 }"
      gap="size-4" 
  >
    <!-- Header Row -->
    <div class="table-cell header-cell">Name</div>
    <div class="table-cell header-cell">Email</div>
    <div class="table-cell header-cell">Role</div>
    <!-- Data Row 1 -->
    <div class="table-cell">John Doe</div>
    <div class="table-cell">john@example.com</div>
    <div class="table-cell">Developer</div>
    <!-- Data Row 2 -->
    <div class="table-cell">Jane Smith</div>
    <div class="table-cell">jane@example.com</div>
    <div class="table-cell">Designer</div>
    <!-- Data Row 3 -->
    <div class="table-cell">John Smith</div>
    <div class="table-cell">john@example.com</div>
    <div class="table-cell">Java Developer</div>
    <!-- Data Row 4 -->
    <div class="table-cell">Jane Doe</div>
    <div class="table-cell">jane@example.com</div>
    <div class="table-cell">Web Designer</div>
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
  import { VegaSectionTitle } from '@heartlandone/vega-vue';
  import { VegaCard } from "@heartlandone/vega-vue";
  import { VegaGrid } from '@heartlandone/vega-vue';
  import { VegaBox } from '@heartlandone/vega-vue';
  import { VegaFlex } from '@heartlandone/vega-vue';
  import { VegaLoadingIndicator } from '@heartlandone/vega-vue';
  import { VegaIcon } from '@heartlandone/vega-vue'
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
  
    /* Optional: Style the table cells */
    .table-cell {
      padding: 8px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      text-align: left;
    }
    .header-cell {
      background-color: #e0e0e0;
      font-weight: bold;
    }
  </style>