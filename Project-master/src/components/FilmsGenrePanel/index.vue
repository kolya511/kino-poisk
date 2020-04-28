<template>
  <div>
    <div class="film-genre">
      <router-link to="actions" style="color: white">
        <span class="gener-menu">Боевики</span>
      </router-link>
      <router-link to="vesterns" style="color: white">
        <span class="gener-menu">Вестерны</span>
      </router-link>
      <router-link to="detectives" style="color: white">
      <span class="gener-menu">Детективы</span>
      </router-link>
      <router-link to="comedys" style="color: white">
      <span class="gener-menu">Комедии</span>
       </router-link>
       <router-link to="fantastics" style="color: white">
      <span class="gener-menu">Фантастические</span>
      </router-link>
      <router-link to="horrors" style="color: white">
      <span class="gener-menu">Ужасы</span>
      </router-link>
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
  height: 70px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgb(34, 34, 34);;
}
.gener-menu{
  color: black;
}
.gener-menu:hover {
  color: rgba(0, 0, 0, 0.76);
}
@media screen and (max-width: 767px) {
  .film-genre {
    display: flex;
    height: 100px;
    background-color: rgb(255, 255, 255);
    color: white;
    flex-wrap: wrap;
  }
  .gener-menu {
    margin: 15px;
  }
 
}
</style>