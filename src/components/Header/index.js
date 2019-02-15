import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actions} from './store/index'
import style from './style.css'
import withStyle from '../../withStyle'

class Header extends Component {
  render() {
    const {login, handleLogin, handleLogOut} = this.props
    return (
      <div className={style.container}>
        <Link className={style.item} to="/">首页</Link>
        {login ? (
          <Fragment>
            <Link className={style.item} to="/translation">翻译列表</Link>
            <div className={style.item} onClick={handleLogOut}>退出</div>
          </Fragment>
        ) : (
          <div className={style.item} onClick={handleLogin}>登录</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.header.login
})

const mapDispatch = dispatch => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogOut() {
    dispatch(actions.logout())
  }
})

export default connect(
  mapStateToProps,
  mapDispatch
)(withStyle(Header, style))
