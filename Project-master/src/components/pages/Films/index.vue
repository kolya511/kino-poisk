<template>
  <div>
    <div class="films-container">
      <films-container />
    </div>
  </div>
</template>

<script>
import FilmsContainer from "./c/FilmsContainer";

export default {
  name: "films",

  components: {
    FilmsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>