<template>
  <div>
    <div class="films-container">
      <multfilms-container />
    </div>
  </div>
</template>

<script>
import MultfilmsContainer from "./c/MultfilmsContainer";

export default {
  name: "Multfilms",

  components: {
    MultfilmsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>