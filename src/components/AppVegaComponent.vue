<template>
    <vega-card background-color="bg-backdrop-popover" padding="size-32">
      <vega-accordion :accordion-title="accordionTitle">
        <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -->
        <div slot="content">Email address you entered is {{ emailValue }}</div>
      </vega-accordion>
    </vega-card>
  
    <vega-input label="Email Address" required="true" email="true" v-model="emailValue">
    </vega-input>
  </template>

<script lang="ts">
export default {
  name: 'SimpleComponent',
  data: function () {
    return {
      accordionTitle: 'This is title.',
      emailValue: ''
    };
  },
  created: function () {},
};
</script>