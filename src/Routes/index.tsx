//pages
import Home from '../page/Home'
import MorePage from '../page/More'
import FilePage from '../page/File'
// Layout
import { DefaultLayout } from '../components/layout'

const publicRoutes = [
    {path: '/', component: Home, },
    {path: '/more', component:MorePage, layout: DefaultLayout},
    {path: '/file', component:FilePage, layout: DefaultLayout},

]

export {publicRoutes}