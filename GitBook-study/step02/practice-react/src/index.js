import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Title from './component/nest.js'

import './css/base.css'
import './css/index.less'
class Header extends Component{
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
            </div>
        )
    }
}

ReactDOM.render(<Header />,document.getElementById("root"));
registerServiceWorker();