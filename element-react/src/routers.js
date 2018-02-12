import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Basic from './component/Basic'
import PrivateRouter from './component/PrivateRouter'
import './App.css';

// const Person = ()=>(<div>Home</div>)

// const routers = [
//   {name: '/',component:Person,}
// ]
let AuthExample = ()=>(
  <Router>
    <div>
    <PrivateRouter path="/" component={Basic}></PrivateRouter>
    </div>
  </Router>
)
export default AuthExample
