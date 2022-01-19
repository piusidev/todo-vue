<script setup lang="ts">
import HomeTemplate from './components/templates/Home/index.vue';

export default {
  name: 'App',
  components: {
    HomeTemplate,
  },
};
</script>

<template>
  <div>
    <home-template />
  </div>
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
