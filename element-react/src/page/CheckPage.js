import React from 'react'
import { Input } from 'antd';
import { Table, Icon, Divider } from 'antd';

const Search = Input.Search;

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
      <Table columns={this.state.columns} dataSource={data} style={{paddingTop:'50px'}}/>
      </div>
    )
  }
}
export default CheckPage
