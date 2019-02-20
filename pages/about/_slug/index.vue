<template lang="pug">
  b-container(:key="$route.params.slug")
    b-row
      b-col.text-center(sm="4")
        b-img.headshot(fluid :src="content.attributes.img")
        h6.text-muted {{content.attributes.cred}}
        h6.job-title {{content.attributes.title}}
      b-col(sm="8")
        h2 {{content.attributes.name}}
        div.text-left(v-html="content.html")
</template>

<script>
export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/assets/files/employee-bios/${
      params.slug
    }.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style lang="scss" scoped>
.headshot {
  width: 100%;
  margin-bottom: 1rem;
}

.job-title {
  margin-top: 1rem;
}
</style>
