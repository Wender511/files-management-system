//pages
import Home from '../page/Home'
import MorePage from '../page/More'
// Layout
import { DefaultLayout } from '../components/layout'

const publicRoutes = [
    {path: '/', component: Home, },
    {path: '/more', component:MorePage, layout: DefaultLayout}
]

export {publicRoutes}