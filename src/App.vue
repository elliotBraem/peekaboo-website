<template lang="pug">
  div
    //- Header
    header
      b-container
        //- Navbar + Social Media
        nav
          b-navbar.float-right(variant="faded" type="light")
            b-nav-item
              a(href="#" target="_blank")
                i.fa.fa-facebook-square
                | Facebook
            b-nav-item
              a(href="#" target="_blank")
                i.fa.fa-envelope
                | Email
        //- Logo
        b-img.logo(src="./assets/img/logo.svg" alt="Peekaboo Pediatric Therapy LLC")
    //- Main content
    main
      //- Services
      section.services
        .title-container
          h2 Services
        b-container
          .row
            .col
              b-card.mb-2(title="Card Title"
                img-src="http://via.placeholder.com/380x400"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem; display: inline-block;")
                p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
            .col
              b-card.mb-2(title="Card Title"
                img-src="http://via.placeholder.com/380x400"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem; display: inline-block;")
                p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
      //- Rates
      section.rates
        h2 Services are provided through
        b-button-group(vertical)
          b-button(style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')") 
          b-button(style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
          b-button(style="background-image: url('https://ddrcco.com/images/brand/logo.png'")

        h2 Our Rates

      //- About us
      section.about
        h2 About Us

    footer
 
</template>

<script>
export default {
  name: 'app',
}
</script>
