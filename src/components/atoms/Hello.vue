<template>
  <section class="hello">
    <h1>{{ greetings }}, strange person!</h1>
    <h3>{{ todayIs }}</h3>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    greetings() {
      return this.getGreetingsMessage();
    },
    todayIs() {
      return this.getDate();
    },
  },
  created() {
    this.getDate();
  },
  methods: {
    getGreetingsMessage() {
      const hours = new Date().getHours();

      if (hours < 12) {
        return 'Good morning';
      }

      if (hours < 18) {
        return 'Good afternoon';
      }

      return 'Good night';
    },
    getDate() {
      const date = new Date();
      const now = date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
      });

      return `It's ${now}`;
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
