<template lang="pug">
  b-container(fluid)
    h2.text-center About Us
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
</style>
