import React from 'react'
import { Button,Input} from 'antd';
import BasicAction from '../../action/BasicAction'

const InputGroup = Input.Group;

class ChangePasswordInput extends React.Component{
  ChangePasswordClick=()=>{
    BasicAction.getFlask('/ChangeWKUserPassword/'+this.refs.code.input.value+"/"+this.refs.newpassword.input.value).then(data=>{
      alert(data.data[0].message)
    })
  }
  render(){
    return(
      <InputGroup compact style={{marginTop:'10px'}} size="small">
        <Input style={{ width: '30%' }} placeholder="请输入工号" ref="code"/>
        <Input style={{ width: '40%' }} placeholder="请输入新密码" ref="newpassword"/>
        <Button
            type="primary"
            style={{width:'100px'}}
            size="small"
            onClick={this.ChangePasswordClick}>
          "修改密码"
        </Button>
      </InputGroup>
    )
  }
}
export default ChangePasswordInput
