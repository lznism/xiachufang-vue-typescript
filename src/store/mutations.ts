import * as types from './mutation-types';
import { IState, HomeItem } from '../interface/store';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
    [types.SET_RANK_MENU](state: IState, rankMenu: HomeItem) {
        state.rankMenu = rankMenu;
    },
    [types.SET_POP_MENU](state: IState, popMenu: HomeItem) {
        state.popMenu = popMenu;
    },
    [types.SET_RISING_MENU](state: IState, risingMenu: HomeItem) {
        state.risingMenu = risingMenu;
    }
};

export default mutations;