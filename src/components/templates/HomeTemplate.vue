<script>
import HelloWorld from '@/components/atoms/Hello.vue';
import TodoList from '@/components/organisms/List.vue';
import TodoInput from '@/components/atoms/Input.vue';

export default {
  name: 'HomeTemplate',
  components: {
    HelloWorld,
    TodoList,
    TodoInput,
  },
};
</script>

<template>
  <div class="container">
    <div class="home">
      <hello-world />
      <todo-input />
      <todo-list height="500px" />
    </div>
  </div>
</template>

<style>
.container {
  padding: 2rem;

  width: 100vw;
  height: 100vh;
}

.home {
  width: 100%;
  height: 100%;

  max-width: 600px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  align-items: center;
  justify-content: center;
}
</style>
