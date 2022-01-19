<script lang="ts">
import HelloWorld from 'atoms/HelloWorld.vue';
import api from '../../services/api';

export default {
  name: 'HomeTemplate',
  components: {
    HelloWorld,
  },
  created() {
    const resp = api.get('/tasks');
    resp.then((data) => {
      console.log(data.data);
    });
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
