<template lang="pug">
  no-ssr
    vue-carousel.main-carousel(autoplay loop :perPage="1" :speed="2000" :autoplayTimeout="4000")
      vue-slide.slide-container
        h4.slide-title Are you an expecting parent or a parent of a child under 2?
        b-row
          b-col(md="6" order-md="12")
            .desc-container
              h5.slide-desc.pt-4 Here's a webinar to inform you about helpful habits and what to avoid to let your child flourish!
              b-button.mt-2(variant="info" href="http://spduniversity.spdstar.org/diweb/catalog/item/id/2428006/q/c=325&o=-d?_zs=KdShd1&_zl=NwME5" size="md") Show me!
              //- a.slide-link.pt-3(href="http://spduniversity.spdstar.org/diweb/catalog/item/id/2428006/q/c=325&o=-d?_zs=KdShd1&_zl=NwME5") Check it out!
              //-   font-awesome-icon.mr-2.ml-2(:icon="['fas', 'arrow-right']" target="_blank")
          b-col(md="6" order-md="1")
            b-img(fluid src="~/assets/img/carousel-props/kid-painted-hands.jpg")
      vue-slide.slide-container
        h4.slide-title
        b-row
          b-col(md="6" order-md="12")
            .desc-container
              b-button.mb-3(variant="info" href="https://peekabootherapy.com/blog" size="lg") Check out our Blog!
          b-col(md="6" order-md="1")
            b-img(fluid src="~/assets/img/carousel-props/girl-pink-hair.png")
</template>

<style lang="scss" scoped>
.main-carousel {
  max-width: 820px;
  margin: 0 auto;
}

.slide-container {
  width: 100%;
  // min-height: 300px;
  // width: auto;
}
.desc-container {
  @media screen and (min-width: 770px) {
    padding-right: 20px;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>
