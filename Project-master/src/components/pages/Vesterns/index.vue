<template>
  <div>
    <div class="films-container">
      <vesterns-container />
    </div>
  </div>
</template>

<script>
import VesternsContainer from "./c/VesternsContainer";

export default {
  name: "Vesterns",

  components: {
    VesternsContainer
  }
};
</script>

<style lang="scss" scoped>
.films-container {
  display: flex;
  justify-content: center;
}
</style>