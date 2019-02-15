import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import routers from '../Routes'
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import {getClientStore} from '../store/index'

const store = getClientStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(routers)}</div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
