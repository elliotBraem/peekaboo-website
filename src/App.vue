<template lang="pug">
  div.wrapper
    //- Header
    header
      .container
        //- Navbar + Social Media
        nav.navbar.justify-content-end.pt-3
            a.nav-item.pr-2(href="#" target="_blank")
              i.fa.fa-facebook-square
              | Facebook
            a.nav-item.pl-2.pr-2(href="#" target="_blank")
              i.fa.fa-envelope
              | Email
            // a.nav-item.pl-2(href="#")
            //   i.fas.fa-globe-americas
            //   | Español
        //- Logo
        img.logo(src="./assets/img/logo.svg" alt="Peekaboo Pediatric Therapy LLC")
        //h5.text-right Occupational Therapy Office in Denver, CO
    //- Main content
    main
      // section.landing-contianer
      //   b-img.landing-image(src="./assets/img/kid-painted-hands.jpeg" alt="Happy kid with painted hands")
      //- Summary
      section.summary
        img.child(style="float: right; margin-right: -60px;" src="./assets/img/children/girl-pink-hair.svg" alt="Girl with pink hair")
        .container.text-center
          h2.pb-5.pt-3 Welcome to Peek-a-boo Pediatric Therapy LLC!
          h4 We are an occupational therapy office in the Denver, CO area.
          br
          h4 We offer occupational therapy services from birth to 3 year olds in your home and in daycare environments.
          br 
          h4 We are named Peek-A-Boo Pediatric Therapy because every child should have the opportunity to play the game of peek-a-boo with their parents, siblings, grandparents and any other person in their life. 
          // | Peek-A-Boo is an early foundational game in development. 
          // | If a child is not able to play peek-a-boo, there could be a multitude of reasons including sensory processing dysfunction or a delay in their motor skills to name a few. 
      section.services
        .container
          h2.text-center Our Services
          // | Our providers are all occupational therapists. 
          // | An occupational therapist are experts in helping a person achieve their day to day occupations. 
          // | When you hear the word 'occupation' often times you think about a job, but this word is meant to describe anything you during the day. 
          // | So, for a baby an occupation is to eat, sleep, get their diaper changed, interact with their caregiver, move, explore and play. 
          // | Occupations change as a child develops. 
          // | An occupational therapist is an expert in all aspects of development. 
          h4.text-center Our therapists are experts in all aspects of your child's development. 
          div.how-list
            h5 We look at the child in 
            ul.p-3
              li 
                h5 HOW
                p they manage their body when happy, upset, nervous, etc.
              li 
                h5 HOW 
                p they interact and react to different sensory experiences such as touch, taste, smell, sound, and what they look at.
              li 
                h5 HOW 
                p they interpret how they move and understanding the components needed to play with toys and their caregivers.
          h4.text-center Our therapists are trained in 
          ul.treatments.text-left
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 motor development
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 feeding
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 sensory integration
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 play & attachment theories
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 assistive technology
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 vision
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 hearing impairments
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 massage
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 NDT (movement & handling)
            li
              div.treatment
                img.crayon(src="./assets/img/red-crayon.svg")
                h6 oral-motor
          div.diagnosis.text-center
            h5 all to help with common childhood diagnosis such as: 
            p General delays &bull; Autism &bull; Cerebral Palsy &bull; Genetic conditions &bull; Neurological conditions &bull; Orthopedic conditions &bull; Premature babies and children &bull; Muscle and bone misalignment &bull; Cognitive delays &bull; Trauma.

          // | In addition to understanding a child's development, we look at the child in HOW they manage their body when happy, upset, nervous, etc. 
          // | HOW they interact and react to different sensory experiences such as touch, taste, smell, sound, what they look at, HOW they interpret how they move and understanding the components needed to play with toys and their caregivers. 
          // | We are trained in educational and medical models. 
          // | Generalists are trained in motor development- both fine and gross motor, visual-motor skills that would translate to how we pick up our food to eat and how we play with toys. 
          // | Specialties branch into feeding, sensory integration, different play and attachment theories, assistive technology, vision, hearing impairments, massage, NDT (movement and handling), oral-motor all to help with common childhood diagnosis such as: general delays, Autism, Cerebral Palsy, Genetic conditions, Neurological conditions, orthopedic conditions, premature babies and children, muscle and bone misalignment, cognitive delays and trauma.
      //- Rates
      section.rates
        img.child(style="float: left; margin-left: -60px;" src="./assets/img/children/boy-yellow-shirt.svg" alt="Boy with yellow shirt")
        .container.text-center
          h2 Our Rates
          h4.text-center We contract with the following community center boards:
          .btn-group-vertical
            a(href="https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/"): button.btn(style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')") 
            a(href="https://www.rmhumanservices.org/ei"): button.btn(style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
            a(href="https://ddrcco.com/early-intervention/home"): button.btn(style="background-image: url('https://ddrcco.com/images/brand/logo.png'")

      //- About us
      section.about
        .container
          .card.employee
            .card-body
              img.float-left.headshot.pr-3(src="./assets/img/employees/amanda-headshot.jpg" alt="Amanda Shimkus")
              h3.card-title Amanda Shimkus
              .card-text Bio about Amanda
              a.card-link(href="#") Read more!
          .card.employee
            .card-body
              img.float-left.headshot.pr-3(src="./assets/img/employees/lindsey-headshot.jpg" alt="Lindsey Blanke")
              h3.card-title Lindsey Blanke
              .card-text Bio about Lindsey
              a.card-link(href="#") Read more!
          .card.employee
            .card-body
              img.float-left.headshot.pr-3(src="./assets/img/employees/nicole-headshot.jpg" alt="Nicole Green")
              h3.card-title Nicole Green
              .card-text Bio about Nicole
              a.card-link(href="#") Read more!
          .card.employee
            .card-body
              img.float-left.headshot.pr-3(src="./assets/img/employees/libby-headshot.jpg" alt="Libby Cronin")
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
