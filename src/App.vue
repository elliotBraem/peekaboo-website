<template lang="pug">
  div.wrapper
    //- Header
    header
      .container
        //- Navbar + Social Media
        nav.navbar.justify-content-end.pt-3
            a.nav-item.pr-2(href="https://www.facebook.com/peekaboopediatrictherapy" target="_blank")
              i.fa.fa-facebook-square
              | Facebook
            // a.nav-item.pl-2.pr-2(href="#" target="_blank")
            //   i.fa.fa-envelope
            //   | Email
            // a.nav-item.pl-2(href="#")
            //   i.fas.fa-globe-americas
            //   | Español
        //- Logo
        a(href="/")
          img.logo(src="/static/img/logo.svg" alt="Peekaboo Pediatric Therapy LLC")
    //- Main content
    .container
      router-view
</template>

<style lang="stylus" scoped>
  // // /** Fonts */
  // @font-face
  //   font-family "Marker-Felt"
  //   src url("static/fonts/Marker-Felt/Marker-Feltfont.ttf.woff") format("woff"), url("static/fonts/Marker-Felt/Marker-Feltfont.ttf.svg#Marker-Felt") format("svg"), url("static/fonts/Marker-Felt/Marker-Feltfont.ttf.eot"), url("static/fonts/Marker-Felt/Marker-Feltfont.ttf.eot?#iefix") format("embedded-opentype")
  //   font-weight normal
  //   font-style normal
  .container
    font-family 'Marker-Felt', sans-serif
    max-width 1200px
</style>