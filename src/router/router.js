import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage';
import numerosPrimos from '../components/pages/numerosPrimos';
import jsonConvert from '../components/pages/jsonConvert';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'numerosPrimos',
        path: '/numerosPrimos',
        component: numerosPrimos
    },
    {
        name: 'jsonConvert',
        path: '/jsonConvert',
        component: jsonConvert
    },
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router;
