<template lang="pug">
  .container-fluid
    h2 Meet the <br> Therapists
    div.about-child.mx-auto
      div.helper-div
      img.child(src="static/img/children/girl-apple.svg")
      .row.justify-content-center
        EmployeeCard.col-sm(name="Amanda Shimkus" headshot="static/img/employees/amanda-headshot.jpg" credential="MA, OTR/L SIPT Certified" title="Owner, Occupational Therapist" link="/amanda-shimkus")
        EmployeeCard.col-sm(name="Lindsey Blanke" headshot="static/img/employees/lindsey-headshot.jpg" credential="OTR/L" title="Occupational Therapist" link="/lindsey-blanke")
        EmployeeCard.col-sm(name="Nicole Green" headshot="static/img/employees/nicole-headshot.jpg" credential="OTD, OTR/L" title="Occupational Therapist" link="/nicole-green")
      .row.justify-content-center
        EmployeeCard.col-sm(name="Libby Cronin" headshot="static/img/employees/libby-headshot.jpg" credential="MS, OTR/L" title="Occupational Therapist" link="/libby-cronin")
        EmployeeCard.col-sm(name="Lara Dato" headshot="static/img/employees/lara-headshot.png" credential="MS, OTR/L" title="Occupational Therapist" link="/lara-dato")
</template>

<script>
import EmployeeCard from './EmployeeCard'

export default {
  components: {
    EmployeeCard
  }
}
</script>

<style lang="stylus" scoped>
.about h2
  padding-left: 1rem

.about-child
  position: relative
  max-width: 900px
  height: auto

.about-child .helper-div
  margin-bottom: 170px
  width: auto

.about-child .child
  position: absolute
  z-index: -10
  top: -160px
  right: -30px

// Small devices (landscape phones, 420px and up)
@media (min-width: 420px)
  .about h2
    padding: 0px
    text-align: center

  br
    display: none
</style>
