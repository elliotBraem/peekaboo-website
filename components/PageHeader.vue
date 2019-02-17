<template lang="pug">
  b-container(fluid)
    b-row
      b-col
        SocialMediaBar
    b-row
      b-col
        img.header-logo(src="logo.svg" alt="Peek-a-boo Pediatric Therapy LLC")
</template>

<script>
import SocialMediaBar from '~/components/SocialMediaBar.vue'
export default {
  components: {
    SocialMediaBar
  }
}
</script>

<style lang="scss" scoped>
</style>
