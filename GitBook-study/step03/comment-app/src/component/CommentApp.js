import React, { Component } from 'react';
import CommentInput from './CommentInput.js';
import CommentList from './CommentList.js';


class CommentApp extends Component {

    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }

    handleSubmitComment(con){
        // console.log(con);
        if(!con) return
        if(!con.username) return alert("请输入用户名")
        if(!con.content) return alert("请输入评价内容")
        this.state.comments.push(con)
        this.setState({comments:this.state.comments})
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp