<template>
  <div class="todo">
    <input type="checkbox" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped>
.todo {
  width: 100%;
  padding: 2rem;

  background: var(--white);
  border-radius: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 12px 24px rgb(0 0 0 / 2%);
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
