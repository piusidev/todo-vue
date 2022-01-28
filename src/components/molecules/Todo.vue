<template>
  <div class="todo" :class="{ 'todo-done': currentTodo.completed }">
    <input
      :id="currentTodo.id"
      type="checkbox"
      name="status"
      :checked="currentTodo.completed"
      @change="handleStatus()"
    />
    <label :for="currentTodo.id">{{ currentTodo.title }}</label>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default() {
        return {
          id: '',
          title: '',
          description: '',
          completed: false,
        };
      },
      id: {
        type: String,
        required: true,
        default: '',
      },
      title: {
        type: String,
        required: true,
        default: '',
      },
      description: {
        type: String,
        required: true,
        default: '',
      },
      completed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  data() {
    return {
      currentTodo: this.todo,
    };
  },
  methods: {
    updateTodo() {
      return api.put(`/tasks/${this.currentTodo.id}`, this.currentTodo);
    },
    async handleStatus() {
      const status = this.currentTodo.completed;
      this.currentTodo.completed = !status;
      await this.updateTodo();
    },
  },
};
</script>

<style scoped>
.todo {
  width: 100%;
  padding: 1rem;

  background: var(--white);
  border-radius: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow);
}

.todo-done {
  background: var(--white);
}

.todo-done label {
  text-decoration: line-through;
}

input[type='checkbox'] {
  width: 1.2rem;
  height: 1.2rem;

  appearance: none;
  cursor: pointer;
  background: var(--background);

  border: 0;
  border-radius: 0.3rem;

  display: grid;
  place-content: center;

  transition: all 120ms ease-in-out;
}

input[type='checkbox']:checked {
  background: none;
}

input[type='checkbox']::before {
  content: '';

  box-shadow: 0 12px 24px rgb(0 0 0 / 2%);

  width: 1.2rem;
  height: 1.2rem;

  border-radius: 100%;
  border: 5px solid var(--success);

  transform: scale(0);
  transition: all 120ms ease-in-out;
}

input[type='checkbox']:checked::before {
  transform: scale(1);
}
</style>
