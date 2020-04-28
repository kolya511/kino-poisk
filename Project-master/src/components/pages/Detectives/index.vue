<template>
  <div>
    <div class="films-container">
      <detectives-container />
    </div>
  </div>
</template>

<script>
import DetectivesContainer from "./c/DetectivesContainer";

export default {
  name: "Detectives",

  components: {
    DetectivesContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>