<template lang="pug">
  span.d-inline-block
    no-ssr
      a(href="https://peekabootherapy.com/blog")
        b-button.mb-3.mr-3(variant="info" size="sm") Read our Blog!
    no-ssr
      nuxt-link(to="/feeding-groups")
        b-button.mb-3.mr-3(variant="info" size="sm") Register for Feeding Groups!
    h3.d-inline-block Follow us:
    no-ssr
      a(href="https://www.facebook.com/peekaboopediatrictherapy" target="_blank")
        font-awesome-icon.mr-2.ml-2(:icon="['fab', 'facebook']" size="2x" target="_blank")
    no-ssr
      a(href="https://www.instagram.com/peekaboo_therapy/")
        font-awesome-icon.mr-2(:icon="['fab', 'instagram']" size="2x" target="_blank")
</template>

<style lang="scss" scoped>
h3 {
  color: #5e239d;
  font-family: 'Marker-Felt';
}
</style>
