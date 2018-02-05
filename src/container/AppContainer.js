import React, {Component} from 'react'

import {Link} from 'react-router'

import '../styles/root.css'
import '../styles/app.css'

export default class AppContainer extends Component {
    render (){
        return (
            <div className="app_container">
                <div className="app_header">
                    <Link to="/home">首页</Link>
                    <Link to="/list">列表</Link>
                    <Link to="/call">联系我们</Link>
                    {/*<Link to="/movielist">电影列表</Link>*/}
                </div>
                <div className="app_content">
                    {this.props.children}
                </div>
                <div className="app_footer">
                    <span>版权归@上海三期所有</span>
                </div>
            </div>
        )
    }
}