import React, {
    Component
} from 'react'

class ChangeProps extends Component {
    static defaultProps = {
        likeText :'取消',
        unlikeText : '点赞'
    }
    constructor(){
        super()
        this.state = { 
            isLiked : true
         }
    }
    // handleClick(){
    //     this.setState({
    //         isLiked:!this.state.isLiked
    //     })
    // }
    render(){
        // const likeText = this.props.likeText || '取消'
        // const unlikeText = this.props.unlikeText || '点赞'
        // eslint-disable-next-line
        const wordings = this.props.wordings || {
            likeText:'取消',
            unlikeText:'点赞'
        }
        return (
            //<button onClick={this.handleClick.bind(this)}>{this.state.isLiked ? wordings.likeText:wordings.unlikeText}　👍　{this.state.name}</button>
            <button>{this.state.isLiked ? this.props.likeText : this.props.unlikeText}</button>
        )
    }
}

export default ChangeProps