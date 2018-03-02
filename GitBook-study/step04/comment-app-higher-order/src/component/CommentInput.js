import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propsTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            content: '',
        }
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            // 1.0
            // const { username, content } = this.state
            // this.props.onSubmit({username,content})
            // const obj = this.state
            // this.props.onSubmit(obj.username+"----"+obj.content)
            // 2.0
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })

        }
        // this.setState({username:'',content: ''})
        this.setState({ content: '' })

    }

    // 用户名持久化
    // 私有方法都以'_'开头
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    handleUsernameBlur(e) {
        this._saveUsername(e.target.value)
    }


    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) this.setState({ username })
    }
    componentWillMount() {
        this._loadUsername()
    }

    componentDidMount() {
        // 自动聚焦
        this.textarea.focus()
        // this.input.focus()
    }

    render() {
        return (
            <div className="assess_wrapper">
                <div className="user">
                    <span className="username">用户名：</span>
                    <input type="text" className="input" onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                </div>
                <div className="container">
                    <span className="title">评论内容：</span>
                    <textarea className="textarea" ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} ></textarea>
                </div>
                <div className="submit">
                    <button className="submit_btn" onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput