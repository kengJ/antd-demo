import React from 'react'
import {
  Route
} from 'react-router-dom'
import LoginPage from './LoginPage'
//import BasicAction from '../action/BasicAction'

class PrivateRouter extends React.Component{
  LoginCheck(){
    //return BasicAction.isLogin()
    return true
  }
  render(){
    return(
      this.LoginCheck()?(<Route path={this.props.path} component={this.props.component}/>):(<LoginPage/>)
    )
  }
}
export default PrivateRouter
