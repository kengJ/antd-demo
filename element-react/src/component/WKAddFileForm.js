import React from 'react'
import { Button, Modal, Form, Input, Radio ,DatePicker,Table  } from 'antd';
import BasicAction from '../action/BasicAction'

const Search = Input.Search;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { TextArea } = Input;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const columns = [{
  title: '账号',
  dataIndex: 'code',
  key: 'code',
  align:'center',
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  align:'center',
}, {
  title: '密码',
  dataIndex: 'password',
  key: 'password',
  align:'center',
}, {
  title: '是否管理员',
  key: 'useradmin',
  dataIndex: 'useradmin',
  align:'center',
  render:(text)=>(text==null?'否':'是')
},{
  title: '更新日期',
  key: 'modifydate',
  dataIndex: 'modifydate',
  align:'center',
},{
  title: '文件夹名称',
  key: 'filename',
  dataIndex: 'filename',
  align:'center',
  sorter: (a, b) =>a.filename.length-b.filename.length,
},{
  title: '文件夹权限',
  key: 'filelevel',
  dataIndex: 'filelevel',
  align:'center',
}];


const WKAddFileForm = Form.create()(
  class extends React.Component {
    state={
      defaultValue:this.props.defaultValue,
      data:this.props.data,
      UserControlInputText:'新增'
    }
    onSearch(value){
      console.log(value);
    }
    AddUserClick=(value)=>{
      if(value.length==6){
        var url = ''
        switch (this.state.UserControlInputText) {
          case 'add':
            url = '/AddWKUser/'
            break;
          case 'del':
            url = '/DelWKUser/'
            break;
          case 'changePassword':
            url = '/ChangeWKUserPassword/'
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
    UserControlClick= (e)=>{
      console.log(e.target.value);
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
    render() {
      const { visible, onCancel, AddUser_visible } = this.props;
      return (
        <div>
        <Modal
          visible={visible}
          title="新增文件夹权限"
          onCancel={onCancel}
          width="1000px"
          footer={[<Button key="back" onClick={onCancel}>退出</Button>]}
        >
        <Search
          style={{width:'200px'}}
          placeholder="请输入查询的账号"
          onSearch={this.onSearch.bind(this)}
          defaultValue = {this.state.defaultValue}
          size="small"
          enterButton
        />
        <Table columns={columns} dataSource={this.state.data} size="small" style={{paddingTop:'10px'}} />
        </Modal>

        <Modal
        visible={AddUser_visible}
        title="账号管理"
        onCancel={onCancel}
        footer={[<Button key="back" onClick={onCancel}>退出</Button>]}>
          <div style={{ marginTop: 16 }}>
            <RadioGroup defaultValue="add" size="small" onChange={this.UserControlClick}>
              <RadioButton value="add">新增账号</RadioButton>
              <RadioButton value="del">删除账号</RadioButton>
              <RadioButton value="changePassword">修改密码</RadioButton>
            </RadioGroup>
            <Search placeholder="请输入工号" enterButton={this.state.UserControlInputText} onSearch={this.AddUserClick} />
          </div>
        </Modal>
        </div>
      );
    }
  }
);


export default WKAddFileForm
