import React from 'react'
import CheckPage from '../component/CheckPage'
import {
  Menu, Icon,Divider
} from 'antd'

const columns = [{
  title: '指纹机编号',
  dataIndex: 'code',
  key: 'code',
  render: text => <a href="#">{text}</a>,
  sorter: (a, b) =>a.code-b.code,
}, {
  title: '指纹机名称',
  dataIndex: 'name',
  key: 'name',
  sorter: (a, b) =>a.name.length-b.name.length,
}, {
  title: 'IP',
  dataIndex: 'ip',
  key: 'ip',
}, {
  title: '最后同步时间',
  key: 'synctime',
  dataIndex: 'synctime',
  sorter: (a, b) =>a.synctime-b.synctime,
},{
  title: '区域',
  key: 'area',
  dataIndex: 'area',
},{
  title: '单据信息',
  key: 'bill',
  dataIndex: 'bill',
},{
  title: '资产单位',
  key: 'belong',
  dataIndex: 'belong',
},{
  title: '备注',
  key: 'meno',
  dataIndex: 'meno',
}];

class ZKCheck extends React.Component{
  Search(){
    console.log('test');
    return 'test'
  }
  render(){
    return(
      <CheckPage Search={this.Search} placeholder = "请输入查询内容" columns = {columns}></CheckPage>
    )
  }
}
export default ZKCheck
