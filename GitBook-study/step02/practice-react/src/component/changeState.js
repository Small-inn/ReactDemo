import React, {
    Component
} from 'react'

class ChangeState extends Component {
    constructor(){
        super()
        this.state = { 
            isLiked : true,
            name:'lx'
         }
    }
    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.isLiked ? '点赞':'取消'}　{this.state.name}</button>
        )
    }
}

export default ChangeState