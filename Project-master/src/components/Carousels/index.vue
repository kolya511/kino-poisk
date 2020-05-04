<template>
<div class="carousel-border">
 
  <b-carousel class="carousel column is-10">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <router-link :to="`/carousel-film-page/${carousel.id}`">
      <section>
        <figure class="image is-3by1">
          <img :src="carousel.slide" />
        </figure>
      </section>
       </router-link>
    </b-carousel-item>
  </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousels",

  data() {
    return {
      carousels: [
        { slide: require("@/assets/carouselSlides/Terminator.jpg"), id: 1 },
        { slide: require("@/assets/carouselSlides/it.png"), id: 2 },
        { slide: require("@/assets/carouselSlides/Sherlok.png"), id: 3 },
        { slide: require("@/assets/carouselSlides/Avengers.png"), id: 4 },
        { slide: require("@/assets/carouselSlides/Django.png"), id: 5 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel{
  margin: 0 auto;  
}
.carousel-border{
  background-color: rgb(194, 194, 194);

}
</style>