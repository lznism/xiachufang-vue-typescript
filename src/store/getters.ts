import { GetterTree } from 'vuex';
import { IState, HomeItem } from '../interface/store';

const getters: GetterTree<any, any> = {
    rankMenu(state: IState): HomeItem {
        return state.rankMenu;
    },
    popMenu(state: IState): HomeItem {
        return state.popMenu;
    },
    risingMenu(state: IState): HomeItem {
        return state.risingMenu;
    }
};

export default getters;