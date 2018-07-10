<template lang="pug">
  #app
    b-container
      b-jumbotron(header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2")
        p For more information visit our website
        b-btn(variant="primary" href="https://bootstrap-vue.js.org/") More Info

      b-form-group( horizontal :label-cols="4" description="Let us know your name." label="Enter your name")
        b-form-input(v-model.trim="name")

      b-alert(variant="success") Hello {{ name }}    
</template>

<script>
export default {
  name: 'app',
}
</script>
