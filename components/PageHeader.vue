<template lang="pug">
  b-container(fluid)
    b-row
      b-col(md="6" offset-md="6" align="center")
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
  margin: 3rem auto;
  @media screen and (min-width: 770px) {
    margin: 4rem 0 4rem 2rem;
    max-width: 650px;
  }
}

.social-media-container {
  margin-top: 1rem;
}
</style>
