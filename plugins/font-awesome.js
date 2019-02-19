import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faAt, faFax, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faFacebook, faTwitter, faLinkedin, faInstagram)
library.add(faAt, faFax, faPhoneSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
