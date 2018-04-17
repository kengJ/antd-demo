import React from 'react'
import {
  Menu, Icon,Divider
} from 'antd'
import ICCheck from './ICCheck'
import ZKCheck from './ZKCheck'
import WKCheck from './WKCheck'
import XFCheck from './XFCheck'
import BGCheck from './BGCheck'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ICCheckpage = ()=>(<ICCheck></ICCheck>)
const ZKCheckpage = ()=>(<ZKCheck></ZKCheck>)
const WKCheckpage = ()=>(<WKCheck></WKCheck>)
const XFCheckpage = ()=>(<XFCheck></XFCheck>)
const BGCheckpage = ()=>(<BGCheck></BGCheck>)

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
                <MenuItemGroup key="g4" title="消费机">
                  <Menu.Item key="7" name={XFCheckpage}>信息查询</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="8" name={WKCheckpage}>
                <Icon type="book" />
                文控平台
              </Menu.Item>
              <Menu.Item key="9" name={BGCheckpage}>
                <Icon type="book" />
                办公协作平台
              </Menu.Item>
            </Menu>
    )
  }
}
export default LeftBarPage;
