<script>
import store from '@/store';
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
      message: '',
      disabled: false,
    };
  },
  computed: {
    todo() {
      return store.state.todo;
    },
  },
  watch: {
    message(value) {
      store.state.todo.title = value;
    },
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
      this.message = '';
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
      v-model="message"
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

  transition: all 300ms ease-in-out;
}

input:focus {
  background: var(--white);
  box-shadow: var(--shadow);
}

input:disabled {
  opacity: 0.4;
}
</style>
