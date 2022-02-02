<template>
  <section class="hello">
    <h1>{{ greetings }}, strange person!</h1>
    <h3>{{ todayIs }}</h3>
  </section>
</template>

<script>
import { getDate } from '@/utils';

export default {
  name: 'HelloWorld',
  computed: {
    greetings() {
      return this.getGreetingsMessage();
    },
    todayIs() {
      const { day, weekday, month } = getDate();

      return `Its ${weekday}, ${month} ${day}`;
    },
  },
  methods: {
    getGreetingsMessage() {
      const { hours } = getDate();

      if (hours < 12) {
        return 'Good morning';
      }

      if (hours < 18) {
        return 'Good afternoon';
      }

      return 'Good evening';
    },
  },
};
</script>

<style>
.hello {
  width: 100%;
  padding: 1rem;
}

.hello h1 {
  padding-bottom: 0.5rem;
}

.hello h3 {
  color: var(--text-alt);
}
</style>
