<template>
  <input
    :id="id"
    type="checkbox"
    :name="name"
    :checked="isChecked"
    @change="action()"
  />
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    isChecked: {
      type: Boolean,
      required: true,
      default: false,
    },
    action: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style>
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
</style>
