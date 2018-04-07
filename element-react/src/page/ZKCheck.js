import React from 'react'
import CheckPage from '../component/CheckPage'
import {
  Menu, Icon,Divider,Button,Card, Col, Row
} from 'antd'
import BasicAction from '../action/BasicAction'
const columns = [{
  title: '指纹机编号',
  dataIndex: 'code',
  key: 'code',
  align:'center',
  width:'150px',
  sorter: (a, b) =>a.code-b.code,
}, {
  title: '指纹机名称',
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
  key: 'synctime',
  dataIndex: 'synctime',
  align:'center',
  sorter: (a, b) =>a.synctime-b.synctime,
}];

const data1 = [{
  code:'111',
  name:'test',
  ip:'127.0.0.1',
  synctime:'2017-01-01',
  dept:'test部门',
  Supplier:'test供应商',
  mac:'1111111111111',
  buydate:'2017-01-01',
  ysbill:'ys100000',
  rdbill:'rd100000',
  guarantee:'1',
  installation:'安装位置'
}]

const gridStyle = {
  width: '30%',
  textAlign: 'left',
};

class ZKCheck extends React.Component{
  state={
    data:[]
  }
  tempconstructor(){
    //super()
    BasicAction.getFlask('/getzkdata').then(data=>{
      console.log(data.data);
      this.setState({data:data.data})
    })
  }
  Search(){
    console.log('test');
    //console.log(this.state.data);
    this.tempconstructor()
    //return 'test'
  }
  render(){
    return(
      <div>
      <CheckPage Search={this.Search.bind(this)} placeholder = "请输入查询内容" columns = {columns} data={this.state.data}
      expandedRowRender={record =>
        <Card>
          <Card.Grid style={{width: '35%',height:'130px'}}>
          名称:{record.Supplier}<br/>
          购买时间:{record.buydate}<br/>
          保修:{record.guarantee==""?"":record.guarantee}
          </Card.Grid>
          <Card.Grid style={{width: '30%',height:'130px'}}>
          IP:{record.ip}<br/>
          MAC:{record.mac}<br/>
          归属部门:{record.dept}
          </Card.Grid>
          <Card.Grid style={{width:'35%',height:'130px'}}>
          验收申请单号:{record.ysbill}<br/>
          弱电申请单号:{record.rdbill}<br/>
          安装位置:{record.installation}
          </Card.Grid>
        </Card>
      }></CheckPage>
      </div>
    )
  }
}
export default ZKCheck
