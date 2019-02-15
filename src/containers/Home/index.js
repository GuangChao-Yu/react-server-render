import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'

import style from './style.css'
import withStyle from '../../withStyle'

class Home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  getMapList() {
    const {list} = this.props
    return list.map(item => {
      return <div className={style.item} key={item.id}>{item.title}</div>
    })
  }

  render() {
    return <div className={style.container}>{this.getMapList()}</div>
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

const ServerHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Home, style))

ServerHome.loadData = store => {
  return store.dispatch(getHomeList())
}

export default ServerHome
