<template>
  <div>
    <header-text />

    <div class="serial-container">
      <serial-card />
    </div>
  </div>
</template>

<script>
import HeaderText from "./c/HeaderText";
import SerialCard from "./c/SerialCard";

export default {
  name: "SerialContainer",

  components: {
    HeaderText,
    SerialCard
  }
};
</script>

<style lang="scss" scoped>
.serial-container {
  margin-top: 20px;
}
</style>