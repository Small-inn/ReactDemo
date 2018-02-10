import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Title from './component/nest.js'
import ChangeState from './component/changeState.js'
import ChangeProps from './component/changeProps.js'
import RenderData from './component/renderData.js'


import './css/base.css'
import './css/index.less'

// 3.0
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class Header extends Component{
    constructor(){
        super()
        this.state = {
            likeText : '已赞',
            unlikeText : '赞'
        }
    }

    handleChange(){
        this.setState({
            likeText: '取消',
            unlikeText: '点赞'
        })
    }

    renderGood(good,bad){
        const isGood = true
        return isGood ? good : bad
    }

    
    render(){
        const ClassName = 'header'
        return (
            <div className={ClassName}>
                <h1>React Study</h1>
                <p>Hello world</p>
                {this.renderGood(<span>Good</span>,<span>Bad</span>)}

                <Title></Title>

                <ChangeState></ChangeState>

                {/*<ChangeProps likeText='已赞' unlikeText='赞'></ChangeProps>*/}
                {/*<ChangeProps wordings={{likeText:'已赞',unlikeText:'赞'}}></ChangeProps>*/}
                <ChangeProps likeText={this.state.likeText} unlikeText={this.state.unlikeText}></ChangeProps>
                <button onClick={this.handleChange.bind(this)}>修改props</button>

                {users.map((user, i) => <RenderData key={i} user={user} />)}
            </div>
        )
    }
}

ReactDOM.render(<Header />,document.getElementById("root"));
registerServiceWorker();