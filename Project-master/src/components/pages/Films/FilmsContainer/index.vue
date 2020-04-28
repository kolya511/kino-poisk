<template>
  <div>
    <header-text />

    <div class="films-container">
      <film-card />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import FilmCard from "./c/FilmCard";

export default {
  name: "FilmsContainer",

  components: {
    HeaderText,
    FilmCard
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  margin-top: 20px;
}
</style>