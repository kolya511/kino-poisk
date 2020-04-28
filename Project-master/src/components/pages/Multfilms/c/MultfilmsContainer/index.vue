<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <film-card v-for="film in MultFilms" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import FilmCard from "./c/FilmCard";
import MultFilms from "@/constants/MultFilms.js";

export default {
  name: "FilmsContainer",

  components: {
    HeaderText,
    FilmCard
  },

  data() {
    return {
      MultFilms
    }
  },
};
</script>

<style lang="scss" scoped>

</style>