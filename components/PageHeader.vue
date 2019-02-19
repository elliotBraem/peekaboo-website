<template lang="pug">
  b-container(fluid)
    .social-media-container
      SocialMediaBar
    nuxt-link(to="/")
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
.header-logo {
  clear: both;
  display: block;
  margin: 4rem auto;
  @media screen and (min-width: 770px) {
    margin: 4rem 0 4rem 2rem;
    max-width: 650px;
  }
}

.social-media-container {
  float: right;
  margin: 1rem 0;
}
</style>
