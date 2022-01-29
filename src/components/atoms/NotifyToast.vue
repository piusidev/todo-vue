<template>
  <transition name="fade">
    <div v-if="notify.state.isVisible" class="toast">
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
  bottom: 0;
  right: 0;

  min-width: 15rem;
  height: 3rem;

  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;

  background: var(--details);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);

  display: flex;
  align-items: center;
  justify-content: center;
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
    bottom: -10rem;
    opacity: 0;
  }
  to {
    bottom: 0;
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
