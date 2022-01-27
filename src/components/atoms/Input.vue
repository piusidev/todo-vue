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
  <input v-model="message" />
</template>

<style scoped>
input {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid;
}
</style>
