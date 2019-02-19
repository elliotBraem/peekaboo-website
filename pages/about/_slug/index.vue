<template <template lang="pug">
    div(v-html="content.html")
</template>


<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
