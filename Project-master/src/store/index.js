import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       mainFilms:[],
       actionFilms:[],
       comedysFilms:[],
       detectivesFilms:[],
       fantasticsFilms:[],
       films:[],
       horrorsFilms:[],
       multFilmsFilms:[],
       serialsFilms:[],
       vesternsFilms:[],
    },
    mutations: {

    },
    actions:{

    },
    getters:{
     
    }
  })