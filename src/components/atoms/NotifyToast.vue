<template>
  <transition name="fade">
    <div
      v-if="notify.state.isVisible"
      class="toast"
      :class="notify.state.type === 'success' ? 'success' : 'error'"
    >
      <span>{{ notify.state.message }}</span>
    </div>
  </transition>
</template>

<script>
import { notify } from '@/store';

export default {
  name: 'NotifyToast',
  data() {
    return {
      notify,
    };
  },
};
</script>

<style>
.toast {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  min-width: 15rem;
  height: 3rem;

  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
  box-shadow: var(--shadow-md);

  display: flex;
  align-items: center;
  justify-content: center;
}

.error {
  border-right: 1rem solid var(--error);
}

.success {
  border-right: 10px solid var(--success);
}

.fade-enter-active,
.fade-leave-active {
  transition: all ease-in-out 300ms;
}

.fade-enter-active {
  animation: appear-in 300ms ease-in-out;
}

.fade-leave-active {
  animation: appear-out 300ms ease-in-out;
}

@keyframes appear-in {
  from {
    top: -10rem;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes appear-out {
  from {
    right: 0;
    opacity: 1;
  }
  to {
    right: -10rem;
    opacity: 0;
  }
}
</style>
