<template>
  <div class="film-card-block">
    <div class="film-card" v-for="FilmCard in MultFilms" :key="FilmCard.id">
      <img src alt="film photo" class="film-photo" />
      <span class="film-name">{{FilmCard.name}}</span>
      <span class="film-rate">
        <film-rate />
      </span>
      <span>Год выпуска: {{FilmCard.yearOfRelease}}</span>
    </div>
  </div>
</template>

<script>
import MultFilms from "@/constants/MultFilms.js";
import FilmRate from "@/components/FilmRate";

export default {
  name: "FilmCard",

  components: {
    FilmRate
  },

  data() {
    return {
      MultFilms
    };
  }
};
</script>

<style lang="scss" scoped>
.film-card {
  background-color: rgba(224, 224, 224, 0.904);
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  margin: 20px;
}
.film-photo {
  width: 240px;
  height: 270px;
  margin-top: 5px;
}
.film-rate {
  background-color: rgb(0, 0, 0);
}
.film-card-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
