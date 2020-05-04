
export default {
    state: {
        isValidStatus: false
    },
    mutations: {
        changeValidStatus(state){
            state.isValidStatus = true
        }
    },
    actions: {
        adminValidation({commit}, data){
            if(data.email == "qwerty" && data.password == 12345)
            commit('changeValidStatus')
        }
    },
    getters: {
            getValidStatus: state => state.isValidStatus
    }
}