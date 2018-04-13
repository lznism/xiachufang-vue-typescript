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
}];

const router: Router = new Router({
    routes
});

export default router;
