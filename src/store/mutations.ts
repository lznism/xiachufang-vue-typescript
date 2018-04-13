import * as types from './mutation-types';
import { IState, HomeItem, Category, CategoryListItem } from '../interface/store';
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
    },
    [types.SET_CATEGORY](state: IState, category: Category[]) {
        state.category = category;
    },
    [types.SET_CATEGORY_ITEM_LIST](state: IState, list: CategoryListItem[]) {
        state.categoryItemList = list;
    },
    [types.SET_CATEGORY_ITEM_TITLE](state: IState, title: string) {
        state.categoryItemTitle = title;
    }
};

export default mutations;