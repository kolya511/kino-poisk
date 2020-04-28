<template>
  <div>
    <div class="films-container">
      <film-container />
    </div>
  </div>
</template>

<script>
import FilmContainer from "./c/FilmContainer";

export default {
  name: "OnlineFilms",

  components: {
    FilmContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>