<template>
  <section class="fade" :style="`height:${height}`">
    <div class="list">
      <div v-for="todo in todos.state.list" :key="todo.id">
        <todo-item :todo="todo" />
      </div>
    </div>
  </section>
</template>

<script>
import TodoItem from '@/components/molecules/Todo.vue';

import { todos } from '@/store';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    height: {
      type: String,
      required: false,
      default: '100%',
    },
  },
  data() {
    return {
      todos,
    };
  },
  watch: {
    todos(value) {
      console.log(value);
    },
  },
  async created() {
    await this.todos.getTodos();
  },
};
</script>

<style>
.fade {
  width: 100%;
  height: 100%;
  position: relative;
}

.list {
  width: 100%;
  height: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
}

.fade:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 1rem;
  left: 0;
  top: 0;
  background: linear-gradient(180deg, var(--background) 10%, transparent 90%);
}

.fade:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 1rem;
  left: 0;
  bottom: 0;
  background: linear-gradient(0deg, var(--background) 10%, transparent 90%);
}

.list::-webkit-scrollbar {
  display: none;
}
</style>
