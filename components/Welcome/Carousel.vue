<template lang="pug">
  no-ssr
    vue-carousel.main-carousel(autoplay loop :perPage="1" :speed="2000" :autoplayTimeout="4000")
      vue-slide
        CarouselSlide(title="An Evidence-Based Developmental Approach to the Pediatric Brain" description="Check out the full course by Amanda Shimkus, MA, OTR/L, SIPT" link="https://spduniversity.spdstar.org/diweb/catalog/item/id/2428006/q/c=325&o=-d?_zs=KdShd1&_zl=NwME5" buttonText="To the course!" image="https://summitproedu.imgix.net/.jpg?auto=compress%2Cenhance%2Cformat&fit=crop&crop=faces&w=384&h=260&mark64=aHR0cHM6Ly9zdW1taXRwcm9lZHUuaW1naXgubmV0L3dhdGVybWFya3MvbmV3LWNpcmNsZS5wbmc%2Fdz0uMQ%3D%3D")
      vue-slide
        CarouselSlide(title="Helping vs. Hindering Your Child:" description="A Parent's Guide to Sensory-Motor Development for Infants and Toddlers by Amanda Shimkus, MA, OTR/L, SIPT" link="https://www.spdstar.org/basic/february-webinar" buttonText="Learn more" image="https://www.spdstar.org/sites/default/files/STAR-Institute-logo.png")
      vue-slide
        CarouselSlide(title="Are you an expecting parent or a parent of a child under 2?" description="Here's a webinar to inform you about helpful habits and what to avoid to let your child flourish!" link="http://spduniversity.spdstar.org/diweb/catalog/item/id/2428006/q/c=325&o=-d?_zs=KdShd1&_zl=NwME5" buttonText="Show me!" image="/dist/img/carousel-props/girl-pink-hair.png")
      vue-slide
        CarouselSlide(title="Want to learn more?" description="Read our blog written by our talented therapists!" link="https://peekabootherapy.com/blog" buttonText="Blog" image="/dist/img/carousel-props/kid-painted-hands.jpg")
</template>

<script>
import CarouselSlide from '~/components/Welcome/CarouselSlide'

export default {
  components: {
    CarouselSlide
  }
}
</script>

<style lang="scss" scoped>
.main-carousel vue-slide {
}
</style>
