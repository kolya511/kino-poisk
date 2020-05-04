import axios from "axios";

export default {
    state: {
        mainFilms: []
    },
    mutations: {
        setFilmToList(state, filmData) {
            state.mainFilms = [...filmData]
        },

        addMainFilmToList(state, filmData) {
            state.mainFilms.push(filmData)
        }
    },
    actions: {

        saveFilm({ commit }) {
            axios.get('http://localhost:3000/films')

                .then(res => res.data)

                .then(resData => {
                    if (resData.success)
                        commit('setFilmToList', resData.data)

                    else
                        throw new Error("Fatch faild")
                })
        },


        addMainFilm({ commit }, film) {
            axios.post('http://localhost:3000/films/add-film', film)

                .then(res => res.data)

                .then(resData => {
                    if (resData.success)
                        commit('addMainFilmToList', resData.data)

                    else
                        throw new Error("Fatch faild")
                })
        },
    },
    getters: {
        getMainFilms: state => state.mainFilms
    },
}