import express from 'express'
import proxy from 'express-http-proxy'
import {matchRoutes} from 'react-router-config'
import {render} from './until'
import {getStore} from '../store/index'
import routers from '../Routes'

const app = express()
app.use(express.static('public'))

app.use(
  '/api',
  proxy('http://47.95.113.63', {
    proxyReqPathResolver: function(req) {
      return '/ssr/api' + req.url
    }
  })
)

app.get('*', (req, res) => {
  const store = getStore(req)
  // 根据路由的路径，来往store里面添加数据
  const matchedRoutrs = matchRoutes(routers, req.path)
  // 让 matchedRoutrs 里面所有组件对应的loadData方法执行
  const promises = []
  matchedRoutrs.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve)
      })
      promises.push(promise)
    }
  })
  Promise.all(promises)
    .then(() => {
      const context = {css:[]}
      const html = render(store, routers, req, context)
      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else if (context.NOT_FOUND) {
        res.status(404)
      }
      res.send(html)
    })
    .catch(() => {})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
