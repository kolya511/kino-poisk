<template>
  <div>
    <header-text />

    <div v-for="film in getMainFilms" :key="film._id">
      <div v-if="film.filmCategory == category">
        <film-card :filmData="film" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FilmCard from "./c/FilmCard";

import HeaderText from "./c/HeaderText";

export default {
  name: "SerialContainer",

  data() {
    return {
      film: "serial"
    };
  },

  components: {
    FilmCard,
    HeaderText
  },

  computed: {
    ...mapGetters(["getMainFilms"]),
    category(){
      return this.film
    }
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

</style>