import React from 'react'
import CheckPage from '../component/CheckPage'
import {
  Menu, Icon,Divider
} from 'antd'

const columns = [{
  title: '翼闸编号',
  dataIndex: 'code',
  key: 'code',
  render: text => <a href="#">{text}</a>,
}, {
  title: '翼闸名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '是否翼闸',
  dataIndex: 'isdoor',
  key: 'isdoor',
}, {
  title: '最后同步时间',
  key: 'synctime',
  dataIndex: 'synctime',
},{
  title: '部门标记',
  key: 'isdept',
  dataIndex: 'isdept',
}];

class ICCheck extends React.Component{
  Search(){
    console.log('test');
    return 'test'
  }
  render(){
    return(
      <CheckPage Search={this.Search} placeholder = "请输入查询内容" columns={columns}></CheckPage>
    )
  }
}
export default ICCheck
