import Vue from 'vue';
import Vuex from 'vuex';
import mainFilms from "./modules/mainFilms";
import adminValidation from "./modules/adminValidation"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules:{
    mainFilms,
    adminValidation
  }
})