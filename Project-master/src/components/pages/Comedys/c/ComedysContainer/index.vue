<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <comedy-card v-for="film in comedys" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import ComedyCard from "./c/ComedyCard";
import comedys from "@/constants/comedys.js";

export default {
  name: "VesternContainer",

  components: {
    HeaderText,
    ComedyCard
  },

  data() {
    return {
      comedys
    };
  }
};
</script>

<style lang="scss" scoped>
</style>