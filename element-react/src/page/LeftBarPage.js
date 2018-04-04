import React from 'react'
import {
  Menu, Icon,Divider
} from 'antd'
import ICCheck from './ICCheck'
import ZKCheck from './ZKCheck'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//const ICCheck = ()=>()

// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
//   render: text => <a href="#">{text}</a>,
// }, {
//   title: 'Age',
//   dataIndex: 'age',
//   key: 'age',
// }, {
//   title: 'Address',
//   dataIndex: 'address',
//   key: 'address',
// }, {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <span>
//       <a href="#">Action 一 {record.name}</a>
//       <Divider type="vertical" />
//       <a href="#">Delete</a>
//       <Divider type="vertical" />
//       <a href="#" className="ant-dropdown-link">
//         More actions <Icon type="down" />
//       </a>
//     </span>
//   ),
// }];



const ICCheckpage = ()=>(<ICCheck></ICCheck>)
const ZKCheckpage = ()=>(<ZKCheck></ZKCheck>)

class LeftBarPage extends React.Component{
  handleClick = (e) => {
    console.log('click ', e);
    this.props.LeftBarClick(e)
    console.log(this);
  }
  render(){
    return(
      <Menu
              onClick={this.handleClick.bind(this)}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="calculator" /><span>设备</span></span>}>
                <MenuItemGroup key="g1" title="IC卡机">
                  <Menu.Item key="1" name={ICCheckpage}>信息查询</Menu.Item>
                  <Menu.Item key="2" disabled={true}>名单查询</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="门禁">
                  <Menu.Item key="3" disabled={true}>信息查询</Menu.Item>
                  <Menu.Item key="4" disabled={true}>名单查询</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g3" title="指纹机">
                  <Menu.Item key="5" name={ZKCheckpage}>信息查询</Menu.Item>
                  <Menu.Item key="6" disabled={true}>名单查询</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
    )
  }
}
export default LeftBarPage;
