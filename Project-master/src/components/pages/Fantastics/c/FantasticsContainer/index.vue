<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <fantastics-card v-for="film in fantastics" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import FantasticsCard from "./c/FantasticsCard";
import fantastics from "@/constants/fantastics.js";

export default {
  name: "FantasticsContainer",

  components: {
    HeaderText,
    FantasticsCard
  },

  data() {
    return {
      fantastics
    };
  }
};
</script>

<style lang="scss" scoped>
</style>