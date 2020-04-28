import Vue from 'vue'
import VueRouter from 'vue-router'

import AddFilm from "./components/pages/AddFilm";
import OnlineFilms from "./components/OnlineFilms";
import Films from "./components/pages/Films";
import Serials from "./components/pages/Serials";
import Multfilms from "./components/pages/Multfilms";
import Vesterns from "./components/pages/Vesterns";
import ActionFilms from "./components/pages/ActionFilms";
import Detectives from "./components/pages/Detectives";
import Comedys from "./components/pages/Comedys";
import Fantastics from "./components/pages/Fantastics";
import Horrors from "./components/pages/Horrors";
import FilmPage from "./components/FilmPage";

Vue.use(VueRouter)

const routes = [
    { path: '/add-film', component: AddFilm },
    { path: '/', component: OnlineFilms },
    { path: '/films', component: Films },
    { path: '/serials', component: Serials },
    { path: '/multfilms', component: Multfilms },
    { path: '/vesterns', component: Vesterns },
    { path: '/actions', component: ActionFilms },
    { path: '/detectives', component: Detectives },
    { path: '/comedys', component: Comedys },
    { path: '/fantastics', component: Fantastics },
    { path: '/horrors', component: Horrors },
    { path: '/film-page/:filmId', component: FilmPage },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router