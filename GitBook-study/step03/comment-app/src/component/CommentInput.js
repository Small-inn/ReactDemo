import React, { Component } from 'react';

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            content:''
        }
    }

    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const { username, content } = this.state
            this.props.onSubmit({username,content})
            // const obj = this.state
            // this.props.onSubmit(obj.username+"----"+obj.content)
        }
        // this.setState({username:'',content: ''})
        this.setState({content: ''})
    }

    render(){
        return(
            <div className="assess_wrapper">
                <div className="user">
                    <span className="username">用户名：</span>
                    <input type="text" className="input" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                </div> 
                <div className="container">
                    <span className="title">评论内容：</span>
                    <textarea className="textarea" value={this.state.content} onChange={this.handleContentChange.bind(this)} ></textarea>
                </div>
                <div className="submit">
                    <button className="submit_btn" onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput