<template>
  <div class="todo" :class="{ 'todo-done': currentTodo.completed }">
    <div class="todo-main">
      <input
        :id="currentTodo.id"
        type="checkbox"
        name="status"
        :checked="currentTodo.completed"
        @change="handleStatus()"
      />
      <label :for="currentTodo.id">{{ currentTodo.title }}</label>
      <button
        class="todo-expand"
        :class="{ 'todo-expand__open': isExpanded }"
        @click="openTodo"
      >
        <img src="../../assets/icons/angle-right.svg" />
      </button>
    </div>
    <div
      class="todo-content"
      :class="isExpanded ? 'todo-content__open' : 'todo-content__closed'"
    >
      <div>
        <label>Description</label>
        <textarea v-model="currentTodo.description" rows="3" />
      </div>
      <div>
        <span>{{ date }}</span>
      </div>
    </div>
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
          created_at: '',
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
      created_at: {
        type: String,
        required: true,
        default: '',
      },
    },
  },
  data() {
    return {
      currentTodo: this.todo,
      isExpanded: false,
    };
  },
  computed: {
    date() {
      const { day, month } = this.parseDate();

      return `Created at ${day}, ${month}`;
    },
  },
  created() {
    this.parseDate();
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
    openTodo() {
      this.isExpanded = !this.isExpanded;
    },
    parseDate() {
      const date = new Date(this.currentTodo.created_at);
      const day = date.getDate();
      const month = date
        .toLocaleString('default', { month: 'long' })
        .substring(0, 3);

      return { day, month };
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

  box-shadow: var(--shadow);
}

.todo-done {
  background: var(--white);
}

.todo-done > div:nth-child(1) > label {
  text-decoration: line-through;
}

.todo-main {
  display: grid;
  grid-template-columns: 1fr 18fr 1fr;
  align-items: center;
  gap: 1rem;
}

.todo-expand {
  width: 1rem;
  cursor: pointer;
  background: none;

  transition: var(--transition);
}

.todo-expand__open {
  transform: rotate(90deg);
}

.todo-content__closed {
  max-height: 0;
  overflow: hidden;
  padding: 0;

  animation: fadeOut 300ms ease-in-out;
}

.todo-content__open {
  max-height: 500px;
  padding: 1rem 0;

  animation: fadeIn 300ms ease-in-out;
}

.todo-content {
  width: 100%;

  transition: var(--transition);
}

.todo-content div:nth-child(1) {
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
}

.todo-content div:nth-child(2) {
  text-align: right;
  padding: 1rem 0 0;
}

.todo-content label,
.todo-content span {
  font-weight: 800;
  color: var(--text-alt);
}

.todo-content textarea {
  background: var(--details);

  font-size: 1rem;
  padding: 1rem;

  border-radius: 0.5rem;
  border: 2px solid transparent;

  resize: none;

  transition: var(--transition);
}

.todo-content textarea:focus {
  box-shadow: var(--shadow-md);
  background: var(--background);
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

  transition: var(--transition);
}

input[type='checkbox']:checked {
  background: var(--black);
}

input[type='checkbox']::before {
  content: '';

  box-shadow: var(--shadow);

  width: 0.8rem;
  height: 0.8em;

  border-radius: 0.3rem;
  background: var(--white);

  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);

  transform: scale(0);
  transition: var(--transition);
}

input[type='checkbox']:checked::before {
  transform: scale(1);
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
