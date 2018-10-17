<template lang="pug">
  ul.treatments.text-left
    .row.justify-content-center
      .left.col-sm
        li
          div.treatment
            img.crayon(src="static/img/crayons/red-crayon.svg")
            h6 interoception
        li
          div.treatment
            img.crayon(src="static/img/crayons/orange-crayon.svg")
            h6 regulation
        li
          div.treatment
            img.crayon(src="static/img/crayons/green-crayon.svg")
            h6 sensory processing
        li
          div.treatment
            img.crayon(src="static/img/crayons/yellow-crayon.svg")
            h6 motor skills
        li
          div.treatment
            img.crayon(src="static/img/crayons/purple-crayon.svg")
            h6 play
        li
          div.treatment
            img.crayon(src="static/img/crayons/blue-crayon.svg")
            h6 social skills
        li
          div.treatment
            img.crayon(src="static/img/crayons/red-crayon.svg")
            h6 foundations for <br> speech and language
      .right.col-sm
        li
          div.treatment
            img.crayon(src="static/img/crayons/orange-crayon.svg")
            h6 feeding
        li
          div.treatment
            img.crayon(src="static/img/crayons/green-crayon.svg")
            h6 visual impairments
        li
          div.treatment
            img.crayon(src="static/img/crayons/yellow-crayon.svg")
            h6 hearing impairments
        li
          div.treatment
            img.crayon(src="static/img/crayons/purple-crayon.svg")
            h6 assistive technology
        li
          div.treatment
            img.crayon(src="static/img/crayons/blue-crayon.svg")
            h6 NDT <br> (movement and handling)
        li
          div.treatment
            img.crayon(src="static/img/crayons/red-crayon.svg")
            h6 trauma and attachment
</template>

<style lang="stylus" scoped>
.crayon
  width: 300px
  padding-bottom: 5px
  z-index: -10

ul.treatments
  padding-left: 0px

.treatment
  position: relative
  width: auto

.treatment h6
  position: absolute
  bottom: 0.1rem

.col-sm
  flex-grow: 0;

.left
  .treatment h6
    left: 2.3rem

.right
  .crayon
    transform: rotate(180deg)

  .treatment h6
    right: 2.3rem
    bottom: -0.3rem

// Small devices (landscape phones, 576px and up)
@media (max-width: 576px)
  .treatment h6
    position: absolute
    left: 2.3rem

  .right
    .crayon
      transform: none

    .treatment h6
      bottom: 0.1rem
</style>
