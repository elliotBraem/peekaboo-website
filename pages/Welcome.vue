<template lang="pug">
  b-container(fluid)
    b-row
      b-col
        no-ssr
          vue-carousel
            vue-slide Slide 1
            vue-slide Slide 2
          //- b-carousel.welcome-carousel(id="welcome-carousel" controls indicators background="#ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd")
          //-   b-carousel-slide(caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." img-src="https://picsum.photos/1024/480/?image=52")
          //-   b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=54")
    //- img.child(src="~/assets/img/child-props/girl-pink-hair.svg")
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
  transform: rotate(-20deg);
}

.adjust {
  margin-top: -200px;
}
</style>
