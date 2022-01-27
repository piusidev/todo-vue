<script lang="ts">
import HomeTemplate from '@/components/templates/HomeTemplate.vue';

export default {
  name: 'App',
  components: {
    HomeTemplate,
  },
};
</script>

<template>
  <home-template />
</template>

<style>
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  font-size: 100%;
  list-style-type: none;
  background: var(--background);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --background: #e6e6ec;
  --white: #ffffff;
  --error: #c50000;
  --success: #50fa7b;
  --warning: #f5a623;
}
</style>
