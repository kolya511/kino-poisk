<template>
  <div>
    <router-link :to="`/film-page/${ filmData._id }`">
      <span class="film-card">
        <img src alt="film photo" class="film-photo" />
        <span class="film-name">{{ filmData.filmName }}</span>
        <span class="film-rate">
          <film-rate />
        </span>
        <span>Год выпуска: {{ filmData.yearOfRelease }}</span>
      </span>
    </router-link>
  </div>
</template>

<script>
import FilmRate from "@/components/FilmRate";

export default {
  name: "FilmCard",

  components: {
    FilmRate
  },

  props: {
    filmData: {
      type: Object,
      required: true
    }
  }

  /*   computed: {
    filmSrc() {
      return require(`@/assets/onlineFilmsPhoto/${filmData.img}`);
    }
  }, */
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
.film-card-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
