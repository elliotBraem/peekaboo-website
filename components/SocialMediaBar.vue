<template lang="pug">
  span.d-inline-block
    no-ssr
      a(href="https://www.facebook.com/elliot.braem" target="_blank")
        h2 Follow us on Facebook!
        font-awesome-icon.mr-2(:icon="['fab', 'facebook']" target="_blank")
    no-ssr
      a(href="https://www.instagram.com/efizzysnaps/")
        font-awesome-icon.mr-2(:icon="['fab', 'instagram']" target="_blank")
    no-ssr
      a(href="https://twitter.com/EFizzySnaps")
        font-awesome-icon.mr-2(:icon="['fab', 'twitter']" target="_blank")
</template>
