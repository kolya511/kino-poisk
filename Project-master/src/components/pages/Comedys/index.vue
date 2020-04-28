<template>
  <div>
    <div class="films-container">
      <comedys-container />
    </div>
  </div>
</template>

<script>
import ComedysContainer from "./c/ComedysContainer";

export default {
  name: "Comedys",

  components: {
    ComedysContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>