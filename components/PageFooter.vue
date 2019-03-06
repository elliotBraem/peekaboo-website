<template lang="pug">
div
  .child-container
    b-img.child(fluid src="~/assets/img/child-props/boy-red-shirt.svg")
  footer.footer-container.pt-4
    b-container(fluid).text-center.text-md-left
      .row
        .col-md-6.mt-md-0.mt-3
          h5.text-uppercase Contact Us
          ul
            li
              font-awesome-icon.mr-2.ml-2(:icon="['fas', 'phone-square']" size="1x" target="_blank")
              h6.d-inline-block Phone: (303) 885-9848
            li
              font-awesome-icon.mr-2.ml-2(:icon="['fas', 'fax']" size="1x" target="_blank")
              h6.d-inline-block Fax: (303) 200-7001
            li
              font-awesome-icon.mr-2.ml-2(:icon="['fas', 'at']" size="1x" target="_blank")
              h6.d-inline-block a.shimkus@peekabootherapy.com
        hr.clearfix.w-100.d-md-none.pb-3
        .col-md-3.mb-md-0
          ul.list-unstyled
            li
              nuxt-link(to="/") Home
            li
              nuxt-link(to="/services") Services
            li
              nuxt-link(to="/rates") Rates
            li
              nuxt-link(to="/about") Meet the Therapists
        .col-md-3.mb-md-0.mb-3
          ul.list-unstyled
            li
              a(href="https://peekabootherapy.com/blog") Blog
            li
              nuxt-link(to="/careers") Careers
            li
              nuxt-link(to="/contact") Contact
  .footer-copyright.subtext.py-3.text-center.text-md-right.pr-md-3
    span.d-block
      .d-inline-block Logo and children by Domingo Design
      no-ssr
        a(href="https://www.facebook.com/DomingoDesignIL" target="_blank")
          font-awesome-icon.mr-2.ml-2(:icon="['fab', 'facebook']" size="1x" target="_blank")
      no-ssr
        a(href="https://www.instagram.com/domingo_design")
          font-awesome-icon.mr-2(:icon="['fab', 'instagram']" size="1x" target="_blank")
    span
      .d-inline-block Website by Elliot Braem
        a.d-inline-block(href="https://brae.me" target="_blank")
          b-img.ml-2.mr-2.subimage(src="~/assets/img/footer-props/braeme.svg")
    .text-center ©2018 Peek-a-boo Pediatric Therapy LLC.
</template>


<style lang="scss" scoped>
h4 {
  font-family: 'Marker-Felt';
}

.child-container {
  position: relative;
}

.footer-container {
  background-color: #d6efff;
}

.child {
  top: 50px;
  right: 0px;
  z-index: -10;
  transform: rotate(-20deg);
}

.footer-copyright {
  background-color: #bde5ff;
}

.subtext {
  font-size: 0.8rem;
}

.subimage {
  height: 0.8rem;
  vertical-align: -0.125em;
}
</style>
