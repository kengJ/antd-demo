import React from 'react'
import CheckPage from '../component/CheckPage'
import ZKMessageForm from '../component/ZKMessageForm'
import BasicAction from '../action/BasicAction'

const form  = ()=>(<ZKMessageForm />)

const columns = [{
  title: '编号',
  dataIndex: 'code',
  key: 'code',
  align:'center',
  sorter: (a, b) =>a.code-b.code,
}, {
  title: '消费机名称',
  dataIndex: 'name',
  key: 'name',
  align:'center',
  sorter: (a, b) =>a.name.length-b.name.length,
}, {
  title: 'IP',
  dataIndex: 'ip',
  key: 'ip',
  align:'center',
  width:'200px'
}, {
  title: '最后同步时间',
  key: 'datetime',
  dataIndex: 'datetime',
  align:'center',
  sorter: (a, b) =>a.datetime-b.datetime,
},{
  title: '状态',
  key: 'zt',
  dataIndex: 'zt',
  align:'center',
  width:'100px',
  render: text => <span>{text?'在线':'离线'}</span>,
}];
class ICCheck extends React.Component{
  state={
    data:[]
  }
  Search(type,value){
    const url = value.length==0?'/GetXF':'/GetXFByJh/'+value
    BasicAction.getFlask(url).then(data=>{
      console.log(data.data);
      this.setState({data:data.data})
    })
  }
  render(){
    return(
      <CheckPage Search={this.Search.bind(this)} placeholder = "请输入查询内容" columns={columns} data={this.state.data} toolbar={form}
      expandedRowRender={null}></CheckPage>
    )
  }
}
export default ICCheck
