import axios from 'axios';

const state = {
    vacancies: []
};

const getters = {

};

const actions = {
    getJobs({ commit }) {
        axios.get("http://78.140.221.46/api/show_jobs/?format=json").then(response => {
            commit('setJobs', response.data);
        }).catch(error => {
            console.log(error)
        })
    }
};

const mutations = {
    setJobs(state, jobsArray) {
        state.vacancies = jobsArray
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}