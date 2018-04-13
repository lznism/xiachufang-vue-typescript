import axios from 'axios';
import { ActionTree } from 'vuex';
import http from '../utils/http';
import { HttpResponse } from '../interface/request';
import router from '../router/index';
import * as types from './mutation-types';

const actions: ActionTree<any, any> = {
    async getHome({commit}) {
        const result: HttpResponse = await http.get('/home')
            .then(res => res)
            .catch(err => ({code: -1, message: err}));
        if (result.code === 0) {
            commit(types.SET_RANK_MENU, {
                head: result.data.rankHead,
                body: result.data.rankBody
            });
            commit(types.SET_POP_MENU, {
                head: result.data.popHead,
                body: result.data.popBody
            });
            commit(types.SET_RISING_MENU, {
                head: result.data.newMenuHead,
                body: result.data.newMenuBody
            });
        } else {
            console.error(result.message);
        }
    },

    async getCategory({commit}) {
        const result: HttpResponse = await http.get('/category')
            .then(res => res)
            .catch(err => ({code: -1, message: err}));
        
        if (result.code === 0) {
            commit(types.SET_CATEGORY, result.data);
        } else {
            console.error(result.message);
        }
    },

    async getCategoryItemList({commit}, {id, type=''}) {
        const result: HttpResponse = await http.get(`/category-item-list?id=${id}&type=${type}`)
            .then(res => res)
            .catch(err => ({code: -1, message: err}));
        
        if (result.code === 0) {
            commit(types.SET_CATEGORY_ITEM_LIST, result.data);
        } else {
            console.error(result.message);
        }
    },

    async getMenuDetail({commit}, id) {
        const result: HttpResponse = await http.get(`/detail/${id}`)
            .then(res => res)
            .catch(err => ({code: -1, message: err}));
        
        if (result.code === 0) {
            commit(types.SET_MENU_DETAIL, result.data);
        } else {
            console.error(result.message);
        }
    },

    async getRankDetail({commit}, type) {
        const result: HttpResponse = await http.get(`/explore/${type}`)
            .then(res => res)
            .catch(err => ({code: -1, message: err}));

        if (result.code === 0) {
            commit(types.SET_RANK_DETAIL, result.data);
        } else {
            console.error(result.message);
        }
    },

    async getSearch({commit}, keyword) {
        const result: HttpResponse = await http.get(`/search?keyword=${keyword}`)
            .then(res => res)
            .catch(err => ({code: -1, message: err}));
        
        if (result.code === 0) {
            if (result.isRedirect) {
                let url = result.redirectUrl.match(/\/category\/\d+/)[0];
                router.push({path: url});
            } else {
                commit(types.SET_SEARCH_RESULT, result.data);
                router.push({path: '/search', query: {keyword}});
            }
        }
    }
};

export default actions;