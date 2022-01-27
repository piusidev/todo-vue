<template>
  <section class="fade">
    <div class="list">
      <div v-for="todo in todos" :key="todo.id">
        <todo-item
          :todo-id="todo.id"
          :title="todo.title"
          :done="todo.completed"
        />
      </div>
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
  width: 12px;
}

.list::-webkit-scrollbar-track {
  background: none;
  margin: 1rem;
}

.list::-webkit-scrollbar-thumb {
  background: var(--details);
  box-shadow: inset var(--shadow);

  border-radius: 20px;
  border: none;
}
</style>
