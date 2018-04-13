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

interface CategoryInfoItem {
    href: string;
    imgUrl: string;
    title: string;
};

export interface CategoryListItem {
    href: string;
    imgUrl: string;
    title: string;
    rate: string;
    doneNum: string;
};

export interface Category {
    title: string;
    info: CategoryInfoItem[];
};

export interface HomeItem {
    head: HomeHeadItem[];
    body: HomeBodyItem[];
}

export interface IState {
    rankMenu: HomeItem;
    popMenu: HomeItem;
    risingMenu: HomeItem;
    category: Category[];
    categoryItemTitle: string;
    categoryItemList: CategoryListItem[];
};
