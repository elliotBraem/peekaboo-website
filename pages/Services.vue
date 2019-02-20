<template lang="pug">
  b-container(fluid)
    h2.text-center Our Services
    h4.text-center Our therapists are experts in all aspects of your child's development.
    .blue-box-container
      h5 We look at the child in
      .child-container
        b-img.child(fluid src="~/assets/img/child-props/girl-black-hair.svg")
      .blue-box
        ul.p-3
          li
            h5 HOW
            p they manage their body when happy, upset, nervous, etc.
          li
            h5 HOW
            p they interact and react to different sensory experiences such as touch, taste, smell, sound, and what they look at.
          li
            h5 HOW
            p they interpret how they move and understanding the components needed to play with toys and their caregivers.
    h4.text-center Our therapists are trained in
    .wrapper.mb-3
      CrayonList
    div.diagnosis.text-center
      h5 All to help with common childhood diagnosis such as:
      p Sensory processing dysfunction &bull; Developmental delays &bull; Fine motor delays &bull; Gross motor delays &bull; Clumsy/discoordinated &bull; Autism &bull; Cerebral Palsy &bull; Childhood syndromes &bull; Neurological conditions &bull; Prematurity &bull; Orthopedic conditions &bull; Hyperactivity &bull; Learning disability &bull; Feeding delays &bull; Trauma &bull; And more
</template>

<script>
import CrayonList from '~/components/Services/CrayonList.vue'

export default {
  components: {
    CrayonList
  }
}
</script>

<style lang="scss" scoped>
.blue-box-container {
  position: relative;
  text-align: left;
  padding-top: 200px;
  margin-bottom: 4rem;
}

.child {
  z-index: -10;
  top: -200px;
  right: 0;
  transform: rotate(-15deg);
  // Devices smaller than 650px
  // @media only screen and (max-width: 650px) {
  //   top: 15px;
  //   right: -100px;
  // }
}
/* .services-child
  position: relative
  max-width: 800px
  height: auto

.services-child .helper-div
  margin-bottom: 180px
  width: auto

.services-child .child
  position: absolute
  z-index: -10
  top: -140px
  right: 0px */
</style>
