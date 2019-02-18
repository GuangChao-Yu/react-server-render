import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
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
      return (
        <Fragment>
          <Helmet>
            <title>My Title</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <div className={style.item} key={item.id}>
            {item.title}
          </div>
        </Fragment>
      )
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
