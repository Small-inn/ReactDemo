import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import HomeContainer from "./HomeContainer.js"
import ListContainer from "./ListContainer.js"
import CallContainer from "./CallContainer.js"

export default class AppContainer extends Component {
    render() {
        return (
            <Router>
                <div className="app_con">
                    <div className="app_list">
                        <Link to="/home">首页</Link>
                        <Link to="/list">列表</Link>
                        <Link to="/us">联系我们</Link>
                    </div>
                    <Route exact path="/home" component={HomeContainer}></Route>
                    <Route path="/list" component={ListContainer}></Route>
                    <Route path="/us" component={CallContainer}></Route>
                </div>
            </Router>
        )
    }
}