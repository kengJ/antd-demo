import React from 'react'
import LoginForm from './LoginForm'
import { Form} from 'antd';

const  UserLoginForm=  Form.create()(LoginForm);

class LoginPage extends React.Component{
  render(){
    return (
      <div><UserLoginForm /></div>
    );
  }
}
export default LoginPage
