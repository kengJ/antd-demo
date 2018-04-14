import React from 'react'
import { Button, Modal, Form, Input, Radio ,DatePicker,Table,AutoComplete} from 'antd';
import FileSelectInput from './FileSelectInput'
import BasicAction from '../../action/BasicAction'

const Search = Input.Search;
const FormItem = Form.Item;
const InputGroup = Input.Group;

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



class FileBox extends React.Component {
  state={
    defaultValue:this.props.defaultValue,
    data:this.props.data
  }
  onSearch(value){
    console.log(value);
  }
  render() {
    return (
      <div>
      <Modal
        visible={this.props.visible}
        title="新增文件夹权限"
        onCancel={this.props.onCancel}
        width="1000px"
        footer={[<Button key="back" onClick={this.props.onCancel}>退出</Button>]}
      >
      <FileSelectInput />
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
      </div>
    );
  }
}


export default FileBox
