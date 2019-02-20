<template lang="pug">
  b-container(fluid)
    h2.text-center.padding Meet the Therapists
    .child-container
      b-img.child(fluid src="~/assets/img/child-props/girl-apple.svg")
    EmployeeList
</template>

<script>
import EmployeeList from '~/components/About/EmployeeList.vue'

export default {
  components: {
    EmployeeList
  }
}
</script>

<style lang="scss" scoped>
.child {
  top: -200px;
  left: 0px;
  z-index: -10;
}

.padding {
  padding-bottom: 200px;
}
</style>
