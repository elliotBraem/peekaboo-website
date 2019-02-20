<template lang="pug">
  b-container(fluid).footer-container
    .child-container
      b-img.child(fluid src="~/assets/img/child-props/boy-red-shirt.svg")
    b-row
      b-col(md="6" sm="12")
        div.contact
          h4 Contact Us
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
      b-col(md="6" sm="12")
        div.footer-nav
          ul
            li
              nuxt-link(to="/") Home
            li
              a(href="https://peekabootherapy.com/blog") Blog
            li
              router-link(to="/careers") Careers
            li
              router-link(to="/contact") Contact
    b-row
      b-col(md="3" offset-md="9")
        h6 Logo and children by Jesey Nicholson
        h6 Website by Elliot Braem
    .subtext.text-center ©2018 Peek-a-boo Pediatric Therapy LLC, All Rights Reserved.
</template>

<style lang="scss" scoped>
h4 {
  // color: #5e239d;
  font-family: 'Marker-Felt';
}

.footer-container {
  background-color: #d6efff;
  margin-top: 200px;
  padding-top: 20px;
}

.child {
  top: -220px;
  right: 0px;
  z-index: -10;
  transform: rotate(-20deg);
}

.subtext {
  font-size: 0.5rem;
}
</style>
