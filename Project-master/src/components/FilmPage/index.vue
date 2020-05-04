<template>
  <div>
    <div v-for="film in getMainFilms" :key="film._id">
      <div v-if="film._id == currentFilmId">
        <div class="film-page-block">
          <div class="film-block">
            <div class="film-img-block">
              <img :src="film.imgSrc" alt="film photo" class="film-img" />
            </div>

            <div class="film-year">Год выпуска: {{film.yearOfRelease}}</div>
          </div>

          <div class="film-data">
            <div class="film-name">{{film.filmName}}</div>

            <pre class="film-description"><div>Описание:</div>{{film.description}}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilmPage",

  data() {
    return {
      currentFilmId: this.$route.params.filmId
    };
  },

  computed: {
    ...mapGetters(["getMainFilms"])
  },

  methods: {
    ...mapActions(["saveFilm"])
  },

  mounted() {
    this.saveFilm();
  }
};
</script>

<style scoped>
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
}

.film-img {
  width: 200px;
  height: 250px;
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