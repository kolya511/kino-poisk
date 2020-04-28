<template>
  <div>
    <header-text />
    <div class="columns is-multiline is-vcentered">
      <serial-card v-for="film in Serials" :filmData="film" :key="film.id" />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import SerialCard from "./c/SerialCard";
import Serials from "@/constants/Serials.js";

export default {
  name: "SerialContainer",

  components: {
    HeaderText,
    SerialCard
  },

  data() {
    return {
      Serials
    };
  }
};
</script>

<style lang="scss" scoped>
</style>