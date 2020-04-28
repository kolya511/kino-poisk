<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <vestern-card v-for="film in vesterns" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import VesternCard from "./c/VesternCard";
import vesterns from "@/constants/vesterns.js";

export default {
  name: "VesternContainer",

  components: {
    HeaderText,
    VesternCard
  },

  data() {
    return {
      vesterns
    };
  }
};
</script>

<style lang="scss" scoped>
</style>