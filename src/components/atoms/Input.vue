<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      message: '',
    };
  },
};
</script>

<template>
  <div class="new-task">
    <input v-model="message" placeholder="Write a new task" />
  </div>
</template>

<style scoped>
.new-task {
  width: 100%;
  padding: 1rem;
}
input {
  width: 100%;
  border-radius: 1rem;
  padding: 1rem 2rem;
  background: var(--details);
  backdrop-filter: blur(1rem);
}
</style>
