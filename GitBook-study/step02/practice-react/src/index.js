import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.less'
class Header extends Component{
    render(){
        return (
            <div className="header">
                <h1>React Study</h1>
                <p>Hello world</p>
            </div>
        )
    }
}

ReactDOM.render(<Header />,document.getElementById("root"));
registerServiceWorker();