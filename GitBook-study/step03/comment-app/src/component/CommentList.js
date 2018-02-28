import React, { Component } from 'react';
import Comment from './Comment.js'

class CommentList extends Component {
    static defaultProps = {
        comments:[]
    }
    render(){
        // const comments = [
        //     {username: '你好发', content: 'working files是已打开的所有文件，如果此时点击右上角的分屏按钮，可以把文件放到对应的编辑区里。'},
        //     {username: 'Tomy', content: 'World'},
        //     {username: 'Lucy', content: '组件的划分没有特别明确的标准。划分组件的目的性是为了代码可复用性、可维护性。只要某个部分有可能复用到别的地方，你都可以把它抽离出来当成一个组件；或者把某一部分抽离出来对代码的组织和管理会带来帮助，你也可以毫不犹豫地把它抽离出来。'}
        //   ]
        return(
            <div className="list_wrapper">
                {this.props.comments.map( (item,i) => <Comment comment={item} key={i}/> )}
            </div>
        )
    }
}

export default CommentList