import React, {
    Component
} from 'react'

class Title extends Component{
    handClick(e){
        console.log(e.target.innerHTML);
    }
    render(){
        return(
            <div>
                <p onClick={this.handClick.bind(this)}>你好啊</p>
            </div>
        )
    }
}

export default Title