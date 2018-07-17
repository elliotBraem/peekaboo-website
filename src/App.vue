<template lang="pug">
  div.wrapper
    //- Header
    header
      .container
        //- Navbar + Social Media
        nav
          .navbar.float-right(variant="faded" type="light")
            .nav-item
              a(href="#" target="_blank")
                i.fa.fa-facebook-square
                | Facebook
            .nav-item
              a(href="#" target="_blank")
                i.fa.fa-envelope
                | Email
        //- Logo
        img.logo(src="./assets/img/logo.svg" alt="Peekaboo Pediatric Therapy LLC")
        //h5.text-right Occupational Therapy Office in Denver, CO
    //- Main content
    main
      // section.landing-contianer
      //   b-img.landing-image(src="./assets/img/kid-painted-hands.jpeg" alt="Happy kid with painted hands")
      //- Services
      section.services
        // .title-container
        //   h2 Services
        .container.text-center
          h2 Welcome to Peek-a-boo Pediatric Therapy LLC!
          h4 We're a Occupational Therapy office in the Denver area. We offer treatment to 
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor, metus eget egestas ornare, quam quam gravida magna, quis rutrum nunc quam id sem. Praesent tristique bibendum leo vitae iaculis. Sed arcu enim, interdum pellentesque tincidunt eget, tristique in risus. Aliquam quis facilisis risus, a efficitur nisl. Nullam maximus maximus consequat. Quisque non dolor eu lorem finibus facilisis et ultrices nunc. Quisque in porttitor ipsum. Mauris rhoncus in elit ut scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        img.child.float-right(src="./assets/img/girl-pink-hair.svg" alt="Girl with pink hair")
      //- Rates
      section.rates
        h2 Services are provided through
        .btn-group-vertical
          button.btn(style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')") 
          button.btn(style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
          button.btn(style="background-image: url('https://ddrcco.com/images/brand/logo.png'")

        .title-container
          h2 Our Rates
        h2 We accept
          p Medicaid

      //- About us
      section.about
        .container-fluid.title-container
          h2 Meet the Therapists!
        .container
          .card.employee
            .card-img-top(src="./assets/img/employees/amanda.jpeg" alt="Amanda Shimkus")
            .card-body
              h3.card-title Amanda Shimkus
              .card-text Bio about Amanda
              a.card-link(href="#") Read more!
          .card.employee
            .card-img-top(src="./assets/img/employees/lindsey.jpeg" alt="Lindsey Blanke")
            .card-body
              h3.card-title Lindsey Blanke
              .card-text Bio about Lindsey
              a.card-link(href="#") Read more!
          .card.employee
            .card-img-top(src="./assets/img/employees/nicole.jpeg" alt="Nicole Green")
            .card-body
              h3.card-title Nicole Green
              .card-text Bio about Nicole
              a.card-link(href="#") Read more!
          .card.employee
            .card-img-top(src="./assets/img/employees/amanda.jpeg" alt="Libby Cronin")
            .card-body
              h3.card-title Libby Cronin
              .card-text Bio about Libby
              a.card-link(href="#") Read more!
            


    footer
 
</template>

<script>
export default {
  name: 'app',
}
</script>
