import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import jobs from './modules/Jobs.js';
import Vue from "vue";
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        jobs
    },
    plugins: [createPersistedState()]
});