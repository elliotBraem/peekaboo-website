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
.section {
  margin-bottom: 100px;
}
</style>
