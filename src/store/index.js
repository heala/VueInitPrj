import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: ''
    },
    mutations: {
        setName(state, name){
            state.name = name;
        }
    },
    getters: {

    },
    actions: {

    }
});
export default store