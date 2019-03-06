<template lang="pug">
b-container(fluid)
  .text-center
    h2 Questions or Comments?
    br
    h5 Please contact us! We would love to hear from you!
    h5 Contact us by phone, fax, or email.
    ul
      li
        font-awesome-icon.mr-2.ml-2(:icon="['fas', 'phone-square']" size="1x" target="_blank")
        h6.d-inline-block Phone: (303) 885-9848
      li
        font-awesome-icon.mr-2.ml-2(:icon="['fas', 'fax']" size="1x" target="_blank")
        h6.d-inline-block Fax: (303) 200-7001
      li
        font-awesome-icon.mr-2.ml-2(:icon="['fas', 'at']" size="1x" target="_blank")
        h6.d-inline-block a.shimkus@peekabootherapy.com
</template>
