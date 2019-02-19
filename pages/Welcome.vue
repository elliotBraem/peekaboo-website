<template lang="pug">
  b-container(fluid)
    b-row
      b-col
        img.child(src="~/assets/img/child-props/girl-pink-hair.svg")
        no-ssr
          vue-carousel.main-carousel(loop :perPage="1" :speed="2000" :autoplayTimeout="4000")
            vue-slide.slide-container
              .text-container
                  h4.slide-title Are you an expecting parent or a parent of a child under 2?
                  h5.slide-desc Here's a webinar to inform you <br>about helpful habits and what to avoid <br>to let your child flourish!
                  a.slide-link Check it out!
              img.slide-img(src="~/assets/img/carousel-props/kid-painted-hands.jpg")
            vue-slide Slide 2
    b-row(align-h="center")
      b-col
        .text-container
          h2 Welcome to Peek-a-boo Pediatric Therapy LCC!
          br
          h4 Peek-a-boo Pediatric Therapy provides occupational therapy services to children birth to 3 years old and their families in the Denver-metro area.
          br
          h4 We provide services in environments where your child experiences the most; your home, your daycare or in the community.
          br
          h4 We are named Peek-a-boo Pediatric Therapy because every child should have the opportunity to play the game of peek-a-boo with their parents, siblings, grandparents and any other person in their life.
</template>

<style lang="scss" scoped>
.child {
  max-height: 250px;
  // transform: rotate(-20deg);
}

.slide-container {
  max-width: 720px;
  position: relative;
  min-height: 300px;
  width: auto;

  .slide-title {
    position: absolute;
    left: 20px;
    top: 0;
    z-index: 2;
  }

  .slide-desc {
    position: absolute;
    right: 0px;
    bottom: 50px;
    z-index: 2;
  }

  .slide-img {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }

  .slide-link {
    position: absolute;
    right: 100px;
    bottom: 4px;
  }
}

.main-carousel {
  max-width: 720px;
  margin: 0 auto;
}

.adjust {
  margin-top: -200px;
}
</style>
