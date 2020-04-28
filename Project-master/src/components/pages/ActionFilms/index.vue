<template>
  <div>
    <div class="films-container">
      <action-films-container />
    </div>
  </div>
</template>

<script>
import ActionFilmsContainer from "./c/ActionFilmsContainer";

export default {
  name: "ActionFilms",

  components: {
    ActionFilmsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>