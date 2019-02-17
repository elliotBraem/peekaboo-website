<template lang="pug">
  section.container
    div
      h1.title peekaboo-website
      h2.subtitle Official website for Peekaboo Pediatric Therapy LLC in Denver, CO
      Welcome
      Services
      Rates
      About
</template>

<script>
import Welcome from '~/pages/Welcome.vue'
import Services from '~/pages/Services.vue'
import Rates from '~/pages/Rates.vue'
import About from '~/pages/About.vue'

export default {
  components: {
    Welcome,
    Services,
    Rates,
    About
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
