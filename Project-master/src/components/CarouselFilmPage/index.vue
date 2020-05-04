<template>
  <div>

    <div v-if="carouselId == 1">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="terminatorImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2019</div>
        </div>

        <div class="film-data">
          <div class="film-name">Термінатор: Фатум</div>

          <pre class="film-description"><div>Описание:</div></pre>
        </div>
      </div>
    </div>




     <div v-if="carouselId == 2">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="itImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2019</div>
        </div>

        <div class="film-data">
          <div class="film-name">Оно</div>

          <pre class="film-description"><div>Описание:</div></pre>
        </div>
      </div>
    </div>



     <div v-if="carouselId == 3">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="sherlokImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2016</div>
        </div>

        <div class="film-data">
          <div class="film-name">Шерлок Холмс</div>

          <pre class="film-description"><div>Описание:</div></pre>
        </div>
      </div>
    </div>



     <div v-if="carouselId == 4">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="avengersImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2018</div>
        </div>

        <div class="film-data">
          <div class="film-name">Мстители: Война Бесконечности</div>

          <pre class="film-description"><div>Описание:</div></pre>
        </div>
      </div>
    </div>




     <div v-if="carouselId == 5">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="djangoImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2012</div>
        </div>

        <div class="film-data">
          <div class="film-name">Джанго освобождённый</div>

          <pre class="film-description"><div>Описание:</div></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CarouselFilmPage",

  data() {
    return {
      carouselId: this.$route.params.carouselId,
    };
  },
  
  computed: {
      terminatorImgSrc() {
          return require(`@/assets/carouselImg/terminator.png`) 
      },

      itImgSrc() {
          return require(`@/assets/carouselImg/it.png`) 
      },

      sherlokImgSrc() {
          return require(`@/assets/carouselImg/Sherlok.png`) 
      },

      avengersImgSrc() {
          return require(`@/assets/carouselImg/Avengers.png`) 
      },

       djangoImgSrc() {
          return require(`@/assets/carouselImg/Django.png`) 
      },
  },
};
</script>

<style lang="scss" scoped>
.film-page-block {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.film-block {
  width: 250px;
  height: 300px;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
}

.film-img-block {
  margin-top: 10px;
  width: 240px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.film-img {
  width: 230px;
  height: 270px;
}

.film-name {
  font-size: 23px;
  line-height: 44px;
  color: #333333;
}

.film-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.film-description {
  background-color: rgb(233, 233, 233);
  color: black;
  font-size: 16px;
  width: 600px;
}

@media screen and (max-width: 895px) {
  .film-page-block {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 630px) {
  .film-description {
    width: 300px;
  }
}
</style>