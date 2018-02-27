import React, { Component } from 'react';
import CommentInput from './CommentInput.js';
import CommentList from './CommentList.js';


class CommentApp extends Component {

    handleSubmitComment(con){
        console.log(con);
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList />
            </div>
        )
    }
}

export default CommentApp