<template>
  <button
    class="accordion-button"
    :class="{ 'accordion-button__open': isOpen }"
    @click="action"
  >
    <img src="../../assets/icons/angle-right.svg" />
  </button>
</template>

<script>
export default {
  name: 'AccordionButton',
  props: {
    isOpen: {
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
.accordion-button {
  width: 1rem;
  cursor: pointer;
  background: none;

  transition: var(--transition);
}

.accordion-button__open {
  transform: rotate(90deg);
}
</style>
