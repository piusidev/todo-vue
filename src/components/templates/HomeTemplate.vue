<script>
import TodoList from '@/components/organisms/List.vue';

export default {
  name: 'HomeTemplate',
  components: {
    TodoList,
  },
};
</script>

<template>
  <div class="home">
    <todo-list />
  </div>
</template>

<style>
.home {
  display: flex;
  margin: 0 auto;
  padding: 2rem;

  align-items: center;
  justify-content: center;

  max-width: 600px;
  height: 100vh;
}
</style>
