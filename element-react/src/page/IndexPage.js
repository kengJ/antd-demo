import React from 'react'
import {
  Menu,
  Layout,
  Breadcrumb,
  Icon,
  Divider
} from 'antd'
import CheckPage from '../component/CheckPage'

import LeftBarPage from './LeftBarPage'
import { Row, Col } from 'antd';
import {Route,Link} from 'react-router-dom'
import BasicAction from '../action/BasicAction'
import ICCheck from './ICCheck'
import TestTable from '../component/TestTable'

//import axios from 'axios'
const { Header, Footer,Content } = Layout;
const SubMenu = Menu.SubMenu;

const ICCheckpage = ()=>(<ICCheck></ICCheck>)


class IndexPage extends React.Component{
  state={
    response:'',
    main:ICCheckpage
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
  LeftBarClick(e){
    this.setState({main:e.item.props.name})
  }
  render(){
    let Mainbox= this.state.main
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
          </Menu>

        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Row>
            <Col span={6}>
              <LeftBarPage LeftBarClick = {this.LeftBarClick.bind(this)}></LeftBarPage>
            </Col>
            <Col span={18}>
              <this.state.main></this.state.main>
            </Col>
          </Row>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}
export default IndexPage
