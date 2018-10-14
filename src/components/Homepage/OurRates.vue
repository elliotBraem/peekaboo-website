<template lang="pug">
  .rates-child
    img.child(src="static/img/children/boy-yellow-shirt.svg")
    .container.text-center
      h2.pb-3 Our Rates
      h4.text-center Early Intervention
      h5.text-center We contract with the following community center boards:
      .btn-group-vertical.regions
        // a(href="https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/"):
        button.btn(onclick="location.href='https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/';" style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')")
        br
        // a(href="https://www.rmhumanservices.org/ei"):
        button.btn(onclick="location.href='https://www.rmhumanservices.org/ei';" style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
        br
        // a(href="https://ddrcco.com/early-intervention/home"):
        button.btn(onclick="location.href='https://ddrcco.com/early-intervention/home';" style="background-image: url('https://ddrcco.com/images/brand/logo.png'")
        br
      div.blue-box
        p.p-3 Early intervention is a state ran program for children that have minimal to moderate/severe delays in 1 or more areas of development. To see if your child qualifies you can call your local community center board intake coordinator to set up an initial evaluation. It is a no-cost to family program and in doing so they will attempt to bill insurance and medicaid. You will not have to worry about your deductible or co-pays through this program.
        br
        p If you wish to not go through the Early Intervention program we offer private pay rates. Please <a href="#">contact us</a> for more information.
</template>
