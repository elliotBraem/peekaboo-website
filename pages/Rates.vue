<template lang="pug">
  b-container(fluid)
    h2 Our Rates
    h4 Early Intervention
    h5 We contract with the following community center boards:
    .btn-group-container
      a(href="https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/")
        .btn-container(style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')")
      a(href="https://www.rmhumanservices.org/ei")
        .btn-container(style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
      a(href="https://ddrcco.com/early-intervention/home")
        .btn-container(style="background-image: url('https://ddrcco.com/images/brand/logo.png')")
      a(href="https://www.nmetro.org")
        .btn-container(style="background-image: url('https://www.nmetro.org/wp-content/uploads/2020/04/NMCSLogo600.jpg'); background-position: center;")
    .blue-box-container
      .child-container
        b-img.child(fluid src="~/assets/img/child-props/boy-yellow-shirt.svg")
      .blue-box
        p.p-3 Early intervention is a state run program for children who have minimal to moderate/severe delays in one or more areas of development. To see if your child qualifies, you can call your local community center board intake coordinator to set up an initial evaluation. This is a no-cost to family program and in doing so, they will attempt to bill insurance and medicaid. You will not have to worry about your deductible or co-pays through this program.
        br
        p.p-3 If you wish to not go through the Early Intervention program we offer private pay rates. <br> Please <a href="#">contact us</a> for more information.
</template>

<style lang="scss" scoped>
.child {
  top: 20px;
  left: 0px;
  z-index: -10;
  transform: rotate(20deg);
}

.child-container {
  position: relative;
}

.btn-group-container {
  margin: 2rem auto;
  width: 300px;
}

.btn-container {
  border: none;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 80px;
  display: block;
  margin: 1rem 0;
}

.blue-box-container {
  text-align: center;
}
</style>
