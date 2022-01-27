<template>
  <section class="list">
    <div v-for="todo in todos" :key="todo.id">
      <todo-item
        :todo-id="todo.id"
        :title="todo.title"
        :done="todo.completed"
      />
    </div>
  </section>
</template>

<script>
import TodoItem from '@/components/molecules/Todo.vue';
import api from '../../services/api';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    const resp = await api.get('/tasks');
    this.todos = await resp.data;
  },
};
</script>

<style>
.list {
  width: 100%;
  max-height: 80vh;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
}

/* .list:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 50%;
  left: 0;
  bottom: 0;
  background: linear-gradient(0deg, var(--background) 30%, transparent 70%);
} */

.list::-webkit-scrollbar {
  width: 12px;
}

.list::-webkit-scrollbar-track {
  background: none;
}

.list::-webkit-scrollbar-thumb {
  background: var(--white);
  box-shadow: inset 0 12px 24px rgb(0 0 0 / 2%);

  border-radius: 20px;
  border: none;
}
</style>
