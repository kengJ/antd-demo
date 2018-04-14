import React from 'react'
import {Button,Modal,Radio,Input} from 'antd';
import ChangePasswordInput from './ChangePasswordInput'
import BasicAction from '../../action/BasicAction'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Search = Input.Search;

class UserBox extends React.Component{
  state={
    UserControlInputText:'新增'
  }
  UserControlClick= (e)=>{
    var text = ''
    switch (e.target.value) {
      case 'add':
        text= '新增'
        break;
      case 'del':
        text= '删除'
        break;
      case 'changePassword':
        text= '修改密码'
        break;
      default:
        text = ''
    }
    this.setState({
      UserControlInputText:text
    })
  }
  UserClick=(value)=>{
    if(value.length==6){
      var url = ''
      switch (this.state.UserControlInputText) {
        case '新增':
          url = '/AddWKUser/'
          break;
        case '删除':
          url = '/DelWKUser/'
          break;
        default:
          url=''
      }
      BasicAction.getFlask(url+value).then(data=>{
        alert(data.data[0].message)
      })
    }else{
      alert('请输入正确的工号')
    }
  }
  render(){
    return(
      <Modal
      visible={this.props.visible}
      title="账号管理"
      onCancel={this.props.onCancel}
      footer={[<Button key="back" onClick={this.props.onCancel}>退出</Button>]}>
        <div style={{ marginTop: 16 }}>
          <RadioGroup defaultValue="add" size="small" onChange={this.UserControlClick}>
            <RadioButton value="add">新增账号</RadioButton>
            <RadioButton value="del">删除账号</RadioButton>
            <RadioButton value="changePassword">修改密码</RadioButton>
          </RadioGroup>
          {this.state.UserControlInputText!="修改密码"?(
            <Search placeholder="请输入工号"
                    style={{marginTop:'10px',width: '70%'}}
                    size="small"
                    enterButton={<div style={{width:'50px'}}>{this.state.UserControlInputText}</div>}
                    onSearch={this.UserClick} />
          ):(
            <ChangePasswordInput />
          )}
        </div>
      </Modal>
    )
  }
}
export default UserBox
