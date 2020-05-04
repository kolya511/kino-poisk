<template>
  <div>
    <div v-if="getValidStatus == true">
    Название
    <input type="text" name="filmName" v-model="filmName" />
    <br />Год выпуска
    <input type="number" name="yearOfRelease" v-model="yearOfRelease" />
    <br />Сылка на фото
    <input type="text" name="imgSrc" v-model="imgSrc" class="inp" />
    <br />Категория
    <select name="film-categories" v-model="filmCategory">
      <option value="film">Фильм</option>
      <option value="serial">Сериал</option>
      <option value="multfilm">Мультфильм</option>
      <option value="action">Боевик</option>
      <option value="action">Боевик</option>
      <option value="vestern">Вестерн</option>
      <option value="detective">Детектив</option>
      <option value="comedy">Комедия</option>
      <option value="fantastic">Фантастические</option>
      <option value="horror">Ужасы</option>
    </select>
    <br />Описание фильма
    <br />
    <textarea name="description" rows="10" cols="50" v-model="description"></textarea>
    <br />
    <b-button @click="btnClick()" :disabled="!isButtonDisabled" type="is-success">Сохрнить</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "addFilm",

  data() {
    return {
      filmName: null,
      yearOfRelease: null,
      imgSrc: null,
      filmCategory: null,
      description: null
    };
  },

  methods: {
    ...mapActions(["addMainFilm"]),
    ...mapActions(["saveFilm"]),

    btnClick() {
      this.addMainFilm({
        filmName: this.filmName,
        yearOfRelease: this.yearOfRelease,
        imgSrc: this.imgSrc,
        filmCategory: this.filmCategory,
        description: this.description
      });

      this.$buefy.snackbar.open({
        message: "Сохранено",
        type: "is-success",
        position: "is-top",
        actionText: null
      });
    }
  },

  computed: {
    ...mapGetters(["getValidStatus"]),

    isButtonDisabled() {
      if (
        this.filmName &&
        this.yearOfRelease &&
        this.imgSrc &&
        this.filmCategory &&
        this.description.length > 0
      ) {
        return true;
      } else return false;
    }
  },

  mounted() {
    this.saveFilm();
  }
};
</script>

<style scoped>
.inp {
  width: 400px;
}
</style>