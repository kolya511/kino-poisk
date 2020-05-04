<template>
  <div>
    <div class="film-genre">
      <b-navbar-item tag="router-link" :to="{ path: '/actions' }">
        <span class="gener-menu">Боевики</span>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/vesterns' }">
        <span class="gener-menu">Вестерны</span>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/detectives' }">
        <span class="gener-menu">Детективы</span>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/comedys' }">
        <span class="gener-menu">Комедии</span>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/fantastics' }">
        <span class="gener-menu">Фантастические</span>
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/horrors' }">
        <span class="gener-menu">Ужасы</span>
      </b-navbar-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmGenrePanel"
};
</script>

<style scoped>
.film-genre {
  display: flex;
  height:70px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgb(34, 34, 34);
}
.gener-menu {
  color: black;
}
.gener-menu:hover {
  color: rgba(0, 0, 0, 0.76);
}
@media screen and (max-width: 767px) {
  .film-genre {
    display: flex;
    height: 125px;
    background-color: rgb(255, 255, 255);
    color: white;
    flex-wrap: wrap;
  }
  .gener-menu {
    margin: 15px;
  }
}
</style>