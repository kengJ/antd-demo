import React from 'react'
import {
  Layout,
  Menu
} from 'element-react';

class BasicLayout extends React.Component {
  render() {
    return (
      <Layout.Row className="tac">
        <Layout.Col span={4}>
          <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">选项1</Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
            {
              this.props.nav.map((value, index)=>
              {
                return(
                  value.type=='Item'?(<Menu.Item index={index+3+""} key={index}>{value.title}</Menu.Item>):(<div data-index={index}></div>)
                )
              })
            }
          </Menu>
        </Layout.Col>
      </Layout.Row>
    )
  }
  onOpen() {
    console.log(this.props.nav);
  }

  onClose() {}

}

export default BasicLayout
