<template lang="pug">
  div.slide-container
    h4 {{title}}
    b-row.inner-container
      b-col(md="6" order-md="12").desc-container
        h5.slide-desc {{description}}
        b-button.mt-3(v-if="link" variant="info" :href="link" size="md") {{buttonText}}
      b-col(md="6" order-md="1")
        b-img.slide-image.mt-3(fluid :src="image")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    description: {
      type: String,
      default: '',
      required: false
    },
    link: {
      type: String,
      default: '',
      required: false
    },
    buttonText: {
      type: String,
      default: '',
      required: false
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-container {
  margin: 0 auto;
  @media (max-width: 420px) {
    max-width: 320px;
  }
}

.desc-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-image {
  @media (max-width: 420px) {
    width: 300px;
  }
}
</style>
