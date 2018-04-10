import React from 'react'
import CheckPage from '../component/CheckPage'
import {
  Menu, Icon,Divider
} from 'antd'

const columns = [{
  title: 'ID',
  dataIndex: 'code',
  key: 'id',
  align:'center',
  sorter: (a, b) =>a.id-b.id,
  render: text => <a href="#">{text}</a>,
}, {
  title: '工号',
  dataIndex: 'code',
  key: 'code',
  align:'center',
  sorter: (a, b) =>a.name.code-b.name.code,
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
    console.log('test');
    return 'test'
    console.log(this.state.data);
  }
  render(){
    return(
      <CheckPage Search={this.Search} placeholder = "请输入查询内容" columns={columns} data={data}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}<br/>{record.description}</p>}></CheckPage>
    )
  }
}
export default ICCheck
