import React from 'react'
import CheckPage from '../component/CheckPage'
import NestedTable from '../component/NestedTable'
import {
  Menu, Icon,Divider,Table, Badge, Dropdown
} from 'antd'
import BasicAction from '../action/BasicAction'
const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
);

const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
};
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
    data:[]
  }
  tempconstructor(value){
    let url = '/getwkdata/'+value
    // if(value.length>0){
    //   url = '/getzkdata/'+type+'/'+value
    // }
    BasicAction.getFlask(url).then(data=>{
      if(data.data.length){
        this.setState({data:data.data})
      }else{
        alert('NO DATA')
      }
    })
  }
  Search(type,value){
    // this.tempconstructor(type,value)
    //console.log(type,value);
    //this.tempconstructor('','')
    if(value&&value.length==6){
      //console.log(value);
    this.tempconstructor(value)
    }
  }
  render(){
    return(
      <CheckPage Search={this.Search.bind(this)} placeholder = "请输入查询内容" columns={columns} data={this.state.data}
            expandedRowRender={null}></CheckPage>
    )
  }
}
export default WKCheck
