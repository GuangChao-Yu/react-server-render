import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import {reducer as headerReducer} from '../components/Header/store/index'
import {reducer as homeReducer} from '../containers/Home/store'
import {reducer as translationReducer} from '../containers/Translation/store/index'
import clientAxios from '../api/api-client'
import serverAxios from '../api/api-server'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})

export const getStore = req => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
  )
}

export const getClientStore = () => {
  // 创建初始化数据带入createStore第二个参数座位默认值
  const defaultState = window.context.state
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  )
}
