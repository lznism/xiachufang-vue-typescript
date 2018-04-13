import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});