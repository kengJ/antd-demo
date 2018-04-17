import React from 'react'
import {
  Menu,
  Layout,
  Breadcrumb,
  Icon
} from 'antd'
import {Route,Link} from 'react-router-dom'
import BasicAction from '../action/BasicAction'

//import axios from 'axios'
const { Header, Footer,Content } = Layout;
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const Person = ()=>(<div>Person</div>)

class Basic extends React.Component{
  state={
    response:''
  }
  test(){
    //console.log(BasicAction.get('/Test/Login.do?UserName=admin&Password=admin'));
    let url ='/Test/Login.do?UserName=admin&Password=admin';
    BasicAction.get(url).then(data=>{
      console.log(data.data);
    })
    console.log(url);
  }
  MenuClick(item){
    console.log('item',item.key);
    if(item.key == 'user:Layout' || item.key == 'user:ChangUser'){
      BasicAction.Logout()
    }
  }
  render(){
    return(
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            onClick={this.MenuClick}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            {
              BasicAction.isLogin()?(<SubMenu title={<span><Icon type="user" />admin</span>} style={{float:'right'}}>
                  <Menu.Item key="user:1">基本信息</Menu.Item>
                  <Menu.Item key="user:ChangUser"><Link to={BasicAction.GetPathName()}>切换用户</Link></Menu.Item>
                  <Menu.Item key="user:Layout"><Link to={BasicAction.GetPathName()}>退出</Link></Menu.Item>
              </SubMenu>):(<Menu.Item key="user">登录</Menu.Item>)
            }
          </Menu>

        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route path="/" component={Person}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}
export default Basic
