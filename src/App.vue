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
        a(href="../")
          img.logo(src="./assets/img/logo.svg" alt="Peekaboo Pediatric Therapy LLC")
        //h5.text-right Occupational Therapy Office in Denver, CO
    //- Main content
    router-view
</template>

<script>
export default {
  name: 'app',
}
</script>
