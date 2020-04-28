<template>
  <div>
    <div class="films-container">
      <horrors-container />
    </div>
  </div>
</template>

<script>
import HorrorsContainer from "./c/HorrorsContainer";

export default {
  name: "Horrors",

  components: {
    HorrorsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>