import React, { Component } from 'react';


// 每条评论

class Comment extends Component {
    render(){
        return(
            <div className="comment_wrapper">
                <div className="comment_user">
                    <span>{this.props.comment.username}</span>：
                </div>
                <p className="pragh">{this.props.comment.content}</p>
            </div>
        )
    }
}
export default Comment