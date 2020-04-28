<template>
  <div>
    <div class="films-container">
      <serials-container />
    </div>
  </div>
</template>

<script>
import SerialsContainer from "./c/SerialsContainer";

export default {
  name: "Serials",

  components: {
    SerialsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>