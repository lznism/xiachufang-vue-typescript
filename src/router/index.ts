import Vue, { AsyncComponent } from 'vue';
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router';

Vue.use(Router);

const routes: RouteConfig[] = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
}];

const router: Router = new Router({
    routes
});

export default router;
