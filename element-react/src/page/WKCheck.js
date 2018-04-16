import React from 'react'
import CheckPage from '../component/CheckPage'
import NestedTable from '../component/NestedTable'
import {
  Menu, Icon,Divider,Table, Badge, Dropdown,Button
} from 'antd'
import BasicAction from '../action/BasicAction'
import FileBox from '../component/WK/FileBox'
import UserBox from '../component/WK/UserBox'
import './WKCheck.css'

//工具栏
class Toolbar extends React.Component{
  state = {
    FileBox: false,
    defaultValue:this.props.defaultValue,
    UserBox:false
  };
  showFileModal = () => {
    //查询所有文件夹名称，并赋值给state
    //执行查询操作前，先查询该值是否为空
    this.setState({ FileBox: true });
  }
  showUserModal = ()=>{
    this.setState({UserBox:true})
  }
  onCancel = () => {
    this.setState({ FileBox: false ,UserBox:false});
  }
  render(){
    return(
      <div className="toolbarBtn">
      <Button type="primary" icon="plus-circle-o" size="small" onClick={this.showUserModal}>账号管理</Button>
      <Button type="primary" icon="plus-circle-o" size="small" onClick={this.showFileModal}>新增文件夹权限</Button>
      <FileBox
        visible={this.state.FileBox}
        onCancel={this.onCancel}
        defaultValue=""
        data={[]}
      />
      <UserBox onCancel={this.onCancel.bind(this)} visible={this.state.UserBox}/>
    </div>
    )
  }
}


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



class WKCheck extends React.Component{
  state={
    data:[],
    defaultValue:''
  }
  tempconstructor(value){
    let url = '/getwkdata/'+value
    BasicAction.getFlask(url).then(data=>{
      if(data.data.length){
        this.setState({data:data.data})
        if(data.data[0].name==null){
          alert('没开通文件夹权限')
        }
      }else{
        alert('NO DATA')
      }
    })
  }
  Search(type,value){
    if(value&&value.length==6){
    this.tempconstructor(value)
    this.setState({
      defaultValue:value
    })
    }
  }
  render(){
    const toolbar = () => (<Toolbar defaultValue={this.state.defaultValue} data={this.state.data}/>)
    return(
      <CheckPage Search={this.Search.bind(this)} placeholder = "请输入查询内容" columns={columns} data={this.state.data}
            expandedRowRender={null} toolbar={toolbar}></CheckPage>
    )
  }
}
export default WKCheck
