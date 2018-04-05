import React from 'react'
import { Input } from 'antd';
import { Table, Icon, Divider } from 'antd';
import { Select, AutoComplete, Cascader } from 'antd';

const Search = Input.Search;

const InputGroup = Input.Group;
const Option = Select.Option;

const data = []

class CheckPage extends React.Component{
  state={
    columns:this.props.columns
  }
  onSearch(){
    this.props.Search()
  }
  render(){
    return(
      <div style={{paddingTop:'50px'}}>
      <InputGroup compact>
          <Select defaultValue="code">
            <Option value="code">编号</Option>
            <Option value="name">名称</Option>
          </Select>
          <Search
            placeholder={this.props.placeholder}
            onSearch={this.onSearch.bind(this)}
            style={{ width: 300}}
            enterButton
          />
        </InputGroup>
      <br/>
      <Table columns={this.props.columns} dataSource={data} style={{paddingTop:'10px'}} bordered size="middle" />
      </div>
    )
  }
}
export default CheckPage
