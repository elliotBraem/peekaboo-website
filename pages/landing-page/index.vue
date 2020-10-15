<template lang="pug">
b-container(fluid)
  .btn-group-container
    a(href="https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/")
      .btn-container(style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')")
    a(href="https://www.rmhumanservices.org/ei")
      .btn-container(style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
    a(href="https://ddrcco.com/early-intervention/home")
      .btn-container(style="background-image: url('https://ddrcco.com/images/brand/logo.png')")
    a(href="https://www.nmetro.org")
      .btn-container(style="background-image: url('https://www.nmetro.org/wp-content/uploads/2020/04/NMCSLogo600.jpg'); background-position: center;")
  br
  br
  iframe(src="/dist/flyers/early-intervention-flyer.pdf" frameborder="0" style="display:block; width: 100%; height: 800px;  overflow: hidden;") This browser does not support PDFs. Please download the PDF to view it: Download PDF
</template>

<style lang="scss" scoped>
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
</style>
