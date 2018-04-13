import { IState } from '../interface/store';

const state: IState = {
    rankMenu: {
        head: [],
        body: []
    },
    popMenu: {
        head: [],
        body: []
    },
    risingMenu: {
        head: [],
        body: []
    },
    category: [],
    categoryItemTitle: '',
    categoryItemList: [],
    menuDetail: {
        headImgUrl: '',
        title: '',
        rate: '',
        doneNum: '',
        description: '',
        author: '',
        avatar: '',
        materials: [],
        steps: []
    }
};

export default state;