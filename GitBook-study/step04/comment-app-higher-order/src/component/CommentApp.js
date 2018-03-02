import React, { Component } from 'react';
import CommentInput from './CommentInput.js';
import CommentList from './CommentList.js';


class CommentApp extends Component {

    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount() {
        this._loadComments()
    }
    _loadComments() {
        let comments = localStorage.getItem('commentList')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }
    _saveComments(comments) {
        localStorage.setItem('commentList', JSON.stringify(comments))
    }
    handleSubmitComment(con) {
        // console.log(con);
        if (!con) return
        if (!con.username) return alert("请输入用户名")
        if (!con.content) return alert("请输入评价内容")
        const comments = this.state.comments
        comments.push(con)
        this.setState({ comments })
        this._saveComments(comments)
    }
    handleDelCom(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList onDelCom={this.handleDelCom.bind(this)} comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp