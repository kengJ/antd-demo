import React from 'react'
import CheckPage from '../component/CheckPage'
import BasicAction from '../action/BasicAction'
import ZKMessageForm from '../component/ZKMessageForm'
import {Card} from 'antd'

const form  = ()=>(<ZKMessageForm />)
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

class ZKCheck extends React.Component{
  state={
    data:[]
  }
  tempconstructor(type,value){
    let url = '/getzkdata'
    if(value.length>0){
      url = '/getzkdata/'+type+'/'+value
    }
    BasicAction.getFlask(url).then(data=>{
      this.setState({data:data.data})
    })
  }
  Search(type,value){
    this.tempconstructor(type,value)
  }
  render(){
    return(
      <div>
      <CheckPage Search={this.Search.bind(this)} placeholder = "请输入查询内容" columns = {columns} data={this.state.data}
      isSelectBtn={true} toolbar={form}
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
