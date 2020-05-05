<template>
  <div>
    <router-link :to="`/film-page/${ filmData._id}`">
      <span class="film-card">
        <img :src="filmData.imgSrc " alt="film photo" class="film-photo" />
        <span class="film-name">{{ filmData.filmName }}</span>

        <span>Год выпуска: {{ filmData.yearOfRelease }}</span>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FilmCard",

  props: {
    filmData: {
      type: Object,
      required: true
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
