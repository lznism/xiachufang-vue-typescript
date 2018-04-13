interface HomeHeadItem {
    imgUrl: string;
    title: string;
    description: string;
    href: string;
};

interface HomeBodyItem {
    imgUrl: string;
    href: string;
    title: string;
    rate: string;
    doneNum: string;
};

interface HomeItem {
    head: HomeHeadItem[];
    body: HomeBodyItem[];
}

export interface IState {
    rankMenu: HomeItem;
    popMenu: HomeItem;
    risingMenu: HomeItem;
};