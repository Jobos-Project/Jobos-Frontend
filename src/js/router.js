import Main from './components/Main.vue';
import Vacancy from './components/Vacancy.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/:id',
        name: 'Vacancy',
        component: Vacancy
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];
export { routes };