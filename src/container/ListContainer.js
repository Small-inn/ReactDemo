import React, {Component} from 'react'

import '../styles/list.css'

export default class ListContainer extends Component {
    render (){
        return (
                <div className="list_container">
                    <div className="list_left">
                        <a href="">即将上映</a>
                        <a href="">正在热映</a>
                        <a href="">top250</a>
                    </div>
                    <div className="list_right">
                        <div className="list_search">
                            <input/>
                            <button>按钮</button>
                        </div>
                        <div className="list_content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
        )
    }
}