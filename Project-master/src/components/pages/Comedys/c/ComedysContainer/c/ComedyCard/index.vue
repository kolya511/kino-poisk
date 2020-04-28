<template>
  <div class="column">
    <span class="film-card">
      <img :src="filmSrc" alt="film photo" class="film-photo" />
      <span class="film-name">{{filmData.name}}</span>
      <span class="film-rate">
        <film-rate />
      </span>
      <span>Год выпуска: {{filmData.yearOfRelease}}</span>
    </span>
  </div>
</template>

<script>
import FilmRate from "@/components/FilmRate";

export default {
  name: "ComedysCard",

  components: {
    FilmRate
  },

props: {
    filmData: {
      type: Array,
      require: true
    }
  },

  computed: {
    filmSrc() {
      return require(`@/assets/comedysPhoto/${this.filmData.img}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.film-card {
  background-color: rgba(246, 242, 242, 0.904);
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  margin: 20px;
  border: 0.5px solid rgb(207, 207, 207);
}
.film-photo {
  width: 240px;
  height: 290px;
  margin-top: 5px;
}
.film-rate {
  background-color: rgb(0, 0, 0);
}
</style>