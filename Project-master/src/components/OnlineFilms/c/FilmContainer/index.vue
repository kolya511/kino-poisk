<template>
  <div>
    <header-text />

    <div v-for="film in getMainFilms" :key="film._id">
      <film-card :filmData="film" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FilmCard from "./c/FilmCard";

import HeaderText from "./c/HeaderText";

export default {
  name: "FilmContainer",

  components: {
    FilmCard,
    HeaderText
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

<style lang="scss" scoped>
.b{
  display: inline;
  
}
</style>