<template lang="pug">
  b-container
    div
      Welcome.section
      Services.section
      Rates.section
      About.section
</template>

<script>
import Welcome from '~/pages/Welcome.vue'
import Services from '~/pages/Services.vue'
import Rates from '~/pages/Rates.vue'
import About from '~/pages/about/index.vue'

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

.section {
  margin-bottom: 100px;
}
</style>
