<template lang="pug">
  .card.m-3.employee
    .card-body.text-center
      img.card-img-top.headshot.pr-3(:src="headshot" :alt="name")
      h3.pt-2.card-title {{ name }}
      .card-text
        h6.text-muted {{ credential }}
        h6.job-title {{ title }}
      router-link(:to="link").card-link Read about me!
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    headshot: {
      type: String,
      required: true
    },
    credential: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
h3
  font-size: 1.2rem

.card
  max-width: 18rem
  border: none
  -webkit-box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3)
  -moz-box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3)
  box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3)

.headshot
  border-radius: 50%

.job-title
  padding-top: 0.5rem
  clear: both
</style>
