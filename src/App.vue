<template lang="pug">
  div.wrapper
    //- Header
    header
      .container
        //- Navbar + Social Media
        nav.navbar.justify-content-end.pt-3
            a.nav-item.pr-2(href="https://www.facebook.com/peekaboopediatrictherapy" target="_blank")
              i.fa.fa-facebook-square
                | Follow us on Facebook!
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
    .container-fluid
      router-view
</template>
