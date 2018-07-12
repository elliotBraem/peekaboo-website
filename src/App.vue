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
        b-img(src="./assets/img/logo-big.png" alt="Peekaboo Pediatric Therapy LLC" fluid style="max-height:200px")
    //- Main content
    main
      //- Services
      section.services
        b-container
          h1 Our Services
          b-card.mb-2(title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 18rem; display: inline-block;")
            p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
          b-card.mb-2(title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 18rem; display: inline-block;")
            p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
          b-card.mb-2(title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 18rem; display: inline-block;")
            p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
        // b-container
        //   b-jumbotron(header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2")
        //     p For more information visit our website
        //     b-btn(variant="primary" href="https://bootstrap-vue.js.org/") More Info
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
