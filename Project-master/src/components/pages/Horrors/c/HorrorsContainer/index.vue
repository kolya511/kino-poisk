<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <horror-card v-for="film in horrors" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import HorrorCard from "./c/HorrorCard";
import horrors from "@/constants/horrors.js";

export default {
  name: "HorrorsContainer",

  components: {
    HeaderText,
    HorrorCard
  },

  data() {
    return {
      horrors
    };
  }
};
</script>

<style lang="scss" scoped>
</style>