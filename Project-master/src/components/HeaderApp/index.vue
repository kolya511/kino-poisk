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
          <input type="search" placeholder="search" class="inp-search" />
          <img :src="SearchIcon" alt="search" class="btn-search" />
        </div>
      </div>
    </template>

    <template slot="start" class="menu-block columns">
      <div class="column">
        <b-navbar-item class="menu-item-block" tag="router-link" :to="{ path: '/films' }">
          <span class="menu-items" @click="changeColor()">Фильмы</span>
        </b-navbar-item>
      </div>
      <div class="column">
        <b-navbar-item class="menu-item-block" tag="router-link" :to="{ path: '/serials' }">
          <span class="menu-items">Сериалы</span>
        </b-navbar-item>
      </div>
      <div class="column">
        <b-navbar-item class="menu-item-block" tag="router-link" :style="{active: isActiveClassColor, 'bacgroundColor': black}" :to="{ path: '/multfilms' }">
          <span class="menu-items" :style="{active: isActiveClassColor, 'bacgroundColor': black}">Мультфильмы</span>
        </b-navbar-item>
      </div>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <!-- -------------------------------buefy sign up---------------------------------------- -->
        <sign-up />

        <!------------------------------------------------------------------------------ -->

        <!-- -------------------------------buefy sign in---------------------------------------- -->
        <sign-in />
        <!------------------------------------------------------------------------------ -->

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
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SearchIcon from "@/assets/icons/search.svg";

export default {
  name: "HeaderApp",

  components: {
    SignUp,
    SignIn
  },

  data() {
    return {
      clickSearchButton: 0,
      SearchIcon,
      isActiveClassColor: false
    };
  },

  methods: {
    clickInSearchButton() {
      this.clickSearchButton++;
    },
    changeColor(){
      this.isActiveClassColor = true
    }
  },
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

.btn-search {
  width: 23px;
  height: 23px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
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

</style>