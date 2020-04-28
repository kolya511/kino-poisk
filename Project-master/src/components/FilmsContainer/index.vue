<template>
  <div>
    <header-text />
    <div class="FilmsContainer">
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
.FilmsContainer{
  margin-top: 30px;
}

</style>