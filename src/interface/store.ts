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

export interface Material {
    ingredient: string;
    weight: string;
};

export interface Step {
    subTitle: string;
    description: String;
    stepImg?: string;
}

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
};

export interface MenuDetail {
    headImgUrl?: string;
    title: string;
    rate: string;
    doneNum: string;
    description: string;
    author: string;
    avatar: string;
    materials: Material[];
    steps: Step[];
};

export interface ExploreDetail {
    imgUrl: string;
    menuName: string;
    author: string;
    doneNum: string;
    authorImg: string;
    href: string;
};

export interface RankDetail {
    title: string;
    explore: ExploreDetail[];
};

export interface SearchResultItem {
    href: string;
    imgUrl: string;
    title: string;
    rate: string;
    doneNum: string;
};

export interface IState {
    rankMenu: HomeItem;
    popMenu: HomeItem;
    risingMenu: HomeItem;
    category: Category[];
    categoryItemTitle: string;
    categoryItemList: CategoryListItem[];
    menuDetail: MenuDetail;
    rankDetail: RankDetail;
    searchResults: SearchResultItem[];
};