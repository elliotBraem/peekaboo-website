<template lang="pug">
  .container
    h2 Meet the <br> Therapists
    div.about-child
      div.helper-div
      img.child(src="static/img/children/girl-apple.svg")
      .card.employee
        .card-body
          img.float-left.headshot.pr-3(src="static/img/employees/amanda-headshot.jpg" alt="Amanda Shimkus")
          h3.card-title Amanda Shimkus
          .card-text
            h6.text-muted MA, OTR/L SIPT Certified
            h6.job-title Owner, Occupational Therapist
          a.card-link(href="#") Read about me!
      br
      .card.employee
        .card-body
          img.float-left.headshot.pr-3(src="static/img/employees/lindsey-headshot.jpg" alt="Lindsey Blanke")
          h3.card-title Lindsey Blanke
          .card-text
            h6.text-muted OTR/L
            h6.job-title Occupational Therapist
          a.card-link(href="#") Read about me!
      br
      .card.employee
        .card-body
          img.float-left.headshot.pr-3(src="static/img/employees/nicole-headshot.jpg" alt="Nicole Green")
          h3.card-title Nicole Green
          .card-text
            h6.text-muted OTD, OTR/L
            h6.job-title Occupational Therapist
          a.card-link(href="#") Read about me!
      br
      .card.employee
        .card-body
          img.float-left.headshot.pr-3(src="static/img/employees/libby-headshot.jpg" alt="Libby Cronin")
          h3.card-title Libby Cronin
          .card-text
            h6.text-muted MS, OTR/L
            h6.job-title Occupational Therapist
          a.card-link(href="#") Read about me!
      br
      .card.employee
        .card-body
          img.float-left.headshot.pr-3(src="static/img/employees/lara-headshot.png" alt="Lara Dato")
          h3.card-title Lara Dato
          .card-text
            h6.text-muted MS, OTR/L
            h6.job-title Occupational Therapist
          a.card-link(href="#") Read about me!
      br
</template>

<style lang="stylus" scoped>
.about h2
  padding-left: 1rem

.about h3
  font-size: 1.2rem

.card
  border: none
  -webkit-box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3)
  -moz-box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3)
  box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3)

.headshot
  max-width: 170px
  border-radius: 50%

.job-title
  padding-top: 0.5rem
  clear: both

.about-child
  position: relative
  width: auto
  height: auto

.about-child .helper-div
  margin-bottom: 200px
  width: auto

.about-child .child
  position: absolute
  z-index: -10
  top: -175px
  right: -30px
</style>
