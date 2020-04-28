<template>
  <div>
    <div class="films-container">
      <fantastics-container />
    </div>
  </div>
</template>

<script>
import FantasticsContainer from "./c/FantasticsContainer";

export default {
  name: "Fantastics",

  components: {
    FantasticsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>