<template lang="pug">
  .container-fluid.footer-wrapper
    .footer-child
      div.helper-div
      img.child(src="static/img/children/boy-red-shirt.svg")
      .p-3
      .row
        .col-sm
          div.footer-nav
            h4 Navigation
            hr
            ul
              li
                router-link(to="/") Home
              li
                a(href="https://peekabootherapy.com/blog") Blog
              li
                router-link(to="/careers") Careers
              li
                router-link(to="/contact") Contact
        .col-sm
          div.contact
            h4 Contact Us
            hr
            ul
              li
                span
                //- i.fa.fa-phone-square.d-inline-block
                h6.d-inline-block Phone: (303) 885-9848
              li
                span
                //- i.fa.fa-fax.d-inline-block
                h6.d-inline-block Fax: (303) 200-7001
              li
                span
                //- i.fa.fa-envelope.d-inline-block
                h6.d-inline-block Email: a.shimkus@peekabootherapy.com
      .row
        .col
          .row.justify-content-between
            .col
            .col
              p.text-center <br> ©2018 Peek-a-boo Pediatric Therapy LLC, <br class="removeable"> All Rights Reserved.
            .col
              p.text-right Logo and children by Jesey Nicholson <br> Website by Elliot Braem
</template>

<style lang="stylus" scoped>
.container-fluid
  background-color: #D6EFFF
  padding-bottom: 0.1rem

.footer-wrapper h4
  font-family: "Marker-Felt"

.credits
  font-size: 14px

.footer-child
  position: relative
  width: auto
  height: auto

.footer-child .helper-div
  margin-bottom: 100px
  width: auto

.footer-child .child
  position: absolute
  z-index: -10
  top: -175px
  left: -70px
  transform: rotate(25deg)

// Very small devices (landscape phones, 576px and down)
@media (max-width: 576px)
  ul
    padding-left: 0px

// Medium devices (tablets, 768px and up)
@media (min-width: 768px)
  .removeable
    display: none
</style>
