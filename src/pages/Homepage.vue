<template lang="pug">
    main
        //- Summary
        section.summary(id="home")
            WelcomeSummary
        section.services(id="services")
            OurServices
        //- Rates
        section.rates(id="rates")
            OurRates
        //- About us
        section.about(id="about")
            AboutUs
        footer
            PageFooter
                    //- div.feedback-form
                    //-     h2 Leave us some feedback!
                    //-     form
                    //-         label Email
                    //-         input(type="text" value="email" placeholder="Email")
                    //- div.footer-links
                    //-     .row
                    //-         .col
                    //-             h4 Contact us!
                    //-             .row
                    //-                 .col
                    //-                     span
                    //-                     i.fa.fa-phone-square.d-inline-block
                    //-                     h6.d-inline-block Phone: (303) 885-9848
                    //-             .row
                    //-                 .col
                    //-                     span
                    //-                     i.fa.fa-fax.d-inline-block
                    //-                     h6.d-inline-block Fax: (303) 200-7001
                    //-             .row
                    //-                 .col
                    //-                     span
                    //-                     i.fa.fa-envelope.d-inline-block
                    //-                     h6.d-inline-block Email: a.shimkus@peekabootherapy.com
                    //-     .row
                    //-         .col
                    //-             h4 Employment
                    //-             h6 Interested in joining our team? <br>
                    //-             h6
                    //-                 router-link(to="/careers") Click here!
                    //-             // a(href="#")
                    //-             //     h4 Leave us some feedback!
                    //- div.copyright
                    //-     // .row
                    //-     //   .col-sm-6
                    //-     h6 ©2018 Peek-a-boo Pediatric Therapy LLC, <br> All Rights Reserved.
                    //-     // .col-sm-6
                    //-     span.acknowledgments
                    //-         p Logo and children designed and created by Jesey Nicholson
                    //-         p Website designed and developed by Elliot Braem
</template>

<script>
import WelcomeSummary from 'components/Homepage/Summary/WelcomeSummary'
import OurServices from 'components/Homepage/Services/OurServices'
import OurRates from 'components/Homepage/Rates/OurRates'
import AboutUs from 'components/Homepage/About/AboutUs'
import PageFooter from 'components/PageFooter'

export default {
  components: {
    WelcomeSummary,
    OurServices,
    OurRates,
    AboutUs,
    PageFooter
  }
}
</script>