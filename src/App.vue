<script lang="ts">
import HomeTemplate from '@/components/templates/HomeTemplate.vue';
import NotifyToast from '@/components/atoms/NotifyToast.vue';

export default {
  name: 'App',
  components: {
    HomeTemplate,
    NotifyToast,
  },
};
</script>

<template>
  <main>
    <home-template />
    <notify-toast />
  </main>
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
  backdrop-filter: blur(1rem);
  z-index: 0;
  overflow: hidden;
}

input,
button,
textarea {
  outline: none;
  border: none;
}

*,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --background: #ebecf0;
  --details: rgba(224, 224, 230, 0.9);

  --text: #ccc;
  --text-alt: #9999;

  --white: #ffffff;
  --black: #000000;

  --shadow: 0 12px 24px rgb(0 0 0 / 2%);
  --shadow-md: 0 12px 24px rgb(0 0 0 / 5%);
  --shadow-xl: 0 8px 8px rgb(0 0 0 / 10%);

  --transition: all 300ms ease-in-out;

  --active: #0071ff;
  --error: #c50000;
  --success: #50fa7b;
  --warning: #f5a623;
}
</style>
