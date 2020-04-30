import Vue from 'vue';
import Vuex from 'vuex';
import mainFilms from "./modules/mainFilms";


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
    
  /*   actionFilms,
    comedysFilms,
    detectivesFilms,
    fantasticsFilms,
    films,
    horrorsFilms,
    multFilmsFilms,
    serialsFilms,
    vesternsFilms, */
  }
})