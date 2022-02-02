<template>
  <div
    class="todo"
    :class="{ 'todo-done': currentTodo.completed, 'todo-disabled': isDisabled }"
  >
    <div class="todo-main">
      <check-button
        :id="currentTodo.id"
        :name="`status-${currentTodo.id}`"
        :is-checked="currentTodo.completed"
        :action="handleStatus"
      />
      <label :for="currentTodo.id">{{ currentTodo.title }}</label>
      <accordion-button :is-open="isExpanded" :action="handleExpanded" />
    </div>
    <div
      class="todo-content"
      :class="isExpanded ? 'todo-content__open' : 'todo-content__closed'"
    >
      <div>
        <label>Description</label>
        <textarea
          v-model="currentTodo.description"
          rows="3"
          @keyup.enter="updateTodo"
        />
      </div>
      <div>
        <span>{{ currentDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/atoms/CheckButton.vue';
import AccordionButton from '@/components/atoms/AccordionButton.vue';

import { getDate } from '@/utils';
import { notify } from '@/store';
import api from '@/services/api';

export default {
  name: 'TodoItem',
  components: {
    CheckButton,
    AccordionButton,
  },
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
      isDisabled: false,
      notify,
    };
  },
  computed: {
    currentDate() {
      const { day, month } = getDate(this.currentTodo.created_at);

      return `Created at ${month}, ${day}`;
    },
  },
  methods: {
    async updateTodo() {
      this.isDisabled = true;
      try {
        await api.put(`/tasks/${this.currentTodo.id}`, this.currentTodo);
        this.notify.send({
          type: 'success',
          message: 'Todo updated successfully',
        });
        this.isDisabled = false;
      } catch (err) {
        console.error(err);
        this.notify.send({
          type: 'error',
          message: 'Todo updated failed',
        });
        this.isDisabled = false;
      }
    },
    async handleStatus(event) {
      this.currentTodo.completed = event.target.checked;
      await this.updateTodo();
    },
    handleExpanded() {
      this.isExpanded = !this.isExpanded;
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

  transition: var(--transition);
}

.todo-done {
  background: var(--white);
}

.todo-done > div:nth-child(1) > label {
  text-decoration: line-through;
}

.todo-disabled {
  pointer-events: none;
  position: relative;
  opacity: 0.5;
}

.todo-disabled::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: spinner 0.6s linear infinite;
}

.todo-main {
  display: grid;
  grid-template-columns: 1fr 18fr 1fr;
  align-items: center;
  gap: 1rem;
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

.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
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

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
