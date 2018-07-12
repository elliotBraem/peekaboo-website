<template lang="pug">
  div
    //- Header
    header
      b-container
        //- Navbar + Social Media
        nav
          b-navbar(variant="faded" type="light")
            b-navbar-brand.mb-0(tag="h1") 
            a.float-right(href="#" target="_blank")
              i.fa.fa-facebook
        //- Logo
        b-img(src="./assets/img/logo.svg" alt="Peekaboo Pediatric Therapy LLC" float height=200)
    //- Main content
    main
      //- Services
      section.services
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
        h1 Our Rates

      //- About us
      section.about
        h1 About Us

    footer
 
</template>

<script>
export default {
  name: 'app',
}
</script>
