<template lang="pug">
  b-container(fluid)
    b-row
      b-col
        Carousel
    b-row(align-h="center")
      b-col
        .text-container
          h2 Welcome to Peek-a-boo Pediatric Therapy LCC!
          br
          h4 Peek-a-boo Pediatric Therapy provides occupational therapy services to children birth to 3 years old and their families in the Denver-metro area.
          br
          h4 We provide services in environments where your child experiences the most; your home, your daycare or in the community.
          br
          h4 We are named Peek-a-boo Pediatric Therapy because every child should have the opportunity to play the game of peek-a-boo with their parents, siblings, grandparents and any other person in their life.
</template>

<script>
import Carousel from '~/components/Welcome/Carousel'

export default {
  components: {
    Carousel
  }
}
</script>
