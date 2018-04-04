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
      <Search
        placeholder={this.props.placeholder}
        onSearch={this.onSearch.bind(this)}
        style={{ width: 400}}
        enterButton
      />
      <InputGroup compact>
          <Select defaultValue="Sign Up">
            <Option value="Sign Up">Sign Up</Option>
            <Option value="Sign In">Sign In</Option>
          </Select>
          <AutoComplete
            dataSource={this.state.dataSource}
            style={{ width: 200 }}
            onChange={this.handleChange}
            placeholder="Email"
            enterButton
          />
        </InputGroup>
      <br/>
      <Table columns={this.props.columns} dataSource={data} style={{paddingTop:'30px'}}/>
      </div>
    )
  }
}
export default CheckPage
