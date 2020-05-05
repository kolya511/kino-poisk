<template>
  <b-navbar class="header-block">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span id="logo-text">KinoPoisk</span>
      </b-navbar-item>

      <div class="search-block">
        <img
          :src="SearchIcon"
          alt="search"
          title="search"
          class="search-input"
          @click="clickInSearchButton()"
        />

        <div v-if="clickSearchButton % 2 == true" class="search-block">
          <input type="search" placeholder="search" v-model="inpValue" class="inp-search" />
          <router-link :to="`/search-film/${inpValue}`">
          <img :src="SearchIcon" alt="search" class="btn-search" />
          </router-link>
        </div>
      </div>

      <!-- -------------------------------buefy sign up---------------------------------------- -->
      <div v-if="clickSearchButton % 2 == false" class="add-film-btn">
        <addFilmAvtorisation />
      </div>
      <!------------------------------------------------------------------------------ -->
    </template>

    <template slot="start" class="menu-block columns">
      <div class="column">
        <b-navbar-item class="menu-item-block" tag="router-link" :to="{ path: '/films' }">
          <span class="menu-items">Фильмы</span>
        </b-navbar-item>
      </div>
      <div class="column">
        <b-navbar-item class="menu-item-block" tag="router-link" :to="{ path: '/serials' }">
          <span class="menu-items">Сериалы</span>
        </b-navbar-item>
      </div>
      <div class="column">
        <b-navbar-item class="menu-item-block" tag="router-link" :to="{ path: '/multfilms' }">
          <span class="menu-items">Мультфильмы</span>
        </b-navbar-item>
      </div>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div id="language">
          Язык
          <select title="language">
            <option value="ukr" selected>Русский</option>
          </select>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import SearchIcon from "@/assets/icons/search.svg";
import addFilmAvtorisation from "@/components/addFilmAvtorisation";

export default {
  name: "HeaderApp",

  components: {
    addFilmAvtorisation
  },

  data() {
    return {
      clickSearchButton: 0,
      SearchIcon,
      inpValue: null
    };
  },

  methods: {
    clickInSearchButton() {
      this.clickSearchButton++;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
}
.header-block {
  background-color: rgb(255, 255, 255);
}

#logo-text {
  color: #000000;
  font-size: 30px;
}
#language {
  color: #000000;
}

.search-input {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.search-block {
  display: flex;
  align-items: center;
}

.inp-search {
  width: 130px;
  margin-left: 15px;
}

.btn-search {
  width: 23px;
  height: 23px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  margin-right: 10px;
  margin-top: 6px;
}
.menu-items {
  color: rgb(0, 0, 0);
}
.menu-item-block:hover {
  background-color: rgba(0, 0, 0, 0.164);
}
.menu-item-block {
  margin-left: 60px;
}

.add-film-btn {
  display: flex;
  align-items: center;
  margin-left: 9%;
}

@media screen and (max-width: 480px) {

  .inp-search {
    width: 100px;
    margin-left: 0px;
  }

  .add-film-btn {
    margin-left: 0px;
    margin-left: 0%;
  }

  .btn-search {
    margin-right: 0px;
  }
}


@media screen and (max-width: 350px) {
.search-block{
  visibility: hidden;
}
}
</style>