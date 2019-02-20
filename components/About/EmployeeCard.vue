<template lang="pug">
  .card.m-3.employee
    .card-body.text-center
      img.card-img-top.headshot.pr-3(:src="employee.attributes.img" :alt="employee.attributes.name")
      h3.pt-2.card-title {{ employee.attributes.name }}
      .card-text
        h6.text-muted {{ employee.attributes.cred }}
        h6.job-title {{ employee.attributes.title }}
      nuxt-link(:to="link")
        b-button.mb-3(variant="info" size="sm") Read about me
</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  computed: {
    link: function() {
      return 'about/' + this.employee.attributes.id
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 18rem;
  border: none;
  -webkit-box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 9px 6px 19px 0px rgba(0, 0, 0, 0.3);
}

.card-body {
  padding-bottom: 0px;
}

.job-title {
  padding-top: 0.5rem;
  clear: both;
}
</style>
