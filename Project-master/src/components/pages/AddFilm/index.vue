<template>
  <div>
    id
    <input type="number" min="1" name="filmId" v-model="filmId" />
    <br />Название
    <input type="text" name="filmName" v-model="filmName" />
    <br />Год выпуска
    <input type="number" name="yearOfRelease" v-model="yearOfRelease" />
    <br />
    <input type="button" value="Сохрнить" @click="btnClick()" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "addFilm",

  data() {
    return {
      filmId: null,
      filmName: null,
      yearOfRelease: null
    };
  },

  methods: {
    ...mapActions(["addMainFilm"]),
    ...mapActions(["saveFilm"]),

    btnClick() {
      this.addMainFilm({
        filmId: this.filmId,
        filmName: this.filmName,
        yearOfRelease: this.yearOfRelease
      });
    }
  },

  mounted() {
    this.saveFilm();
  }
};
</script>

<style lang="scss" scoped>
</style>