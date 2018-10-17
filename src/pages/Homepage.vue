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