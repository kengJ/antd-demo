import React from 'react'
import CheckPage from '../component/CheckPage'
import {
  Menu, Icon,Divider
} from 'antd'
import ZKMessageForm from '../component/ZKMessageForm'
import BasicAction from '../action/BasicAction'

const form  = ()=>(<ZKMessageForm />)

const columns = [{
  title: '工号',
  dataIndex: 'code',
  key: 'code',
  align:'center',
  sorter: (a, b) =>a.code-b.code,
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  align:'center',
  sorter: (a, b) =>a.name.length-b.name.length,
}, {
  title: '系统名称',
  dataIndex: 'system',
  key: 'system',
  align:'center',
  width:'200px'
}, {
  title: '标题',
  key: 'title',
  align:'left',
  render:record => <a href={record.url} target='_blank'>{record.title}</a>
}];
const data = []
class ICCheck extends React.Component{
  state={
    data:[]
  }
  Search(type,value){
    if(value.length==6){
      const url = '/GetCBByCode/'+value
      BasicAction.getFlask(url).then(data=>{
        console.log(data.data);
        this.setState({data:data.data})
      })
    }else{
      alert('请输入正确的工号')
    }

  }
  render(){
    return(
      <CheckPage Search={this.Search.bind(this)} placeholder = "请输入查询内容" columns={columns} data={this.state.data} toolbar={null}
      expandedRowRender={null}></CheckPage>
    )
  }
}
export default ICCheck
