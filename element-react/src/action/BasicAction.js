//import React from 'react'
import axios from 'axios'

class BasicAction{
  static get(url){
    return axios({
      method: 'get',
      url: 'http://192.168.80.121:8080/ssm'+url
    })
  }

  static post(url){
    return axios({
      method: 'post',
      url: 'http://192.168.80.121:8080/ssm'+url
    })
  }

  static isLogin(){
    let token = window.localStorage.getItem('token');
    if (!token) {
      return false
    }
    return true
  }

  static Login(userName,password){
    console.log(userName,password);
    this.get('/Test/Login.do?UserName='+userName+'&Password='+password).then(data=>{
      window.localStorage.setItem('token',data)
      //console.log(data);
      //location.reload();
    })
  }

  static Logout(){
    window.localStorage.clear()
  }

  static GetPathName(){
    console.log(window.location.pathname);
    return window.location.pathname
  }
}
export default BasicAction
