import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getTranslationList} from './store/actions'
import {Redirect} from 'react-router-dom'
import style from './style.css'
import withStyle from '../../withStyle'

class Translation extends PureComponent {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }

  render() {
    return this.props.login ? (
      <div className={style.container}>{this.getList()}</div>
    ) : (
      <Redirect to="/" />
    )
  }
  getList() {
    const {list} = this.props
    return list.map(item => {
      return (
        <div className={style.item} key={item.id}>
          {item.title}
        </div>
      )
    })
  }
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

const ServerTranslation = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Translation, style))

ServerTranslation.loadData = store => {
  return store.dispatch(getTranslationList())
}

export default ServerTranslation
