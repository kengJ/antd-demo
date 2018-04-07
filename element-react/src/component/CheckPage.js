import React from 'react'
import { Input ,Button} from 'antd';
import { Table, Icon, Divider } from 'antd';
import { Select, AutoComplete, Cascader } from 'antd';
import ZKMessageForm from '../component/ZKMessageForm'
const Search = Input.Search;

const InputGroup = Input.Group;
const Option = Select.Option;

class CheckPage extends React.Component{
  state={
    columns:this.props.columns,
    expandedRowKeys:[]
  }
  onSearch(){
    this.props.Search()
  }
  onExpand(expanded, record){
    console.log(expanded, record);
    console.log(this.state.expandedRowKeys);
  }
  render(){
    return(
      <div style={{paddingTop:'20px'}}>
      <InputGroup compact>
        <Select defaultValue="code" size="small">
          <Option value="code">编号</Option>
          <Option value="name">名称</Option>
        </Select>
        <Search
          placeholder={this.props.placeholder}
          onSearch={this.onSearch.bind(this)}
          style={{ width: 300}}
          enterButton
          size="small"
        />
      </InputGroup>
      <br/>
      <ZKMessageForm />
      <Table columns={this.props.columns} dataSource={this.props.data} style={{paddingTop:'10px'}} bordered size="middle"
      expandedRowRender={this.props.expandedRowRender} expandRowByClick={true} onExpand={this.onExpand.bind(this)} expandedRowKeys={this.state.expandedRowKeys} />
      </div>
    )
  }
}
export default CheckPage
