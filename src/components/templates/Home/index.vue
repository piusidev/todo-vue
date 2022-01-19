<script>
import HelloWorld from '../../atoms/Hello/index.vue';

export default {
  name: 'HomeTemplate',
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <div class="home">
    <hello-world />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  margin: 0 auto;
  padding: 2rem;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
}
</style>
