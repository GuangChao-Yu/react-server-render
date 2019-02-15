import React, {Component} from 'react'

// 函数返回组件,生成高阶组件函数
export default (DecoratedComponent, style) => {
  // 返回高阶组件
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(style._getCss())
      }
    }
    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}
