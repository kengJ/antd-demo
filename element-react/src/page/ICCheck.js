import React from 'react'
import CheckPage from '../component/CheckPage'

const columns = [{
  title: '翼闸编号',
  dataIndex: 'code',
  key: 'code',
  align:'center',
  sorter: (a, b) =>a.code-b.code,
  render: text => <a>{text}</a>,
}, {
  title: '翼闸名称',
  dataIndex: 'name',
  key: 'name',
  align:'center',
  sorter: (a, b) =>a.name.length-b.name.length,
}, {
  title: '是否翼闸',
  dataIndex: 'isdoor',
  key: 'isdoor',
  align:'center',
}, {
  title: '最后同步时间',
  key: 'synctime',
  dataIndex: 'synctime',
  align:'center',
  sorter: (a, b) =>a.synctime-b.synctime,
},{
  title: '部门标记',
  key: 'isdept',
  dataIndex: 'isdept',
  align:'center',
}];
const data = []
class ICCheck extends React.Component{
  Search(){
    return 'test'
  }
  render(){
    return(
      <CheckPage Search={this.Search} placeholder = "请输入查询内容" columns={columns} data={data}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}<br/>{record.description}</p>}></CheckPage>
    )
  }
}
export default ICCheck
