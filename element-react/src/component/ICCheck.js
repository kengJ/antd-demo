import React from 'react'
import CheckPage from '../../page/CheckPage'

class ICCheck extends React.Component{
  Search(){
    console.log('test');
    return 'test'
  }
  render(){
    return(
      <CheckPage Search={this.Search} placeholder = "请输入查询内容" columns = {this.props.columns}></CheckPage>
    )
  }
}
