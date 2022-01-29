<script>
import api from '@/services/api';

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
    };
  },
  methods: {
    createTodo() {
      this.handleDisabled();

      const resp = api.post('/tasks', this.todo);
      resp.then(() => {
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

  backface-visibility: hidden;
  transform: translateZ(0) scale(101%);
}

input:disabled {
  opacity: 0.4;
}
</style>
