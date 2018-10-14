<template lang="pug">
  .footer-child
    div.helper-div
    img.child(src="static/img/children/boy-red-shirt.svg")
    .container-fluid.footer-wrapper.pt-3
      div.footer-nav
        ul
          li
            a(href="#home") Home
          li
            a(href="#about") About Us
          li
            a(href="#services") Our Services
          li
            a(href="#rates") Our Rates
          li
            router-link(to="/blog/tips-for-a-sensory-friendly-halloween") Blog
          li
            router-link(to="/careers") Careers
          li
            router-link(to="/contact") Contact
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
      div.credits.text-center
        p ©2018 Peek-a-boo Pediatric Therapy LLC, <br class="removeable"> All Rights Reserved. <br> Logo and children by Jesey Nicholson <br> Website by Elliot Braem
</template>
