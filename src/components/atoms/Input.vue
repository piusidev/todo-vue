<script>
import api from '@/services/api';

import { todos, notify } from '@/store';

export default {
  name: 'TodoInput',
  props: {
    action: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      disabled: false,
      todo: {
        title: '',
        description: ' ',
      },
      todos,
      notify,
    };
  },
  methods: {
    createTodo() {
      this.handleDisabled();

      const resp = api.post('/tasks', this.todo);
      resp.then((resp) => {
        this.todos.addTodo(resp.data);
        this.notify.send({
          type: 'success',
          message: 'Todo created successfully',
        });
        this.handleDisabled();
        this.resetInput();
      });
    },
    resetInput() {
      this.todo.title = '';
    },
    handleDisabled() {
      this.disabled = !this.disabled;
    },
  },
};
</script>

<template>
  <div class="new-task">
    <input
      v-model="todo.title"
      :disabled="disabled"
      placeholder="Write a new task"
      @keyup.enter="createTodo"
    />
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

  transition: var(--transition);
}

input:focus {
  background: var(--white);
  box-shadow: var(--shadow-xl);
}

input:disabled {
  opacity: 0.4;
}
</style>
