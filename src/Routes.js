import App from './App'
import Home from './containers/Home'
import Translation from './containers/Translation'
import NotFound from './containers/NotFound'

const routers = [
  {
    key: 'app',
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        key: 'home',
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        key: 'translation',
        path: '/translation',
        component: Translation,
        exact: true,
        loadData: Translation.loadData
      },
      {
        component: NotFound
      }
    ]
  }
]

export default routers
