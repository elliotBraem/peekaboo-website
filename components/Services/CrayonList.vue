<template lang="pug">
  div
    ul.treatment-list(:style="listStyle")
      li(v-for="(treatment, index) in treatments" :key="index")
        Crayon(:treatment="treatment" :crayonImg="getCrayonImg(crayonImgs)" :index="index")
</template>

<script>
import Crayon from '~/components/Services/Crayon'

export default {
  components: {
    Crayon
  },
  computed: {
    treatments() {
      return this.$store.state.crayons.treatments
    },
    crayonImgs() {
      return this.$store.state.crayons.crayonImgs
    },
    listStyle() {
      return {
        gridTemplateColumns:
          this.$mq === 'sm'
            ? `repeat(1, minmax(100px, 1fr))`
            : `repeat(2, minmax(100px, 1fr))`
      }
    }
  },
  methods: {
    getCrayonImg: function(crayonImgs) {
      return crayonImgs[Math.floor(Math.random() * crayonImgs.length)]
    },
    getCrayonIsFlipped: function(treatments, index) {
      return index > treatments.length / 2
    }
  }
}
</script>

<style lang="scss" scoped>
.treatment-list {
  display: grid;
  grid-gap: 0em 1em;
  justify-items: center;
}
</style>
