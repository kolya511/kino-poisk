<template>
  <div>
    <div v-if="filmName" class="block">
      <div v-for="film in getMainFilms" :key="film._id">

        <div v-if="filmName == film.filmName">

          <router-link :to="`/film-page/${ film._id}`">
            <span class="film-card">
              <img :src="film.imgSrc" alt="film photo" class="film-photo" />
              <span class="film-name">{{ film.filmName }}</span>

              <span>Год выпуска: {{ film.yearOfRelease }}</span>
            </span>
          </router-link>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchFilm",

  data() {
    return {
      filmName: this.$route.params.name
    };
  },

  computed: {
    ...mapGetters(["getMainFilms"])
  },

};
</script>

<style lang="scss" scoped>

.block{
  display: flex;
  align-items: center;
  justify-content: center;
}

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
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
}
.film-photo {
  width: 240px;
  height: 290px;
  margin-top: 5px;
}

.film-card-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>