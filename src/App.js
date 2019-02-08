import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './components/Home'
import Personal from './components/Personal'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="ui container">
            <header className="ui three item menu" style={{marginTop: 10}}>
              {/* <NavLink to=""></NavLink>做頁面切換的連結地址 */}
              <NavLink exact activeClassName="active" className="item" to="/">Home</NavLink>
              <NavLink exact activeClassName="active" className="item" to="/personal">Personal</NavLink>
              <NavLink activeClassName="active" className="item" to="/todolist">TodoList</NavLink>
            </header>
            {/* <Route path=''> 設置路的地址加載不同的組件 */}
            <Route exact path='/' component={Home} />
            <Route exact path='/personal' component={Personal} />
            <Route exact path='/todolist' component={TodoList} />
          </div>
        </Router>
    );
  }
}

export default App;

/*
react-router路由配置
1. 官方文檔 https://reacttraining.com/react-router/web/guides/quick-start
2. npm install -S react-router-dom
3. 找到根組件（App）引入 react-router-dom
4. 根據官網文檔的組件內容進行修改
<Router>
  <NavLink to=""></NavLink>做頁面切換的連結地址
  <NavLink to=""></NavLink>

  <Route path=''>設置路的地址加載不同的組件
  <Route path=''>
</Router>
5. exact表示嚴格匹配路由地址

 */


/*
react 動態路由傳值
1. 動態路由
<Route exact path='/personalinfo/:id' component={PersonalInfo} />
2. 對應的動態路由加載的組件裡面獲取傳值this.props.
this.props.match.params.XXX
3. 跳轉
<NavLink to={`/PersonalInfo/id=${value.id}`}> {value.title} </NavLink>

 */


/*
react get傳值 this.props.
獲取值this.props.location.XXX
 */
