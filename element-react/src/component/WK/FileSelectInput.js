import React from 'react'
import { AutoComplete,Input,Icon,Button } from 'antd';

const InputGroup = Input.Group;

function onSelect(value) {
  console.log('onSelect', value);
}

class FileSelectInput extends React.Component{
  state = {
    dataSource: [],
    FileNames:this.props.FileNames
  }
  FindData=(value)=>{
    var dataresult = []
    this.state.FileNames.forEach(v=>{
      if(v.indexOf(value)>=0){
        dataresult.push(v)
      }
    })
    return dataresult
  }
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : this.FindData(value),
    });
  }
  render(){
    const { dataSource } = this.state;
    return(
      <InputGroup compact size="small">
        <AutoComplete
                size="small"
                dataSource={dataSource}
                style={{ width: 200 }}
                onSearch={this.handleSearch}
                placeholder="输入文件夹关键字"
              >

              <Input size="small" suffix={<Icon type="down" style={{ color: 'rgba(0,0,0,.25)'}} />} />
        </AutoComplete>
        <Button size="small" type="primary" icon="search" />
      </InputGroup>
    )
  }
}
export default FileSelectInput
