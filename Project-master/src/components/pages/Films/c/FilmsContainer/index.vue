<template>
<div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <film-card v-for="film in Films" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import FilmCard from "./c/FilmCard";
import Films from "@/constants/Films.js";

export default {
  name: "FilmsContainer",

  components: {
    HeaderText,
    FilmCard
  },

  data() {
    return {
      Films
    }
  },
  
};
</script>

<style lang="scss" scoped>

</style>