<script>
import TodoList from '@/components/organisms/List.vue';
import TodoInput from '@/components/atoms/Input.vue';

export default {
  name: 'HomeTemplate',
  components: {
    TodoList,
    TodoInput,
  },
};
</script>

<template>
  <div class="home">
    <todo-input />
    <div class="teste">
      <todo-list />
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;

  align-items: center;
  justify-content: center;

  max-width: 600px;
  height: 100vh;
}

.teste {
  width: 100%;
  height: 70%;
}
</style>
