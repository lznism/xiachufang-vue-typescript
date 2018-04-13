import Vue, { AsyncComponent } from 'vue';
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router';

Vue.use(Router);

const routes: RouteConfig[] = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
}, {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/index.vue')
}, {
    path: '/category/:id',
    redirect: '/category/:id/pop'
}, {
    path: '/category/:id',
    name: 'category-item',
    component: () => import('@/views/category-item/index.vue'),
    children: [{
        path: 'pop',
        name: 'category-item:pop',
        component: () => import('@/views/category-item/pop.vue')
    }, {
        path: 'recent',
        name: 'category-item:recent',
        component: () => import('@/views/category-item/recent.vue')
    }]
}, {
    path: '/recipe/:id',
    name: 'menu-item',
    component: () => import('@/views/menu-item/index.vue')
}, {
    path: '/explore/:type',
    name: 'explore',
    component: () => import('@/views/rank-detail/index.vue')
}, {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search-result/index.vue')
}];

const router: Router = new Router({
    routes
});

export default router;
