import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentArticle: null
    },
    mutations: {
        setCurrentArticle(state, payload){
            state.currentArticle = payload.article;
        }
    },
    getters: {

    },
    actions: {

    }
});
export default store