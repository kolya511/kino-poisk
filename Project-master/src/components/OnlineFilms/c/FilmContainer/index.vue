<template>
  <div>
    <header-text />

    <div class="columns is-multiline is-vcentered">
      <film-card v-for="film in onlinFilms" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import FilmCard from "./c/FilmCard";
import onlinFilms from "@/constants/onlinFilms.js";
import HeaderText from "./c/HeaderText";

export default {
  name: "FilmContainer",

  components: {
    FilmCard,
    HeaderText
  },

  data() {
    return {
      onlinFilms
    };
  }
};
</script>

<style lang="scss" scoped>
</style>