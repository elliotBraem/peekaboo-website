<template lang="pug">
  b-container(fluid)
    h2 Our Services
    h4 Our therapists are experts in all aspects of your child's development.
    .blue-box-container
      .child-container
        b-img.child(fluid src="~/assets/img/child-props/girl-black-hair.svg")
      h5 We look at the child in
      .blue-box
        ul.p-3
          li
            h5 &bull; How they manage their body when happy, upset, nervous, etc.</p>
          li
            h5 &bull; How they interact and react to different sensory experiences such as touch, taste, smell, sound, and what they look at. </p>
          li
            h5 &bull; How they interpret how they move and understanding the components needed to play with toys and their caregivers.</p>
    h4 Our therapists are trained in
    .wrapper.mb-3
      CrayonList
    div
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
  text-align: left;
  margin-bottom: 4rem;
}

.child-container {
  position: relative;
}

.child {
  z-index: -10;
  top: 50px;
  right: 0;
  transform: rotate(-15deg);
}
</style>
