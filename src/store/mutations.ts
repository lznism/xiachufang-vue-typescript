import * as types from './mutation-types';
import { IState, HomeItem, Category, CategoryListItem, MenuDetail, RankDetail, SearchResultItem } from '../interface/store';
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
    },
    [types.SET_MENU_DETAIL](state: IState, detail: MenuDetail) {
        state.menuDetail = detail;
    },
    [types.SET_RANK_DETAIL](state: IState, detail: RankDetail) {
        state.rankDetail = detail;
    },
    [types.SET_SEARCH_RESULT](state: IState, results: SearchResultItem[]) {
        state.searchResults = results;
    }
};

export default mutations;