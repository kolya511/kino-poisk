<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <action-film-card v-for="film in actionFilms" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import ActionFilmCard from "./c/ActionFilmCard";
import actionFilms from "@/constants/actionFilms.js";

export default {
  name: "ActionFilmsContainer",

  components: {
    HeaderText,
    ActionFilmCard
  },

  data() {
    return {
      actionFilms
    };
  }
};
</script>

<style lang="scss" scoped>
</style>