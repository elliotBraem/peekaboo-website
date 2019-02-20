<template lang="pug">
  ul.employee-list(:style="listStyle")
    li(v-for="employee in employees" :key="employee.id")
      EmployeeCard.card-container(:employee="employee")
</template>

<script>
import EmployeeCard from '~/components/About/EmployeeCard'

export default {
  components: {
    EmployeeCard
  },
  computed: {
    employees() {
      return this.$store.state.employees.employeeList
    },
    listStyle() {
      if (this.$mq === 'sm')
        return {
          gridTemplateColumns: `repeat(1, minmax(100px, 1fr))`
        }
      else if (this.$mq === 'md')
        return {
          gridTemplateColumns: `repeat(2, minmax(100px, 1fr))`
        }
      else {
        return {
          gridTemplateColumns: `repeat(3, minmax(100px, 1fr))`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 280px;
}

.employee-list {
  display: grid;
  grid-gap: 1em 1em;
  justify-items: center;
}
</style>
