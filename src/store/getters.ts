import { GetterTree } from 'vuex';
import { IState, HomeItem, Category, CategoryListItem, MenuDetail, RankDetail, SearchResultItem } from '../interface/store';

const getters: GetterTree<any, any> = {
    rankMenu(state: IState): HomeItem {
        return state.rankMenu;
    },
    popMenu(state: IState): HomeItem {
        return state.popMenu;
    },
    risingMenu(state: IState): HomeItem {
        return state.risingMenu;
    },
    category(state: IState): Category[] {
        return state.category;
    },
    categoryItemTitle(state: IState): string {
        return state.categoryItemTitle;
    },
    categoryItemList(state: IState): CategoryListItem[] {
        return state.categoryItemList;
    },
    menuDetail(state: IState): MenuDetail {
        return state.menuDetail;
    },
    rankDetail(state: IState): RankDetail {
        return state.rankDetail;
    },
    searchResults(state: IState): SearchResultItem[] {
        return state.searchResults;
    }
};

export default getters;