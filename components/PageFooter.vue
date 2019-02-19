<template lang="pug">
  b-container(fluid).footer-container
    .footer-child
      //- div.helper-div
      //- img.child(src="static/img/children/boy-red-shirt.svg")
      b-row
        b-col(md="6" sm="12")
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
        b-col(md="6" sm="12")
          div.contact
            h4 Contact Us
            hr
            ul
              li
                font-awesome-icon.mr-2.ml-2(:icon="['fas', 'phone-square']" size="2x" target="_blank")
                h6.d-inline-block Phone: (303) 885-9848
              li
                font-awesome-icon.mr-2.ml-2(:icon="['fas', 'fax']" size="2x" target="_blank")
                h6.d-inline-block Fax: (303) 200-7001
              li
                font-awesome-icon.mr-2.ml-2(:icon="['fas', 'at']" size="2x" target="_blank")
                h6.d-inline-block Email: a.shimkus@peekabootherapy.com
      .subtext.text-center ©2018 Peek-a-boo Pediatric Therapy LLC, All Rights Reserved.
</template>

<style lang="scss" scoped>
.footer-container {
  background-color: #d6efff;
}

.subtext {
  font-size: 0.5rem;
}

h4 {
  // color: #5e239d;
  font-family: 'Marker-Felt';
}
</style>
// .container-fluid
//   background-color: #D6EFFF
//   padding-bottom: 0.1rem

// .footer-wrapper

// .credits
//   font-size: 14px

// .footer-child
//   position: relative
//   width: auto
//   height: auto

// .footer-child .helper-div
//   margin-bottom: 100px
//   width: auto

// .footer-child .child
//   position: absolute
//   z-index: -10
//   top: -175px
//   left: -70px
//   transform: rotate(25deg)
// </style>
