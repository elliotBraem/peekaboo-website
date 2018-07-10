<template lang="pug">
  b-container
    //- Navbar
    nav
      b-navbar(variant="faded" type="light")
        b-navbar-brand.mb-0(tag="h1") Peekaboo Pediatric Therapy LLC
        a(href="#" target="_blank")
          i.fa.fa-facebook
    //- Header
    header
      b-container
        h1 Peekaboo Pediatric Therapy LLC
    //- Main content
    main
      //- Services
      section
        b-container
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
        b-container
          b-jumbotron(header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2")
            p For more information visit our website
            b-btn(variant="primary" href="https://bootstrap-vue.js.org/") More Info
      //- Rates
      section

      //- About us
      section

    footer
 
</template>

<script>
export default {
  name: 'app',
}
</script>
