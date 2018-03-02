import React, { Component } from 'react';
import PropTypes from 'prop-types'

// 每条评论

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDelCom: PropTypes.func,
        index: PropTypes.number
    }
    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }
    componentWillMount() {
        this._updateTimeString()
        this.timer = setInterval(this._updateTimeString.bind(this), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟之前` : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    handleDeleteComment() {
        this.props.onDelCom(this.props.index)
    }
    render() {
        return (
            <div className="comment_wrapper">
                <div className="comment_user">
                    <span>{this.props.comment.username}</span>：
                </div>
                <p className="pragh">{this.props.comment.content}</p>
                <span className="comment_createdtime">{this.state.timeString}</span>
                <button className="del_content" onClick={this.handleDeleteComment.bind(this)}>删除</button>
            </div>
        )
    }
}
export default Comment