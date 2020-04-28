<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <detective-card v-for="film in detectives" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import DetectiveCard from "./c/DetectiveCard";
import detectives from "@/constants/detectives.js";

export default {
  name: "VesternContainer",

  components: {
    HeaderText,
    DetectiveCard
  },

  data() {
    return {
      detectives
    };
  }
};
</script>

<style lang="scss" scoped>
</style>