<template lang="pug">
    div.crayon-container
      img.crayon(:src="crayonImg" :style="flipCrayon(index)")
      h6.treatment-title(:style="styleTitle(index)") {{treatment}}
</template>

<script>
export default {
  props: {
    treatment: {
      type: String,
      required: true
    },
    crayonImg: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    flipCrayon: function(index) {
      if (this.$mq === 'md')
        if (index % 2 === 1)
          return {
            transform: 'rotate(180deg)'
          }
    },
    styleTitle: function(index) {
      if (this.$mq === 'md')
        if (index % 2 === 1)
          return {
            right: '2.4rem',
            bottom: '-0.2rem'
          }
        else
          return {
            left: '2.4rem',
            bottom: '0.2rem'
          }
    }
  }
}
</script>

<style lang="scss" scoped>
.crayon-container {
  position: relative;
  width: auto;
}

.crayon {
  min-width: 320px;
  padding-bottom: 5px;
  z-index: -10;
}

.treatment-title {
  position: absolute;
  font-weight: bold;
  // For tablets smaller than 630px wide
  @media (max-width: 630px) {
    left: 2.4rem;
    bottom: 0.2rem;
  }
}
// .col-md
//   flex-grow: 0;

// // Medium devices (tablets, 767px and down)
// @media (max-width: 767px)
//   .right
//     .crayon
//       transform: none

//     .treatment h6
//       left: 2.3rem
//       bottom: 0.1rem
</style>
