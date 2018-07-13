<template lang="pug">
  div.full-wrapper
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
          h5.text-right Occupational Therapy Office in Denver, CO
    //- Main content
    main
      section
        b-img.landing-image(src="./assets/img/kid-painted-hands.jpeg" alt="Happy kid with painted hands" fluid)
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
                style="display: inline-block;")
                p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
            .col
              b-card.mb-2(title="Card Title"
                img-src="http://via.placeholder.com/380x400"
                img-alt="Image"
                img-top
                tag="article"
                style="display: inline-block;")
                p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
      //- Rates
      section.rates
        h2 Services are provided through
        b-button-group(vertical)
          b-button(style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')") 
          b-button(style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
          b-button(style="background-image: url('https://ddrcco.com/images/brand/logo.png'")

        .title-container
          h2 Our Rates

      //- About us
      section.about
        .title-container
          h2 Meet the Therapists!

    footer
 
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  name: 'app',
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  components: {
    
  }
}
</script>
