import { GetterTree } from 'vuex';
import { IState, HomeItem, Category } from '../interface/store';

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
    }
};

export default getters;