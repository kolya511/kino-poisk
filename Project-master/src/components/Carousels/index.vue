<template>
<div class="carousel-border">
 
  <b-carousel class="carousel column is-10">
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section>
        <figure class="image is-3by1">
          <img :src="carousel.slide" />
        </figure>
      </section>
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
        { slide: require("@/assets/carouselSlides/Terminator.jpg") },
        { slide: require("@/assets/carouselSlides/it.png") },
        { slide: require("@/assets/carouselSlides/Sherlok.png") },
        { slide: require("@/assets/carouselSlides/Avengers.png") },
        { slide: require("@/assets/carouselSlides/Django.png") }
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