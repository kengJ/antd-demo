import React from 'react'
import {
  Menu, Icon,Divider
} from 'antd'
import CheckPage from '../../page/CheckPage'



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//const ICCheck = ()=>()

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="#">Delete</a>
      <Divider type="vertical" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];


class ICCheck extends React.Component{
  Search(){
    console.log('test');
    return 'test'
  }
  render(){
    return(
      <CheckPage Search={this.Search} placeholder = "请输入查询内容" columns = {columns}></CheckPage>
    )
  }
}


class LeftBar extends React.Component{
  handleClick = (e) => {
    console.log('click ', e);
    this.props.LeftBarClick(e)
  }
  render(){
    return(
      <Menu
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="calculator" /><span>设备</span></span>}>
                <MenuItemGroup key="g1" title="IC卡机">
                  <Menu.Item key="1" name={ICCheck}>信息查询</Menu.Item>
                  <Menu.Item key="2">名单查询</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="门禁">
                  <Menu.Item key="3">信息查询</Menu.Item>
                  <Menu.Item key="4">名单查询</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g3" title="指纹机">
                  <Menu.Item key="5">信息查询</Menu.Item>
                  <Menu.Item key="6">名单查询</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
    )
  }
}
export default LeftBar;
